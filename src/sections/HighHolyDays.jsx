import { ArrowRight, Ticket } from "lucide-react";
import { VideoCard } from "../components/VideoCard";
import { LINKS, VIDEOS } from "../content/site";

export function HighHolyDays() {
  return (
    <>
      <section
        id="high-holy-days"
        className="relative sms-lightband overflow-hidden py-18 md:py-22"
      >
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-44 md:h-56"
          style={{
            background:
              "linear-gradient(to bottom, var(--color-sand) 0%, rgba(247,243,236,0.5) 45%, transparent 100%)",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-y-0 right-0 w-1/2 opacity-40 blur-3xl"
          style={{
            background:
              "radial-gradient(60% 60% at 70% 40%, var(--accent-strong), transparent 70%)",
          }}
        />
        <div
          aria-hidden
          className="absolute -bottom-24 left-[-4%] h-[26rem] w-[26rem] rounded-full opacity-45 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, var(--color-turquoise), transparent 68%)",
          }}
        />
        <div className="container relative py-4">
          <div className="grid gap-10 lg:grid-cols-[0.62fr_1.38fr] lg:gap-14 items-center [&>*]:min-w-0">
            <VideoCard
              src={VIDEOS.hhd.src}
              label={VIDEOS.hhd.label}
              className="mx-auto lg:mx-0 w-full max-w-[14.5rem]"
            />
            <div className="sms-reveal">
              <p className="sms-eyebrow mb-4 flex items-center gap-2">
                <Ticket className="h-4 w-4" />
                High Holy Days
              </p>
              <h2 className="sms-h2 text-[var(--color-pacific)] mb-5">
                Need a place to go for{" "}
                <span className="sms-swash sms-swash-wrap sms-swash-wrap-lg">
                  Rosh Hashanah and Yom Kippur?
                </span>
              </h2>
              <p className="text-[var(--color-ink)]/80 text-[1.24rem] leading-[1.6] mb-8 max-w-2xl">{`You don't have to be a member and you don't need to know anybody. Reserve a seat, park easily, and sit with a congregation that will introduce itself to you faster than you can say, "Shofar!"`}</p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={LINKS.hhd}
                  target="_blank"
                  rel="noreferrer"
                  className="sms-btn sms-btn-coral sms-btn-coral-pulse !px-8 !py-4.5 !text-[1.06rem]"
                >
                  Reserve High Holy Days seats
                  <ArrowRight className="h-4.5 w-4.5" />
                </a>
                <a
                  href="#welcome"
                  className="sms-btn sms-btn-outline !px-6 !py-4 !text-[1.02rem] !border-[var(--color-pacific)]/30 !text-[var(--color-pacific)]"
                >
                  What to expect
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
