import { ScrollMark } from "./ScrollMark";
import { WaveDivider } from "./WaveDivider";

// Dark blue opening band at the top of each inner page.
// `title` can include <span className="sms-swash sms-swash-bright">…</span>
// for the turquoise brush-stroke highlight.
export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
  imagePosition,
  next = "var(--color-sand)",
}) {
  return (
    <section className="relative bg-[var(--color-pacific)] sms-grain overflow-hidden">
      <div
        aria-hidden
        className="absolute -top-32 right-[-8%] h-[34rem] w-[34rem] rounded-full opacity-35 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--color-turquoise), transparent 68%)",
        }}
      />
      <div
        aria-hidden
        className="absolute -bottom-24 left-[4%] h-[22rem] w-[22rem] rounded-full opacity-22 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--accent-strong), transparent 66%)",
        }}
      />
      <ScrollMark
        className="sms-watermark sms-watermark-light -left-32 top-[8%] h-[30rem] w-[30rem] hidden lg:block"
        stroke="currentColor"
      />
      <div className="container relative pt-14 pb-10 md:pt-20 md:pb-14">
        <div
          className={`grid gap-10 items-center [&>*]:min-w-0 ${image ? "lg:grid-cols-[1.1fr_0.9fr] lg:gap-14" : ""}`}
        >
          <div className="sms-reveal max-w-3xl">
            {eyebrow && (
              <p className="sms-eyebrow sms-eyebrow-light mb-4">{eyebrow}</p>
            )}
            <h1 className="text-white font-semibold text-[2.5rem] sm:text-[3rem] lg:text-[3.5rem] leading-[1.05] mb-6">
              {title}
            </h1>
            {intro && (
              <div className="text-white/82 text-[1.18rem] md:text-[1.26rem] leading-[1.66] space-y-4">
                {intro}
              </div>
            )}
          </div>
          {image && (
            <div className="sms-reveal relative" data-reveal-delay="100">
              <div
                aria-hidden
                className="absolute -inset-5 rounded-[2.4rem] opacity-40 blur-2xl"
                style={{
                  background:
                    "radial-gradient(circle at 50% 40%, var(--color-turquoise), transparent 70%)",
                }}
              />
              <figure className="sms-tile group relative rounded-[1.7rem] overflow-hidden border border-[var(--color-turquoise)]/35">
                <img
                  src={image}
                  alt={imageAlt}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-[520ms] [transition-timing-function:cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.04]"
                  style={
                    imagePosition
                      ? { objectPosition: imagePosition }
                      : undefined
                  }
                />
                <span aria-hidden className="sms-tile-sheen" />
              </figure>
            </div>
          )}
        </div>
      </div>
      <div className="relative z-10 -mb-px">
        <WaveDivider color={next} position="bottom" height={70} />
      </div>
    </section>
  );
}
