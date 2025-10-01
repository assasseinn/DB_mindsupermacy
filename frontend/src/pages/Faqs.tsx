import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

type FaqItem = {
  question: string;
  answer: string;
};

type FaqSection = {
  title: string;
  summary: string;
  items: FaqItem[];
};

const faqSections: FaqSection[] = [
  {
    title: "Enrollment Basics",
    summary:
      "Understand how MindSupremacy onboards new students and what happens immediately after you reserve your seat.",
    items: [
      {
        question: "When does my access begin?",
        answer:
          "You receive your login credentials instantly after payment. A concierge email follows with your onboarding call schedule within 24 hours.",
      },
      {
        question: "Is there a waiting list if seats are full?",
        answer:
          "Yes. Join the waitlist and we will notify you as soon as a new cohort opens. Priority is given to applicants who complete the readiness form.",
      },
      {
        question: "Do I need prior experience with mindset or leadership work?",
        answer:
          "No prerequisites are required. The curriculum meets you where you are and the coaches calibrate the rituals for both beginners and seasoned practitioners.",
      },
    ],
  },
  {
    title: "Program Experience",
    summary:
      "Dive into what the 12-week transformation looks like inside the MindSupremacy vault.",
    items: [
      {
        question: "How is the curriculum delivered?",
        answer:
          "Core lessons unlock in weekly chapters inside the member portal. Live integration labs happen twice a week and recordings stay available for lifetime review.",
      },
      {
        question: "Can I learn at my own pace?",
        answer:
          "Absolutely. While we recommend following the suggested weekly cadence, all content remains unlocked after release so you can revisit modules whenever needed.",
      },
      {
        question: "What community support will I receive?",
        answer:
          "You gain access to a private Circle community, accountability pods, and a dedicated success coach who checks in with you every Friday.",
      },
    ],
  },
  {
    title: "Outcomes & Guarantees",
    summary:
      "Clarify the breakthroughs we stand behind and the evidence we track for every cohort member.",
    items: [
      {
        question: "What results can I realistically expect?",
        answer:
          "Graduates report clarity in decision-making, renewed creative drive, and measurable jumps in revenue or leadership confidence within 60 days of completion.",
      },
      {
        question: "Do you offer a guarantee?",
        answer:
          "Yes. Complete all required rituals and live sessions. If you do not experience a tangible shift in the goals you outlined, contact us within 30 days for concierge support and a tailored recovery plan.",
      },
      {
        question: "Can alumni retake sessions?",
        answer:
          "Alumni receive lifetime access to updated modules and can join quarterly mastery refreshers at no additional cost.",
      },
    ],
  },
  {
    title: "Investments & Billing",
    summary:
      "All the financial clarity you need before committing to the MindSupremacy experience.",
    items: [
      {
        question: "Which payment methods do you accept?",
        answer:
          "We securely process UPI, major credit cards, debit cards, and net banking via our Cashfree integration.",
      },
      {
        question: "Do you provide installment plans?",
        answer:
          "Yes. Choose a one-time payment or divide tuition into two installments. Reach out to admissions for enterprise cohort pricing.",
      },
      {
        question: "How do I access invoices or GST details?",
        answer:
          "Visit the Payment History page inside your account to download invoices. For customised billing updates, email support with your order ID.",
      },
    ],
  },
  {
    title: "Support & Logistics",
    summary:
      "We ensure you never feel stuck—here is how to reach us before, during, and after your journey.",
    items: [
      {
        question: "Who do I contact if I miss a live session?",
        answer:
          "Message your success coach or email support@mindsupremacy.com. They will share the replay and guide you on catching up without overwhelm.",
      },
      {
        question: "Can my team join the same account?",
        answer:
          "Each enrolment is for a single participant. For teams, request a private cohort so every member receives personalised assessments and coaching.",
      },
      {
        question: "How fast does the team respond?",
        answer:
          "Our concierge operates Monday through Friday, 9:00 AM – 7:00 PM IST. Expect responses within 12 hours on business days.",
      },
    ],
  },
];

