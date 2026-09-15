"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Phone, ArrowRight, CheckCircle2, MapPin, Sparkles } from "lucide-react";
import { useLanguage } from "@/components/common/LanguageContext";
import { TalkToPanditModal } from "@/components/common/TalkToPanditModal";
import { LotusMotif } from "@/components/common/MotifDividers";

export function HeroSection() {
  const { language } = useLanguage();
  const [panditModalOpen, setPanditModalOpen] = useState(false);

  return (
    <section className="relative overflow-hidden bg-[#FAF8F5] pt-8 pb-14 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-24 border-b border-[#E8E2D5]">
      
      {/* Background Subtle Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(#9C7A3C_0.6px,transparent_0.6px)] [background-size:24px_24px] opacity-15 pointer-events-none" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-14 items-center">
          
          {/* Top Column on Mobile / Right Column on Desktop: Authentic Vishnupad Temple Image */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Photo Frame */}
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-[#E8E2D5] bg-[#241812] shadow-xl relative">
                <div className="relative h-52 sm:h-80 lg:h-[440px] w-full">
                  <img
                    src="/images/hero-temple.jpg"
                    alt="Historic Vishnupad Temple and Falgu River Ghats in Gaya Ji at golden sunrise"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#241812]/95 via-[#241812]/20 to-transparent" />
                </div>

                {/* Floating Shrines Ribbon */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                  <span className="bg-[#241812]/85 backdrop-blur-md border border-[#DFC07C]/40 text-[#DFC07C] text-[10px] sm:text-[11px] font-semibold px-2.5 py-1 rounded-full shadow-xs">
                    {language === "hi" ? "फल्गु • विष्णुपद • अक्षयवट" : "Falgu • Vishnupad • Akshayavat"}
                  </span>
                </div>

                {/* Caption Bar */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 sm:bottom-5 sm:left-5 sm:right-5 text-white text-left">
                  <span className="text-[10px] sm:text-[11px] font-semibold text-[#DFC07C] uppercase tracking-widest block mb-0.5 sm:mb-1">
                    {language === "hi" ? "परम पावन विष्णुपद क्षेत्र" : "Sacred Vishnupad Kshetra • Gaya Ji"}
                  </span>
                  <p className="font-serif text-sm sm:text-lg font-bold text-white leading-snug">
                    {language === "hi"
                      ? "गया तीर्थ में पिंडदान से इक्कीस पीढ़ियों के पितृ तृप्त होते हैं।"
                      : "Ancestral oblations in Gaya Ji bestow eternal liberation across 21 generations."}
                  </p>
                </div>
              </div>

              {/* Classic Gold Corner Accent */}
              <div className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 w-full h-full border border-[#9C7A3C]/30 rounded-2xl sm:rounded-3xl -z-10 pointer-events-none hidden sm:block" />
            </div>
          </div>

          {/* Bottom Column on Mobile / Left Column on Desktop: Authentic Traditional Typography & Content */}
          <div className="lg:col-span-7 flex flex-col text-left order-2 lg:order-1">
            
            {/* Shloka / Vedic Invocation Badge */}
            <div className="inline-flex items-center gap-2 self-start bg-[#FAF5E6] border border-[#DFC07C]/50 px-3.5 py-1.5 rounded-full mb-3.5 sm:mb-5 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#B85014] animate-pulse" />
              <span className="font-serif italic text-xs sm:text-sm text-[#8C6D32] font-semibold tracking-wide">
                ॥ ॐ विष्णवे नमः • श्री गया तीर्थ महात्म्य ॥
              </span>
            </div>

            {/* Main Title */}
            <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#241812] tracking-tight leading-[1.18] sm:leading-[1.12] mb-3 sm:mb-5">
              {language === "hi" ? (
                <>
                  गया जी तीर्थ में <br className="hidden sm:inline" />
                  <span className="text-[#B85014]">शास्त्रोक्त पिंडदान</span> एवं श्राद्ध कर्म
                </>
              ) : (
                <>
                  Sacred Gaya Ji <br className="hidden sm:inline" />
                  <span className="text-[#B85014]">Pind Daan &amp; Vedic Rites</span>
                </>
              )}
            </h1>

            {/* Calm, Reverent Description */}
            <p className="text-sm sm:text-base lg:text-lg text-[#5C4D44] leading-relaxed mb-5 sm:mb-7 max-w-xl font-normal">
              {language === "hi"
                ? "प्रामाणिक गयावाल तीर्थ पुरोहितों के सानिध्य में फल्गु नदी, विष्णुपद मंदिर एवं अक्षयवट पर अपने पितरों की तृप्ति व मोक्ष हेतु विधिपूर्वक पिंडदान संपन्न कराएं। बिना किसी हड़बड़ाहट और पूर्ण पारदर्शिता के साथ।"
                : "Complete your family's sacred ancestral rites at Falgu River, Vishnupad Sanctum, and Akshayavat under the direct guidance of verified hereditary Gayawal Purohits. Respectful, transparent, and fully coordinated."}
            </p>

            {/* 4 Clean Key Trust Highlights */}
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3 mb-6 sm:mb-8 text-xs sm:text-sm text-[#4A3E38]">
              <div className="flex items-center gap-2 p-2.5 sm:p-3 rounded-xl bg-white border border-[#E8E2D5] shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-[#B85014] flex-shrink-0" />
                <span className="font-semibold text-[#241812] text-[11px] sm:text-xs">
                  {language === "hi" ? "प्रमाणित गयावाल पुरोहित" : "Verified Teerth Pandits"}
                </span>
              </div>
              <div className="flex items-center gap-2 p-2.5 sm:p-3 rounded-xl bg-white border border-[#E8E2D5] shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-[#B85014] flex-shrink-0" />
                <span className="font-semibold text-[#241812] text-[11px] sm:text-xs">
                  {language === "hi" ? "शास्त्रोक्त वैदिक संकल्प" : "Authentic Gotra Sankalp"}
                </span>
              </div>
              <div className="flex items-center gap-2 p-2.5 sm:p-3 rounded-xl bg-white border border-[#E8E2D5] shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-[#B85014] flex-shrink-0" />
                <span className="font-semibold text-[#241812] text-[11px] sm:text-xs">
                  {language === "hi" ? "वरिष्ठ नागरिक सुविधा" : "Senior Citizen Care"}
                </span>
              </div>
              <div className="flex items-center gap-2 p-2.5 sm:p-3 rounded-xl bg-white border border-[#E8E2D5] shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-[#B85014] flex-shrink-0" />
                <span className="font-semibold text-[#241812] text-[11px] sm:text-xs">
                  {language === "hi" ? "शून्य ऑनलाइन अग्रिम" : "Zero Online Upfront"}
                </span>
              </div>
            </div>

            {/* Actions: Primary & Secondary */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <Link
                href="/request-booking"
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-[#241812] hover:bg-[#38261D] text-[#FAF8F5] font-semibold text-xs sm:text-sm tracking-wide transition-all shadow-md active:scale-98 text-center"
              >
                <span>{language === "hi" ? "तीर्थ यात्रा का अनुरोध करें" : "Request Pilgrimage Booking"}</span>
                <ArrowRight className="w-4 h-4 text-[#DFC07C]" />
              </Link>

              <button
                onClick={() => setPanditModalOpen(true)}
                className="inline-flex items-center justify-center gap-2.5 px-5 sm:px-7 py-3.5 sm:py-4 rounded-xl bg-white border border-[#9C7A3C]/50 text-[#241812] font-semibold text-xs sm:text-sm hover:bg-[#FAF5E6] transition-all text-center shadow-xs"
              >
                <Phone className="w-4 h-4 text-[#B85014]" />
                <span>{language === "hi" ? "पंडित जी से बात करें" : "Talk to a Teerth Pandit"}</span>
              </button>
            </div>

            {/* Local Coordinator Helpline Line */}
            <div className="flex items-center gap-2 text-xs text-[#7A6F67] mt-3 sm:mt-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#9C7A3C]" />
              <span>
                {language === "hi"
                  ? "समन्वयक सहायता: +91 94312 87650 • सुबह 7:00 से रात 9:00 बजे तक"
                  : "Coordinator Helpline: +91 94312 87650 • 7:00 AM to 9:00 PM Daily"}
              </span>
            </div>
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
