import { Star } from "lucide-react";

export function FiveStars({ size = "md" }) {
  const sizeClass = size === "lg" ? "h-8 w-8 md:h-9 md:w-9" : "h-6 w-6";
  return (
    <span
      className="inline-flex items-center gap-1"
      role="img"
      aria-label="Rated five out of five stars"
    >
      {[0, 1, 2, 3, 4].map((n) => (
        <Star
          key={n}
          className={`${sizeClass} text-[#FFC244]`}
          fill="#FFC244"
          strokeWidth={1}
          aria-hidden
        />
      ))}
    </span>
  );
}
