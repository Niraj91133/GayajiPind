"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, Phone } from "lucide-react";
import { useLanguage } from "@/components/common/LanguageContext";
import { FAQS_DATA } from "@/data/faqs";
import { SacredDivider } from "@/components/common/MotifDividers";
import { TalkToPanditModal } from "@/components/common/TalkToPanditModal";

export function FAQSection() {
  const { language } = useLanguage();
  const [openId, setOpenId] = useState<string | null>("faq-1");
  const [panditModalOpen, setPanditModalOpen] = useState(false);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-16 lg:py-24 bg-[#FAF8F5] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest text-[#9C7A3C] font-semibold block mb-2">
            {language === "hi" ? "अक्सर पूछे जाने वाले प्रश्न" : "Clear Answers"}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#241812] tracking-tight">
            {language === "hi" ? "सामान्य जिज्ञासाएं एवं समाधान" : "Frequently Asked Questions"}
          </h2>
          <p className="text-xs sm:text-sm text-[#7A6F67] mt-3">
            {language === "hi"
              ? "गया जी पिंडदान, गोत्र, विधि एवं व्यवस्थाओं से जुड़े आपके मुख्य प्रश्नों के स्पष्ट उत्तर।"
              : "Direct answers to common questions about rituals, Gotra, coordination, and travel in Gaya Ji."}
          </p>
          <SacredDivider className="my-5" />
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3 mb-10 text-left">
          {FAQS_DATA.map((faq) => {
            const isOpen = openId === faq.id;
            const qText = language === "hi" && faq.hindiQuestion ? faq.hindiQuestion : faq.question;
            const aText = language === "hi" && faq.hindiAnswer ? faq.hindiAnswer : faq.answer;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-white border-[#9C7A3C]/60 shadow-sm"
                    : "bg-white border-[#E8E2D5] hover:border-[#D8D0C0]"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full flex items-center justify-between p-5 text-left transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base sm:text-lg font-bold text-[#241812] pr-4">
                    {qText}
                  </span>
                  <div className={`p-1.5 rounded-full transition-transform duration-200 flex-shrink-0 ${
                    isOpen ? "bg-[#FAF5E6] text-[#B85014] rotate-180" : "bg-[#F4EFE6] text-[#7A6F67]"
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#5C4D44] leading-relaxed border-t border-[#E8E2D5]/50 animate-fade-in">
                    <p>{aText}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Reassurance Footer Prompt */}
        <div className="p-6 rounded-2xl bg-[#F4EFE6] border border-[#E8E2D5] text-left flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-sm font-bold text-[#241812]">
              {language === "hi" ? "कोई अन्य प्रश्न या पारिवारिक परंपरा?" : "Have a specific question about your family tradition?"}
            </h4>
            <p className="text-xs text-[#7A6F67] mt-0.5">
              {language === "hi" ? "हमारे तीर्थ पुरोहित से सीधे बात करें।" : "Speak directly with our Teerth Purohit in Gaya Ji."}
            </p>
          </div>

          <button
            onClick={() => setPanditModalOpen(true)}
            className="px-6 py-2.5 rounded-full bg-[#241812] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#38261D] transition-all flex-shrink-0"
          >
            {language === "hi" ? "पंडित जी से पूछें" : "Ask Our Pandit"}
          </button>
        </div>

      </div>

      <TalkToPanditModal
        isOpen={panditModalOpen}
        onClose={() => setPanditModalOpen(false)}
      />
    </section>
  );
}
