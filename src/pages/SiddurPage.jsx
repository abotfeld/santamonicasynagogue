import { ArrowRight, Landmark, LogIn, Mail, Phone } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { PageLayout } from "../components/PageLayout";
import { CONTACT, LINKS } from "../content/site";

// Dedicate a Siddur (Steve Litvak Memorial Fund), Nov 2026.
// The button opens the ShulCloud form /form/dedicate-a-siddur in the same
// window, so members stay logged in and nobody gets lost in a new tab.
// Wording follows the Weekly of November 27, 2026.

const PRICE = 50;

function DedicateButton({ className = "" }) {
  return (
    <a
      href={LINKS.dedicateSiddur}
      target="_top"
      className={`sms-btn sms-btn-primary !text-[1.12rem] !px-8 !py-4 ${className}`}
    >
      Dedicate a Siddur
      <ArrowRight className="h-5 w-5" />
    </a>
  );
}

const STEPS = [
  <>
    Press the <strong>Dedicate a Siddur</strong> button.
  </>,
  <>
    Write your name the way you want it on the bookplate, and the name of the
    person you are honoring or remembering.
  </>,
  <>
    Choose how many siddurim. Each one is <strong>${PRICE}</strong>. If you
    dedicate more than one, you can write different words for each bookplate.
  </>,
  <>
    Pay online with a card, or choose <strong>"I will pay by check."</strong>
  </>,
];

const body = "text-[var(--color-ink)]/85 text-[1.18rem] md:text-[1.22rem] leading-[1.7]";

export function SiddurPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Steve Litvak Memorial Fund"
        title={
          <>
            Dedicate a{" "}
            <span className="sms-swash sms-swash-bright">Siddur</span>
          </>
        }
        intro={
          <>
            <p>
              Our congregation is getting beautiful new Shabbat evening
              siddurim, <em>Mishkan T'filah</em>. These are the books we will
              hold in our hands every Friday night, when we come together to
              pray, to sing and to welcome Shabbat.
            </p>
            <p>
              The new siddurim were made possible by the{" "}
              <strong className="text-white">Steve Litvak Memorial Fund</strong>
              , established by Gail Litvak in loving memory of her husband,
              Steve.
            </p>
            <p>
              For a donation of{" "}
              <strong className="text-white">${PRICE}</strong>, you can
              dedicate a siddur in honor or in memory of someone you love.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <DedicateButton />
              <span className="text-white/75 text-[1.06rem]">
                ${PRICE} for each siddur
              </span>
            </div>
          </>
        }
        next="var(--color-sand)"
      />

      <section className="relative bg-[var(--color-sand)]">
        <div className="container relative py-14 md:py-18">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 items-start [&>*]:min-w-0">
            <figure className="sms-reveal mx-auto w-full max-w-[26rem] lg:sticky lg:top-28">
              <img
                src="/photos/sms-siddur-bookplate.jpg"
                alt="Example of a bookplate: This Siddur is a gift from Miriam Rosen, in honor of her mother, Esther Kaplan. All of the wise-hearted people contributed to the work of the Mishkan. Exodus 36:8. Steve Litvak Memorial Fund."
                width="840"
                height="1064"
                className="w-full h-auto rounded-[0.6rem] shadow-[0_24px_50px_-24px_rgba(11,58,91,0.45)] border border-[#e6dcc8]"
                loading="lazy"
              />
              <figcaption className="text-[var(--color-slate-blue)] text-[1.04rem] leading-relaxed mt-4 text-center">
                An example of the bookplate. Your words will be printed on it
                and placed inside the siddur.
              </figcaption>
            </figure>

            <div className="space-y-10">
              <div className="sms-reveal">
                <p className="sms-eyebrow mb-3">How it works</p>
                <h2 className="sms-h2 text-[var(--color-pacific)] mb-6">
                  Four easy steps
                </h2>
                <ol className="space-y-5">
                  {STEPS.map((step, i) => (
                    <li key={i} className="flex gap-4 items-start">
                      <span
                        aria-hidden
                        className="shrink-0 h-10 w-10 rounded-full bg-[var(--color-pacific)] text-white font-semibold text-[1.15rem] grid place-items-center"
                      >
                        {i + 1}
                      </span>
                      <p className={`${body} pt-1`}>{step}</p>
                    </li>
                  ))}
                </ol>
                <p className={`${body} mt-6`}>
                  You can dedicate as many siddurim as you wish. Every Friday
                  night, someone in our community will open this book and see
                  the name you chose.
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="sms-reveal sms-plain-card rounded-[1.25rem] p-6">
                  <LogIn className="h-7 w-7 text-[var(--color-turquoise-deep)] mb-3" />
                  <h3 className="font-[family-name:var(--font-display)] text-[var(--color-pacific)] text-[1.35rem] font-semibold mb-2">
                    Members
                  </h3>
                  <p className="text-[var(--color-ink)]/80 text-[1.1rem] leading-[1.6]">
                    Please{" "}
                    <a
                      href={LINKS.login}
                      target="_top"
                      className="text-[var(--color-ocean)] underline underline-offset-4"
                    >
                      log in
                    </a>{" "}
                    first. Then you can pay with the card on file or add the
                    gift to your account.
                  </p>
                </div>
                <div
                  className="sms-reveal sms-plain-card rounded-[1.25rem] p-6"
                  data-reveal-delay="80"
                >
                  <Landmark className="h-7 w-7 text-[var(--color-turquoise-deep)] mb-3" />
                  <h3 className="font-[family-name:var(--font-display)] text-[var(--color-pacific)] text-[1.35rem] font-semibold mb-2">
                    Paying by check?
                  </h3>
                  <p className="text-[var(--color-ink)]/80 text-[1.1rem] leading-[1.6]">
                    Fill in the form and choose "I will pay by check." Make the
                    check to <strong>The Santa Monica Synagogue</strong> and
                    write <strong>"Siddur"</strong> in the memo. Mail it to{" "}
                    {CONTACT.street}, {CONTACT.cityStateZip}.
                  </p>
                </div>
              </div>

              <div className="sms-reveal flex flex-col sm:flex-row sm:items-center gap-5">
                <DedicateButton />
              </div>

              <div className="sms-reveal text-[var(--color-ink)]/80 text-[1.1rem] leading-[1.7]">
                <p className="font-semibold text-[var(--color-pacific)] mb-1">
                  Questions? We are happy to help.
                </p>
                <p className="flex flex-wrap gap-x-6 gap-y-1">
                  <a
                    href={CONTACT.phoneHref}
                    className="inline-flex items-center gap-2 text-[var(--color-ocean)]"
                  >
                    <Phone className="h-4.5 w-4.5" />
                    {CONTACT.phone}
                  </a>
                  <a
                    href={`mailto:${CONTACT.email}?subject=Dedicate%20a%20Siddur`}
                    className="inline-flex items-center gap-2 text-[var(--color-ocean)]"
                  >
                    <Mail className="h-4.5 w-4.5" />
                    {CONTACT.email}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="h-6" />
    </PageLayout>
  );
}
