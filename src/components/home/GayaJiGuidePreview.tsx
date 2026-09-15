"use client";

import React from "react";
import Link from "next/link";
import { Train, Plane, Car, Hotel, Luggage, Clock, ArrowRight } from "lucide-react";
import { useLanguage } from "@/components/common/LanguageContext";
import { SacredDivider } from "@/components/common/MotifDividers";

export function GayaJiGuidePreview() {
  const { language } = useLanguage();

  return (
    <section className="py-16 lg:py-24 bg-white border-y border-[#E8E2D5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest text-[#9C7A3C] font-semibold block mb-2">
            {language === "hi" ? "यात्रा एवं तैयारी" : "Pilgrimage Planning"}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#241812] tracking-tight">
            {language === "hi" ? "गया जी यात्रा की तैयारी" : "Plan Your Visit to Gaya Ji"}
          </h2>
          <p className="text-xs sm:text-sm text-[#7A6F67] mt-3">
            {language === "hi"
              ? "ट्रेन, विमान, सड़क कनेक्टिविटी, ठहरने की व्यवस्था और पारंपरिक वस्त्रों की आवश्यक जानकारी।"
              : "Clear logistical guidance on reaching Gaya Ji, hotel accommodations, and sacred preparations."}
          </p>
          <SacredDivider className="my-5" />
        </div>

        {/* 3 Travel Modes: Horizontal Scroll on Mobile (Apple HIG), 3-Col Grid on Desktop */}
        <div className="flex md:grid md:grid-cols-3 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory gap-4 sm:gap-6 pb-4 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 no-scrollbar mb-8 sm:mb-10 text-left">
          
          <div className="w-[78vw] sm:w-[300px] md:w-auto flex-shrink-0 snap-start p-5 sm:p-6 rounded-2xl bg-[#FAF8F5] border border-[#E8E2D5] shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2 text-[#B85014]">
                <Train className="w-5 h-5" />
                <h3 className="font-serif text-base font-bold text-[#241812]">
                  {language === "hi" ? "ट्रेन द्वारा आगमन" : "By Railway (Gaya Jn)"}
                </h3>
              </div>
              <p className="text-xs text-[#5C4D44] leading-relaxed">
                {language === "hi"
                  ? "गया जंक्शन (GAYA) दिल्ली, कोलकाता, पटना एवं मुंबई से राजधानी, वंदे भारत और सुपरफास्ट ट्रेनों से सीधा जुड़ा है।"
                  : "Direct daily Vande Bharat, Rajdhani, and express connectivity from Delhi, Kolkata, Mumbai, and Patna."}
              </p>
            </div>
          </div>

          <div className="w-[78vw] sm:w-[300px] md:w-auto flex-shrink-0 snap-start p-5 sm:p-6 rounded-2xl bg-[#FAF8F5] border border-[#E8E2D5] shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2 text-[#9C7A3C]">
                <Plane className="w-5 h-5" />
                <h3 className="font-serif text-base font-bold text-[#241812]">
                  {language === "hi" ? "विमान द्वारा आगमन" : "By Flight (GAY / PAT)"}
                </h3>
              </div>
              <p className="text-xs text-[#5C4D44] leading-relaxed">
                {language === "hi"
                  ? "गया एयरपोर्ट (9 किमी) एवं पटना एयरपोर्ट (100 किमी - 2 घंटे एक्सप्रेसवे) से सीधी कनेक्टिविटी उपलब्ध है।"
                  : "Gaya Airport is 9km away; Patna International Airport is 100km via the 4-lane expressway."}
              </p>
            </div>
          </div>

          <div className="w-[78vw] sm:w-[300px] md:w-auto flex-shrink-0 snap-start p-5 sm:p-6 rounded-2xl bg-[#FAF8F5] border border-[#E8E2D5] shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2 text-[#B85014]">
                <Car className="w-5 h-5" />
                <h3 className="font-serif text-base font-bold text-[#241812]">
                  {language === "hi" ? "सड़क मार्ग एवं एक्सप्रेसवे" : "By Road & Private Cab"}
                </h3>
              </div>
              <p className="text-xs text-[#5C4D44] leading-relaxed">
                {language === "hi"
                  ? "पटना-गया 4-लेन एक्सप्रेसवे और ग्रैंड ट्रंक रोड (NH-19) द्वारा सुगम सड़क आवागमन।"
                  : "Smooth highway connectivity from Patna (2.5 hrs), Varanasi (5 hrs), and Ranchi (4 hrs)."}
              </p>
            </div>
          </div>

        </div>

        {/* Mobile Swipe Hint */}
        <div className="flex items-center justify-center gap-1.5 text-center text-[11px] text-[#9C7A3C] mb-8 md:hidden">
          <span>←</span>
          <span>{language === "hi" ? "अन्य माध्यम देखने हेतु स्वाइप करें" : "Swipe to see all travel modes"}</span>
          <span>→</span>
        </div>

        {/* 3 Quick Practical Guides */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#E8E2D5] text-left">
          <Link
            href="/guide/where-to-stay"
            className="flex items-center gap-3 p-4 rounded-xl bg-[#FAF8F5] hover:bg-[#F4EFE6] border border-[#E8E2D5] transition-colors"
          >
            <Hotel className="w-5 h-5 text-[#9C7A3C] flex-shrink-0" />
            <div>
              <h4 className="text-xs font-bold text-[#241812]">
                {language === "hi" ? "कहाँ ठहरें?" : "Where to Stay"}
              </h4>
              <p className="text-[11px] text-[#7A6F67]">
                {language === "hi" ? "मंदिर के निकट पारिवारिक होटल" : "Family stays near temple"}
              </p>
            </div>
          </Link>

          <Link
            href="/guide/what-to-bring"
            className="flex items-center gap-3 p-4 rounded-xl bg-[#FAF8F5] hover:bg-[#F4EFE6] border border-[#E8E2D5] transition-colors"
          >
            <Luggage className="w-5 h-5 text-[#B85014] flex-shrink-0" />
            <div>
              <h4 className="text-xs font-bold text-[#241812]">
                {language === "hi" ? "क्या साथ लाएं?" : "What to Bring"}
              </h4>
              <p className="text-[11px] text-[#7A6F67]">
                {language === "hi" ? "पारंपरिक वस्त्र एवं आवश्यक सूची" : "Attire & checklist"}
              </p>
            </div>
          </Link>

          <Link
            href="/guide/how-to-reach"
            className="flex items-center gap-3 p-4 rounded-xl bg-[#FAF8F5] hover:bg-[#F4EFE6] border border-[#E8E2D5] transition-colors"
          >
            <Clock className="w-5 h-5 text-[#9C7A3C] flex-shrink-0" />
            <div>
              <h4 className="text-xs font-bold text-[#241812]">
                {language === "hi" ? "अनुष्ठान समय" : "Ritual Timings"}
              </h4>
              <p className="text-[11px] text-[#7A6F67]">
                {language === "hi" ? "प्रातः 6:00 AM से अनुकूल मुहूर्त" : "Morning Vedic windows"}
              </p>
            </div>
          </Link>
        </div>

      </div>
    </section>
  );
}
