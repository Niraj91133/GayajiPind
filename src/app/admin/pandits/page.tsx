"use client";

import React, { useState } from "react";
import { ShieldCheck, Award, Globe, Plus, CheckCircle2, XCircle } from "lucide-react";
import { PANDITS_DATA } from "@/data/pandits";
import { Pandit } from "@/types";

export default function AdminPanditsPage() {
  const [pandits, setPandits] = useState<Pandit[]>(PANDITS_DATA);

  const toggleAvailability = (id: string) => {
    setPandits((prev) =>
      prev.map((p) => (p.id === id ? { ...p, available: !p.available } : p))
    );
  };

  return (
    <div className="space-y-6 text-left">
      
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-[#E5DCCE]">
        <div>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#2A1810]">
            Verified Pandits Registry & Roster
          </h1>
          <p className="text-xs text-[#6E6963]">
            Manage authorized Gayawal Teerth Purohits, ritual assignments, and daily availability.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pandits.map((pandit) => (
          <div
            key={pandit.id}
            className="bg-white rounded-3xl border border-[#E5DCCE] p-6 shadow-card flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between mb-4">
                <img
                  src={pandit.image}
                  alt={pandit.name}
                  className="w-16 h-16 rounded-2xl object-cover border border-[#DFC07C]"
                />
                <button
                  onClick={() => toggleAvailability(pandit.id)}
                  className={`px-3 py-1 rounded-full text-[11px] font-bold transition-all ${
                    pandit.available
                      ? "bg-[#E8F8EE] text-[#25D366] border border-[#25D366]/40"
                      : "bg-[#FCE3CE] text-[#C25E1A] border border-[#C25E1A]/40"
                  }`}
                >
                  {pandit.available ? "● Available Today" : "○ On Leave"}
                </button>
              </div>

              <h2 className="font-serif text-lg font-bold text-[#2A1810]">
                {pandit.name}
              </h2>
              <span className="text-xs font-semibold text-[#C25E1A] block mb-2">
                {pandit.title}
              </span>

              <div className="space-y-1.5 text-xs text-[#5C4033] mb-4">
                <div><strong>Experience:</strong> {pandit.experienceYears}+ Years</div>
                <div><strong>Lineage:</strong> {pandit.lineage}</div>
                <div><strong>Languages:</strong> {pandit.languages.join(", ")}</div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E5DCCE] text-xs">
              <span className="font-bold text-[#6E6963] block mb-1">Specialties:</span>
              <div className="flex flex-wrap gap-1">
                {pandit.specializations.slice(0, 2).map((s, idx) => (
                  <span key={idx} className="px-2 py-0.5 rounded bg-[#FAF7F2] border border-[#E5DCCE] text-[10px]">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
