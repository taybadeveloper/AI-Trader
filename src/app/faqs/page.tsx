import type { Metadata } from "next";
import FaqList from "@/components/faq-list";
import { Container, SectionHeading } from "@/components/shared";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Frequently asked questions about Al-Trader — how the AI trading platform works, supported exchanges, security, subscriptions and more.",
  alternates: { canonical: "/faqs" },
};

export default function FAQsPage() {
  return (
    <>
      <section className="border-b-2 border-slate-200 bg-gradient-to-b from-indigo-50/70 via-white to-indigo-50/40 py-12 lg:py-16">
        <Container>
          <SectionHeading
            eyebrow="FAQs"
            title="Frequently asked questions"
            description="Everything you need to know about trading with Al-Trader."
            size="lg"
          />
          <FaqList />
        </Container>
      </section>
    </>
  );
}
