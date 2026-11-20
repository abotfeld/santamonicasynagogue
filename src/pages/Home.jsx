import { useEffect } from "react";
import { jumpTo } from "../lib/jumpTo";
import { BackToTop } from "../components/BackToTop";
import { Footer } from "../components/Footer";
import { ReviewSwitcher } from "../components/ReviewSwitcher";
import { StickyJoinBar } from "../components/StickyJoinBar";
import { TopBar } from "../components/TopBar";
import { isEmbedded, useEmbedBridge } from "../lib/embed";
import { useScrollReveal } from "../lib/useScrollReveal";
import { Donate } from "../sections/Donate";
import { Explore } from "../sections/Explore";
import { Faq } from "../sections/Faq";
import { FeaturedEvent } from "../sections/FeaturedEvent";
import { HeroCollage } from "../sections/HeroCollage";
import { ShabbatBand } from "../sections/ShabbatBand";
import { SpecialVideo } from "../sections/SpecialVideo";
import { Testimonials } from "../sections/Testimonials";

export function Home() {
  // Start at the top when arriving from another page.
  useEffect(() => {
    jumpTo(0);
  }, []);
  useScrollReveal();
  useEmbedBridge();
  const embedded = isEmbedded();
  return (
    <div className="min-h-screen bg-[var(--color-sand)]">
      <span id="page-top" aria-hidden className="block h-0" />
      <TopBar
        overHero={false}
        showNav
        variantSwitcher={embedded ? undefined : <ReviewSwitcher />}
      />
      <main>
        {/* Shorter homepage (Nov 2026): welcome → this week → featured
            event → photo links (same names as the menu) → visiting FAQ →
            our people video → members' words → giving.
            Sections no longer here (Doors, Rabbi, About, LearningAndCommunity,
            Events, HolocaustTorah, Softball, WineClub, Generations) are still
            in src/sections; their content lives on the menu pages.
            Seasonal High Holy Days and Tashlich: add <HighHolyDays /> and
            <Tashlich /> after <FeaturedEvent />. */}
        <HeroCollage />
        <ShabbatBand />
        <FeaturedEvent />
        <Explore />
        <Faq />
        <BackToTop />
        <SpecialVideo />
        <Testimonials />
        <BackToTop />
        <Donate />
        <BackToTop />
      </main>
      <Footer />
      <StickyJoinBar />
    </div>
  );
}
