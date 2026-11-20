import { ArrowRight } from "lucide-react";
import { SmartLink } from "../components/SmartLink";
import { PHOTOS, asset } from "../content/site";

// Shorter homepage (Nov 2026): one row of photo links to the pages that used
// to be long homepage sections (Who We Are, Holocaust Torah, clubs, classes,
// events, joining). Those sections still live on their own pages.
const CARDS = [
  {
    title: "Who We Are",
    note: "Our story since 1981",
    href: "/about-us",
    photo: asset("photos/sms-courtyard-circle.jpg"),
  },
  {
    title: "Our Holocaust Torah",
    note: "A scroll from Czechoslovakia",
    href: "/our-holocaust-torah",
    photo: PHOTOS.torahScrolls,
  },
  {
    title: "Clubs and Groups",
    note: "Softball, wine club, books, movies",
    href: "/activities",
    photo: PHOTOS.sbHero,
  },
  {
    title: "Classes",
    note: "Learn with Rabbi Shira",
    href: "/education",
    photo: asset("photos/sms-rabbi-storytime.jpg"),
  },
  {
    title: "Events",
    note: "Holidays and celebrations",
    href: "/community",
    photo: PHOTOS.purim,
  },
  {
    title: "Join Us",
    note: "Become a member",
    href: "/join",
    photo: PHOTOS.generations,
  },
];

export function Explore() {
  return (
    <section
      id="explore"
      className="relative bg-[var(--color-sand)] py-20 md:py-24 overflow-hidden"
    >
      <div className="container relative">
        <div className="max-w-2xl mb-11 sms-reveal">
          <p className="sms-eyebrow mb-3">Get to know us</p>
          <h2 className="sms-h2 text-[var(--color-pacific)]">
            {"Explore our "}
            <span className="sms-swash">community.</span>
          </h2>
        </div>
        <div className="grid gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((card) => (
            <SmartLink
              key={card.title}
              href={card.href}
              className="sms-reveal sms-lift sms-glass-card group rounded-[1.35rem] overflow-hidden flex flex-col"
            >
              <img
                src={card.photo}
                alt=""
                loading="lazy"
                className="w-full aspect-[2/1] sm:aspect-[3/2] object-cover"
              />
              <span className="relative z-10 px-5 pt-4 pb-5 flex flex-col gap-1">
                <span className="font-[family-name:var(--font-display)] font-semibold text-[1.35rem] text-[var(--color-pacific)] leading-tight">
                  {card.title}
                </span>
                <span className="inline-flex items-center gap-1.5 text-[1.02rem] font-semibold text-[var(--color-turquoise-deep)] group-hover:underline">
                  {card.note}
                  <ArrowRight className="h-4 w-4 shrink-0" />
                </span>
              </span>
            </SmartLink>
          ))}
        </div>
      </div>
    </section>
  );
}
