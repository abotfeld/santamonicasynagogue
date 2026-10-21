import { PHOTOS } from "../content/site";

export function Rabbi() {
  return (
    <section
      id="rabbi"
      className="relative bg-white pt-6 pb-20 md:pb-24 overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute -left-40 top-1/4 h-[30rem] w-[30rem] rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--color-cyan-light), transparent 68%)",
        }}
      />
      <div className="container relative">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.3fr] lg:items-center">
          <div className="sms-reveal relative lg:-mt-8">
            <div
              aria-hidden
              className="absolute -inset-4 rounded-[2rem] opacity-40 blur-2xl"
              style={{
                background:
                  "radial-gradient(circle at 40% 40%, var(--color-cyan-light), transparent 68%)",
              }}
            />
            <img
              src={PHOTOS.rabbiShira}
              alt="Rabbi Shira Freidlin being hugged by a congregant on the bima while holding a gift book"
              className="relative rounded-[1.6rem] w-full aspect-[4/5] object-cover object-center border border-[var(--color-turquoise)]/25"
              loading="lazy"
            />
            <div className="relative mt-4 w-full sm:w-fit sm:ml-auto rounded-full bg-[var(--accent-strong)] text-[var(--accent-on)] px-5 py-2.5 text-center sm:text-left text-[0.8rem] sm:text-[0.95rem] font-bold tracking-normal sm:tracking-wide shadow-[0_14px_30px_-14px_rgba(var(--accent-shadow),0.5)]">
              Santa Monica Synagogue Rabbi since 2022
            </div>
          </div>
          <div className="sms-reveal" data-reveal-delay="90">
            <p className="sms-eyebrow mb-3">Our rabbi</p>
            <h2 className="sms-h2 text-[var(--color-pacific)] mb-4">
              Rabbi Shira Freidlin
            </h2>
            <p className="text-[1.15rem] text-[var(--color-ink)]/80 leading-relaxed mb-4">
              Rabbi Shira Freidlin has taught students of all ages in Jewish
              camps, Jewish recovery programs, and religious schools. Since July
              1st, 2022 she has been the spiritual leader of The Santa Monica
              Synagogue. She has served in various roles at IKAR, Temple Beth Am
              and Beit T'Shuvah in Los Angeles since she moved out here in 2007.
            </p>
            <p className="text-[1.15rem] text-[var(--color-ink)]/80 leading-relaxed mb-6">
              She holds a BFA in Film & TV from NYU with a concentration in
              Children's TV, an MA in Jewish Education from the Jewish
              Theological Seminary, and an MA and ordination from the Academy of
              Jewish Religion California. She currently sits on the Sandra
              Caplan Community Beit Din and serves as Vice President of the
              Santa Monica Area Interfaith Council.
            </p>
            <blockquote className="border-l-3 border-[var(--color-turquoise)] pl-5 py-1 mb-7">
              <p className="font-[family-name:var(--font-display)] text-[1.3rem] text-[var(--color-pacific)] italic leading-snug">
                She is thrilled to be throwing her considerable joy and
                enthusiasm into elevating the learning, spirituality, and
                worship at The Santa Monica Synagogue.
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
