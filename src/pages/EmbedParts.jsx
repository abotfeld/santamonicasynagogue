import { useEffect } from "react";
import { Footer } from "../components/Footer";
import { TopBar } from "../components/TopBar";

// Menu bar and footer on their own, for ShulCloud pages that can't hold a
// whole site page — the calendar (thesms.org/cal.php). The ShulCloud
// "JS Override" setting puts these two pages above and below the calendar:
//   /embed/header?embed=1&nav=1   → top bar + menu
//   /embed/footer?embed=1         → footer
// Each reports its height to the outer page as { type: "sms:part", part, height }
// so the frame grows when the phone menu opens.
function usePartHeight(part) {
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-embed", "1");
    root.style.background = "transparent";
    document.body.style.background = "transparent";
    let last = 0;
    const send = () => {
      const node = document.getElementById("sms-part");
      if (!node) return;
      const height = Math.ceil(node.getBoundingClientRect().height);
      if (Math.abs(height - last) < 1) return;
      last = height;
      window.parent.postMessage({ type: "sms:part", part, height }, "*");
    };
    send();
    const resizes =
      typeof ResizeObserver !== "undefined" ? new ResizeObserver(send) : null;
    const node = document.getElementById("sms-part");
    if (node) resizes?.observe(node);
    const timers = [200, 800, 2000].map((ms) => window.setTimeout(send, ms));
    window.addEventListener("load", send);
    return () => {
      resizes?.disconnect();
      timers.forEach((t) => window.clearTimeout(t));
      window.removeEventListener("load", send);
    };
  }, [part]);
}

export function EmbedHeader() {
  usePartHeight("header");
  return (
    <div id="sms-part">
      <TopBar overHero={false} showNav />
    </div>
  );
}

export function EmbedFooter() {
  usePartHeight("footer");
  return (
    <div id="sms-part">
      <Footer />
    </div>
  );
}
