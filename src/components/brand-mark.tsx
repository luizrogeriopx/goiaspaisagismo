export function LeafMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={className}>
      <path
        d="M28 4C28 16.15 18.15 26 6 26c-1.1 0-2-.9-2-2C4 11.85 13.85 4 28 4Z"
        fill="currentColor"
        opacity="0.18"
      />
      <path
        d="M28 4C28 16.15 18.15 26 6 26c-1.1 0-2-.9-2-2C4 11.85 13.85 4 28 4Z"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M8.4 23.6C12.9 16.6 18.6 10.9 25 7.1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
