import Link from "next/link";
import { Container } from "./shared";

export default function CTA() {
  return (
    <section className="bg-white py-12 lg:py-16">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-indigo-600 to-violet-600 px-6 py-12 text-center sm:px-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-white/10"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-20 -right-10 h-64 w-64 rounded-full bg-white/10"
          />
          <h2 className="font-display relative text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Ready to trade smarter with Al-Trader?
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-lg text-indigo-100">
            Join thousands of traders using the Al-Trader AI trading platform.
            Free to start — no credit card required.
          </p>
          <div className="relative mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-indigo-700 shadow-sm transition-colors hover:bg-indigo-50"
            >
              Start Trading Free
            </Link>
            <Link
              href="/features"
              className="inline-flex items-center justify-center rounded-xl border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Explore Features
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
