import { PageHero } from "../components/PageHero";
import { PageLayout } from "../components/PageLayout";
import { WaveDivider } from "../components/WaveDivider";
import { OUTSIDE_LINKS, PAGE_PHOTOS } from "../content/pages";

const bodyLight =
  "text-white/85 text-[1.18rem] md:text-[1.22rem] leading-[1.7]";
const linkLight =
  "text-[var(--color-cyan-light)] underline underline-offset-4 decoration-[var(--color-turquoise)]/60 hover:text-white";

// The full story of the congregation's Torah from Susice. Text carried over
// word for word from the old site's "Our Torah" page.
export function HolocaustTorahPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Czech Memorial Scroll No. 445"
        title={
          <>
            Our{" "}
            <span className="sms-swash sms-swash-bright">Holocaust Torah</span>
          </>
        }
        intro={
          <p>
            The Santa Monica Synagogue is blessed to be able to use a Torah
            recovered from the Jewish community of Susice, Czechoslovakia, which
            saw most of its members perish in the Holocaust. It perpetuates the
            memory of the Jewish community of Susice, and represents the
            continuity of Jewish life.
          </p>
        }
        image={PAGE_PHOTOS.susiceTorah}
        imageAlt="The congregation's Torah scrolls in the ark"
        next="var(--color-pacific-deep)"
      />
      <section className="relative bg-[var(--color-pacific-deep)] sms-grain overflow-hidden">
        <div
          aria-hidden
          className="absolute -top-24 right-[-6%] h-[30rem] w-[30rem] rounded-full opacity-30 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, var(--color-turquoise), transparent 68%)",
          }}
        />
        <div className="container relative py-14 md:py-18">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14 items-start [&>*]:min-w-0">
            <div>
              <div className="space-y-5">
                <p className={bodyLight}>
                  The Jewish Community in Susice was established in the
                  mid-1600s. From all accounts, the Jews in Susice were
                  integrated into the local community, as were the other Jewish
                  communities in Bohemia and Moravia. The Jews were not isolated
                  in a ghetto; they spoke the local language, went to school
                  with non-Jewish children, and had non-Jewish friends. This
                  acceptance is one of the reasons Jews did not flee when the
                  Nazi threat started to build.
                </p>
                <p className={bodyLight}>
                  We know that the Susice scroll was one of about 1600 that were
                  collected from Jewish communities in Bohemia and Moravia by
                  the Nazis during World War II. The Torah scrolls, as well as
                  over 100,000 Jewish ceremonial items, were sent to the Jewish
                  Museum of Prague, where they remained, gathering dust, for
                  years. Only 1090 of the Jews from Bohemia and Moravia survived
                  the war. When the Communists took over Czechoslavakia, there
                  was no governmental interest in religion, and the scrolls
                  continued to be left in storage.
                </p>
                <p className={bodyLight}>
                  In 1963, a prominent British art dealer, with good working
                  relations in Czech art circles, was able to negotiate the sale
                  of over 1500 Torah scrolls. The acquisition was funded by
                  Ralph Yablon, a London businessman and philanthropist with the
                  condition that they be entrusted to a non-commercial body. The
                  Westminster Synagogue in London took on the mantle of housing,
                  restoring and distributing these "lost" scrolls. They created
                  the Memorial Scrolls Trust to assume this responsibility. As
                  part of their mission, the restored Czech scrolls were given a
                  new life in congregations around the world -- on 'permanent
                  loan' where they are touchstones for all of us to remember.
                </p>
                <p className={bodyLight}>
                  While researching the background of our Torah scroll, a
                  congregant, Ron Fomalont, was able to connect with the only
                  Jewish survivor of Susice--Hana Gruna. Hana was flown to Los
                  Angeles for the Dedication Ceremony of the restored Torah. She
                  literally handed the scroll to our congregation and asked us
                  to remember the Jews of Susice.
                </p>
                <p className={bodyLight}>
                  Since we received the Torah, our synagogue has supported the
                  maintenance of the Jewish Cemetary in Susice. A plaque was
                  commissioned and hand-carried to the Jewish Cemetary in Susice
                  by the Fomalonts and Ben-Meirs. Hana was present for the
                  dedication.
                </p>
                <p className={bodyLight}>
                  Our congregation continues to honor our Susice connection when
                  we use the Torah. We list those from Susice who perished in
                  our Yizkor booklet on Yom Kippur. We continue to subsidize the
                  up-keep of the Jewish Cemetary. Several families have visited
                  Susice over the years. When we use the Torah at services, all
                  of us can feel the special legacy and remember the Jews of
                  Susice.
                </p>
                <p className="text-white/60 text-[1.06rem] italic">
                  -- from Restoring Our Founding Torah, Sha'arei Am: The Santa
                  Monica Synagogue.
                </p>
                <div className="grid grid-cols-3 gap-3 pt-2">
                  {[
                    [
                      PAGE_PHOTOS.torahMantle,
                      "The embroidered mantle of the congregation's Torah",
                    ],
                    [
                      PAGE_PHOTOS.susiceHana,
                      "A visit to Susice, Czechoslovakia",
                    ],
                    [
                      PAGE_PHOTOS.susicePlaque,
                      "Congregants at the dedication of the plaque in the Jewish Cemetary in Susice",
                    ],
                  ].map(([src, alt]) => (
                    <figure
                      key={src}
                      className="sms-reveal rounded-[1rem] overflow-hidden border border-white/15"
                    >
                      <img
                        src={src}
                        alt={alt}
                        className="w-full aspect-square object-cover"
                        loading="lazy"
                      />
                    </figure>
                  ))}
                </div>
                <p className={bodyLight}>
                  For more details on our Torah,{" "}
                  <a
                    href={OUTSIDE_LINKS.torahDetails}
                    target="_blank"
                    rel="noreferrer"
                    className={linkLight}
                  >
                    click here
                  </a>
                  .
                </p>
              </div>
            </div>
            <div className="space-y-5 lg:sticky lg:top-28">
              <figure className="sms-reveal sms-tile group relative rounded-[1.5rem] overflow-hidden border border-[var(--color-turquoise)]/30">
                <img
                  src={PAGE_PHOTOS.rabbiTorah}
                  alt="Rabbi Shira Freidlin holding the congregation's Torah in its embroidered mantle"
                  className="w-full aspect-[4/5] object-cover object-[40%_50%]"
                  loading="lazy"
                />
                <span aria-hidden className="sms-tile-sheen" />
              </figure>
              <div
                className="sms-reveal sms-seaglass-dark rounded-[1.5rem] p-7"
                data-reveal-delay="80"
              >
                <p className="sms-eyebrow sms-eyebrow-light mb-3">
                  Memorial Scrolls Trust
                </p>
                <blockquote className="font-[family-name:var(--font-display)] text-white text-[1.2rem] leading-[1.5] mb-3">
                  "The Memorial Scrolls Trust cares for 1564 Torah scrolls that
                  represent the lost Jewish communities of Bohemia and Moravia.
                  Some 1400 have been allocated on loan (they are never sold) to
                  communities and organizations around the world."
                </blockquote>
                <p className="text-white/60 text-[1rem] mb-4">
                  Memorial Scrolls Trust.
                </p>
                <p className="text-white/85 text-[1.08rem] leading-relaxed mb-2">
                  <a
                    href={OUTSIDE_LINKS.memorialScrollsTrust}
                    target="_blank"
                    rel="noreferrer"
                    className={linkLight}
                  >
                    Read more about the Memorial Scrolls Trust
                  </a>
                  .
                </p>
                <p className="text-white/85 text-[1.08rem] leading-relaxed mb-2">
                  Our scroll, Czech Memorial Scroll is No. 445.
                </p>
                <p className="text-white/85 text-[1.08rem] leading-relaxed">
                  Read the{" "}
                  <a
                    href={OUTSIDE_LINKS.nytTorahStory}
                    target="_blank"
                    rel="noreferrer"
                    className={linkLight}
                  >
                    New York Times
                  </a>{" "}
                  feature story on the Trust from February 5, 2024.
                </p>
              </div>
            </div>
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
