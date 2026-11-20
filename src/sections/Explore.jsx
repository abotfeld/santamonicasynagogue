import { ArrowRight } from "lucide-react";
import { SmartLink } from "../components/SmartLink";
import { PAGE_PHOTOS } from "../content/pages";
import { LINKS, PHOTOS, asset } from "../content/site";

// Shorter homepage (Nov 2026): one row of photo links, named and ordered
// exactly like the top menu, so people see the same words everywhere.
// The long sections that used to be here live on these pages.
const CARDS = [
  {
    title: "About Us",
    note: "Our story since 1981",
    href: "/about-us",
    photo: asset("photos/sms-courtyard-circle.jpg"),
  },
  {
    title: "Worship",
    note: "Shabbat, holidays, our Holocaust Torah",
    href: "/worship",
    photo: PAGE_PHOTOS.rabbiBima,
  },
  {
    title: "Our Rabbis",
    note: "Meet Rabbi Shira",
    href: "/rabbi-shira",
    photo: PHOTOS.rabbiShira,
    position: "60% 16%",
  },
  {
    title: "Community",
    note: "Events, classes and clubs",
    href: "/community",
    photo: PHOTOS.sbHero,
  },
  {
    title: "Calendar",
    note: "Services, classes, celebrations",
    href: LINKS.calendar,
    photo: PHOTOS.menorahTable,
  },
  {
    title: "Join",
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
                style={
                  card.position ? { objectPosition: card.position } : undefined
                }
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
