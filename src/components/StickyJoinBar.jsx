import { useEffect, useState } from "react";
import { ArrowRight, HeartHandshake } from "lucide-react";
import { LINKS } from "../content/site";
import { isEmbedded } from "../lib/embed";

export function StickyJoinBar() {
  const [visible, setVisible] = useState(false);
  const embedded = isEmbedded();
  useEffect(() => {
    if (embedded) return;
    const onScroll = () => {
      const y = window.scrollY;
      const root = document.documentElement;
      const nearBottom = y + window.innerHeight > root.scrollHeight - 620;
      setVisible(y > 700 && !nearBottom);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, {
      passive: true,
    });
    return () => window.removeEventListener("scroll", onScroll);
  }, [embedded]);
  return embedded ? null : (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 transition-transform duration-[260ms] [transition-timing-function:cubic-bezier(0.23,1,0.32,1)] ${visible ? "translate-y-0" : "translate-y-full"}`}
      aria-hidden={!visible}
    >
      <div className="bg-[var(--color-pacific-deep)]/97 backdrop-blur-md border-t border-[var(--color-turquoise)]/30 shadow-[0_-14px_36px_-18px_rgba(4,20,34,0.6)]">
        <div className="container flex items-center justify-between gap-4 py-3.5">
          <p className="hidden md:block text-white/85 text-[1.08rem]">
            Shabbat is Friday at 6:00pm — everyone is welcome.
          </p>
          <div className="flex items-center gap-3 w-full md:w-auto">
            <a
              href={LINKS.intake}
              target="_blank"
              rel="noreferrer"
              tabIndex={visible ? 0 : -1}
              className="sms-btn sms-btn-primary flex-1 md:flex-none !justify-center !px-6 !py-3.5 !text-[1.06rem]"
            >
              Join us
              <ArrowRight className="h-4.5 w-4.5" />
            </a>
            <a
              href={LINKS.donate}
              target="_blank"
              rel="noreferrer"
              tabIndex={visible ? 0 : -1}
              className="sms-btn sms-btn-coral flex-1 md:flex-none !justify-center !px-6 !py-3.5 !text-[1.06rem]"
            >
              Donate
              <HeartHandshake className="h-4.5 w-4.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
