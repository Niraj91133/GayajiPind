import React from "react";
import Link from "next/link";
import { ShieldCheck, Award, Globe, BookOpen, ArrowRight, Sparkles } from "lucide-react";
import { PANDITS_DATA } from "@/data/pandits";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SacredDivider } from "@/components/common/MotifDividers";

export const metadata = {
  title: "Verified Teerth Pandits of Gaya Ji — GayajiPind",
  description: "Meet our verified Gayawal Teerth Purohits in Gaya Ji with decades of Vedic experience, multi-lingual fluency, and authentic sanctum lineage.",
};

export default function PanditsDirectoryPage() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] py-8 lg:py-12">
      <Breadcrumbs
        items={[
          { label: "Our Pandits" }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FAF5E6] border border-[#DFC07C] text-[#B88E3E] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Vedic Lineage & Trust</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2A1810]">
            Our Verified Teerth Pandits
          </h1>
          <p className="text-sm sm:text-base text-[#6E6963] mt-3 leading-relaxed">
            Direct descendants of the sacred Gayawal Brahmin lineage with multi-generational service at the Vishnupad Sanctum, Falgu Ghats, and Akshayavat.
          </p>
          <SacredDivider className="my-4" />
        </div>

        {/* Pandits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-8 mb-16">
          {PANDITS_DATA.map((pandit) => (
            <div
              key={pandit.id}
              className="flex flex-col bg-white rounded-3xl border border-[#E5DCCE] overflow-hidden shadow-card hover:shadow-heritage hover:border-[#DFC07C] transition-all group text-left"
            >
              <div className="relative h-64 bg-[#2A1810] overflow-hidden">
                <img
                  src={pandit.image}
                  alt={pandit.name}
                  className="w-full h-full object-cover object-top opacity-95 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2A1810] via-transparent to-transparent" />
                
                <div className="absolute top-3.5 left-3.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-sm border border-[#B88E3E]/60 text-[#2A1810] text-xs font-bold shadow-sm">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C25E1A]" />
                  <span>{pandit.verificationBadge}</span>
                </div>

                <div className="absolute bottom-3.5 left-3.5 text-white">
                  <span className="text-xs font-bold text-[#DFC07C]">
                    {pandit.experienceYears}+ Years Experience
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8 flex flex-col flex-grow">
                <h2 className="font-serif text-xl font-bold text-[#2A1810]">
                  {pandit.name}
                </h2>
                <span className="text-xs font-semibold text-[#C25E1A] mt-0.5">
                  {pandit.title}
                </span>

                <div className="mt-4 pt-3 border-t border-[#E5DCCE]">
                  <span className="text-[11px] font-bold text-[#B88E3E] uppercase tracking-wider block">
                    Lineage & Heritage:
                  </span>
                  <p className="text-xs text-[#5C4033] mt-0.5">
                    {pandit.lineage}
                  </p>
                </div>

                <div className="mt-3">
                  <span className="text-[11px] font-bold text-[#6E6963] block mb-1">
                    Languages Spoken:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {pandit.languages.map((l, idx) => (
                      <span key={idx} className="text-[11px] px-2 py-0.5 rounded-md bg-[#FAF7F2] border border-[#E5DCCE] text-[#423E3A]">
                        {l}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-[#E5DCCE] flex-grow">
                  <p className="text-xs text-[#6E6963] line-clamp-3 leading-relaxed">
                    {pandit.bio}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E5DCCE] flex items-center justify-between">
                  <Link
                    href={`/pandits/${pandit.slug}`}
                    className="text-xs font-bold text-[#2A1810] hover:text-[#C25E1A] flex items-center gap-1"
                  >
                    <span>View Full Profile</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <Link
                    href="/request-booking"
                    className="px-4 py-2 rounded-full bg-gradient-to-r from-[#C25E1A] to-[#9A450E] text-white text-xs font-bold shadow-sm hover:brightness-105 transition-all"
                  >
                    Request Pandit
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Verification Policy Banner */}
        <div className="p-8 rounded-3xl bg-[#FAF5E6] border border-[#DFC07C]/60 text-left max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <ShieldCheck className="w-6 h-6 text-[#C25E1A]" />
            <h3 className="font-serif text-xl font-bold text-[#2A1810]">
              Our Pandit Verification Standard
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-[#5C4033] leading-relaxed">
            Every Purohit partnered with GayajiPind undergoes rigorous background and heritage verification confirming direct lineage in the Gaya Tirtha Kshetra, scriptural authority in Garuda Purana / Shradh Prakaran, and proven adherence to respectful, unhurried devotee guidance.
          </p>
        </div>

      </div>
    </div>
  );
}
