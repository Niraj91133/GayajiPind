"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Clock,
  MapPin,
  ShieldCheck,
  CheckCircle2,
  PlusCircle,
  XCircle,
  HelpCircle,
  ArrowRight,
  Phone,
  ChevronDown,
  Sparkles,
  Users
} from "lucide-react";
import { Ritual } from "@/types";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SacredDivider } from "@/components/common/MotifDividers";
import { TalkToPanditModal } from "@/components/common/TalkToPanditModal";

export function RitualDetailView({ ritual }: { ritual: Ritual }) {
  const [panditModalOpen, setPanditModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-[#FAF7F2] py-6 lg:py-10">
      <Breadcrumbs
        items={[
          { label: "Rituals", href: "/rituals" },
          { label: ritual.name }
        ]}
      />

      {/* 01 Ritual Hero (Rule #23) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-white rounded-3xl border border-[#DFC07C]/60 overflow-hidden shadow-card grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-center text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF5E6] border border-[#DFC07C] text-[#B88E3E] text-xs font-semibold uppercase tracking-wider mb-4 self-start">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Gaya Ji Vedic Ritual</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2A1810] tracking-tight leading-tight mb-3">
              {ritual.name}
            </h1>

            <p className="text-sm sm:text-base text-[#5C4033] leading-relaxed mb-6 font-normal">
              {ritual.tagline}
            </p>

            {/* Core Info Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
              <div className="p-3 rounded-xl bg-[#FAF7F2] border border-[#E5DCCE]">
                <span className="text-[11px] text-[#6E6963] block">Duration</span>
                <strong className="text-xs sm:text-sm text-[#2A1810] font-bold">{ritual.duration}</strong>
              </div>
              <div className="p-3 rounded-xl bg-[#FAF7F2] border border-[#E5DCCE]">
                <span className="text-[11px] text-[#6E6963] block">Location</span>
                <strong className="text-xs sm:text-sm text-[#2A1810] font-bold">Gaya Ji Kshetra</strong>
              </div>
              <div className="p-3 rounded-xl bg-[#FAF7F2] border border-[#E5DCCE] col-span-2 sm:col-span-1">
                <span className="text-[11px] text-[#6E6963] block">Guidance</span>
                <strong className="text-xs sm:text-sm text-[#2A1810] font-bold">Verified Purohit</strong>
              </div>
            </div>

            {/* CTAs (No public price) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <Link
                href={`/request-booking?ritual=${ritual.slug}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#C25E1A] to-[#9A450E] text-white font-bold text-sm sm:text-base shadow-lg hover:brightness-105 active:scale-95 transition-all text-center"
              >
                <span>Request Booking</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <button
                onClick={() => setPanditModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-[#FAF5E6] border border-[#DFC07C] text-[#2A1810] font-semibold text-sm hover:bg-[#F5EFE6] transition-all text-center"
              >
                <Phone className="w-4 h-4 text-[#C25E1A]" />
                <span>Talk to a Pandit</span>
              </button>
            </div>
          </div>

          {/* Right Hero Image */}
          <div className="lg:col-span-5 relative bg-[#2A1810] min-h-[300px]">
            <img
              src={ritual.image}
              alt={ritual.name}
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white text-xs">
              <div className="flex items-center gap-1.5 text-[#DFC07C] font-semibold mb-1">
                <ShieldCheck className="w-4 h-4" />
                <span>Verified Teerth Pandit Lineage</span>
              </div>
              <p className="text-[#D2C5B0]">
                All mantras & sankalp performed according to your family Gotra & Shastras.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 02 "What is this?" & 03 "Who is it for?" (Rules #24, #25) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* What is this? */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-[#E5DCCE] p-6 sm:p-8 shadow-card text-left">
            <h2 className="font-serif text-2xl font-bold text-[#2A1810] mb-4 pb-3 border-b border-[#E5DCCE]">
              What is this Ritual?
            </h2>
            <p className="text-sm sm:text-base text-[#5C4033] leading-relaxed mb-6">
              {ritual.fullDescription}
            </p>

            <div className="p-4 rounded-2xl bg-[#FAF5E6] border border-[#DFC07C]/50 text-xs text-[#5C4033] leading-relaxed">
              <strong>Vedic Significance:</strong> Gaya Ji is sanctified as the spiritual intersection where offering Pinda delivers departed ancestors across 21 generations into eternal peace (Moksha).
            </div>
          </div>

          {/* Who is it for? */}
          <div className="lg:col-span-5 bg-white rounded-3xl border border-[#E5DCCE] p-6 sm:p-8 shadow-card text-left">
            <h2 className="font-serif text-2xl font-bold text-[#2A1810] mb-4 pb-3 border-b border-[#E5DCCE]">
              Who is it For?
            </h2>
            <p className="text-xs text-[#6E6963] mb-4">
              This sacred ritual is traditionally recommended for:
            </p>
            <ul className="space-y-3 text-xs sm:text-sm text-[#423E3A]">
              {ritual.whoIsItFor.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#FAF5E6] text-[#C25E1A] font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* 04 What Happens? (Timeline - Rule #26) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-white rounded-3xl border border-[#E5DCCE] p-6 sm:p-10 shadow-card text-left">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2A1810] mb-2">
            How the Ritual Unfolds
          </h2>
          <p className="text-xs sm:text-sm text-[#6E6963] mb-8">
            Step-by-step sacred timeline guided by your assigned Teerth Pandit.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ritual.whatHappens.map((stage, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#E5DCCE] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-8 h-8 rounded-full bg-[#2A1810] text-[#DFC07C] font-serif font-bold text-xs flex items-center justify-center">
                      0{idx + 1}
                    </span>
                    {stage.location && (
                      <span className="text-[11px] font-semibold text-[#B88E3E] bg-white px-2.5 py-0.5 rounded-full border border-[#E5DCCE]">
                        📍 {stage.location}
                      </span>
                    )}
                  </div>
                  <h3 className="font-serif text-base font-bold text-[#2A1810] mb-2">
                    {stage.title}
                  </h3>
                  <p className="text-xs text-[#5C4033] leading-relaxed">
                    {stage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 05 What's Included & Optional (Rules #27, #28) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Included */}
          <div className="bg-white rounded-3xl border-2 border-[#DFC07C]/60 p-6 shadow-card text-left">
            <div className="flex items-center gap-2 pb-3 mb-4 border-b border-[#E5DCCE]">
              <CheckCircle2 className="w-5 h-5 text-[#25D366]" />
              <h3 className="font-serif text-lg font-bold text-[#2A1810]">Included</h3>
            </div>
            <ul className="space-y-3 text-xs text-[#423E3A]">
              {ritual.included.map((inc, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#25D366] flex-shrink-0 mt-0.5" />
                  <span>{inc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Optional */}
          <div className="bg-white rounded-3xl border border-[#E5DCCE] p-6 shadow-card text-left">
            <div className="flex items-center gap-2 pb-3 mb-4 border-b border-[#E5DCCE]">
              <PlusCircle className="w-5 h-5 text-[#C25E1A]" />
              <h3 className="font-serif text-lg font-bold text-[#2A1810]">Optional Add-ons</h3>
            </div>
            <ul className="space-y-3 text-xs text-[#423E3A]">
              {ritual.optional.map((opt, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <PlusCircle className="w-3.5 h-3.5 text-[#C25E1A] flex-shrink-0 mt-0.5" />
                  <span>{opt}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Excluded */}
          <div className="bg-[#F5EFE6] rounded-3xl border border-[#E5DCCE] p-6 shadow-sm text-left">
            <div className="flex items-center gap-2 pb-3 mb-4 border-b border-[#E5DCCE]">
              <XCircle className="w-5 h-5 text-[#6E6963]" />
              <h3 className="font-serif text-lg font-bold text-[#2A1810]">Not Included</h3>
            </div>
            <ul className="space-y-3 text-xs text-[#5C4033]">
              {ritual.notIncluded.map((notInc, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <XCircle className="w-3.5 h-3.5 text-[#9E9085] flex-shrink-0 mt-0.5" />
                  <span>{notInc}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* 06 Preparation & Guidelines */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-[#FAF5E6] rounded-3xl border border-[#DFC07C]/50 p-6 sm:p-8 text-left">
          <h3 className="font-serif text-xl font-bold text-[#2A1810] mb-3">
            How to Prepare for This Ritual
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#5C4033]">
            {ritual.preparation.map((prep, idx) => (
              <div key={idx} className="flex items-start gap-2 bg-white/70 p-3 rounded-xl border border-[#E5DCCE]">
                <span className="text-[#C25E1A] font-bold">✓</span>
                <span>{prep}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 07 FAQs Accordion */}
      {ritual.faqs && ritual.faqs.length > 0 && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="text-center mb-8">
            <h3 className="font-serif text-2xl font-bold text-[#2A1810]">
              Questions on {ritual.name}
            </h3>
          </div>
          <div className="space-y-3">
            {ritual.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-white border border-[#E5DCCE] overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 text-left"
                  >
                    <span className="font-serif text-sm sm:text-base font-bold text-[#2A1810]">
                      {faq.question}
                    </span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180 text-[#C25E1A]" : "text-[#6E6963]"}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-[#5C4033] leading-relaxed border-t border-[#E5DCCE]/40">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* 08 Final CTA Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#2A1810] text-[#FAF7F2] text-center shadow-xl">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-3">
            Ready to Arrange {ritual.name}?
          </h3>
          <p className="text-xs sm:text-sm text-[#D2C5B0] max-w-xl mx-auto mb-6">
            Submit your preferred date and requirements. Our dedicated coordinator will contact you directly to confirm all arrangements. Zero online payment required.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href={`/request-booking?ritual=${ritual.slug}`}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-[#C25E1A] to-[#9A450E] text-white font-bold text-sm shadow-md hover:brightness-105 transition-all"
            >
              Request Booking for {ritual.name}
            </Link>
            <button
              onClick={() => setPanditModalOpen(true)}
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white/10 border border-[#DFC07C] text-white font-semibold text-sm hover:bg-white/20 transition-all"
            >
              Talk to a Pandit
            </button>
          </div>
        </div>
      </section>

      <TalkToPanditModal
        isOpen={panditModalOpen}
        onClose={() => setPanditModalOpen(false)}
        defaultRitual={ritual.name}
      />
    </div>
  );
}
