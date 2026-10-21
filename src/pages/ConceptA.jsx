import { Footer } from "../components/Footer";
import { ReviewSwitcher } from "../components/ReviewSwitcher";
import { TopBar } from "../components/TopBar";
import { isEmbedded, useEmbedBridge } from "../lib/embed";
import { useScrollReveal } from "../lib/useScrollReveal";
import { About } from "../sections/About";
import { Doors } from "../sections/Doors";
import { Events } from "../sections/Events";
import { Faq } from "../sections/Faq";
import { HeroVideo } from "../sections/HeroVideo";
import { HighHolyDays } from "../sections/HighHolyDays";
import { HolocaustTorah } from "../sections/HolocaustTorah";
import { LearningAndCommunity } from "../sections/LearningAndCommunity";
import { Rabbi } from "../sections/Rabbi";
import { ShabbatBand } from "../sections/ShabbatBand";
import { Softball } from "../sections/Softball";
import { Tashlich } from "../sections/Tashlich";
import { Testimonials } from "../sections/Testimonials";
import { WineClub } from "../sections/WineClub";

export function ConceptA() {
  useScrollReveal();
  useEmbedBridge();
  return (
    <div className="min-h-screen bg-[var(--color-sand)]">
      <TopBar
        overHero
        variantSwitcher={isEmbedded() ? undefined : <ReviewSwitcher />}
      />
      <main>
        <HeroVideo />
        <ShabbatBand />
        <HighHolyDays />
        <Tashlich />
        <Softball />
        <WineClub />
        <Faq />
        <About />
        <Rabbi />
        <Events />
        <LearningAndCommunity />
        <Testimonials />
        <HolocaustTorah />
        <Doors />
      </main>
      <Footer />
    </div>
  );
}
