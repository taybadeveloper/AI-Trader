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
      <text
        x="32"
        y="42"
        textAnchor="middle"
        fontSize="26"
        fontWeight="700"
        fill="#ffffff"
        style={{ fontFamily: "var(--font-poppins), Arial, Helvetica, sans-serif" }}
      >
        AT
      </text>
      <circle cx="50" cy="14" r="5" fill="#34d399" stroke="#ffffff" strokeWidth="2" />
    </svg>
  );
}
