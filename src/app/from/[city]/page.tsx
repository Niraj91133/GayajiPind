import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Train, Plane, Car, MapPin, Clock, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { getCityBySlug, CITIES_DATA } from "@/data/cities";
import { RITUALS_DATA } from "@/data/rituals";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SacredDivider } from "@/components/common/MotifDividers";

export async function generateStaticParams() {
  return CITIES_DATA.map((c) => ({ city: c.slug }));
}

export default async function CityLandingPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const cityData = getCityBySlug(city);

  if (!cityData) {
    notFound();
  }

  const recommendedRituals = RITUALS_DATA.filter((r) =>
    cityData.recommendedRituals.includes(r.slug)
  );

  return (
    <div className="min-h-screen bg-[#FAF7F2] py-8 lg:py-12">
      <Breadcrumbs
        items={[
          { label: "Pilgrimage Routes" },
          { label: `From ${cityData.name}` }
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* SEO Hero Header (Rules #51, #87) */}
        <div className="bg-white rounded-3xl border border-[#DFC07C]/60 p-6 sm:p-10 shadow-card mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF5E6] border border-[#DFC07C] text-[#B88E3E] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Dedicated City Pilgrimage Route</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2A1810]">
            Pind Daan in Gaya Ji from {cityData.name}
          </h1>
          <p className="text-sm sm:text-base text-[#5C4033] mt-2 leading-relaxed">
            Arranging your sacred ancestral pilgrimage to Gaya Ji from {cityData.name} ({cityData.distanceKm} km away). Verified Teerth Pandit coordination, train/flight assistance, and comfortable family stay.
          </p>

          <div className="mt-6 pt-4 border-t border-[#E5DCCE] flex flex-wrap items-center gap-3">
            <Link
              href={`/request-booking`}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-[#C25E1A] to-[#9A450E] text-white font-bold text-xs sm:text-sm shadow-md hover:brightness-105 transition-all"
            >
              Request Booking from {cityData.name}
            </Link>
            <a
              href="tel:+919097327088"
              className="px-6 py-3 rounded-full bg-[#FAF5E6] border border-[#DFC07C] text-[#2A1810] font-semibold text-xs sm:text-sm hover:bg-[#F5EFE6] transition-all"
            >
              Talk to Coordinator (+91 90973 27088)
            </a>
          </div>
        </div>

        {/* Travel Information Breakdown (Rule #51) */}
        <section className="bg-white rounded-3xl border border-[#E5DCCE] p-6 sm:p-10 shadow-card mb-8 space-y-6">
          <div>
            <h2 className="font-serif text-2xl font-bold text-[#2A1810] mb-2">
              Traveling from {cityData.name} to Gaya Ji
            </h2>
            <p className="text-xs text-[#6E6963]">
              Approximate distance: <strong>{cityData.distanceKm} km</strong>
            </p>
          </div>

          <div className="space-y-4">
            <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E5DCCE] flex items-start gap-3.5">
              <div className="p-2 rounded-xl bg-[#FAF5E6] text-[#C25E1A] flex-shrink-0">
                <Train className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-sm font-bold text-[#2A1810]">
                  By Train
                </h3>
                <p className="text-xs text-[#5C4033] mt-0.5 leading-relaxed">
                  {cityData.travelOptions.train}
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E5DCCE] flex items-start gap-3.5">
              <div className="p-2 rounded-xl bg-[#FAF5E6] text-[#B88E3E] flex-shrink-0">
                <Plane className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-sm font-bold text-[#2A1810]">
                  By Flight
                </h3>
                <p className="text-xs text-[#5C4033] mt-0.5 leading-relaxed">
                  {cityData.travelOptions.flight}
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E5DCCE] flex items-start gap-3.5">
              <div className="p-2 rounded-xl bg-[#FAF5E6] text-[#C25E1A] flex-shrink-0">
                <Car className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-sm font-bold text-[#2A1810]">
                  By Road / Cab
                </h3>
                <p className="text-xs text-[#5C4033] mt-0.5 leading-relaxed">
                  {cityData.travelOptions.road}
                </p>
              </div>
            </div>
          </div>

          {/* Highlights for this city */}
          <div className="pt-4 border-t border-[#E5DCCE]">
            <span className="text-xs font-bold text-[#B88E3E] uppercase tracking-wider block mb-2">
              Route Specific Highlights:
            </span>
            <ul className="space-y-1.5 text-xs text-[#423E3A]">
              {cityData.highlights.map((hl, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#C25E1A] font-bold">✓</span>
                  <span>{hl}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Recommended Rituals for Pilgrims from this City */}
        <section className="bg-white rounded-3xl border border-[#E5DCCE] p-6 sm:p-10 shadow-card mb-8">
          <h2 className="font-serif text-2xl font-bold text-[#2A1810] mb-4">
            Recommended Rituals for Pilgrims from {cityData.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {recommendedRituals.map((r) => (
              <div key={r.id} className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E5DCCE] flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-semibold text-[#C25E1A] uppercase tracking-wider">
                    {r.duration}
                  </span>
                  <h3 className="font-serif text-base font-bold text-[#2A1810] mt-0.5 mb-1">
                    {r.name}
                  </h3>
                  <p className="text-xs text-[#6E6963] leading-relaxed mb-4">
                    {r.shortDescription}
                  </p>
                </div>
                <Link
                  href={`/rituals/${r.slug}`}
                  className="text-xs font-bold text-[#C25E1A] hover:underline"
                >
                  View Full Details →
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <div className="p-8 rounded-3xl bg-[#2A1810] text-[#FAF7F2] text-center shadow-xl">
          <h3 className="font-serif text-2xl font-bold text-white mb-2">
            Plan Your Journey from {cityData.name}
          </h3>
          <p className="text-xs sm:text-sm text-[#D2C5B0] max-w-md mx-auto mb-6">
            Our coordinator will assist you with pickup at Gaya Junction or Patna Airport, assign your Teerth Pandit, and confirm hotel accommodations.
          </p>
          <Link
            href="/request-booking"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#C25E1A] to-[#9A450E] text-white font-bold text-xs sm:text-sm shadow-md hover:brightness-105 transition-all"
          >
            <span>Request Booking Now</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
