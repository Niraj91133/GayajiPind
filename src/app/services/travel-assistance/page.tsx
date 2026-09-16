import React from "react";
import Link from "next/link";
import { Car, Train, Plane, Phone, MessageCircle, CheckCircle2, ArrowRight, ShieldCheck } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SacredDivider } from "@/components/common/MotifDividers";

export const metadata = {
  title: "Travel & Pickup Assistance in Gaya Ji — Station & Airport Transfers",
  description: "Pre-arranged station and airport transfers in Gaya Ji. AC cabs from Gaya Junction, Gaya Airport, and Patna Airport directly to your hotel and temple.",
};

export default function TravelAssistanceServicePage() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] py-8 lg:py-12">
      <Breadcrumbs
        items={[
          { label: "Special Journeys" },
          { label: "Travel & Pickup Assistance" }
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        <div className="bg-white rounded-3xl border border-[#DFC07C]/60 p-6 sm:p-10 shadow-card mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF5E6] border border-[#DFC07C] text-[#B88E3E] text-xs font-semibold uppercase tracking-wider mb-3">
            <Car className="w-3.5 h-3.5" />
            <span>Dedicated Transit Support</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2A1810]">
            Travel & Pickup Coordination
          </h1>
          <p className="text-sm sm:text-base text-[#5C4033] mt-2 leading-relaxed">
            Eliminate transit worries upon arrival. Our coordinator tracks your train or flight schedule and ensures a dedicated, sanitized vehicle is waiting for your family.
          </p>

          <div className="mt-6 pt-4 border-t border-[#E5DCCE] flex flex-wrap items-center gap-3">
            <Link
              href="/request-booking"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-[#C25E1A] to-[#9A450E] text-white font-bold text-xs sm:text-sm shadow-md hover:brightness-105 transition-all"
            >
              Request Booking with Pickup
            </Link>
            <a
              href="tel:+919097327088"
              className="px-6 py-3 rounded-full bg-[#FAF5E6] border border-[#DFC07C] text-[#2A1810] font-semibold text-xs sm:text-sm hover:bg-[#F5EFE6] transition-all"
            >
              Talk to Coordinator (+91 90973 27088)
            </a>
          </div>
        </div>

        {/* 3 Routes Supported */}
        <div className="space-y-4 mb-8">
          <div className="p-6 rounded-2xl bg-white border border-[#E5DCCE] shadow-card flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#FAF5E6] text-[#C25E1A] flex items-center justify-center flex-shrink-0">
              <Train className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif text-base font-bold text-[#2A1810]">
                Gaya Junction Platform Pickup
              </h2>
              <p className="text-xs text-[#5C4033] mt-0.5 leading-relaxed">
                Driver meets your family at the main exit gate, assists with luggage, and transfers you directly to your hotel or Vishnupad Ghat.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#E5DCCE] shadow-card flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#FAF5E6] text-[#B88E3E] flex items-center justify-center flex-shrink-0">
              <Plane className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif text-base font-bold text-[#2A1810]">
                Patna Airport (PAT) Express Transfer (100 km)
              </h2>
              <p className="text-xs text-[#5C4033] mt-0.5 leading-relaxed">
                Smooth 2 to 2.5 hour highway transit via the new 4-lane expressway in a comfortable private AC Sedan or Innova.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#E5DCCE] shadow-card flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#FAF5E6] text-[#C25E1A] flex items-center justify-center flex-shrink-0">
              <Car className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif text-base font-bold text-[#2A1810]">
                Local Internal Transfers (Pretshila / Bodhgaya)
              </h2>
              <p className="text-xs text-[#5C4033] mt-0.5 leading-relaxed">
                Dedicated vehicle assigned for all 3 days covering Vishnupad, Falgu, Pretshila Hill base, Brahmakund, and Bodhgaya.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 rounded-3xl bg-[#2A1810] text-[#FAF7F2] text-center shadow-xl">
          <h3 className="font-serif text-2xl font-bold text-white mb-2">
            Add Pickup to Your Pilgrimage Request
          </h3>
          <p className="text-xs sm:text-sm text-[#D2C5B0] max-w-md mx-auto mb-6">
            Simply check &quot;Pickup Assistance&quot; during booking request submission.
          </p>
          <Link
            href="/request-booking"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#C25E1A] to-[#9A450E] text-white font-bold text-xs sm:text-sm shadow-md hover:brightness-105 transition-all"
          >
            <span>Request Booking Now</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
