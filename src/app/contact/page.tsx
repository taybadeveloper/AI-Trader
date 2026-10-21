import type { Metadata } from "next";
import SignupForm from "@/components/signup-form";
import { Container } from "@/components/shared";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the Al-Trader team — support, sales and partnership questions are answered within 24 hours.",
  alternates: { canonical: "/contact" },
};

const cards = [
  {
    title: "Email us",
    value: "support@al-trader.org",
    href: "mailto:support@al-trader.org",
    note: "We reply within 24 hours",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-10 6L2 7" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <section className="border-b-2 border-slate-200 bg-gradient-to-b from-indigo-50/70 via-white to-indigo-50/40 py-12 lg:py-16">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
            Contact
          </p>
          <h1 className="font-display mt-3 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Get in touch with Al-Trader
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Questions about the platform, your account or a partnership? The
            Al-Trader team is here to help.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-2">
            {cards.map((card) => (
              <a
                key={card.title}
                href={card.href}
                target={card.href.startsWith("http") ? "_blank" : undefined}
                rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-colors hover:border-indigo-200 hover:bg-indigo-50/40"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                  {card.icon}
                </span>
                <span>
                  <span className="block text-sm font-medium text-slate-500">{card.title}</span>
                  <span className="block font-display text-base font-semibold text-slate-900">
                    {card.value}
                  </span>
                  <span className="mt-0.5 block text-xs text-slate-500">{card.note}</span>
                </span>
              </a>
            ))}
          </div>

          <div className="lg:col-span-3">
            <SignupForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
