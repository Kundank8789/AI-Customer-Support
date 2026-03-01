'use client';

export default function BillingPage() {
  const handlePortal = async () => {
    const customerId = 'STRIPE_CUSTOMER_ID'; // get from your org session/DB
    const res = await fetch('/api/stripe/portal', {
      method: 'POST',
      body: JSON.stringify({ customerId }),
      headers: { 'Content-Type': 'application/json' },
    });
    const { url } = await res.json();
    window.location.href = url;
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Billing & Subscription</h1>
      <p className="text-gray-600 mb-6">Manage your plan, payment method, and invoices.</p>
      <button
        onClick={handlePortal}
        className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition"
      >
        Manage Billing →
      </button>
    </div>
  );
}