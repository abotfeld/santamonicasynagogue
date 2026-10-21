import { ArrowDown } from "lucide-react";
import { ScrollMark } from "../components/ScrollMark";
import { VideoCard } from "../components/VideoCard";
import { WaveDivider } from "../components/WaveDivider";
import { LINKS, VIDEOS } from "../content/site";

export function HeroVideo() {
  return (
    <section
      id="top"
      className="relative -mt-[4.6rem] pt-[4.6rem] bg-[var(--color-pacific-deep)] sms-grain overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-55"
        style={{
          background:
            "radial-gradient(120% 90% at 70% 15%, var(--color-ocean-light) 0%, transparent 60%), radial-gradient(90% 70% at 20% 80%, var(--color-turquoise) 0%, transparent 65%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(105deg, rgba(6,32,52,0.95) 0%, rgba(8,44,70,0.88) 45%, rgba(9,58,92,0.62) 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute -top-32 -left-24 h-[34rem] w-[34rem] rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--color-turquoise), transparent 68%)",
        }}
      />
      <div
        aria-hidden
        className="absolute top-[18%] right-[38%] h-[24rem] w-[24rem] rounded-full opacity-22 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--accent-strong), transparent 66%)",
        }}
      />
      <ScrollMark
        className="sms-watermark sms-watermark-light -left-32 bottom-[-6rem] h-[34rem] w-[34rem] hidden lg:block"
        stroke="currentColor"
      />
      <div className="container relative pt-12 pb-24 md:pt-16 md:pb-28">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <p className="sms-eyebrow sms-eyebrow-light mb-5">
              Reform · Santa Monica · Since 1981
            </p>
            <h1 className="text-white font-semibold text-[2.6rem] sm:text-[3.2rem] lg:text-[3.8rem] leading-[1.04] mb-6 max-w-[16ch]">
              A synagogue where they know{" "}
              <span className="sms-swash sms-swash-bright">your name.</span>
            </h1>
            <p className="text-white/78 text-[1.1rem] md:text-[1.2rem] leading-relaxed max-w-xl mb-9">
              We're a small Reform congregation two miles from the ocean.
              Shabbat is Friday at 6:00pm — music, meaning, and a table of
              people glad you came. Come as you are. Parking is easy.
            </p>
            <div className="flex flex-wrap gap-3.5 mb-10">
              <a
                href={LINKS.intake}
                target="_blank"
                rel="noreferrer"
                className="sms-btn sms-btn-primary !text-[1.02rem] !px-7 !py-4"
              >
                Explore membership
              </a>
              <a
                href={LINKS.hhd}
                target="_blank"
                rel="noreferrer"
                className="sms-btn sms-btn-ghost !text-[1.02rem] !px-7 !py-4"
              >
                High Holy Days 2026
              </a>
            </div>
            <a
              href="#worship"
              className="inline-flex items-center gap-2.5 text-[var(--color-cyan-light)] text-[1.06rem] font-medium hover:text-white transition-colors group"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-cyan-light)]/40 group-hover:bg-[var(--color-cyan-light)]/15 transition-colors">
                <ArrowDown className="h-4 w-4" />
              </span>
              This week at the synagogue
            </a>
          </div>
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[19.5rem] sm:max-w-[21rem]">
              <VideoCard
                src={VIDEOS.special.src}
                label={VIDEOS.special.label}
                autoPlay
              />
              <p className="text-center text-white/45 text-[0.78rem] mt-4">
                Captions are burned into the clip · tap for sound
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-10 -mb-px">
        <WaveDivider
          color="var(--color-pacific)"
          position="bottom"
          height={70}
        />
      </div>
    </section>
  );
}
