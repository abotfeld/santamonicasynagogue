import { PageHero } from "../components/PageHero";
import { PageLayout } from "../components/PageLayout";
import { PAGE_PHOTOS } from "../content/pages";
import { CONTACT, PHOTOS } from "../content/site";

const body =
  "text-[1.2rem] md:text-[1.26rem] text-[var(--color-ink)]/82 leading-[1.7]";

export function RabbiPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Our rabbi"
        title={
          <>
            Rabbi Shira{" "}
            <span className="sms-swash sms-swash-bright">Freidlin</span>
          </>
        }
        intro={
          <p>
            Rabbi Shira Freidlin has taught students of all ages in Jewish
            camps, Jewish recovery programs, and religious schools. Since July
            1st, 2022 she has been the spiritual leader of The Santa Monica
            Synagogue.
          </p>
        }
        image={PHOTOS.rabbiDesk}
        imageAlt="Rabbi Shira Freidlin smiling at her desk in her study, in front of floor-to-ceiling bookshelves"
        imagePosition="80% 30%"
      />
      <section className="relative bg-[var(--color-sand)] pt-10 pb-20 md:pb-24">
        <div className="container grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 items-center [&>*]:min-w-0">
          <div className="space-y-6">
            <p className={`sms-reveal ${body}`}>
              She has served in various roles at IKAR, Temple Beth Am and Beit
              T'Shuvah in Los Angeles since she moved out here in 2007.
            </p>
            <p className={`sms-reveal ${body}`} data-reveal-delay="60">
              She holds a BFA in Film &amp; TV from NYU with a concentration in
              Children's TV, an MA in Jewish Education from the Jewish
              Theological Seminary, and an MA and Ordination from the Academy of
              Jewish Religion California. She currently sits on the Sandra
              Caplan Community Beit Din and serves as VP to the Santa Monica
              Area Interfaith Council.
            </p>
            <blockquote
              className="sms-reveal border-l-3 border-[var(--color-turquoise)] pl-5 py-1"
              data-reveal-delay="100"
            >
              <p className="font-[family-name:var(--font-display)] text-[1.45rem] md:text-[1.6rem] text-[var(--color-pacific)] italic leading-snug">
                She is thrilled to be throwing her considerable joy and
                enthusiasm into elevating the learning, spirituality, and
                worship at The Santa Monica Synagogue.
              </p>
            </blockquote>
            <p
              className="sms-reveal text-[1.12rem] text-[var(--color-ink)]/70"
              data-reveal-delay="140"
            >
              To reach Rabbi Shira, call the office at{" "}
              <a
                href={CONTACT.phoneHref}
                className="font-semibold text-[var(--color-turquoise-deep)] hover:underline"
              >
                {CONTACT.phone}
              </a>{" "}
              or email{" "}
              <a
                href={`mailto:${CONTACT.email}`}
                className="font-semibold text-[var(--color-turquoise-deep)] hover:underline"
              >
                {CONTACT.email}
              </a>
              .
            </p>
          </div>
          <div className="sms-reveal relative" data-reveal-delay="120">
            <img
              src={PAGE_PHOTOS.rabbiTallit}
              alt="Rabbi Shira Freidlin smiling at the bima in her tallit"
              className="relative rounded-[1.6rem] w-full aspect-[4/5] object-cover border border-[var(--color-turquoise)]/25 shadow-[0_30px_60px_-26px_rgba(11,58,91,0.42)]"
              loading="lazy"
            />
            <div className="relative mt-4 w-full sm:w-fit sm:ml-auto rounded-full bg-[var(--accent-strong)] text-[var(--accent-on)] px-5 py-2.5 text-center text-[0.95rem] font-bold tracking-wide">
              Santa Monica Synagogue Rabbi since 2022
            </div>
          </div>
        </div>
      </section>
      <section
        id="rabbi-emeritus"
        className="relative bg-white py-16 md:py-24"
      >
        <div className="container">
          <div className="sms-reveal mx-auto max-w-5xl rounded-[1.8rem] border border-[var(--color-cyan-pale)] bg-[var(--color-sand)] p-7 sm:p-10 md:p-12 shadow-[0_30px_60px_-40px_rgba(11,58,91,0.5)]">
            <div className="grid gap-10 md:grid-cols-[auto_1fr] md:gap-14 items-center [&>*]:min-w-0">
              <figure className="mx-auto w-[13rem] sm:w-[14rem] rounded-[1.5rem] bg-white p-2.5 shadow-[0_26px_50px_-28px_rgba(11,58,91,0.5)] -rotate-[1.5deg]">
                <img
                  src={PAGE_PHOTOS.rabbiMarx}
                  alt="Rabbi Emeritus Jeffrey Marx by the ocean at sunset"
                  className="w-full aspect-[171/236] rounded-[1.1rem] object-cover"
                  loading="lazy"
                />
                <figcaption className="px-2 pt-3 pb-1 text-center text-[0.86rem] font-bold uppercase tracking-[0.14em] text-[var(--color-turquoise-deep)]">
                  1985–2021
                </figcaption>
              </figure>
              <div className="space-y-5">
                <p className="sms-eyebrow">Rabbi Emeritus</p>
                <h2 className="text-[var(--color-pacific)] font-semibold text-[2.2rem] sm:text-[2.6rem] lg:text-[3rem] leading-[1.06]">
                  Rabbi Emeritus Jeffrey{" "}
                  <span className="sms-swash">Marx</span>
                </h2>
                <p className={body}>
                  Ordained in 1983, Rabbi Marx served as the spiritual leader of
                  The Santa Monica Synagogue from 1985–2021. In addition to his
                  training as a family mediator, he holds Masters degrees in
                  both Jewish Education and Hebrew Letters, and an Honorary
                  Doctorate in Jewish Education from Hebrew Union College. His
                  published academic publications have centered on the lives
                  of Jewish immigrants at the turn of the 19th century.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
