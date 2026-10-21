"use client";

import { useState } from "react";
import { Container } from "./shared";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "error" | "sent">("idle");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setStatus("error");
      return;
    }
    setStatus("sent");
  }

  return (
    <section className="bg-slate-50 py-12 lg:py-16">
      <Container>
        <div className="card mx-auto max-w-4xl rounded-3xl px-6 py-10 sm:px-12">
          {status === "sent" ? (
            <div className="text-center">
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                <svg viewBox="0 0 24 24" className="h-6 w-6 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="m4 12 5 5L20 6" />
                </svg>
              </span>
              <h2 className="font-display mt-4 text-2xl font-semibold text-slate-900">
                You are on the list!
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                The Al-Trader market brief is on its way to your inbox.
              </p>
            </div>
          ) : (
            <div className="grid items-center gap-6 lg:grid-cols-2">
              <div>
                <h2 className="font-display text-2xl font-semibold tracking-tight text-slate-900">
                  Get the Al-Trader market brief
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  AI trading insights and platform updates, straight to your
                  inbox. No spam — unsubscribe anytime.
                </p>
              </div>
              <div>
                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-3 sm:flex-row">
                  <label htmlFor="newsletter-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="newsletter-email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className="w-full flex-1 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 transition-colors focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-indigo-200 transition-all hover:-translate-y-0.5 hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-200"
                  >
                    Subscribe
                  </button>
                </form>
                {status === "error" && (
                  <p role="alert" className="mt-2 text-sm text-rose-600">
                    Please enter a valid email address.
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
