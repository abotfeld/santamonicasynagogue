import { CLASSES, GROUPS, MORE_EVENTS, PHOTOS } from "../content/site";

export function LearningAndCommunity() {
  return (
    <section id="learning" className="relative sms-morningband overflow-hidden">
      <div
        aria-hidden
        className="absolute -right-32 top-8 h-[28rem] w-[28rem] rounded-full opacity-45 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--color-cyan-light), transparent 66%)",
        }}
      />
      <div className="container relative">
        <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] [&>*]:min-w-0">
          <div>
            <div className="sms-reveal mb-8 pt-14 md:pt-20">
              <p className="sms-eyebrow mb-3">Education</p>
              <h2 className="sms-h2 text-[var(--color-pacific)] mb-4">
                <span className="sms-swash">Adult Learning</span>
              </h2>
              <p className="text-[1.15rem] text-[var(--color-ink)]/78 leading-relaxed max-w-lg">
                Lifelong learning is one of the hallmarks of our congregation.
                Rabbi Shira teaches Hebrew, Liturgy and Torah, examining modern
                ethical issues, exploring Jewish spirituality, and relating
                Jewish text to our contemporary lives. For more information or
                to sign up, please contact our office.
              </p>
            </div>
            <figure className="sms-reveal sms-tile group relative rounded-[1.35rem] overflow-hidden mb-5">
              <img
                src={PHOTOS.workshop}
                alt="Congregants seated at long tables with blue cloths for the Passover Seder in the social hall"
                className="w-full aspect-[16/9] object-cover transition-transform duration-[520ms] [transition-timing-function:cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.04]"
                loading="lazy"
              />
              <span aria-hidden className="sms-tile-sheen" />
            </figure>
            <div className="sms-reveal sms-glass-card rounded-[1.35rem] overflow-hidden">
              {CLASSES.map((cls, index) => (
                <div
                  key={cls.name}
                  className={`relative z-10 flex flex-wrap items-center justify-between gap-3 px-6 py-5 transition-colors duration-200 hover:bg-white/55 ${index !== CLASSES.length - 1 ? "border-b border-[var(--color-turquoise)]/18" : ""}`}
                >
                  <div>
                    <p className="font-[family-name:var(--font-display)] text-[1.16rem] font-semibold text-[var(--color-pacific)]">
                      {cls.name}
                    </p>
                    <p className="text-[1.02rem] text-[var(--color-slate-blue)] mt-0.5">
                      {cls.when}
                    </p>
                  </div>
                  <span
                    className={`text-[0.86rem] font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full ${cls.where === "Zoom" ? "bg-[var(--color-cyan-pale)] text-[var(--color-ocean)]" : "bg-[var(--color-pacific)] text-white"}`}
                  >
                    {cls.where}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div id="community">
            <div
              className="sms-reveal flex flex-wrap gap-2.5 mb-8 pt-14 md:pt-20"
              data-reveal-delay="140"
            >
              {GROUPS.map((group) => (
                <span
                  key={group}
                  className="px-4 py-2.5 rounded-full bg-white/72 backdrop-blur border border-[var(--color-turquoise)]/22 text-[1.15rem] font-medium text-[var(--color-pacific)] hover:border-[var(--color-turquoise)] hover:bg-[var(--color-cyan-pale)] transition-colors duration-200"
                >
                  {group}
                </span>
              ))}
            </div>
            <div
              className="sms-reveal grid grid-cols-2 items-start gap-4"
              data-reveal-delay="180"
            >
              <figure className="sms-tile group relative self-start rounded-[1.2rem] overflow-hidden">
                <img
                  src={PHOTOS.purim}
                  alt="A congregant in a full pharaoh costume reading at the piano during the Purim spiel"
                  className="block aspect-[4/5] object-cover object-[52%_28%] w-full transition-transform duration-[520ms] [transition-timing-function:cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.05]"
                  loading="lazy"
                />
                <span aria-hidden className="sms-tile-sheen" />
              </figure>
              <figure className="sms-tile group relative self-start rounded-[1.2rem] overflow-hidden mt-8">
                <img
                  src={PHOTOS.giftshop}
                  alt="A young couple in matching Hanukkah sweaters in the synagogue gift shop"
                  className="block aspect-[4/5] object-cover w-full transition-transform duration-[520ms] [transition-timing-function:cubic-bezier(0.23,1,0.32,1)] scale-[1.47] origin-[31%_3%] group-hover:scale-[1.53]"
                  loading="lazy"
                />
                <span aria-hidden className="sms-tile-sheen" />
              </figure>
              <figure className="sms-tile group relative self-start rounded-[1.2rem] overflow-hidden">
                <img
                  src={PHOTOS.socialHall}
                  alt="The congregation gathered together in the sanctuary, arms around one another, after a Shabbat Hanukkah service"
                  className="block aspect-[4/3] object-cover object-[50%_58%] w-full transition-transform duration-[520ms] [transition-timing-function:cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.05]"
                  loading="lazy"
                />
                <span aria-hidden className="sms-tile-sheen" />
              </figure>
              <figure className="sms-tile group relative self-start rounded-[1.2rem] overflow-hidden mt-8">
                <img
                  src={PHOTOS.onegTray}
                  alt="A congregant grinning behind a tray of rugelach arranged in the shape of a menorah"
                  className="block aspect-[4/3] object-cover object-[50%_26%] w-full transition-transform duration-[520ms] [transition-timing-function:cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.05]"
                  loading="lazy"
                />
                <span aria-hidden className="sms-tile-sheen" />
              </figure>
            </div>
          </div>
        </div>
        <div className="relative mt-16 pt-12 border-t border-[var(--color-turquoise)]/25">
          <p className="sms-eyebrow mb-7 sms-reveal">Also on the calendar</p>
          <div className="grid gap-x-14 gap-y-9 md:grid-cols-2">
            {MORE_EVENTS.map((item, index) => (
              <div
                key={item.title}
                className="sms-reveal"
                data-reveal-delay={index * 70}
              >
                <h3 className="font-[family-name:var(--font-display)] text-[1.6rem] md:text-[1.8rem] font-semibold text-[var(--color-pacific)] leading-snug mb-1.5">
                  {item.title}
                </h3>
                <p className="text-[var(--color-turquoise-deep)] text-[0.95rem] font-semibold uppercase tracking-wider mb-3">
                  {item.when}
                </p>
                <p className="text-[1.14rem] text-[var(--color-ink)]/72 leading-relaxed">
                  {item.blurb}
                </p>
              </div>
            ))}
          </div>
          <p className="sms-reveal relative z-10 mt-12 max-w-2xl rounded-[1.1rem] bg-white/70 px-6 py-5 text-[1.18rem] font-medium leading-relaxed text-[var(--color-pacific)] ring-1 ring-[var(--color-turquoise)]/22 backdrop-blur-sm">
            Plus movie nights, the book club, the wine club, and whatever
            someone decides to organize next!
          </p>
        </div>
      </div>
      <div className="h-16 md:h-24" />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-56 md:h-72 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(198,238,242,0.5) 45%, rgb(190,235,240) 94%, rgb(190,235,240) 100%)",
        }}
      />
    </section>
  );
}
