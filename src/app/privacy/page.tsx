import type { Metadata } from "next";
import { Container } from "@/components/shared";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Al-Trader collects, uses and protects your personal data. Read our privacy policy.",
  alternates: { canonical: "/privacy" },
};

const sections = [
  {
    title: "1. Information We Collect",
    body: [
      "Account information: your name, email address and account preferences when you sign up for Al-Trader.",
      "Usage data: pages visited, features used and interactions with the Al-Trader platform.",
      "Technical data: device type, browser, IP address and approximate location for security and analytics.",
    ],
  },
  {
    title: "2. How We Use Your Information",
    body: [
      "To provide, operate and improve the Al-Trader platform.",
      "To send service updates, security alerts and — with your consent — marketing emails you can opt out of at any time.",
      "To detect fraud, abuse and unauthorized access to your account.",
    ],
  },
  {
    title: "3. Exchange Connections",
    body: [
      "Al-Trader connects to exchanges and brokers through API keys you provide. Keys are encrypted at rest and used only for the functions you authorize (read-only, or trading).",
      "Your funds always remain in your own exchange account. Al-Trader never holds or withdraws client funds.",
    ],
  },
  {
    title: "4. Cookies",
    body: [
      "Al-Trader uses essential cookies to keep you signed in, and analytics cookies to understand how the platform is used. You can control cookies through your browser settings.",
    ],
  },
  {
    title: "5. Data Sharing",
    body: [
      "We never sell your personal data. We share data only with trusted processors (hosting, email and analytics providers) under strict data-processing agreements, or where required by law.",
    ],
  },
  {
    title: "6. Data Security",
    body: [
      "All data is transmitted over TLS and encrypted at rest with AES-256. Account access is protected by two-factor authentication.",
    ],
  },
  {
    title: "7. Your Rights",
    body: [
      "You may request access to, correction of, or deletion of your personal data at any time by emailing privacy@al-trader.org. We respond to all requests within 30 days.",
    ],
  },
  {
    title: "8. Contact",
    body: [
      "Questions about this policy? Contact us at privacy@al-trader.org or via the Al-Trader contact page.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <section className="border-b-2 border-slate-200 bg-gradient-to-b from-indigo-50/70 via-white to-indigo-50/40 py-12 lg:py-16">
        <Container className="max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
            Legal
          </p>
          <h1 className="font-display mt-3 text-4xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-slate-500">
            Last updated: October 21, 2026
          </p>
        </Container>
      </section>
      <section className="bg-white py-12 lg:py-16">
        <Container className="max-w-3xl">
          <div className="space-y-10">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="font-display text-xl font-semibold text-slate-900">
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
