import type { Metadata } from "next";
import { Container, SectionHeading } from "@/components/shared";

export const metadata: Metadata = {
  title: "Invest",
  description:
    "Invest with the Al-Trader AI engine — AI-managed portfolios across forex, crypto and stock markets, with risk controls applied to every trade.",
  alternates: { canonical: "/invest" },
};

const benefits = [
  {
    title: "AI-managed portfolios",
    description:
      "Your capital follows strategies scored by deep-learning models — no guesswork, no emotions.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="9" y="9" width="6" height="6" />
        <path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2" />
      </svg>
    ),
  },
  {
    title: "Multi-market diversification",
    description:
      "Exposure spread across forex, crypto and stocks from a single account.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
      </svg>
    ),
  },
  {
    title: "Transparent reporting",
    description:
      "Daily performance reports and a complete log of every trade, available anytime.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 3v18h18" />
        <path d="m19 9-5 5-4-4-3 3" />
      </svg>
    ),
  },
  {
    title: "Flexible access",
    description:
      "Track your portfolio from any device and adjust your risk level whenever you want.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="7" y="2" width="10" height="20" rx="2" />
        <path d="M12 18h.01" />
      </svg>
    ),
  },
];

const management = [
  {
    title: "Fund your account",
    description:
      "Deposit funds to your connected exchange or broker — your money always stays in your own account.",
  },
  {
    title: "The AI builds your portfolio",
    description:
      "The engine allocates your capital across markets based on your goals and risk level.",
  },
  {
    title: "Trades run 24/7",
    description:
      "Signals execute automatically, with stop-losses and risk controls on every single position.",
  },
  {
    title: "Review and adjust",
    description:
      "Track performance from your dashboard and fine-tune your risk level anytime.",
  },
  {
    title: "Withdraw whenever you want",
    description: "No lock-in periods — request a withdrawal at any time.",
  },
];

const steps = [
  {
    title: "Open your investment account",
    description: "Sign up in minutes and verify your account securely.",
  },
  {
    title: "Choose your risk level",
    description: "Set your goals and risk — the AI engine handles the rest.",
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
            description="AI-managed portfolios across forex, crypto and stocks — set your risk level and let the engine work the markets for you, around the clock."
            size="lg"
          />
        </Container>
      </section>

      <section className="bg-white py-12 lg:py-20">
        <Container>
          <SectionHeading
            eyebrow="Why Invest with AL-TRADER"
            title="Your capital, managed by AI"
            description="The same disciplines institutional funds have used for years — now working for your portfolio."
          />
          <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-slate-200">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="text-center lg:px-6 lg:first:pl-0 lg:last:pr-0">
                <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                  {benefit.icon}
                </div>
                <h2 className="font-display mt-5 text-lg font-semibold text-slate-900">
                  {benefit.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-12 lg:py-20">
        <Container>
          <SectionHeading
            eyebrow="How Your Money Is Managed"
            title="From deposit to withdrawal, step by step"
            description="Here is exactly what happens to your capital after you invest — transparent at every stage."
          />
          <div className="mx-auto mt-12 max-w-3xl space-y-10">
            {management.map((item, index) => (
              <div key={item.title} className="flex items-start gap-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-indigo-600 font-display text-base font-bold text-white shadow-md shadow-indigo-200">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-12 lg:py-20">
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
