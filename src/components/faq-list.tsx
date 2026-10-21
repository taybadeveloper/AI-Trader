"use client";

import { useState } from "react";
import { faqs } from "@/lib/faqs";

export default function FaqList({ preview = false }: { preview?: boolean }) {
  const [open, setOpen] = useState<number | null>(0);
  const items = preview ? faqs.slice(0, 4) : faqs;

  return (
    <div>
      <div className="mx-auto mt-12 max-w-3xl space-y-3">
        {items.map((faq, index) => {
          const isOpen = open === index;
          return (
            <div
              key={faq.q}
              className="rounded-2xl border border-slate-200 bg-white px-6 py-5 shadow-sm"
            >
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : index)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 text-left"
              >
                <span className="font-display text-base font-semibold text-slate-900">
                  {faq.q}
                </span>
                <svg
                  viewBox="0 0 24 24"
                  className={`h-5 w-5 shrink-0 text-indigo-600 transition-transform ${isOpen ? "rotate-180" : ""}`}
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
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="pt-4 text-sm leading-relaxed text-slate-600">{faq.a}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
