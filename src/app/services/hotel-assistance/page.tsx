import React from "react";
import Link from "next/link";
import { Hotel, Phone, MessageCircle, CheckCircle2, ArrowRight, ShieldCheck } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SacredDivider } from "@/components/common/MotifDividers";

export const metadata = {
  title: "Hotel Assistance in Gaya Ji — Sanitized Family Accommodation",
  description: "Personal hotel arrangement assistance in Gaya Ji. Verified clean accommodations near Vishnupad Temple with satvik dining and senior access.",
};

export default function HotelAssistanceServicePage() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] py-8 lg:py-12">
      <Breadcrumbs
        items={[
          { label: "Special Journeys" },
          { label: "Hotel Assistance" }
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        <div className="bg-white rounded-3xl border border-[#DFC07C]/60 p-6 sm:p-10 shadow-card mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF5E6] border border-[#DFC07C] text-[#B88E3E] text-xs font-semibold uppercase tracking-wider mb-3">
            <Hotel className="w-3.5 h-3.5" />
            <span>Assisted Stay Services</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2A1810]">
            Hotel & Stay Coordination in Gaya Ji
          </h1>
          <p className="text-sm sm:text-base text-[#5C4033] mt-2 leading-relaxed">
            We help devotee families avoid the confusion of unverified online hotel listings. Our coordinator arranges sanitized, family-suitable hotel stays near the temple sanctum.
          </p>

          <div className="mt-6 pt-4 border-t border-[#E5DCCE] flex flex-wrap items-center gap-3">
            <a
              href="https://wa.me/919431287650?text=Pranam.%20I%20need%20assistance%20with%20hotel%20booking%20in%20Gaya%20Ji."
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-full bg-[#25D366] text-white font-bold text-xs sm:text-sm hover:bg-[#20ba5a] transition-all flex items-center gap-1.5"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp for Hotel</span>
            </a>
            <a
              href="tel:+919431287650"
              className="px-6 py-3 rounded-full bg-[#FAF5E6] border border-[#DFC07C] text-[#2A1810] font-semibold text-xs sm:text-sm hover:bg-[#F5EFE6] transition-all"
            >
              Call Coordinator
            </a>
          </div>
        </div>

        {/* Inclusions */}
        <div className="bg-white rounded-3xl border border-[#E5DCCE] p-6 sm:p-10 shadow-card mb-8 space-y-4">
          <h2 className="font-serif text-2xl font-bold text-[#2A1810] mb-2">
            What We Ensure in Your Stay:
          </h2>
          <ul className="space-y-3 text-xs sm:text-sm text-[#423E3A]">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#25D366] flex-shrink-0 mt-0.5" />
              <span><strong>Clean Western Toilets & Hot Water:</strong> Inspected prior to pilgrim check-in.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#25D366] flex-shrink-0 mt-0.5" />
              <span><strong>Proximity to Vishnupad Temple:</strong> Located within 5–15 mins of the main sanctum.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#25D366] flex-shrink-0 mt-0.5" />
              <span><strong>Elderly Accessibility:</strong> Ground floor rooms or verified elevator access.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#25D366] flex-shrink-0 mt-0.5" />
              <span><strong>Pure Vegetarian Satvik Kitchens:</strong> Onion-garlic free satvik meals arranged upon request.</span>
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div className="p-8 rounded-3xl bg-[#2A1810] text-[#FAF7F2] text-center shadow-xl">
          <h3 className="font-serif text-2xl font-bold text-white mb-2">
            Combine Stay with Your Pilgrimage Request
          </h3>
          <p className="text-xs sm:text-sm text-[#D2C5B0] max-w-md mx-auto mb-6">
            Simply check &quot;Hotel Assistance&quot; when submitting your booking request form.
          </p>
          <Link
            href="/request-booking"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#C25E1A] to-[#9A450E] text-white font-bold text-xs sm:text-sm shadow-md hover:brightness-105 transition-all"
          >
            <span>Request Booking with Stay</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
