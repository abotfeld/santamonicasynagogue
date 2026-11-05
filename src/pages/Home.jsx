import { useEffect } from "react";
import { jumpTo } from "../lib/jumpTo";
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
import { FeaturedEvent } from "../sections/FeaturedEvent";
import { Generations } from "../sections/Generations";
import { HeroCollage } from "../sections/HeroCollage";
import { HolocaustTorah } from "../sections/HolocaustTorah";
import { LearningAndCommunity } from "../sections/LearningAndCommunity";
import { Rabbi } from "../sections/Rabbi";
import { ShabbatBand } from "../sections/ShabbatBand";
import { Softball } from "../sections/Softball";
import { SpecialVideo } from "../sections/SpecialVideo";
import { Testimonials } from "../sections/Testimonials";
import { WineClub } from "../sections/WineClub";

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
      <TopBar
        overHero={false}
        showNav
        variantSwitcher={embedded ? undefined : <ReviewSwitcher />}
      />
      <main>
        {/* Order: welcome → this week → featured upcoming event → ways in →
            visiting → who we are → learning & community → joining →
            calendar → our Torah → clubs → giving.
            Seasonal High Holy Days and Tashlich sections are off the
            homepage outside the season; bring them back by adding
            <HighHolyDays /> and <Tashlich /> (src/sections) after <Events />. */}
        <HeroCollage />
        <ShabbatBand />
        <FeaturedEvent />
        <Doors />
        <Faq />
        <SpecialVideo />
        <About />
        <Rabbi />
        <LearningAndCommunity />
        <Testimonials />
        <Events />
        <HolocaustTorah />
        <Softball />
        <WineClub />
        <Generations />
        <Donate />
      </main>
      <Footer />
      <StickyJoinBar />
    </div>
  );
}
