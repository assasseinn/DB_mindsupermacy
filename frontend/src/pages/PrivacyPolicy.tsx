import React from "react";

const infoWeCollect = [
  "Account details such as your name, email address, and secure password",
  "Billing and payment information required to process course purchases",
  "Communication preferences and any messages you send to our support team",
  "Technical data including IP address, browser type, and usage patterns that help us keep the site reliable",
  "Cookie identifiers that remember your preferences and support safer sessions"
];

const howWeUseInformation = [
  "Provide, personalise, and maintain the services you request",
  "Process transactions, confirm payments, and deliver relevant course access",
  "Respond to support enquiries and keep you informed about important updates",
  "Monitor site performance, improve our offerings, and develop new features",
  "Protect the platform, prevent fraud, and enforce our terms of use"
];

const protections = [
  "Physical safeguards such as secure facilities and controlled access to systems",
  "Electronic protections including encryption, network monitoring, and secure payment gateways",
  "Managerial controls that limit employee access to personal data to a need-to-know basis",
  "Regular reviews of our procedures to keep pace with evolving security best practices"
];

const cookieCategories = [
  {
    title: "Essential",
    description:
      "Required to run the website reliably, support secure login, and enable core functionality."
  },
  {
    title: "Functional",
    description:
      "Remember your settings and preferences so the experience feels familiar every time you return."
  },
  {
    title: "Analytics",
    description:
      "Help us understand how visitors use the site so we can improve navigation, content, and overall performance."
  },
  {
    title: "Advertising",
    description:
      "Allow us and trusted partners to show relevant offers on our site and elsewhere, based on how you interact with our content."
  }
];

