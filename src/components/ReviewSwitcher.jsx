import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";

const ACCENT_STORAGE_KEY = "sms-accent-v2";
function AccentSwitcher() {
  const [accent, setAccent] = useState("green");
  useEffect(() => {
    const saved = window.localStorage.getItem(ACCENT_STORAGE_KEY);
    if (saved === "coral" || saved === "green") {
      setAccent(saved);
    }
  }, []);
  useEffect(() => {
    const root = document.documentElement;
    if (accent === "coral") {
      root.setAttribute("data-accent", "coral");
    } else {
      root.removeAttribute("data-accent");
    }
    window.localStorage.setItem(ACCENT_STORAGE_KEY, accent);
  }, [accent]);
  const options = [
    {
      key: "green",
      label: "Sea glass",
      swatch: "var(--color-leaf)",
    },
    {
      key: "coral",
      label: "Sunset",
      swatch: "var(--color-coral)",
    },
  ];
  return (
    <span className="flex items-center gap-1.5 rounded-full bg-white/10 p-0.5">
      <span className="pl-2.5 pr-1 text-white/50 text-[0.72rem] uppercase tracking-widest">
        Accent
      </span>
      {options.map((option) => (
        <button
          key={option.key}
          type="button"
          onClick={() => setAccent(option.key)}
          className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[0.78rem] font-semibold transition-colors ${accent === option.key ? "bg-white/90 text-[var(--color-pacific-deep)]" : "text-white/70 hover:text-white"}`}
        >
          <span
            aria-hidden
            className="h-2.5 w-2.5 rounded-full ring-1 ring-black/10"
            style={{
              background: option.swatch,
            }}
          />
          {option.label}
        </button>
      ))}
    </span>
  );
}
export function ReviewSwitcher() {
  const [location] = useLocation();
  const onConceptA = location.startsWith("/concept-a");
  return (
    <span className="flex items-center gap-3">
      <AccentSwitcher />
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
