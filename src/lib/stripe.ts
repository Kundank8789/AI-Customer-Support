import Stripe from 'stripe';

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export const PLANS = {
  free: {
    name: 'Free',
    priceId: process.env.STRIPE_FREE_PRICE_ID!,
    messageLimit: 100,
  },
  pro: {
    name: 'Pro',
    priceId: process.env.STRIPE_PRO_PRICE_ID!,
    messageLimit: 2000,
  },
  enterprise: {
    name: 'Enterprise',
    priceId: process.env.STRIPE_ENTERPRISE_PRICE_ID!,
    messageLimit: Infinity,
  },
};