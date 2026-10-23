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

const day = [
  {
    title: "Morning market scan",
    description:
      "The engine reviews overnight moves across all three markets and updates its models for the day ahead.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
      </svg>
    ),
  },
  {
    title: "Signals in real time",
    description:
      "High-probability setups are scored and delivered to your dashboard the moment they appear.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    title: "Automated execution",
    description:
      "With automation enabled, trades open and close on your exchange without you lifting a finger.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    title: "While you sleep",
    description:
      "The AI keeps watching the Asia-Pacific and overnight sessions — around the clock, every day.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
      </svg>
    ),
  },
];

const pipeline = [
  {
    title: "Data collection",
    description:
      "Price feeds, volume and market structure stream in from every connected exchange — thousands of instruments at once.",
  },
  {
    title: "AI analysis",
    description:
      "Deep-learning models score every instrument for probability and risk, using years of market history as context.",
  },
  {
    title: "Risk check",
    description:
      "Position size, stop-loss and target are calculated before any signal is released — risk is never an afterthought.",
  },
  {
    title: "Execution",
    description:
      "With automation enabled, the trade is placed on your exchange in milliseconds — no hesitation, no missed entries.",
  },
  {
    title: "Reporting",
    description:
      "Every trade is logged with its reasoning. Review wins and losses anytime from your dashboard.",
  },
];

const before = [
  "Hours of chart watching every day",
  "Trades missed while you sleep",
  "Emotion-driven decisions",
  "Risk rules skipped under stress",
];

const after = [
  "Markets watched 24/7 for you",
  "Signals and execution around the clock",
  "Data-driven, rule-based trading",
  "Risk controls on every single trade",
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

      <section className="bg-slate-50 py-12 lg:py-20">
        <Container>
          <SectionHeading
            eyebrow="A Day with AL-TRADER"
            title="What your day looks like after setup"
            description="Once your account is connected, the engine works around the clock — here is how it fits into your day."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {day.map((slot) => (
              <div key={slot.title} className="card p-6">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                  {slot.icon}
                </div>
                <h3 className="font-display mt-4 text-lg font-semibold text-slate-900">
                  {slot.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {slot.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-12 lg:py-20">
        <Container>
          <SectionHeading
            eyebrow="Behind the Scenes"
            title="How a trade happens, step by step"
            description="Between market data and your dashboard, the Al-Trader engine runs a five-step pipeline — automatically, on every signal."
          />
          <div className="mx-auto mt-12 max-w-3xl space-y-10">
            {pipeline.map((step, index) => (
              <div key={step.title} className="flex items-start gap-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-indigo-600 font-display text-base font-bold text-white shadow-md shadow-indigo-200">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-12 lg:py-20">
        <Container>
          <SectionHeading
            eyebrow="The Difference"
            title="Before vs after AL-TRADER"
            description="The same trader, the same markets — a completely different experience."
          />
          <div className="mx-auto mt-12 grid max-w-3xl gap-10 md:grid-cols-2 md:gap-0 md:divide-x md:divide-slate-200">
            <div className="md:px-8 md:first:pl-0">
              <p className="font-display text-xs font-semibold uppercase tracking-widest text-slate-400">
                Before
              </p>
              <ul className="mt-6 space-y-4">
                {before.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-600">
                    <svg viewBox="0 0 24 24" className="mt-0.5 h-5 w-5 shrink-0 text-rose-400" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M6 6l12 12M18 6L6 18" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:px-8 md:last:pr-0">
              <p className="font-display text-xs font-semibold uppercase tracking-widest text-indigo-600">
                After AL-TRADER
              </p>
              <ul className="mt-6 space-y-4">
                {after.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm font-medium text-slate-900">
                    <svg viewBox="0 0 24 24" className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="m4 12 5 5L20 6" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
