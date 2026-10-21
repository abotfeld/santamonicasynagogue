import { useEffect } from "react";

// True when the site is shown inside another page (an iframe) or opened with
// ?embed in the address. Embedded mode hides the review switcher and the
// sticky Join/Donate bar, and reports the page height to the outer page.
// The preview link is itself framed, so there only ?embed counts.
const IS_PREVIEW = import.meta.env.MODE === "preview";

export function isEmbedded() {
  if (typeof window === "undefined") return false;
  try {
    return (
      new URLSearchParams(window.location.search).has("embed") ||
      (!IS_PREVIEW && window.self !== window.top)
    );
  } catch {
    return true;
  }
}
export function useEmbedBridge() {
  useEffect(() => {
    if (!isEmbedded()) return;
    const root = document.documentElement;
    root.setAttribute("data-embed", "1");
    const retargetLinks = () => {
      document.querySelectorAll('a[target="_blank"]').forEach((link) => {
        link.target = "_top";
      });
    };
    retargetLinks();
    let lastHeight = 0;
    let frame = 0;
    const postHeight = () => {
      const body = document.body;
      const fullHeight = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        root.scrollHeight,
      );
      const footer = document.querySelector("footer");
      const footerBottom = footer
        ? footer.getBoundingClientRect().bottom + window.scrollY
        : 0;
      const height = footerBottom > 600 ? Math.ceil(footerBottom) : fullHeight;
      if (!(Math.abs(height - lastHeight) < 2)) {
        lastHeight = height;
        window.parent.postMessage(
          {
            type: "sms:height",
            height: height,
          },
          "*",
        );
      }
    };
    const schedule = () => {
      if (frame) {
        cancelAnimationFrame(frame);
      }
      frame = requestAnimationFrame(() => {
        retargetLinks();
        postHeight();
      });
    };
    schedule();
    const timers = [120, 400, 900, 1800, 3200].map((ms) =>
      window.setTimeout(schedule, ms),
    );
    window.addEventListener("resize", schedule);
    window.addEventListener("load", schedule);
    document.addEventListener("load", schedule, true);
    const mutations = new MutationObserver(schedule);
    mutations.observe(document.body, {
      subtree: true,
      childList: true,
      attributes: true,
      attributeFilter: ["class", "style"],
    });
    const resizes =
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(schedule)
        : null;
    resizes?.observe(document.body);
    const onAnchorClick = (event) => {
      const anchor = event.target?.closest?.("a[href^='#']");
      if (!anchor) return;
      const id = anchor.getAttribute("href").slice(1);
      if (!id) return;
      const target = document.getElementById(id);
      if (target) {
        event.preventDefault();
        window.parent.postMessage(
          {
            type: "sms:scrollTo",
            offset: target.getBoundingClientRect().top + window.scrollY,
          },
          "*",
        );
      }
    };
    document.addEventListener("click", onAnchorClick);
    return () => {
      timers.forEach((timer) => window.clearTimeout(timer));
      window.removeEventListener("resize", schedule);
      window.removeEventListener("load", schedule);
      document.removeEventListener("load", schedule, true);
      document.removeEventListener("click", onAnchorClick);
      mutations.disconnect();
      resizes?.disconnect();
      if (frame) {
        cancelAnimationFrame(frame);
      }
    };
  }, []);
}
