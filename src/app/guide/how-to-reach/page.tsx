import React from "react";
import Link from "next/link";
import { Train, Plane, Car, MapPin, CheckCircle2, ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SacredDivider } from "@/components/common/MotifDividers";

export const metadata = {
  title: "How to Reach Gaya Ji — Train, Flight & Road Travel Guide",
  description: "Detailed transportation guide for pilgrims visiting Gaya Ji. Railway connectivity, Gaya and Patna airports, expressway routes, and pickup assistance.",
};

export default function HowToReachPage() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] py-8 lg:py-12">
      <Breadcrumbs
        items={[
          { label: "Gaya Ji Guide", href: "/guide" },
          { label: "How to Reach Gaya Ji" }
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2A1810]">
            How to Reach Gaya Ji
          </h1>
          <p className="text-sm sm:text-base text-[#6E6963] mt-3 leading-relaxed">
            Convenient travel options by train, flight, and road for pilgrims arriving from across India and international hubs.
          </p>
          <SacredDivider className="my-4" />
        </div>

        {/* 3 Travel Modes */}
        <div className="space-y-6 mb-12 text-left">
          
          {/* Train */}
          <div className="bg-white rounded-3xl border border-[#E5DCCE] p-6 sm:p-8 shadow-card">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#FAF5E6] text-[#C25E1A] flex items-center justify-center">
                <Train className="w-6 h-6" />
              </div>
              <div>
                <h2 className="font-serif text-xl font-bold text-[#2A1810]">
                  1. Reaching by Train (Gaya Junction - GAYA)
                </h2>
                <span className="text-xs text-[#B88E3E] font-medium">Grand Chord Railway Hub</span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-[#5C4033] leading-relaxed mb-4">
              Gaya Junction is one of the most prominent railway stations in Eastern India on the Delhi-Kolkata Grand Chord line. It enjoys direct daily Rajdhani, Vande Bharat, and Superfast express connectivity with New Delhi, Kolkata (Howrah), Mumbai, Varanasi, Patna, Ranchi, and Bengaluru.
            </p>
            <div className="p-4 rounded-xl bg-[#FAF7F2] text-xs text-[#423E3A] space-y-1.5 border border-[#E5DCCE]">
              <div><strong>Key Direct Trains:</strong> Mahabodhi Express (from Delhi), Howrah-Gaya Vande Bharat, Poorva Express, Purushottam Express, Gaya Rajdhani.</div>
              <div><strong>Distance to Vishnupad Temple:</strong> Approx. 4.5 km (15 mins by e-rickshaw or private cab).</div>
            </div>
          </div>

          {/* Flight */}
          <div className="bg-white rounded-3xl border border-[#E5DCCE] p-6 sm:p-8 shadow-card">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#FAF5E6] text-[#B88E3E] flex items-center justify-center">
                <Plane className="w-6 h-6" />
              </div>
              <div>
                <h2 className="font-serif text-xl font-bold text-[#2A1810]">
                  2. Reaching by Air (Gaya Airport & Patna Airport)
                </h2>
                <span className="text-xs text-[#B88E3E] font-medium">GAY / PAT Airports</span>
              </div>
            </div>
            <div className="space-y-3 text-xs sm:text-sm text-[#5C4033] leading-relaxed mb-4">
              <p>
                <strong>Gaya Airport (GAY):</strong> Located just 9 km from the Vishnupad Temple. Operates domestic flights and seasonal international direct charter flights from SE Asian countries during the pilgrimage season.
              </p>
              <p>
                <strong>Patna Airport (PAT - Jayprakash Narayan International):</strong> Located approx. 100 km from Gaya. It is a major high-frequency aviation hub with dozens of daily flights from Delhi, Mumbai, Bengaluru, Hyderabad, Chennai, and Kolkata.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#FAF7F2] text-xs text-[#423E3A] border border-[#E5DCCE]">
              <strong>Expressway Transfer from Patna:</strong> Direct private AC cabs arranged via the smooth Patna-Gaya 4-lane expressway reach Gaya in just 2 to 2.5 hours.
            </div>
          </div>

          {/* Road */}
          <div className="bg-white rounded-3xl border border-[#E5DCCE] p-6 sm:p-8 shadow-card">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#FAF5E6] text-[#C25E1A] flex items-center justify-center">
                <Car className="w-6 h-6" />
              </div>
              <div>
                <h2 className="font-serif text-xl font-bold text-[#2A1810]">
                  3. Reaching by Road & Private Vehicle
                </h2>
                <span className="text-xs text-[#B88E3E] font-medium">NH-19 / Grand Trunk Road Connectivity</span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-[#5C4033] leading-relaxed mb-4">
              Gaya is connected to National Highway 19 (Grand Trunk Road) via Dobhi (30 km south) and National Highway 22 directly from Patna.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-center">
              <div className="p-2.5 rounded-lg bg-[#FAF7F2] border border-[#E5DCCE]">
                <strong className="block text-[#2A1810]">From Patna</strong>
                <span className="text-[#6E6963]">105 km (~2.5 hrs)</span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#FAF7F2] border border-[#E5DCCE]">
                <strong className="block text-[#2A1810]">From Varanasi</strong>
                <span className="text-[#6E6963]">245 km (~5 hrs)</span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#FAF7F2] border border-[#E5DCCE]">
                <strong className="block text-[#2A1810]">From Ranchi</strong>
                <span className="text-[#6E6963]">180 km (~4 hrs)</span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#FAF7F2] border border-[#E5DCCE]">
                <strong className="block text-[#2A1810]">From Kolkata</strong>
                <span className="text-[#6E6963]">480 km (~8 hrs)</span>
              </div>
            </div>
          </div>

        </div>

        {/* Pickup Assistance Box */}
        <div className="p-8 rounded-3xl bg-[#FAF5E6] border border-[#DFC07C]/60 text-center mb-12">
          <h3 className="font-serif text-xl font-bold text-[#2A1810] mb-2">
            Need Pre-Arranged Station or Airport Pickup?
          </h3>
          <p className="text-xs sm:text-sm text-[#5C4033] max-w-md mx-auto mb-6">
            When submitting your booking request, simply check &quot;Pickup Assistance&quot;. Our coordinator will track your train/flight and have a sanitized cab waiting for your family.
          </p>
          <Link
            href="/request-booking"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#C25E1A] to-[#9A450E] text-white font-bold text-xs sm:text-sm shadow-md hover:brightness-105 transition-all"
          >
            <span>Request Booking with Pickup</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
