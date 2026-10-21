import { PageHero } from "../components/PageHero";
import { PageLayout } from "../components/PageLayout";
import { ADULT_CLASSES, PAGE_PHOTOS } from "../content/pages";
import { CONTACT } from "../content/site";

export function EducationPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Education"
        title={
          <>
            Adult <span className="sms-swash sms-swash-bright">Education</span>
          </>
        }
        intro={
          <p>
            Lifelong learning is one of the hallmarks of our congregation. Rabbi
            Shira teaches Hebrew, Liturgy and Torah, examining modern ethical
            issues, exploring Jewish spirituality, and relating Jewish text to
            our contemporary lives. For more information or to sign up, please{" "}
            <a
              href={`mailto:${CONTACT.email}`}
              className="text-[var(--color-cyan-light)] underline underline-offset-4 decoration-[var(--color-turquoise)]/60 hover:text-white"
            >
              contact our office.
            </a>
          </p>
        }
        image={PAGE_PHOTOS.shalomCloth}
        imageAlt="The word Shalom embroidered in gold on a blue cloth"
      />
      <section className="relative bg-[var(--color-sand)] pt-10 pb-20 md:pb-24">
        <div className="container">
          <div className="sms-reveal mb-8">
            <p className="sms-eyebrow mb-3">Weekly classes with Rabbi Shira</p>
            <h2 className="sms-h2 text-[var(--color-pacific)]">
              Find your <span className="sms-swash">class.</span>
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {ADULT_CLASSES.map((cls, index) => (
              <article
                key={cls.name}
                className="sms-reveal sms-lift sms-glass-card rounded-[1.35rem] p-7 md:p-8 flex items-start justify-between gap-4"
                data-reveal-delay={index * 70}
              >
                <div>
                  <h3 className="font-[family-name:var(--font-display)] text-[1.55rem] md:text-[1.75rem] font-semibold text-[var(--color-pacific)] leading-tight mb-2">
                    {cls.name}
                  </h3>
                  <p className="text-[1.15rem] text-[var(--color-ink)]/78">
                    {cls.when}
                  </p>
                </div>
                <span
                  className={`shrink-0 text-[0.86rem] font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full ${cls.where === "Zoom" ? "bg-[var(--color-cyan-pale)] text-[var(--color-ocean)]" : "bg-[var(--color-pacific)] text-white"}`}
                >
                  {cls.where}
                </span>
              </article>
            ))}
          </div>
          <p className="sms-reveal mt-10 text-[1.18rem] text-[var(--color-ink)]/75 leading-relaxed">
            To sign up, email{" "}
            <a
              href={`mailto:${CONTACT.email}`}
              className="font-semibold text-[var(--color-turquoise-deep)] hover:underline"
            >
              {CONTACT.email}
            </a>{" "}
            or call{" "}
            <a
              href={CONTACT.phoneHref}
              className="font-semibold text-[var(--color-turquoise-deep)] hover:underline"
            >
              {CONTACT.phone}
            </a>
            .
          </p>
        </div>
      </section>
    </PageLayout>
  );
}
