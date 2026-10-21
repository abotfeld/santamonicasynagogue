import { VideoCard } from "../components/VideoCard";
import { CONTACT, VIDEOS } from "../content/site";

export function SpecialVideo() {
  return (
    <>
      <section className="relative bg-[var(--color-pacific)] sms-grain overflow-hidden py-20 md:py-24">
        <div
          aria-hidden
          className="absolute -bottom-32 left-[-8%] h-[30rem] w-[30rem] rounded-full opacity-32 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, var(--color-turquoise), transparent 68%)",
          }}
        />
        <div
          aria-hidden
          className="absolute top-[6%] right-[10%] h-[22rem] w-[22rem] rounded-full opacity-20 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, var(--accent-strong), transparent 66%)",
          }}
        />
        <div className="container relative">
          <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16 items-center">
            <VideoCard
              src={VIDEOS.special.src}
              label={VIDEOS.special.label}
              autoPlay
              className="mx-auto lg:mx-0 w-full max-w-[17.5rem]"
            />
            <div className="sms-reveal">
              <p className="sms-eyebrow sms-eyebrow-light mb-4">
                Hear from our people
              </p>
              <h2 className="sms-h2 text-white mb-5">
                What makes this place{" "}
                <span className="sms-swash sms-swash-bright">special?</span>
              </h2>
              <p className="text-white/78 text-[1.2rem] leading-[1.62] mb-4">
                We're local. We're Reform. We're Jewish!
              </p>
              <p className="text-white/78 text-[1.2rem] leading-[1.62] mb-8">
                Tap for sound 🔊
              </p>
              <p className="text-white/45 text-[1rem] mt-6">
                Want to start by watching a Shabbat service from home? Join us
                every Friday at 6:00pm — we stream{" "}
                <a
                  href={CONTACT.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[var(--color-cyan-light)] underline underline-offset-2 hover:text-white transition-colors"
                >
                  live on Facebook
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
