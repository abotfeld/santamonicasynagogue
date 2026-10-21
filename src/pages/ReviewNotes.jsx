import { ArrowRight, Check, CirclePlay, LayoutGrid } from "lucide-react";
import { Link } from "wouter";
import { ScrollMark } from "../components/ScrollMark";
import { PHOTOS } from "../content/site";

const PALETTE = [
  {
    name: "Deep Pacific",
    hex: "#0B3A5B",
    note: "Anchor · headers, footers",
  },
  {
    name: "Ocean",
    hex: "#12628F",
    note: "Mid blue · fills, buttons",
  },
  {
    name: "Turquoise",
    hex: "#1FBFC4",
    note: "Signature · CTAs, swash",
  },
  {
    name: "Bright Cyan",
    hex: "#7FE0E8",
    note: "Light · glows, hairlines",
  },
  {
    name: "Sunset Coral",
    hex: "#F2A950",
    note: "Warm accent · used sparingly",
  },
  {
    name: "Shell Sand",
    hex: "#F7F3EC",
    note: "Ground · section backgrounds",
  },
];

export function ReviewNotes() {
  return (
    <div className="min-h-screen bg-[var(--color-pacific-deep)] sms-grain relative overflow-hidden">
      <div
        aria-hidden
        className="absolute -top-40 left-1/3 h-[38rem] w-[38rem] rounded-full opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--color-turquoise), transparent 68%)",
        }}
      />

      <div className="container relative py-16 md:py-20">
        <div className="flex items-center gap-3 mb-14">
          <ScrollMark className="h-11 w-11" stroke="#7FE0E8" />
          <div>
            <p className="font-[family-name:var(--font-display)] text-white text-[1.15rem] font-semibold leading-tight">
              The Santa Monica Synagogue
            </p>
            <p className="text-[var(--color-cyan-light)] text-[0.62rem] font-semibold tracking-[0.24em] uppercase mt-0.5">
              Internal review notes · Not a public page
            </p>
          </div>
        </div>
        <div className="max-w-3xl mb-14">
          <p className="sms-eyebrow sms-eyebrow-light mb-4">Direction chosen</p>
          <h1 className="text-white text-[2.5rem] md:text-[3.5rem] font-semibold leading-[1.05] mb-6">
            Concept B,{" "}
            <span className="sms-swash sms-swash-bright">
              now with real media.
            </span>
          </h1>
          <p className="text-white/72 text-[1.1rem] leading-relaxed mb-4">
            The Coastal Collage direction is the approved one, and it now runs
            on the congregation's own photography and all three vertical videos.
            Mosaic tiles lift, brighten and catch a cyan sheen on hover, and the
            Sunset Coral accent has been promoted into a real conversion button
            reserved for High Holy Days, event registration, and giving.
          </p>
          <p className="text-white/72 text-[1.1rem] leading-relaxed mb-4">
            Two new sections came out of your material: the{" "}
            <strong className="text-white font-semibold">
              Hebrew Nationals
            </strong>{" "}
            championship story with the real team photo, and{" "}
            <strong className="text-white font-semibold">Sangria Fest</strong>{" "}
            from the L'Chaim Wine Club. Concept A stays live for reference.
          </p>
          <p className="text-white/50 text-[0.95rem] leading-relaxed">
            This page is internal. The public front door is now the approved
            homepage itself.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2 mb-20">
          {[
            {
              to: "/concept-a",
              tag: "Concept A",
              name: "Vertical Story",
              icon: CirclePlay,
              img: PHOTOS.beachGroup,
              blurb:
                "Reference only. The 37-second 'What makes SMS special?' clip sits in its own portrait column with a turquoise glow ring, autoplaying muted and looping. Kept live so you can compare the two openings directly.",
              points: [
                "Motion pulls the eye immediately",
                "Video is framed intentionally, never cropped",
                "Strongest possible mobile presentation",
                "Not the chosen direction",
              ],
            },
            {
              to: "/concept-b",
              tag: "Concept B · Approved",
              name: "Coastal Collage",
              icon: LayoutGrid,
              img: PHOTOS.sangriaGroup,
              blurb:
                "A staggered mosaic of real congregation photos drifting on light scroll parallax, with a translucent sea-glass headline panel overlapping its left edge. Faces first. All three vertical videos appear further down the page, each where it does the most work.",
              points: [
                "Real faces and warmth in the first second",
                "Tiles lift, brighten and sheen on hover",
                "Hebrew Nationals + Sangria Fest sections",
                "Sunset Coral CTAs for High Holy Days and giving",
              ],
            },
          ].map((concept) => (
            <Link
              key={concept.to}
              href={concept.to}
              className="group sms-lift rounded-[1.8rem] overflow-hidden sms-seaglass-dark flex flex-col"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={concept.img}
                  alt=""
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />

                <div
                  aria-hidden
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(6,32,52,0.95), rgba(6,32,52,0.25))",
                  }}
                />

                <div className="absolute bottom-5 left-6 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-turquoise)] text-[var(--color-pacific-deep)]">
                    <concept.icon className="h-5.5 w-5.5" />
                  </span>
                  <div>
                    <p className="text-[var(--color-cyan-light)] text-[0.68rem] font-bold uppercase tracking-[0.2em]">
                      {concept.tag}
                    </p>
                    <p className="font-[family-name:var(--font-display)] text-white text-[1.65rem] font-semibold leading-tight">
                      {concept.name}
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-7 flex flex-col flex-1">
                <p className="text-white/74 text-[1rem] leading-relaxed mb-6">
                  {concept.blurb}
                </p>
                <ul className="space-y-2.5 mb-7 flex-1">
                  {concept.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-2.5 text-white/62 text-[0.94rem]"
                    >
                      <Check className="h-4 w-4 mt-1 shrink-0 text-[var(--color-turquoise)]" />
                      {point}
                    </li>
                  ))}
                </ul>
                <span className="sms-btn sms-btn-primary w-full">
                  {"Open "}
                  {concept.tag}
                  <ArrowRight className="h-4.5 w-4.5 transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
        <div className="mb-16">
          <div className="mb-16 rounded-[1.8rem] sms-seaglass-dark p-8 md:p-10">
            <p className="sms-eyebrow sms-eyebrow-light mb-4">
              Where your three videos live
            </p>
            <h2 className="text-white text-[1.9rem] md:text-[2.3rem] font-semibold mb-7">
              One clip per job, not one clip everywhere
            </h2>
            <div className="grid gap-5 md:grid-cols-3">
              {[
                {
                  n: "01",
                  t: "What makes SMS special?",
                  d: "37s",
                  where: "Mid-page story module",
                  why: "The identity piece — congregants answering in their own words. Autoplays muted and gets the largest frame on the page.",
                },
                {
                  n: "02",
                  t: "Need a place for the High Holy Days?",
                  d: "15s",
                  where: "High Holy Days band",
                  why: "A pure seasonal ask, so it sits directly beside the pulsing Sunset Coral 'Reserve seats' button.",
                },
                {
                  n: "03",
                  t: "Members read their reviews",
                  d: "16s",
                  where: "Testimonials section",
                  why: "The same reviews sit beside it as written quotes, so people can read or watch. Click to play, no autoplay.",
                },
              ].map((clip) => (
                <div key={clip.n} className="border-t border-white/15 pt-5">
                  <p className="font-[family-name:var(--font-display)] text-[var(--color-turquoise)] text-[1.5rem] font-semibold leading-none mb-2.5">
                    {clip.n}
                  </p>
                  <p className="text-white font-semibold text-[1.05rem] leading-snug mb-1">
                    {clip.t}
                  </p>
                  <p className="text-[var(--color-cyan-light)] text-[0.78rem] font-semibold tracking-wider uppercase mb-3">
                    {clip.d}
                    {" · "}
                    {clip.where}
                  </p>
                  <p className="text-white/58 text-[0.94rem] leading-relaxed">
                    {clip.why}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-white/45 text-[0.88rem] mt-7 leading-relaxed">
              All three already have captions burned in, so no separate caption
              layer was added. Each starts muted with a clearly labelled "Sound
              off" toggle, because they carry real audio and nobody should be
              ambushed by it.
            </p>
          </div>
          <p className="sms-eyebrow sms-eyebrow-light mb-4">Proposed palette</p>
          <h2 className="text-white text-[1.9rem] md:text-[2.4rem] font-semibold mb-3">
            Pacific blue, turned toward the water
          </h2>
          <p className="text-white/68 text-[1.03rem] leading-relaxed max-w-3xl mb-9">
            Most synagogue sites pair royal blue with burgundy and gold leaf,
            which reads formal and a little heavy. This keeps the traditional
            deep-blue anchor but pushes the mid-tones toward water instead of
            velvet: turquoise as the signature, bright cyan for light, and one
            warm coral accent so there's a sun in the page. Sand replaces white
            as the resting background so nothing feels clinical.
          </p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {PALETTE.map((swatch) => (
              <div
                key={swatch.hex}
                className="flex items-center gap-4 rounded-2xl p-3.5 sms-seaglass-dark"
              >
                <span
                  className="h-14 w-14 rounded-xl shrink-0 border border-white/15"
                  style={{
                    background: swatch.hex,
                  }}
                />

                <div>
                  <p className="text-white font-semibold text-[0.98rem]">
                    {swatch.name}
                  </p>
                  <p className="text-white/50 text-[0.82rem] font-mono">
                    {swatch.hex}
                  </p>
                  <p className="text-white/45 text-[0.78rem] mt-0.5">
                    {swatch.note}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-[1.8rem] sms-seaglass-dark p-8 md:p-10">
          <p className="sms-eyebrow sms-eyebrow-light mb-4">Typography</p>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <p className="font-[family-name:var(--font-display)] text-white text-[2.6rem] font-semibold leading-tight mb-2">
                Fraunces
              </p>
              <p className="text-white/62 text-[0.98rem] leading-relaxed">
                Headings. A soft, optically-sized serif with a little warmth and
                wink to it — friendly rather than institutional, and a clear
                break from the Times-New-Roman register most congregations land
                in.
              </p>
            </div>
            <div>
              <p className="text-white text-[2.6rem] font-semibold leading-tight mb-2">
                Inter
              </p>
              <p className="text-white/62 text-[0.98rem] leading-relaxed">
                Body and interface, set at 17–18px with generous line-height.
                The congregation is multi-generational, so legibility beats
                fashion. Hebrew is set in Frank Ruhl Libre.
              </p>
            </div>
          </div>
        </div>
        <p className="text-white/40 text-[0.85rem] mt-14 max-w-3xl leading-relaxed">
          Note: all three videos, the Hebrew Nationals team photo, the Sangria
          Fest photos and the beach photos are the synagogue's real assets. A
          few supporting images (Shabbat candles, Torah scroll, study table) are
          still AI-generated stand-ins matched to the palette and can be swapped
          as real photography becomes available. All Donate, Join, High Holy
          Days, and Member Login buttons already point at the live thesms.org
          ShulCloud forms.
        </p>
      </div>
    </div>
  );
}
