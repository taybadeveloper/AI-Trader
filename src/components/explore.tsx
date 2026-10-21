import Link from "next/link";
import { Container, SectionHeading } from "./shared";

const explore = [
  {
    title: "Features",
    href: "/features",
    description:
      "AI signal engine, automated execution, smart risk management and bank-grade security — see everything Al-Trader offers.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="9" y="9" width="6" height="6" />
        <path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2" />
      </svg>
    ),
  },
  {
    title: "How It Works",
    href: "/how-it-works",
    description:
      "From signup to your first AI trade in minutes. See the four simple steps to get started with Al-Trader.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 12a9 9 0 1 1-9-9" />
        <path d="M21 3v6h-6" />
      </svg>
    ),
  },
  {
    title: "Reviews",
    href: "/reviews",
    description:
      "See what forex, crypto and stock traders around the world say about the Al-Trader AI trading platform.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
  {
    title: "FAQs",
    href: "/faqs",
    description:
      "Answers to the most common questions about Al-Trader — exchanges, security, subscriptions and more.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <path d="M12 17h.01" />
      </svg>
    ),
  },
];

export default function Explore() {
  return (
    <section className="bg-white py-12 lg:py-16">
      <Container>
        <SectionHeading
          eyebrow="Explore Al-Trader"
          title="Everything you need to know, in one place"
          description="Learn what Al-Trader can do, how it works, and what traders think — before you get started."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {explore.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-md"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                {item.icon}
              </div>
              <h2 className="font-display mt-5 text-lg font-semibold text-slate-900 group-hover:text-indigo-700">
                {item.title}
              </h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                {item.description}
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600">
                Learn more
                <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14m-6-6 6 6-6 6" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
