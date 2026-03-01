'use client';

export default function PricingPage() {

  const handleCheckout = async (plan: string) => {
    const res = await fetch('/api/stripe/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        plan,
        orgId: 'YOUR_ORG_ID',
      }),
    });

    const data = await res.json();
    console.log('Checkout response:', data);

    if (!data.url) {
      alert(data.error || 'Checkout failed');
      return;
    }

    window.location.assign(data.url);
  };

  const plans = [
    { key: 'free', name: 'Free', messageLimit: 100 },
    { key: 'pro', name: 'Pro', messageLimit: 2000 },
    { key: 'enterprise', name: 'Enterprise', messageLimit: 'Unlimited' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <h1 className="text-4xl font-bold text-center mb-12">
        Choose Your Plan
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {plans.map((plan) => (
          <div key={plan.key} className="bg-white rounded-2xl shadow-md p-8 flex flex-col gap-4 border hover:border-black transition">
            <h2 className="text-2xl font-bold">{plan.name}</h2>
            <p className="text-gray-500">
              {plan.messageLimit} messages/mo
            </p>

            <button
              onClick={() => handleCheckout(plan.key)}
              className="mt-auto bg-black text-white py-3 rounded-xl font-medium hover:bg-gray-800 transition"
            >
              Get Started
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}