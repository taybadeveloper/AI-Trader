import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, posts } from "@/lib/posts";
import { Container } from "@/components/shared";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blogs/${post.slug}` },
    openGraph: { type: "article", publishedTime: post.dateISO },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <section className="border-b-2 border-slate-200 bg-gradient-to-b from-indigo-50/70 via-white to-indigo-50/40 py-12 lg:py-16">
        <Container className="max-w-3xl text-center">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-700"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M19 12H5m7-7-7 7 7 7" />
            </svg>
            Back to blogs
          </Link>
          <div className="mt-6">
            <span className="inline-flex rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
              {post.tag}
            </span>
          </div>
          <h1 className="font-display mt-4 text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl">
            {post.title}
          </h1>
          <p className="mt-4 text-sm text-slate-500">
            {post.date} · {post.readTime}
          </p>
        </Container>
      </section>

      <section className="bg-white py-12 lg:py-20">
        <Container className="max-w-3xl">
          <div>
            {post.blocks.map((block, index) => {
              if ("h2" in block) {
                return (
                  <h2
                    key={index}
                    className="font-display mt-10 text-2xl font-semibold tracking-tight text-slate-900"
                  >
                    {block.h2}
                  </h2>
                );
              }
              if ("list" in block) {
                return (
                  <ul key={index} className="mt-5 list-disc space-y-2 pl-6 text-base leading-relaxed text-slate-600">
                    {block.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={index} className="mt-5 text-base leading-relaxed text-slate-600">
                  {block.p}
                </p>
              );
            })}
          </div>

          <div className="mt-12 rounded-2xl border border-indigo-100 bg-indigo-50/60 p-8 text-center">
            <h2 className="font-display text-xl font-semibold text-slate-900">
              Ready to invest smarter with Al-Trader?
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Explore AI-managed investment plans built for every budget.
            </p>
            <Link
              href="/invest"
              className="mt-5 inline-flex items-center justify-center rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-indigo-200 transition-colors hover:bg-indigo-700"
            >
              Explore Investment Plans
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
