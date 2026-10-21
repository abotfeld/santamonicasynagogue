import {
  Accessibility,
  ArrowRight,
  Car,
  HeartHandshake,
  MapPin,
  Shirt,
  Users,
} from "lucide-react";
import { MapCard } from "../components/MapCard";
import { ScrollMark } from "../components/ScrollMark";
import { WaveDivider } from "../components/WaveDivider";
import { CONTACT, FAQS } from "../content/site";

export function Faq() {
  const ICONS = {
    parking: Car,
    dress: Shirt,
    access: Accessibility,
    interfaith: HeartHandshake,
  };
  return (
    <>
      <section
        id="welcome"
        className="relative bg-[var(--color-sand)] pt-8 pb-24 md:pt-10 md:pb-28 overflow-hidden"
      >
        <ScrollMark
          className="sms-watermark -right-28 top-[6%] h-[30rem] w-[30rem] hidden lg:block"
          stroke="currentColor"
        />
        <div className="container relative">
          <div className="sms-reveal max-w-4xl mb-14">
            <p className="sms-eyebrow mb-4">Frequently asked questions</p>
            <h2 className="sms-h2 text-[var(--color-pacific)] mb-6">
              Every question you were{" "}
              <span className="sms-swash">going to ask.</span>
            </h2>
            <p className="text-[1.3rem] md:text-[1.45rem] text-[var(--color-ink)]/80 leading-[1.6]">
              Where do I park? What should I wear? Can I get in without stairs?
              Can I bring someone who is not Jewish?
            </p>
          </div>
          <div className="space-y-5">
            {FAQS.map((faq, index) => {
              const Icon = ICONS[faq.key] ?? Users;
              return (
                <div
                  key={faq.key}
                  className="sms-reveal sms-plain-card sms-plain-card-accent rounded-[1.35rem] p-7 md:p-10"
                  data-reveal-delay={index * 70}
                >
                  <div className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-9 md:items-start">
                    <span className="flex shrink-0 items-center justify-center rounded-[1.4rem] bg-[var(--color-cyan-pale)] text-[var(--color-ocean)] ring-1 ring-[var(--color-turquoise)]/30 h-24 w-24 md:h-28 md:w-28">
                      <Icon
                        className="h-12 w-12 md:h-14 md:w-14"
                        strokeWidth={1.75}
                      />
                    </span>
                    <div className="min-w-0">
                      <h3 className="font-[family-name:var(--font-display)] font-semibold text-[var(--color-pacific)] leading-[1.12] mb-3 text-[1.85rem] md:text-[2.5rem]">
                        {faq.question}
                      </h3>
                      <p className="text-[var(--color-ink)]/80 leading-[1.62] max-w-4xl text-[1.35rem] md:text-[1.5rem]">
                        {faq.body}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-14 grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14 items-center">
            <div className="sms-reveal">
              <MapCard tone="page" />
            </div>
            <div className="sms-reveal" data-reveal-delay="90">
              <h3 className="text-[1.9rem] md:text-[2.3rem] font-semibold text-[var(--color-pacific)] leading-[1.12] mb-4">
                You'll find us{" "}
                <span className="sms-swash">on 18th Street.</span>
              </h3>
              <p className="text-[1.25rem] md:text-[1.32rem] text-[var(--color-ink)]/80 leading-[1.6] mb-6">
                We're in the heart of Santa Monica, around the corner from
                Fromin's Deli — easy to reach from anywhere on the Westside.
              </p>
              <a
                href={CONTACT.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="sms-glass-card group block rounded-[1.5rem] p-7 md:p-8 mb-6 transition-transform duration-[220ms] [transition-timing-function:var(--ease-out-soft)] hover:-translate-y-[3px]"
              >
                <p className="relative z-10 sms-eyebrow mb-3 flex items-center gap-2">
                  <MapPin className="h-4.5 w-4.5 shrink-0 text-[var(--color-turquoise-deep)]" />
                  Our address
                </p>
                <p className="relative z-10 font-display text-[1.85rem] md:text-[2.15rem] font-semibold text-[var(--color-pacific)] leading-[1.2]">
                  {CONTACT.street}
                </p>
                <p className="relative z-10 font-display text-[1.5rem] md:text-[1.7rem] text-[var(--color-ocean)] leading-[1.3] mt-0.5">
                  {CONTACT.cityStateZip}
                </p>
                <p className="relative z-10 mt-4 inline-flex items-center gap-1.5 text-[1.1rem] font-semibold text-[var(--color-turquoise-deep)] group-hover:underline">
                  Get directions
                  <ArrowRight className="h-4 w-4 transition-transform duration-[220ms] group-hover:translate-x-1" />
                </p>
              </a>
              <p className="text-[1.18rem] text-[var(--color-ink)]/70 leading-[1.6] mb-5">
                There's a large parking lot nearby and street parking on the
                block, and no stairs to deal with on your way in.
              </p>
              <p className="text-[var(--color-ink)]/60 text-[1.15rem] leading-relaxed">
                There's nothing to book and no one to tell. Come on a Friday at
                6:00 PM and someone will find you.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="relative z-10 -mt-px -mb-px">
        <WaveDivider
          color="var(--color-pacific)"
          position="bottom"
          height={80}
        />
      </div>
    </>
  );
}
