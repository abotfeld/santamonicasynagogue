import { ArrowRight } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { PageLayout } from "../components/PageLayout";
import { SmartLink } from "../components/SmartLink";
import { StarOfDavid } from "../components/StarOfDavid";
import { WaveDivider } from "../components/WaveDivider";
import { OUTSIDE_LINKS, PAGE_PHOTOS } from "../content/pages";
import { CONTRASTS } from "../content/site";

const body =
  "text-[1.2rem] md:text-[1.26rem] text-[var(--color-ink)]/82 leading-[1.7]";

export function AboutPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Reform · Santa Monica · Since 1981"
        title={
          <>
            About <span className="sms-swash sms-swash-bright">Us</span>
          </>
        }
        intro={
          <p>
            The Santa Monica Synagogue is an intimate Reform congregation
            founded in 1981. We come together to worship, study, engage in{" "}
            <em>tikun olam</em> (repairing the world), celebrate our joyous
            occasions, and be a support to one another in times of difficulty.
          </p>
        }
        image={PAGE_PHOTOS.rabbiHugBook}
        imageAlt="Rabbi Shira Freidlin embracing a congregant who holds a gift book, in the sanctuary"
      />

      <section className="relative bg-[var(--color-sand)] pt-10 pb-20 md:pb-24">
        <div className="container grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 items-start [&>*]:min-w-0">
          <div className="space-y-6">
            <p className={`sms-reveal ${body}`}>
              We worship God and celebrate our Jewish heritage in an egalitarian
              atmosphere that invites participation and creativity. Through
              religious observances, educational programs, and social
              gatherings, our synagogue offers opportunities for individuals and
              families to enrich our lives, connect with others, and to discover
              our own relationships to Judaism.
            </p>
            <p className={`sms-reveal ${body}`} data-reveal-delay="60">
              We are a diverse congregation: religiously, racially,
              socio-economically. Among our families are couples with children,
              seniors, single parents, same-sex partners, interfaith couples,
              and singles. We embrace the varied orientations of Reform Jews in
              contemporary society.
            </p>
            <p className={`sms-reveal ${body}`} data-reveal-delay="100">
              The community we have built is truly the foundation of our
              synagogue. From our annual Progressive Dinner to our social
              groups, from our Second Night Seder to our joyous Shabbat
              celebrations and annual Wilderness Experience camping trip, we are
              truly a community of friends.
            </p>
          </div>
          <div
            className="sms-reveal grid grid-cols-2 gap-4 items-start"
            data-reveal-delay="120"
          >
            <figure className="sms-tile group relative rounded-[1.3rem] overflow-hidden">
              <img
                src={PAGE_PHOTOS.friendsEmbrace}
                alt="Congregants with their arms around one another after services"
                className="w-full aspect-[4/5] object-cover"
                loading="lazy"
              />
              <span aria-hidden className="sms-tile-sheen" />
            </figure>
            <figure className="sms-tile group relative rounded-[1.3rem] overflow-hidden mt-10">
              <img
                src={PAGE_PHOTOS.rabbiStorytime}
                alt="Rabbi Shira Freidlin reading a picture book with a young girl"
                className="w-full aspect-[4/5] object-cover"
                loading="lazy"
              />
              <span aria-hidden className="sms-tile-sheen" />
            </figure>
            <figure className="sms-tile group relative rounded-[1.3rem] overflow-hidden col-span-2">
              <img
                src={PAGE_PHOTOS.courtyardCircle}
                alt="Congregants gathered in a circle in the courtyard for a celebration"
                className="w-full aspect-[16/9] object-cover"
                loading="lazy"
              />
              <span aria-hidden className="sms-tile-sheen" />
            </figure>
          </div>
        </div>
      </section>

      <div className="relative z-10 -mb-px bg-[var(--color-sand)]">
        <WaveDivider
          color="var(--color-pacific)"
          position="bottom"
          height={70}
        />
      </div>
      <section className="relative bg-[var(--color-pacific)] sms-grain overflow-hidden">
        <div className="container relative py-16 md:py-20 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="sms-reveal">
            <p className="sms-eyebrow sms-eyebrow-light mb-4">
              Our Holocaust Torah
            </p>
            <p className="text-white/85 text-[1.2rem] md:text-[1.26rem] leading-[1.7] mb-6">
              The Santa Monica Synagogue is blessed to be able to use a Torah
              recovered from the Jewish community of Susice, Czechoslovakia,
              which saw most of its members perish in the Holocaust. It
              perpetuates the memory of the Jewish community of Susice, and
              represents the continuity of Jewish life. It is on loan to us from
              the{" "}
              <a
                href={OUTSIDE_LINKS.memorialScrollsTrust}
                target="_blank"
                rel="noreferrer"
                className="text-[var(--color-cyan-light)] underline underline-offset-4 decoration-[var(--color-turquoise)]/60 hover:text-white"
              >
                Memorial Scrolls Trust
              </a>
              . For more information about our Holocaust Torah, see our{" "}
              <SmartLink
                href="/our-holocaust-torah"
                className="text-[var(--color-cyan-light)] underline underline-offset-4 decoration-[var(--color-turquoise)]/60 hover:text-white"
              >
                Holocaust Torah page
              </SmartLink>
              .
            </p>
            <SmartLink
              href="/our-holocaust-torah"
              className="sms-btn sms-btn-primary"
            >
              Read our Torah's story
              <ArrowRight className="h-4.5 w-4.5" />
            </SmartLink>
          </div>
          <div className="space-y-px">
            {CONTRASTS.map((line, index) => (
              <div
                key={line.b}
                className="sms-reveal flex flex-col sm:flex-row sm:items-baseline gap-x-3 gap-y-1 py-5 border-b border-[var(--color-turquoise)]/25 last:border-0"
                data-reveal-delay={index * 80}
              >
                <span className="text-[var(--color-turquoise)] shrink-0 w-8 flex sm:translate-y-[0.1rem]">
                  <StarOfDavid
                    className="h-[1.6rem] w-[1.6rem]"
                    strokeWidth={1.6}
                  />
                </span>
                <span className="text-[var(--color-cyan-light)] text-[1.3rem] md:text-[1.4rem] font-semibold shrink-0">
                  {line.a}
                </span>
                <span className="font-[family-name:var(--font-display)] text-white text-[1.75rem] md:text-[2.15rem] font-semibold leading-tight">
                  {line.b}
                </span>
              </div>
            ))}
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
      <div className="h-14 md:h-16" />
    </PageLayout>
  );
}
