import React from "react";
import Link from "next/link";
import { MapPin, Clock, ShieldCheck, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { SacredPlace } from "@/types";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SacredDivider } from "@/components/common/MotifDividers";

export function SacredPlaceDetailView({ place }: { place: SacredPlace }) {
  return (
    <div className="min-h-screen bg-[#FAF7F2] py-8 lg:py-12">
      <Breadcrumbs
        items={[
          { label: "Gaya Ji Guide", href: "/guide" },
          { label: place.name }
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Card */}
        <div className="bg-white rounded-3xl border border-[#DFC07C]/60 overflow-hidden shadow-card mb-8">
          <div className="relative h-72 sm:h-96 bg-[#2A1810]">
            <img
              src={place.image}
              alt={place.name}
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF5E6]/20 backdrop-blur-md border border-white/20 text-[#DFC07C] text-xs font-semibold mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Sacred Gaya Ji Tirtha</span>
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl font-bold">
                {place.name}
              </h1>
              <p className="text-xs sm:text-sm text-[#D2C5B0] mt-1 font-medium">
                {place.hindiName} • {place.tagline}
              </p>
            </div>
          </div>

          <div className="p-6 sm:p-8 grid grid-cols-2 gap-4 border-b border-[#E5DCCE] bg-[#FAF7F2] text-xs">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#B88E3E] flex-shrink-0" />
              <span><strong>Location:</strong> {place.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#C25E1A] flex-shrink-0" />
              <span><strong>Timings:</strong> {place.timings}</span>
            </div>
          </div>

          {/* Significance */}
          <div className="p-6 sm:p-10 space-y-6 text-left">
            <div>
              <h2 className="font-serif text-2xl font-bold text-[#2A1810] mb-3">
                Spiritual Significance
              </h2>
              <p className="text-xs sm:text-sm text-[#5C4033] leading-relaxed">
                {place.significance}
              </p>
            </div>

            <div>
              <h3 className="font-serif text-xl font-bold text-[#2A1810] mb-3">
                History & Mythological Lore
              </h3>
              <p className="text-xs sm:text-sm text-[#5C4033] leading-relaxed">
                {place.history}
              </p>
            </div>

            {/* What to know */}
            <div>
              <h3 className="font-serif text-xl font-bold text-[#2A1810] mb-3">
                What to Know Before Darshan
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#423E3A]">
                {place.whatToKnow.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#25D366] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Related Rituals */}
            <div className="pt-4 border-t border-[#E5DCCE]">
              <span className="text-xs font-bold text-[#B88E3E] uppercase tracking-wider block mb-2">
                Related Rituals Conducted Here:
              </span>
              <div className="flex flex-wrap gap-2">
                {place.relatedRituals.map((r, idx) => (
                  <span key={idx} className="px-3 py-1 bg-[#FAF5E6] rounded-full border border-[#DFC07C] text-xs font-semibold text-[#2A1810]">
                    {r}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 rounded-3xl bg-[#2A1810] text-[#FAF7F2] text-center shadow-xl">
          <h3 className="font-serif text-2xl font-bold text-white mb-2">
            Plan Your Pilgrimage to {place.name}
          </h3>
          <p className="text-xs sm:text-sm text-[#D2C5B0] max-w-md mx-auto mb-6">
            Our Teerth Pandits ensure seamless entry, proper Vedic Sankalp, and hassle-free darshan.
          </p>
          <Link
            href="/request-booking"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#C25E1A] to-[#9A450E] text-white font-bold text-sm shadow-md hover:brightness-105 transition-all"
          >
            <span>Request Pilgrimage Booking</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
