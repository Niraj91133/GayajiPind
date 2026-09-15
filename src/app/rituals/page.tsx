import React from "react";
import Link from "next/link";
import { Clock, Users, ArrowRight, ShieldCheck, Sparkles, Phone } from "lucide-react";
import { RITUALS_DATA } from "@/data/rituals";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SacredDivider } from "@/components/common/MotifDividers";

export const metadata = {
  title: "Sacred Vedic Rituals in Gaya Ji — GayajiPind",
  description: "Explore 1-Day Pind Daan, 3-Day Complete Pind Daan, Tripindi Shradh, and Narayan Bali rituals in Gaya Ji with verified Teerth Pandits.",
};

export default function RitualsPage() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] py-8 lg:py-12">
      <Breadcrumbs
        items={[
          { label: "Vedic Rituals" }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FAF5E6] border border-[#DFC07C] text-[#B88E3E] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Gaya Kshetra Vidhi</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2A1810]">
            Sacred Pilgrimage Rituals in Gaya Ji
          </h1>
          <p className="text-sm sm:text-base text-[#6E6963] mt-3 leading-relaxed">
            All rituals are conducted in accordance with authentic Garuda Purana and Vedic scriptures under the personal supervision of verified Gayawal Teerth Pandits.
          </p>
          <SacredDivider className="my-4" />
        </div>

        {/* Rituals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {RITUALS_DATA.map((ritual) => (
            <div
              key={ritual.id}
              className="flex flex-col bg-white rounded-3xl border border-[#E5DCCE] overflow-hidden shadow-card hover:shadow-heritage hover:border-[#DFC07C] transition-all"
            >
              <div className="relative h-60 bg-[#2A1810] overflow-hidden">
                <img
                  src={ritual.image}
                  alt={ritual.name}
                  className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#DFC07C] block mb-1">
                    Duration: {ritual.duration}
                  </span>
                  <h2 className="font-serif text-2xl font-bold">
                    {ritual.name}
                  </h2>
                </div>
              </div>

              <div className="p-6 sm:p-8 flex flex-col flex-grow text-left">
                <p className="text-xs sm:text-sm text-[#5C4033] leading-relaxed mb-6 flex-grow">
                  {ritual.fullDescription}
                </p>

                {/* Who is it for */}
                <div className="mb-6 p-4 rounded-xl bg-[#FAF7F2] border border-[#E5DCCE]">
                  <span className="text-xs font-bold text-[#B88E3E] uppercase tracking-wider block mb-1.5">
                    Recommended For:
                  </span>
                  <ul className="space-y-1 text-xs text-[#423E3A]">
                    {ritual.whoIsItFor.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-[#C25E1A] font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-[#E5DCCE] flex items-center gap-3">
                  <Link
                    href={`/rituals/${ritual.slug}`}
                    className="flex-1 text-center py-3 px-4 rounded-xl border border-[#E5DCCE] text-xs font-bold text-[#2A1810] hover:bg-[#FAF5E6] hover:border-[#B88E3E] transition-all"
                  >
                    View Full Details
                  </Link>

                  <Link
                    href={`/request-booking?ritual=${ritual.slug}`}
                    className="flex-1 text-center py-3 px-4 rounded-xl bg-gradient-to-r from-[#C25E1A] to-[#9A450E] text-white text-xs font-bold shadow-md hover:brightness-105 transition-all"
                  >
                    Request Booking
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
