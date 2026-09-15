"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, MapPin, Sparkles, Filter, ArrowRight } from "lucide-react";
import { VEDIS_DATA } from "@/data/sacredPlaces";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SacredDivider } from "@/components/common/MotifDividers";

export default function FortyFiveVediPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [dayFilter, setDayFilter] = useState<string>("All");

  const filteredVedis = VEDIS_DATA.filter((vedi) => {
    const matchesSearch =
      vedi.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      vedi.hindiName.includes(searchTerm) ||
      vedi.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      vedi.importance.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesDay =
      dayFilter === "All" || vedi.dayRecommended.includes(dayFilter);

    return matchesSearch && matchesDay;
  });

  return (
    <div className="min-h-screen bg-[#FAF7F2] py-8 lg:py-12">
      <Breadcrumbs
        items={[
          { label: "Gaya Ji Guide", href: "/guide" },
          { label: "45 Sacred Vedis Directory" }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FAF5E6] border border-[#DFC07C] text-[#B88E3E] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Vedic Shastra Geography</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2A1810]">
            The 45 Sacred Vedis of Gaya Ji
          </h1>
          <p className="text-sm sm:text-base text-[#6E6963] mt-3 leading-relaxed">
            The ancient holy circuit of Gaya Kshetra comprised of 45 consecrated spots consecrated by Brahma, Vishnu, and celestial sages.
          </p>
          <SacredDivider className="my-4" />
        </div>

        {/* Search & Day Filter Toolbar */}
        <div className="bg-white rounded-3xl border border-[#E5DCCE] p-6 shadow-card mb-8">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            {/* Search input */}
            <div className="relative w-full sm:max-w-md">
              <Search className="absolute left-3.5 top-3 w-4 h-4 text-[#6E6963]" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by name, location, or importance..."
                className="w-full pl-10 pr-4 py-2.5 bg-[#FAF7F2] rounded-xl border border-[#E5DCCE] text-xs sm:text-sm text-[#2A1810] focus:ring-1 focus:ring-[#C25E1A] focus:bg-white"
              />
            </div>

            {/* Day Filter Pills */}
            <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
              <span className="text-xs font-bold text-[#6E6963] flex items-center gap-1">
                <Filter className="w-3.5 h-3.5" /> Filter:
              </span>
              {["All", "Day 1", "Day 2", "Day 3"].map((day) => (
                <button
                  key={day}
                  type="button"
                  onClick={() => setDayFilter(day)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    dayFilter === day
                      ? "bg-[#2A1810] text-[#DFC07C] shadow-sm"
                      : "bg-[#FAF7F2] border border-[#E5DCCE] text-[#5C4033] hover:bg-[#F5EFE6]"
                  }`}
                >
                  {day}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Counter */}
        <div className="mb-6 flex items-center justify-between text-xs text-[#6E6963] px-2">
          <span>
            Showing <strong>{filteredVedis.length}</strong> of 45 Sacred Vedis
          </span>
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="text-[#C25E1A] hover:underline font-semibold"
            >
              Clear Search
            </button>
          )}
        </div>

        {/* 45 Vedis Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {filteredVedis.map((vedi) => (
            <div
              key={vedi.id}
              className="bg-white rounded-2xl border border-[#E5DCCE] p-5 shadow-card hover:shadow-heritage hover:border-[#DFC07C] transition-all flex flex-col justify-between text-left"
            >
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <span className="w-7 h-7 rounded-full bg-[#FAF5E6] border border-[#DFC07C]/60 text-[#B88E3E] font-bold text-xs flex items-center justify-center">
                    {vedi.id}
                  </span>
                  <span className="text-[11px] font-semibold text-[#C25E1A] bg-[#FCE3CE]/60 px-2.5 py-0.5 rounded-full">
                    {vedi.dayRecommended}
                  </span>
                </div>

                <div className="mb-2">
                  <h3 className="font-serif text-base font-bold text-[#2A1810]">
                    {vedi.name}
                  </h3>
                  <span className="text-xs text-[#8C6824] font-medium">
                    {vedi.hindiName}
                  </span>
                </div>

                <p className="text-xs text-[#5C4033] leading-relaxed mb-3">
                  {vedi.importance}
                </p>
              </div>

              <div className="pt-3 border-t border-[#E5DCCE] flex items-center gap-1 text-[11px] text-[#6E6963]">
                <MapPin className="w-3.5 h-3.5 text-[#B88E3E] flex-shrink-0" />
                <span className="truncate">{vedi.location}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="p-8 rounded-3xl bg-[#2A1810] text-[#FAF7F2] text-center max-w-3xl mx-auto shadow-xl">
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-2">
            Wish to Cover the Complete 45-Vedi Circuit?
          </h3>
          <p className="text-xs sm:text-sm text-[#D2C5B0] mb-6">
            The 3-Day Complete Pilgrimage includes guided visits across the traditional circuit with personal Purohit support.
          </p>
          <Link
            href="/rituals/3-day-complete-pind-daan"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#C25E1A] to-[#9A450E] text-white font-bold text-xs sm:text-sm shadow-md hover:brightness-105 transition-all"
          >
            <span>View 3-Day Pilgrimage Details</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
