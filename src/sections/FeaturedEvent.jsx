import { ArrowRight, Calendar, Clock, MapPin, Sparkles } from "lucide-react";
import { SmartLink } from "../components/SmartLink";
import { EVENT_LISTINGS } from "../content/pages";
import { isPast } from "../lib/dates";
import { MemberLoginNote } from "../pages/EventsPage";

// Homepage banner for one upcoming event marked "Promote on the homepage"
// in src/content/data/events.json (Pages CMS → Events). It disappears on its
// own the day after the event. If the event has a photo (the flyer), it shows
// beside the text.
export function FeaturedEvent() {
  const event = EVENT_LISTINGS.filter(
    (e) => e.featured && !isPast(e.isoDate),
  ).at(-1);
  if (!event) return null;
  return (
    <section
      id="featured-event"
      className="relative bg-[var(--color-sand)] overflow-hidden"
    >
      <div className="container relative py-12 md:py-16">
        <div className="rounded-[2rem] overflow-hidden bg-[var(--color-pacific)] sms-grain relative">
          <div
            aria-hidden
            className="absolute -top-24 -left-16 h-[24rem] w-[24rem] rounded-full opacity-40 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, var(--color-turquoise), transparent 68%)",
            }}
          />
          <div
            aria-hidden
            className="absolute -bottom-28 right-[-4rem] h-[22rem] w-[22rem] rounded-full opacity-30 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, var(--accent-strong), transparent 66%)",
            }}
          />
          {event.bannerPhoto && (
            <div className="relative h-44 sm:h-56 md:h-72">
              <img
                src={event.bannerPhoto}
                alt="Hanukkiyot lit together at The Santa Monica Synagogue"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
              <div
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-2/3"
                style={{
                  background:
                    "linear-gradient(to top, var(--color-pacific), transparent)",
                }}
              />
            </div>
          )}
          <div
            className={`relative grid gap-10 items-center px-7 py-11 md:px-14 md:py-14 ${event.photo ? "lg:grid-cols-[1.2fr_0.8fr] lg:gap-14" : ""}`}
          >
            <div className="sms-reveal min-w-0">
              <p className="sms-eyebrow sms-eyebrow-light mb-4 flex items-center gap-2">
                <Sparkles className="h-4 w-4" />
                Coming up
              </p>
              <h2 className="sms-h2 text-white mb-5">
                <span className="sms-swash sms-swash-bright">
                  {event.title}
                </span>
              </h2>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-[1.08rem] text-[var(--color-cyan-light)] mb-6">
                <span className="flex items-center gap-2">
                  <Calendar className="h-4.5 w-4.5" />
                  {event.date}
                </span>
                {event.time && (
                  <span className="flex items-center gap-2 font-semibold text-white">
                    <Clock className="h-4.5 w-4.5" />
                    {event.time}
                  </span>
                )}
                {event.place && (
                  <span className="flex items-center gap-2">
                    <MapPin className="h-4.5 w-4.5" />
                    {event.place}
                  </span>
                )}
              </div>
              <div className="space-y-4 text-white/85 text-[1.16rem] leading-[1.65] max-w-2xl">
                {event.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
                {event.closing?.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-4 mt-8">
                {event.cta && (
                  <a
                    href={event.cta.href}
                    target="_top"
                    className="sms-btn sms-btn-coral !px-8 !py-4.5 !text-[1.06rem]"
                  >
                    {event.cta.label}
                    <ArrowRight className="h-4.5 w-4.5" />
                  </a>
                )}
                <SmartLink
                  href="/events"
                  className="inline-flex items-center gap-1.5 text-[1.04rem] font-semibold text-[var(--color-cyan-light)] hover:underline"
                >
                  All events
                  <ArrowRight className="h-4 w-4" />
                </SmartLink>
              </div>
              {event.loginHref && (
                <MemberLoginNote href={event.loginHref} dark />
              )}
            </div>
            {event.photo && (
              <img
                src={event.photo}
                alt={`${event.title} flyer`}
                className="sms-reveal w-full max-w-md mx-auto rounded-[1.4rem] shadow-2xl"
                loading="lazy"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
