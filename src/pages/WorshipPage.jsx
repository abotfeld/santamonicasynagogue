import { ArrowRight, Quote } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { PageLayout } from "../components/PageLayout";
import { SmartLink } from "../components/SmartLink";
import { WaveDivider } from "../components/WaveDivider";
import { YouTubeCard } from "../components/YouTubeCard";
import {
  CELEBRATIONS,
  HHD_MUSIC,
  HHD_SERMONS,
  OUTSIDE_LINKS,
  PAGE_PHOTOS,
} from "../content/pages";
import { CONTACT, LINKS, PHOTOS } from "../content/site";

// The four parts of this page. `id` matches the old addresses
// (e.g. /worship/high-holy-days opens straight to that part).
const PARTS = [
  { id: "shabbat-services", label: "Shabbat Services" },
  { id: "holiday-celebrations", label: "Holiday Celebrations" },
  { id: "ourtorah", label: "Our Torah" },
  { id: "high-holy-days", label: "High Holy Days" },
];

const body =
  "text-[1.2rem] md:text-[1.24rem] text-[var(--color-ink)]/82 leading-[1.7]";
const bodyLight =
  "text-white/85 text-[1.18rem] md:text-[1.22rem] leading-[1.7]";
const linkLight =
  "text-[var(--color-cyan-light)] underline underline-offset-4 decoration-[var(--color-turquoise)]/60 hover:text-white";

