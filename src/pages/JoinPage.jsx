import { ArrowRight, Quote } from "lucide-react";
import { FiveStars } from "../components/FiveStars";
import { PageHero } from "../components/PageHero";
import { PageLayout } from "../components/PageLayout";
import { VideoCard } from "../components/VideoCard";
import { WaveDivider } from "../components/WaveDivider";
import { JOIN_TESTIMONIALS, PAGE_PHOTOS } from "../content/pages";
import { CONTACT, LINKS, VIDEOS } from "../content/site";

export function JoinPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Membership"
        title={
          <>
            Join the{" "}
            <span className="sms-swash sms-swash-bright">Congregation!</span>
          </>
        }
        intro={
          <>
            <p>
              If you have a question or are interested in membership we'd love
              to hear from you!
            </p>
            <p>
              Drop {CONTACT.membershipContact} an{" "}
              <a
                href={`mailto:${CONTACT.membershipEmail}`}
                className="text-[var(--color-cyan-light)] underline underline-offset-4 decoration-[var(--color-turquoise)]/60 hover:text-white"
              >
                email
              </a>{" "}
              at {CONTACT.membershipEmail} or call the office at{" "}
              <a
                href={CONTACT.phoneHref}
                className="text-[var(--color-cyan-light)] hover:text-white"
              >
                {CONTACT.phone}
              </a>
              .
            </p>
            {/* These two buttons go to the ShulCloud forms. Keep the links as they are. */}
            <div className="flex flex-wrap gap-3.5 pt-4">
              <a
                href={LINKS.join}
                target="_blank"
                rel="noreferrer"
                className="sms-btn sms-btn-primary !text-[1.06rem] !px-7 !py-4"
              >
                Join Now
                <ArrowRight className="h-4.5 w-4.5" />
              </a>
              <a
                href={LINKS.newMemberIntake}
                target="_blank"
                rel="noreferrer"
                className="sms-btn sms-btn-ghost !text-[1.06rem] !px-7 !py-4"
              >
                New Member Intake Form
              </a>
            </div>
          </>
        }
        image={PAGE_PHOTOS.sanctuaryHug}
        imageAlt="Congregants hugging in the sanctuary"
        next="var(--color-ocean)"
      />
      <section className="relative bg-[var(--color-ocean)] sms-grain overflow-hidden pt-8">
        <div className="container relative grid gap-12 lg:grid-cols-[1.35fr_0.65fr] lg:gap-14 items-start [&>*]:min-w-0">
          <div>
            <div className="sms-reveal mb-8">
              <p className="sms-eyebrow sms-eyebrow-light mb-3">Testimonials</p>
              <h2 className="sms-h2 text-white mb-4">In their own words</h2>
              <FiveStars size="lg" />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {JOIN_TESTIMONIALS.map((testimonial, index) => (
                <figure
                  key={testimonial.who}
                  className={`sms-reveal sms-seaglass-dark rounded-[1.35rem] p-7 ${index % 2 === 1 ? "sm:mt-8" : ""}`}
                  data-reveal-delay={(index % 4) * 70}
                >
                  <Quote className="h-6 w-6 text-[var(--color-turquoise)] mb-4" />
                  <blockquote className="font-[family-name:var(--font-display)] text-white text-[1.22rem] md:text-[1.32rem] leading-[1.46] mb-4">
                    "{testimonial.quote}"
                  </blockquote>
                  <figcaption className="text-[var(--color-cyan-light)] text-[0.98rem] font-semibold tracking-wider uppercase">
                    -- {testimonial.who}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
          <div
            className="sms-reveal lg:sticky lg:top-28"
            data-reveal-delay="120"
          >
            <VideoCard
              src={VIDEOS.membership.src}
              label={VIDEOS.membership.label}
              className="mx-auto w-full max-w-[16rem]"
            />
            <p className="text-white/70 text-[1.06rem] leading-relaxed mt-5 text-center max-w-[17rem] mx-auto">
              Ron introduces membership at The Santa Monica Synagogue
            </p>
          </div>
        </div>
        <div className="relative z-10 -mb-px mt-16">
          <WaveDivider
            color="var(--color-sand)"
            position="bottom"
            height={64}
          />
        </div>
      </section>
      <div className="h-14" />
    </PageLayout>
  );
}
