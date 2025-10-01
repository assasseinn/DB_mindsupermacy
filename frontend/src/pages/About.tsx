import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const coreValues = [
  {
    title: "Timeless Wisdom",
    description:
      "We distill hard-to-find teachings into modern, actionable frameworks you can trust.",
  },
  {
    title: "Applied Transformation",
    description:
      "Every concept is paired with drills, rituals, and accountability structures that create movement.",
  },
  {
    title: "Community Momentum",
    description:
      "You grow alongside a global cohort committed to mental mastery and self-leadership.",
  },
];

const guidingPrinciples = [
  {
    label: "Depth over hype",
    detail: "We go beyond motivational fluff and teach the original mind mechanics behind sustainable success.",
  },
  {
    label: "Evidence in action",
    detail: "We only keep what consistently produces measurable breakthroughs for our students.",
  },
  {
    label: "Integrity first",
    detail: "We stand behind every promise we make and maintain transparent communication at all times.",
  },
  {
    label: "You as the asset",
    detail: "Our programs are designed to upgrade the thinker, not just the tactics they deploy.",
  },
];

const milestones = [
  {
    period: "1930s Origin",
    summary:
      "The suppressed manuscript that inspires our flagship program is penned, blending philosophy, neuroscience, and esoteric practice.",
  },
  {
    period: "Modern Revival",
    summary:
      "Our founder spends a decade interviewing historians, mentors, and elite performers to reconstruct the full method.",
  },
  {
    period: "Global Cohort",
    summary:
      "MindSupremacy launches the digital experience—more than 8,000 students complete the foundational curriculum in year one.",
  },
  {
    period: "Today",
    summary:
      "We continue to refine the system with live intensives, deeper integrations, and research-backed upgrades for members.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-neural-gradient text-white">
      <Header />

      <main className="flex flex-col items-center">
        <section className="relative w-full overflow-hidden border-b border-accent/20 bg-[linear-gradient(140deg,_rgba(10,8,5,0.95)_0%,_rgba(26,18,10,0.92)_75%,_rgba(10,8,5,0.95)_100%)] shadow-[0_34px_60px_rgba(0,0,0,0.65)]">
          <div className="absolute inset-0 opacity-35">
            <div className="absolute -left-24 top-1/3 h-48 w-48 rounded-full border border-accent/30 blur-[2px]" />
            <div className="absolute right-12 bottom-0 h-32 w-32 rounded-full border border-accent/20" />
          </div>

          <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 py-20 text-center sm:px-10">
            <span className="rounded-full border border-accent/30 bg-black/40 px-4 py-1 text-xs font-semibold uppercase tracking-[0.55em] text-accent/80">
              Our Story
            </span>
            <h1 className="text-responsive-3xl font-extrabold text-accent">
              We Help You Reclaim the Mind You Were Meant to Master
            </h1>
            <p className="max-w-3xl text-responsive-base text-white/75">
              MindSupremacy exists to return a lost body of knowledge to modern achievers. We fuse ancient cognitive discipline with state-of-the-art implementation so you can dismantle mental ceilings, keep promises to yourself, and create work you are proud of.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/course"
                className="rounded-full border border-accent/50 bg-accent/20 px-6 py-3 text-xs font-semibold uppercase tracking-[0.4em] text-accent shadow-[0_0_25px_rgba(179,141,77,0.35)] transition-all duration-300 hover:bg-accent/30"
              >
                Explore the Curriculum
              </Link>
              <Link
                to="/payment"
                className="rounded-full border border-accent/20 bg-black/40 px-6 py-3 text-xs font-semibold uppercase tracking-[0.4em] text-white/80 transition-all duration-300 hover:border-accent/40 hover:text-accent"
              >
                Secure Your Access
              </Link>
            </div>
          </div>
        </section>

        <section className="container mx-auto max-w-5xl px-6 py-16 sm:px-10">
          <div className="grid gap-6 md:grid-cols-3">
            {coreValues.map(value => (
              <article
                key={value.title}
                className="rounded-2xl border border-accent/25 bg-black/40 p-6 shadow-[0_18px_32px_rgba(0,0,0,0.45)] transition-transform duration-300 hover:-translate-y-1 hover:border-accent/45"
              >
                <h2 className="mb-3 text-lg font-semibold uppercase tracking-[0.3em] text-accent">
                  {value.title}
                </h2>
                <p className="text-sm text-white/75">{value.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="container mx-auto max-w-5xl px-6 pb-16 sm:px-10">
          <div className="rounded-3xl border border-accent/25 bg-black/45 p-8 shadow-[0_24px_46px_rgba(0,0,0,0.5)]">
            <div className="grid gap-8 md:grid-cols-[1.1fr_1fr]">
              <div className="space-y-4">
                <h2 className="text-responsive-2xl text-accent">Why We Exist</h2>
                <p className="text-responsive-sm text-white/70">
                  After collecting transcripts, journals, and mentoring notes from the early 20th century, we rebuilt the practices responsible for quantum leaps in industry, art, and leadership. Our programs are engineered for builders who refuse to be numbed by friction or distraction.
                </p>
                <p className="text-responsive-sm text-white/70">
                  Every lesson is modular, ritual-driven, and reinforced with implementation labs. You do not just learn—you move, act, and integrate.
                </p>
              </div>
              <div className="grid gap-4">
                {guidingPrinciples.map(principle => (
                  <div
                    key={principle.label}
                    className="rounded-2xl border border-accent/20 bg-black/40 p-4 backdrop-blur-sm"
                  >
                    <h3 className="text-sm font-semibold uppercase tracking-[0.35em] text-accent/90">
                      {principle.label}
                    </h3>
                    <p className="text-xs text-white/65">{principle.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto max-w-5xl px-6 pb-20 sm:px-10">
          <h2 className="mb-8 text-center text-responsive-2xl text-accent">Milestones in Our Revival</h2>
          <div className="space-y-6">
            {milestones.map(milestone => (
              <div
                key={milestone.period}
                className="flex flex-col gap-3 rounded-2xl border border-accent/20 bg-black/35 p-6 sm:flex-row sm:items-center sm:justify-between"
              >
                <span className="text-sm font-semibold uppercase tracking-[0.35em] text-accent/85">
                  {milestone.period}
                </span>
                <p className="text-sm text-white/70 sm:max-w-3xl">{milestone.summary}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="container mx-auto mb-20 max-w-4xl px-6 sm:px-10">
          <div className="relative overflow-hidden rounded-3xl border border-accent/25 bg-[linear-gradient(135deg,_rgba(179,141,77,0.08)_0%,_rgba(12,9,6,0.85)_65%,_rgba(179,141,77,0.1)_100%)] p-10 text-center shadow-[0_34px_60px_rgba(0,0,0,0.6)]">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 rounded-full border border-accent/30 blur-[2px]" />
            </div>
            <div className="relative space-y-4">
              <h2 className="text-responsive-2xl text-accent">Ready for Your Next Level?</h2>
              <p className="text-responsive-sm text-white/75">
                The MindSupremacy curriculum equips you with focus rituals, identity upgrades, and strategic executions in one immersive experience. Join us inside and start operating from your highest standard.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/payment"
                  className="rounded-full border border-accent/50 bg-accent/20 px-6 py-3 text-xs font-semibold uppercase tracking-[0.4em] text-accent transition-all duration-300 hover:bg-accent/30"
                >
                  Enroll Today
                </Link>
                <Link
                  to="/course"
                  className="rounded-full border border-accent/25 bg-black/45 px-6 py-3 text-xs font-semibold uppercase tracking-[0.4em] text-white/80 transition-all duration-300 hover:border-accent/45 hover:text-accent"
                >
                  View Course Outline
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
