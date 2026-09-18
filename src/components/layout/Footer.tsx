"use client";

import React from "react";
import Link from "next/link";
import { Phone, MessageCircle, MapPin, Mail, ShieldCheck, Heart, ArrowRight } from "lucide-react";
import { useLanguage } from "@/components/common/LanguageContext";
import { LotusMotif, SacredDivider } from "@/components/common/MotifDividers";
import { CITIES_DATA } from "@/data/cities";
import { NRI_COUNTRIES_DATA } from "@/data/nriCountries";
import { GayaJiPindLogo } from "@/components/common/GayaJiPindLogo";

export function Footer() {
  const { language } = useLanguage();

  return (
    <footer className="bg-[#241812] text-[#FAF8F5] pt-16 pb-24 md:pb-12 border-t border-[#9C7A3C]/30 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12 text-left">
          
          {/* Col 1: Brand & Philosophy */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <GayaJiPindLogo showTagline={true} size="md" variant="light" />
            </Link>

            <p className="text-xs sm:text-sm text-[#D8D0C0] leading-relaxed mb-6 max-w-md">
              {language === "hi"
                ? "गयाजीपिंड परिवारों को गया जी (बिहार) में पिंडदान, त्रिपिंडी श्राद्ध एवं नारायण बलि जैसे पवित्र पिंडदान सेवाओं को प्रमाणित तीर्थ पुरोहितों एवं व्यक्तिगत सहायता के साथ संपन्न कराने में सहायता करता है।"
                : language === "bn"
                ? "গয়াজীপিণ্ড পরিবারবর্গকে গয়া জী (বিহার)-তে পিণ্ডদান, ত্রিপিন্ডী শ্রাদ্ধ ও নারায়ণ বলির মতো পবিত্র বৈদিক অনুষ্ঠান বিশ্বস্ত পুরোহিত ও ব্যক্তিগত সহায়তার মাধ্যমে সম্পন্ন করতে সাহায্য করে।"
                : "GayajiPind is a traditional digital pilgrimage coordinator dedicated to helping families arrange sacred Pind Daan and ancestral rites in Gaya Ji, Bihar with verified Teerth Pandits and dedicated human coordinators."}
            </p>

            <div className="flex flex-col gap-2.5 text-xs text-[#D8D0C0]">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#DFC07C] flex-shrink-0" />
                <span>Vishnupad Temple Kshetra, Chandrachur Ghat, Gaya Ji, Bihar 823001</span>
              </div>
              <a href="tel:+919097327088" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-[#DFC07C] flex-shrink-0" />
                <span>+91 90973 27088 (Helpline & Coordinator)</span>
              </a>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#DFC07C] flex-shrink-0" />
                <span>care@gayajipindsewa.com</span>
              </div>
            </div>
          </div>

          {/* Col 2: Core Rituals */}
          <div>
            <h4 className="font-serif text-base font-semibold text-[#DFC07C] mb-4">
              {language === "hi" ? "पवित्र पिंडदान" : language === "bn" ? "পবিত্র পিণ্ডদান" : "Sacred Rituals"}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#D8D0C0]">
              <li>
                <Link href="/rituals/1-day-pind-daan" className="hover:text-white transition-colors">
                  {language === "hi" ? "1-दिवसीय पिंडदान" : language === "bn" ? "১-দিনের পিণ্ডদান" : "1-Day Pind Daan"}
                </Link>
              </li>
              <li>
                <Link href="/rituals/3-day-complete-pind-daan" className="hover:text-white transition-colors">
                  {language === "hi" ? "3-दिवसीय सम्पूर्ण पिंडदान" : language === "bn" ? "৩-দিনের সম্পূর্ণ পিণ্ডদান" : "3-Day Complete Pilgrimage"}
                </Link>
              </li>
              <li>
                <Link href="/rituals/tripindi-shradh" className="hover:text-white transition-colors">
                  {language === "hi" ? "त्रिपिंडी श्राद्ध" : language === "bn" ? "ত্রিপিন্ডী শ্রাদ্ধ" : "Tripindi Shradh"}
                </Link>
              </li>
              <li>
                <Link href="/rituals/narayan-bali" className="hover:text-white transition-colors">
                  {language === "hi" ? "नारायण बलि" : language === "bn" ? "নারায়ণ বলি" : "Narayan Bali"}
                </Link>
              </li>
              <li>
                <Link href="/pind-daan" className="hover:text-white transition-colors">
                  {language === "hi" ? "पिंडदान विधि एवं महत्व" : language === "bn" ? "পিণ্ডদান বিধি ও গুরুত্ব" : "Pind Daan Vidhi Guide"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Gaya Ji Guide & Places */}
          <div>
            <h4 className="font-serif text-base font-semibold text-[#DFC07C] mb-4">
              {language === "hi" ? "गया जी तीर्थ गाइड" : language === "bn" ? "গয়া তীর্থ গাইড" : "Gaya Ji Guide"}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#D8D0C0]">
              <li>
                <Link href="/guide/vishnupad" className="hover:text-white transition-colors">
                  {language === "hi" ? "विष्णुपद मंदिर" : language === "bn" ? "বিষ্ণুপদ মন্দির" : "Vishnupad Mandir"}
                </Link>
              </li>
              <li>
                <Link href="/guide/falgu-river" className="hover:text-white transition-colors">
                  {language === "hi" ? "पवित्र फल्गु नदी" : language === "bn" ? "পবিত্র ফল্গু নদী" : "Sacred Falgu River"}
                </Link>
              </li>
              <li>
                <Link href="/guide/akshayavat" className="hover:text-white transition-colors">
                  {language === "hi" ? "अमर अक्षयवट वृक्ष" : language === "bn" ? "অমর অক্ষয়বট বৃক্ষ" : "Akshayavat Vriksh"}
                </Link>
              </li>
              <li>
                <Link href="/guide/pretshila" className="hover:text-white transition-colors">
                  {language === "hi" ? "प्रेतशिला पर्वत" : language === "bn" ? "প্রেতশিলা পর্বত" : "Pretshila Hill"}
                </Link>
              </li>
              <li>
                <Link href="/guide/45-vedi" className="hover:text-[#DFC07C] font-medium transition-colors">
                  {language === "hi" ? "45 पवित्र वेदियों की सूची" : language === "bn" ? "৪৫টি পবিত্র বেদীর তালিকা" : "45 Sacred Vedis Directory"}
                </Link>
              </li>
              <li>
                <Link href="/guide/how-to-reach" className="hover:text-white transition-colors">
                  {language === "hi" ? "गया जी कैसे पहुँचें" : language === "bn" ? "কীভাবে গয়া পৌঁছাবেন" : "How to Reach Gaya Ji"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Trust & Support */}
          <div>
            <h4 className="font-serif text-base font-semibold text-[#DFC07C] mb-4">
              {language === "hi" ? "विश्वास एवं सहायता" : language === "bn" ? "বিশ্বাস ও সহায়তা" : "Trust & Support"}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#D8D0C0]">
              <li>
                <Link href="/pandits" className="hover:text-white transition-colors">
                  {language === "hi" ? "प्रमाणित तीर्थ पुरोहित" : language === "bn" ? "প্রমাণিত পুরোহিতমণ্ডলী" : "Our Verified Pandits"}
                </Link>
              </li>
              <li>
                <Link href="/trust" className="hover:text-white transition-colors">
                  {language === "hi" ? "विश्वसनीयता एवं नीति" : language === "bn" ? "স্বচ্ছতা ও নিয়মাবলী" : "Trust & Transparency"}
                </Link>
              </li>
              <li>
                <Link href="/services/senior-assistance" className="hover:text-white transition-colors">
                  {language === "hi" ? "वरिष्ठ नागरिक सेवा" : language === "bn" ? "প্রবীণদের সহায়তা" : "Senior Citizen Assistance"}
                </Link>
              </li>
              <li>
                <Link href="/services/hotel-assistance" className="hover:text-white transition-colors">
                  {language === "hi" ? "होटल समन्वय" : language === "bn" ? "হোটেল ব্যবস্থা" : "Hotel Coordination"}
                </Link>
              </li>
              <li>
                <Link href="/services/travel-assistance" className="hover:text-white transition-colors">
                  {language === "hi" ? "यात्रा एवं वाहन" : language === "bn" ? "যাতায়াত ও গাড়ি সেবা" : "Station/Airport Pickup"}
                </Link>
              </li>
              <li>
                <Link href="/help" className="hover:text-white transition-colors">
                  {language === "hi" ? "सहायता केंद्र" : language === "bn" ? "সাহায্য ও প্রশ্নাবলী" : "Help Center & FAQs"}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Secondary Navigation Strips: City & NRI SEO Discovery */}
        <div className="pt-8 border-t border-[#9C7A3C]/20 grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-[#D8D0C0] text-left">
          <div>
            <span className="text-[#DFC07C] font-semibold uppercase tracking-wider block mb-2">
              {language === "hi" ? "विभिन्न शहरों से पिंडदान यात्रा" : "Pind Daan from Indian Cities"}:
            </span>
            <div className="flex flex-wrap gap-x-3 gap-y-1">
              {CITIES_DATA.map((c) => (
                <Link key={c.slug} href={`/from/${c.slug}`} className="hover:text-white transition-colors underline-offset-2 hover:underline">
                  From {c.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <span className="text-[#DFC07C] font-semibold uppercase tracking-wider block mb-2">
              {language === "hi" ? "एनआरआई तीर्थ यात्रा" : "NRI Pilgrimage Support"}:
            </span>
            <div className="flex flex-wrap gap-x-3 gap-y-1">
              {NRI_COUNTRIES_DATA.map((n) => (
                <Link key={n.slug} href={`/nri/${n.slug}`} className="hover:text-white transition-colors underline-offset-2 hover:underline">
                  {n.country}
                </Link>
              ))}
              <Link href="/nri" className="text-[#DFC07C] hover:underline font-medium">
                View All NRI Guides →
              </Link>
            </div>
          </div>
        </div>

        <SacredDivider className="my-8 opacity-40" />

        {/* Bottom Disclaimer & Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#A89F95]">
          <div className="flex flex-col gap-1 text-center md:text-left">
            <p>
              © {new Date().getFullYear()} Gaya Ji Pind Sewa. Gaya ji Me Pind Daan, Shradha Aur Sewa Ke Sath.
            </p>
            <p className="text-[11px] text-[#A89F95]">
              Managed and Developed By{" "}
              <a
                href="https://www.ganeshadigiads.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#DFC07C] font-semibold hover:underline transition-colors"
              >
                GDAs - Ganesha Digital Ads
              </a>
            </p>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/trust" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/trust" className="hover:text-white transition-colors">
              Terms & Boundaries
            </Link>
            <Link href="/trust" className="hover:text-white transition-colors">
              Rescheduling
            </Link>
            <Link href="/admin" className="text-[#DFC07C] hover:underline">
              Coordinator Portal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
