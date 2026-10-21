import Link from "next/link";
import CurrentYear from "./current-year";
import Logo from "./logo";

const columns = [
  {
    title: "Quick Links",
    links: [
      { href: "/", label: "Home" },
      { href: "/features", label: "Features" },
      { href: "/how-it-works", label: "How It Works" },
      { href: "/reviews", label: "Reviews" },
      { href: "/faqs", label: "FAQs" },
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/disclaimer", label: "Disclaimer" },
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Service" },
    ],
  },
];

const socials = [
  {
    label: "Al-Trader on X",
    href: "https://x.com/altrader",
    icon: (
      <path d="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.41l-5.8-7.58-6.64 7.58H.47l8.6-9.83L0 1.15h7.6l5.24 6.93 6.06-6.93Zm-1.29 19.5h2.04L6.49 3.24H4.3l13.31 17.41Z" />
    ),
  },
  {
    label: "Al-Trader on LinkedIn",
    href: "https://www.linkedin.com/company/altrader",
    icon: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V8h4v2a6 6 0 0 1 2-2z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),
  },
  {
    label: "Al-Trader on YouTube",
    href: "https://youtube.com/@altrader",
    icon: (
      <>
        <path d="M23 12s0-3.8-.5-5.6a2.9 2.9 0 0 0-2-2C18.6 4 12 4 12 4s-6.6 0-8.5.4a2.9 2.9 0 0 0-2 2C1 8.2 1 12 1 12s0 3.8.5 5.6a2.9 2.9 0 0 0 2 2c1.9.4 8.5.4 8.5.4s6.6 0 8.5-.4a2.9 2.9 0 0 0 2-2c.5-1.8.5-5.6.5-5.6z" />
        <path d="m9.75 15.02 5.75-3.27-5.75-3.27v6.54z" />
      </>
    ),
  },
  {
    label: "Al-Trader on Telegram",
    href: "https://t.me/altrader_support",
    icon: (
      <path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z" />
    ),
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-10 text-center md:grid-cols-4 md:text-left">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center justify-center gap-2.5 md:justify-start">
              <Logo className="h-9 w-9" />
              <span className="font-display text-xl font-bold tracking-tight text-slate-900">
                Al<span className="text-indigo-600">-</span>Trader
              </span>
            </Link>
            <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-slate-600 md:mx-0">
              Al-Trader is an AI-powered trading platform for forex, crypto and
              stocks. Deep-learning signals, automated execution and disciplined
              risk management — all in one place.
            </p>
            <div className="mt-6 flex justify-center gap-3 md:justify-start">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 transition-colors hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600"
                >
                  <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="currentColor">
                    {social.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-600 transition-colors hover:text-indigo-700"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-12 border-t border-slate-200 pt-8 text-center text-xs leading-relaxed text-slate-500 md:text-left">
          Trading foreign exchange, cryptocurrencies and other financial
          instruments carries a high level of risk and may not be suitable for
          all investors. Al-Trader provides technology only and does not provide
          financial advice. Past performance is not indicative of future
          results.
        </p>

        <div className="mt-6 flex flex-col items-center justify-between gap-3 border-t border-slate-200 pt-6 sm:flex-row">
          <p className="text-sm text-slate-500">
            © <CurrentYear /> Al-Trader. All rights reserved.
          </p>
          <p className="text-sm text-slate-500">al-trader.org</p>
        </div>
      </div>
    </footer>
  );
}
