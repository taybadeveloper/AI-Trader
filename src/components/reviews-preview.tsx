import Stars from "./stars";
import { reviews } from "@/lib/reviews";
import { Container, SectionHeading } from "./shared";

export default function ReviewsPreview() {
  return (
    <section className="bg-white py-12 lg:py-16">
      <Container>
        <SectionHeading
          eyebrow="Reviews"
          title="Traders love Al-Trader"
          description="From first-time traders to experienced investors — here is what the Al-Trader community says."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {reviews.slice(0, 3).map((review) => (
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
  );
}
