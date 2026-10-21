import {
  BookOpen,
  Dices,
  Film,
  HeartHandshake,
  Mic,
  Trophy,
  UtensilsCrossed,
  Wine,
} from "lucide-react";
import { PageHero } from "../components/PageHero";
import { PageLayout } from "../components/PageLayout";
import { WaveDivider } from "../components/WaveDivider";
import {
  ACTIVITIES,
  MOVIES,
  OUTSIDE_LINKS,
  PAGE_PHOTOS,
  BOOK_CLUB,
  SOFTBALL_PAGE,
} from "../content/pages";
import { CONTACT, PHOTOS, asset } from "../content/site";

const ICONS = {
  trophy: Trophy,
  book: BookOpen,
  film: Film,
  wine: Wine,
  utensils: UtensilsCrossed,
  dice: Dices,
  mic: Mic,
  heart: HeartHandshake,
};

const body =
  "text-[1.18rem] md:text-[1.22rem] text-[var(--color-ink)]/82 leading-[1.7]";
const link = "font-semibold text-[var(--color-turquoise-deep)] hover:underline";

// "email the office at office@thesms.org or call 310-453-4276" line
function OfficeContact({ lead }) {
  return (
    <p className={body}>
      {lead}{" "}
      <a href={`mailto:${CONTACT.email}`} className={link}>
        {CONTACT.email}
      </a>{" "}
      or call{" "}
      <a href={CONTACT.phoneHref} className={link}>
        310-453-4276
      </a>
      .
    </p>
  );
}

function SectionTitle({ eyebrow, children, light = false }) {
  return (
    <div className="sms-reveal mb-6">
      {eyebrow && (
        <p className={`sms-eyebrow mb-3 ${light ? "sms-eyebrow-light" : ""}`}>
          {eyebrow}
        </p>
      )}
      <h2
        className={`sms-h2 ${light ? "text-white" : "text-[var(--color-pacific)]"}`}
      >
        {children}
      </h2>
    </div>
  );
}

function Photo({ src, alt, ratio = "aspect-[4/3]", position, className = "" }) {
  return (
    <figure
      className={`sms-reveal sms-tile group relative rounded-[1.5rem] overflow-hidden ${className}`}
    >
      <img
        src={src}
        alt={alt}
        className={`w-full ${ratio} object-cover transition-transform duration-[520ms] group-hover:scale-[1.04]`}
        style={position ? { objectPosition: position } : undefined}
        loading="lazy"
      />
      <span aria-hidden className="sms-tile-sheen" />
    </figure>
  );
}