const cookieManagementSteps = [
  "Open your browser settings and locate the Privacy or Security section",
  "Review stored cookies and choose whether to delete specific entries or clear them all",
  "Adjust cookie permissions to accept, block, or prompt for cookies in the future",
  "Repeat these steps on each browser or device you use to access the site"
];

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black text-white py-12">
      <div className="container mx-auto px-4 max-w-4xl space-y-10">
        <header className="space-y-4">
          <h1 className="text-4xl font-bold text-accent">Privacy Policy</h1>
          <p className="text-white/80 leading-relaxed">
            We respect, safeguard, and are committed to protecting your privacy. Publishing, selling, or
            renting personal data to any third party without consent is against our ethics, and this
            policy explains exactly how we uphold that promise.
          </p>
        </header>

        <section className="bg-secondary/10 p-6 rounded-xl border border-accent/20 space-y-4">
          <h2 className="text-2xl font-semibold text-accent">Scope Of This Policy</h2>
          <p className="text-white/80 leading-relaxed">
            The practices described here apply to services available under our domain and
            subdomains. By visiting or using the site, you consent to the collection and use of
            information as outlined. If you do not agree with these terms, please discontinue use of
            the site. When this policy changes, ongoing access signifies acceptance of the updated
            terms.
          </p>
        </section>

        <section className="bg-secondary/10 p-6 rounded-xl border border-accent/20 space-y-4">
          <h2 className="text-2xl font-semibold text-accent">Third-Party Links</h2>
          <p className="text-white/80 leading-relaxed">
            Our site may reference or link to services operated by other organisations. Their privacy
            practices are not governed by this policy, and we are not responsible for the information
            you provide on those websites. Always review the privacy notices of third-party services
            before sharing personal information with them.
          </p>
        </section>

        <section className="bg-secondary/10 p-6 rounded-xl border border-accent/20 space-y-4">
          <h2 className="text-2xl font-semibold text-accent">Your Consent Matters</h2>
          <p className="text-white/80 leading-relaxed">
            This policy is designed to help you make informed choices about sharing your information.
            By accessing the site, creating an account, or accepting the user agreement, you consent to
            our use and disclosure of personal data consistent with this policy. You acknowledge that
            you volunteer this information, and choosing not to share certain details may limit the
            services we are able to provide. You may withdraw consent at any time by closing your
            account or contacting us for assistance.
          </p>
        </section>

        <section className="bg-secondary/10 p-6 rounded-xl border border-accent/20 space-y-4">
          <h2 className="text-2xl font-semibold text-accent">Privacy Guarantee</h2>
          <div className="text-white/80 space-y-3">
            <p>
              We will never sell or rent your personal information to third parties for marketing
              purposes without your explicit permission. Only trained team members who need access to
              data in order to perform their duties receive it, and any misuse triggers disciplinary
              action, including potential termination and legal consequences.
            </p>
            <p>
              From time to time, we may share aggregated statistics—such as visit counts or popular
              courses—with partners. These summaries never include information that could identify you
              personally.
            </p>
          </div>
        </section>

        <section className="bg-secondary/10 p-6 rounded-xl border border-accent/20 space-y-4">
          <h2 className="text-2xl font-semibold text-accent">Information We Collect</h2>
          <p className="text-white/80 leading-relaxed">
            We collect information to operate efficiently and deliver the best possible service. This
            includes details you provide voluntarily and technical data gathered as part of normal site
            operations.
          </p>
          <ul className="list-disc list-inside space-y-2 text-white/80">
            {infoWeCollect.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="bg-secondary/10 p-6 rounded-xl border border-accent/20 space-y-4">
          <h2 className="text-2xl font-semibold text-accent">How We Use Your Information</h2>
          <p className="text-white/80 leading-relaxed">
            Personal information is primarily used to process your orders and deliver high-quality
            educational experiences. Additional uses include:
          </p>
          <ul className="list-disc list-inside space-y-2 text-white/80">
            {howWeUseInformation.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="bg-secondary/10 p-6 rounded-xl border border-accent/20 space-y-4">
          <h2 className="text-2xl font-semibold text-accent">Data Protection &amp; Security</h2>
          <div className="text-white/80 space-y-3">
            <p>
              Keeping your information safe is a shared responsibility. We implement layered
              safeguards to preserve confidentiality and integrity, and we continually refine these
              measures as new risks emerge.
            </p>
            <ul className="list-disc list-inside space-y-2">
              {protections.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>
              We also monitor server health, use IP addresses to diagnose potential issues, and maintain
              logs that help us detect suspicious activity quickly.
            </p>
          </div>
        </section>

        <section className="bg-secondary/10 p-6 rounded-xl border border-accent/20 space-y-5">
          <h2 className="text-2xl font-semibold text-accent">Cookies &amp; Tracking Technologies</h2>
          <p className="text-white/80 leading-relaxed">
            Cookies are small text files stored on your device that make your experience smoother and
            more relevant. Some cookies disappear when you close your browser (session cookies), while
            others remain until they expire or you remove them manually (persistent cookies).
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {cookieCategories.map(({ title, description }) => (
              <div
                key={title}
                className="bg-black/40 border border-accent/10 rounded-lg p-4 text-white/80"
              >
                <h3 className="text-lg font-semibold text-accent mb-2">{title}</h3>
                <p className="leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
          <p className="text-white/80 leading-relaxed">
            Some features are only available with cookies enabled. You are free to decline cookies
            through your browser settings, though doing so may impact certain site functions. Third
            parties may also place cookies when you interact with embedded content; we limit this to
            trusted partners and require adherence to our standards. We may combine cookie insights with
            information supplied by validated partners to deliver advertising that remains aligned with
            our policies.
          </p>
        </section>

        <section className="bg-secondary/10 p-6 rounded-xl border border-accent/20 space-y-4">
          <h2 className="text-2xl font-semibold text-accent">Managing Cookies</h2>
          <p className="text-white/80 leading-relaxed">
            Your browser gives you control over how cookies are stored. The steps below are similar to
            those found in Google Chrome and may vary slightly in other browsers:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-white/80">
            {cookieManagementSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <p className="text-white/80 leading-relaxed">
            You can also explore additional privacy and security controls under the same settings menu
            to fine-tune tracking and permissions across sites.
          </p>
        </section>

        <section className="bg-secondary/10 p-6 rounded-xl border border-accent/20 space-y-4">
          <h2 className="text-2xl font-semibold text-accent">Contact Us</h2>
          <p className="text-white/80 leading-relaxed">
            Questions, requests, or feedback about this Privacy Policy are always welcome. Reach out to
            our team at <span className="text-accent">support@mindsupremacy.com</span> and we will be
            happy to help.
          </p>
        </section>
      </div>
    </div>
  );
}
