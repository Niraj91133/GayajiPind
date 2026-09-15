import React from "react";
import Link from "next/link";
import { ShieldCheck, CheckCircle2, Lock, HelpCircle, FileText, Phone, ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SacredDivider } from "@/components/common/MotifDividers";

export const metadata = {
  title: "Trust, Verification & Transparency — GayajiPind",
  description: "Learn how GayajiPind ensures authentic Gayawal Pandit verification, zero hidden charges, flexible rescheduling, and total privacy for your pilgrimage.",
};

export default function TrustPage() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] py-8 lg:py-12">
      <Breadcrumbs
        items={[
          { label: "Trust & Transparency" }
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FAF5E6] border border-[#DFC07C] text-[#B88E3E] text-xs font-semibold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-[#C25E1A]" />
            <span>Our Commitment to Truth</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2A1810]">
            Trust, Verification & Transparency
          </h1>
          <p className="text-sm sm:text-base text-[#6E6963] mt-3 leading-relaxed">
            We believe a pilgrimage dedicated to ancestral peace must begin with absolute honesty, traditional reverence, and clear service boundaries.
          </p>
          <SacredDivider className="my-4" />
        </div>

        {/* 5 Core Trust Pillars */}
        <div className="space-y-6 mb-12 text-left">
          
          {/* Pillar 1: How Pandit Verification Works */}
          <div className="bg-white rounded-3xl border border-[#E5DCCE] p-6 sm:p-8 shadow-card">
            <h2 className="font-serif text-xl font-bold text-[#2A1810] mb-3">
              1. How We Verify Teerth Pandits
            </h2>
            <p className="text-xs sm:text-sm text-[#5C4033] leading-relaxed mb-4">
              Gaya Ji is served by traditional Gayawal Brahmin families with historical lineage recorded in ancient tirtha ledgers (Bahi-Khata). Every Purohit on GayajiPind:
            </p>
            <ul className="space-y-2 text-xs text-[#423E3A]">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#25D366] flex-shrink-0 mt-0.5" />
                <span>Holds verified ancestral family lineage at the Vishnupad / Falgu Tirtha sanctums.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#25D366] flex-shrink-0 mt-0.5" />
                <span>Possesses formal Sanskrit & Vedic training in Garuda Purana Shradh Vidhi.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#25D366] flex-shrink-0 mt-0.5" />
                <span>Pledges to conduct patient, unhurried rituals tailored to your family&apos;s Gotra.</span>
              </li>
            </ul>
          </div>

          {/* Pillar 2: Why There Is No Public E-commerce Pricing */}
          <div className="bg-white rounded-3xl border border-[#E5DCCE] p-6 sm:p-8 shadow-card">
            <h2 className="font-serif text-xl font-bold text-[#2A1810] mb-3">
              2. Transparent Service Details (Why No Public Checkout?)
            </h2>
            <p className="text-xs sm:text-sm text-[#5C4033] leading-relaxed mb-3">
              Vedic pilgrimage is a sacred spiritual duty, not a standardized mass commercial product. Every family has unique needs: single-day vs 3-day multi-day circuits, specific Pitru Dosha rites, hotel proximity preferences, senior citizen wheelchairs, and vehicle requirements.
            </p>
            <p className="text-xs sm:text-sm text-[#5C4033] leading-relaxed">
              <strong>Our Rule:</strong> We never charge online or ask for credit card payments through this website. Once your request is received, our coordinator calls you directly to explain all inclusions and clear service charges before any final booking is confirmed.
            </p>
          </div>

          {/* Pillar 3: Rescheduling & Flexibility Policy */}
          <div className="bg-white rounded-3xl border border-[#E5DCCE] p-6 sm:p-8 shadow-card">
            <h2 className="font-serif text-xl font-bold text-[#2A1810] mb-3">
              3. Flexible Date & Rescheduling Policy
            </h2>
            <p className="text-xs sm:text-sm text-[#5C4033] leading-relaxed">
              We understand train schedules or health circumstances may change. If you need to postpone, prepone, or change your travel dates, simply inform your assigned coordinator over WhatsApp or call. We will reschedule your Teerth Pandit and travel logistics with zero hassle.
            </p>
          </div>

          {/* Pillar 4: Privacy & Data Protection */}
          <div className="bg-white rounded-3xl border border-[#E5DCCE] p-6 sm:p-8 shadow-card">
            <h2 className="font-serif text-xl font-bold text-[#2A1810] mb-3">
              4. Privacy & Data Integrity
            </h2>
            <p className="text-xs sm:text-sm text-[#5C4033] leading-relaxed mb-3">
              Your name, mobile number, Gotra, and family travel details are used strictly to coordinate your Gaya Ji pilgrimage. We never sell, share, or market your phone numbers to third-party marketing companies.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#25D366] font-semibold">
              <Lock className="w-4 h-4" />
              <span>Strict Data Protection & Zero Spam Guarantee</span>
            </div>
          </div>

        </div>

        {/* Support Direct Contact */}
        <div className="p-8 rounded-3xl bg-[#FAF5E6] border border-[#DFC07C]/60 text-center">
          <h3 className="font-serif text-xl font-bold text-[#2A1810] mb-2">
            Have Questions on Our Process?
          </h3>
          <p className="text-xs sm:text-sm text-[#5C4033] max-w-md mx-auto mb-6">
            Our team in Gaya Ji is happy to address any questions regarding tradition, pandits, or logistics.
          </p>
          <a
            href="tel:+919431287650"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#2A1810] text-[#FAF7F2] font-bold text-xs sm:text-sm shadow-md hover:bg-[#3D2418] transition-all"
          >
            <Phone className="w-4 h-4 text-[#DFC07C]" />
            <span>Call Coordinator: +91 94312 87650</span>
          </a>
        </div>

      </div>
    </div>
  );
}
