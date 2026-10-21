/* eslint-disable @next/next/no-img-element -- flags come from the flagcdn.com CDN */
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  getCountries,
  getCountryCallingCode,
  parsePhoneNumberFromString,
  validatePhoneNumberLength,
} from "libphonenumber-js";
import type { CountryCode } from "libphonenumber-js";
import exampleNumbers from "libphonenumber-js/examples.mobile.json";

interface Country {
  iso: CountryCode;
  name: string;
  dial: string;
  placeholder: string;
}

const examples = exampleNumbers as Record<string, string>;

// Built once per page load: every country with its dial code and a
// locally-formatted example phone number for the placeholder.
const countries: Country[] = (() => {
  const names = new Intl.DisplayNames(["en"], { type: "region" });
  const list = getCountries().map((iso) => {
    let placeholder = "123 456 7890";
    const example = examples[iso];
    if (example) {
      try {
        const parsed = parsePhoneNumberFromString(example, iso);
        if (parsed) placeholder = parsed.formatNational();
      } catch {
        // keep the generic placeholder
      }
    }
    return {
      iso,
      name: names.of(iso) ?? iso,
      dial: `+${getCountryCallingCode(iso)}`,
      placeholder,
    };
  });
  return list.sort((a, b) => a.name.localeCompare(b.name));
})();

const defaultCountry =
  countries.find((country) => country.iso === "PK") ?? countries[0];

function Flag({ iso, className = "h-3.5 w-5" }: { iso: string; className?: string }) {
  const code = iso.toLowerCase();
  return (
    <img
      src={`https://flagcdn.com/w40/${code}.png`}
      srcSet={`https://flagcdn.com/w80/${code}.png 2x`}
      width={40}
      height={30}
      alt=""
      loading="lazy"
      className={`${className} rounded-[2px] object-cover shadow-sm`}
    />
  );
}

export default function PhoneInput({
  value,
  onChange,
  onCountryChange,
}: {
  value: string;
  onChange: (phone: string, valid: boolean) => void;
  onCountryChange?: (dial: string) => void;
}) {
  const [country, setCountry] = useState<Country>(defaultCountry);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    onCountryChange?.(country.dial);
  }, [country, onCountryChange]);

  useEffect(() => {
    function handleDocClick(event: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleDocClick);
    return () => document.removeEventListener("mousedown", handleDocClick);
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return countries.slice(0, 60);
    return countries
      .filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.dial.includes(q) ||
          c.iso.toLowerCase() === q
      )
      .slice(0, 60);
  }, [query]);

  function handlePhoneChange(raw: string) {
    const cleaned = raw.replace(/[^\d+()\-\s]/g, "");
    // Limit digits to the selected country's number length —
    // typing past the maximum is blocked ("TOO_LONG").
    if (validatePhoneNumberLength(cleaned, country.iso) === "TOO_LONG") return;
    const parsed = parsePhoneNumberFromString(cleaned, country.iso);
    onChange(cleaned, !!parsed?.isValid());
  }

  return (
    <div className="relative" ref={rootRef}>
      <div className="flex rounded-xl border border-slate-300 bg-white transition-colors focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-100">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-haspopup="listbox"
          aria-expanded={open}
          className="flex shrink-0 items-center gap-2 rounded-l-xl py-2.5 pl-3 pr-2 transition-colors hover:bg-slate-50"
        >
          <Flag iso={country.iso} />
          <span className="text-sm font-medium text-slate-700">{country.dial}</span>
          <svg viewBox="0 0 24 24" className="h-4 w-4 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>
        <span className="my-2.5 w-px bg-slate-200" aria-hidden="true" />
        <input
          id="signup-phone"
          type="tel"
          value={value}
          onChange={(event) => handlePhoneChange(event.target.value)}
          placeholder={country.placeholder}
          className="w-full flex-1 rounded-r-xl bg-transparent px-3 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none"
        />
      </div>

      {open && (
        <div className="absolute left-0 right-0 top-full z-20 mt-2 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl">
          <div className="border-b border-slate-100 p-2">
            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search country or code…"
              autoFocus
              className="w-full rounded-lg bg-slate-50 px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:outline-none"
            />
          </div>
          <ul className="max-h-64 overflow-y-auto p-1.5" role="listbox" aria-label="Country list">
            {filtered.map((c) => (
              <li key={c.iso}>
                <button
                  type="button"
                  role="option"
                  aria-selected={c.iso === country.iso}
                  onClick={() => {
                    setCountry(c);
                    setOpen(false);
                    setQuery("");
                  }}
                  className="flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left transition-colors hover:bg-indigo-50"
                >
                  <Flag iso={c.iso} />
                  <span className="flex-1 truncate text-sm text-slate-700">{c.name}</span>
                  <span className="text-sm text-slate-500">{c.dial}</span>
                  {c.iso === country.iso && (
                    <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="m4 12 5 5L20 6" />
                    </svg>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
