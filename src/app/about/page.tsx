import type { Metadata } from "next";
import { Container, SectionHeading } from "@/components/shared";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Al-Trader — the AI-powered trading platform built to make institutional-grade AI trading accessible to every trader.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    title: "Transparency",
    description:
      "Every signal and every trade is logged and reviewable. What you see is what the Al-Trader AI sees.",
  },
  {
    title: "Innovation",
    description:
      "Our models learn continuously from live market data, improving with every market cycle.",
  },
  {
    title: "Security",
    description:
      "Your funds stay in your own accounts. We connect through least-privilege API keys protected by encryption and 2FA.",
  },
  {
    title: "Support",
    description:
      "Real humans, fast answers. Our team is here around the clock to help you get the most from Al-Trader.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b-2 border-slate-200 bg-gradient-to-b from-indigo-50/70 via-white to-indigo-50/40 py-12 lg:py-16">
        <Container className="max-w-3xl text-center">
          <div className="mx-auto max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-indigo-700 shadow-sm">
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
            </svg>
            Our Story
          </span>
          <h1 className="font-display mt-6 text-4xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-5xl">
            The AI trading platform built for every trader
          </h1>
          <div
            aria-hidden="true"
            className="mx-auto mt-7 h-1 w-16 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600"
          />
          </div>
          <p className="mx-auto mt-7 max-w-[45rem] text-lg leading-relaxed text-slate-600">
            Al-Trader started with a simple observation: professional funds have
            traded with algorithmic models for decades, while everyday traders
            were left with charts, guesswork and emotion-driven decisions. We
            built Al-Trader to close that gap.
          </p>
          <p className="mx-auto mt-4 max-w-[45rem] text-lg leading-relaxed text-slate-600">
            Today, Al-Trader is an AI-powered trading platform used by thousands
            of traders across the world. Our deep-learning models scan forex,
            crypto and stock markets 24/7, generating signals and managing risk
            automatically — so our users can focus on their goals, not their
            screens.
          </p>
          <blockquote className="relative mt-14 rounded-2xl border border-indigo-100 bg-white p-8 shadow-sm sm:p-10">
            <span className="absolute -top-5 left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-indigo-600 text-white shadow-md shadow-indigo-200">
              <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="currentColor" aria-hidden="true">
                <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
              </svg>
            </span>
            <p className="font-display text-xl font-semibold leading-relaxed text-slate-900">
              "Our mission is simple: make institutional-grade AI trading
              accessible to everyone — with transparent technology, honest
              communication and risk management baked into every signal."
            </p>
            <footer className="mt-4 text-sm font-medium text-indigo-700">
              — The Al-Trader Team
            </footer>
          </blockquote>
        </Container>
      </section>

      <section className="bg-slate-50 py-12 lg:py-16">
        <Container>
          <SectionHeading
            eyebrow="Our Values"
            title="What Al-Trader stands for"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <h3 className="font-display text-lg font-semibold text-slate-900">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-12 lg:py-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Built for traders, by traders
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Whether you are placing your first trade or managing a large
              portfolio, Al-Trader grows with you. Start with preset strategies,
              refine them as you learn, and scale to full automation when you are
              ready.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
