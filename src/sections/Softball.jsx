import { CalendarDays, MapPin, Trophy, Users } from "lucide-react";
import { WaveDivider } from "../components/WaveDivider";
import { PHOTOS, SOFTBALL } from "../content/site";

const SOFTBALL_FACT_ICONS = [CalendarDays, Users, Trophy, MapPin];
export function Softball() {
  return (
    <>
      <section
        id="softball"
        className="relative bg-[var(--color-pacific-deep)] sms-grain overflow-hidden pt-20 pb-10 md:pt-24 md:pb-12"
      >
        <div
          aria-hidden
          className="absolute -top-28 left-[6%] h-[30rem] w-[30rem] rounded-full opacity-28 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, var(--color-turquoise), transparent 68%)",
          }}
        />

        <div
          aria-hidden
          className="absolute bottom-[-6rem] right-[4%] h-[26rem] w-[26rem] rounded-full opacity-24 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, var(--accent-strong), transparent 66%)",
          }}
        />

        <div className="container relative">
          <div className="grid gap-12 lg:grid-cols-[1.12fr_0.88fr] lg:gap-16 items-center [&>*]:min-w-0">
            <div className="sms-reveal">
              <p className="sms-eyebrow sms-eyebrow-light mb-4">
                Hebrew Nationals · Synagogue Softball
              </p>
              <h2 className="sms-h2 text-white mb-6">
                The Hot Dogs won the{" "}
                <span className="sms-swash sms-swash-bright">championship</span>
                !
              </h2>
              <p className="text-white/76 text-[1.06rem] leading-relaxed mb-4 max-w-2xl">
                {SOFTBALL.story}
              </p>
              <p className="text-white/62 text-[1.1rem] leading-relaxed mb-9 max-w-2xl">
                {SOFTBALL.story2}
              </p>
              <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2 mb-9">
                {SOFTBALL.facts.map((fact, index) => {
                  const Icon = SOFTBALL_FACT_ICONS[index];
                  return (
                    <div
                      key={fact.label}
                      className="sms-reveal flex gap-3.5 border-t border-white/14 pt-4"
                      data-reveal-delay={index * 60}
                    >
                      <Icon className="h-5 w-5 shrink-0 text-[var(--color-turquoise)] mt-0.5" />
                      <div>
                        <p className="text-white/50 text-[0.78rem] font-semibold tracking-[0.14em] uppercase mb-1">
                          {fact.label}
                        </p>
                        <p className="text-white text-[1.02rem] font-medium">
                          {fact.value}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <p className="text-white/85 text-[1.15rem] font-medium">
                  {"Ask for "}
                  {SOFTBALL.contactName}
                  {" — no tryout, no experience needed!"}
                </p>
              </div>
            </div>
            <div className="sms-reveal relative" data-reveal-delay="120">
              <div
                aria-hidden
                className="absolute -inset-5 rounded-[2.4rem] opacity-45 blur-2xl"
                style={{
                  background:
                    "radial-gradient(circle at 50% 40%, var(--color-turquoise), transparent 70%)",
                }}
              />

              <figure className="sms-tile group relative rounded-[1.7rem] overflow-hidden border border-[var(--color-turquoise)]/35">
                <img
                  src={PHOTOS.softballTeam}
                  alt="The Hebrew Nationals softball team in blue jerseys posing on the bleachers under a clear Santa Monica sky"
                  className="w-full aspect-square object-cover transition-transform duration-[520ms] [transition-timing-function:cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.04]"
                  loading="lazy"
                />

                <span aria-hidden className="sms-tile-sheen" />
              </figure>
              <div className="absolute -top-4 -left-3 md:-left-6 rotate-[-6deg] rounded-2xl bg-gradient-to-b from-[#F6D77A] to-[#D9A93A] text-[#4A3208] px-5 py-3 shadow-[0_18px_36px_-12px_rgba(150,105,20,0.6)] ring-1 ring-[#FBEBB4]/80">
                <p className="text-[0.7rem] font-bold tracking-[0.2em] uppercase opacity-80">
                  Champions
                </p>
                <p className="font-[family-name:var(--font-display)] text-[1.5rem] font-semibold leading-none">
                  2024
                </p>
              </div>
              <p className="text-white/45 text-[1rem] mt-4 text-center">
                {SOFTBALL.season}
                {" · Sundays, January through May · GO DOGS!"}
              </p>
            </div>
          </div>
          <div className="mt-14 md:mt-16">
            <p className="sms-eyebrow sms-eyebrow-light mb-5">
              2024 champions · Hebrew Nationals Hot Dogs
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {[
                {
                  src: PHOTOS.sbHero,
                  alt: "A Hebrew Nationals player carrying the championship trophy off the field with his fist raised",
                  span: "row-span-2",
                  ratio: "aspect-[3/4] md:aspect-auto md:h-full",
                },
                {
                  src: PHOTOS.sbLineup,
                  alt: "The Hebrew Nationals lined up along the baseline in blue jerseys, several holding a finger up for number one",
                  span: "",
                  ratio: "aspect-[4/3]",
                },
                {
                  src: PHOTOS.sbBatter,
                  alt: "A Hebrew Nationals batter at the plate seen through the backstop netting",
                  span: "",
                  ratio: "aspect-[4/3]",
                },
                {
                  src: PHOTOS.sbTrophyTall,
                  alt: "The championship trophy held up against a clear blue sky",
                  span: "row-span-2",
                  ratio: "aspect-[3/4] md:aspect-auto md:h-full",
                },
                {
                  src: PHOTOS.sbAloft,
                  alt: "A Hebrew Nationals player holding the championship trophy up in celebration surrounded by teammates",
                  span: "",
                  ratio: "aspect-[4/3]",
                },
                {
                  src: PHOTOS.sbDugout,
                  alt: "Players resting under the team canopy between innings",
                  span: "",
                  ratio: "aspect-[4/3]",
                },
              ].map((photo, index) => (
                <figure
                  key={photo.src}
                  className={`sms-reveal sms-tile group relative rounded-[1.1rem] overflow-hidden border border-white/12 ${photo.span}`}
                  data-reveal-delay={index * 55}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className={`w-full ${photo.ratio} object-cover transition-transform duration-[520ms] [transition-timing-function:cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.05]`}
                    loading="lazy"
                  />

                  <span aria-hidden className="sms-tile-sheen" />
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div
        className="relative z-10 -mt-px"
        style={{
          background: "var(--color-pacific-deep)",
        }}
      >
        <WaveDivider color="var(--color-sand)" position="bottom" height={78} />
      </div>
    </>
  );
}
