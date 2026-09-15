import React from "react";
import Link from "next/link";
import { Hotel, MapPin, CheckCircle2, Phone, MessageCircle, ArrowRight, ShieldCheck } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SacredDivider } from "@/components/common/MotifDividers";

export const metadata = {
  title: "Where to Stay in Gaya Ji — Family Hotels & Pilgrim Accommodation",
  description: "Pilgrim accommodation guide in Gaya Ji. Clean family hotels near Vishnupad Temple, Bodh Gaya resort options, and coordinator booking assistance.",
};

export default function WhereToStayPage() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] py-8 lg:py-12">
      <Breadcrumbs
        items={[
          { label: "Gaya Ji Guide", href: "/guide" },
          { label: "Where to Stay" }
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2A1810]">
            Where to Stay in Gaya Ji
          </h1>
          <p className="text-sm sm:text-base text-[#6E6963] mt-3 leading-relaxed">
            Finding clean, safe, and family-friendly accommodation near the sacred shrines of Vishnupad Temple and Falgu River.
          </p>
          <SacredDivider className="my-4" />
        </div>

        {/* Core Policy Explanation (Rule #31: Not self-service ecommerce) */}
        <div className="bg-[#FAF5E6] rounded-3xl border border-[#DFC07C]/60 p-6 sm:p-8 mb-10 text-left">
          <div className="flex items-center gap-2.5 text-[#C25E1A] font-bold text-sm mb-2">
            <ShieldCheck className="w-5 h-5" />
            <span>Assisted Hotel Coordination</span>
          </div>
          <p className="text-xs sm:text-sm text-[#5C4033] leading-relaxed">
            To ensure devotee families are never misled by unverified third-party hotel portals in crowded temple alleys, GayajiPind coordinators personally inspect and arrange sanitized, family-suitable hotel rooms with clean western toilets, lift/ground floor access for seniors, and pure vegetarian satvik dining.
          </p>
        </div>

        {/* 2 Popular Stay Zones */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 text-left">
          
          {/* Zone 1: Vishnupad Temple Area */}
          <div className="bg-white rounded-3xl border border-[#E5DCCE] p-6 sm:p-8 shadow-card flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-5 h-5 text-[#C25E1A]" />
                <h2 className="font-serif text-xl font-bold text-[#2A1810]">
                  Vishnupad / Gaya City
                </h2>
              </div>
              <span className="text-xs font-semibold text-[#B88E3E] block mb-3">
                Within 1–2 km of Sanctum
              </span>
              <p className="text-xs text-[#5C4033] leading-relaxed mb-4">
                Ideal for families performing early morning 5:30 AM / 6:00 AM rituals. Allows walking or a quick 5-minute e-rickshaw ride to Falgu River and temple ghats.
              </p>
              <ul className="space-y-1.5 text-xs text-[#423E3A]">
                <li>✓ Minimal transit time to sanctum</li>
                <li>✓ Traditional pilgrimage atmosphere</li>
                <li>✓ Satvik pure-veg dining options</li>
              </ul>
            </div>
          </div>

          {/* Zone 2: Bodh Gaya International Zone */}
          <div className="bg-white rounded-3xl border border-[#E5DCCE] p-6 sm:p-8 shadow-card flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-5 h-5 text-[#B88E3E]" />
                <h2 className="font-serif text-xl font-bold text-[#2A1810]">
                  Bodh Gaya (12 km away)
                </h2>
              </div>
              <span className="text-xs font-semibold text-[#B88E3E] block mb-3">
                15–20 mins expressway drive
              </span>
              <p className="text-xs text-[#5C4033] leading-relaxed mb-4">
                Recommended for NRI families and devotees seeking 3-star, 4-star, or luxury heritage resort accommodations with landscaped gardens and spacious quiet rooms.
              </p>
              <ul className="space-y-1.5 text-xs text-[#423E3A]">
                <li>✓ Modern luxury & resort stays</li>
                <li>✓ Peaceful environment</li>
                <li>✓ Dedicated cab provided to temple</li>
              </ul>
            </div>
          </div>

        </div>

        {/* CTA (Rule #31: Call / WhatsApp for Hotel) */}
        <div className="p-8 rounded-3xl bg-[#2A1810] text-[#FAF7F2] text-center shadow-xl">
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-2">
            Need Help Arranging Accommodation?
          </h3>
          <p className="text-xs sm:text-sm text-[#D2C5B0] max-w-md mx-auto mb-6">
            Speak with our Gaya Ji coordinator to understand available room types, senior-friendly ground floor rooms, and family suites.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://wa.me/919431287650?text=Pranam.%20I%20need%20assistance%20with%20clean%20hotel%20booking%20in%20Gaya%20Ji%20for%20my%20family."
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3.5 rounded-full bg-[#25D366] text-white font-semibold text-xs sm:text-sm shadow-md hover:bg-[#20ba5a] transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp for Hotel</span>
            </a>
            <a
              href="tel:+919431287650"
              className="px-6 py-3.5 rounded-full bg-white/10 border border-[#DFC07C] text-white font-semibold text-xs sm:text-sm hover:bg-white/20 transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#DFC07C]" />
              <span>Call for Hotel Guidance</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