export function ActivitiesPage({ section }) {
  return (
    <PageLayout scrollTo={section}>
      <PageHero
        eyebrow="Activities"
        title={
          <>
            Build community and{" "}
            <span className="sms-swash sms-swash-bright">friendships.</span>
          </>
        }
        intro={
          <p>
            The Santa Monica Synagogue offers many opportunities to build
            community and friendships.
          </p>
        }
        image={PAGE_PHOTOS.courtyardCircle}
        imageAlt="Congregants gathered in a circle in the courtyard for a celebration"
      />

      {/* Activity tiles, each jumps to its section below */}
      <section className="bg-[var(--color-sand)] pt-4 pb-14">
        <div className="container grid gap-4 grid-cols-2 md:grid-cols-4">
          {ACTIVITIES.map((activity, index) => {
            const Icon = ICONS[activity.icon];
            return (
              <a
                key={activity.id}
                href={`#${activity.id}`}
                className="sms-reveal sms-lift sms-glass-card group rounded-[1.3rem] p-5 md:p-6 flex flex-col gap-4"
                data-reveal-delay={index * 50}
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-cyan-pale)] text-[var(--color-ocean)] group-hover:bg-[var(--color-turquoise)] group-hover:text-white transition-colors duration-300">
                  <Icon className="h-6 w-6" />
                </span>
                <span className="font-[family-name:var(--font-display)] text-[1.15rem] md:text-[1.25rem] font-semibold text-[var(--color-pacific)] leading-snug">
                  {activity.title}
                </span>
              </a>
            );
          })}
        </div>
      </section>

      {/* Hebrew Nationals Softball */}
      <div className="relative z-10 -mb-px bg-[var(--color-sand)]">
        <WaveDivider
          color="var(--color-pacific-deep)"
          position="bottom"
          height={70}
        />
      </div>
      <section
        id="softball"
        className="relative bg-[var(--color-pacific-deep)] sms-grain overflow-hidden scroll-mt-28"
      >
        <div className="container relative py-14 md:py-18 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 items-start [&>*]:min-w-0">
          <div>
            <SectionTitle eyebrow="The Hebrew Nationals Softball Team" light>
              Hebrew Nationals Softball Team are{" "}
              <span className="sms-swash sms-swash-bright">2024’s Champs!</span>
            </SectionTitle>
            <p className="sms-reveal text-[var(--color-cyan-light)] text-[1.1rem] font-bold uppercase tracking-[0.12em] mb-2">
              Join the team as we compete.
            </p>
            <p className="sms-reveal text-white text-[1.35rem] font-[family-name:var(--font-display)] font-semibold mb-4">
              {SOFTBALL_PAGE.seasonTitle}
            </p>
            <div className="space-y-5 text-white/82 text-[1.16rem] md:text-[1.2rem] leading-[1.7]">
              <p className="sms-reveal">{SOFTBALL_PAGE.seasonText}</p>
              <p className="sms-reveal">
                <a
                  href={`mailto:${CONTACT.membershipEmail}`}
                  className="text-[var(--color-cyan-light)] font-semibold underline underline-offset-4 hover:text-white"
                >
                  Contact {CONTACT.membershipContact} at{" "}
                  {CONTACT.membershipEmail}
                </a>
              </p>
              <p className="sms-reveal">
                After ten years of playing in Synagogue Softball, the “Hot Dogs”
                proudly brought home their first championship trophy! They went
                on a very hot streak in the playoffs, which ended with an
                exciting championship game in over 90 degree heat, where they
                scored 19 runs while only giving up one run. Everyone played
                their best during the playoffs. They followed up this victory
                with a wonderful championship party joined by their family
                members, as well as Rabbi Shira. The party included presenting
                Jimmy Lockwood with the Rodger Watkins Award, which honors the
                memory of one of our beloved summertime players, who tragically
                passed away earlier this year. The new season begins in January,
                where we play against other synagogues throughout the West Side
                and the Valley. Games are on Sundays through May. GO DOGS!
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Photo
              src={PAGE_PHOTOS.hotDogs24}
              alt="The 2024 champion Hebrew Nationals softball team in blue jerseys"
              ratio="aspect-[4/3]"
              className="col-span-2 border border-[var(--color-turquoise)]/30"
            />
            <Photo
              src={PAGE_PHOTOS.softballPews}
              alt="Hebrew Nationals players in the sanctuary pews with the championship trophy"
              ratio="aspect-[3/4]"
            />
            <Photo
              src={PHOTOS.sbAloft}
              alt="A Hebrew Nationals player holding the championship trophy up surrounded by teammates"
              ratio="aspect-[3/4]"
              className="mt-8"
            />
          </div>
        </div>
        <div className="relative z-10 -mb-px">
          <WaveDivider
            color="var(--color-sand)"
            position="bottom"
            height={70}
          />
        </div>
      </section>

      {/* Book club + Movie Mavens */}
      <section className="relative bg-[var(--color-sand)] pt-10 pb-16 md:pb-20">
        <div className="container grid gap-14 lg:grid-cols-2 lg:gap-16 [&>*]:min-w-0">
          <div id="bookclub-6phhy" className="scroll-mt-28">
            <SectionTitle eyebrow="Book Club">
              Book-Of-The-Every-Other-Month Club
            </SectionTitle>
            <div className="space-y-5">
              <p className={`sms-reveal ${body}`}>
                As the name suggests, we gather every other month to discuss a
                recent work of literature with a Jewish reference or theme.
              </p>
              <div className="sms-reveal">
                <OfficeContact lead="We welcome newcomers as well as our regulars to join us for upcoming Book Club meetings. The discussions are interesting and informative, even for those who may not have finished reading the book. It is a pleasant way to meet fellow congregants and to have an engaging, worthwhile evening. If you are interested, please contact" />
              </div>
              {BOOK_CLUB.pickPhoto && (
                <Photo
                  src={asset(BOOK_CLUB.pickPhoto)}
                  alt={`Rabbi Shira Freidlin holding a copy of ${BOOK_CLUB.pickTitle}`}
                  ratio="aspect-[3/2]"
                  position="50% 35%"
                />
              )}
              <article className="sms-reveal sms-plain-card sms-plain-card-accent rounded-[1.35rem] p-7">
                <p className="sms-eyebrow mb-2">{BOOK_CLUB.pickMonth}</p>
                <h3 className="font-[family-name:var(--font-display)] text-[1.6rem] font-semibold text-[var(--color-pacific)] mb-3">
                  <a
                    href={BOOK_CLUB.pickLink}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    {BOOK_CLUB.pickTitle}
                  </a>
                </h3>
                <p className="text-[1.1rem] text-[var(--color-ink)]/80 leading-relaxed mb-3">
                  {BOOK_CLUB.pickIntro}
                </p>
                <p className="text-[1.04rem] text-[var(--color-ink)]/70 leading-relaxed">
                  {BOOK_CLUB.pickDescription}
                </p>
              </article>
            </div>
          </div>
          <div id="moviemavens" className="scroll-mt-28">
            <SectionTitle eyebrow="Movie Mavens">
              Do you love watching and discussing great movies?{" "}
              <span className="sms-swash">So do we!</span>
            </SectionTitle>
            <div className="space-y-5">
              <p className={`sms-reveal ${body}`}>
                Movie Mavens is a very popular activity at our synagogue, with a
                history of many animated and interesting group discussions. Our
                current format is to watch the selected movie at home, every
                couple of months, and then join a discussion on Zoom on a Sunday
                morning at 11am.
              </p>
              <div className="sms-reveal">
                <OfficeContact lead="For more information about Movie Mavens, email the office at" />
              </div>
              <div className="sms-reveal sms-glass-card rounded-[1.35rem] p-7">
                <p className="sms-eyebrow mb-1">Featured Movies</p>
                <p className="text-[1.06rem] text-[var(--color-ink)]/70 mb-4">
                  Here's what we've watched during the last year or two:
                </p>
                <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
                  {MOVIES.map((movie) => (
                    <li
                      key={movie.title}
                      className="flex gap-2.5 text-[1.06rem] text-[var(--color-pacific)] leading-snug"
                    >
                      <Film className="h-4 w-4 mt-1 shrink-0 text-[var(--color-turquoise-deep)]" />
                      {movie.href ? (
                        <a
                          href={movie.href}
                          target="_blank"
                          rel="noreferrer"
                          className="hover:underline"
                        >
                          {movie.title}
                        </a>
                      ) : (
                        movie.title
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* L'Chaim Wine Club */}
      <section
        id="wineclub"
        className="relative sms-lightband pt-16 pb-16 md:pt-20 md:pb-20 overflow-hidden scroll-mt-28"
      >
        <div className="container grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14 items-center [&>*]:min-w-0">
          <div className="grid gap-4">
            <Photo
              src={PAGE_PHOTOS.sangriaGroup}
              alt="About fifty congregants gathered on the patio for Sangria Fest"
              ratio="aspect-[4/3]"
            />
            <Photo
              src={PAGE_PHOTOS.sangria}
              alt="Pitchers of white sangria on a blue tablecloth"
              ratio="aspect-[16/9]"
            />
          </div>
          <div>
            <SectionTitle eyebrow="L'Chaim Wine Club">
              L'Chaim <span className="sms-swash">Wine Club</span>
            </SectionTitle>
            <div className="space-y-5">
              <p className={`sms-reveal ${body}`}>
                During our tastings we explore the wonderful world of wine.
                We've tasted wines from Italy, France, New Zealand and South
                Africa, and of course, California!
              </p>
              <p className={`sms-reveal ${body}`}>
                The club is not just for wine experts; it's for any congregant
                who enjoys wine, likes to eat the fine food that the attendees
                make and bring and likes to meet other members in an informal
                social setting.
              </p>
              <div className="sms-reveal">
                <OfficeContact lead="If you have any interest or questions, email the office at" />
              </div>
              <div
                className="sms-reveal relative overflow-hidden rounded-[1.6rem] px-7 py-8 text-white"
                style={{
                  background:
                    "linear-gradient(145deg, #7A1330 0%, #A81C3C 46%, #C8324A 100%)",
                }}
              >
                <p className="flex items-center gap-2 text-[0.98rem] font-bold uppercase tracking-[0.14em] mb-3 text-[#FFD8A8]">
                  <Wine className="h-5 w-5" />
                  Sangria Fest
                </p>
                <p className="text-[1.12rem] leading-[1.6] text-white/92">
                  After many months of waiting and anticipation, our Sangria
                  Fest took place on the beautiful patio of our new location at
                  1260 18th Street! 50 people gathered to enjoy the culinary
                  treats and the great mixology. We had a number of traditional
                  red Sangrias and several white Sangrias. And while many people
                  had different favorites, everyone agreed they found at least
                  one that they really liked.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Smaller activities */}
      <section className="relative bg-[var(--color-sand)] pt-14 pb-20 md:pt-16 md:pb-24">
        <div className="container grid gap-6 md:grid-cols-2">
          <article
            id="progressive-dinner"
            className="sms-reveal sms-glass-card rounded-[1.5rem] p-8 scroll-mt-28"
          >
            <UtensilsCrossed className="h-8 w-8 text-[var(--color-ocean)] mb-4" />
            <h2 className="font-[family-name:var(--font-display)] text-[1.9rem] font-semibold text-[var(--color-pacific)] mb-3">
              Progressive Dinner
            </h2>
            <p className={body}>
              Every Fall, we gather for appetizers and Havdalah, then visit the
              homes of fellow congregants for first and second courses, and then
              join as a group again for dessert. It’s so much fun and a great
              way to meet or continue to get to know other congregants.
            </p>
          </article>
          <article
            id="gamenight"
            className="sms-reveal sms-glass-card rounded-[1.5rem] p-8 scroll-mt-28"
            data-reveal-delay="60"
          >
            <Dices className="h-8 w-8 text-[var(--color-ocean)] mb-4" />
            <h2 className="font-[family-name:var(--font-display)] text-[1.9rem] font-semibold text-[var(--color-pacific)] mb-3">
              Game Night
            </h2>
            <p className={`${body} mb-3`}>
              The Saturday before the Super Bowl is a fun-filled evening of
              Scrabble, board games, poker, and of course food!
            </p>
            <p className={body}>
              Bring your games, bring your food, and let the FUN begin!
            </p>
          </article>
          <article
            id="lecture-series"
            className="sms-reveal sms-glass-card rounded-[1.5rem] p-8 scroll-mt-28"
          >
            <Mic className="h-8 w-8 text-[var(--color-ocean)] mb-4" />
            <h2 className="font-[family-name:var(--font-display)] text-[1.9rem] font-semibold text-[var(--color-pacific)] mb-3">
              Speaker Series
            </h2>
            <OfficeContact lead="Our Speaker Series brings guest speakers to the synagogue. For upcoming speakers, email the office at" />
          </article>
          <article
            id="tikkun-olam"
            className="sms-reveal sms-glass-card rounded-[1.5rem] p-8 scroll-mt-28"
            data-reveal-delay="60"
          >
            <HeartHandshake className="h-8 w-8 text-[var(--color-ocean)] mb-4" />
            <h2 className="font-[family-name:var(--font-display)] text-[1.9rem] font-semibold text-[var(--color-pacific)] mb-3">
              Tikkun Olam
            </h2>
            <p className={`${body} mb-3`}>
              We are partners with God in Repairing the World. We are currently
              doing work with Safe Space for Youth. Please join us.
            </p>
            <OfficeContact lead="We welcome newcomers as well as our regulars to join us for this important work. If you are interested, please contact" />
          </article>
        </div>
      </section>
    </PageLayout>
  );
}
