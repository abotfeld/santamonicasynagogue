export function StarOfDavid({ className = "", strokeWidth = 1.7 }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 3 19.79 16.5 4.21 16.5Z" />
      <path d="M12 21 4.21 7.5 19.79 7.5Z" />
    </svg>
  );
}
