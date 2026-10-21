import { Facebook, Mail, MapPin, Phone } from "lucide-react";
import { CONTACT, LINKS, NAV_LINKS } from "../content/site";
import { MapCard } from "./MapCard";
import { SmartLink } from "./SmartLink";
import { ScrollMark } from "./ScrollMark";

export function Footer() {
  return (
    <footer className="relative bg-[var(--color-pacific-deep)] text-white/78 sms-grain overflow-hidden">
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--color-turquoise), transparent)",
        }}
      />
      <div
        aria-hidden
        className="absolute -bottom-40 -right-24 h-[26rem] w-[26rem] rounded-full opacity-25 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--color-turquoise), transparent 68%)",
        }}
      />
      <div className="container relative py-16">
        <div className="grid gap-12 lg:grid-cols-[1.35fr_1fr_1fr_1.1fr]">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <ScrollMark className="h-12 w-12" stroke="#7FE0E8" />
              <span className="font-[family-name:var(--font-display)] text-[1.28rem] font-semibold text-white leading-tight">
                The Santa Monica
                <br />
                Synagogue
              </span>
            </div>
            <p className="text-[1.06rem] leading-relaxed max-w-xs">
              An intimate Reform congregation two miles from the ocean, founded
              in 1981. Come as you are.
            </p>
            <a
              href={CONTACT.facebook}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 mt-5 text-[1.15rem] text-[var(--color-cyan-light)] hover:text-white transition-colors"
            >
              <Facebook className="h-4 w-4" />
              Watch services on Facebook
            </a>
          </div>
          <div>
            <h4 className="sms-eyebrow sms-eyebrow-light mb-4">Explore</h4>
            <ul className="space-y-2.5 text-[1.06rem]">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <SmartLink
                    href={link.href}
                    className="hover:text-[var(--color-cyan-light)] transition-colors"
                  >
                    {link.label}
                  </SmartLink>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="sms-eyebrow sms-eyebrow-light mb-4">Take Part</h4>
            <ul className="space-y-2.5 text-[1.06rem]">
              <li>
                <a
                  href={LINKS.intake}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[var(--color-cyan-light)] transition-colors"
                >
                  New Member Intake
                </a>
              </li>
              <li>
                <a
                  href={LINKS.join}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[var(--color-cyan-light)] transition-colors"
                >
                  Membership
                </a>
              </li>
              <li>
                <a
                  href={LINKS.donate}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[var(--color-cyan-light)] transition-colors"
                >
                  Donate
                </a>
              </li>
              <li>
                <a
                  href={LINKS.hhd}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[var(--color-cyan-light)] transition-colors"
                >
                  High Holy Days
                </a>
              </li>
              <li>
                <a
                  href={LINKS.login}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[var(--color-cyan-light)] transition-colors"
                >
                  Member Login
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="sms-eyebrow sms-eyebrow-light mb-4">Reach Us</h4>
            <ul className="space-y-3.5 text-[1.02rem]">
              <li className="flex gap-2.5">
                <MapPin className="h-4.5 w-4.5 mt-1 shrink-0 text-[var(--color-turquoise)]" />
                <a
                  href={CONTACT.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/80 hover:text-[var(--color-cyan-light)] transition-colors"
                >
                  {CONTACT.street}
                  <br />
                  {CONTACT.cityStateZip}
                  <br />
                  <span className="text-white/55">
                    Parking lot and street parking nearby
                  </span>
                </a>
              </li>
              <li className="flex gap-2.5">
                <Phone className="h-4.5 w-4.5 mt-1 shrink-0 text-[var(--color-turquoise)]" />
                <a
                  href={CONTACT.phoneHref}
                  className="hover:text-[var(--color-cyan-light)] transition-colors"
                >
                  {CONTACT.phone}
                </a>
              </li>
              <li className="flex gap-2.5">
                <Mail className="h-4.5 w-4.5 mt-1 shrink-0 text-[var(--color-turquoise)]" />
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="hover:text-[var(--color-cyan-light)] transition-colors"
                >
                  {CONTACT.email}
                </a>
              </li>
            </ul>
            <div className="mt-7">
              <MapCard />
            </div>
          </div>
        </div>
        <div className="mt-14 pt-6 border-t border-white/12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[1.06rem] text-white/55">
          <p>
            {"© "}
            {new Date().getFullYear()}
            {" The Santa Monica Synagogue. A Reform congregation since 1981."}
          </p>
          <p className="sms-hebrew text-[1.06rem] text-[var(--color-cyan-light)]/70">
            שַׁבָּת שָׁלוֹם
          </p>
        </div>
      </div>
    </footer>
  );
}
