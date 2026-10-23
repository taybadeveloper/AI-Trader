import type { Metadata } from "next";
import SignupForm from "@/components/signup-form";
import { Container, SectionHeading } from "@/components/shared";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the Al-Trader team — support, sales and partnership questions are answered within 24 hours.",
  alternates: { canonical: "/contact" },
};

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
          <div className="mx-auto max-w-2xl">
            <SignupForm />
          </div>
        </Container>
      </section>
    </>
  );
}
