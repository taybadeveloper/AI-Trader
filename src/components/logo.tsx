export default function Logo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <path
        d="M16 48 L32 14 L48 48 L40.5 48 L32 31 L23.5 48 Z"
        fill="#4f46e5"
        fillRule="evenodd"
      />
    </svg>
  );
}
