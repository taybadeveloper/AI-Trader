import { Container } from "./shared";

const benefits = [
  "Signals backed by deep learning, not gut feeling",
  "Automatic risk controls on every single trade",
  "Markets monitored 24/7 — the AI never sleeps",
  "Works with your existing exchange or broker",
  "Fully transparent: every signal and trade is logged",
  "Start free — upgrade only when you're ready",
];

const comparison = [
  { manual: "A few markets at a time", ai: "Thousands of markets, 24/7" },
  { manual: "Emotions cloud decisions", ai: "Rules followed on every trade" },
  { manual: "Slow, manual order entry", ai: "Millisecond execution" },
  { manual: "Risk rules skipped under stress", ai: "Automatic risk controls" },
];

export default function WhyChoose() {
  return (
    <section className="bg-white py-12 lg:py-16">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
              Why Al-Trader
            </p>
            <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              The smarter way to trade the markets
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Al-Trader replaces guesswork with deep-learning analysis and replaces
              hesitation with disciplined execution. Here is why thousands of
              traders have made the switch.
            </p>
            <ul className="mt-8 space-y-3.5">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start justify-center gap-3 text-sm text-slate-700 lg:justify-start">
                  <svg viewBox="0 0 24 24" className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="m4 12 5 5L20 6" />
                  </svg>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-indigo-100 via-white to-emerald-50"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/why-choose.webp"
              alt="Al-Trader AI trading platform dashboard"
              width={1548}
              height={1016}
              className="relative w-full rounded-2xl border border-slate-200 shadow-xl shadow-indigo-100"
            />
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          <h3 className="font-display text-center text-2xl font-semibold tracking-tight text-slate-900">
            Manual trading vs Al-Trader
          </h3>
          <div className="card mt-8 p-6">
            <div className="grid grid-cols-2 items-center gap-4 pb-4">
              <p className="text-sm font-medium text-slate-500">Manual trading</p>
              <p className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-indigo-600 text-xs font-bold text-white">
                  AI
                </span>
                Al-Trader
              </p>
            </div>
            {comparison.map((row) => (
              <div
                key={row.manual}
                className="grid grid-cols-2 gap-4 border-t border-slate-100 py-3.5"
              >
                <p className="flex items-start gap-2 text-sm text-slate-500">
                  <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0 text-rose-400" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M6 6l12 12M18 6L6 18" />
                  </svg>
                  {row.manual}
                </p>
                <p className="flex items-start gap-2 text-sm font-medium text-slate-900">
                  <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="m4 12 5 5L20 6" />
                  </svg>
                  {row.ai}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
