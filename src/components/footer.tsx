import Link from "next/link";
import CurrentYear from "./current-year";
import Logo from "./logo";

const columns = [
  {
    title: "Quick Links",
    links: [
      { href: "/", label: "Home" },
      { href: "/how-it-works", label: "How It Works" },
      { href: "/invest", label: "Invest" },
      { href: "/market", label: "Market" },
      { href: "/blogs", label: "Blogs" },
      { href: "/news/crypto", label: "News" },
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

export default function Footer() {
  return (
    <footer className="border-t border-slate-700 bg-indigo-50">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-10 text-center md:grid-cols-4 md:text-left">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center justify-center gap-2.5 md:justify-start">
              <Logo className="h-9 w-9" />
              <span className="font-display text-xl font-bold tracking-tight text-slate-900">
                AL<span className="text-indigo-600">-</span>TRADER
              </span>
            </Link>
            <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-slate-600 md:mx-0">
              Al-Trader is an AI-powered trading platform for forex, crypto and
              stocks. Deep-learning signals, automated execution and disciplined
              risk management — all in one place.
            </p>
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
