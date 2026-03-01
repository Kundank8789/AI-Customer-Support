import { stripe } from '@/src/lib/stripe';
import { NextRequest, NextResponse } from 'next/server';
import { headers } from 'next/headers';
import connectDb from '@/src/lib/db';
import Settings from '@/src/model/settings.model';

export async function POST(req: NextRequest) {
  const body = await req.text();
  
  const headersList = await headers();
  const sig = headersList.get('stripe-signature')!;

  let event;
  try {
    event = stripe.webhooks.constructEvent(
      body, sig, process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }

  // ✅ Fix: use connectDb() + Mongoose model instead of clientPromise + .db()
  await connectDb();

  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object;
      const orgId = session.metadata?.orgId;

      const lineItems = await stripe.checkout.sessions.listLineItems(session.id);
      const priceId = lineItems.data[0]?.price?.id;

      const planMap: Record<string, string> = {
        [process.env.STRIPE_FREE_PRICE_ID!]: 'free',
        [process.env.STRIPE_PRO_PRICE_ID!]: 'pro',
        [process.env.STRIPE_ENTERPRISE_PRICE_ID!]: 'enterprise',
      };

      await Settings.findOneAndUpdate(
        { ownerId: orgId },
        {
          $set: {
            plan: planMap[priceId!] || 'free',
            stripeCustomerId: session.customer,
            stripeSubscriptionId: session.subscription,
          },
        }
      );
      break;
    }

    case 'invoice.paid': {
      const invoice = event.data.object;
      await Settings.findOneAndUpdate(
        { stripeCustomerId: invoice.customer },
        { $set: { messagesUsed: 0 } }
      );
      break;
    }

    case 'customer.subscription.deleted': {
      const subscription = event.data.object;
      await Settings.findOneAndUpdate(
        { stripeSubscriptionId: subscription.id },
        { $set: { plan: 'free', stripeSubscriptionId: null } }
      );
      break;
    }
  }

  return NextResponse.json({ received: true });
}