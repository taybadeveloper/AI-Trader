import type { Metadata } from "next";
import SignupForm from "@/components/signup-form";
import { Container, SectionHeading } from "@/components/shared";

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
  {
    title: "Call us",
    value: "+92 300 1234567",
    href: "tel:+923001234567",
    note: "Monday – Friday, 9am – 6pm",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    title: "Office hours",
    value: "24/7 Support",
    href: "",
    note: "The Al-Trader engine never sleeps",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="border-b-2 border-slate-200 bg-gradient-to-b from-indigo-50/70 via-white to-indigo-50/40 py-12 lg:py-16">
        <Container>
          <SectionHeading
            eyebrow="Contact"
            title="Get in touch with Al-Trader"
            description="Questions about the platform, your account or a partnership? The Al-Trader team is here to help."
            size="lg"
          />
        </Container>
      </section>

      <section className="bg-white py-12 lg:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-5">
            <div className="space-y-4 lg:col-span-2">
              {cards.map((card) => {
                const content = (
                  <>
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
                  </>
                );
                if (card.href) {
                  return (
                    <a
                      key={card.title}
                      href={card.href}
                      target={card.href.startsWith("http") ? "_blank" : undefined}
                      rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="card flex items-start gap-4 p-5 hover:bg-indigo-50/40"
                    >
                      {content}
                    </a>
                  );
                }
                return (
                  <div key={card.title} className="card flex items-start gap-4 p-5">
                    {content}
                  </div>
                );
              })}
            </div>

            <div className="lg:col-span-3">
              <SignupForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
