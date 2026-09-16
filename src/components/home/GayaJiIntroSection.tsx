"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { useLanguage } from "@/components/common/LanguageContext";
import { SACRED_PLACES } from "@/data/sacredPlaces";
import { SacredDivider } from "@/components/common/MotifDividers";

export function GayaJiIntroSection() {
  const { language } = useLanguage();

  return (
    <section className="py-14 lg:py-20 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest text-[#9C7A3C] font-semibold block mb-2">
            {language === "hi"
              ? "मोक्षदायिनी भूमि"
              : language === "bn"
              ? "মোক্ষদায়িনী তীর্থভূমি"
              : "Eternal Shrines"}
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-[#241812] tracking-tight">
            {language === "hi"
              ? "गया जी के प्रमुख पावन तीर्थ"
              : language === "bn"
              ? "গয়া জী-র প্রধান পবিত্র তীর্থসমূহ"
              : "The Holiest Shrines of Gaya Ji"}
          </h2>
          <p className="text-xs sm:text-sm text-[#7A6F67] mt-3 max-w-2xl mx-auto">
            {language === "hi"
              ? "उन पवित्र स्थलों के दर्शन करें जहाँ भगवान श्री राम, माता सीता और अनगिनत मुनियों ने पिंडदान किया था।"
              : language === "bn"
              ? "সেই পবিত্র স্থানসমূহ দর্শন করুন যেখানে ভগবান শ্রী রাম ও মাতা সীতা পিতৃপুরুষদের পিণ্ডদান করেছিলেন।"
              : "Explore the eternal tirthas where Lord Rama, Mata Sita, and centuries of pilgrims offered sacred oblations."}
          </p>
          <SacredDivider className="my-5" />
        </div>

        {/* 4 Places Grid: Horizontal Scroll on Mobile, 4-Col Grid on Desktop */}
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory gap-4 sm:gap-6 pb-4 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 no-scrollbar mb-10 sm:mb-12 text-left">
          {SACRED_PLACES.map((place) => {
            const placeTitle =
              language === "hi"
                ? place.hindiName
                : language === "bn"
                ? place.bengaliName || place.name
                : place.name;

            const placeSignificance =
              language === "bn" && place.bengaliSignificance
                ? place.bengaliSignificance
                : place.significance;

            const placeTagline =
              language === "bn" && place.bengaliTagline
                ? place.bengaliTagline
                : place.tagline;

            return (
              <div
                key={place.id}
                className="w-[82vw] sm:w-[290px] md:w-auto flex-shrink-0 snap-start flex flex-col bg-white rounded-2xl border border-[#E8E2D5] overflow-hidden shadow-sm hover:shadow-md hover:border-[#9C7A3C]/60 transition-all group"
              >
                {/* Place Image Frame */}
                <div className="relative h-48 sm:h-52 bg-[#241812] overflow-hidden">
                  <img
                    src={place.image}
                    alt={place.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#241812]/80 via-transparent to-black/20" />
                  
                  {/* Location badge on top of image */}
                  <div className="absolute top-3 left-3 flex items-center gap-1 bg-[#241812]/85 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] text-[#DFC07C] font-semibold border border-[#DFC07C]/30">
                    <MapPin className="w-3 h-3 text-[#DFC07C]" />
                    <span>Gaya Ji</span>
                  </div>
                </div>

                {/* Place Details: High Contrast, Crystal-Clear Visible Titles */}
                <div className="p-5 flex flex-col flex-grow bg-white">
                  {/* Prominent Card Title */}
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#241812] group-hover:text-[#B85014] transition-colors mb-1.5 leading-snug">
                    {placeTitle}
                  </h3>

                  {/* Subtitle / Tagline */}
                  <span className="text-[11px] font-medium text-[#9C7A3C] leading-snug block mb-3 line-clamp-2">
                    {placeTagline}
                  </span>

                  {/* Description / Significance */}
                  <p className="text-xs text-[#5C4D44] leading-relaxed mb-4 flex-grow line-clamp-3">
                    {placeSignificance}
                  </p>

                  {/* Read Guide CTA Link */}
                  <div className="pt-3 border-t border-[#E8E2D5] mt-auto">
                    <Link
                      href={`/guide/${place.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B85014] hover:text-[#913D0C] transition-colors"
                    >
                      <span>
                        {language === "hi"
                          ? "विस्तार से जानें"
                          : language === "bn"
                          ? "বিস্তারিত জানুন"
                          : "Read Sacred Guide"}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Swipe Hint */}
        <div className="flex items-center justify-center gap-1.5 text-center text-[11px] text-[#9C7A3C] mb-8 md:hidden">
          <span>←</span>
          <span>
            {language === "hi"
              ? "अन्य पवित्र तीर्थ देखने हेतु स्वाइप करें"
              : language === "bn"
              ? "অন্যান্য পবিত্র তীর্থ দেখতে সোয়াইপ করুন"
              : "Swipe to see all holy shrines"}
          </span>
          <span>→</span>
        </div>

        {/* Action Links */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/guide"
            className="px-6 py-3 rounded-full bg-[#241812] text-[#FAF8F5] text-xs font-semibold uppercase tracking-wider hover:bg-[#38261D] transition-all shadow-sm text-center"
          >
            {language === "hi"
              ? "संपूर्ण गया जी गाइड देखें"
              : language === "bn"
              ? "সম্পূর্ণ গয়া গাইড দেখুন"
              : "Explore Full Gaya Ji Guide"}
          </Link>

          <Link
            href="/guide/45-vedi"
            className="px-6 py-3 rounded-full bg-white border border-[#E8E2D5] text-[#241812] text-xs font-semibold uppercase tracking-wider hover:bg-[#F4EFE6] transition-all text-center shadow-xs"
          >
            {language === "hi"
              ? "45 पवित्र वेदियों की सूची"
              : language === "bn"
              ? "৪৫টি পবিত্র বেদীর তালিকা"
              : "Search 45 Sacred Vedis"}
          </Link>
        </div>

      </div>
    </section>
  );
}

