import Hero from "@/components/hero";
import Stats from "@/components/stats";
import WhyChoose from "@/components/why-choose";
import Markets from "@/components/markets";
import HowItWorksPreview from "@/components/how-it-works-preview";
import Security from "@/components/security";
import ReviewsPreview from "@/components/reviews-preview";
import FaqList from "@/components/faq-list";
import Explore from "@/components/explore";
import Newsletter from "@/components/newsletter";
import CTA from "@/components/cta";
import { Container, SectionHeading } from "@/components/shared";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <WhyChoose />
      <Markets />
      <HowItWorksPreview />
      <Security />
      <ReviewsPreview />
      <Explore />
      <Newsletter />
      <CTA />
      <section className="bg-slate-50 py-12 lg:py-16">
        <Container>
          <SectionHeading
            eyebrow="FAQs"
            title="Frequently asked questions"
            description="The most common questions about trading with Al-Trader — answered in plain English."
          />
          <FaqList preview />
        </Container>
      </section>
    </>
  );
}
