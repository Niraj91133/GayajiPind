"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  Search,
  CheckCircle2,
  Clock,
  User,
  Calendar,
  Phone,
  MessageCircle,
  ShieldCheck,
  MapPin,
  Hotel,
  Car,
  Heart
} from "lucide-react";
import { useLanguage } from "@/components/common/LanguageContext";
import { BookingRequest, BookingStatus } from "@/types";
import { findBookingByIdOrMobile } from "@/lib/db";
import { formatDate } from "@/lib/utils";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

const PIPELINE_STAGES: { key: BookingStatus; label: string; hindiLabel: string; desc: string }[] = [
  {
    key: "NEW",
    label: "Request Received",
    hindiLabel: "अनुरोध प्राप्त हुआ",
    desc: "Your booking request is logged in the coordinator queue."
  },
  {
    key: "CONTACTED",
    label: "Coordinator Contacted",
    hindiLabel: "समन्वयक द्वारा संपर्क",
    desc: "A local coordinator has initiated discussion on WhatsApp/Phone."
  },
  {
    key: "DETAILS_CONFIRMED",
    label: "Details Discussed",
    hindiLabel: "विवरण की पुष्टि",
    desc: "Ritual timings, Gotra, stay, and pickup preferences are noted."
  },
  {
    key: "BOOKING_CONFIRMED",
    label: "Booking Confirmed",
    hindiLabel: "बुकिंग की पुष्टि",
    desc: "Your pilgrimage schedule is officially confirmed."
  },
  {
    key: "PANDIT_ASSIGNED",
    label: "Teerth Pandit Assigned",
    hindiLabel: "तीर्थ पुरोहित आवंटित",
    desc: "An authorized Gayawal Pandit is dedicated to your family."
  },
  {
    key: "TRAVEL_ARRANGED",
    label: "Travel & Stay Arranged",
    hindiLabel: "होटल व वाहन व्यवस्था",
    desc: "All requested pickups, hotel rooms, and senior support are set."
  },
  {
    key: "COMPLETED",
    label: "Ritual Completed",
    hindiLabel: "पिंडदान पूर्ण",
    desc: "Pilgrimage rites completed with Suphal blessings."
  }
];

