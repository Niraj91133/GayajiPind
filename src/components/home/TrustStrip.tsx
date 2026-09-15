"use client";

import React from "react";
import { ShieldCheck, Compass, Headset, Heart } from "lucide-react";
import { useLanguage } from "@/components/common/LanguageContext";

export function TrustStrip() {
  const { language } = useLanguage();

  const items = [
    {
      title: language === "hi" ? "प्रमाणित गयावाल पुरोहित" : "Verified Teerth Pandits",
      desc: language === "hi" ? "विष्णुपद क्षेत्र की पीढ़ियों पुरानी प्रामाणिक परंपरा।" : "7th Generation Gayawal lineage at Vishnupad Sanctum.",
    },
    {
      title: language === "hi" ? "स्पष्ट शास्त्रोक्त विधि" : "Clear Vedic Process",
      desc: language === "hi" ? "गया जी पहुँचने से पहले हर चरण की पूरी जानकारी।" : "Know what happens at every sacred Vedi before visiting.",
    },
    {
      title: language === "hi" ? "व्यक्तिगत तीर्थ समन्वयक" : "Dedicated Coordinator",
      desc: language === "hi" ? "व्हाट्सएप और फोन पर सीधे समर्पित सहायता।" : "Direct human assistance from inquiry to ritual completion.",
    },
    {
      title: language === "hi" ? "वरिष्ठ नागरिक सुविधा" : "Senior Pilgrim Care",
      desc: language === "hi" ? "ई-रिक्शा, व्हीलचेयर और न्यूनतम पैदल चलना।" : "E-rickshaws, wheelchairs & minimal walking routes.",
    },
  ];

  return (
    <section className="bg-white border-b border-[#E8E2D5] py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Horizontal scroll on mobile (Apple HIG), 4-col grid on desktop */}
        <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 overflow-x-auto sm:overflow-x-visible snap-x snap-mandatory gap-4 sm:gap-6 lg:gap-8 -mx-4 px-4 sm:mx-0 sm:px-0 no-scrollbar sm:divide-x divide-[#E8E2D5]">
          {items.map((item, index) => (
            <div
              key={index}
              className={`w-[72vw] sm:w-auto flex-shrink-0 snap-start bg-[#FAF8F5] sm:bg-transparent p-4 sm:p-0 rounded-xl sm:rounded-none border sm:border-0 border-[#E8E2D5] text-left ${
                index !== 0 ? "sm:pl-6" : ""
              }`}
            >
              <h3 className="font-serif text-sm sm:text-base font-bold text-[#241812]">
                {item.title}
              </h3>
              <p className="text-xs text-[#7A6F67] mt-1 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
