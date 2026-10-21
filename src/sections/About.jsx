import { ScrollMark } from "../components/ScrollMark";
import { StarOfDavid } from "../components/StarOfDavid";
import { WaveDivider } from "../components/WaveDivider";
import { CONTRASTS, PHOTOS } from "../content/site";

export function About() {
  return (
    <>
      <div
        aria-hidden
        className="relative z-10 h-px w-full bg-gradient-to-r from-transparent via-[var(--color-turquoise)]/35 to-transparent"
      />

      <section
        id="about"
        className="relative bg-[var(--color-pacific)] sms-grain overflow-hidden"
      >
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.13]"
          style={{
            backgroundImage: `url(${PHOTOS.beach})`,
            backgroundSize: "cover",
            backgroundPosition: "center 30%",
          }}
        />

        <div
          aria-hidden
          className="absolute -top-32 right-[-8%] h-[34rem] w-[34rem] rounded-full opacity-35 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, var(--color-turquoise), transparent 68%)",
          }}
        />

        <ScrollMark
          className="sms-watermark sms-watermark-light -left-32 top-[10%] h-[34rem] w-[34rem] hidden lg:block"
          stroke="currentColor"
        />

        <div className="container relative py-20 md:py-28">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="sms-reveal">
              <p className="sms-eyebrow sms-eyebrow-light mb-4">Who we are</p>
              <h2 className="sms-h2 text-white mb-6">Small on purpose.</h2>
              <p className="text-white/85 text-[1.24rem] md:text-[1.3rem] leading-[1.68] mb-5">
                We are an intimate Reform congregation founded in 1981. We come
                together to worship, to study, to practice{" "}
                <span className="sms-hebrew text-[var(--color-cyan-light)] font-semibold">
                  tikkun olam
                </span>{" "}
                — repairing the world — to celebrate our joyous occasions and to
                be a support to one another in times of difficulty.
              </p>
              <p className="text-white/85 text-[1.24rem] md:text-[1.3rem] leading-[1.68] mb-8">
                We are a diverse congregation: religiously, racially, and
                socio-economically. Among our families are couples with
                children, seniors, single parents, same-sex partners, interfaith
                couples, and singles. We embrace the varied orientations of
                Reform Jews in contemporary society.
              </p>
              <p className="text-white/85 text-[1.24rem] md:text-[1.3rem] leading-[1.68] mb-7">
                We are entrusted with a Holocaust Torah — a scroll that survived
                the destruction of a Jewish community in Czechoslovakia and now
                lives on our bima, read aloud in this congregation.
              </p>
              <div className="mb-9 flex flex-wrap gap-8">
                {[
                  {
                    n: "45",
                    l: "years in Santa Monica",
                  },
                  {
                    n: "1981",
                    l: "founded",
                  },
                  {
                    n: "1",
                    l: "Holocaust Torah",
                  },
                ].map((stat) => (
                  <div key={stat.l}>
                    <p className="font-[family-name:var(--font-display)] text-[2.6rem] font-semibold text-[var(--color-cyan-light)] leading-none">
                      {stat.n}
                    </p>
                    <p className="text-white/70 text-[1.06rem] mt-1.5 max-w-[9rem] leading-snug">
                      {stat.l}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-px">
              {CONTRASTS.map((line, index) => (
                <div
                  key={line.b}
                  className="sms-reveal group flex flex-col sm:flex-row sm:items-baseline gap-x-3 gap-y-1 py-6 border-b border-[var(--color-turquoise)]/25 last:border-0"
                  data-reveal-delay={index * 80}
                >
                  <span className="text-[var(--color-turquoise)] shrink-0 w-8 flex justify-start sm:self-baseline sm:translate-y-[0.1rem]">
                    <StarOfDavid
                      className="h-[1.7rem] w-[1.7rem]"
                      strokeWidth={1.6}
                    />
                  </span>
                  <span className="text-[var(--color-cyan-light)] text-[1.35rem] md:text-[1.45rem] font-semibold shrink-0">
                    {line.a}
                  </span>
                  <span className="font-[family-name:var(--font-display)] text-white text-[1.85rem] md:text-[2.3rem] font-semibold leading-tight">
                    {line.b}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="relative z-10 -mb-px">
          <WaveDivider color="#FFFFFF" position="bottom" height={80} />
        </div>
      </section>
    </>
  );
}
