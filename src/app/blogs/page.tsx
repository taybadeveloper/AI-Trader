import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/lib/posts";
import { Container, SectionHeading } from "@/components/shared";

export const metadata: Metadata = {
  title: "Blogs",
  description:
    "Investing guides, market comparisons and trading tips from the Al-Trader team — learn how AI trading works and how to trade with less risk.",
  alternates: { canonical: "/blogs" },
};

export default function BlogsPage() {
  return (
    <>
      <section className="border-b-2 border-slate-200 bg-gradient-to-b from-indigo-50/70 via-white to-indigo-50/40 py-12 lg:py-16">
        <Container>
          <SectionHeading
            eyebrow="Blogs"
            title="The Al-Trader Blog"
            description="Investing guides, market comparisons and trading tips from the Al-Trader team."
            size="lg"
          />
        </Container>
      </section>

      <section className="bg-white py-12 lg:py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blogs/${post.slug}`}
                className="card group flex flex-col p-6"
              >
                <span className="inline-flex w-fit rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                  {post.tag}
                </span>
                <h2 className="font-display mt-4 text-lg font-semibold leading-snug text-slate-900 group-hover:text-indigo-700">
                  {post.title}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                  {post.description}
                </p>
                <p className="mt-5 border-t border-slate-100 pt-4 text-xs text-slate-500">
                  {post.date} · {post.readTime}
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
