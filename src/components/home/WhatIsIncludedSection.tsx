"use client";

import React from "react";
import { CheckCircle2, PlusCircle, Info } from "lucide-react";
import { useLanguage } from "@/components/common/LanguageContext";
import { SacredDivider } from "@/components/common/MotifDividers";

export function WhatIsIncludedSection() {
  const { language } = useLanguage();

  const standardInclusions = [
    {
      title: language === "hi" ? "प्रमाणित गयावाल पुरोहित मार्गदर्शन" : "Dedicated Verified Teerth Pandit",
      desc: language === "hi" ? "श्राद्ध एवं तर्पण के आरंभ से अंत तक व्यक्तिगत वैदिक मार्गदर्शन।" : "Personal scholar guiding all mantra recitations and Vedic Sankalp."
    },
    {
      title: language === "hi" ? "पवित्र वेदी समन्वय एवं सुगम दर्शन" : "Sacred Spot Coordination & Darshan",
      desc: language === "hi" ? "फल्गु, विष्णुपद मंदिर गर्भगृह एवं अक्षयवट पर सुगम प्रवेश।" : "Hassle-free movement across Falgu, Vishnupad, and Akshayavat."
    },
    {
      title: language === "hi" ? "समस्त वैदिक पूजा सामग्री" : "Complete Vedic Puja Samagri",
      desc: language === "hi" ? "शुद्ध जौ का आटा, काले तिल, कुश, गंगाजल, तुलसी एवं मिट्टी के दीप।" : "Pure barley flour, black sesame, kusha grass, gangajal, and lamps."
    },
    {
      title: language === "hi" ? "गोत्र एवं कुल परंपरा अनुसार संकल्प" : "Gotra & Ancestral Lineage Sankalp",
      desc: language === "hi" ? "आपकी कुल-परंपरा अनुसार 21 पीढ़ियों का विधिपूर्वक नाम उच्चारण।" : "Proper Vedic invocation tailored to your family's Gotra and ancestors."
    }
  ];

  const optionalAssistance = [
    {
      title: language === "hi" ? "स्टेशन / एयरपोर्ट पिकअप एवं वाहन" : "Station & Airport Transfers",
      desc: language === "hi" ? "गया जंक्शन, गया एयरपोर्ट अथवा पटना एयरपोर्ट से निजी वाहन।" : "Clean private AC cabs directly to your Gaya accommodation."
    },
    {
      title: language === "hi" ? "पारिवारिक एवं स्वच्छ होटल व्यवस्था" : "Sanitized Family Hotel Stays",
      desc: language === "hi" ? "विष्णुपद मंदिर के निकट स्वच्छ कमरे, वेस्टर्न टॉयलेट और लिफ्ट।" : "Verified stays within 10–15 mins of temple with senior access."
    },
    {
      title: language === "hi" ? "शुद्ध सात्विक भोजन एवं ब्राह्मण भोजन" : "Satvik Pure-Veg Dining",
      desc: language === "hi" ? "बिना प्याज-लहसुन का शुद्ध भोजन और ब्राह्मण भोज समन्वय।" : "Fresh satvik meals and traditional Brahmin Bhojan."
    },
    {
      title: language === "hi" ? "वरिष्ठ नागरिकों हेतु ई-रिक्शा / व्हीलचेयर" : "Senior Citizen Care (E-rickshaw / Doli)",
      desc: language === "hi" ? "न्यूनतम पैदल चलना, मंदिर तक ई-रिक्शा, व्हीलचेयर एवं पालकी।" : "Door-to-ghat e-rickshaws, wheelchairs, and Pretshila palanquins."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest text-[#9C7A3C] font-semibold block mb-2">
            {language === "hi" ? "पारदर्शिता एवं सेवा शुचिता" : "Complete Transparency"}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#241812] tracking-tight">
            {language === "hi" ? "आपकी यात्रा में क्या सम्मिलित है?" : "What We Coordinate For Your Family"}
          </h2>
          <p className="text-xs sm:text-sm text-[#7A6F67] mt-3">
            {language === "hi"
              ? "हम पूर्ण स्पष्टता में विश्वास रखते हैं। जानें हमारी मुख्य सेवाएं और अतिरिक्त सुविधाएं।"
              : "Know exactly what is standard in your ritual coordination and what optional services can be arranged."}
          </p>
          <SacredDivider className="my-5" />
        </div>

        {/* 2 Main Columns: Horizontal Scroll on Mobile (Apple HIG), 2-Col Grid on Desktop */}
        <div className="flex lg:grid lg:grid-cols-2 overflow-x-auto lg:overflow-x-visible snap-x snap-mandatory gap-4 sm:gap-8 pb-4 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 no-scrollbar mb-8 sm:mb-10 text-left">
          
          {/* Card 1: Standard Inclusions */}
          <div className="w-[86vw] sm:w-[420px] lg:w-auto flex-shrink-0 snap-start bg-white rounded-2xl sm:rounded-3xl border border-[#E8E2D5] p-5 sm:p-8 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 pb-3.5 sm:pb-4 mb-5 sm:mb-6 border-b border-[#E8E2D5]">
                <CheckCircle2 className="w-5 h-5 text-[#B85014]" />
                <h3 className="font-serif text-lg sm:text-xl font-bold text-[#241812]">
                  {language === "hi" ? "मानक अनुष्ठान व्यवस्था में सम्मिलित" : "Standard Pilgrimage Inclusions"}
                </h3>
              </div>

              <div className="space-y-4 sm:space-y-5">
                {standardInclusions.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 sm:gap-3">
                    <span className="text-[#B85014] font-bold text-sm mt-0.5">•</span>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-[#241812]">
                        {item.title}
                      </h4>
                      <p className="text-[11px] sm:text-xs text-[#5C4D44] mt-0.5 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 sm:mt-6 pt-3.5 sm:pt-4 border-t border-[#E8E2D5] text-[11px] sm:text-xs text-[#7A6F67]">
              ✓ {language === "hi" ? "सभी पिंडदान बुकिंग अनुरोधों में सम्मिलित।" : "Included automatically in every ritual booking."}
            </div>
          </div>

          {/* Card 2: Optional Coordinated Add-ons */}
          <div className="w-[86vw] sm:w-[420px] lg:w-auto flex-shrink-0 snap-start bg-white rounded-2xl sm:rounded-3xl border border-[#E8E2D5] p-5 sm:p-8 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 pb-3.5 sm:pb-4 mb-5 sm:mb-6 border-b border-[#E8E2D5]">
                <PlusCircle className="w-5 h-5 text-[#9C7A3C]" />
                <h3 className="font-serif text-lg sm:text-xl font-bold text-[#241812]">
                  {language === "hi" ? "अतिरिक्त सेवाएं (आपकी आवश्यकता अनुसार)" : "Optional Coordinated Services"}
                </h3>
              </div>

              <div className="space-y-4 sm:space-y-5">
                {optionalAssistance.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 sm:gap-3">
                    <span className="text-[#9C7A3C] font-bold text-sm mt-0.5">•</span>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-[#241812]">
                        {item.title}
                      </h4>
                      <p className="text-[11px] sm:text-xs text-[#5C4D44] mt-0.5 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 sm:mt-6 pt-3.5 sm:pt-4 border-t border-[#E8E2D5] text-[11px] sm:text-xs text-[#7A6F67]">
              ○ {language === "hi" ? "बुकिंग के समय आवश्यकतानुसार चुनें।" : "Coordinated directly based on your family requirements."}
            </div>
          </div>

        </div>

        {/* Mobile Swipe Hint */}
        <div className="flex items-center justify-center gap-1.5 text-center text-[11px] text-[#9C7A3C] mb-6 lg:hidden">
          <span>←</span>
          <span>{language === "hi" ? "अतिरिक्त सेवाएं देखने हेतु स्वाइप करें" : "Swipe to see optional services"}</span>
          <span>→</span>
        </div>

        {/* Reassurance Notice on Pricing (Rule #73) */}
        <div className="p-6 rounded-2xl bg-[#F4EFE6] border border-[#E8E2D5] text-left max-w-4xl mx-auto flex items-start gap-3.5">
          <Info className="w-5 h-5 text-[#9C7A3C] flex-shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-[#5C4D44] leading-relaxed">
            <strong className="text-[#241812] block mb-0.5">
              {language === "hi" ? "शुल्क कैसे तय होता है?" : "Transparent Service Communication:"}
            </strong>
            {language === "hi"
              ? "प्रत्येक परिवार की सदस्य संख्या, गोत्र परंपरा और होटल/वाहन की आवश्यकताएं भिन्न होती हैं। इसलिए हम कोई भ्रामक सार्वजनिक पैकेज नहीं दर्शाते। आपके अनुरोध सबमिट करने के बाद हमारे समन्वयक कॉल पर समस्त विवरण एवं सेवा शुल्क स्पष्ट करेंगे।"
              : "Every family's group size, ancestral traditions, and hotel/vehicle needs are unique. We never charge online. Your assigned coordinator calls you to explain all inclusions and clear service charges before any confirmation."}
          </div>
        </div>

      </div>
    </section>
  );
}
