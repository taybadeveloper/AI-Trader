import { Container, SectionHeading } from "./shared";

const items = [
  {
    title: "Your funds stay in your exchange",
    description: "Al-Trader never holds or withdraws client money.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
        <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
      </svg>
    ),
  },
  {
    title: "AES-256 encryption",
    description: "Every byte of data is protected in transit and at rest.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="4" y="11" width="16" height="10" rx="2" />
        <path d="M8 11V7a4 4 0 0 1 8 0v4" />
      </svg>
    ),
  },
  {
    title: "Two-factor authentication",
    description: "2FA keeps your Al-Trader account safe from unauthorized access.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Least-privilege API keys",
    description: "Read-only by default — trading permissions only if you enable them.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="m21 2-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.78 7.78 5.5 5.5 0 0 1 7.78-7.78zm0 0L15.5 7.5m0 0 3 3L22 7l-3-3m-3.5 3.5L19 4" />
      </svg>
    ),
  },
];

export default function Security() {
  return (
    <section className="bg-indigo-50/50 py-12 lg:py-20">
      <Container>
        <SectionHeading
          eyebrow="Security & Trust"
          title="Your funds stay yours. Always."
          description="Security is not a feature at Al-Trader — it is the foundation the entire platform is built on."
        />
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-slate-200">
          {items.map((item) => (
            <div key={item.title} className="text-center lg:px-8 lg:first:pl-0 lg:last:pr-0">
              <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-indigo-600 shadow-sm lg:mx-0">
                {item.icon}
              </div>
              <h3 className="font-display mt-5 text-base font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
