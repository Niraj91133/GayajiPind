import React from "react";
import Link from "next/link";
import { ShieldCheck, HeartHandshake, MapPin, Users, ArrowRight, Sparkles } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SacredDivider } from "@/components/common/MotifDividers";

export const metadata = {
  title: "About GayajiPind — Our Story, Gaya Ji Roots & Philosophy",
  description: "Learn about GayajiPind, our deep roots in Gaya Ji pilgrimage coordination, and our commitment to traditional Vedic dignity without commercialization.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] py-8 lg:py-12">
      <Breadcrumbs
        items={[
          { label: "About GayajiPind" }
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FAF5E6] border border-[#DFC07C] text-[#B88E3E] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Traditional Pilgrimage Service</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2A1810]">
            Our Connection with Gaya Ji
          </h1>
          <p className="text-sm sm:text-base text-[#6E6963] mt-3 leading-relaxed">
            Bridging timeless Vedic tradition with compassionate personal assistance for families arriving in the holy city of Gaya.
          </p>
          <SacredDivider className="my-4" />
        </div>

        {/* Section 1: Who We Are & Why We Exist */}
        <section className="bg-white rounded-3xl border border-[#E5DCCE] p-6 sm:p-10 shadow-card mb-8 text-left space-y-4">
          <h2 className="font-serif text-2xl font-bold text-[#2A1810] mb-2">
            Why GayajiPind Exists
          </h2>
          <p className="text-xs sm:text-sm text-[#5C4033] leading-relaxed">
            For generations, families across India and the diaspora have carried a sacred wish: to perform Pind Daan for their departed parents and ancestors in Gaya Ji. Yet, first-time pilgrims often feel overwhelmed by uncertainty—not knowing which ritual is scripture-mandated, how to identify an authentic Teerth Purohit, or how elderly parents will navigate the temple crowds.
          </p>
          <p className="text-xs sm:text-sm text-[#5C4033] leading-relaxed">
            GayajiPind was established to act as a <strong>Trusted Digital Pilgrimage Coordinator</strong>. We do not treat ancestral pilgrimage as an impersonal ecommerce transaction. Instead, we provide personal human guidance from the moment you submit an inquiry until you receive the eternal &quot;Suphal&quot; blessing at the Akshayavat tree.
          </p>
        </section>

        {/* 3 Pillars of GayajiPind */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 text-left">
          <div className="p-6 rounded-2xl bg-[#FAF5E6] border border-[#DFC07C]/50">
            <div className="w-10 h-10 rounded-xl bg-white text-[#C25E1A] flex items-center justify-center mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-base font-bold text-[#2A1810] mb-2">
              Authentic Lineage
            </h3>
            <p className="text-xs text-[#5C4033] leading-relaxed">
              Direct association with verified Gayawal Purohits who have served the Vishnupad Sanctum for generations.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#FAF5E6] border border-[#DFC07C]/50">
            <div className="w-10 h-10 rounded-xl bg-white text-[#B88E3E] flex items-center justify-center mb-4">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-base font-bold text-[#2A1810] mb-2">
              Human-First Care
            </h3>
            <p className="text-xs text-[#5C4033] leading-relaxed">
              No chatbots or automated checkout gates. A real coordinator in Gaya Ji coordinates your family&apos;s visit with warmth.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#FAF5E6] border border-[#DFC07C]/50">
            <div className="w-10 h-10 rounded-xl bg-white text-[#C25E1A] flex items-center justify-center mb-4">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-base font-bold text-[#2A1810] mb-2">
              Elderly Focused
            </h3>
            <p className="text-xs text-[#5C4033] leading-relaxed">
              Thoughtfully arranged door-to-ghat transport, minimal walking routes, and dedicated support for senior pilgrims.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 rounded-3xl bg-[#2A1810] text-[#FAF7F2] text-center shadow-xl">
          <h3 className="font-serif text-2xl font-bold text-white mb-2">
            Plan Your Family&apos;s Sacred Pilgrimage
          </h3>
          <p className="text-xs sm:text-sm text-[#D2C5B0] max-w-md mx-auto mb-6">
            Speak with our pilgrimage coordinator today to arrange your dates and verified Teerth Pandit.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/request-booking"
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#C25E1A] to-[#9A450E] text-white font-bold text-xs sm:text-sm shadow-md hover:brightness-105 transition-all"
            >
              Request Booking
            </Link>
            <Link
              href="/pandits"
              className="px-7 py-3.5 rounded-full bg-white/10 border border-[#DFC07C] text-white font-semibold text-xs sm:text-sm hover:bg-white/20 transition-all"
            >
              Meet Our Pandits
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
