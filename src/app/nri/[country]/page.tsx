import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Globe, Plane, Clock, ShieldCheck, MessageCircle, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { getNriCountryBySlug, NRI_COUNTRIES_DATA } from "@/data/nriCountries";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SacredDivider } from "@/components/common/MotifDividers";

export async function generateStaticParams() {
  return NRI_COUNTRIES_DATA.map((c) => ({ country: c.slug }));
}

export default async function NriCountryPage({
  params,
}: {
  params: Promise<{ country: string }>;
}) {
  const { country } = await params;
  const countryData = getNriCountryBySlug(country);

  if (!countryData) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#FAF7F2] py-8 lg:py-12">
      <Breadcrumbs
        items={[
          { label: "NRI Support", href: "/nri" },
          { label: countryData.country }
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Country Header Card */}
        <div className="bg-white rounded-3xl border border-[#DFC07C]/60 p-6 sm:p-10 shadow-card mb-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-4xl">{countryData.flag}</span>
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#FAF5E6] text-[#B88E3E] text-xs font-bold uppercase tracking-wider">
                NRI Pilgrimage Coordination
              </div>
              <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2A1810]">
                Pind Daan in Gaya Ji from {countryData.country}
              </h1>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-[#5C4033] leading-relaxed mt-2">
            Tailored pilgrimage arrangements for Indian-origin families and devotees traveling from {countryData.country} to Gaya Ji, Bihar.
          </p>

          <div className="mt-6 pt-4 border-t border-[#E5DCCE] flex flex-wrap items-center gap-3">
            <Link
              href="/request-booking"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-[#C25E1A] to-[#9A450E] text-white font-bold text-xs sm:text-sm shadow-md hover:brightness-105 transition-all"
            >
              Request Booking from {countryData.country}
            </Link>
            <a
              href={`https://wa.me/919097327088?text=${encodeURIComponent(
                `Pranam Pandit Ji. I am contacting from ${countryData.country} regarding Gaya Ji Pind Daan pilgrimage assistance.`
              )}`}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-full bg-[#25D366] text-white font-bold text-xs sm:text-sm hover:bg-[#20ba5a] transition-all flex items-center gap-1.5"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Consultation (+91 90973 27088)</span>
            </a>
          </div>
        </div>

        {/* Country Logistics Recommendations */}
        <div className="bg-white rounded-3xl border border-[#E5DCCE] p-6 sm:p-10 shadow-card mb-8 space-y-6">
          <div>
            <h2 className="font-serif text-2xl font-bold text-[#2A1810] mb-2">
              Flight Hubs & Travel Routing
            </h2>
            <p className="text-xs text-[#6E6963]">
              Major departure hubs: <strong>{countryData.flightHubs.join(", ")}</strong>
            </p>
          </div>

          <ul className="space-y-3 text-xs sm:text-sm text-[#423E3A]">
            {countryData.recommendations.map((rec, idx) => (
              <li key={idx} className="flex items-start gap-2.5 p-3.5 rounded-xl bg-[#FAF7F2] border border-[#E5DCCE]">
                <CheckCircle2 className="w-4 h-4 text-[#25D366] flex-shrink-0 mt-0.5" />
                <span>{rec}</span>
              </li>
            ))}
          </ul>

          <div className="p-4 rounded-2xl bg-[#FAF5E6] border border-[#DFC07C]/50 text-xs text-[#5C4033] space-y-2">
            <div>
              <strong>Recommended Travel Season:</strong> {countryData.popularTimings}
            </div>
            <div>
              <strong>Timezone Coordination:</strong> {countryData.timezoneNote}
            </div>
          </div>
        </div>

        {/* Recommended Package */}
        <div className="p-8 rounded-3xl bg-[#2A1810] text-[#FAF7F2] text-center shadow-xl">
          <h3 className="font-serif text-2xl font-bold text-white mb-2">
            Recommended: 3-Day Complete Pilgrimage
          </h3>
          <p className="text-xs sm:text-sm text-[#D2C5B0] max-w-md mx-auto mb-6">
            Allows international devotees comfortable recovery from long flights, covering Falgu, Vishnupad, and Pretshila at an unhurried, peaceful pace.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/rituals/3-day-complete-pind-daan"
              className="px-6 py-3 rounded-full bg-white text-[#2A1810] font-bold text-xs sm:text-sm hover:bg-[#FAF5E6] transition-all"
            >
              View 3-Day Ritual Details
            </Link>
            <Link
              href="/request-booking"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-[#C25E1A] to-[#9A450E] text-white font-bold text-xs sm:text-sm shadow-md hover:brightness-105 transition-all"
            >
              Submit Booking Request
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