export function WorshipPage({ section }) {
  return (
    <PageLayout scrollTo={section}>
      <PageHero
        eyebrow="Worship"
        title={
          <>
            Pray, sing and{" "}
            <span className="sms-swash sms-swash-bright">celebrate.</span>
          </>
        }
        intro={
          <p>
            Shabbat every Friday at 6 PM, holidays all year, and High Holy Days
            by the sea.
          </p>
        }
        image={PAGE_PHOTOS.rabbiBima}
        imageAlt="Rabbi Shira Freidlin at the bima with her arms open, leading the congregation"
      />

      {/* Jump links to the four parts of the page */}
      <nav aria-label="Worship sections" className="bg-[var(--color-sand)]">
        <div className="container flex flex-wrap gap-2.5 pt-2 pb-4">
          {PARTS.map((part) => (
            <a
              key={part.id}
              href={`#${part.id}`}
              className="px-4 py-2.5 rounded-full bg-white/80 border border-[var(--color-turquoise)]/25 text-[1.06rem] font-semibold text-[var(--color-pacific)] hover:border-[var(--color-turquoise)] hover:bg-[var(--color-cyan-pale)] transition-colors"
            >
              {part.label}
            </a>
          ))}
        </div>
      </nav>

      {/* Shabbat Services */}
      <section
        id="shabbat-services"
        className="relative bg-[var(--color-sand)] pt-10 pb-20 md:pb-24 scroll-mt-28"
      >
        <div className="container grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 items-center [&>*]:min-w-0">
          <div className="sms-reveal">
            <p className="sms-eyebrow mb-3">Shabbat Services</p>
            <h2 className="sms-h2 text-[var(--color-pacific)] mb-5">
              Friday at <span className="sms-swash">6 PM</span>
            </h2>
            <p className="text-[1.05rem] font-bold uppercase tracking-[0.1em] text-[var(--color-ocean)] leading-relaxed mb-5">
              Services are streamed live on{" "}
              <a
                href={CONTACT.facebook}
                target="_blank"
                rel="noreferrer"
                className="text-[var(--color-turquoise-deep)] underline underline-offset-4"
              >
                Facebook
              </a>{" "}
              for the general public and on Zoom for members of the SMS.
            </p>
            <p className={`${body} mb-7`}>We look forward to seeing you!</p>
            <figure className="sms-plain-card sms-plain-card-accent rounded-[1.35rem] p-7 mb-8">
              <Quote className="h-6 w-6 text-[var(--color-turquoise)] mb-3" />
              <blockquote className="font-[family-name:var(--font-display)] text-[1.3rem] md:text-[1.4rem] text-[var(--color-pacific)] leading-[1.45]">
                "Friday night services are short and friendly. I have brought
                several non-Jewish friends to give them a taste of what Jewish
                services are like."
              </blockquote>
              <figcaption className="mt-3 text-[0.98rem] font-semibold tracking-wider uppercase text-[var(--color-turquoise-deep)]">
                -- J.F.
              </figcaption>
            </figure>
            <a
              href={OUTSIDE_LINKS.sermonsPlaylists}
              target="_blank"
              rel="noreferrer"
              className="sms-btn sms-btn-primary"
            >
              Sermons
              <ArrowRight className="h-4.5 w-4.5" />
            </a>
          </div>
          <figure
            className="sms-reveal sms-tile group relative rounded-[1.7rem] overflow-hidden"
            data-reveal-delay="100"
          >
            <img
              src={PAGE_PHOTOS.tallit}
              alt="A white tallit with a name and flowers embroidered in blue"
              className="w-full aspect-[4/5] object-cover"
              loading="lazy"
            />
            <span aria-hidden className="sms-tile-sheen" />
          </figure>
        </div>
      </section>

      {/* Holiday Celebrations */}
      <div className="relative z-10 -mb-px bg-[var(--color-sand)]">
        <WaveDivider color="#FFFFFF" position="bottom" height={70} />
      </div>
      <section
        id="holiday-celebrations"
        className="relative bg-white pt-10 pb-14 md:pb-16 scroll-mt-28"
      >
        <div className="container">
          <div className="sms-reveal mb-10">
            <p className="sms-eyebrow mb-3">Holiday Celebrations</p>
            <h2 className="sms-h2 text-[var(--color-pacific)]">
              Holidays, <span className="sms-swash">together.</span>
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {CELEBRATIONS.map((item) => (
              <div key={item.youtube} className="flex flex-col gap-4">
                <YouTubeCard id={item.youtube} title={item.title} />
                <p className="text-[1.08rem] text-[var(--color-ink)]/75 leading-relaxed px-1">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Holocaust Torah: short card, the full story has its own page */}
      <section
        id="ourtorah"
        className="relative bg-white pb-16 md:pb-20 scroll-mt-28"
      >
        <div className="container">
          <SmartLink
            href="/our-holocaust-torah"
            className="sms-reveal group grid overflow-hidden rounded-[1.6rem] bg-[var(--color-pacific)] sms-grain text-white md:grid-cols-[0.8fr_1.2fr]"
          >
            <img
              src={PAGE_PHOTOS.rabbiTorah}
              alt="Rabbi Shira Freidlin holding the congregation's Torah in its embroidered mantle"
              className="h-full w-full object-cover aspect-[4/3] md:aspect-auto"
              loading="lazy"
            />
            <div className="relative p-8 md:p-12">
              <p className="sms-eyebrow sms-eyebrow-light mb-3">Our Torah</p>
              <h2 className="sms-h2 text-white mb-5">
                Our{" "}
                <span className="sms-swash sms-swash-bright">
                  Holocaust Torah
                </span>
              </h2>
              <p className={`${bodyLight} mb-7`}>
                The Santa Monica Synagogue is blessed to be able to use a Torah
                recovered from the Jewish community of Susice, Czechoslovakia,
                which saw most of its members perish in the Holocaust.
              </p>
              <span className="sms-btn sms-btn-primary">
                Read the story of our Torah
                <ArrowRight className="h-4.5 w-4.5 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </SmartLink>
        </div>
        <div className="relative z-10 -mb-px mt-16">
          <WaveDivider
            color="var(--color-sand)"
            position="bottom"
            height={70}
          />
        </div>
      </section>

      {/* High Holy Days */}
      <section
        id="high-holy-days"
        className="relative sms-lightband pt-10 pb-20 md:pb-24 overflow-hidden scroll-mt-28"
      >
        <div className="container relative">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 items-center [&>*]:min-w-0 mb-14">
            <div className="sms-reveal">
              <p className="sms-eyebrow mb-3">High Holy Days</p>
              <h2 className="sms-h2 text-[var(--color-pacific)] mb-6">
                The Days of <span className="sms-swash">Awe.</span>
              </h2>
              <div className="space-y-5">
                <p className={body}>
                  We begin the Days of Awe with a S’lichot service under the
                  stars. There, the Rabbi, accompanied by an instrumentalist,
                  leads us in song, and offers words that prepare us for the
                  process of repentance.
                </p>
                <p className={body}>
                  For Rosh Hashanah and Yom Kippur, we use the new Reform prayer
                  book, “Mishkan HaNefesh: Sanctuary of the Soul." With its
                  modern English interpretations of the Hebrew prayers, we have
                  the opportunity to connect deeply to these holy days. Our
                  Rabbi’s sermons are especially moving, warm, and
                  thought-provoking. Our cantor and choir fill the sanctuary
                  with beautiful and uplifting music.
                </p>
                <p className={body}>
                  During the afternoon of Rosh Hashanah, hundreds of us gather
                  at the beach for the ceremony of Tashlich to sing, pray, and,
                  with breadcrumbs, symbolically cast our sins into the water.
                  This is one of our most wonderful events, both spiritually and
                  socially.
                </p>
              </div>
              <a
                href={LINKS.hhd}
                target="_blank"
                rel="noreferrer"
                className="sms-btn sms-btn-coral sms-btn-coral-pulse !px-8 !py-4 !text-[1.06rem] mt-8"
              >
                {LINKS.hhdLabel}
                <ArrowRight className="h-4.5 w-4.5" />
              </a>
            </div>
            <figure
              className="sms-reveal sms-tile group relative rounded-[1.7rem] overflow-hidden"
              data-reveal-delay="100"
            >
              <img
                src={PHOTOS.beachGathering}
                alt="Dozens of congregants gathered at the water's edge on Santa Monica beach for Tashlich"
                className="w-full aspect-[4/3] object-cover"
                loading="lazy"
              />
              <span aria-hidden className="sms-tile-sheen" />
            </figure>
          </div>

          <div className="sms-reveal mb-7">
            <p className="sms-eyebrow mb-2">High Holy Days Sermons</p>
            <h3 className="font-[family-name:var(--font-display)] text-[1.9rem] md:text-[2.3rem] font-semibold text-[var(--color-pacific)]">
              Rabbi Shira Freidlin
            </h3>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-14">
            {HHD_SERMONS.map((item) => (
              <YouTubeCard
                key={item.youtube}
                id={item.youtube}
                title={item.title}
                subtitle={item.when}
              />
            ))}
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {HHD_MUSIC.map((item) => (
              <YouTubeCard
                key={item.youtube}
                id={item.youtube}
                title={item.title}
                subtitle={item.when}
              />
            ))}
          </div>
          <p className="sms-reveal mt-10 text-[1.12rem] text-[var(--color-ink)]/70">
            More sermons on{" "}
            <SmartLink
              href={OUTSIDE_LINKS.sermonsPlaylists}
              className="font-semibold text-[var(--color-turquoise-deep)] hover:underline"
            >
              our YouTube channel
            </SmartLink>
            .
          </p>
        </div>
      </section>
    </PageLayout>
  );
}
