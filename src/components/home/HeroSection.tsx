"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Phone, ArrowRight, CheckCircle2, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { useLanguage } from "@/components/common/LanguageContext";
import { TalkToPanditModal } from "@/components/common/TalkToPanditModal";

const HERO_SLIDES = [
  {
    id: 1,
    image: "/images/pandit-hero.jpg",
    alt: "Authentic Gayawal Teerth Purohit in Gaya Ji",
    badge: {
      hi: "गयावाल तीर्थ पुरोहित • विष्णुपद",
      en: "Verified Gayawal Purohit • Vishnupad",
      bn: "প্রমাণিত গয়াবাল পুরোহিত • বিষ্ণুপদ",
    },
    tag: {
      hi: "प्रामाणिक गयावाल परंपरा",
      en: "Generational Gayawal Lineage",
      bn: "ঐতিহ্যবাহী গয়াবাল বংশ",
    },
    caption: {
      hi: "विद्वान तीर्थ पुरोहितों के सानिध्य में शास्त्रोक्त पिंडदान व गोत्र संकल्प",
      en: "Sacred ancestral oblations and authentic Gotra Sankalp with revered Purohits",
      bn: "বিদ্বান তীর্থ পুরোহিতদের সান্নিধ্যে শাস্ত্রীয় পিণ্ডদান ও গোত্র সঙ্কল্প",
    },
  },
  {
    id: 2,
    image: "/images/hero-temple.jpg",
    alt: "Sacred Vishnupad Temple in Gaya Ji",
    badge: {
      hi: "विष्णुपद मंदिर • चरण वेदी",
      en: "Vishnupad Sanctum • Charan Vedi",
      bn: "বিষ্ণুপদ গর্ভগৃহ • চরণ বেদী",
    },
    tag: {
      hi: "परम पावन विष्णुपद क्षेत्र",
      en: "Sacred Vishnupad Kshetra",
      bn: "পবিত্র বিষ্ণুপদ ক্ষেত্র",
    },
    caption: {
      hi: "भगवान श्री विष्णु के चरण चिन्ह पर पिंडदान से 21 पीढ़ियों के पितरों को मोक्ष",
      en: "Ancestral rites at Lord Vishnu's sacred footprint bestow eternal liberation",
      bn: "ভগবান শ্রী বিষ্ণুর পদপদ্মে পিণ্ডদানে পূর্বপুরুষদের চিরন্তন মোক্ষলাভ",
    },
  },
  {
    id: 3,
    image: "/images/falgu-river.jpg",
    alt: "Sacred Falgu River Ghats in Gaya Ji",
    badge: {
      hi: "पवित्र फल्गु नदी • अंतःसलिला",
      en: "Holy Falgu River • Antarsalila",
      bn: "পবিত্র ফল্গু নদী ঘাট • অন্তর্বাহিনী",
    },
    tag: {
      hi: "माता सीता द्वारा अनुप्राणित",
      en: "Blessed by Mata Sita",
      bn: "মাতা সীতার আশীর্বাদধন্য",
    },
    caption: {
      hi: "बालू वेदी पर पवित्र बालू पिंड एवं अंतःसलिला पावन जल से विधिपूर्वक तर्पण",
      en: "Sacred sand pinda and holy sesame water tarpan along the sanctified ghats",
      bn: "পবিত্র বালুকাবেদীতে পিণ্ড ও ফল্গু নদীর নির্মল জলে ভক্তিভরে তর্পণ",
    },
  },
  {
    id: 4,
    image: "/images/akshayavat.jpg",
    alt: "Immortal Akshayavat Tree in Gaya Ji",
    badge: {
      hi: "अमर अक्षयवट • सुफल वेदी",
      en: "Immortal Akshayavat • Suphal Vedi",
      bn: "অমর অক্ষয়বট • সুফল বেদী",
    },
    tag: {
      hi: "अक्षय पुण्य का वरदान",
      en: "Eternal Suphal Blessing",
      bn: "অক্ষয় পুণ্যের আশীর্বাদ",
    },
    caption: {
      hi: "गया तीर्थ का अंतिम एवं पूर्ण सुफल संकल्प — पितृ तृप्ति का अमर आशीष",
      en: "The culminating Suphal blessing ensuring eternal fulfillment of ancestors",
      bn: "গয়া তীর্থের অন্তিম ও পূর্ণ সুফল সঙ্কল্প — পূর্বপুরুষদের অমর শান্তি",
    },
  },
  {
    id: 5,
    image: "/images/pind-daan-1day.jpg",
    alt: "Traditional Vedic Pind Daan Rituals",
    badge: {
      hi: "शास्त्रोक्त वैदिक अनुष्ठान",
      en: "Authentic Vedic Ceremonies",
      bn: "শাস্ত্রীয় বৈদিক অনুষ্ঠান",
    },
    tag: {
      hi: "सम्पूर्ण वैदिक व्यवस्था",
      en: "Complete Ritual Coordination",
      bn: "সম্পূর্ণ বৈদিক সুব্যবস্থা",
    },
    caption: {
      hi: "शुद्ध सामग्री, व्यक्तिगत सहायता एवं शांत वातावरण में सम्पूर्ण श्राद्ध कर्म",
      en: "Pure ritual items, personal coordination, and peaceful ancestral shraddh",
      bn: "বিশুদ্ধ পূজা সামগ্রী, ব্যক্তিগত সহায়তা ও শান্ত পরিবেশে সম্পূর্ণ শ্রাদ্ধ কর্ম",
    },
  },
];

