import React from "react";

export default function TermsOfUse() {
  return (
    <div className="min-h-screen bg-black text-white py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-accent">Terms of Use</h1>
        
        <div className="space-y-8">
          <section className="bg-secondary/10 p-6 rounded-xl border border-accent/20">
            <h2 className="text-2xl font-semibold mb-4 text-accent">1. Account Requirements</h2>
            <div className="space-y-4 text-white/80">
              <p>To access our services, you must:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide a valid email address</li>
                <li>Create a unique password</li>
                <li>Maintain one account per individual</li>
                <li>Keep your account credentials secure</li>
              </ul>
            </div>
          </section>

          <section className="bg-secondary/10 p-6 rounded-xl border border-accent/20">
            <h2 className="text-2xl font-semibold mb-4 text-accent">2. License Grant</h2>
            <div className="space-y-4 text-white/80">
              <p>Your purchase grants you:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Lifetime personal access to purchased content</li>
                <li>Non-transferable license for personal use</li>
                <li>Access to future updates of the course</li>
                <li>No commercial redistribution rights</li>
              </ul>
            </div>
          </section>

          <section className="bg-secondary/10 p-6 rounded-xl border border-accent/20">
            <h2 className="text-2xl font-semibold mb-4 text-accent">3. Prohibited Conduct</h2>
            <div className="space-y-4 text-white/80">
              <p>You agree not to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Share your login credentials</li>
                <li>Record or reproduce course content</li>
                <li>Use content for commercial purposes</li>
                <li>Attempt to reverse engineer our systems</li>
              </ul>
            </div>
          </section>

          <section className="bg-secondary/10 p-6 rounded-xl border border-accent/20">
            <h2 className="text-2xl font-semibold mb-4 text-accent">4. Payment Terms</h2>
            <div className="space-y-4 text-white/80">
              <p>Payment and refund terms:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>All payments are processed securely</li>
                <li>Prices are subject to change</li>
                <li>Refunds are subject to our Refund Policy</li>
                <li>All amounts are in Indian Rupees (₹)</li>
              </ul>
            </div>
          </section>

          <section className="bg-secondary/10 p-6 rounded-xl border border-accent/20">
            <h2 className="text-2xl font-semibold mb-4 text-accent">5. Modifications</h2>
            <div className="space-y-4 text-white/80">
              <p>We reserve the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Update these terms with 30 days notice</li>
                <li>Modify course content and features</li>
                <li>Suspend accounts for policy violations</li>
                <li>Update pricing with prior notice</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
