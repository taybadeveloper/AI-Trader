"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "./logo";

interface NavChild {
  href: string;
  label: string;
}

interface NavLink {
  href: string;
  label: string;
  children?: NavChild[];
}

const links: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/invest", label: "Invest" },
  { href: "/market", label: "Market" },
  { href: "/blogs", label: "Blogs" },
  {
    href: "/news",
    label: "News",
    children: [
      { href: "/news/crypto", label: "Crypto News" },
      { href: "/news/forex", label: "Forex News" },
      { href: "/news/stock", label: "Stock News" },
    ],
  },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-700 bg-indigo-50/80 shadow-sm shadow-slate-900/[0.02] backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-1.5" onClick={() => setOpen(false)}>
          <Logo className="h-8 w-8" />
          <span className="font-display text-xl font-bold tracking-tight text-slate-900">
            L<span className="text-indigo-600">-</span>TRADER
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 md:flex lg:gap-1" aria-label="Main navigation">
          {links.map((link) => {
            const active = isActive(link.href);
            if (link.children) {
              return (
                <div key={link.href} className="group relative">
                  <button
                    type="button"
                    aria-haspopup="menu"
                    className={`flex items-center gap-1 rounded-lg px-2.5 py-2 text-sm font-medium transition-colors lg:px-3 ${
                      active
                        ? "bg-indigo-600 text-white"
                        : "text-slate-600 hover:bg-indigo-600 hover:text-white"
                    }`}
                  >
                    {link.label}
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4 transition-transform group-hover:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>
                  <div className="invisible absolute left-1/2 top-full z-50 -translate-x-1/2 pt-1 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    <div className="w-44 rounded-xl border border-slate-200 bg-white p-1.5 shadow-lg">
                      {link.children.map((child) => {
                        const childActive = isActive(child.href);
                        return (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`block rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                              childActive
                                ? "bg-indigo-600 text-white"
                                : "text-slate-600 hover:bg-indigo-600 hover:text-white"
                            }`}
                          >
                            {child.label}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            }
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-lg px-2.5 py-2 text-sm font-medium transition-colors lg:px-3 ${
                  active
                    ? "bg-indigo-600 text-white"
                    : "text-slate-600 hover:bg-indigo-600 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle navigation menu"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 md:hidden"
        >
          {open ? (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white px-4 pb-6 pt-3 md:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            {links.map((link) => {
              const active = isActive(link.href);
              if (link.children) {
                return (
                  <div key={link.href}>
                    <p
                      className={`rounded-lg px-3 py-2.5 text-sm font-semibold ${
                        active ? "text-indigo-700" : "text-slate-500"
                      }`}
                    >
                      {link.label}
                    </p>
                    <div className="ml-3 flex flex-col gap-1 border-l border-slate-200 pl-3">
                      {link.children.map((child) => {
                        const childActive = isActive(child.href);
                        return (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setOpen(false)}
                            aria-current={childActive ? "page" : undefined}
                            className={`rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                              childActive
                                ? "bg-indigo-600 text-white"
                                : "text-slate-700 hover:bg-indigo-600 hover:text-white"
                            }`}
                          >
                            {child.label}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                );
              }
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                    active
                      ? "bg-indigo-600 text-white"
                      : "text-slate-700 hover:bg-indigo-600 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
