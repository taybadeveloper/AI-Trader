import type { Metadata } from "next";
import NewsList from "@/components/news-list";
import { Container, SectionHeading } from "@/components/shared";

export const metadata: Metadata = {
  title: "Crypto News",
  description:
    "The latest crypto news and market updates — Bitcoin, Ethereum and altcoin stories that matter for traders.",
  alternates: { canonical: "/news/crypto" },
};

const items = [
  {
    date: "Oct 18, 2026",
    title: "Bitcoin Holds Key Support as Institutional Demand Grows",
    summary:
      "Bitcoin consolidated above a key support level this week as institutional inflows continued. Analysts point to growing ETF adoption and improving on-chain fundamentals as drivers of the recent stability.",
  },
  {
    date: "Oct 15, 2026",
    title: "Ethereum Network Upgrade Targets Lower Trading Fees",
    summary:
      "The latest Ethereum upgrade aims to reduce transaction costs and improve throughput. Traders using automated strategies may benefit from lower gas fees during peak hours.",
  },
  {
    date: "Oct 10, 2026",
    title: "Stablecoin Market Cap Reaches New All-Time High",
    summary:
      "The total market capitalization of major stablecoins crossed a new record, signaling strong demand for digital-dollar liquidity across trading platforms.",
  },
  {
    date: "Oct 5, 2026",
    title: "Crypto Regulation Updates: What Traders Should Know",
    summary:
      "Several jurisdictions announced new frameworks for digital asset exchanges. Here is what the changes mean for retail and automated traders.",
  },
];

export default function CryptoNewsPage() {
  return (
    <>
      <section className="border-b-2 border-slate-200 bg-gradient-to-b from-indigo-50/70 via-white to-indigo-50/40 py-12 lg:py-16">
        <Container>
          <SectionHeading
            eyebrow="News"
            title="Crypto News"
            description="The latest stories from the crypto market — Bitcoin, Ethereum and the altcoin world."
            size="lg"
          />
        </Container>
      </section>
      <NewsList
        items={items}
        active="/news/crypto"
        image="/news/news-crypto.svg"
        imageAlt="Crypto market blockchain illustration"
      />
    </>
  );
}
