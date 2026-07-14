import { Hero } from "@/components/sections/hero";
import { MarqueeStrip } from "@/components/sections/marquee-strip";
import { PillarsOverview } from "@/components/sections/pillars-overview";
import { Approach } from "@/components/sections/approach";
import { CtaBand } from "@/components/sections/cta-band";
import { ImageBreak } from "@/components/ui/image-break";

export default function HomePage() {
  return (
    <>
      <Hero />
      <MarqueeStrip />
      <PillarsOverview />
      <ImageBreak
        src="/images/team-collaboration.png"
        alt="A small team collaborating around laptops in a modern studio"
        caption="Three practices, one studio - working from the same table."
      />
      <Approach />
      <CtaBand />
    </>
  );
}
