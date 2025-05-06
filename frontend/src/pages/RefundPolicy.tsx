import React from "react";

export default function RefundPolicy() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-3xl font-bold mb-6 text-accent">Refund Policy</h1>
      <div className="bg-gray-100 p-4 border-l-4 border-blue-500 mb-8">
        <strong>Last Updated:</strong> April 10, 2025
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-2">1. Digital Product Policy</h2>
        <p className="mb-2">Due to the nature of digital content:</p>
        <ul className="list-disc list-inside">
          <li>All sales are typically final</li>
          <li>We offer discretionary refunds within 7 days if:</li>
          <ul className="list-disc list-inside ml-6">
            <li>Content is demonstrably defective</li>
            <li>You haven't accessed more than 20% of materials</li>
          </ul>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-2">2. How to Request</h2>
        <p className="mb-2">Email <a href="mailto:support@mindsupremacy.in" className="text-blue-600 underline">support@mindsupremacy.in</a> with:</p>
        <ul className="list-disc list-inside">
          <li>Your purchase email</li>
          <li>Razorpay transaction ID</li>
          <li>Reason for request</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-2">3. Processing</h2>
        <ul className="list-disc list-inside">
          <li>5 business days for review</li>
          <li>Approved refunds processed via original payment method</li>
          <li>₹50 processing fee may apply</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-2">4. Exceptions</h2>
        <p className="mb-2">No refunds if:</p>
        <ul className="list-disc list-inside">
          <li>You've downloaded all materials</li>
          <li>Request is made after 7 days</li>
          <li>Account shows abuse patterns</li>
        </ul>
      </section>
    </div>
  );
}
