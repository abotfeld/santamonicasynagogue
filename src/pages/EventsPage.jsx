import { ArrowRight, Calendar, Clock, MapPin } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { PageLayout } from "../components/PageLayout";
import { EVENT_LISTINGS } from "../content/pages";
import { isPast } from "../lib/dates";
import { CONTACT, EVENTS, NAV_LINKS } from "../content/site";

const CALENDAR_URL = NAV_LINKS.find((link) => link.label === "Calendar").href;
const SHABBAT = EVENTS.find((event) => event.month === "Every");

function EventCard({ event, past, index }) {
  return (
    <article
      className="sms-reveal sms-glass-card rounded-[1.5rem] overflow-hidden"
      data-reveal-delay={index * 80}
    >
      <div
        className={`h-1.5 w-full ${past ? "bg-[var(--color-slate-blue)]/40" : "bg-[var(--accent-strong)]"}`}
      />
      <div className="p-7 md:p-10 grid gap-8 md:grid-cols-[auto_1fr] md:gap-10">
        <div className="flex md:flex-col items-center md:items-start gap-4">
          <div className="flex flex-col items-center justify-center h-20 w-20 rounded-2xl shrink-0 bg-[var(--color-cyan-pale)] text-[var(--color-pacific)]">
            <span className="text-[0.85rem] font-bold uppercase tracking-widest">
              {event.month}
            </span>
            <span className="font-[family-name:var(--font-display)] text-[1.9rem] font-semibold leading-none">
              {event.day}
            </span>
          </div>
          {past && (
            <span className="text-[0.8rem] font-bold uppercase tracking-[0.14em] text-[var(--color-slate-blue)]">
              Past event
            </span>
          )}
        </div>
        <div className="min-w-0">
          {event.photo && (
            <img
              src={event.photo}
              alt=""
              className="w-full max-h-[22rem] object-cover rounded-[1.1rem] mb-6"
              loading="lazy"
            />
          )}
          <h3 className="font-[family-name:var(--font-display)] text-[1.9rem] md:text-[2.3rem] font-semibold text-[var(--color-pacific)] leading-tight mb-3">
            {event.title}
          </h3>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-[1.06rem] text-[var(--color-ocean)] mb-5">
            <span className="flex items-center gap-2">
              <Calendar className="h-4.5 w-4.5" />
              {event.date}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4.5 w-4.5" />
              {event.time}
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="h-4.5 w-4.5" />
              {event.place}
            </span>
          </div>
          <div className="space-y-4 text-[1.14rem] text-[var(--color-ink)]/80 leading-[1.65]">
            {event.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
            {event.list && (
              <div>
                <p className="font-semibold text-[var(--color-pacific)] mb-2">
                  {event.listTitle}
                </p>
                <ul className="space-y-1.5">
                  {event.list.map((item) => (
                    <li key={item} className="flex gap-2.5">
                      <span
                        aria-hidden
                        className="mt-[0.7rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-turquoise)]"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {event.closing?.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          {event.cta && !past && (
            <a
              href={event.cta.href}
              target="_blank"
              rel="noreferrer"
              className="sms-btn sms-btn-coral !px-7 !py-4 !text-[1.04rem] mt-7"
            >
              {event.cta.label}
              <ArrowRight className="h-4.5 w-4.5" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export function EventsPage() {
  const upcoming = EVENT_LISTINGS.filter(
    (event) => !isPast(event.isoDate),
  ).reverse();
  const past = EVENT_LISTINGS.filter((event) => isPast(event.isoDate));
  return (
    <PageLayout>
      <PageHero
        eyebrow="Events"
        title={
          <>
            Upcoming <span className="sms-swash sms-swash-bright">Events</span>
          </>
        }
        intro={
          <p>
            Celebrations, holidays and gatherings at The Santa Monica Synagogue.
          </p>
        }
      />
      <section className="relative bg-[var(--color-sand)] pt-6 pb-20 md:pb-24">
        <div className="container space-y-6">
          {/* Weekly Shabbat */}
          <article className="sms-reveal sms-plain-card sms-plain-card-accent rounded-[1.5rem] p-7 md:p-9 flex flex-col md:flex-row md:items-center gap-6 justify-between">
            <div className="flex items-center gap-5">
              <div className="flex flex-col items-center justify-center h-20 w-20 rounded-2xl shrink-0 bg-[var(--color-cyan-pale)] text-[var(--color-ocean)]">
                <span className="text-[0.85rem] font-bold uppercase tracking-widest">
                  {SHABBAT.month}
                </span>
                <span className="font-[family-name:var(--font-display)] text-[1.7rem] font-semibold leading-none">
                  {SHABBAT.day}
                </span>
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-display)] text-[1.7rem] md:text-[2rem] font-semibold text-[var(--color-pacific)] leading-tight">
                  {SHABBAT.title}
                </h3>
                <p className="text-[1.1rem] text-[var(--color-ink)]/75 mt-1">
                  {SHABBAT.time} · {SHABBAT.place}
                </p>
              </div>
            </div>
            <a
              href={CONTACT.facebook}
              target="_blank"
              rel="noreferrer"
              className="sms-btn sms-btn-outline !px-6 !py-3.5 shrink-0"
            >
              Watch live on Facebook
            </a>
          </article>

          {upcoming.map((event, index) => (
            <EventCard key={event.title} event={event} index={index} />
          ))}

          <div className="sms-reveal flex flex-wrap items-center justify-between gap-4 rounded-[1.5rem] bg-[var(--color-pacific)] px-7 py-6 md:px-10 text-white">
            <p className="text-[1.18rem]">
              See every service, class and celebration on the calendar.
            </p>
            <a
              href={CALENDAR_URL}
              target="_blank"
              rel="noreferrer"
              className="sms-btn sms-btn-primary"
            >
              <Calendar className="h-4.5 w-4.5" />
              Open the calendar
            </a>
          </div>

          {past.length > 0 && (
            <div className="pt-8">
              <p className="sms-eyebrow mb-5 sms-reveal">Recent events</p>
              <div className="space-y-6">
                {past.map((event, index) => (
                  <EventCard
                    key={event.title}
                    event={event}
                    past
                    index={index}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </PageLayout>
  );
}
