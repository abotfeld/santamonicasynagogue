import { PHOTOS } from "../content/site";

export function Tashlich() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative min-h-[19rem] md:min-h-[24rem] lg:min-h-[27rem]">
        <img
          src={PHOTOS.beachGathering}
          alt="Dozens of congregants gathered at the water's edge on Santa Monica beach in the late afternoon sun"
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(100deg, rgba(6,32,52,0.93) 0%, rgba(6,32,52,0.8) 30%, rgba(6,32,52,0.4) 56%, rgba(6,32,52,0.06) 100%)",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-2/5"
          style={{
            background:
              "linear-gradient(to top, rgba(6,32,52,0.72), transparent)",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 z-[9] h-40 md:h-52"
          style={{
            background:
              "linear-gradient(to bottom, var(--color-sand) 0%, rgba(247,243,236,0.6) 34%, rgba(247,243,236,0.2) 66%, transparent 100%)",
          }}
        />
        <div aria-hidden className="absolute inset-x-0 top-0 z-10">
          <svg
            viewBox="0 0 1440 80"
            preserveAspectRatio="none"
            className="w-full h-[52px] md:h-[70px] block"
            style={{
              color: "var(--color-sand)",
            }}
          >
            <path
              d="M0,0 L1440,0 L1440,26 C1200,64 1040,10 800,30 C560,50 380,8 180,34 C110,43 50,40 0,32 Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <div className="container relative h-full flex items-center py-16 md:py-20">
          <div className="max-w-[36rem] sms-reveal">
            <p className="sms-eyebrow sms-eyebrow-light mb-3.5">
              Tashlich · Rosh Hashannah
            </p>
            <h2 className="sms-h2 text-white mb-4">
              Join us for Tashlich{" "}
              <span className="sms-swash sms-swash-bright">on the beach.</span>
            </h2>
            <p className="text-white/85 text-[1.16rem] md:text-[1.22rem] leading-[1.65]">
              Tashlich on the beach is part of our High Holy Days every year. We
              cast our bread into the Pacific Ocean as we welcome in the New
              Year together as a community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
