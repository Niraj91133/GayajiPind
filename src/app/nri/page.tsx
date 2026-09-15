import React from "react";
import Link from "next/link";
import { Globe, Plane, Clock, ShieldCheck, MessageCircle, ArrowRight, Sparkles } from "lucide-react";
import { NRI_COUNTRIES_DATA } from "@/data/nriCountries";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SacredDivider } from "@/components/common/MotifDividers";

export const metadata = {
  title: "Pind Daan for NRI Families — Dedicated Gaya Ji Pilgrimage Coordination",
  description: "Specialized Gaya Ji pilgrimage support for NRI families across USA, UK, Canada, UAE, Australia, and Singapore. Timezone-friendly WhatsApp consultation, flight hub transfers, and English-speaking Purohits.",
};

export default function NriHubPage() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] py-8 lg:py-12">
      <Breadcrumbs
        items={[
          { label: "NRI Pilgrimage Support" }
        ]}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FAF5E6] border border-[#DFC07C] text-[#B88E3E] text-xs font-semibold uppercase tracking-wider mb-3">
            <Globe className="w-3.5 h-3.5" />
            <span>Global Devotee Services</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2A1810]">
            Pind Daan in Gaya Ji for NRI Families
          </h1>
          <p className="text-sm sm:text-base text-[#6E6963] mt-3 leading-relaxed">
            Helping devotees living abroad perform sacred ancestral rites in Gaya Ji with complete peace of mind, time-zone friendly consultations, and seamless ground logistics.
          </p>
          <SacredDivider className="my-4" />
        </div>

        {/* 3 Core NRI Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-3xl bg-white border border-[#E5DCCE] shadow-card">
            <div className="w-10 h-10 rounded-xl bg-[#FAF5E6] text-[#C25E1A] flex items-center justify-center mb-4">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-base font-bold text-[#2A1810] mb-2">
              Timezone-Friendly WhatsApp
            </h3>
            <p className="text-xs text-[#5C4033] leading-relaxed">
              Our coordinators accommodate US EST/PST, GMT, Gulf, and Australian business hours for family video or WhatsApp voice discussions.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-[#E5DCCE] shadow-card">
            <div className="w-10 h-10 rounded-xl bg-[#FAF5E6] text-[#B88E3E] flex items-center justify-center mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-base font-bold text-[#2A1810] mb-2">
              English-Speaking Purohits
            </h3>
            <p className="text-xs text-[#5C4033] leading-relaxed">
              Learned Vedic scholars fluent in English and Hindi to ensure second and third-generation family members fully understand every ritual stage.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-[#E5DCCE] shadow-card">
            <div className="w-10 h-10 rounded-xl bg-[#FAF5E6] text-[#C25E1A] flex items-center justify-center mb-4">
              <Plane className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-base font-bold text-[#2A1810] mb-2">
              Airport to Sanctum Transfers
            </h3>
            <p className="text-xs text-[#5C4033] leading-relaxed">
              Private express cab transfers from Delhi, Kolkata, or Patna international arrivals directly to sanitized Gaya hotels.
            </p>
          </div>
        </div>

        {/* Country Specific Landing Pages Grid (Rule #52) */}
        <div className="mb-14">
          <h2 className="font-serif text-2xl font-bold text-[#2A1810] mb-6">
            Select Your Country for Tailored Travel Guidance
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {NRI_COUNTRIES_DATA.map((c) => (
              <Link
                key={c.slug}
                href={`/nri/${c.slug}`}
                className="p-6 rounded-3xl bg-white border border-[#E5DCCE] hover:border-[#DFC07C] hover:shadow-heritage transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="text-3xl mb-3">{c.flag}</div>
                  <h3 className="font-serif text-lg font-bold text-[#2A1810] group-hover:text-[#C25E1A] transition-colors">
                    {c.country}
                  </h3>
                  <p className="text-xs text-[#6E6963] mt-2 mb-4 leading-relaxed">
                    Flight routing via {c.flightHubs.slice(0, 2).join(", ")} and local logistics.
                  </p>
                </div>
                <span className="text-xs font-bold text-[#C25E1A] inline-flex items-center gap-1">
                  View Country Guide →
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* NRI Flow (Rule #53) */}
        <div className="p-8 rounded-3xl bg-[#FAF5E6] border border-[#DFC07C]/60 mb-12">
          <h3 className="font-serif text-xl font-bold text-[#2A1810] mb-2">
            Are You Visiting Gaya Ji or Requesting Family Assistance?
          </h3>
          <p className="text-xs sm:text-sm text-[#5C4033] leading-relaxed mb-6">
            Whether your entire family is traveling to Gaya Ji, or you are coordinating a pilgrimage for your elderly parents living in India while you reside abroad, our dedicated coordinators manage every detail end-to-end.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/request-booking"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-[#C25E1A] to-[#9A450E] text-white text-xs font-bold shadow-md hover:brightness-105 transition-all text-center"
            >
              Submit NRI Booking Request
            </Link>
            <a
              href="https://wa.me/919431287650?text=Pranam.%20I%20am%20an%20NRI%20looking%20to%20arrange%20Gaya%20Ji%20Pind%20Daan%20rituals."
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-full bg-[#25D366] text-white text-xs font-bold hover:bg-[#20ba5a] transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Coordinator</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
