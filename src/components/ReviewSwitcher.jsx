import { Link, useLocation } from "wouter";

export function ReviewSwitcher() {
  const [location] = useLocation();
  const onConceptA = location.startsWith("/concept-a");
  return (
    <span className="flex items-center gap-3">
      <span className="flex items-center gap-1.5 rounded-full bg-white/10 p-0.5">
        <span className="pl-2.5 pr-1 text-white/50 text-[0.72rem] uppercase tracking-widest">
          Concept
        </span>
        <Link
          href="/concept-a"
          className={`px-3 py-1 rounded-full text-[0.78rem] font-semibold transition-colors ${onConceptA ? "bg-[var(--color-turquoise)] text-[var(--color-pacific-deep)]" : "text-white/70 hover:text-white"}`}
        >
          A · Video
        </Link>
        <Link
          href="/concept-b"
          className={`px-3 py-1 rounded-full text-[0.78rem] font-semibold transition-colors ${onConceptA ? "text-white/70 hover:text-white" : "bg-[var(--color-turquoise)] text-[var(--color-pacific-deep)]"}`}
        >
          B · Collage ✓
        </Link>
        <Link
          href="/review"
          className="px-2.5 py-1 rounded-full text-[0.78rem] font-medium text-white/55 hover:text-white transition-colors"
        >
          Notes
        </Link>
      </span>
    </span>
  );
}
