export default function Logo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="al-logo-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4f46e5" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="14" fill="url(#al-logo-grad)" />
      {/* Emerald candlestick */}
      <line x1="18" y1="36" x2="18" y2="22" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round" />
      <rect x="13.5" y="26" width="9" height="8" rx="1.5" fill="#34d399" />
      {/* White rising trend arrow */}
      <path
        d="M10 48 L28 36 L35 40 L45 24"
        fill="none"
        stroke="#ffffff"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M45 24 L53 18 L53 30 Z" fill="#ffffff" />
    </svg>
  );
}
