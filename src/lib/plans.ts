export const PLANS = {
  free: {
    name: "Free",
    priceId: process.env.STRIPE_FREE_PRICE_ID!,
    messageLimit: 100,
  },
  pro: {
    name: "Pro",
    priceId: process.env.STRIPE_PRO_PRICE_ID!,
    messageLimit: 2000,
  },
  enterprise: {
    name: "Enterprise",
    priceId: process.env.STRIPE_ENTERPRISE_PRICE_ID!,
    messageLimit: Infinity,
  },
};