import type { Metadata } from "next";
import type { SVGProps } from "react";
import { Container, SectionHeading } from "@/components/shared";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore the Al-Trader features — AI signal engine, automated execution, smart risk management, 24/7 market scanning, portfolio analytics and bank-grade security.",
  alternates: { canonical: "/features" },
};

function Icon({ children, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

const features = [
  {
    title: "AI Signal Engine",
    description:
      "Al-Trader's deep-learning models analyze 200+ technical indicators and market patterns in real time to generate high-probability entry and exit signals.",
    icon: (
      <Icon className="h-6 w-6">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="9" y="9" width="6" height="6" />
        <path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2" />
      </Icon>
    ),
  },
  {
    title: "Automated Execution",
    description:
      "Connect your exchange or broker through a secure API and let Al-Trader execute signals instantly — no manual orders, no missed opportunities.",
    icon: (
      <Icon className="h-6 w-6">
        <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
      </Icon>
    ),
  },
  {
    title: "Smart Risk Management",
    description:
      "Position sizing, stop-losses and drawdown limits are handled automatically by Al-Trader's risk engine, protecting your capital on every trade.",
    icon: (
      <Icon className="h-6 w-6">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </Icon>
    ),
  },
  {
    title: "24/7 Market Scanning",
    description:
      "Al-Trader never sleeps. It monitors forex, crypto and stock markets around the clock, across every timezone, and alerts you the moment an opportunity appears.",
    icon: (
      <Icon className="h-6 w-6">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
      </Icon>
    ),
  },
  {
    title: "Portfolio Analytics",
    description:
      "Track performance, win rates and P&L with clean real-time dashboards. Every Al-Trader decision is logged, transparent and reviewable.",
    icon: (
      <Icon className="h-6 w-6">
        <path d="M3 3v18h18" />
        <path d="m19 9-5 5-4-4-3 3" />
      </Icon>
    ),
  },
  {
    title: "Bank-Grade Security",
    description:
      "API-key trading with read-only safeguards, AES-256 encryption and two-factor authentication keep your funds and data protected at every step.",
    icon: (
      <Icon className="h-6 w-6">
        <rect x="4" y="11" width="16" height="10" rx="2" />
        <path d="M8 11V7a4 4 0 0 1 8 0v4" />
      </Icon>
    ),
  },
];

export default function FeaturesPage() {
  return (
    <>
      <section className="border-b-2 border-slate-200 bg-gradient-to-b from-indigo-50/70 via-white to-indigo-50/40 py-12 lg:py-16">
        <Container>
          <SectionHeading
            eyebrow="Features"
            title="Everything you need to trade with AI"
            description="Al-Trader combines deep-learning signals, automated execution and disciplined risk management in one platform."
            size="lg"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                  {feature.icon}
                </div>
                <h2 className="font-display mt-5 text-lg font-semibold text-slate-900">
                  {feature.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