function StatusChecker() {
  const searchParams = useSearchParams();
  const { language, t } = useLanguage();

  const [query, setQuery] = useState("");
  const [result, setResult] = useState<BookingRequest | null>(null);
  const [searched, setSearched] = useState(false);

  useEffect(() => {
    const paramId = searchParams.get("id");
    if (paramId) {
      setQuery(paramId);
      const found = findBookingByIdOrMobile(paramId);
      if (found) {
        setResult(found);
      }
      setSearched(true);
    }
  }, [searchParams]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    setSearched(true);
    const found = findBookingByIdOrMobile(query);
    setResult(found || null);
  };

  // Helper to calculate stage progress
  const getStageIndex = (status: BookingStatus) => {
    return PIPELINE_STAGES.findIndex((s) => s.key === status);
  };

  const currentStageIdx = result ? getStageIndex(result.status) : -1;

  return (
    <div className="min-h-screen bg-[#FAF7F2] py-8 lg:py-12">
      <Breadcrumbs
        items={[
          { label: language === "hi" ? "बुकिंग स्थिति जांचें" : "Track Booking Status" }
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#2A1810]">
            {t.status.title}
          </h1>
          <p className="text-xs sm:text-sm text-[#6E6963] mt-2">
            {t.status.subtitle}
          </p>
        </div>

        {/* Search Input Box */}
        <div className="bg-white rounded-3xl border border-[#E5DCCE] p-6 sm:p-8 shadow-card mb-10">
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-grow">
              <Search className="absolute left-4 top-3.5 w-5 h-5 text-[#6E6963]" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t.status.inputPlaceholder}
                className="w-full pl-12 pr-4 py-3.5 bg-[#FAF7F2] rounded-2xl border border-[#E5DCCE] text-sm text-[#2A1810] focus:ring-1 focus:ring-[#C25E1A] focus:bg-white"
              />
            </div>
            <button
              type="submit"
              className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-[#C25E1A] to-[#9A450E] text-white font-semibold text-sm shadow-md hover:brightness-105 transition-all"
            >
              {t.status.checkButton}
            </button>
          </form>

          <div className="mt-3 flex items-center justify-between text-xs text-[#6E6963]">
            <span>💡 Try sample reference: <strong>GP-849201</strong> or <strong>9876543210</strong></span>
          </div>
        </div>

        {/* Result View */}
        {searched && (
          <div>
            {result ? (
              <div className="space-y-8 animate-fade-in">
                
                {/* Status Card Header */}
                <div className="bg-white rounded-3xl border border-[#DFC07C]/60 p-6 sm:p-8 shadow-card">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E5DCCE]">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#B88E3E]">
                          Request ID
                        </span>
                        <span className="font-serif text-xl font-bold text-[#2A1810]">
                          {result.requestId}
                        </span>
                      </div>
                      <h2 className="font-serif text-2xl font-bold text-[#2A1810] mt-1">
                        {result.ritualName}
                      </h2>
                    </div>

                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FAF5E6] border border-[#DFC07C] text-[#2A1810] text-xs font-bold">
                      <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                      <span>
                        Status: {result.status.replace("_", " ")}
                      </span>
                    </div>
                  </div>

                  {/* Summary Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 border-b border-[#E5DCCE] text-xs">
                    <div>
                      <span className="text-[#6E6963] block mb-0.5">Devotee Name</span>
                      <strong className="text-[#2A1810] text-sm">{result.fullName}</strong>
                    </div>
                    <div>
                      <span className="text-[#6E6963] block mb-0.5">Preferred Date</span>
                      <strong className="text-[#2A1810] text-sm">{formatDate(result.preferredDate)}</strong>
                    </div>
                    <div>
                      <span className="text-[#6E6963] block mb-0.5">Family Group</span>
                      <strong className="text-[#2A1810] text-sm">{result.peopleCount} Persons</strong>
                    </div>
                    <div>
                      <span className="text-[#6E6963] block mb-0.5">Gotra</span>
                      <strong className="text-[#2A1810] text-sm">{result.gotra}</strong>
                    </div>
                  </div>

                  {/* Assigned Pandit Strip */}
                  {result.assignedPanditName && (
                    <div className="mt-6 p-4 rounded-2xl bg-[#FAF5E6] border border-[#DFC07C]/50 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#2A1810] text-[#DFC07C] flex items-center justify-center font-serif font-bold">
                          ॐ
                        </div>
                        <div>
                          <span className="text-[11px] font-semibold text-[#B88E3E] uppercase tracking-wider block">
                            Assigned Teerth Pandit
                          </span>
                          <strong className="font-serif text-sm font-bold text-[#2A1810]">
                            {result.assignedPanditName}
                          </strong>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="inline-flex items-center gap-1 text-xs text-[#25D366] font-semibold">
                          <ShieldCheck className="w-3.5 h-3.5" /> Verified
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Visual Pipeline Stages */}
                <div className="bg-white rounded-3xl border border-[#E5DCCE] p-6 sm:p-8 shadow-card">
                  <h3 className="font-serif text-lg font-bold text-[#2A1810] mb-6">
                    {t.status.statusHeading}
                  </h3>

                  <div className="relative pl-6 sm:pl-8 space-y-6 before:absolute before:left-3 sm:before:left-4 before:top-2 before:bottom-2 before:w-0.5 before:bg-[#E5DCCE]">
                    {PIPELINE_STAGES.map((stage, idx) => {
                      const isCompleted = idx <= currentStageIdx;
                      const isCurrent = idx === currentStageIdx;

                      return (
                        <div key={stage.key} className="relative flex items-start gap-4 group">
                          {/* Indicator Dot */}
                          <div
                            className={`absolute -left-6 sm:-left-8 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                              isCurrent
                                ? "bg-[#C25E1A] text-white ring-4 ring-[#FCE3CE]"
                                : isCompleted
                                ? "bg-[#25D366] text-white"
                                : "bg-[#FAF7F2] border border-[#D2C5B0] text-[#9E9085]"
                            }`}
                          >
                            {isCompleted ? <CheckCircle2 className="w-4 h-4" /> : idx + 1}
                          </div>

                          {/* Stage Content */}
                          <div
                            className={`p-4 rounded-2xl flex-grow border transition-all ${
                              isCurrent
                                ? "bg-[#FAF5E6] border-[#DFC07C]"
                                : isCompleted
                                ? "bg-[#FAF7F2] border-[#E5DCCE]"
                                : "bg-transparent border-transparent opacity-60"
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <h4 className="font-serif text-sm font-bold text-[#2A1810]">
                                {language === "hi" ? stage.hindiLabel : stage.label}
                              </h4>
                              {isCurrent && (
                                <span className="text-[11px] font-bold text-[#C25E1A] uppercase tracking-wider">
                                  Current Stage
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-[#6E6963] mt-0.5">
                              {stage.desc}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Coordinator Direct Connect */}
                <div className="p-6 rounded-3xl bg-[#2A1810] text-[#FAF7F2] flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <h4 className="font-serif text-base font-bold text-white">
                      Need immediate updates from your coordinator?
                    </h4>
                    <p className="text-xs text-[#D2C5B0] mt-0.5">
                      Direct phone and WhatsApp support is available 7:00 AM – 9:00 PM IST.
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <a
                      href="https://wa.me/919097327088"
                      target="_blank"
                      rel="noreferrer"
                      className="px-5 py-2.5 rounded-full bg-[#25D366] text-white text-xs font-semibold hover:bg-[#20ba5a] transition-all flex items-center gap-1.5"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>WhatsApp</span>
                    </a>
                    <a
                      href="tel:+919097327088"
                      className="px-5 py-2.5 rounded-full bg-white/10 border border-[#DFC07C] text-white text-xs font-semibold hover:bg-white/20 transition-all flex items-center gap-1.5"
                    >
                      <Phone className="w-4 h-4 text-[#DFC07C]" />
                      <span>Call (+91 90973 27088)</span>
                    </a>
                  </div>
                </div>

              </div>
            ) : (
              /* Not Found State */
              <div className="bg-white rounded-3xl border border-[#E5DCCE] p-10 text-center shadow-card">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#FAF5E6] flex items-center justify-center text-[#B88E3E]">
                  <Search className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#2A1810]">
                  No Booking Request Found
                </h3>
                <p className="text-xs sm:text-sm text-[#6E6963] max-w-sm mx-auto mt-1 mb-6">
                  We could not locate an active request matching &quot;{query}&quot;. Please verify the Reference ID (e.g. GP-849201) or 10-digit mobile number.
                </p>
                <Link
                  href="/request-booking"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#2A1810] text-[#FAF7F2] text-xs font-semibold hover:bg-[#3D2418] transition-all"
                >
                  <span>Submit a New Booking Request</span>
                </Link>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}

export default function BookingStatusPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-sm text-[#6E6963]">Loading Status Tracker...</div>}>
      <StatusChecker />
    </Suspense>
  );
}
