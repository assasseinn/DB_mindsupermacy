import React from "react";

export default function TermsOfUse() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-3xl font-bold mb-6 text-accent">Terms of Use</h1>
      <div className="bg-gray-100 p-4 border-l-4 border-blue-500 mb-8">
        <strong>Effective:</strong> April 10, 2025
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-2">1. Account Requirements</h2>
        <ul className="list-disc list-inside">
          <li>Must provide valid email address</li>
          <li>One account per individual</li>
          <li>You're responsible for account security</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-2">2. License Grant</h2>
        <p className="mb-2">Your ₹199 purchase grants:</p>
        <ul className="list-disc list-inside">
          <li>Lifetime personal access to purchased content</li>
          <li>Non-transferable license</li>
          <li>No commercial redistribution rights</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-2">3. Prohibited Conduct</h2>
        <p className="mb-2">You agree not to:</p>
        <ul className="list-disc list-inside">
          <li>Share login credentials</li>
          <li>Reverse engineer our systems</li>
          <li>Use content for illegal purposes</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-2">4. Refund Process</h2>
        <p className="mb-2">See our Refund Policy for details</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-2">5. Modifications</h2>
        <p className="mb-2">We may update these terms with 30 days notice via email</p>
      </section>
    </div>
  );
}
