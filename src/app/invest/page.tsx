import type { Metadata } from "next";
import Link from "next/link";
import { Container, SectionHeading } from "@/components/shared";

export const metadata: Metadata = {
  title: "Invest",
  description:
    "Invest with the Al-Trader AI engine — AI-managed investment plans for forex, crypto and stock markets, with risk controls applied to every trade.",
  alternates: { canonical: "/invest" },
};

const plans = [
  {
    name: "Starter",
    amount: "from $500",
    description: "Perfect for first-time investors exploring AI-managed trading.",
    features: [
      "AI-managed trading strategy",
      "1 connected exchange",
      "Daily performance reports",
      "Standard risk controls",
    ],
    cta: "Start Investing",
    featured: false,
  },
  {
    name: "Growth",
    amount: "from $5,000",
    description: "For investors ready to scale with diversified AI portfolios.",
    features: [
      "Multi-market AI portfolio",
      "Unlimited exchange connections",
      "Real-time analytics",
      "Advanced risk controls",
      "Priority support",
    ],
    cta: "Start Investing",
    featured: true,
  },
  {
    name: "Elite",
    amount: "from $25,000",
    description: "Institutional-grade AI investing for serious portfolios.",
    features: [
      "Custom AI strategies",
      "Dedicated account manager",
      "API access",
      "SLA & compliance reports",
    ],
    cta: "Contact Sales",
    featured: false,
  },
];

const steps = [
  {
    title: "Open your investment account",
    description: "Sign up in minutes and verify your account securely.",
  },
  {
    title: "Choose your plan and risk level",
    description: "Pick a tier and set your risk — the AI engine handles the rest.",
  },
  {
    title: "Let the engine invest",
    description: "Al-Trader scans markets and manages your portfolio 24/7.",
  },
];

export default function InvestPage() {
  return (
    <>
      <section className="border-b-2 border-slate-200 bg-gradient-to-b from-indigo-50/70 via-white to-indigo-50/40 py-12 lg:py-16">
        <Container>
          <SectionHeading
            eyebrow="Invest"
            title="Invest smarter with the Al-Trader AI engine"
            description="Choose an AI-managed investment plan, set your risk level, and let the Al-Trader engine work the markets for you — around the clock."
            size="lg"
          />
        </Container>
      </section>

      <section className="bg-white py-12 lg:py-16">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className="card relative flex flex-col rounded-2xl border-2 border-indigo-600 p-7 shadow-lg shadow-indigo-100"
              >
                {plan.featured && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-indigo-600 px-4 py-1 text-xs font-semibold text-white">
                    Most Popular
                  </span>
                )}
                <h2 className="font-display text-lg font-semibold text-slate-900">
                  {plan.name}
                </h2>
                <p className="mt-1 text-sm text-slate-600">{plan.description}</p>
                <p className="font-display mt-4 text-3xl font-bold tracking-tight text-slate-900">
                  {plan.amount}
                </p>
                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-slate-600">
                      <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="m4 12 5 5L20 6" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`mt-8 inline-flex w-full items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold transition-colors ${
                    plan.featured
                      ? "bg-indigo-600 text-white shadow-sm shadow-indigo-200 hover:bg-indigo-700"
                      : "border border-slate-300 bg-white text-slate-700 hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-700"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-12 lg:py-16">
        <Container>
          <SectionHeading
            eyebrow="Getting Started"
            title="Three steps to your first AI-managed portfolio"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step.title} className="card p-6 text-center">
                <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-indigo-600 to-violet-600 font-display text-base font-bold text-white shadow-md shadow-indigo-200">
                  {index + 1}
                </span>
                <h3 className="font-display mt-4 text-lg font-semibold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mx-auto mt-10 flex max-w-3xl items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6">
            <svg viewBox="0 0 24 24" className="mt-0.5 h-6 w-6 shrink-0 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <p className="text-sm leading-relaxed text-slate-600">
              <span className="font-semibold text-slate-900">Investment carries risk.</span>{" "}
              The value of your portfolio can go down as well as up, and returns are
              never guaranteed. Al-Trader provides technology only and does not
              provide financial advice.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
