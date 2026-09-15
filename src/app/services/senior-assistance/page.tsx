import React from "react";
import Link from "next/link";
import { Heart, CheckCircle2, ArrowRight, Phone, MessageCircle, Sparkles } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SacredDivider } from "@/components/common/MotifDividers";

export const metadata = {
  title: "Senior Citizen Pilgrimage Assistance in Gaya Ji — GayajiPind",
  description: "Dedicated assistance for elderly parents and senior pilgrims performing Pind Daan in Gaya Ji. E-rickshaws, wheelchairs, palanquins (doli), and minimal walking.",
};

export default function SeniorAssistancePage() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] py-8 lg:py-12">
      <Breadcrumbs
        items={[
          { label: "Special Journeys" },
          { label: "Senior Citizen Assistance" }
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Header */}
        <div className="bg-white rounded-3xl border border-[#DFC07C]/60 p-6 sm:p-10 shadow-card mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF5E6] border border-[#DFC07C] text-[#C25E1A] text-xs font-semibold uppercase tracking-wider mb-3">
            <Heart className="w-3.5 h-3.5" />
            <span>Dedicated Elder Care</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2A1810]">
            Senior Citizen Pilgrimage Assistance
          </h1>
          <p className="text-sm sm:text-base text-[#5C4033] mt-2 leading-relaxed">
            Helping adult children arrange a comfortable, dignified, and physically stress-free Gaya Ji pilgrimage for their elderly parents.
          </p>

          <div className="mt-6 pt-4 border-t border-[#E5DCCE] flex flex-wrap items-center gap-3">
            <Link
              href="/request-booking"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-[#C25E1A] to-[#9A450E] text-white font-bold text-xs sm:text-sm shadow-md hover:brightness-105 transition-all"
            >
              Request Assisted Booking for Parents
            </Link>
            <a
              href="tel:+919431287650"
              className="px-6 py-3 rounded-full bg-[#FAF5E6] border border-[#DFC07C] text-[#2A1810] font-semibold text-xs sm:text-sm hover:bg-[#F5EFE6] transition-all"
            >
              Discuss with Coordinator
            </a>
          </div>
        </div>

        {/* 4 Senior Support Features (Rule #54) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          
          <div className="p-6 rounded-3xl bg-white border border-[#E5DCCE] shadow-card">
            <div className="w-10 h-10 rounded-xl bg-[#FAF5E6] text-[#C25E1A] flex items-center justify-center font-bold mb-3">
              01
            </div>
            <h3 className="font-serif text-lg font-bold text-[#2A1810] mb-2">
              Door-to-Ghat E-Rickshaws
            </h3>
            <p className="text-xs text-[#5C4033] leading-relaxed">
              Navigating crowded temple streets easily. Dedicated battery e-rickshaws bring parents right up to the Vishnupad entrance corridor and Falgu ghats.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-[#E5DCCE] shadow-card">
            <div className="w-10 h-10 rounded-xl bg-[#FAF5E6] text-[#B88E3E] flex items-center justify-center font-bold mb-3">
              02
            </div>
            <h3 className="font-serif text-lg font-bold text-[#2A1810] mb-2">
              Wheelchair & Attendant Support
            </h3>
            <p className="text-xs text-[#5C4033] leading-relaxed">
              For seniors who cannot stand for extended durations, sanitized wheelchairs with trained attendants ensure smooth temple darshan.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-[#E5DCCE] shadow-card">
            <div className="w-10 h-10 rounded-xl bg-[#FAF5E6] text-[#C25E1A] flex items-center justify-center font-bold mb-3">
              03
            </div>
            <h3 className="font-serif text-lg font-bold text-[#2A1810] mb-2">
              Palanquin (Doli) for Pretshila
            </h3>
            <p className="text-xs text-[#5C4033] leading-relaxed">
              Ascending the 365 steps of Pretshila Hill can be physically demanding. We coordinate reliable palanquin bearers (doli) so seniors can participate without climbing stairs.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-[#E5DCCE] shadow-card">
            <div className="w-10 h-10 rounded-xl bg-[#FAF5E6] text-[#B88E3E] flex items-center justify-center font-bold mb-3">
              04
            </div>
            <h3 className="font-serif text-lg font-bold text-[#2A1810] mb-2">
              Ground Floor & Lift Stays
            </h3>
            <p className="text-xs text-[#5C4033] leading-relaxed">
              Hotel rooms pre-selected with ground floor access or working elevators, western toilets, and pure satvik meal arrangements.
            </p>
          </div>

        </div>

        {/* CTA */}
        <div className="p-8 rounded-3xl bg-[#2A1810] text-[#FAF7F2] text-center shadow-xl">
          <h3 className="font-serif text-2xl font-bold text-white mb-2">
            Let Us Care for Your Parents in Gaya Ji
          </h3>
          <p className="text-xs sm:text-sm text-[#D2C5B0] max-w-md mx-auto mb-6">
            Simply check &quot;Senior Citizen Assistance&quot; when requesting your booking, and our local coordinator will tailor every movement to their comfort.
          </p>
          <Link
            href="/request-booking"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#C25E1A] to-[#9A450E] text-white font-bold text-xs sm:text-sm shadow-md hover:brightness-105 transition-all"
          >
            <span>Request Senior-Assisted Booking</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
