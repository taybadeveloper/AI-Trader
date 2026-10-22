import SignupForm from "./signup-form";
import { Container, PrimaryLink, SecondaryLink } from "./shared";

function CheckIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m4 12 5 5L20 6" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-indigo-50/70 via-white to-white">
      <div
        aria-hidden="true"
        className="bg-grid pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_75%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-28 -top-28 h-96 w-96 rounded-full bg-indigo-200/50 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-emerald-100/60 blur-3xl"
      />
      <Container className="relative grid items-center gap-14 pb-12 pt-6 lg:grid-cols-2 lg:py-16">
        <div className="text-center lg:text-left">
          <h1 className="font-display mt-5 text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl xl:text-6xl">
            Trade Smarter with{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              Al-Trader
            </span>
            , the AI Trading Platform That Never Sleeps
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-slate-600 lg:mx-0">
            Al-Trader scans global markets 24/7, analyzes millions of data points
            with deep-learning models and executes high-probability trades
            automatically — for forex, crypto and stocks.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <PrimaryLink href="/contact">Start Trading Free</PrimaryLink>
            <SecondaryLink href="/how-it-works">See How It Works</SecondaryLink>
          </div>
          <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 lg:justify-start">
            {["Free to start", "No credit card required", "Cancel anytime"].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                <CheckIcon className="h-4 w-4 text-emerald-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <SignupForm />
      </Container>
    </section>
  );
}
