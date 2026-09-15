import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ShieldCheck, Award, Globe, BookOpen, MapPin, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { getPanditBySlug } from "@/data/pandits";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SacredDivider } from "@/components/common/MotifDividers";

export default async function PanditDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const pandit = getPanditBySlug(slug);

  if (!pandit) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#FAF7F2] py-8 lg:py-12">
      <Breadcrumbs
        items={[
          { label: "Our Pandits", href: "/pandits" },
          { label: pandit.name }
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Profile Header Card */}
        <div className="bg-white rounded-3xl border border-[#DFC07C]/60 overflow-hidden shadow-card mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-12">
            
            {/* Left Image */}
            <div className="sm:col-span-5 relative bg-[#2A1810] min-h-[300px]">
              <img
                src={pandit.image}
                alt={pandit.name}
                className="w-full h-full object-cover object-top opacity-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2A1810] via-transparent to-transparent sm:hidden" />
            </div>

            {/* Right Details */}
            <div className="sm:col-span-7 p-6 sm:p-8 flex flex-col justify-center text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF5E6] border border-[#DFC07C] text-[#B88E3E] text-xs font-bold uppercase tracking-wider mb-3 self-start">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C25E1A]" />
                <span>{pandit.verificationBadge}</span>
              </div>

              <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#2A1810]">
                {pandit.name}
              </h1>
              <p className="text-xs sm:text-sm font-semibold text-[#C25E1A] mt-0.5 mb-4">
                {pandit.title}
              </p>

              <div className="grid grid-cols-2 gap-3 mb-6 text-xs">
                <div className="p-3 bg-[#FAF7F2] rounded-xl border border-[#E5DCCE]">
                  <span className="text-[#6E6963] block">Experience</span>
                  <strong className="text-sm text-[#2A1810]">{pandit.experienceYears}+ Years</strong>
                </div>
                <div className="p-3 bg-[#FAF7F2] rounded-xl border border-[#E5DCCE]">
                  <span className="text-[#6E6963] block">Gotra</span>
                  <strong className="text-sm text-[#2A1810]">{pandit.gotra}</strong>
                </div>
              </div>

              <div className="space-y-2 text-xs text-[#5C4033] mb-6">
                <div>
                  <strong>Lineage:</strong> {pandit.lineage}
                </div>
                <div>
                  <strong>Location:</strong> {pandit.location}
                </div>
                <div>
                  <strong>Languages:</strong> {pandit.languages.join(", ")}
                </div>
              </div>

              <Link
                href="/request-booking"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#C25E1A] to-[#9A450E] text-white font-bold text-xs sm:text-sm shadow-md hover:brightness-105 transition-all text-center"
              >
                <span>Request Booking with this Pandit</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </div>

        {/* Biography & Vedic Expertise */}
        <div className="bg-white rounded-3xl border border-[#E5DCCE] p-6 sm:p-10 shadow-card mb-8 text-left space-y-6">
          <div>
            <h2 className="font-serif text-2xl font-bold text-[#2A1810] mb-3 pb-2 border-b border-[#E5DCCE]">
              About & Vedic Heritage
            </h2>
            <p className="text-xs sm:text-sm text-[#5C4033] leading-relaxed">
              {pandit.bio}
            </p>
          </div>

          <div>
            <h3 className="font-serif text-xl font-bold text-[#2A1810] mb-3">
              Specialized Vedic Rituals
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {pandit.specializations.map((spec, idx) => (
                <div key={idx} className="flex items-center gap-2 p-3 rounded-xl bg-[#FAF7F2] border border-[#E5DCCE] text-xs text-[#2A1810] font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#25D366] flex-shrink-0" />
                  <span>{spec}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trust & Transparency Strip */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#FAF5E6] border border-[#DFC07C]/50 text-left">
          <h3 className="font-serif text-lg font-bold text-[#2A1810] mb-2">
            No Intermediaries, Direct Teerth Pandit Coordination
          </h3>
          <p className="text-xs text-[#5C4033] leading-relaxed">
            When you request your booking on GayajiPind, your family is assigned directly to verified scholars like {pandit.name}. All ritual timings, samagri requirements, and Sankalp names are confirmed directly prior to your arrival in Gaya Ji.
          </p>
        </div>

      </div>
    </div>
  );
}
