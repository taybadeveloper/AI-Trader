import type { Metadata } from "next";
import { Container, SectionHeading } from "@/components/shared";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "See how Al-Trader works — create a free account, connect your exchange, choose a strategy and let the AI trade for you. From signup to your first trade in minutes.",
  alternates: { canonical: "/how-it-works" },
};

const steps = [
  {
    title: "Create your free account",
    description:
      "Sign up for Al-Trader in under two minutes — no credit card required and no trading experience needed.",
  },
  {
    title: "Connect your exchange",
    description:
      "Link your broker or exchange through a read-only API key. Al-Trader supports the world's leading trading platforms.",
  },
  {
    title: "Choose your strategy",
    description:
      "Pick a strategy and set your risk level. The Al-Trader AI personalizes every signal to match your goals.",
  },
  {
    title: "Let the AI trade for you",
    description:
      "Al-Trader scans markets and executes trades automatically, 24/7. Monitor your performance from any device.",
  },
];

const requirements = [
  "An account with a supported exchange or broker",
  "An internet connection — Al-Trader runs in the cloud",
  "About five minutes of setup time",
  "No trading experience required",
];

export default function HowItWorksPage() {
  return (
    <>
      <section className="border-b-2 border-slate-200 bg-gradient-to-b from-indigo-50/70 via-white to-indigo-50/40 py-12 lg:py-16">
        <Container>
          <SectionHeading
            eyebrow="How It Works"
            title="From signup to your first AI trade in minutes"
            description="Getting started with Al-Trader takes less time than reading a market report."
            size="lg"
          />
        </Container>
      </section>

      <section className="bg-white py-12 lg:py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step.title} className="card p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-indigo-600 to-violet-600 font-display text-base font-bold text-white shadow-md shadow-indigo-200">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className="font-display mt-5 text-lg font-semibold text-slate-900">
                  {step.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 grid items-center gap-8 rounded-3xl border border-slate-200 bg-slate-50/60 p-8 lg:grid-cols-2 lg:p-12">
            <div>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-slate-900">
                What you need to get started
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Al-Trader handles the heavy lifting — the analysis, the timing and
                the execution. You just need the basics.
              </p>
            </div>
            <ul className="space-y-3">
              {requirements.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
                  <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="m4 12 5 5L20 6" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
    </>
  );
}
