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
        <Container className="max-w-5xl">
          <div className="grid gap-10 lg:grid-cols-3">
            {/* Content column */}
            <div className="lg:col-span-2">
              {/* Cover image (mobile only — shown above content) */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={post.cover}
                alt={`${post.title} — cover illustration`}
                width={1200}
                height={630}
                className="mb-8 w-full rounded-2xl border border-slate-200 shadow-lg shadow-indigo-100 lg:hidden"
              />

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
            </div>

            {/* Images sidebar (desktop) */}
            <aside className="hidden lg:block">
              <div className="sticky top-24 space-y-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.cover}
                  alt={`${post.title} — cover illustration`}
                  width={1200}
                  height={630}
                  className="w-full rounded-2xl border border-slate-200 shadow-lg shadow-indigo-100"
                />
                <div className="card p-5">
                  <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600">
                    Al-Trader
                  </p>
                  <ul className="mt-3 space-y-2.5 text-sm text-slate-600">
                    {[
                      "24/7 AI market monitoring",
                      "Forex, crypto & stocks",
                      "Risk controls on every trade",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="m4 12 5 5L20 6" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl bg-indigo-600 p-6 text-center">
                  <p className="font-display text-sm font-semibold text-white">
                    Ready to trade smarter?
                  </p>
                  <Link
                    href="/invest"
                    className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-indigo-700 transition-colors hover:bg-indigo-50"
                  >
                    Explore Plans
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
