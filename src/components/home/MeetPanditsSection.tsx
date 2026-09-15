"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ShieldCheck, ArrowRight, Phone } from "lucide-react";
import { useLanguage } from "@/components/common/LanguageContext";
import { PANDITS_DATA } from "@/data/pandits";
import { SacredDivider } from "@/components/common/MotifDividers";
import { TalkToPanditModal } from "@/components/common/TalkToPanditModal";

export function MeetPanditsSection() {
  const { language } = useLanguage();
  const [panditModalOpen, setPanditModalOpen] = useState(false);

  return (
    <section className="py-16 lg:py-24 bg-white border-b border-[#E8E2D5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest text-[#9C7A3C] font-semibold block mb-2">
            {language === "hi" ? "प्रामाणिक गयावाल परंपरा" : "Authentic Lineage & Trust"}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#241812] tracking-tight">
            {language === "hi" ? "हमारे प्रमाणित तीर्थ पुरोहित" : "Our Verified Teerth Pandits"}
          </h2>
          <p className="text-xs sm:text-sm text-[#7A6F67] mt-3">
            {language === "hi"
              ? "विष्णुपद गर्भगृह एवं फल्गु तीर्थ से जुड़े विद्वान एवं अनुभवी पुरोहित, जो पीढ़ियों से इस पावन सेवा में समर्पित हैं।"
              : "Generational scholars dedicated to conducting sacred ancestral rites at Vishnupad Sanctum and Falgu Ghats."}
          </p>
          <SacredDivider className="my-5" />
        </div>

        {/* Pandits Grid: Horizontal Scroll on Mobile (Apple HIG), 3-Col Grid on Desktop */}
        <div className="flex md:grid md:grid-cols-3 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory gap-4 sm:gap-8 pb-4 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 no-scrollbar mb-10 sm:mb-12 text-left">
          {PANDITS_DATA.map((pandit) => (
            <div
              key={pandit.id}
              className="w-[82vw] sm:w-[320px] md:w-auto flex-shrink-0 snap-start flex flex-col bg-[#FAF8F5] rounded-2xl sm:rounded-3xl border border-[#E8E2D5] overflow-hidden shadow-xs hover:shadow-md hover:border-[#9C7A3C]/60 transition-all group"
            >
              {/* Photo */}
              <div className="relative h-52 sm:h-60 bg-[#241812] overflow-hidden">
                <img
                  src={pandit.image}
                  alt={pandit.name}
                  className="w-full h-full object-cover object-top opacity-95 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#241812]/90 via-transparent to-transparent" />
                
                <div className="absolute bottom-3 left-3 text-white">
                  <span className="text-xs font-bold text-[#DFC07C]">
                    {pandit.experienceYears}+ {language === "hi" ? "वर्षों का अनुभव" : "Years Vedic Experience"}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-5 sm:p-6 flex flex-col flex-grow">
                <h3 className="font-serif text-lg sm:text-xl font-bold text-[#241812]">
                  {pandit.name}
                </h3>
                <p className="text-xs font-semibold text-[#B85014] mt-0.5 mb-3">
                  {pandit.title}
                </p>

                <div className="space-y-1.5 sm:space-y-2 text-xs text-[#5C4D44] mb-4 flex-grow">
                  <div>
                    <strong className="text-[#241812]">{language === "hi" ? "परंपरा:" : "Lineage:"}</strong> {pandit.lineage}
                  </div>
                  <div>
                    <strong className="text-[#241812]">{language === "hi" ? "भाषाएं:" : "Languages:"}</strong> {pandit.languages.join(", ")}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-3.5 sm:pt-4 border-t border-[#E8E2D5] flex items-center justify-between">
                  <Link
                    href={`/pandits/${pandit.slug}`}
                    className="text-xs font-bold text-[#241812] hover:text-[#B85014] flex items-center gap-1 transition-colors"
                  >
                    <span>{language === "hi" ? "परिचय देखें" : "View Profile"}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <button
                    onClick={() => setPanditModalOpen(true)}
                    className="text-xs font-bold text-[#B85014] hover:underline"
                  >
                    {language === "hi" ? "बात करें" : "Talk to Pandit"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Swipe Hint */}
        <div className="flex items-center justify-center gap-1.5 text-center text-[11px] text-[#9C7A3C] mb-8 md:hidden">
          <span>←</span>
          <span>{language === "hi" ? "सभी पुरोहित देखने हेतु स्वाइप करें" : "Swipe to see all Pandits"}</span>
          <span>→</span>
        </div>

        {/* Link to all Pandits */}
        <div className="text-center">
          <Link
            href="/pandits"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#F4EFE6] border border-[#E8E2D5] text-[#241812] text-xs font-semibold uppercase tracking-wider hover:bg-[#FAF8F5] transition-all"
          >
            <span>{language === "hi" ? "सभी प्रमाणित तीर्थ पुरोहित देखें" : "View All Verified Teerth Pandits"}</span>
            <ArrowRight className="w-4 h-4 text-[#B85014]" />
          </Link>
        </div>

      </div>

      <TalkToPanditModal
        isOpen={panditModalOpen}
        onClose={() => setPanditModalOpen(false)}
      />
    </section>
  );
}
