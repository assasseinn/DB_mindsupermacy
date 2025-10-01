import React, { FormEvent } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const contactOptions = [
  {
    title: "Admissions & Enrollment",
    email: "admissions@mindsupremacy.com",
    summary:
      "Questions about joining the MindSupremacy experience, tuition plans, or group enrollments.",
    responseTime: "Replies within 1 business day",
  },
  {
    title: "Student Success Desk",
    email: "support@mindsupremacy.com",
    summary:
      "Assistance for current students on curriculum access, accountability rituals, or billing updates.",
    responseTime: "Replies within a few hours",
  },
  {
    title: "Partnerships & Media",
    email: "alliance@mindsupremacy.com",
    summary:
      "Collaborations, speaking requests, and research opportunities with our faculty and founder team.",
    responseTime: "Replies within 2 business days",
  },
];

const officeDetails = [
  {
    label: "Team availability",
    value: "Monday to Friday, 9:00 AM – 7:00 PM IST",
  },
  {
    label: "WhatsApp concierge",
    value: "+91 900 000 4321",
  },
  {
    label: "Preferred response",
    value: "We respond fastest to email or the form below.",
  },
  {
    label: "Community hub",
    value: "Members-only sessions hosted weekly in the Supremacy Vault.",
  },
];

const quickFAQs = [
  {
    topic: "How soon can I start after enrolling?",
    detail:
      "You receive access credentials immediately after payment is confirmed and our team schedules your onboarding call within 24 hours.",
  },
  {
    topic: "Do you offer corporate cohorts?",
    detail:
      "Yes. We facilitate private intensives and customized tracks for leadership teams. Mention your organisation size in your message and we will follow up with a proposal.",
  },
  {
    topic: "Where can I access invoices or receipts?",
    detail:
      "Log in to the member portal and visit Payment History. If you need changes, reach out to the Student Success Desk with your order ID.",
  },
];

