import { Container, SecondaryLink, SectionHeading } from "./shared";

const steps = [
  {
    title: "Create your free account",
    description: "Sign up in under two minutes — no credit card required.",
  },
  {
    title: "Connect your exchange",
    description: "Secure API key, read-only by default. Your funds stay yours.",
  },
  {
    title: "Choose your strategy",
    description: "Set your risk level and let the AI personalize every signal.",
  },
  {
    title: "Let the AI trade",
    description: "Signals and execution run 24/7 — monitor from any device.",
  },
];

export default function HowItWorksPreview() {
  return (
    <section className="bg-white py-12 lg:py-16">
      <Container>
        <SectionHeading
          eyebrow="How It Works"
          title="Four steps to your first AI trade"
          description="Getting started with Al-Trader takes less time than reading a market report."
        />

        <div className="relative mt-14">
          {/* Horizontal connector line */}
          <div
            aria-hidden="true"
            className="absolute left-[12.5%] right-[12.5%] top-6 hidden border-t-2 border-dashed border-indigo-200 sm:block"
          />

          <ol className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {steps.map((step, index) => (
              <li
                key={step.title}
                className="relative flex flex-col items-center gap-0 text-center"
              >
                <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-indigo-600 to-violet-600 font-display text-lg font-bold text-white shadow-lg shadow-indigo-200 ring-4 ring-white">
                  {index + 1}
                </span>
                <div className="mt-5">
                  <h3 className="font-display text-lg font-semibold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-12 text-center">
          <SecondaryLink href="/how-it-works">See the Full Walkthrough</SecondaryLink>
        </div>
      </Container>
    </section>
  );
}
