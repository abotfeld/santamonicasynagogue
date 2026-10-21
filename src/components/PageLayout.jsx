import { useEffect } from "react";
import { isEmbedded, useEmbedBridge } from "../lib/embed";
import { useScrollReveal } from "../lib/useScrollReveal";
import { Footer } from "./Footer";
import { MailingListBand } from "./MailingListBand";
import { StickyJoinBar } from "./StickyJoinBar";
import { TopBar } from "./TopBar";

// Frame shared by every inner page: menu bar, page content, mailing list
// sign-up, footer and the sticky Join/Donate bar.
// `scrollTo` is the id of a section to open at (used by old addresses such as
// /connect/softball, or a #section in the address); otherwise the page opens
// at the top. Inside thesms.org the outer page does the scrolling.
export function PageLayout({ children, scrollTo }) {
  useScrollReveal();
  useEmbedBridge();
  useEffect(() => {
    const id = scrollTo || decodeURIComponent(window.location.hash.slice(1));
    const target = id && document.getElementById(id);
    if (target && isEmbedded()) {
      // Wait for the outer page to size the frame, then ask it to scroll.
      const send = () =>
        window.parent.postMessage(
          {
            type: "sms:scrollTo",
            offset: target.getBoundingClientRect().top + window.scrollY - 12,
          },
          "*",
        );
      const timers = [600, 1500].map((ms) => window.setTimeout(send, ms));
      return () => timers.forEach((t) => window.clearTimeout(t));
    }
    if (target) {
      const header = document.querySelector("header");
      const offset = header ? header.getBoundingClientRect().height + 12 : 0;
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.scrollY - offset,
        behavior: "instant",
      });
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [scrollTo]);
  return (
    <div className="min-h-screen bg-[var(--color-sand)]">
      <TopBar overHero={false} showNav />
      <main>{children}</main>
      <MailingListBand />
      <Footer />
      <StickyJoinBar />
    </div>
  );
}
