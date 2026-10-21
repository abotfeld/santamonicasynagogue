import {
  ArrowRight,
  BookOpen,
  HeartHandshake,
  Sparkles,
  Users,
} from "lucide-react";
import { ScrollMark } from "../components/ScrollMark";
import { WaveDivider } from "../components/WaveDivider";
import { DOORS } from "../content/site";

const DOOR_ICONS = {
  worship: Sparkles,
  learning: BookOpen,
  community: Users,
  give: HeartHandshake,
};
export function Doors() {
  return (
    <>
      <section className="relative bg-white pt-14 pb-20 md:pt-16 md:pb-24 overflow-hidden">
        <ScrollMark
          className="sms-watermark -right-28 top-8 h-[30rem] w-[30rem] hidden md:block"
          stroke="currentColor"
        />
        <div className="container relative">
          <div className="max-w-2xl mb-12 sms-reveal">
            <p className="sms-eyebrow mb-3">You are welcome here</p>
            <h2 className="sms-h2 text-[var(--color-pacific)]">
              However you arrive,{" "}
              <span className="sms-swash">there's a door.</span>
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:items-start">
            {DOORS.map((door, index) => {
              const Icon = DOOR_ICONS[door.key];
              const external = door.href.startsWith("http");
              const offsets = ["lg:mt-0", "lg:mt-10", "lg:mt-3", "lg:mt-14"];
              return (
                <a
                  key={door.key}
                  href={door.href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noreferrer" : undefined}
                  className={`sms-reveal sms-lift sms-glass-card group flex flex-col rounded-[1.35rem] p-7 overflow-hidden ${offsets[index]}`}
                  data-reveal-delay={index * 70}
                >
                  <div className="flex items-start justify-between mb-5">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-cyan-pale)] text-[var(--color-ocean)] group-hover:bg-[var(--color-turquoise)] group-hover:text-white transition-colors duration-300">
                      <Icon className="h-6 w-6" />
                    </span>
                    <span className="sms-hebrew text-[1.35rem] text-[var(--color-turquoise)]/55">
                      {door.hebrew}
                    </span>
                  </div>
                  <h3 className="text-[1.5rem] font-semibold text-[var(--color-pacific)] mb-2.5">
                    {door.title}
                  </h3>
                  <p className="text-[1.1rem] text-[var(--color-slate-blue)] leading-relaxed flex-1">
                    {door.blurb}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-[1.02rem] font-semibold text-[var(--color-turquoise-deep)]">
                    {door.cta}
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>
      <div className="relative z-10 -mb-px bg-white">
        <WaveDivider color="var(--color-sand)" position="bottom" height={76} />
      </div>
    </>
  );
}
