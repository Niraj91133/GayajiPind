"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, MessageCircle, Menu, X, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/components/common/LanguageContext";
import { LotusMotif } from "@/components/common/MotifDividers";
import { TalkToPanditModal } from "@/components/common/TalkToPanditModal";

export function Header() {
  const pathname = usePathname();
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [panditModalOpen, setPanditModalOpen] = useState(false);

  const navLinks = [
    { href: "/pind-daan", label: language === "hi" ? "पिंडदान विधि" : "Pind Daan" },
    { href: "/rituals", label: language === "hi" ? "अनुष्ठान" : "Rituals" },
    { href: "/guide", label: language === "hi" ? "गया जी गाइड" : "Gaya Ji Guide" },
    { href: "/pandits", label: language === "hi" ? "तीर्थ पुरोहित" : "Pandits" },
    { href: "/about", label: language === "hi" ? "हमारे बारे में" : "About" },
    { href: "/help", label: language === "hi" ? "सहायता" : "Help" },
  ];

  return (
    <>
      {/* Top Reassurance Strip */}
      <div className="bg-[#241812] text-[#F3EFE6] text-xs py-2 px-4 border-b border-[#9C7A3C]/20 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3 text-[#D8D0C0]">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#DFC07C]" />
              <strong className="text-white font-medium">
                {language === "hi" ? "विष्णुपद एवं फल्गु तीर्थ" : "Vishnupad & Falgu Kshetra, Gaya Ji"}
              </strong>
              — {language === "hi" ? "प्रमाणित गयावाल पुरोहित सेवा" : "Authentic Vedic Pilgrimage Coordination"}
            </span>
          </div>
          <div className="flex items-center gap-6 text-[#D8D0C0]">
            <Link href="/booking-status" className="hover:text-white transition-colors">
              {language === "hi" ? "बुकिंग स्थिति जांचें" : "Track Booking Status"}
            </Link>
            <button
              onClick={() => setPanditModalOpen(true)}
              className="text-[#DFC07C] hover:underline font-medium"
            >
              {language === "hi" ? "पंडित जी से बात करें" : "Talk to a Pandit"}
            </button>
            <a
              href="tel:+919431287650"
              className="hover:text-white transition-colors flex items-center gap-1.5 font-medium"
            >
              <Phone className="w-3 h-3 text-[#DFC07C]" />
              <span>+91 94312 87650</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-40 bg-[#FAF8F5]/98 backdrop-blur-md border-b border-[#E8E2D5] transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Authentic Traditional Logo */}
            <Link href="/" className="flex items-center gap-3 group text-left">
              <div className="w-10 h-10 rounded-full bg-[#241812] border border-[#9C7A3C]/50 flex items-center justify-center text-[#DFC07C] group-hover:scale-105 transition-transform shadow-sm">
                <LotusMotif className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-tight text-[#241812] leading-none">
                  Gayaji<span className="text-[#B85014]">Pind</span>
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[#9C7A3C] font-semibold mt-0.5">
                  {language === "hi" ? "तीर्थ समन्वयक • गया जी" : "Pilgrimage Coordinator • Gaya Ji"}
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-sm tracking-wide transition-colors ${
                      isActive
                        ? "text-[#B85014] font-bold border-b-2 border-[#B85014] pb-1"
                        : "text-[#4A3E38] hover:text-[#241812] font-medium"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right Side Actions */}
            <div className="hidden sm:flex items-center gap-4">
              {/* Language Switcher */}
              <div className="flex items-center rounded-full bg-[#F4EFE6] border border-[#E8E2D5] p-1 text-xs font-semibold text-[#241812]">
                <button
                  onClick={() => setLanguage("hi")}
                  className={`px-3 py-1 rounded-full transition-all ${
                    language === "hi"
                      ? "bg-[#241812] text-[#FAF8F5] shadow-sm"
                      : "text-[#7A6F67] hover:text-[#241812]"
                  }`}
                >
                  हिंदी
                </button>
                <button
                  onClick={() => setLanguage("en")}
                  className={`px-3 py-1 rounded-full transition-all ${
                    language === "en"
                      ? "bg-[#241812] text-[#FAF8F5] shadow-sm"
                      : "text-[#7A6F67] hover:text-[#241812]"
                  }`}
                >
                  EN
                </button>
              </div>

              {/* Status Tracker link */}
              <Link
                href="/booking-status"
                className="hidden xl:inline-flex items-center px-3 py-2 text-xs font-medium text-[#4A3E38] hover:text-[#241812] transition-colors"
              >
                {language === "hi" ? "स्थिति जांचें" : "Track Status"}
              </Link>

              {/* Primary CTA */}
              <Link
                href="/request-booking"
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[#241812] hover:bg-[#38261D] text-[#FAF8F5] text-xs font-semibold uppercase tracking-wider transition-all shadow-sm"
              >
                {language === "hi" ? "बुकिंग अनुरोध" : "Request Booking"}
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <div className="flex items-center rounded-full bg-[#F4EFE6] border border-[#E8E2D5] p-0.5 text-xs">
                <button
                  onClick={() => setLanguage(language === "en" ? "hi" : "en")}
                  className="px-2.5 py-0.5 font-semibold text-[#241812]"
                >
                  {language === "en" ? "हिंदी" : "EN"}
                </button>
              </div>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl bg-[#F4EFE6] border border-[#E8E2D5] text-[#241812]"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FAF8F5] border-b border-[#E8E2D5] px-4 pt-2 pb-6 shadow-xl animate-fade-in text-left">
            <div className="flex flex-col gap-2 py-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-serif font-bold text-[#241812] py-2 px-3 rounded-lg hover:bg-[#F4EFE6] transition-colors"
                >
                  {link.label}
                </Link>
              ))}

              <div className="pt-3 border-t border-[#E8E2D5] flex flex-col gap-2">
                <Link
                  href="/booking-status"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xs font-medium text-[#4A3E38] py-2 px-3 rounded-lg hover:bg-[#F4EFE6] flex items-center justify-between"
                >
                  <span>{language === "hi" ? "बुकिंग स्थिति जांचें" : "Track Request Status"}</span>
                  <span className="text-[10px] bg-[#E8E2D5] px-2 py-0.5 rounded font-mono text-[#241812]">GP-XXXXXX</span>
                </Link>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setPanditModalOpen(true);
                  }}
                  className="w-full text-left text-xs font-semibold text-[#B85014] py-2 px-3 rounded-lg hover:bg-[#FCE3CE]/50"
                >
                  {language === "hi" ? "पंडित जी से बात करें" : "Talk to a Teerth Pandit"}
                </button>

                <Link
                  href="/request-booking"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full mt-2 text-center py-3 rounded-full bg-[#241812] text-white font-semibold text-xs uppercase tracking-wider shadow-md"
                >
                  {language === "hi" ? "बुकिंग अनुरोध भेजें" : "Request Booking"}
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Pandit Guidance Modal */}
      <TalkToPanditModal
        isOpen={panditModalOpen}
        onClose={() => setPanditModalOpen(false)}
      />
    </>
  );
}
