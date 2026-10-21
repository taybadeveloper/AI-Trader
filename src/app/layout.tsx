import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const siteUrl = "https://al-trader.org";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Al-Trader | AI-Powered Trading Platform — Trade Smarter with AI",
    template: "%s | Al-Trader",
  },
  description:
    "Al-Trader is an AI-powered trading platform that scans global markets 24/7, generates high-accuracy trading signals and automates trades for forex, crypto and stocks. Start trading smarter with Al-Trader today.",
  keywords: [
    "al-trader",
    "al trader",
    "al-trader.org",
    "AI trading platform",
    "AI trading signals",
    "automated trading",
    "algorithmic trading",
    "forex trading AI",
    "crypto trading bot",
  ],
  applicationName: "Al-Trader",
  authors: [{ name: "Al-Trader", url: siteUrl }],
  creator: "Al-Trader",
  publisher: "Al-Trader",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Al-Trader",
    locale: "en_US",
    title: "Al-Trader | AI-Powered Trading Platform",
    description:
      "AI trading signals, automated execution and intelligent risk management for forex, crypto and stocks. Trade smarter with Al-Trader.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Al-Trader — AI-powered trading platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Al-Trader | AI-Powered Trading Platform",
    description:
      "AI trading signals, automated execution and intelligent risk management. Trade smarter with Al-Trader.",
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Al-Trader",
      url: siteUrl,
      logo: `${siteUrl}/icon.svg`,
      sameAs: ["https://x.com/altrader", "https://www.linkedin.com/company/altrader"],
    },
    {
      "@type": "WebSite",
      name: "Al-Trader",
      url: siteUrl,
    },
    {
      "@type": "SoftwareApplication",
      name: "Al-Trader",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web",
      url: siteUrl,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      description:
        "AI-powered trading platform with automated signals, execution and risk management for forex, crypto and stocks.",
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
