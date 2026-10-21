import { ArrowRight } from "lucide-react";
import { SmartLink } from "../components/SmartLink";
import { CONTACT, PHOTOS } from "../content/site";

export function HolocaustTorah() {
  return (
    <>
      <section
        id="visit"
        className="relative sms-lightband pt-8 pb-20 md:pt-10 md:pb-24 overflow-hidden"
      >
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-32 md:h-40"
          style={{
            background:
              "linear-gradient(to bottom, var(--color-sand) 0%, rgba(247,243,236,0.6) 40%, transparent 100%)",
          }}
        />
        <div className="container relative">
          <div className="grid gap-10 lg:grid-cols-[1.06fr_0.94fr] lg:items-center">
            <div className="sms-reveal">
              <p className="sms-eyebrow mb-3">
                Memorial Scrolls Trust · Czech Memorial Scroll No. 445
              </p>
              <h2 className="sms-h2 text-[var(--color-pacific)] mb-5">
                We read from a{" "}
                <span className="sms-swash">Holocaust Torah.</span>
              </h2>
              <p className="text-[1.22rem] text-[var(--color-ink)]/80 leading-[1.6] mb-4">
                The Santa Monica Synagogue is blessed to be able to use a Torah
                recovered from the Jewish community of Susice, Czechoslovakia,
                which saw most of its members perish in the Holocaust.
              </p>
              <p className="text-[1.22rem] text-[var(--color-ink)]/80 leading-[1.6] mb-7">
                It perpetuates the memory of the Jewish community of Susice, and
                represents the continuity of Jewish life.
              </p>
              <SmartLink
                href="/our-holocaust-torah"
                className="sms-btn sms-btn-outline !px-6 !py-3.5 !text-[1.02rem] !border-[var(--color-pacific)]/30 !text-[var(--color-pacific)]"
              >
                Read the story of our Torah
                <ArrowRight className="h-4.5 w-4.5" />
              </SmartLink>
            </div>
            <div className="sms-reveal" data-reveal-delay="120">
              <div className="grid grid-cols-1 sm:grid-cols-[1.15fr_0.85fr] gap-4 items-start [&>*]:min-w-0">
                <figure className="sms-glass-card rounded-[1.6rem] overflow-hidden">
                  <img
                    src={PHOTOS.torah}
                    alt="An open Torah scroll unrolled on a table, the handwritten columns of text filling the frame"
                    className="relative z-10 w-full aspect-[4/3] object-cover scale-[2] origin-[26%_92%]"
                    loading="lazy"
                  />
                </figure>
                <figure className="sms-glass-card rounded-[1.6rem] overflow-hidden">
                  <img
                    src={PHOTOS.torahScrolls}
                    alt="Two of the congregation's Torah scrolls in embroidered gold mantles with silver breastplates"
                    className="relative z-10 w-full aspect-[4/5] object-cover object-[50%_45%]"
                    loading="lazy"
                  />
                </figure>
              </div>
              <div className="mt-5 sms-glass-card rounded-[1.6rem] p-7">
                <p className="relative z-10 sms-eyebrow mb-2.5">Where we are</p>
                <p className="relative z-10 font-display text-[1.4rem] font-semibold text-[var(--color-pacific)] leading-[1.3] mb-1">
                  {CONTACT.street}
                  <span className="block text-[1.15rem] font-normal text-[var(--color-ocean)]">
                    {CONTACT.cityStateZip}
                  </span>
                </p>
                <p className="relative z-10 text-[1.12rem] text-[var(--color-ink)]/80 leading-relaxed mb-4 mt-3">
                  Questions before your first visit? Call{" "}
                  <a
                    href={CONTACT.phoneHref}
                    className="font-semibold text-[var(--color-turquoise-deep)] hover:underline"
                  >
                    {CONTACT.phone}
                  </a>{" "}
                  or email{" "}
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="font-semibold text-[var(--color-turquoise-deep)] hover:underline"
                  >
                    {CONTACT.email}
                  </a>{" "}
                  and a real person will answer.
                </p>
                <p className="relative z-10 text-[1.1rem] text-[var(--color-ink)]/60 leading-relaxed">
                  If you would rather join from home, Friday services are
                  streamed live on Facebook every week.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
