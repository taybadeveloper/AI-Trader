import Link from "next/link";
import { Container } from "./shared";

const categories = [
  { label: "Crypto News", href: "/news/crypto" },
  { label: "Forex News", href: "/news/forex" },
  { label: "Stock News", href: "/news/stock" },
];

interface NewsItem {
  date: string;
  title: string;
  summary: string;
}

export default function NewsList({
  items,
  active,
  image,
  imageAlt,
}: {
  items: NewsItem[];
  active: string;
  image: string;
  imageAlt: string;
}) {
  const [featured, ...rest] = items;

  return (
    <section className="bg-white py-12 lg:py-20">
      <Container className="max-w-4xl">
        {/* Category tabs */}
        <nav aria-label="News categories" className="flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <Link
              key={category.href}
              href={category.href}
              aria-current={category.href === active ? "page" : undefined}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                category.href === active
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-200"
                  : "bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-indigo-50 hover:text-indigo-700"
              }`}
            >
              {category.label}
            </Link>
          ))}
        </nav>

        {/* Featured article */}
        <article className="card mt-8 overflow-hidden md:grid md:grid-cols-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            alt={imageAlt}
            width={1200}
            height={630}
            className="h-48 w-full object-cover md:h-full"
          />
          <div className="flex flex-col justify-center p-6 lg:p-8">
            <span className="w-fit rounded-lg bg-indigo-50 px-2.5 py-1 text-xs font-semibold text-indigo-700">
              Featured · {featured.date}
            </span>
            <h2 className="font-display mt-3 text-2xl font-semibold leading-snug text-slate-900">
              {featured.title}
            </h2>
            <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
              {featured.summary}
            </p>
          </div>
        </article>

        {/* Other articles */}
        <div className="mt-6 divide-y divide-slate-200 rounded-2xl bg-white shadow-sm ring-1 ring-slate-900/5">
          {rest.map((item) => {
            const [month, day] = item.date.replace(",", "").split(" ");
            return (
              <article key={item.title} className="flex items-start gap-5 p-6">
                <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-xl bg-indigo-50 text-indigo-700">
                  <span className="font-display text-lg font-bold leading-none">{day}</span>
                  <span className="mt-0.5 text-[11px] font-semibold uppercase tracking-wide">
                    {month}
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold leading-snug text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                    {item.summary}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        {/* Cross link */}
        <div className="mt-10 rounded-2xl bg-indigo-50/60 p-6 text-center">
          <p className="font-display text-sm font-semibold text-slate-900">
            Looking for more?
          </p>
          <p className="mt-1 text-sm text-slate-600">
            Explore the Al-Trader blog for investing guides and trading tips.
          </p>
          <Link
            href="/blogs"
            className="mt-4 inline-flex items-center justify-center rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-indigo-200 transition-colors hover:bg-indigo-700"
          >
            Visit the Blog
          </Link>
        </div>
      </Container>
    </section>
  );
}
