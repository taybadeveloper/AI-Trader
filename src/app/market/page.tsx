import type { Metadata } from "next";
import Link from "next/link";
import { Container, SectionHeading } from "@/components/shared";

export const metadata: Metadata = {
  title: "Market",
  description:
    "Trade forex, crypto and stocks from one platform — the Al-Trader AI engine covers every major market, 24 hours a day.",
  alternates: { canonical: "/market" },
};

const markets = [
  {
    title: "Forex",
    description:
      "EUR/USD, GBP/USD, USD/JPY and 40+ major, minor and exotic pairs — the world's most liquid market, open around the clock.",
    chips: ["40+ currency pairs", "24/5 market"],
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="6" width="20" height="12" rx="2" />
        <circle cx="12" cy="12" r="2" />
        <path d="M6 12h.01M18 12h.01" />
      </svg>
    ),
  },
  {
    title: "Crypto",
    description:
      "Bitcoin, Ethereum and 200+ altcoins across the leading exchanges — with signals around the clock, even on weekends.",
    chips: ["200+ coins", "24/7 market"],
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M11.77 19.09c4.92.87 6.14-6.03 1.22-6.9m-1.22 6.9-5.9-.87m7.13.87-.35 1.97m1.56-8.86c4.92.87 6.14-6.03 1.22-6.9m-1.22 6.9-3.94-.69m5.16-6.2-5.16-.61m5.16.61.35-1.97M7.48 20.36 10.6 2.63" />
      </svg>
    ),
  },
  {
    title: "Stocks",
    description:
      "US, European and Asian equities, plus indices and ETFs — powered by the same Al-Trader deep-learning signal engine.",
    chips: ["5,000+ tickers", "Global coverage"],
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M16 7h6v6" />
        <path d="m22 7-8.5 8.5-5-5L2 17" />
      </svg>
    ),
  },
];

const stats = [
  { value: "24/5", label: "Forex market hours" },
  { value: "24/7", label: "Crypto market hours" },
  { value: "5,000+", label: "Stock tickers covered" },
  { value: "200+", label: "Crypto coins covered" },
];

export default function MarketPage() {
  return (
    <>
      <section className="border-b-2 border-slate-200 bg-gradient-to-b from-indigo-50/70 via-white to-indigo-50/40 py-12 lg:py-16">
        <Container>
          <SectionHeading
            eyebrow="Market"
            title="Trade every major market from one platform"
            description="The Al-Trader AI engine covers forex, crypto and stocks — so your whole portfolio lives in one place."
            size="lg"
          />
        </Container>
      </section>

      <section className="bg-white py-12 lg:py-16">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {markets.map((market) => (
              <div key={market.title} className="card p-7">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                  {market.icon}
                </div>
                <h2 className="font-display mt-5 text-xl font-semibold text-slate-900">
                  {market.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {market.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {market.chips.map((chip) => (
                    <span
                      key={chip}
                      className="rounded-lg bg-indigo-50 px-2.5 py-1 text-xs font-semibold text-indigo-700"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-8 rounded-3xl border border-slate-200 bg-slate-50/60 p-8 lg:grid-cols-2 lg:p-12">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="card p-5 text-center">
                  <p className="font-display text-3xl font-bold tracking-tight text-indigo-600">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-slate-600">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="font-display text-2xl font-semibold tracking-tight text-slate-900">
                One engine. Every market.
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                The Al-Trader deep-learning engine scans all three markets
                simultaneously, scores every opportunity and applies risk controls
                automatically — so you can diversify without splitting your
                attention.
              </p>
              <div className="mt-6">
                <Link
                  href="/how-it-works"
                  className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-indigo-200 transition-colors hover:bg-indigo-700"
                >
                  See How It Works
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
