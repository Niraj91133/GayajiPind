import React from "react";
import Link from "next/link";
import { ShieldCheck, Sparkles, BookOpen, Clock, MapPin, CheckCircle, ArrowRight, HeartHandshake } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SacredDivider } from "@/components/common/MotifDividers";

export const metadata = {
  title: "Pind Daan in Gaya Ji — Comprehensive Vedic Vidhi & Significance Guide",
  description: "Learn why Pind Daan in Gaya Ji is the most potent ancestral pilgrimage. Step-by-step Vidhi, Ramayana significance, and preparations.",
};

export default function PindDaanGuidePage() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] py-8 lg:py-12">
      <Breadcrumbs
        items={[
          { label: "Pind Daan Guide" }
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FAF5E6] border border-[#DFC07C] text-[#B88E3E] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Vedic Shastra Guide</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2A1810]">
            Pind Daan in Gaya Ji: Significance & Vidhi
          </h1>
          <p className="text-sm sm:text-base text-[#6E6963] mt-3 leading-relaxed">
            Understanding the spiritual essence, scriptural roots, and step-by-step traditional procedure of ancestral offerings in the holy city of Gaya.
          </p>
          <SacredDivider className="my-4" />
        </div>

        {/* Section 1: Why is Gaya Ji Supreme for Pind Daan? */}
        <section className="bg-white rounded-3xl border border-[#E5DCCE] p-6 sm:p-10 shadow-card mb-8 text-left">
          <h2 className="font-serif text-2xl font-bold text-[#2A1810] mb-4">
            Why is Gaya Ji the Supreme Tirtha for Pind Daan?
          </h2>
          <div className="space-y-4 text-xs sm:text-sm text-[#5C4033] leading-relaxed">
            <p>
              According to the ancient <em>Vayu Purana</em> and <em>Garuda Purana</em>, Gaya Ji is consecrated as the holy body of the devout demon king Gayasura, upon whom Lord Vishnu placed His lotus foot (Vishnupada). Lord Vishnu bestowed a cosmic boon: anyone who offers ancestral balls of barley or rice flour (Pinda) in this sacred realm will liberate their departed ancestors from all mortal debts and lower realms, guiding them directly into Vaikuntha.
            </p>
            <p>
              Unlike standard Shradh ceremonies performed annually at home, a Pind Daan performed once in Gaya Ji is celebrated as <strong>Akshaya (eternal)</strong>—meaning the merit never exhausts across cosmic cycles.
            </p>
          </div>

          <div className="mt-6 p-4 rounded-2xl bg-[#FAF5E6] border border-[#DFC07C]/50 text-xs text-[#5C4033] flex items-center gap-3">
            <BookOpen className="w-5 h-5 text-[#B88E3E] flex-shrink-0" />
            <span>
              <strong>Treta Yuga Legend:</strong> Lord Rama, accompanied by Mata Sita and Lakshmana, performed Pind Daan for King Dasharatha on the banks of Falgu River, making this tradition eternal.
            </span>
          </div>
        </section>

        {/* Section 2: The Core 3-Vedi Principle */}
        <section className="bg-white rounded-3xl border border-[#E5DCCE] p-6 sm:p-10 shadow-card mb-8 text-left">
          <h2 className="font-serif text-2xl font-bold text-[#2A1810] mb-2">
            The Three Inviolable Vedis (Panch-Kroshi Core)
          </h2>
          <p className="text-xs text-[#6E6963] mb-6">
            Even if a devotee has limited time, the complete spiritual merit of Gaya pilgrimage is fulfilled by performing rites at these three primordial spots:
          </p>

          <div className="space-y-4">
            <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E5DCCE] flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-[#2A1810] text-[#DFC07C] font-bold text-xs flex items-center justify-center flex-shrink-0 mt-1">
                1
              </div>
              <div>
                <h3 className="font-serif text-base font-bold text-[#2A1810]">
                  Falgu River (Antarsalila)
                </h3>
                <p className="text-xs text-[#5C4033] mt-0.5">
                  The river of inner sanctification. Pilgrims begin with Prokshan / Snan, sacred Sankalp with family Gotra, and Jal Tarpan using black sesame and Kusha grass.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E5DCCE] flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-[#2A1810] text-[#DFC07C] font-bold text-xs flex items-center justify-center flex-shrink-0 mt-1">
                2
              </div>
              <div>
                <h3 className="font-serif text-base font-bold text-[#2A1810]">
                  Vishnupad Mandir Sanctum
                </h3>
                <p className="text-xs text-[#5C4033] mt-0.5">
                  The epicentre of ancestral liberation. Pinds made of pure barley flour, ghee, honey, and sacred jal are reverently placed upon Lord Vishnu’s rock footprints.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E5DCCE] flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-[#2A1810] text-[#DFC07C] font-bold text-xs flex items-center justify-center flex-shrink-0 mt-1">
                3
              </div>
              <div>
                <h3 className="font-serif text-base font-bold text-[#2A1810]">
                  Akshayavat Vriksh (Immortal Banyan)
                </h3>
                <p className="text-xs text-[#5C4033] mt-0.5">
                  The eternal banyan tree where the final pinda is offered. Here, Gayawal Teerth Purohits bestow the sacred &quot;Suphal&quot; (fruitful culmination blessing) confirming the liberation of pitrus.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Step-by-Step Vidhi Procedure */}
        <section className="bg-white rounded-3xl border border-[#E5DCCE] p-6 sm:p-10 shadow-card mb-8 text-left">
          <h2 className="font-serif text-2xl font-bold text-[#2A1810] mb-4 pb-3 border-b border-[#E5DCCE]">
            Standard Step-by-Step Ritual Sequence
          </h2>

          <ol className="space-y-4 text-xs sm:text-sm text-[#423E3A]">
            <li className="flex items-start gap-3">
              <span className="font-bold text-[#C25E1A]">Step 1:</span>
              <div>
                <strong>Mundan / Cleansing (Optional as per family tradition):</strong> Karta may perform ceremonial trimming, followed by ritual bath at Falgu Ghats.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-[#C25E1A]">Step 2:</span>
              <div>
                <strong>Maha-Sankalp:</strong> Pandit recites ancestral lineages across paternal, maternal, and in-laws Gotras invoking Lord Gadadhar.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-[#C25E1A]">Step 3:</span>
              <div>
                <strong>Pinda Preparation:</strong> 16 or 64 sacred pinds prepared from barley flour (Jau ka atta), black sesame (Kala til), jaggery, and honey.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-[#C25E1A]">Step 4:</span>
              <div>
                <strong>Tarpan & Offerings:</strong> Water oblations poured through kusha rings onto the sacred stones.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-[#C25E1A]">Step 5:</span>
              <div>
                <strong>Brahmin Bhojan & Suphal:</strong> Concluding feast, Dakshina offering to Teerth Purohits, and receiving eternal blessing.
              </div>
            </li>
          </ol>
        </section>

        {/* Section 4: What to Know Before Visiting */}
        <section className="bg-[#FAF5E6] rounded-3xl border border-[#DFC07C]/60 p-6 sm:p-10 shadow-card mb-12 text-left">
          <h2 className="font-serif text-2xl font-bold text-[#2A1810] mb-4">
            What to Know Before Visiting Gaya Ji
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#5C4033]">
            <div className="p-3.5 rounded-xl bg-white border border-[#E5DCCE]">
              <strong className="block text-[#2A1810] mb-1">Attire Guidelines:</strong>
              Men should wear traditional Dhoti/Kurta or clean pants. Women should wear Saree or Salwar Suits.
            </div>
            <div className="p-3.5 rounded-xl bg-white border border-[#E5DCCE]">
              <strong className="block text-[#2A1810] mb-1">Unknown Gotra:</strong>
              If you don&apos;t know your Gotra, Pandit will use Kashyap Gotra. It does not affect ritual efficacy.
            </div>
            <div className="p-3.5 rounded-xl bg-white border border-[#E5DCCE]">
              <strong className="block text-[#2A1810] mb-1">Senior Citizens:</strong>
              E-rickshaws and wheelchairs are pre-arranged directly to temple corridors.
            </div>
            <div className="p-3.5 rounded-xl bg-white border border-[#E5DCCE]">
              <strong className="block text-[#2A1810] mb-1">Timing:</strong>
              Rituals start early at 6:00 AM or 7:00 AM for pleasant temple atmosphere.
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/request-booking"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#C25E1A] to-[#9A450E] text-white font-bold text-sm sm:text-base shadow-xl hover:brightness-105 transition-all"
          >
            <span>Request Your Gaya Ji Pilgrimage Booking</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
