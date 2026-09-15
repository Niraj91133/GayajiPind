"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Clock, MapPin, ArrowRight, Phone } from "lucide-react";
import { useLanguage } from "@/components/common/LanguageContext";
import { RITUALS_DATA } from "@/data/rituals";
import { TalkToPanditModal } from "@/components/common/TalkToPanditModal";
import { SacredDivider } from "@/components/common/MotifDividers";

export function ChooseRitualSection() {
  const { language } = useLanguage();
  const [panditModalOpen, setPanditModalOpen] = useState(false);

  return (
    <section className="py-16 lg:py-24 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest text-[#9C7A3C] font-semibold block mb-2">
            {language === "hi" ? "शास्त्रोक्त वैदिक अनुष्ठान" : "Sacred Vedic Ceremonies"}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#241812] tracking-tight">
            {language === "hi" ? "आप कौन सा अनुष्ठान कराना चाहते हैं?" : "Choose Your Sacred Ritual"}
          </h2>
          <p className="text-sm text-[#7A6F67] mt-3 leading-relaxed">
            {language === "hi"
              ? "अपने परिवार की कुल परंपरा एवं आवश्यकतानुसार गया जी के पारंपरिक वैदिक अनुष्ठानों में से चुनें।"
              : "Select from traditional Gaya Ji Vedic rituals tailored to your family's ancestral traditions."}
          </p>
          <SacredDivider className="my-5" />
        </div>

        {/* 4 Core Ritual Folios Grid: Horizontal Scroll on Mobile (Apple HIG), 4-Col Grid on Desktop */}
        <div className="flex lg:grid lg:grid-cols-4 overflow-x-auto lg:overflow-x-visible snap-x snap-mandatory gap-4 sm:gap-6 pb-4 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 no-scrollbar mb-10 sm:mb-12">
          {RITUALS_DATA.map((ritual) => (
            <div
              key={ritual.id}
              className="w-[84vw] sm:w-[320px] lg:w-auto flex-shrink-0 snap-start flex flex-col bg-white rounded-2xl border border-[#E8E2D5] overflow-hidden shadow-xs hover:shadow-lg hover:border-[#9C7A3C]/60 transition-all duration-300 group text-left"
            >
              {/* Photo */}
              <div className="relative h-44 sm:h-48 overflow-hidden bg-[#241812]">
                <img
                  src={ritual.image}
                  alt={ritual.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#241812]/95 via-[#241812]/20 to-transparent" />
                
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <span className="text-[10px] sm:text-[11px] font-semibold text-[#DFC07C] uppercase tracking-wider block mb-0.5">
                    {ritual.duration}
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-white">
                    {language === "hi" ? ritual.hindiName : ritual.name}
                  </h3>
                </div>
              </div>

              {/* Body */}
              <div className="p-4 sm:p-5 flex flex-col flex-grow">
                <p className="text-xs text-[#5C4D44] leading-relaxed mb-4 flex-grow">
                  {language === "hi" ? ritual.hindiTagline : ritual.shortDescription}
                </p>

                {/* Key Vedis */}
                <div className="pt-3 border-t border-[#E8E2D5] mb-4">
                  <span className="text-[10px] uppercase tracking-wider font-bold text-[#9C7A3C] block mb-1">
                    {language === "hi" ? "प्रमुख स्थल:" : "Primary Sanctums:"}
                  </span>
                  <p className="text-[11px] text-[#4A3E38] truncate">
                    {ritual.whatHappens.map((w) => w.location).filter(Boolean).slice(0, 2).join(" • ")}
                  </p>
                </div>

                {/* Card Actions */}
                <div className="pt-3 border-t border-[#E8E2D5] flex items-center gap-2">
                  <Link
                    href={`/rituals/${ritual.slug}`}
                    className="flex-1 text-center py-2.5 px-2.5 rounded-xl border border-[#E8E2D5] text-xs font-semibold text-[#241812] hover:bg-[#FAF8F5] transition-all"
                  >
                    {language === "hi" ? "विवरण देखें" : "Details"}
                  </Link>

                  <Link
                    href={`/request-booking?ritual=${ritual.slug}`}
                    className="flex-1 text-center py-2.5 px-2.5 rounded-xl bg-[#241812] hover:bg-[#38261D] text-white text-xs font-semibold transition-all shadow-xs"
                  >
                    {language === "hi" ? "अनुरोध करें" : "Request"}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Swipe Hint */}
        <div className="flex items-center justify-center gap-1.5 text-center text-[11px] text-[#9C7A3C] mb-8 lg:hidden">
          <span>←</span>
          <span>{language === "hi" ? "अन्य अनुष्ठान देखने हेतु स्वाइप करें" : "Swipe to see all rituals"}</span>
          <span>→</span>
        </div>

        {/* Human Pandit Reassurance Card */}
        <div className="rounded-xl bg-[#F4EFE6] border border-[#E8E2D5] p-6 sm:p-8 text-left max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#B85014] block mb-1">
                {language === "hi" ? "निशुल्क शास्त्रोक्त परामर्श" : "Free Vedic Guidance"}
              </span>
              <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#241812]">
                {language === "hi"
                  ? "समझ नहीं आ रहा कि आपके परिवार के लिए कौन सा अनुष्ठान उचित है?"
                  : "Not sure which ritual is right for your family?"}
              </h4>
              <p className="text-xs sm:text-sm text-[#5C4D44] mt-1.5 leading-relaxed">
                {language === "hi"
                  ? "हमारे अनुभवी तीर्थ पुरोहित आपकी कुल परंपरा एवं तिथि समझकर उचित शास्त्रोक्त मार्गदर्शन देंगे।"
                  : "Speak directly with a learned Teerth Purohit in Gaya Ji to understand the scriptural path for your lineage."}
              </p>
            </div>

            <button
              onClick={() => setPanditModalOpen(true)}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#241812] hover:bg-[#38261D] text-[#FAF8F5] text-xs font-semibold uppercase tracking-wider transition-all shadow-sm flex-shrink-0"
            >
              <Phone className="w-4 h-4 text-[#DFC07C]" />
              <span>{language === "hi" ? "पंडित जी से बात करें" : "Talk to a Teerth Pandit"}</span>
            </button>
          </div>
        </div>

      </div>

      <TalkToPanditModal
        isOpen={panditModalOpen}
        onClose={() => setPanditModalOpen(false)}
      />
    </section>
  );
}
