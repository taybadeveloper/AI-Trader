import type { Metadata } from "next";
import NewsList from "@/components/news-list";
import { Container, SectionHeading } from "@/components/shared";

export const metadata: Metadata = {
  title: "Stock News",
  description:
    "The latest stock market news — equities, indices and earnings stories from the US, Europe and Asia.",
  alternates: { canonical: "/news/stock" },
};

const items = [
  {
    date: "Oct 20, 2026",
    title: "Tech Stocks Lead Rally as Earnings Season Begins",
    summary:
      "Major indices opened the week higher, led by technology shares, as investors await the first wave of quarterly earnings reports.",
  },
  {
    date: "Oct 14, 2026",
    title: "Asian Markets Close Higher on Strong Export Data",
    summary:
      "Equities across Asia advanced after export figures beat forecasts, with semiconductor and manufacturing names leading the gains.",
  },
  {
    date: "Oct 9, 2026",
    title: "Energy Sector Outlook: What Analysts Expect for Q4",
    summary:
      "Oil prices remain range-bound, but analysts see several catalysts that could move energy stocks before the end of the year.",
  },
  {
    date: "Oct 3, 2026",
    title: "What Rising Bond Yields Mean for Equities",
    summary:
      "Higher yields are reshaping valuations across the stock market. Growth and dividend stocks are reacting in very different ways.",
  },
];

export default function StockNewsPage() {
  return (
    <>
      <section className="border-b-2 border-slate-200 bg-gradient-to-b from-indigo-50/70 via-white to-indigo-50/40 py-12 lg:py-16">
        <Container>
          <SectionHeading
            eyebrow="News"
            title="Stock News"
            description="Equities, indices and earnings — the stories moving stock markets worldwide."
            size="lg"
          />
        </Container>
      </section>
      <NewsList
        items={items}
        active="/news/stock"
        image="/news/news-stock.svg"
        imageAlt="Stock market candlestick chart illustration"
      />
    </>
  );
}
