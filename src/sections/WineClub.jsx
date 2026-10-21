import { Wine } from "lucide-react";
import { WaveDivider } from "../components/WaveDivider";
import { PHOTOS, WINE_CLUB } from "../content/site";

export function WineClub() {
  return (
    <>
      <section
        id="sangria"
        className="relative sms-lightband pt-6 pb-14 md:pt-8 md:pb-16 overflow-hidden"
      >
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-28 md:h-36"
          style={{
            background:
              "linear-gradient(to bottom, var(--color-sand) 0%, rgba(247,243,236,0.55) 45%, transparent 100%)",
          }}
        />
        <div
          aria-hidden
          className="absolute -right-28 top-[-4rem] h-[28rem] w-[28rem] rounded-full opacity-40 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, var(--accent-strong), transparent 68%)",
          }}
        />
        <div className="container relative">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14 items-center [&>*]:min-w-0">
            <div className="sms-reveal relative">
              <figure className="sms-tile group relative rounded-[1.7rem] overflow-hidden shadow-[0_30px_60px_-26px_rgba(11,58,91,0.42)]">
                <img
                  src={PHOTOS.sangriaGroup}
                  alt="Congregants sharing wine and dessert at a candlelit table on the patio"
                  className="w-full aspect-[5/4] object-cover transition-transform duration-[520ms] [transition-timing-function:cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.04]"
                  loading="lazy"
                />
                <span aria-hidden className="sms-tile-sheen" />
              </figure>
            </div>
            <div>
              <p className="sms-eyebrow mb-4 flex items-center gap-2">
                <Wine className="h-4 w-4" />
                {WINE_CLUB.club}
              </p>
              <h2 className="sms-h2 sms-reveal text-[var(--color-pacific)] mb-6">
                Sip and schmooze with the{" "}
                <span className="sms-swash sms-swash-wrap sms-swash-wrap-sm">
                  L'Chaim Wine Club.
                </span>
              </h2>
              <p
                className="sms-reveal text-[var(--color-slate-blue)] text-[1.06rem] leading-relaxed mb-5"
                data-reveal-delay="60"
              >
                {WINE_CLUB.blurb}
              </p>
              <p
                className="sms-reveal text-[var(--color-slate-blue)]/85 text-[1.1rem] leading-relaxed mb-9"
                data-reveal-delay="100"
              >
                {WINE_CLUB.clubBlurb}
              </p>
              <div
                className="sms-reveal relative overflow-hidden rounded-[1.6rem] mb-9 px-7 py-8 md:px-9 md:py-9 text-white"
                style={{
                  background:
                    "linear-gradient(145deg, #7A1330 0%, #A81C3C 46%, #C8324A 100%)",
                }}
                data-reveal-delay="140"
              >
                <span
                  aria-hidden
                  className="absolute -right-12 -top-14 h-48 w-48 rounded-full opacity-25"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 50%, #FFB648 0%, #FF8A3D 55%, transparent 72%)",
                  }}
                />
                <span
                  aria-hidden
                  className="absolute -left-10 -bottom-16 h-40 w-40 rounded-full opacity-22"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 50%, #FFD37A 0%, #F0663F 60%, transparent 74%)",
                  }}
                />
                <span
                  aria-hidden
                  className="absolute right-[18%] -bottom-10 h-24 w-24 rounded-full opacity-18"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 50%, #FFC15E 0%, transparent 70%)",
                  }}
                />
                <div className="relative z-10">
                  <p className="flex items-start gap-2 text-[0.98rem] font-bold uppercase tracking-[0.14em] mb-3 text-[#FFD8A8]">
                    <Wine className="h-5 w-5 shrink-0 mt-[0.1rem]" />
                    celebrate life together!
                  </p>
                  <p className="font-[family-name:var(--font-display)] text-[1.85rem] md:text-[2.35rem] font-semibold leading-[1.1] mb-3">
                    Join us for our annual Sangria Fest!
                  </p>
                  <p className="text-[1.15rem] md:text-[1.22rem] leading-[1.55] text-white/92">
                    Everyone is welcome.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="relative z-10 -mt-px">
        <WaveDivider color="var(--color-sand)" position="bottom" height={76} />
      </div>
    </>
  );
}
