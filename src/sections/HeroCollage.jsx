import { useEffect, useState } from "react";
import { Clock } from "lucide-react";
import { PhotoTile } from "../components/PhotoTile";
import { ScrollMark } from "../components/ScrollMark";
import { StarOfDavid } from "../components/StarOfDavid";
import { WaveDivider } from "../components/WaveDivider";
import { LINKS, PHOTOS } from "../content/site";

export function HeroCollage() {
  const [scrollY, setScrollY] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const reducedQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(reducedQuery.matches);
    const desktopQuery = window.matchMedia("(min-width: 1024px)");
    const updateDesktop = () => setIsDesktop(desktopQuery.matches);
    if (
      (updateDesktop(),
      desktopQuery.addEventListener("change", updateDesktop),
      reducedQuery.matches)
    )
      return;
    const onScroll = () => setScrollY(Math.min(window.scrollY, 620));
    onScroll();
    window.addEventListener("scroll", onScroll, {
      passive: true,
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      desktopQuery.removeEventListener("change", updateDesktop);
    };
  }, []);
  const parallax = (speed) =>
    reducedMotion || !isDesktop
      ? undefined
      : {
          transform: `translate3d(0, ${scrollY * speed}px, 0)`,
        };
  const SPEED = {
    lead: -0.03,
    beach: 0.012,
    menorah: 0.055,
    softball: -0.022,
    pomegranate: 0.04,
  };
  return (
    <section
      id="top"
      className="relative -mt-[4.6rem] pt-[4.6rem] bg-[var(--color-sand)] overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute -top-40 right-[-10%] h-[40rem] w-[40rem] rounded-full opacity-45 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--color-cyan-light), transparent 66%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-1/3 opacity-30"
        style={{
          background:
            "linear-gradient(to top, var(--color-cyan-pale), transparent)",
        }}
      />
      <ScrollMark
        className="sms-watermark -left-36 top-[8%] h-[36rem] w-[36rem] hidden lg:block"
        stroke="currentColor"
      />
      <div className="container relative pt-10 pb-20 md:pt-14 md:pb-28">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.98fr_1.02fr] lg:gap-0 items-center">
          <div className="relative z-20 min-w-0 lg:mr-[-4.5rem]">
            <div className="sms-seaglass rounded-[1.9rem] p-8 md:p-11">
              <p className="sms-eyebrow mb-5">
                Reform Jewish Congregation · Santa Monica · Since 1981
              </p>
              <h1 className="text-[var(--color-pacific)] font-semibold text-[2.45rem] sm:text-[2.9rem] lg:text-[3.4rem] leading-[1.06] mb-6">
                Find your{" "}
                <span className="sms-swash sms-swash-wrap sms-swash-wrap-md">
                  Jewish community
                </span>
                <br className="hidden sm:block" />
                {" in Santa Monica."}
              </h1>
              <p className="text-[var(--color-ink)]/80 text-[1.18rem] md:text-[1.28rem] leading-[1.68] mb-8">
                An intimate Reform community where people know one another by
                name. Join us for Shabbat, learning, friendship, celebration,
                and support through life's milestones. Whether you're new to
                Santa Monica or new to a synagogue, you're welcome here.
              </p>
              <div className="flex flex-wrap gap-3.5">
                <a
                  href={LINKS.intake}
                  target="_blank"
                  rel="noreferrer"
                  className="sms-btn sms-btn-primary !text-[1.02rem] !px-7 !py-4"
                >
                  Explore membership
                </a>
                <a
                  href="#welcome"
                  className="sms-btn sms-btn-coral !text-[1.02rem] !px-7 !py-4"
                >
                  Plan your first visit
                </a>
              </div>
              <div className="mt-8 space-y-3.5">
                <a
                  href="#worship"
                  className="inline-flex items-center gap-2.5 text-[var(--color-turquoise-deep)] text-[1.06rem] font-semibold hover:gap-3.5 transition-all group"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--color-turquoise)]/45 group-hover:bg-[var(--color-cyan-pale)] transition-colors">
                    <StarOfDavid className="h-[1.3rem] w-[1.3rem]" />
                  </span>
                  Join us for Shabbat!
                </a>
                <p className="flex items-center gap-2.5 text-[var(--color-turquoise-deep)] text-[1.06rem] font-semibold">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--color-turquoise)]/45">
                    <Clock className="h-[1.15rem] w-[1.15rem] text-[var(--color-turquoise-deep)]" />
                  </span>
                  Fridays at 6:00 PM
                </p>
              </div>
            </div>
          </div>
          <div className="relative min-w-0">
            <div className="grid grid-cols-[1.27fr_1fr] gap-3 md:gap-4">
              <div className="flex flex-col gap-3 md:gap-4 min-w-0">
                <PhotoTile
                  src={PHOTOS.rabbiDesk}
                  alt="Rabbi Shira Freidlin smiling at her desk in her study, in front of floor-to-ceiling bookshelves of Judaica"
                  ratio="aspect-[4/3]"
                  radius="1.5rem"
                  style={parallax(SPEED.lead)}
                  caption="Rabbi Shira Freidlin"
                  captionRight
                  zoom="scale-[1.4] origin-[80%_10%] group-hover:scale-[1.46]"
                />
                <PhotoTile
                  src={PHOTOS.beachGroup}
                  alt="Ten congregants standing arm-in-arm on the wet sand at Tashlich"
                  ratio="aspect-[3/2]"
                  style={parallax(SPEED.beach)}
                  caption="Tashlich at the shoreline"
                />
                <PhotoTile
                  src={PHOTOS.menorahTable}
                  alt="A long table filled with lit menorahs of every shape and size on the first night of Hanukkah"
                  ratio="aspect-[16/9]"
                  style={parallax(SPEED.menorah)}
                  caption="Hanukkah, all eight nights"
                />
              </div>
              <div className="flex flex-col gap-3 md:gap-4 min-w-0 pt-10 md:pt-16">
                <PhotoTile
                  src={PHOTOS.softballTeam}
                  alt="The Hebrew Nationals softball team in blue jerseys with their championship trophy"
                  ratio="aspect-square"
                  style={parallax(SPEED.softball)}
                  caption="Hebrew Nationals · 2024 champs"
                />
                <PhotoTile
                  src={PHOTOS.pomegranate}
                  alt="Two congregants smiling together under a fruit tree in the synagogue courtyard"
                  ratio="aspect-[4/5]"
                  style={parallax(SPEED.pomegranate)}
                  focus="66% 50%"
                  caption="Friends in the courtyard"
                />
              </div>
            </div>
            <div className="absolute -bottom-14 right-0 sm:-bottom-8 md:-bottom-6 md:right-4 z-20 max-w-[calc(100%-0.5rem)] rounded-full bg-[var(--accent-strong)] text-[var(--accent-on)] px-4 py-2.5 md:px-5 md:py-3 text-[0.84rem] md:text-[1rem] font-bold tracking-wide shadow-[0_12px_26px_-12px_rgba(var(--accent-shadow),0.55)]">
              45 years of Jewish life in Santa Monica
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
