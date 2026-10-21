import { Link } from "wouter";
import { ScrollMark } from "./ScrollMark";

export function Wordmark({ tone = "dark", compact = false }) {
  const nameColor =
    tone === "light" ? "text-white" : "text-[var(--color-pacific)]";
  const taglineColor =
    tone === "light"
      ? "text-[var(--color-cyan-light)]"
      : "text-[var(--color-turquoise-deep)]";
  const markStroke = tone === "light" ? "#7FE0E8" : "#1FBFC4";
  return (
    <Link
      href="/"
      aria-label="The Santa Monica Synagogue home"
      className="flex items-center gap-2 sm:gap-3 group shrink-0"
    >
      <ScrollMark
        className={`${compact ? "h-10 w-10 sm:h-12 sm:w-12" : "h-11 w-11 sm:h-14 sm:w-14"} shrink-0 transition-transform duration-300 group-hover:scale-105`}
        stroke={markStroke}
      />
      <span className="flex flex-col leading-none whitespace-nowrap">
        <span
          className={`font-[family-name:var(--font-display)] font-semibold ${nameColor} ${compact ? "text-[1rem] sm:text-[1.15rem]" : "text-[1rem] sm:text-[1.18rem]"} tracking-[-0.02em]`}
        >
          The Santa Monica
        </span>
        <span
          className={`font-[family-name:var(--font-display)] font-semibold ${nameColor} ${compact ? "text-[1rem] sm:text-[1.15rem]" : "text-[1rem] sm:text-[1.18rem]"} tracking-[-0.02em] -mt-0.5`}
        >
          Synagogue
        </span>
        <span
          className={`${taglineColor} text-[0.55rem] font-semibold tracking-[0.22em] uppercase mt-1`}
        >
          Reform · Since 1981
        </span>
      </span>
    </Link>
  );
}
