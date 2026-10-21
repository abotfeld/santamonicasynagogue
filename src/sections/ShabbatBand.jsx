import { Clock, MapPin, Video } from "lucide-react";
import { WaveDivider } from "../components/WaveDivider";
import { CONTACT } from "../content/site";

export function ShabbatBand() {
  return (
    <section
      id="worship"
      className="relative bg-[var(--color-pacific)] sms-grain overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute -top-32 left-1/4 h-[24rem] w-[24rem] rounded-full opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--color-turquoise), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="absolute -bottom-24 right-[6%] h-[20rem] w-[20rem] rounded-full opacity-25 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--accent-strong), transparent 68%)",
        }}
      />
      <div className="container relative py-14 md:py-16">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.35fr)_minmax(0,auto)] lg:items-center">
          <div className="sms-reveal min-w-0">
            <p className="sms-eyebrow sms-eyebrow-light mb-2">This week</p>
            <h2 className="sms-h2 text-white">
              {"Shabbat is "}
              <br className="hidden sm:block" />
              <span className="sms-swash sms-swash-bright">
                Friday at 6:00pm
              </span>
            </h2>
          </div>
          <div
            className="sms-reveal min-w-0 lg:pl-10 lg:border-l lg:border-white/15"
            data-reveal-delay="90"
          >
            <div className="flex flex-wrap gap-x-7 gap-y-2.5 text-white/85">
              <span className="flex items-center gap-2 text-[1.1rem] whitespace-nowrap">
                <Clock className="h-4.5 w-4.5 shrink-0 text-[var(--color-turquoise)]" />
                6:00 – 7:00 PM
              </span>
              <a
                href={CONTACT.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-[1.1rem] whitespace-nowrap underline decoration-[var(--color-turquoise)]/50 decoration-2 underline-offset-4 hover:text-white hover:decoration-[var(--color-turquoise)] transition-colors"
              >
                <MapPin className="h-4.5 w-4.5 shrink-0 text-[var(--color-turquoise)]" />
                {CONTACT.addressShort}
              </a>
              <a
                href={CONTACT.facebook}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-[1.1rem] whitespace-nowrap underline decoration-[var(--color-turquoise)]/50 decoration-2 underline-offset-4 hover:text-white hover:decoration-[var(--color-turquoise)] transition-colors"
              >
                <Video className="h-4.5 w-4.5 shrink-0 text-[var(--color-turquoise)]" />
                Streamed live on Facebook
              </a>
            </div>
            <p className="text-white/62 mt-3 text-[1.08rem] max-w-xl">
              Services are streamed live on Facebook for the general public and
              on Zoom for members of the Santa Monica Synagogue.
            </p>
          </div>
        </div>
      </div>
      <div className="relative z-10 -mb-px">
        <WaveDivider color="#FFFFFF" position="bottom" height={80} />
      </div>
    </section>
  );
}
