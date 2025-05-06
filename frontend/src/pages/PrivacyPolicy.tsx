import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-3xl font-bold mb-6 text-accent">Privacy Policy</h1>
      <div className="bg-gray-100 p-4 border-l-4 border-blue-500 mb-8">
        <strong>Last Updated:</strong> April 10, 2025
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-2">1. Information We Collect</h2>
        <p className="mb-2">When you purchase through Mindsupremacy, we collect:</p>
        <ul className="list-disc list-inside">
          <li><strong>Email Address:</strong> Used for login and course access delivery</li>
          <li><strong>Payment Data:</strong> Processed securely via Razorpay (we never store card details)</li>
          <li><strong>Learning Progress:</strong> Timestamps of completed chapters</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-2">2. How We Use Your Data</h2>
        <p className="mb-2">Your information helps us:</p>
        <ul className="list-disc list-inside">
          <li>Deliver purchased digital products</li>
          <li>Provide customer support</li>
          <li>Improve our course content (aggregated analytics only)</li>
          <li>Send important service notifications</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-2">3. Data Protection</h2>
        <p className="mb-2">We implement:</p>
        <ul className="list-disc list-inside">
          <li>SSL encryption for all data transfers</li>
          <li>Regular security audits</li>
          <li>Strict access controls</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-2">4. Third-Party Services</h2>
        <p className="mb-2">We use:</p>
        <ul className="list-disc list-inside">
          <li><strong>Razorpay:</strong> PCI-DSS compliant payment processing</li>
          <li><strong>Google Analytics:</strong> Anonymized usage data</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-2">5. Your Rights</h2>
        <p className="mb-2">You may:</p>
        <ul className="list-disc list-inside">
          <li>Request access to your data</li>
          <li>Ask for corrections</li>
          <li>Request deletion (except transaction records required by law)</li>
        </ul>
      </section>

      <p className="mt-6">
        Contact: <a href="mailto:privacy@mindsupremacy.in" className="text-blue-600 underline">privacy@mindsupremacy.in</a>
      </p>
    </div>
  );
}