export default function Contact() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name")?.toString() ?? "";
    const email = formData.get("email")?.toString() ?? "";
    const topic = formData.get("topic")?.toString() ?? "General";
    const message = formData.get("message")?.toString() ?? "";

    const subject = encodeURIComponent(`[Contact] ${topic} - ${name}`.trim());
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nTopic: ${topic}\n\n${message}`.trim(),
    );

    if (typeof window !== "undefined") {
      window.location.href = `mailto:support@mindsupremacy.com?subject=${subject}&body=${body}`;
    }

    event.currentTarget.reset();
  };

  return (
    <div className="min-h-screen bg-neural-gradient text-white">
      <Header />

      <main className="flex flex-col items-center pb-24">
        <section className="relative w-full overflow-hidden border-b border-accent/25 bg-[linear-gradient(145deg,_rgba(10,8,5,0.93)_0%,_rgba(27,18,11,0.9)_70%,_rgba(10,8,5,0.92)_100%)] shadow-[0_30px_70px_rgba(0,0,0,0.65)]">
          <div className="absolute inset-0 opacity-25">
            <div className="absolute left-8 top-24 h-48 w-48 rounded-full border border-accent/25 blur-[2px]" />
            <div className="absolute right-12 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full border border-accent/15" />
          </div>

          <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 py-20 text-center sm:px-10">
            <span className="rounded-full border border-accent/35 bg-black/40 px-4 py-1 text-xs font-semibold uppercase tracking-[0.55em] text-accent/75">
              Contact MindSupremacy
            </span>
            <h1 className="text-responsive-3xl font-extrabold text-accent">
              We Are Ready to Help You Lead From Your Highest Self
            </h1>
            <p className="max-w-3xl text-responsive-base text-white/75">
              Whether you are exploring enrollment, already inside the experience, or representing a strategic partner, our concierge team will guide you to the next best step.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:support@mindsupremacy.com"
                className="rounded-full border border-accent/50 bg-accent/15 px-6 py-3 text-xs font-semibold uppercase tracking-[0.4em] text-accent transition-all duration-300 hover:bg-accent/25"
              >
                Email Us Directly
              </a>
              <Link
                to="/course"
                className="rounded-full border border-accent/25 bg-black/45 px-6 py-3 text-xs font-semibold uppercase tracking-[0.4em] text-white/80 transition-all duration-300 hover:border-accent/40 hover:text-accent"
              >
                Review The Course
              </Link>
            </div>
          </div>
        </section>

        <section className="container mx-auto max-w-5xl px-6 py-16 sm:px-10">
          <div className="grid gap-6 md:grid-cols-3">
            {contactOptions.map(option => (
              <article
                key={option.title}
                className="rounded-3xl border border-accent/25 bg-black/40 p-6 shadow-[0_18px_36px_rgba(0,0,0,0.45)] transition-transform duration-300 hover:-translate-y-1 hover:border-accent/45"
              >
                <h2 className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-accent">
                  {option.title}
                </h2>
                <p className="mb-4 text-xs text-white/70">{option.summary}</p>
                <a
                  href={`mailto:${option.email}`}
                  className="inline-flex items-center gap-2 rounded-full border border-accent/35 bg-black/30 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-accent transition-all duration-300 hover:bg-accent/20"
                >
                  {option.email}
                </a>
                <p className="mt-4 text-[11px] uppercase tracking-[0.3em] text-white/45">
                  {option.responseTime}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="container mx-auto max-w-5xl px-6 pb-16 sm:px-10">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-3xl border border-accent/25 bg-black/45 p-8 shadow-[0_24px_44px_rgba(0,0,0,0.5)]">
              <h2 className="mb-2 text-responsive-2xl text-accent">Send Us a Message</h2>
              <p className="mb-8 text-responsive-sm text-white/70">
                Share a few details and we will route your message to the right strategist. You will receive a confirmation email instantly and hear back once a specialist has reviewed your note.
              </p>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="flex flex-col gap-2 text-sm uppercase tracking-[0.25em] text-white/60">
                    Full Name
                    <input
                      required
                      type="text"
                      name="name"
                      placeholder="Jordan Reyes"
                      className="rounded-xl border border-accent/20 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/35 focus:border-accent/50 focus:outline-none focus:ring-2 focus:ring-accent/30"
                    />
                  </label>
                  <label className="flex flex-col gap-2 text-sm uppercase tracking-[0.25em] text-white/60">
                    Email
                    <input
                      required
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      className="rounded-xl border border-accent/20 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/35 focus:border-accent/50 focus:outline-none focus:ring-2 focus:ring-accent/30"
                    />
                  </label>
                </div>
                <label className="flex flex-col gap-2 text-sm uppercase tracking-[0.25em] text-white/60">
                  Topic
                  <select
                    name="topic"
                    className="rounded-xl border border-accent/20 bg-black/30 px-4 py-3 text-sm text-white focus:border-accent/50 focus:outline-none focus:ring-2 focus:ring-accent/30"
                    defaultValue="Admissions Inquiry"
                  >
                    <option className="bg-black text-white" value="Admissions Inquiry">
                      Admissions Inquiry
                    </option>
                    <option className="bg-black text-white" value="Current Student Support">
                      Current Student Support
                    </option>
                    <option className="bg-black text-white" value="Partnership or Media">
                      Partnership or Media
                    </option>
                    <option className="bg-black text-white" value="Other">
                      Other
                    </option>
                  </select>
                </label>
                <label className="flex flex-col gap-2 text-sm uppercase tracking-[0.25em] text-white/60">
                  Message
                  <textarea
                    required
                    name="message"
                    rows={5}
                    placeholder="Share any context that will help us respond with precision."
                    className="rounded-xl border border-accent/20 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/35 focus:border-accent/50 focus:outline-none focus:ring-2 focus:ring-accent/30"
                  />
                </label>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="text-[11px] uppercase tracking-[0.3em] text-white/45">
                    Average response: under 12 hours
                  </span>
                  <button
                    type="submit"
                    className="rounded-full border border-accent/45 bg-accent/20 px-6 py-3 text-xs font-semibold uppercase tracking-[0.4em] text-accent transition-all duration-300 hover:bg-accent/30"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            <aside className="space-y-6">
              <div className="rounded-3xl border border-accent/20 bg-black/40 p-6 shadow-[0_18px_34px_rgba(0,0,0,0.45)]">
                <h3 className="text-sm font-semibold uppercase tracking-[0.35em] text-accent">
                  Operations Backbone
                </h3>
                <ul className="mt-4 space-y-3 text-sm text-white/70">
                  {officeDetails.map(detail => (
                    <li
                      key={detail.label}
                      className="rounded-xl border border-accent/15 bg-black/30 px-4 py-3"
                    >
                      <p className="text-[11px] uppercase tracking-[0.3em] text-accent/80">
                        {detail.label}
                      </p>
                      <p>{detail.value}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl border border-accent/20 bg-black/45 p-6 shadow-[0_18px_34px_rgba(0,0,0,0.45)]">
                <h3 className="text-sm font-semibold uppercase tracking-[0.35em] text-accent">
                  Quick Answers
                </h3>
                <div className="mt-4 space-y-4">
                  {quickFAQs.map(item => (
                    <article key={item.topic} className="rounded-2xl border border-accent/15 bg-black/30 p-4">
                      <h4 className="text-xs font-semibold uppercase tracking-[0.3em] text-accent/85">
                        {item.topic}
                      </h4>
                      <p className="mt-2 text-xs text-white/65">{item.detail}</p>
                    </article>
                  ))}
                </div>
                <Link
                  to="/faqs"
                  className="mt-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-black/30 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-white/70 transition-all duration-300 hover:border-accent/45 hover:text-accent"
                >
                  Visit Full FAQ
                </Link>
              </div>
            </aside>
          </div>
        </section>

        <section className="container mx-auto max-w-4xl px-6 sm:px-10">
          <div className="relative overflow-hidden rounded-3xl border border-accent/20 bg-[linear-gradient(135deg,_rgba(179,141,77,0.12)_0%,_rgba(12,9,6,0.85)_60%,_rgba(179,141,77,0.1)_100%)] p-10 text-center shadow-[0_28px_56px_rgba(0,0,0,0.55)]">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute left-1/2 top-0 h-36 w-36 -translate-x-1/2 rounded-full border border-accent/25 blur-[2px]" />
            </div>
            <div className="relative space-y-4">
              <h2 className="text-responsive-2xl text-accent">
                Prefer a Live Conversation?
              </h2>
              <p className="text-responsive-sm text-white/75">
                Schedule a 1:1 discovery session with one of our strategists to explore your goals, assess fit, and build an activation roadmap before you enrol.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="mailto:admissions@mindsupremacy.com?subject=Schedule%20a%20Discovery%20Call"
                  className="rounded-full border border-accent/45 bg-accent/20 px-6 py-3 text-xs font-semibold uppercase tracking-[0.4em] text-accent transition-all duration-300 hover:bg-accent/30"
                >
                  Request A Call
                </a>
                <Link
                  to="/payment"
                  className="rounded-full border border-accent/20 bg-black/45 px-6 py-3 text-xs font-semibold uppercase tracking-[0.4em] text-white/75 transition-all duration-300 hover:border-accent/40 hover:text-accent"
                >
                  Secure Your Seat Now
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
