import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustStrip } from "@/components/home/TrustStrip";
import { ChooseRitualSection } from "@/components/home/ChooseRitualSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { WhatIsIncludedSection } from "@/components/home/WhatIsIncludedSection";
import { MeetPanditsSection } from "@/components/home/MeetPanditsSection";
import { GayaJiIntroSection } from "@/components/home/GayaJiIntroSection";
import { GayaJiGuidePreview } from "@/components/home/GayaJiGuidePreview";
import { FAQSection } from "@/components/home/FAQSection";
import { FinalCTASection } from "@/components/home/FinalCTASection";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 02 Hero */}
      <HeroSection />

      {/* 03 Trust Strip */}
      <TrustStrip />

      {/* 04 Choose Your Ritual */}
      <ChooseRitualSection />

      {/* 05 How It Works */}
      <HowItWorksSection />

      {/* 06 What's Included */}
      <WhatIsIncludedSection />

      {/* 07 Meet Our Pandits */}
      <MeetPanditsSection />

      {/* 08 Gaya Ji Sacred Shrines */}
      <GayaJiIntroSection />

      {/* 09 Plan Your Visit Guide Preview */}
      <GayaJiGuidePreview />

      {/* 10 Frequently Asked Questions */}
      <FAQSection />

      {/* 11 Final Call to Action */}
      <FinalCTASection />
    </div>
  );
}
