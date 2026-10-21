import { ArrowRight, Calendar, MapPin } from "lucide-react";
import { ScrollMark } from "../components/ScrollMark";
import { SmartLink } from "../components/SmartLink";
import { EVENT_LISTINGS } from "../content/pages";
import { EVENTS, NAV_LINKS } from "../content/site";
import { isPast } from "../lib/dates";

const CALENDAR_URL = NAV_LINKS.find((link) => link.label === "Calendar").href;

// Weekly Shabbat first, then any upcoming dated events (newest listed in
// src/content/pages.js), then year-round highlights to fill three cards.
function homepageCards() {
  const [shabbat, ...yearRound] = EVENTS;
  const upcoming = EVENT_LISTINGS.filter((event) => !isPast(event.isoDate))
    .reverse()
    .map((event) => ({
      month: event.month,
      day: event.day,
      title: event.title,
      time: event.time,
      place: event.place,
      blurb: event.paragraphs[0],
      tone: "coral",
      href: "/events",
    }));
  return [shabbat, ...upcoming, ...yearRound].slice(0, 3);
}

export function Events() {
  const TONES = {
    turquoise: {
      chip: "bg-[var(--color-cyan-pale)] text-[var(--color-ocean)]",
      rule: "var(--color-turquoise)",
    },
    ocean: {
      chip: "bg-[var(--color-cyan-pale)] text-[var(--color-pacific)]",
      rule: "var(--color-ocean)",
    },
    coral: {
      chip: "bg-[#FFE9E5] text-[#9E2E22]",
      rule: "var(--accent-strong)",
    },
  };
  return (
    <section
      id="events"
      className="relative sms-lightband py-20 md:py-24 overflow-hidden"
    >
      <ScrollMark
        className="sms-watermark -left-32 bottom-0 h-[26rem] w-[26rem] hidden md:block"
        stroke="currentColor"
      />
      <div className="container relative">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-11 sms-reveal">
          <div className="max-w-xl">
            <p className="sms-eyebrow mb-3">On the calendar</p>
            <h2 className="sms-h2 text-[var(--color-pacific)]">
              {"You're "}
              <span className="sms-swash">invited!</span>
            </h2>
          </div>
          <a
            href={CALENDAR_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-[1.06rem] font-semibold text-[var(--color-turquoise-deep)] hover:gap-3 transition-all duration-200"
          >
            <Calendar className="h-4.5 w-4.5" />
            See the full calendar
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="grid gap-6 md:grid-cols-3 md:items-start">
          {homepageCards().map((event, index) => {
            const tone = TONES[event.tone];
            const offsets = ["md:mt-0", "md:mt-9", "md:mt-3"];
            return (
              <article
                key={event.title}
                className={`sms-reveal sms-lift sms-glass-card rounded-[1.35rem] overflow-hidden flex flex-col ${offsets[index]}`}
                data-reveal-delay={index * 80}
              >
                <div
                  className="h-1.5 w-full"
                  style={{
                    background: tone.rule,
                  }}
                />
                <div className="p-7 flex flex-col flex-1">
                  <div className="flex items-center gap-4 mb-5">
                    <div
                      className={`flex flex-col items-center justify-center h-16 w-16 rounded-2xl shrink-0 ${tone.chip}`}
                    >
                      <span className="text-[0.85rem] font-bold uppercase tracking-widest">
                        {event.month}
                      </span>
                      <span className="font-[family-name:var(--font-display)] text-[1.5rem] font-semibold leading-none">
                        {event.day}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-[1.36rem] font-semibold text-[var(--color-pacific)] leading-tight">
                        {event.title}
                      </h3>
                      <p className="text-[1rem] text-[var(--color-slate-blue)] mt-1">
                        {event.time}
                      </p>
                    </div>
                  </div>
                  <p className="text-[1.1rem] text-[var(--color-ink)]/72 leading-relaxed flex-1">
                    {event.blurb}
                  </p>
                  <p className="text-[1rem] text-[var(--color-slate-blue)] mt-4 flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5" />
                    {event.place}
                  </p>
                  {event.href && (
                    <SmartLink
                      href={event.href}
                      className="mt-4 inline-flex items-center gap-1.5 text-[1.02rem] font-semibold text-[var(--color-turquoise-deep)] hover:underline"
                    >
                      Details
                      <ArrowRight className="h-4 w-4" />
                    </SmartLink>
                  )}
                </div>
              </article>
            );
          })}
        </div>
        <div className="sms-reveal mt-14 md:mt-16">
          <a
            href={CALENDAR_URL}
            target="_blank"
            rel="noreferrer"
            className="sms-plain-card sms-lift group flex flex-col md:flex-row md:items-center justify-between gap-6 rounded-[1.5rem] px-8 py-9 md:px-12 md:py-10"
          >
            <div className="flex items-center gap-6">
              <span className="flex h-20 w-20 md:h-24 md:w-24 shrink-0 items-center justify-center rounded-[1.4rem] bg-[var(--color-cyan-pale)] text-[var(--color-ocean)] ring-1 ring-[var(--color-turquoise)]/30">
                <Calendar
                  className="h-11 w-11 md:h-13 md:w-13"
                  strokeWidth={1.75}
                />
              </span>
              <div>
                <h3 className="font-[family-name:var(--font-display)] text-[1.8rem] md:text-[2.3rem] font-semibold text-[var(--color-pacific)] leading-[1.1] mb-2">
                  See everything on the calendar
                </h3>
                <p className="text-[1.22rem] md:text-[1.3rem] text-[var(--color-ink)]/75 leading-[1.55]">
                  Services, classes, holidays, game nights and every celebration
                  in between — the whole year in one place.
                </p>
              </div>
            </div>
            <span className="sms-btn sms-btn-primary shrink-0">
              Open the calendar
              <ArrowRight className="h-4.5 w-4.5" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
