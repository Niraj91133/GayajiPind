import React from "react";
import Link from "next/link";
import { Luggage, CheckCircle2, AlertCircle, ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SacredDivider } from "@/components/common/MotifDividers";

export const metadata = {
  title: "What to Bring & Wear in Gaya Ji — Pilgrim Checklist & Dress Code",
  description: "Essential checklist for pilgrims visiting Gaya Ji. Traditional attire, documents, ancestral lineage lists, and what is provided by Pandit.",
};

export default function WhatToBringPage() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] py-8 lg:py-12">
      <Breadcrumbs
        items={[
          { label: "Gaya Ji Guide", href: "/guide" },
          { label: "What to Bring & Wear" }
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2A1810]">
            What to Bring & Wear in Gaya Ji
          </h1>
          <p className="text-sm sm:text-base text-[#6E6963] mt-3 leading-relaxed">
            A practical packing and preparation checklist for a smooth, respectful pilgrimage experience.
          </p>
          <SacredDivider className="my-4" />
        </div>

        {/* 3 Columns / Sections */}
        <div className="space-y-6 mb-12 text-left">
          
          {/* 1. Attire Guidelines */}
          <div className="bg-white rounded-3xl border border-[#E5DCCE] p-6 sm:p-8 shadow-card">
            <h2 className="font-serif text-xl font-bold text-[#2A1810] mb-3">
              1. Traditional Dress Code
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-[#5C4033]">
              <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E5DCCE]">
                <strong className="block text-[#2A1810] font-bold mb-1">For Men Performing Karta Sankalp:</strong>
                White or yellow traditional Dhoti & Kurta (or unstitched white cloth). Traditional cotton clothes are most comfortable during Ghat and sanctum rites.
              </div>
              <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E5DCCE]">
                <strong className="block text-[#2A1810] font-bold mb-1">For Women & Accompanying Family:</strong>
                Traditional Saree or Salwar Kurta. Modest, comfortable cotton attire is recommended.
              </div>
            </div>
          </div>

          {/* 2. Documents & Details */}
          <div className="bg-white rounded-3xl border border-[#E5DCCE] p-6 sm:p-8 shadow-card">
            <h2 className="font-serif text-xl font-bold text-[#2A1810] mb-3">
              2. Essential Details & Documents to Carry
            </h2>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#423E3A]">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#25D366] flex-shrink-0 mt-0.5" />
                <span><strong>List of Ancestors:</strong> Paternal grandparents, maternal ancestors, departed relatives you wish to offer Pinda for.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#25D366] flex-shrink-0 mt-0.5" />
                <span><strong>Family Gotra:</strong> Note down your Gotra (if known). If unknown, don&apos;t worry—Pandit will assist on arrival.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#25D366] flex-shrink-0 mt-0.5" />
                <span><strong>Govt Photo ID:</strong> Aadhaar Card, Voter ID, or Passport for hotel check-in and security checkpoints.</span>
              </li>
            </ul>
          </div>

          {/* 3. Puja Samagri (Provided by Pandit) */}
          <div className="bg-[#FAF5E6] rounded-3xl border border-[#DFC07C]/60 p-6 sm:p-8 shadow-card">
            <h2 className="font-serif text-xl font-bold text-[#2A1810] mb-2">
              3. What You DO NOT Need to Bring (Puja Samagri)
            </h2>
            <p className="text-xs sm:text-sm text-[#5C4033] leading-relaxed mb-4">
              All sacred ritual materials are arranged fresh by our Teerth Pandit:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-[#423E3A]">
              <span className="p-2 bg-white rounded-lg border border-[#E5DCCE]">✓ Pure Barley Flour</span>
              <span className="p-2 bg-white rounded-lg border border-[#E5DCCE]">✓ Black Sesame (Til)</span>
              <span className="p-2 bg-white rounded-lg border border-[#E5DCCE]">✓ Sacred Kusha Grass</span>
              <span className="p-2 bg-white rounded-lg border border-[#E5DCCE]">✓ Gangajal & Tulsi</span>
              <span className="p-2 bg-white rounded-lg border border-[#E5DCCE]">✓ Jaggery & Honey</span>
              <span className="p-2 bg-white rounded-lg border border-[#E5DCCE]">✓ Earthen Diyas</span>
              <span className="p-2 bg-white rounded-lg border border-[#E5DCCE]">✓ Janeu (Sacred Thread)</span>
              <span className="p-2 bg-white rounded-lg border border-[#E5DCCE]">✓ Chandan & Roli</span>
            </div>
          </div>

        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/request-booking"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#C25E1A] to-[#9A450E] text-white font-bold text-sm shadow-lg hover:brightness-105 transition-all"
          >
            <span>Request Your Pilgrimage Booking</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