export default function Faqs() {
  return (
    <div className="min-h-screen bg-neural-gradient text-white">
      <Header />

      <main className="flex flex-col items-center pb-24">
        <section className="relative w-full overflow-hidden border-b border-accent/25 bg-[linear-gradient(140deg,_rgba(12,9,6,0.95)_0%,_rgba(26,18,10,0.9)_60%,_rgba(12,9,6,0.93)_100%)] shadow-[0_32px_72px_rgba(0,0,0,0.6)]">
          <div className="absolute inset-0 opacity-25">
            <div className="absolute left-12 top-20 h-48 w-48 rounded-full border border-accent/25 blur" />
            <div className="absolute right-16 top-1/2 h-36 w-36 -translate-y-1/2 rounded-full border border-accent/15" />
          </div>

          <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 py-20 text-center sm:px-10">
            <span className="rounded-full border border-accent/35 bg-black/40 px-4 py-1 text-xs font-semibold uppercase tracking-[0.55em] text-accent/75">
              MindSupremacy FAQ Hub
            </span>
            <h1 className="text-responsive-3xl font-extrabold text-accent">
              Answers to the Questions Visionaries Ask Before They Transform
            </h1>
            <p className="max-w-3xl text-responsive-base text-white/75">
              Explore the most common inquiries about the curriculum, coaching experience, and support structure so you can enrol with certainty.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/payment"
                className="rounded-full border border-accent/45 bg-accent/20 px-6 py-3 text-xs font-semibold uppercase tracking-[0.4em] text-accent transition-all duration-300 hover:bg-accent/30"
              >
                Secure Your Seat
              </Link>
              <Link
                to="/contact"
                className="rounded-full border border-accent/20 bg-black/45 px-6 py-3 text-xs font-semibold uppercase tracking-[0.4em] text-white/80 transition-all duration-300 hover:border-accent/40 hover:text-accent"
              >
                Speak With Our Team
              </Link>
            </div>
          </div>
        </section>

        <section className="container mx-auto mt-16 max-w-6xl px-6 sm:px-10">
          <div className="grid gap-8">
            {faqSections.map(section => (
              <article
                key={section.title}
                className="overflow-hidden rounded-3xl border border-accent/20 bg-black/35 shadow-[0_24px_56px_rgba(0,0,0,0.5)]"
              >
                <div className="border-b border-accent/15 bg-[linear-gradient(135deg,_rgba(179,141,77,0.16)_0%,_rgba(12,9,6,0.92)_70%)] px-6 py-6 sm:px-10">
                  <h2 className="text-responsive-2xl font-semibold text-accent">{section.title}</h2>
                  <p className="mt-2 max-w-3xl text-sm text-white/70">{section.summary}</p>
                </div>
                <div className="divide-y divide-accent/10">
                  {section.items.map(item => (
                    <div
                      key={item.question}
                      className="px-6 py-6 transition-colors duration-300 hover:bg-white/5 sm:px-10"
                    >
                      <h3 className="text-lg font-semibold text-accent">
                        {item.question}
                      </h3>
                      <p className="mt-3 text-white/70">
                        {item.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="container mx-auto mt-16 max-w-4xl px-6 sm:px-10">
          <div className="relative overflow-hidden rounded-3xl border border-accent/20 bg-[linear-gradient(130deg,_rgba(179,141,77,0.14)_0%,_rgba(12,9,6,0.9)_70%,_rgba(179,141,77,0.12)_100%)] p-10 text-center shadow-[0_28px_56px_rgba(0,0,0,0.55)]">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute left-1/2 top-0 h-36 w-36 -translate-x-1/2 rounded-full border border-accent/25 blur-[2px]" />
            </div>
            <div className="relative space-y-4">
              <h2 className="text-responsive-2xl text-accent">
                Still Looking for Something Specific?
              </h2>
              <p className="text-responsive-sm text-white/75">
                We are happy to dive deeper into your unique goals. Share context with our Student Success Desk and we will respond within 12 hours.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="mailto:support@mindsupremacy.com?subject=Need%20more%20support"
                  className="rounded-full border border-accent/45 bg-accent/20 px-6 py-3 text-xs font-semibold uppercase tracking-[0.4em] text-accent transition-all duration-300 hover:bg-accent/30"
                >
                  Email Support
                </a>
                <Link
                  to="/contact"
                  className="rounded-full border border-accent/20 bg-black/45 px-6 py-3 text-xs font-semibold uppercase tracking-[0.4em] text-white/80 transition-all duration-300 hover:border-accent/40 hover:text-accent"
                >
                  Talk to Admissions
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
