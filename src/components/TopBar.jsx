import { useEffect, useState } from "react";
import { MapPin, Menu, Phone, X } from "lucide-react";
import { CONTACT, LINKS, NAV_LINKS } from "../content/site";
import { isEmbedded, wantsOwnNav } from "../lib/embed";
import { SmartLink } from "./SmartLink";
import { StarOfDavid } from "./StarOfDavid";
import { Wordmark } from "./Wordmark";

export function TopBar({ overHero = true, variantSwitcher, showNav = false }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 70);
    onScroll();
    window.addEventListener("scroll", onScroll, {
      passive: true,
    });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const solid = scrolled || !overHero;
  return (
    <>
      <div className="bg-[var(--color-pacific-deep)] text-white/85 text-[0.9rem] md:text-[0.95rem] relative z-50">
        <div className="container flex items-center justify-center md:justify-between gap-x-7 gap-y-1 py-2.5 md:h-12 md:py-0 flex-wrap text-center md:text-left">
          <div className="flex items-center gap-x-6 gap-y-1 flex-wrap justify-center">
            <a
              href={CONTACT.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-[var(--color-cyan-light)] transition-colors"
            >
              <MapPin className="h-4 w-4 shrink-0 text-[var(--color-turquoise)]" />
              {CONTACT.addressShort}
            </a>
            <a
              href={CONTACT.phoneHref}
              className="flex items-center gap-1.5 font-semibold hover:text-[var(--color-cyan-light)] transition-colors"
            >
              <Phone className="h-4 w-4 shrink-0 text-[var(--color-turquoise)]" />
              {CONTACT.phone}
            </a>
          </div>
          <div className="hidden md:flex items-center gap-6 whitespace-nowrap">
            {variantSwitcher}
            {isEmbedded() && (
              <a
                href={LINKS.login}
                target="_top"
                className="font-semibold hover:text-[var(--color-cyan-light)] transition-colors"
              >
                Member Login
              </a>
            )}
            <span className="flex items-center gap-2">
              <StarOfDavid className="h-4 w-4 text-[var(--color-turquoise)]" />
              Reform Jewish Congregation
            </span>
          </div>
        </div>
      </div>
      {showNav && (!isEmbedded() || wantsOwnNav()) && (
        <header
          className={`sticky top-0 z-40 transition-all duration-300 ${solid ? "bg-white/92 backdrop-blur-xl shadow-[0_6px_28px_-18px_rgba(11,58,91,0.5)]" : "bg-transparent"}`}
        >
          <div className="container flex items-center justify-between py-3 gap-2 sm:gap-4 lg:gap-2 xl:gap-4">
            <Wordmark tone={solid ? "dark" : "light"} compact={scrolled} />
            <nav className="hidden lg:flex items-center gap-0">
              {NAV_LINKS.map((link) => (
                <SmartLink
                  key={link.href}
                  href={link.href}
                  className={`whitespace-nowrap px-[3px] xl:px-1.5 2xl:px-2 py-2 rounded-full text-[0.84rem] xl:text-[0.92rem] 2xl:text-[0.98rem] font-medium transition-colors duration-200 ${solid ? "text-[var(--color-ink)] hover:text-[var(--color-turquoise-deep)] hover:bg-[var(--color-cyan-pale)]" : "text-white/90 hover:text-white hover:bg-white/12"}`}
                >
                  {link.label}
                </SmartLink>
              ))}
            </nav>
            <div className="flex items-center gap-1.5 sm:gap-2.5">
              <a
                href={LINKS.intake}
                target="_blank"
                rel="noreferrer"
                className={`hidden sm:inline-flex lg:hidden 2xl:inline-flex sms-btn whitespace-nowrap !px-5 !py-2.5 !text-[1.02rem] ${solid ? "sms-btn-solid" : "sms-btn-ghost"}`}
              >
                Join Us
              </a>
              <a
                href={LINKS.donate}
                target="_blank"
                rel="noreferrer"
                className="sms-btn sms-btn-primary whitespace-nowrap !px-4 !py-2 !text-[0.95rem] sm:!px-5 sm:!py-2.5 sm:!text-[1.02rem]"
              >
                Donate
              </a>
              <button
                type="button"
                onClick={() => setMenuOpen((open) => !open)}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                className={`lg:hidden p-2 sm:p-2.5 rounded-full transition-colors ${solid ? "text-[var(--color-pacific)] hover:bg-[var(--color-cyan-pale)]" : "text-white hover:bg-white/15"}`}
              >
                {menuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
          {menuOpen && (
            <div className="lg:hidden bg-white border-t border-[var(--color-cyan-pale)] shadow-lg">
              <nav className="container py-3 flex flex-col">
                {NAV_LINKS.map((link) => (
                  <SmartLink
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="py-3 text-[1.02rem] font-medium text-[var(--color-ink)] border-b border-[var(--color-sand-deep)] last:border-0"
                  >
                    {link.label}
                  </SmartLink>
                ))}
                <a
                  href={LINKS.login}
                  target="_blank"
                  rel="noreferrer"
                  className="py-3 text-[1.02rem] font-medium text-[var(--color-turquoise-deep)]"
                >
                  Member Login
                </a>
              </nav>
            </div>
          )}
        </header>
      )}
    </>
  );
}
