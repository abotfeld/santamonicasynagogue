import { PHOTOS } from "../content/site";

// "From generation to generation" — a quiet closing moment on the homepage,
// with the photo from the Our Congregation page on thesms.org.
export function Generations() {
  return (
    <section className="relative bg-[var(--color-sand)] pt-6 pb-16 md:pt-10 md:pb-20">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:gap-14 items-center [&>*]:min-w-0">
          <figure className="sms-reveal sms-tile group relative rounded-[1.7rem] overflow-hidden max-w-[50rem]">
            <img
              src={PHOTOS.generations}
              alt="An older congregant in a kippah reading a picture book with a young boy on a bench at the synagogue"
              className="w-full aspect-[800/389] object-cover"
              loading="lazy"
            />
            <span aria-hidden className="sms-tile-sheen" />
          </figure>
          <div className="sms-reveal" data-reveal-delay="100">
            <p className="sms-eyebrow mb-4">
              L'dor v'dor ·{" "}
              <span className="sms-hebrew normal-case tracking-normal text-[1.15rem]">
                לְדוֹר וָדוֹר
              </span>
            </p>
            <h2 className="sms-h2 text-[var(--color-pacific)] mb-5">
              From generation <span className="sms-swash">to generation.</span>
            </h2>
            <p className="text-[1.2rem] text-[var(--color-ink)]/78 leading-[1.65]">
              Stories, prayers and a love of Jewish life, passed from one
              generation to the next.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
