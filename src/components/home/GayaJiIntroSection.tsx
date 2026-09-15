"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/components/common/LanguageContext";
import { SACRED_PLACES } from "@/data/sacredPlaces";
import { SacredDivider } from "@/components/common/MotifDividers";

export function GayaJiIntroSection() {
  const { language } = useLanguage();

  return (
    <section className="py-16 lg:py-24 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest text-[#9C7A3C] font-semibold block mb-2">
            {language === "hi" ? "मोक्षदायिनी भूमि" : "Eternal Shrines"}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#241812] tracking-tight">
            {language === "hi" ? "गया जी के प्रमुख पावन तीर्थ" : "The Holiest Shrines of Gaya Ji"}
          </h2>
          <p className="text-xs sm:text-sm text-[#7A6F67] mt-3">
            {language === "hi"
              ? "उन पवित्र स्थलों के दर्शन करें जहाँ भगवान श्री राम, माता सीता और अनगिनत मुनियों ने पिंडदान किया था।"
              : "Explore the eternal tirthas where Lord Rama, Mata Sita, and centuries of pilgrims offered sacred oblations."}
          </p>
          <SacredDivider className="my-5" />
        </div>

        {/* 4 Places Grid: Horizontal Scroll on Mobile (Apple HIG), 4-Col Grid on Desktop */}
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory gap-4 sm:gap-6 pb-4 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 no-scrollbar mb-10 sm:mb-12 text-left">
          {SACRED_PLACES.map((place) => (
            <div
              key={place.id}
              className="w-[78vw] sm:w-[280px] md:w-auto flex-shrink-0 snap-start flex flex-col bg-white rounded-2xl border border-[#E8E2D5] overflow-hidden shadow-xs hover:shadow-md hover:border-[#9C7A3C]/60 transition-all group"
            >
              <div className="relative h-44 sm:h-48 bg-[#241812] overflow-hidden">
                <img
                  src={place.image}
                  alt={place.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#241812]/95 via-[#241812]/20 to-transparent" />
                
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h3 className="font-serif text-base sm:text-lg font-bold">
                    {language === "hi" ? place.hindiName : place.name}
                  </h3>
                </div>
              </div>

              <div className="p-4 sm:p-5 flex flex-col flex-grow">
                <p className="text-xs text-[#5C4D44] leading-relaxed mb-4 flex-grow line-clamp-3">
                  {place.significance}
                </p>

                <div className="pt-3 border-t border-[#E8E2D5]">
                  <Link
                    href={`/guide/${place.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B85014] hover:underline"
                  >
                    <span>{language === "hi" ? "विस्तार से जानें" : "Read Sacred Guide"}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Swipe Hint */}
        <div className="flex items-center justify-center gap-1.5 text-center text-[11px] text-[#9C7A3C] mb-8 md:hidden">
          <span>←</span>
          <span>{language === "hi" ? "अन्य पवित्र तीर्थ देखने हेतु स्वाइप करें" : "Swipe to see all holy shrines"}</span>
          <span>→</span>
        </div>

        {/* Action Links */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/guide"
            className="px-6 py-3 rounded-full bg-[#241812] text-[#FAF8F5] text-xs font-semibold uppercase tracking-wider hover:bg-[#38261D] transition-all shadow-sm"
          >
            {language === "hi" ? "संपूर्ण गया जी गाइड देखें" : "Explore Full Gaya Ji Guide"}
          </Link>

          <Link
            href="/guide/45-vedi"
            className="px-6 py-3 rounded-full bg-white border border-[#E8E2D5] text-[#241812] text-xs font-semibold uppercase tracking-wider hover:bg-[#F4EFE6] transition-all"
          >
            {language === "hi" ? "45 पवित्र वेदियों की सूची" : "Search 45 Sacred Vedis"}
          </Link>
        </div>

      </div>
    </section>
  );
}
