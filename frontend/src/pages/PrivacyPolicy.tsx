import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black text-white py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-accent">Privacy Policy</h1>
        
        <div className="space-y-8">
          <section className="bg-secondary/10 p-6 rounded-xl border border-accent/20">
            <h2 className="text-2xl font-semibold mb-4 text-accent">1. Information We Collect</h2>
            <div className="space-y-4 text-white/80">
              <p>We collect information that you provide directly to us, including:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Email address and password for account creation</li>
                <li>Payment information for course purchases</li>
                <li>Communication preferences</li>
              </ul>
            </div>
          </section>

          <section className="bg-secondary/10 p-6 rounded-xl border border-accent/20">
            <h2 className="text-2xl font-semibold mb-4 text-accent">2. How We Use Your Information</h2>
            <div className="space-y-4 text-white/80">
              <p>We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide and maintain our services</li>
                <li>Process your payments</li>
                <li>Send you important updates about your account</li>
                <li>Improve our services and user experience</li>
              </ul>
            </div>
          </section>

          <section className="bg-secondary/10 p-6 rounded-xl border border-accent/20">
            <h2 className="text-2xl font-semibold mb-4 text-accent">3. Data Security</h2>
            <div className="space-y-4 text-white/80">
              <p>We implement appropriate security measures to protect your personal information, including:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Encryption of sensitive data</li>
                <li>Regular security assessments</li>
                <li>Secure payment processing</li>
              </ul>
            </div>
          </section>

          <section className="bg-secondary/10 p-6 rounded-xl border border-accent/20">
            <h2 className="text-2xl font-semibold mb-4 text-accent">4. Your Rights</h2>
            <div className="space-y-4 text-white/80">
              <p>You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Access your personal information</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
              </ul>
            </div>
          </section>

          <section className="bg-secondary/10 p-6 rounded-xl border border-accent/20">
            <h2 className="text-2xl font-semibold mb-4 text-accent">5. Contact Us</h2>
            <div className="space-y-4 text-white/80">
              <p>If you have any questions about this Privacy Policy, please contact us at:</p>
              <p className="text-accent">support@mindsupremacy.com</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
