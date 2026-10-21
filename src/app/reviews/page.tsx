import type { Metadata } from "next";
import Stars from "@/components/stars";
import { reviews } from "@/lib/reviews";
import { Container, SectionHeading } from "@/components/shared";

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "Read Al-Trader reviews from real traders — see why forex, crypto and stock traders around the world trust the Al-Trader AI trading platform.",
  alternates: { canonical: "/reviews" },
};

export default function ReviewsPage() {
  return (
    <>
      <section className="border-b-2 border-slate-200 bg-gradient-to-b from-indigo-50/70 via-white to-indigo-50/40 py-12 lg:py-16">
        <Container>
          <SectionHeading
            eyebrow="Reviews"
            title="What traders say about Al-Trader"
            description="From first-time traders to experienced investors — real feedback from the Al-Trader community."
            size="lg"
          />

          <div className="mx-auto mt-10 flex w-fit items-center gap-6 rounded-2xl border border-slate-200 bg-white px-8 py-5 shadow-sm">
            <p className="font-display text-5xl font-bold tracking-tight text-indigo-600">
              4.8
            </p>
            <div>
              <span className="text-amber-400">
                <Stars />
              </span>
              <p className="mt-1 text-sm text-slate-600">
                Based on 2,400+ verified trader reviews
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review) => (
              <figure
                key={review.name}
                className="flex flex-col rounded-2xl border border-slate-200 bg-slate-50/60 p-6"
              >
                <span className="text-amber-400">
                  <Stars />
                </span>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate-700">
                  "{review.quote}"
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 font-display text-sm font-bold text-indigo-700">
                    {review.name.charAt(0)}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-slate-900">
                      {review.name}
                    </span>
                    <span className="block text-xs text-slate-500">{review.role}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
