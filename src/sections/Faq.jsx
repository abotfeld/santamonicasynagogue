import {
  Accessibility,
  Car,
  HeartHandshake,
  Shirt,
  Users,
} from "lucide-react";
import { MapCard } from "../components/MapCard";
import { ScrollMark } from "../components/ScrollMark";
import { WaveDivider } from "../components/WaveDivider";
import { FAQS } from "../content/site";

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
          <div className="sms-reveal max-w-4xl mb-10">
            <p className="sms-eyebrow mb-4">Frequently asked questions</p>
            <h2 className="sms-h2 text-[var(--color-pacific)]">
              Every question you were{" "}
              <span className="sms-swash">going to ask.</span>
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {FAQS.map((faq, index) => {
              const Icon = ICONS[faq.key] ?? Users;
              return (
                <div
                  key={faq.key}
                  className="sms-reveal sms-plain-card sms-plain-card-accent rounded-[1.35rem] p-6 md:p-7"
                  data-reveal-delay={index * 70}
                >
                  <div className="relative z-10 flex gap-5 items-start">
                    <span className="flex shrink-0 items-center justify-center rounded-[1.4rem] bg-[var(--color-cyan-pale)] text-[var(--color-ocean)] ring-1 ring-[var(--color-turquoise)]/30 h-14 w-14">
                      <Icon
                        className="h-7 w-7"
                        strokeWidth={1.75}
                      />
                    </span>
                    <div className="min-w-0">
                      <h3 className="font-[family-name:var(--font-display)] font-semibold text-[var(--color-pacific)] leading-[1.15] mb-2 text-[1.45rem] md:text-[1.6rem]">
                        {faq.question}
                      </h3>
                      <p className="text-[var(--color-ink)]/80 leading-[1.55] text-[1.15rem] md:text-[1.2rem]">
                        {faq.body}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-12 grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14 items-center">
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
