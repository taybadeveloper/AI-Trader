import type { Metadata } from "next";
import { Container } from "@/components/shared";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms that govern your use of the Al-Trader AI trading platform.",
  alternates: { canonical: "/terms" },
};

const sections = [
  {
    title: "1. Acceptance of Terms",
    body: [
      "By accessing or using Al-Trader (al-trader.org), you agree to these Terms of Service. If you do not agree, do not use the platform.",
    ],
  },
  {
    title: "2. Eligibility",
    body: [
      "You must be at least 18 years old and legally permitted to use trading tools in your jurisdiction to create an Al-Trader account.",
    ],
  },
  {
    title: "3. Use of the Platform",
    body: [
      "You are responsible for all activity under your account, including trades executed through connected exchange API keys.",
      "You agree not to misuse the platform, attempt unauthorized access, or use Al-Trader for any unlawful purpose.",
    ],
  },
  {
    title: "4. Trading Risks",
    body: [
      "Trading foreign exchange, cryptocurrencies and other financial instruments involves substantial risk of loss and is not suitable for every investor. You may lose some or all of your invested capital.",
      "Al-Trader does not guarantee profits. AI-generated signals are provided for informational purposes and may be wrong. Past performance does not indicate future results.",
    ],
  },
  {
    title: "5. No Financial Advice",
    body: [
      "Al-Trader provides technology only. Nothing on the platform constitutes investment, financial, legal or tax advice. Consult a licensed professional before making financial decisions.",
    ],
  },
  {
    title: "6. Intellectual Property",
    body: [
      "The Al-Trader name, logo, software and content are the property of Al-Trader and may not be copied or reused without written permission.",
    ],
  },
  {
    title: "7. Subscription & Billing",
    body: [
      "Paid plans renew monthly until cancelled. You may cancel at any time and keep access until the end of the billing period. Fees are non-refundable except where required by law.",
    ],
  },
  {
    title: "8. Limitation of Liability",
    body: [
      "To the maximum extent permitted by law, Al-Trader is not liable for trading losses, service interruptions or damages arising from your use of the platform. The platform is provided on an 'as is' basis.",
    ],
  },
  {
    title: "9. Changes to These Terms",
    body: [
      "We may update these terms from time to time. Continued use of Al-Trader after changes take effect constitutes acceptance of the revised terms.",
    ],
  },
  {
    title: "10. Contact",
    body: [
      "Questions about these terms? Contact us at support@al-trader.org.",
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <section className="border-b-2 border-slate-200 bg-gradient-to-b from-indigo-50/70 via-white to-indigo-50/40 py-12 lg:py-16">
        <Container className="max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
            Legal
          </p>
          <h1 className="font-display mt-3 text-4xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-5xl">
            Terms of Service
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-slate-600">
            The terms that govern your use of the Al-Trader AI trading
            platform.
          </p>
          <p className="mt-4 text-sm text-slate-500">
            Last updated: October 21, 2026
          </p>
        </Container>
      </section>
      <section className="bg-white py-12 lg:py-20">
        <Container className="max-w-3xl">
          <div className="space-y-10">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="font-display text-2xl font-semibold text-slate-900">
                {section.title}
              </h2>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-relaxed text-slate-600">
                {section.body.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        </Container>
      </section>
    </>
  );
}
