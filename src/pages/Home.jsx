import { useEffect } from "react";
import { Footer } from "../components/Footer";
import { ReviewSwitcher } from "../components/ReviewSwitcher";
import { StickyJoinBar } from "../components/StickyJoinBar";
import { TopBar } from "../components/TopBar";
import { isEmbedded, useEmbedBridge } from "../lib/embed";
import { useScrollReveal } from "../lib/useScrollReveal";
import { About } from "../sections/About";
import { Donate } from "../sections/Donate";
import { Doors } from "../sections/Doors";
import { Events } from "../sections/Events";
import { Faq } from "../sections/Faq";
import { HeroCollage } from "../sections/HeroCollage";
import { HighHolyDays } from "../sections/HighHolyDays";
import { HolocaustTorah } from "../sections/HolocaustTorah";
import { LearningAndCommunity } from "../sections/LearningAndCommunity";
import { Rabbi } from "../sections/Rabbi";
import { ShabbatBand } from "../sections/ShabbatBand";
import { Softball } from "../sections/Softball";
import { SpecialVideo } from "../sections/SpecialVideo";
import { Tashlich } from "../sections/Tashlich";
import { Testimonials } from "../sections/Testimonials";
import { WineClub } from "../sections/WineClub";

export function Home() {
  // Start at the top when arriving from another page.
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);
  useScrollReveal();
  useEmbedBridge();
  const embedded = isEmbedded();
  return (
    <div className="min-h-screen bg-[var(--color-sand)]">
      <TopBar
        overHero={false}
        showNav
        variantSwitcher={embedded ? undefined : <ReviewSwitcher />}
      />
      <main>
        {/* Order: welcome → this week → ways in → visiting → who we are →
            learning & community → joining → calendar → seasonal (High Holy
            Days, Tashlich) → clubs → our Torah → giving */}
        <HeroCollage />
        <ShabbatBand />
        <Doors />
        <Faq />
        <SpecialVideo />
        <About />
        <Rabbi />
        <LearningAndCommunity />
        <Testimonials />
        <Events />
        <HighHolyDays />
        <Tashlich />
        <Softball />
        <WineClub />
        <HolocaustTorah />
        <Donate />
      </main>
      <Footer />
      <StickyJoinBar />
    </div>
  );
}
