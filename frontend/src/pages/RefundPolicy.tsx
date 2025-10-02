import React from "react";

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-black text-white py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-accent">Refund Policy</h1>
        
        <div className="space-y-8">
          <section className="bg-secondary/10 p-6 rounded-xl border border-accent/20">
            <h2 className="text-2xl font-semibold mb-4 text-accent">1. 15-Day Money-Back Guarantee</h2>
            <div className="space-y-4 text-white/80">
              <p>We offer a 15-day money-back guarantee for our course. If you're not satisfied with your purchase, you can request a full refund within 15 days of your purchase date.</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>No questions asked</li>
                <li>Full refund of your purchase amount</li>
                <li>Processed within 5-7 business days</li>
                <li>Original payment method refund</li>
              </ul>
            </div>
          </section>

          <section className="bg-secondary/10 p-6 rounded-xl border border-accent/20">
            <h2 className="text-2xl font-semibold mb-4 text-accent">2. How to Request a Refund</h2>
            <div className="space-y-4 text-white/80">
              <p>To request a refund:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Email us at support@mindsupremacy.com</li>
                <li>Include your order number</li>
                <li>Specify the reason for refund</li>
                <li>Provide your payment details</li>
              </ul>
            </div>
          </section>

          <section className="bg-secondary/10 p-6 rounded-xl border border-accent/20">
            <h2 className="text-2xl font-semibold mb-4 text-accent">3. Refund Processing</h2>
            <div className="space-y-4 text-white/80">
              <p>Our refund process:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Review within 24-48 hours</li>
                <li>Approval for eligible requests</li>
                <li>Processing within 5-7 business days</li>
                <li>Email confirmation upon completion</li>
              </ul>
            </div>
          </section>

          <section className="bg-secondary/10 p-6 rounded-xl border border-accent/20">
            <h2 className="text-2xl font-semibold mb-4 text-accent">4. Exceptions</h2>
            <div className="space-y-4 text-white/80">
              <p>Refunds may not be available if:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Request is made after 15 days</li>
                <li>Course content has been downloaded</li>
                <li>Account shows signs of abuse</li>
                <li>Terms of service have been violated</li>
              </ul>
            </div>
          </section>

          <section className="bg-secondary/10 p-6 rounded-xl border border-accent/20">
            <h2 className="text-2xl font-semibold mb-4 text-accent">5. Contact Us</h2>
            <div className="space-y-4 text-white/80">
              <p>For any questions about our refund policy, please contact us at:</p>
              <p className="text-accent">support@mindsupremacy.com</p>
              <p className="text-sm mt-2">We aim to respond to all inquiries within 24 hours.</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
