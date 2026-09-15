"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Phone, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/components/common/LanguageContext";
import { LotusMotif } from "@/components/common/MotifDividers";
import { TalkToPanditModal } from "@/components/common/TalkToPanditModal";

export function FinalCTASection() {
  const { language } = useLanguage();
  const [panditModalOpen, setPanditModalOpen] = useState(false);

  return (
    <section className="py-20 lg:py-28 bg-[#241812] text-[#FAF8F5] relative overflow-hidden text-center">
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Lotus Icon */}
        <div className="w-12 h-12 mx-auto rounded-full bg-[#38261D] border border-[#9C7A3C]/50 flex items-center justify-center text-[#DFC07C] mb-6">
          <LotusMotif className="w-6 h-6" />
        </div>

        {/* Dignified Headline */}
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
          {language === "hi"
            ? "पितरों की शांति एवं मोक्ष का मार्ग, पूर्ण विश्वास के साथ।"
            : "Arrange Your Gaya Ji Pilgrimage with Complete Dignity and Peace of Mind."}
        </h2>

        <p className="text-sm sm:text-base text-[#D8D0C0] max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
          {language === "hi"
            ? "बिना किसी हड़बड़ाहट अथवा भ्रामक शुल्कों के, अपने परिवार के लिए प्रमाणित तीर्थ पंडित एवं समर्पित समन्वयक की व्यक्तिगत सहायता प्राप्त करें।"
            : "No hurried processes, no hidden charges. Connect with a dedicated Gaya Ji pilgrimage coordinator and verified Teerth Purohits today."}
        </p>

        {/* Dual Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Link
            href="/request-booking"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#B85014] hover:bg-[#A0440E] text-white font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-md active:scale-95"
          >
            <span>{language === "hi" ? "बुकिंग अनुरोध भेजें" : "Request Booking Now"}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <button
            onClick={() => setPanditModalOpen(true)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 border border-[#9C7A3C] text-white font-semibold text-xs sm:text-sm uppercase tracking-wider hover:bg-white/20 transition-all"
          >
            <Phone className="w-4 h-4 text-[#DFC07C]" />
            <span>{language === "hi" ? "पंडित जी से बात करें" : "Talk to a Pandit"}</span>
          </button>
        </div>

        {/* Reassurance Note */}
        <div className="inline-flex items-center gap-2 text-xs text-[#D8D0C0]">
          <ShieldCheck className="w-4 h-4 text-[#DFC07C]" />
          <span>
            {language === "hi"
              ? "शून्य ऑनलाइन अग्रिम भुगतान • व्यक्तिगत समन्वयक द्वारा संपूर्ण व्यवस्था"
              : "Zero upfront payment online • Verified Gayawal Purohit • Personal Coordination"}
          </span>
        </div>

      </div>

      <TalkToPanditModal
        isOpen={panditModalOpen}
        onClose={() => setPanditModalOpen(false)}
      />
    </section>
  );
}
