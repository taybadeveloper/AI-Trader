import type { Metadata } from "next";
import NewsList from "@/components/news-list";
import { Container, SectionHeading } from "@/components/shared";

export const metadata: Metadata = {
  title: "Forex News",
  description:
    "The latest forex news and currency market updates — dollar, euro, pound and central bank stories that move the markets.",
  alternates: { canonical: "/news/forex" },
};

const items = [
  {
    date: "Oct 20, 2026",
    title: "US Dollar Strengthens Ahead of Fed Policy Meeting",
    summary:
      "The dollar index climbed as markets positioned for the upcoming Federal Reserve meeting. Currency pairs across the board are showing increased volatility.",
  },
  {
    date: "Oct 16, 2026",
    title: "EUR/USD Reacts to Eurozone Inflation Data",
    summary:
      "The euro moved sharply after inflation figures came in above expectations, reviving debate about the pace of ECB policy adjustments.",
  },
  {
    date: "Oct 11, 2026",
    title: "GBP Volatility Rises on UK Economic Outlook",
    summary:
      "Sterling swung between gains and losses as traders weighed mixed signals from UK growth data and government spending plans.",
  },
  {
    date: "Oct 6, 2026",
    title: "Central Bank Policy: What to Watch This Quarter",
    summary:
      "From the Fed to the Bank of Japan, central bank calendars are packed. These are the meetings and data releases most likely to move currency markets.",
  },
];

export default function ForexNewsPage() {
  return (
    <>
      <section className="border-b-2 border-slate-200 bg-gradient-to-b from-indigo-50/70 via-white to-indigo-50/40 py-12 lg:py-16">
        <Container>
          <SectionHeading
            eyebrow="News"
            title="Forex News"
            description="Currency market updates and the central bank stories moving forex prices."
            size="lg"
          />
        </Container>
      </section>
      <NewsList
        items={items}
        active="/news/forex"
        image="/news/news-forex.svg"
        imageAlt="Forex globe and exchange arrows illustration"
      />
    </>
  );
}
