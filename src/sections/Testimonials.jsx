import { Quote } from "lucide-react";
import { FiveStars } from "../components/FiveStars";
import { VideoCard } from "../components/VideoCard";
import { WaveDivider } from "../components/WaveDivider";
import { CONTACT, LINKS, TESTIMONIALS, VIDEOS } from "../content/site";

export function Testimonials() {
  return (
    <>
      <div
        className="relative z-10 -mb-px"
        style={{
          backgroundColor: "rgb(190,235,240)",
        }}
      >
        <WaveDivider
          color="var(--color-ocean)"
          position="bottom"
          height={80}
          flip
        />
      </div>
      <section className="relative bg-[var(--color-ocean)] sms-grain overflow-hidden pt-10 pb-20 md:pt-12 md:pb-24">
        <div
          aria-hidden
          className="absolute -top-24 right-0 h-[28rem] w-[28rem] rounded-full opacity-30 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, var(--color-cyan-light), transparent 70%)",
          }}
        />
        <div className="container relative">
          <div className="grid gap-12 lg:grid-cols-[1.32fr_0.68fr] lg:gap-14 items-start">
            <div>
              <div className="max-w-2xl mb-10 sms-reveal">
                <p className="sms-eyebrow sms-eyebrow-light mb-3">
                  In their words
                </p>
                <h2 className="sms-h2 text-white mb-5">
                  Why our members love it here
                </h2>
                <div className="flex items-center gap-3 flex-wrap">
                  <FiveStars size="lg" />
                  <span className="text-white text-[1.2rem] md:text-[1.3rem] font-semibold">
                    Five stars, in their own words
                  </span>
                </div>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                {TESTIMONIALS.map((testimonial, index) => (
                  <figure
                    key={testimonial.who}
                    className={`sms-reveal sms-seaglass-dark rounded-[1.35rem] p-7 ${index % 2 === 1 ? "sm:mt-8" : ""}`}
                    data-reveal-delay={index * 80}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <Quote className="h-6 w-6 text-[var(--color-turquoise)]" />
                    </div>
                    <blockquote className="font-[family-name:var(--font-display)] text-white text-[1.24rem] md:text-[1.38rem] leading-[1.46] mb-4">
                      {testimonial.quote}
                    </blockquote>
                    <figcaption className="text-[var(--color-cyan-light)] text-[0.98rem] font-semibold tracking-wider uppercase">
                      {"— "}
                      {testimonial.who}, member
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
            <div className="sms-reveal lg:pt-4" data-reveal-delay="140">
              <VideoCard
                src={VIDEOS.reviews.src}
                label={VIDEOS.reviews.label}
                className="mx-auto w-full max-w-[15rem]"
              />
              <p className="text-white/55 text-[1.02rem] leading-relaxed mt-5 text-center max-w-[17rem] mx-auto">
                Meet Our Community
              </p>
            </div>
          </div>
          <div
            className="sms-reveal mt-14 grid gap-8 sms-seaglass-dark rounded-[1.35rem] p-8 md:grid-cols-[16rem_auto] md:justify-center md:gap-11 md:items-center [&>*]:min-w-0"
            data-reveal-delay="120"
          >
            <div className="mx-auto w-full max-w-[16rem] md:mx-0">
              <VideoCard
                src={VIDEOS.membership.src}
                label={VIDEOS.membership.label}
                glow={false}
              />
            </div>
            <div>
              <div>
                <h3 className="text-white text-[1.75rem] md:text-[2.15rem] font-semibold mb-2.5">
                  Thinking about joining?
                </h3>
                <p className="text-white/72 text-[1.2rem] leading-relaxed max-w-2xl mb-6">
                  {"Email Ron at "}
                  {CONTACT.membershipEmail}
                  {" or call "}
                  {CONTACT.phone}.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href={LINKS.intake}
                  target="_blank"
                  rel="noreferrer"
                  className="sms-btn sms-btn-primary"
                >
                  New member intake
                </a>
                <a
                  href={LINKS.join}
                  target="_blank"
                  rel="noreferrer"
                  className="sms-btn sms-btn-ghost"
                >
                  Membership details
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        className="relative z-10 -mt-px -mb-px"
        style={{
          backgroundColor: "var(--color-ocean)",
        }}
      >
        <WaveDivider color="var(--color-sand)" position="bottom" height={64} />
      </div>
    </>
  );
}
