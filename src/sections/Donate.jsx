import { ArrowRight, HeartHandshake } from "lucide-react";
import { ScrollMark } from "../components/ScrollMark";
import { WaveDivider } from "../components/WaveDivider";
import { LINKS } from "../content/site";

export function Donate() {
  return (
    <>
      <section
        id="join"
        className="relative bg-[var(--color-sand)] overflow-hidden"
      >
        <div className="container relative py-16 md:py-20">
          <div className="rounded-[2rem] overflow-hidden bg-[var(--color-pacific)] sms-grain relative">
            <div
              aria-hidden
              className="absolute -top-24 -left-16 h-[26rem] w-[26rem] rounded-full opacity-40 blur-3xl"
              style={{
                background:
                  "radial-gradient(circle, var(--color-turquoise), transparent 68%)",
              }}
            />
            <div
              aria-hidden
              className="absolute -bottom-28 right-[-4rem] h-[24rem] w-[24rem] rounded-full opacity-30 blur-3xl"
              style={{
                background:
                  "radial-gradient(circle, var(--accent-strong), transparent 66%)",
              }}
            />
            <ScrollMark
              className="sms-watermark sms-watermark-light right-[-6rem] top-[-4rem] h-[26rem] w-[26rem] hidden md:block"
              stroke="currentColor"
            />
            <div className="relative grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:gap-14 items-center px-7 py-12 md:px-14 md:py-16">
              <div className="sms-reveal">
                <p className="sms-eyebrow sms-eyebrow-light mb-4">Donate</p>
                <h2 className="sms-h2 text-white mb-7">
                  <span className="sms-swash sms-swash-bright">
                    Tzedakah Box.
                  </span>
                </h2>
                <blockquote className="relative max-w-2xl pt-2">
                  <span
                    aria-hidden
                    className="absolute -top-6 -left-1 md:-top-8 md:-left-5 font-[family-name:var(--font-display)] text-[5rem] md:text-[7rem] leading-none text-[var(--color-turquoise)]/40 select-none"
                  >
                    “
                  </span>
                  <p className="relative text-white text-[1.42rem] md:text-[1.72rem] leading-[1.45] font-[family-name:var(--font-display)]">
                    Tzedakah is as important as all the other commandments put{" "}
                    <span className="whitespace-nowrap">
                      together.
                      <span
                        aria-hidden
                        className="ml-0.5 font-[family-name:var(--font-display)] text-[2.4rem] md:text-[3rem] leading-[0] align-[-0.35rem] text-[var(--color-turquoise)]/45 select-none"
                      >
                        ”
                      </span>
                    </span>
                  </p>
                </blockquote>
              </div>
              <div
                className="sms-reveal flex flex-col gap-4"
                data-reveal-delay="90"
              >
                <a
                  href={LINKS.donate}
                  target="_blank"
                  rel="noreferrer"
                  className="sms-btn sms-btn-primary !w-full !justify-center !px-8 !py-5 !text-[1.16rem]"
                >
                  Give
                  <HeartHandshake className="h-5 w-5" />
                </a>
                <a
                  href={LINKS.intake}
                  target="_blank"
                  rel="noreferrer"
                  className="sms-btn sms-btn-coral !w-full !justify-center !px-8 !py-5 !text-[1.16rem] text-center leading-snug"
                >
                  Support Us Through Membership
                  <ArrowRight className="h-5 w-5 shrink-0" />
                </a>
                <a
                  href={LINKS.login}
                  target="_blank"
                  rel="noreferrer"
                  className="text-center text-[var(--color-cyan-light)] text-[1.08rem] font-semibold hover:text-white transition-colors py-1"
                >
                  Already a member? Log in
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="relative z-10 -mb-px">
        <WaveDivider
          color="var(--color-pacific-deep)"
          position="bottom"
          height={80}
        />
      </div>
    </>
  );
}
