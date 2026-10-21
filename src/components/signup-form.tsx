"use client";

import Link from "next/link";
import { useState } from "react";
import PhoneInput from "./phone-input";

const inputCls =
  "w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 transition-colors focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100";

export default function SignupForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("+92");
  const [phoneValid, setPhoneValid] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const first = firstName.trim();
    const last = lastName.trim();
    const mail = email.trim();

    if (!first || !last) {
      setError("Please enter your first and last name.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!phone.trim() || !phoneValid) {
      setError("Please enter a valid phone number for the selected country.");
      return;
    }
    if (!agreed) {
      setError("Please agree to the Terms of Service and Privacy Policy.");
      return;
    }

    setError("");
    setStatus("sending");
    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: first,
          lastName: last,
          email: mail,
          phone: phone.trim(),
          countryCode,
        }),
      });
      const data = (await response.json().catch(() => null)) as
        | { ok?: boolean; error?: string }
        | null;
      if (data?.ok) {
        setStatus("sent");
      } else {
        setError(
          data?.error ??
            "The registration service is unavailable right now. Please try again later."
        );
        setStatus("idle");
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
      setStatus("idle");
    }
  }

  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-indigo-100 via-white to-emerald-50"
      />
      <div className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-xl shadow-indigo-100 sm:p-7">
        {status === "sent" ? (
          <div className="py-6 text-center">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100">
              <svg viewBox="0 0 24 24" className="h-7 w-7 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="m4 12 5 5L20 6" />
              </svg>
            </span>
            <h2 className="font-display mt-5 text-2xl font-semibold text-slate-900">
              Your account request has been received!
            </h2>
            <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-slate-600">
              Our team will review your details and get back to you shortly
              with your login information.
            </p>
          </div>
        ) : (
          <>
            <h2 className="font-display text-xl font-semibold text-slate-900">
              Create your free Al-Trader account
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              Start trading with AI in minutes — no credit card required.
            </p>
            <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="signup-first-name" className="mb-1.5 block text-sm font-medium text-slate-700">
                    First name
                  </label>
                  <input
                    id="signup-first-name"
                    type="text"
                    placeholder="First name"
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                    className={inputCls}
                  />
                </div>
                <div>
                  <label htmlFor="signup-last-name" className="mb-1.5 block text-sm font-medium text-slate-700">
                    Last name
                  </label>
                  <input
                    id="signup-last-name"
                    type="text"
                    placeholder="Last name"
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)}
                    className={inputCls}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="signup-email" className="mb-1.5 block text-sm font-medium text-slate-700">
                  Email address
                </label>
                <input
                  id="signup-email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className={inputCls}
                />
              </div>
              <div>
                <label htmlFor="signup-phone" className="mb-1.5 block text-sm font-medium text-slate-700">
                  Phone number
                </label>
                <PhoneInput
                  value={phone}
                  onChange={(value, valid) => {
                    setPhone(value);
                    setPhoneValid(valid);
                  }}
                  onCountryChange={(dial) => setCountryCode(dial)}
                />
              </div>
              {error && (
                <p role="alert" className="rounded-xl border border-rose-100 bg-rose-50 px-4 py-3 text-sm text-rose-700">
                  {error}
                </p>
              )}
              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex w-full items-center justify-center rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-indigo-200 transition-colors hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "sending" ? "Submitting…" : "Create Free Account"}
              </button>
              <label className="flex cursor-pointer select-none items-start gap-2.5">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(event) => setAgreed(event.target.checked)}
                  className="mt-0.5 h-4 w-4 shrink-0 rounded border-slate-300 accent-indigo-600"
                />
                <span className="text-xs leading-relaxed text-slate-600">
                  I agree to the{" "}
                  <Link href="/terms" className="font-medium text-indigo-600 hover:text-indigo-700">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="font-medium text-indigo-600 hover:text-indigo-700">
                    Privacy Policy
                  </Link>
                </span>
              </label>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
