"use client";

import React from "react";
import { useLanguage } from "@/components/common/LanguageContext";
import { SacredDivider } from "@/components/common/MotifDividers";

export function HowItWorksSection() {
  const { language } = useLanguage();

  const steps = [
    {
      number: "01",
      title: language === "hi" ? "अनुष्ठान चुनें" : "Choose Ritual or Consult",
      desc: language === "hi"
        ? "पारंपरिक अनुष्ठान चुनें अथवा हमारे तीर्थ पुरोहित से उचित मार्गदर्शन प्राप्त करें।"
        : "Select your sacred ceremony or request direct guidance from our Teerth Pandit.",
    },
    {
      number: "02",
      title: language === "hi" ? "अनुरोध सबमिट करें" : "Share Travel & Family Details",
      desc: language === "hi"
        ? "पसंदीदा तारीख और सदस्यों का विवरण दर्ज करें। कोई ऑनलाइन पेमेंट नहीं।"
        : "Submit your preferred dates and group size. Zero upfront payment or checkout required.",
    },
    {
      number: "03",
      title: language === "hi" ? "समन्वयक से पुष्टि" : "Coordinator Confirms Everything",
      desc: language === "hi"
        ? "गया जी के स्थानीय समन्वयक आपसे कॉल/व्हाट्सएप पर बात कर व्यवस्थाएं तय करेंगे।"
        : "A local coordinator contacts you on WhatsApp/Call to verify Pandit, stay, and timings.",
    },
    {
      number: "04",
      title: language === "hi" ? "पवित्र तीर्थ यात्रा" : "Peaceful Rites in Gaya Ji",
      desc: language === "hi"
        ? "गया जी पहुँचें और अपने आवंटित पुरोहित के साथ शांतिपूर्वक श्राद्ध पूर्ण करें।"
        : "Arrive in Gaya Ji with your dedicated Pandit and complete your ancestral rites with dignity.",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white border-y border-[#E8E2D5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-[#9C7A3C] font-semibold block mb-2">
            {language === "hi" ? "सरल एवं स्पष्ट प्रक्रिया" : "Simple 4-Step Pilgrimage"}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#241812] tracking-tight">
            {language === "hi" ? "यह व्यवस्था कैसे कार्य करती है?" : "How Gaya Ji Pind Sewa Coordinates Your Visit"}
          </h2>
          <p className="text-xs sm:text-sm text-[#7A6F67] mt-3">
            {language === "hi"
              ? "अनुष्ठान चुनने से लेकर गया जी में सुफल प्राप्ति तक का सहज मार्गदर्शन।"
              : "From your initial inquiry to receiving eternal Suphal blessings in Gaya Ji."}
          </p>
          <SacredDivider className="my-5" />
        </div>

        {/* 4 Steps Grid: Horizontal Scroll on Mobile (Apple HIG), 4-Col Grid on Desktop */}
        <div className="flex lg:grid lg:grid-cols-4 overflow-x-auto lg:overflow-x-visible snap-x snap-mandatory gap-4 sm:gap-8 pb-4 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 no-scrollbar relative text-left">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="w-[76vw] sm:w-[280px] lg:w-auto flex-shrink-0 snap-start p-5 sm:p-6 rounded-2xl bg-[#FAF8F5] border border-[#E8E2D5] shadow-xs flex flex-col justify-between"
            >
              <div>
                <span className="font-serif text-3xl font-bold text-[#9C7A3C] block mb-2 sm:mb-3">
                  {step.number}
                </span>

                <h3 className="font-serif text-base sm:text-lg font-bold text-[#241812] mb-1.5 sm:mb-2">
                  {step.title}
                </h3>

                <p className="text-xs text-[#5C4D44] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Swipe Hint */}
        <div className="flex items-center justify-center gap-1.5 text-center text-[11px] text-[#9C7A3C] mt-6 lg:hidden">
          <span>←</span>
          <span>{language === "hi" ? "सभी चरण देखने हेतु स्वाइप करें" : "Swipe to see all 4 steps"}</span>
          <span>→</span>
        </div>

      </div>
    </section>
  );
}
