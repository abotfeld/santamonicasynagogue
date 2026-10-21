import { Mail } from "lucide-react";
import { MAILING_LIST_HREF } from "../content/pages";

// "Sign Up For The Mailing List!" band shown above the footer on inner pages.
// The button opens a pre-written email to the office, as on the old site.
export function MailingListBand() {
  return (
    <section className="relative bg-[var(--color-sand)] pb-16 md:pb-20">
      <div className="container">
        <div className="sms-reveal sms-glass-card rounded-[1.5rem] px-7 py-8 md:px-12 md:py-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[1.2rem] bg-[var(--color-cyan-pale)] text-[var(--color-ocean)] ring-1 ring-[var(--color-turquoise)]/30">
              <Mail className="h-8 w-8" strokeWidth={1.75} />
            </span>
            <div>
              <h2 className="font-[family-name:var(--font-display)] text-[1.6rem] md:text-[2rem] font-semibold text-[var(--color-pacific)] leading-[1.15]">
                Stay in the loop
              </h2>
              <p className="text-[1.1rem] text-[var(--color-ink)]/75 mt-1">
                Services, classes, celebrations and everything in between.
              </p>
            </div>
          </div>
          <a
            href={MAILING_LIST_HREF}
            className="sms-btn sms-btn-primary !px-7 !py-4 !text-[1.04rem] shrink-0"
          >
            Sign Up For The Mailing List!
          </a>
        </div>
      </div>
    </section>
  );
}
