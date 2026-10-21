import { useEffect } from "react";
import { isEmbedded } from "./embed";

export function useScrollReveal() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll(".sms-reveal"));
    if (!elements.length) return;
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      isEmbedded()
    ) {
      elements.forEach((entries) => entries.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (el) => {
        el.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target;
            const delay = Number(target.dataset.revealDelay ?? 0);
            window.setTimeout(() => target.classList.add("is-visible"), delay);
            observer.unobserve(target);
          }
        });
      },
      {
        rootMargin: "0px 0px -8% 0px",
        threshold: 0.08,
      },
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
