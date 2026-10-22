import { Container, SectionHeading } from "./shared";

const markets = [
  {
    title: "Forex",
    description:
      "EUR/USD, GBP/USD, USD/JPY and 40+ major, minor and exotic pairs — the world's most liquid market, open around the clock.",
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
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M16 7h6v6" />
        <path d="m22 7-8.5 8.5-5-5L2 17" />
      </svg>
    ),
  },
];

export default function Markets() {
  return (
    <section className="bg-slate-50 py-12 lg:py-16">
      <Container>
        <SectionHeading
          eyebrow="Markets We Cover"
          title="One AI engine. Every major market."
          description="The Al-Trader signal engine works across forex, crypto and stocks — so your whole portfolio is covered by one platform."
        />
        <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-0 md:divide-x md:divide-slate-200">
          {markets.map((market) => (
            <div key={market.title} className="text-center md:px-8 md:first:pl-0 md:last:pr-0">
              <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white text-indigo-600 shadow-sm">
                {market.icon}
              </div>
              <h3 className="font-display mt-5 text-xl font-semibold text-slate-900">
                {market.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {market.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