export function HeroSection() {
  const { language } = useLanguage();
  const [panditModalOpen, setPanditModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  // Auto-advance slider every 4.5 seconds when not hovered
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  const slide = HERO_SLIDES[currentSlide];

  return (
    <section className="relative overflow-hidden bg-[#FAF8F5] pt-6 pb-12 sm:pt-10 sm:pb-16 lg:pt-14 lg:pb-20 border-b border-[#E8E2D5]">
      
      {/* Background Subtle Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(#9C7A3C_0.6px,transparent_0.6px)] [background-size:24px_24px] opacity-15 pointer-events-none" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-12 items-center">
          
          {/* Top Column on Mobile / Right Column on Desktop: 5-Photo Auto-Sliding Frame */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div
              className="relative mx-auto max-w-md lg:max-w-none group select-none"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              
              {/* Photo Frame Container */}
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-[#E8E2D5] bg-[#241812] shadow-2xl relative">
                
                {/* Images Layer with Cross-Fade */}
                <div className="relative h-64 sm:h-80 lg:h-[460px] w-full overflow-hidden bg-[#1E140F]">
                  {HERO_SLIDES.map((item, idx) => (
                    <div
                      key={item.id}
                      className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                        idx === currentSlide ? "opacity-100 z-10 scale-100" : "opacity-0 z-0 scale-105 pointer-events-none"
                      }`}
                    >
                      <img
                        src={item.image}
                        alt={item.alt}
                        className="w-full h-full object-cover object-center transform transition-transform duration-7000 ease-out"
                        style={{
                          transform: idx === currentSlide ? "scale(1.04)" : "scale(1)",
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1E140F]/95 via-[#1E140F]/30 to-transparent" />
                    </div>
                  ))}
                </div>

                {/* Top Badge Ribbon */}
                <div className="absolute top-3 left-3 right-3 z-20 flex items-center justify-between pointer-events-none">
                  <span className="bg-[#241812]/90 backdrop-blur-md border border-[#DFC07C]/50 text-[#DFC07C] text-[10px] sm:text-xs font-semibold px-3 py-1 rounded-full shadow-md flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-[#DFC07C]" />
                    <span>{slide.badge[language] || slide.badge.en}</span>
                  </span>
                  
                  {/* Photo Counter */}
                  <span className="bg-[#241812]/85 backdrop-blur-md border border-white/10 text-white/90 text-[10px] sm:text-xs font-mono font-semibold px-2 py-0.5 rounded-full">
                    {currentSlide + 1} / {HERO_SLIDES.length}
                  </span>
                </div>

                {/* Navigation Arrows (Visible on Hover / Mobile Touch) */}
                <button
                  onClick={prevSlide}
                  className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-[#241812]/80 hover:bg-[#241812] border border-[#DFC07C]/40 text-white flex items-center justify-center transition-all opacity-80 hover:opacity-100 focus:outline-none active:scale-95 shadow-lg"
                  aria-label="Previous Slide"
                >
                  <ChevronLeft className="w-4 h-4 text-[#DFC07C]" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-[#241812]/80 hover:bg-[#241812] border border-[#DFC07C]/40 text-white flex items-center justify-center transition-all opacity-80 hover:opacity-100 focus:outline-none active:scale-95 shadow-lg"
                  aria-label="Next Slide"
                >
                  <ChevronRight className="w-4 h-4 text-[#DFC07C]" />
                </button>

                {/* Bottom Caption Bar */}
                <div className="absolute bottom-3 left-3.5 right-3.5 sm:bottom-4 sm:left-4 sm:right-4 z-20 text-white text-left">
                  <span className="text-[10px] sm:text-[11px] font-semibold text-[#DFC07C] uppercase tracking-wider block mb-1">
                    {slide.tag[language] || slide.tag.en}
                  </span>
                  <p className="font-serif text-xs sm:text-base font-bold text-white leading-snug line-clamp-2">
                    {slide.caption[language] || slide.caption.en}
                  </p>

                  {/* 5 Dots Indicator */}
                  <div className="flex items-center gap-1.5 mt-2.5">
                    {HERO_SLIDES.map((_, dotIdx) => (
                      <button
                        key={dotIdx}
                        onClick={() => setCurrentSlide(dotIdx)}
                        aria-label={`Go to slide ${dotIdx + 1}`}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          dotIdx === currentSlide
                            ? "w-6 bg-[#DFC07C]"
                            : "w-2 bg-white/40 hover:bg-white/70"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Classic Gold Corner Accent */}
              <div className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 w-full h-full border border-[#9C7A3C]/30 rounded-2xl sm:rounded-3xl -z-10 pointer-events-none hidden sm:block" />
            </div>
          </div>

          {/* Bottom Column on Mobile / Left Column on Desktop: Authentic Traditional Typography & Content */}
          <div className="lg:col-span-7 flex flex-col text-left order-2 lg:order-1">
            
            {/* Shloka / Vedic Invocation Badge */}
            <div className="inline-flex items-center gap-2 self-start bg-[#FAF5E6] border border-[#DFC07C]/50 px-3.5 py-1.5 rounded-full mb-3.5 sm:mb-4 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#B85014] animate-pulse" />
              <span className="font-serif italic text-xs sm:text-sm text-[#8C6D32] font-semibold tracking-wide">
                ॥ ॐ विष्णवे नमः • श्री गया तीर्थ महात्म्य ॥
              </span>
            </div>

            {/* Main Title */}
            <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#241812] tracking-tight leading-[1.18] sm:leading-[1.12] mb-3 sm:mb-4">
              {language === "hi" ? (
                <>
                  गया जी तीर्थ में <br className="hidden sm:inline" />
                  <span className="text-[#B85014]">शास्त्रोक्त पिंडदान</span> एवं श्राद्ध कर्म
                </>
              ) : language === "bn" ? (
                <>
                  পবিত্র গয়া জী তীর্থে <br className="hidden sm:inline" />
                  <span className="text-[#B85014]">শাস্ত্রীয় পিণ্ডদান</span> ও বৈদিক শ্রাদ্ধ
                </>
              ) : (
                <>
                  Sacred Gaya Ji <br className="hidden sm:inline" />
                  <span className="text-[#B85014]">Pind Daan &amp; Vedic Rites</span>
                </>
              )}
            </h1>

            {/* Calm, Reverent Description */}
            <p className="text-sm sm:text-base lg:text-lg text-[#5C4D44] leading-relaxed mb-5 sm:mb-6 max-w-xl font-normal">
              {language === "hi"
                ? "प्रामाणिक गयावाल तीर्थ पुरोहितों के सानिध्य में फल्गु नदी, विष्णुपद मंदिर एवं अक्षयवट पर अपने पितरों की तृप्ति व मोक्ष हेतु विधिपूर्वक पिंडदान संपन्न कराएं। बिना किसी परेशानी और पूर्ण पारदर्शिता के साथ।"
                : language === "bn"
                ? "প্রমাণিত গয়াবাল তীর্থ পুরোহিতদের পরিচালনায় ফল্গু নদী, বিষ্ণুপদ মন্দির ও অক্ষয়বটে আপনার পূর্বপুরুষদের শান্তির জন্য নিষ্ঠার সাথে পিণ্ডদান সম্পন্ন করুন।"
                : "Complete your family's sacred ancestral rites at Falgu River, Vishnupad Sanctum, and Akshayavat under the direct guidance of verified hereditary Gayawal Purohits. Respectful, transparent, and fully coordinated."}
            </p>

            {/* 4 Clean Key Trust Highlights */}
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3 mb-5 sm:mb-7 text-xs sm:text-sm text-[#4A3E38]">
              <div className="flex items-center gap-2 p-2.5 sm:p-3 rounded-xl bg-white border border-[#E8E2D5] shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-[#B85014] flex-shrink-0" />
                <span className="font-semibold text-[#241812] text-[11px] sm:text-xs">
                  {language === "hi"
                    ? "प्रमाणित गयावाल पुरोहित"
                    : language === "bn"
                    ? "প্রমাণিত গয়াবাল পুরোহিত"
                    : "Verified Teerth Pandits"}
                </span>
              </div>
              <div className="flex items-center gap-2 p-2.5 sm:p-3 rounded-xl bg-white border border-[#E8E2D5] shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-[#B85014] flex-shrink-0" />
                <span className="font-semibold text-[#241812] text-[11px] sm:text-xs">
                  {language === "hi"
                    ? "शास्त्रोक्त वैदिक संकल्प"
                    : language === "bn"
                    ? "শাস্ত্রীয় গোত্র সঙ্কল্প"
                    : "Authentic Gotra Sankalp"}
                </span>
              </div>
              <div className="flex items-center gap-2 p-2.5 sm:p-3 rounded-xl bg-white border border-[#E8E2D5] shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-[#B85014] flex-shrink-0" />
                <span className="font-semibold text-[#241812] text-[11px] sm:text-xs">
                  {language === "hi"
                    ? "वरिष्ठ नागरिक सुविधा"
                    : language === "bn"
                    ? "প্রবীণদের বিশেষ যত্ন"
                    : "Senior Citizen Care"}
                </span>
              </div>
              <div className="flex items-center gap-2 p-2.5 sm:p-3 rounded-xl bg-white border border-[#E8E2D5] shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-[#B85014] flex-shrink-0" />
                <span className="font-semibold text-[#241812] text-[11px] sm:text-xs">
                  {language === "hi"
                    ? "शून्य ऑनलाइन अग्रिम"
                    : language === "bn"
                    ? "কোনো অনলাইন অগ্রিম নেই"
                    : "Zero Online Upfront"}
                </span>
              </div>
            </div>

            {/* Actions: Primary & Secondary */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <Link
                href="/request-booking"
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-[#241812] hover:bg-[#38261D] text-[#FAF8F5] font-semibold text-xs sm:text-sm tracking-wide transition-all shadow-md active:scale-98 text-center"
              >
                <span>
                  {language === "hi"
                    ? "तीर्थ यात्रा का अनुरोध करें"
                    : language === "bn"
                    ? "বুকিং অনুরোধ পাঠান"
                    : "Request Pilgrimage Booking"}
                </span>
                <ArrowRight className="w-4 h-4 text-[#DFC07C]" />
              </Link>

              <button
                onClick={() => setPanditModalOpen(true)}
                className="inline-flex items-center justify-center gap-2.5 px-5 sm:px-7 py-3.5 sm:py-4 rounded-xl bg-white border border-[#9C7A3C]/50 text-[#241812] font-semibold text-xs sm:text-sm hover:bg-[#FAF5E6] transition-all text-center shadow-xs"
              >
                <Phone className="w-4 h-4 text-[#B85014]" />
                <span>
                  {language === "hi"
                    ? "पंडित जी से बात करें"
                    : language === "bn"
                    ? "পণ্ডিত জির সাথে কথা বলুন"
                    : "Talk to a Teerth Pandit"}
                </span>
              </button>
            </div>

            {/* Local Coordinator Helpline Line */}
            <div className="flex items-center gap-2 text-xs text-[#7A6F67] mt-3 sm:mt-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#9C7A3C]" />
              <span>
                {language === "hi"
                  ? "समन्वयक सहायता: +91 90973 27088 • सुबह 7:00 से रात 9:00 बजे तक"
                  : language === "bn"
                  ? "সমন্বয়ক হেল্পলাইন: +91 90973 27088 • সকাল ৭:০০ থেকে রাত ৯:০০ টা পর্যন্ত"
                  : "Coordinator Helpline: +91 90973 27088 • 7:00 AM to 9:00 PM Daily"}
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

