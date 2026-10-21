import Link from "next/link";
import { Container, PrimaryLink, SecondaryLink } from "@/components/shared";

const quickLinks = [
  { label: "Features", href: "/features" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Reviews", href: "/reviews" },
  { label: "FAQs", href: "/faqs" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-indigo-50/70 via-white to-white py-16 lg:py-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-28 -top-28 h-96 w-96 rounded-full bg-indigo-200/50 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-emerald-100/60 blur-3xl"
      />
      <Container className="relative text-center">
        <p className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text font-display text-[7rem] font-bold leading-none tracking-tight text-transparent sm:text-[9rem]">
          404
        </p>
        <h1 className="font-display mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Page not found
        </h1>
        <p className="mx-auto mt-4 max-w-md text-lg leading-relaxed text-slate-600">
          The page you are looking for doesn&apos;t exist or may have been
          moved. Let&apos;s get you back on track.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <PrimaryLink href="/">Go Back Home</PrimaryLink>
          <SecondaryLink href="/contact">Contact Support</SecondaryLink>
        </div>
        <nav className="mt-12" aria-label="Popular pages">
          <ul className="flex flex-wrap justify-center gap-x-7 gap-y-2">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-indigo-600 transition-colors hover:text-indigo-700"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </section>
  );
}
