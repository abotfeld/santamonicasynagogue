import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "../components/ContactForm";
import { PageHero } from "../components/PageHero";
import { PageLayout } from "../components/PageLayout";
import { PAGE_PHOTOS } from "../content/pages";
import { CONTACT } from "../content/site";

export function ContactPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Contact <span className="sms-swash sms-swash-bright">Us</span>
          </>
        }
        intro={
          <p>
            Questions about services, membership, the High Holy Days or classes?
            Send us a note and a real person will answer.
          </p>
        }
        image={PAGE_PHOTOS.glassStar}
        imageAlt="A stained-glass Star of David and a shofar in the synagogue office"
      />
      <section className="relative bg-[var(--color-sand)] pt-8 pb-20 md:pb-24">
        <div className="container grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 items-start [&>*]:min-w-0">
          <div className="sms-reveal">
            <ContactForm />
          </div>
          <div className="space-y-6">
            <div
              className="sms-reveal sms-plain-card rounded-[1.5rem] p-7 space-y-4"
              data-reveal-delay="80"
            >
              <a
                href={CONTACT.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="flex gap-3 text-[1.14rem] text-[var(--color-pacific)] hover:text-[var(--color-turquoise-deep)]"
              >
                <MapPin className="h-5 w-5 mt-1 shrink-0 text-[var(--color-turquoise-deep)]" />
                <span>
                  {CONTACT.street}
                  <br />
                  {CONTACT.cityStateZip}
                </span>
              </a>
              <a
                href={CONTACT.phoneHref}
                className="flex gap-3 text-[1.14rem] text-[var(--color-pacific)] hover:text-[var(--color-turquoise-deep)]"
              >
                <Phone className="h-5 w-5 mt-1 shrink-0 text-[var(--color-turquoise-deep)]" />
                {CONTACT.phone}
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex gap-3 text-[1.14rem] text-[var(--color-pacific)] hover:text-[var(--color-turquoise-deep)]"
              >
                <Mail className="h-5 w-5 mt-1 shrink-0 text-[var(--color-turquoise-deep)]" />
                {CONTACT.email}
              </a>
            </div>
            <figure
              className="sms-reveal sms-tile rounded-[1.5rem] overflow-hidden bg-white"
              data-reveal-delay="140"
            >
              <img
                src={PAGE_PHOTOS.parkingMap}
                alt="Map showing parking for the synagogue at 1223 18th St (the old pharmacy parking lot), just up the street from 1260 18th St"
                className="w-full"
                loading="lazy"
              />
              <figcaption className="px-6 py-5">
                <p className="font-semibold text-[var(--color-pacific)] text-[1.1rem] mb-1">
                  Parking
                </p>
                <p className="text-[1.04rem] text-[var(--color-ink)]/75 leading-relaxed">
                  Park at 1223 18th St (the old pharmacy parking lot), just up
                  the street from the synagogue.
                </p>
                <a
                  href={CONTACT.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 font-semibold text-[var(--color-turquoise-deep)] hover:underline"
                >
                  Get directions
                  <ArrowRight className="h-4 w-4" />
                </a>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
