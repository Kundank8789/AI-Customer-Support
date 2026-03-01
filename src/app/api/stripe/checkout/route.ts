import { stripe } from '@/src/lib/stripe';
import { NextRequest, NextResponse } from 'next/server';
import { PLANS } from '@/src/lib/plans';

export async function POST(req: NextRequest) {
  try {
    const { plan, orgId } = await req.json();

    const selectedPlan = PLANS[plan as keyof typeof PLANS];

    if (!selectedPlan) {
      return NextResponse.json({ error: 'Invalid plan' }, { status: 400 });
    }

    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      line_items: [
        { price: selectedPlan.priceId, quantity: 1 }
      ],
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard/billing?success=true`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/pricing`,
      metadata: { orgId },
    });

    return NextResponse.json({ url: session.url });

  } catch (error) {
    console.error('Stripe error:', error);
    return NextResponse.json(
      { error: 'Checkout failed', details: String(error) },
      { status: 500 }
    );
  }
}