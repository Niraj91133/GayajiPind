import React from "react";
import Link from "next/link";
import { MapPin, Train, Hotel, Luggage, Clock, Sparkles, ArrowRight, ShieldCheck } from "lucide-react";
import { SACRED_PLACES } from "@/data/sacredPlaces";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SacredDivider } from "@/components/common/MotifDividers";

export const metadata = {
  title: "Gaya Ji Pilgrimage Guide — Sacred Places, Travel & Preparation Hub",
  description: "Comprehensive guide to Gaya Ji pilgrimage. Explore Vishnupad Temple, Falgu River, Akshayavat, Pretshila, 45 Vedis, travel options, and stay guides.",
};

export default function GuidePage() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] py-8 lg:py-12">
      <Breadcrumbs
        items={[
          { label: "Gaya Ji Guide" }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FAF5E6] border border-[#DFC07C] text-[#B88E3E] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Pilgrimage Knowledge Hub</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2A1810]">
            The Complete Gaya Ji Pilgrimage Guide
          </h1>
          <p className="text-sm sm:text-base text-[#6E6963] mt-3 leading-relaxed">
            Essential knowledge about the sacred tirthas, the 45 Vedic Vedis, logistical guidelines, and practical advice for a comfortable journey.
          </p>
          <SacredDivider className="my-4" />
        </div>

        {/* 4 Sacred Shrines Grid */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="font-serif text-2xl font-bold text-[#2A1810]">
                Core Sacred Shrines
              </h2>
              <p className="text-xs text-[#6E6963]">
                The primary tirthas where sacred oblations are offered.
              </p>
            </div>
            <Link
              href="/guide/45-vedi"
              className="text-xs font-bold text-[#C25E1A] hover:underline flex items-center gap-1"
            >
              <span>Explore 45 Vedis Directory</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SACRED_PLACES.map((place) => (
              <div
                key={place.id}
                className="bg-white rounded-2xl border border-[#E5DCCE] overflow-hidden shadow-card hover:shadow-heritage hover:border-[#DFC07C] transition-all flex flex-col"
              >
                <div className="relative h-48 bg-[#2A1810]">
                  <img
                    src={place.image}
                    alt={place.name}
                    className="w-full h-full object-cover opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <h3 className="font-serif text-lg font-bold">
                      {place.name}
                    </h3>
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-grow text-left">
                  <p className="text-xs text-[#5C4033] leading-relaxed mb-4 flex-grow">
                    {place.significance}
                  </p>
                  <Link
                    href={`/guide/${place.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C25E1A] hover:text-[#9A450E]"
                  >
                    <span>Read Full Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 45 Vedis Featured Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-[#2A1810] to-[#3D2418] text-[#FAF7F2] p-8 sm:p-12 mb-16 shadow-xl relative overflow-hidden">
          <div className="max-w-2xl text-left relative z-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#DFC07C] block mb-2">
              Ancient Vedic Geography
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-3">
              The 45 Sacred Vedis of Gaya Kshetra
            </h3>
            <p className="text-xs sm:text-sm text-[#D2C5B0] leading-relaxed mb-6">
              Search and explore the complete directory of all 45 sacred Vedis mentioned in the Vayu Purana, including location, importance, and recommended pilgrimage day.
            </p>
            <Link
              href="/guide/45-vedi"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FAF5E6] text-[#2A1810] font-bold text-xs sm:text-sm shadow-md hover:bg-white transition-all"
            >
              <span>Search 45 Vedis Directory</span>
              <ArrowRight className="w-4 h-4 text-[#C25E1A]" />
            </Link>
          </div>
        </div>

        {/* Practical Planning Hub */}
        <div className="mb-16 text-left">
          <h2 className="font-serif text-2xl font-bold text-[#2A1810] mb-6">
            Practical Pilgrimage Planning
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Link
              href="/guide/how-to-reach"
              className="p-6 rounded-2xl bg-white border border-[#E5DCCE] hover:border-[#DFC07C] hover:shadow-card transition-all flex flex-col"
            >
              <div className="w-10 h-10 rounded-xl bg-[#FAF5E6] flex items-center justify-center text-[#C25E1A] mb-4">
                <Train className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#2A1810] mb-2">
                How to Reach Gaya Ji
              </h3>
              <p className="text-xs text-[#6E6963] leading-relaxed flex-grow">
                Train options, flight connectivity via Gaya & Patna airports, and road routes.
              </p>
              <span className="text-xs font-bold text-[#C25E1A] mt-4 inline-flex items-center gap-1">
                View Routes →
              </span>
            </Link>

            <Link
              href="/guide/where-to-stay"
              className="p-6 rounded-2xl bg-white border border-[#E5DCCE] hover:border-[#DFC07C] hover:shadow-card transition-all flex flex-col"
            >
              <div className="w-10 h-10 rounded-xl bg-[#FAF5E6] flex items-center justify-center text-[#B88E3E] mb-4">
                <Hotel className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#2A1810] mb-2">
                Where to Stay
              </h3>
              <p className="text-xs text-[#6E6963] leading-relaxed flex-grow">
                Verified family-friendly accommodations near Vishnupad Temple and Falgu Ghats.
              </p>
              <span className="text-xs font-bold text-[#C25E1A] mt-4 inline-flex items-center gap-1">
                Stay Details →
              </span>
            </Link>

            <Link
              href="/guide/what-to-bring"
              className="p-6 rounded-2xl bg-white border border-[#E5DCCE] hover:border-[#DFC07C] hover:shadow-card transition-all flex flex-col"
            >
              <div className="w-10 h-10 rounded-xl bg-[#FAF5E6] flex items-center justify-center text-[#C25E1A] mb-4">
                <Luggage className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#2A1810] mb-2">
                What to Bring & Wear
              </h3>
              <p className="text-xs text-[#6E6963] leading-relaxed flex-grow">
                Traditional dress codes, IDs, ancestor lists, and sacred checklist for pilgrims.
              </p>
              <span className="text-xs font-bold text-[#C25E1A] mt-4 inline-flex items-center gap-1">
                Preparation List →
              </span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
