import { ArrowRight, Mail, MapPin, Phone, Quote, UserRound } from "lucide-react";
import { PageLayout } from "../components/PageLayout";
import { ScrollMark } from "../components/ScrollMark";
import { WaveDivider } from "../components/WaveDivider";
import { JOIN_TESTIMONIALS, PAGE_PHOTOS } from "../content/pages";
import { CONTACT, LINKS, asset } from "../content/site";

// Contact page. Same wording and links as thesms.org/contact-us.
const SHIRA_RON = asset("photos/sms-shira-ron.jpg");

const linkClass =
  "text-[var(--color-turquoise-deep)] font-semibold underline underline-offset-4 decoration-[var(--color-turquoise)]/50 hover:decoration-[var(--color-turquoise-deep)]";

export function ContactPage() {
  const ways = [
    {
      icon: UserRound,
      label: "Membership questions",
      title: `Email ${CONTACT.membershipContact}`,
      value: CONTACT.membershipEmail,
      href: `mailto:${CONTACT.membershipEmail}`,
    },
    {
      icon: Phone,
      label: "Call the office",
      title: CONTACT.phone,
      value: "The Santa Monica Synagogue office",
      href: CONTACT.phoneHref,
    },
    {
      icon: Mail,
      label: "Email the office",
      title: CONTACT.email,
      value: "For anything else",
      href: `mailto:${CONTACT.email}`,
    },
  ];

  return (
    <PageLayout>
      {/* Light opening: words on the left, Rabbi Shira and Ron on the right */}
      <section className="relative overflow-hidden bg-[var(--color-sand)]">
        <div
          aria-hidden
          className="absolute -top-40 -right-24 h-[34rem] w-[34rem] rounded-full opacity-45 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, var(--color-cyan-pale), transparent 70%)",
          }}
        />
        <ScrollMark
          className="sms-watermark -left-36 top-[6%] h-[30rem] w-[30rem] hidden lg:block text-[var(--color-pacific)]/[0.05]"
          stroke="currentColor"
        />
        <div className="container relative pt-14 pb-16 md:pt-20 md:pb-20 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 items-center [&>*]:min-w-0">
          <div className="sms-reveal max-w-2xl">
            <p className="sms-eyebrow mb-4">Contact</p>
            <h1 className="text-[var(--color-pacific)] font-semibold text-[2.6rem] sm:text-[3.2rem] lg:text-[3.7rem] leading-[1.04] mb-7">
              Contact <span className="sms-swash">Us</span>
            </h1>
            <div className="text-[var(--color-ink)]/80 text-[1.2rem] md:text-[1.28rem] leading-[1.66] space-y-4">
              <p>
                If you have a question or are interested in membership we'd
                love to hear from you!
              </p>
              <p>
                Drop {CONTACT.membershipContact} an{" "}
                <a href={`mailto:${CONTACT.membershipEmail}`} className={linkClass}>
                  email
                </a>{" "}
                at {CONTACT.membershipEmail} or call the office at{" "}
                <a href={CONTACT.phoneHref} className={linkClass}>
                  {CONTACT.phone}
                </a>
                .
              </p>
            </div>
            {/* These two buttons go to the ShulCloud forms. Keep the links as they are. */}
            <div className="flex flex-wrap gap-3.5 pt-8">
              <a
                href={LINKS.join}
                target="_blank"
                rel="noreferrer"
                className="sms-btn sms-btn-primary !text-[1.06rem] !px-7 !py-4"
              >
                Join Now
                <ArrowRight className="h-4.5 w-4.5" />
              </a>
              <a
                href={LINKS.newMemberIntake}
                target="_blank"
                rel="noreferrer"
                className="sms-btn sms-btn-solid !text-[1.06rem] !px-7 !py-4"
              >
                New Member Intake Form
              </a>
            </div>
          </div>
          <div className="sms-reveal relative mx-auto w-full max-w-[34rem]" data-reveal-delay="100">
            <div
              aria-hidden
              className="absolute -inset-4 rounded-[2.2rem] bg-[var(--color-turquoise)]/15 rotate-[2.5deg]"
            />
            <figure className="relative rounded-[1.8rem] bg-white p-3 shadow-[0_30px_60px_-30px_rgba(11,58,91,0.45)] -rotate-[1.2deg]">
              <img
                src={SHIRA_RON}
                alt="Rabbi Shira and VP of Membership Ron Kalbrosky, smiling outside the synagogue"
                className="w-full aspect-[4/3] object-cover rounded-[1.35rem]"
              />
              <figcaption className="px-3 pt-4 pb-2 text-center font-[family-name:var(--font-display)] text-[var(--color-pacific)] text-[1.15rem] md:text-[1.22rem]">
                Rabbi Shira and VP of Membership, {CONTACT.membershipContact}
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Ways to reach us */}
      <section className="relative bg-white py-16 md:py-20">
        <div className="container">
          <div className="grid gap-5 md:grid-cols-3">
            {ways.map((way, index) => {
              const Icon = way.icon;
              return (
                <a
                  key={way.label}
                  href={way.href}
                  className="sms-reveal group relative rounded-[1.5rem] border border-[var(--color-cyan-pale)] bg-[var(--color-sand)] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-turquoise)]/60 hover:shadow-[0_22px_44px_-28px_rgba(11,58,91,0.5)] min-w-0"
                  data-reveal-delay={index * 80}
                >
                  <span className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-[var(--color-pacific)] text-[var(--color-turquoise)] transition-colors group-hover:bg-[var(--color-turquoise-deep)] group-hover:text-white">
                    <Icon className="h-5.5 w-5.5" />
                  </span>
                  <p className="text-[0.86rem] font-bold uppercase tracking-[0.14em] text-[var(--color-turquoise-deep)] mb-1.5">
                    {way.label}
                  </p>
                  <p className="font-[family-name:var(--font-display)] text-[var(--color-pacific)] text-[1.38rem] leading-snug break-words mb-1">
                    {way.title}
                  </p>
                  <p className="text-[var(--color-ink)]/65 text-[1.02rem] break-words">
                    {way.value}
                  </p>
                  <ArrowRight className="absolute right-6 top-7 h-5 w-5 text-[var(--color-pacific)]/30 transition-all group-hover:translate-x-1 group-hover:text-[var(--color-turquoise-deep)]" />
                </a>
              );
            })}
          </div>

          {/* Visit */}
          <div className="mt-6 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] items-stretch [&>*]:min-w-0">
            <div className="sms-reveal rounded-[1.5rem] bg-[var(--color-pacific)] sms-grain text-white p-8 md:p-10 flex flex-col">
              <span className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-white/10 text-[var(--color-turquoise)]">
                <MapPin className="h-5.5 w-5.5" />
              </span>
              <p className="text-[0.86rem] font-bold uppercase tracking-[0.14em] text-[var(--color-cyan-light)] mb-2">
                Visit us
              </p>
              <p className="font-[family-name:var(--font-display)] text-[1.7rem] leading-tight mb-3">
                The Santa Monica Synagogue
              </p>
              <p className="text-white/85 text-[1.14rem] leading-relaxed">
                {CONTACT.street}
                <br />
                {CONTACT.cityStateZip}
              </p>
              <p className="text-white/65 text-[1.04rem] leading-relaxed mt-2">
                (Near Fromin's Deli on 18th Street &amp; Wilshire Blvd)
              </p>
              <div className="mt-6 space-y-1.5 text-[1.08rem]">
                <p>
                  Phone:{" "}
                  <a href={CONTACT.phoneHref} className="text-[var(--color-cyan-light)] hover:text-white">
                    {CONTACT.phone}
                  </a>
                </p>
                <p>
                  Email:{" "}
                  <a href={`mailto:${CONTACT.email}`} className="text-[var(--color-cyan-light)] hover:text-white">
                    {CONTACT.email}
                  </a>
                </p>
              </div>
              <a
                href={CONTACT.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="sms-btn sms-btn-primary mt-auto self-start !mt-8"
              >
                Get directions
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <figure
              className="sms-reveal sms-tile rounded-[1.5rem] overflow-hidden bg-[var(--color-sand)] border border-[var(--color-cyan-pale)] flex flex-col"
              data-reveal-delay="80"
            >
              <img
                src={PAGE_PHOTOS.parkingMap}
                alt="Map showing parking for the synagogue at 1223 18th St (the old pharmacy parking lot), just up the street from 1260 18th St"
                className="w-full flex-1 object-cover"
                loading="lazy"
              />
              <figcaption className="px-7 py-5">
                <p className="font-semibold text-[var(--color-pacific)] text-[1.1rem] mb-1">
                  Parking
                </p>
                <p className="text-[1.04rem] text-[var(--color-ink)]/75 leading-relaxed">
                  Park at 1223 18th St (the old pharmacy parking lot), just up
                  the street from the synagogue.
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative bg-[var(--color-sand)] pt-6 pb-20 md:pb-24">
        <div className="relative z-10 -mt-px">
          <WaveDivider color="white" position="top" height={56} />
        </div>
        <div className="container pt-10">
          <div className="sms-reveal text-center mb-10">
            <p className="sms-eyebrow mb-3">Testimonials</p>
            <h2 className="sms-h2 text-[var(--color-pacific)]">
              Why our members love it here
            </h2>
          </div>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [&>*]:mb-5">
            {JOIN_TESTIMONIALS.map((testimonial, index) => (
              <figure
                key={testimonial.who + index}
                className="sms-reveal break-inside-avoid rounded-[1.35rem] bg-white border border-[var(--color-cyan-pale)] p-7 shadow-[0_18px_40px_-32px_rgba(11,58,91,0.55)]"
                data-reveal-delay={(index % 3) * 70}
              >
                <Quote className="h-6 w-6 text-[var(--color-turquoise)] mb-3" />
                <blockquote className="font-[family-name:var(--font-display)] text-[var(--color-pacific)] text-[1.2rem] md:text-[1.28rem] leading-[1.46] mb-4">
                  "{testimonial.quote}"
                </blockquote>
                <figcaption className="text-[var(--color-turquoise-deep)] text-[0.95rem] font-semibold tracking-wider uppercase">
                  -- {testimonial.who}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
