export default function Logo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <rect width="64" height="64" rx="16" fill="#4f46e5" />
      <circle cx="32" cy="9" r="3.5" fill="#34d399" stroke="#ffffff" strokeWidth="1.5" />
      <path
        d="M16 48 L32 14 L48 48 L40.5 48 L32 31 L23.5 48 Z"
        fill="#ffffff"
        fillRule="evenodd"
      />
    </svg>
  );
}
