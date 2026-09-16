"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Phone,
  MessageCircle,
  HelpCircle,
  Clock,
  MapPin,
  Calendar,
  AlertTriangle,
  ChevronDown,
  CheckCircle2,
  Sparkles,
  Send
} from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FAQS_DATA } from "@/data/faqs";
import { SacredDivider } from "@/components/common/MotifDividers";

export default function HelpCenterPage() {
  const [openFaqId, setOpenFaqId] = useState<string | null>("faq-1");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const [contactName, setContactName] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [contactQuery, setContactQuery] = useState("");
  const [messageSent, setMessageSent] = useState(false);

  const categories = ["All", "Rituals", "Booking", "Travel & Stay", "Gotra & Samagri"];

  const filteredFaqs = FAQS_DATA.filter(
    (f) => selectedCategory === "All" || f.category === selectedCategory
  );

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName || !contactPhone) return;
    setMessageSent(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] py-8 lg:py-12">
      <Breadcrumbs
        items={[
          { label: "Help Center & Support" }
        ]}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FAF5E6] border border-[#DFC07C] text-[#B88E3E] text-xs font-semibold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Devotee Assistance & Helplines</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2A1810]">
            Help Center & Direct Support
          </h1>
          <p className="text-sm sm:text-base text-[#6E6963] mt-3 leading-relaxed">
            We are here to answer every question, guide you through family traditions, and ensure your pilgrimage is smooth and dignified.
          </p>
          <SacredDivider className="my-4" />
        </div>

        {/* Top 3 Quick Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14 text-left">
          
          {/* Phone Call Card */}
          <div className="bg-white rounded-3xl border border-[#E5DCCE] p-6 shadow-card flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#FAF5E6] text-[#C25E1A] flex items-center justify-center mb-4">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#2A1810] mb-1">
                Call Our Coordinator
              </h3>
              <p className="text-xs text-[#6E6963] mb-4">
                Available daily from 6:00 AM to 9:30 PM IST for immediate pilgrimage guidance.
              </p>
            </div>
            <a
              href="tel:+919097327088"
              className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#2A1810] text-[#FAF7F2] text-xs font-bold hover:bg-[#3D2418] transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-[#DFC07C]" />
              <span>+91 90973 27088</span>
            </a>
          </div>

          {/* WhatsApp Direct Card */}
          <div className="bg-white rounded-3xl border border-[#E5DCCE] p-6 shadow-card flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#E8F8EE] text-[#25D366] flex items-center justify-center mb-4">
                <MessageCircle className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#2A1810] mb-1">
                WhatsApp Chat
              </h3>
              <p className="text-xs text-[#6E6963] mb-4">
                Chat directly with our coordinator to ask ritual questions or share travel tickets.
              </p>
            </div>
            <a
              href="https://wa.me/919097327088?text=Pranam%20Pandit%20Ji.%20I%20need%20assistance%20with%20Gaya%20Ji%20Pind%20Daan."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#25D366] text-white text-xs font-bold hover:bg-[#20ba5a] transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Chat on WhatsApp (+91 90973 27088)</span>
            </a>
          </div>

          {/* Emergency / Arrival Assistance */}
          <div className="bg-[#FAF5E6] rounded-3xl border border-[#DFC07C]/60 p-6 shadow-card flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#2A1810] text-[#DFC07C] flex items-center justify-center mb-4">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#2A1810] mb-1">
                On-Ground Emergency
              </h3>
              <p className="text-xs text-[#5C4033] mb-4">
                Already arrived in Gaya Ji and need immediate station pickup or temple assistance?
              </p>
            </div>
            <a
              href="tel:+919097327088"
              className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-gradient-to-r from-[#C25E1A] to-[#9A450E] text-white text-xs font-bold shadow-md hover:brightness-105 transition-all"
            >
              <span>Emergency Support (+91 90973 27088)</span>
            </a>
          </div>

        </div>

        {/* Categorized FAQs Hub */}
        <div className="bg-white rounded-3xl border border-[#E5DCCE] p-6 sm:p-10 shadow-card mb-14 text-left">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-[#E5DCCE]">
            <div>
              <h2 className="font-serif text-2xl font-bold text-[#2A1810]">
                Knowledge & FAQ Directory
              </h2>
              <p className="text-xs text-[#6E6963] mt-0.5">
                Browse answers by category
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    selectedCategory === cat
                      ? "bg-[#2A1810] text-[#DFC07C] shadow-sm"
                      : "bg-[#FAF7F2] border border-[#E5DCCE] text-[#5C4033] hover:bg-[#F5EFE6]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Accordion list */}
          <div className="space-y-3">
            {filteredFaqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="rounded-2xl border border-[#E5DCCE] overflow-hidden bg-[#FAF7F2]"
                >
                  <button
                    onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 text-left"
                  >
                    <span className="font-serif text-sm sm:text-base font-bold text-[#2A1810] pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown className={`w-4 h-4 transition-transform flex-shrink-0 ${isOpen ? "rotate-180 text-[#C25E1A]" : "text-[#6E6963]"}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-[#5C4033] leading-relaxed border-t border-[#E5DCCE]/50 bg-white">
                      <p className="pt-3">{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Send Direct Enquiry Form */}
        <div className="bg-[#FAF7F2] rounded-3xl border border-[#DFC07C]/50 p-6 sm:p-10 shadow-card text-left">
          {messageSent ? (
            <div className="text-center py-6">
              <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-[#FAF5E6] text-[#B88E3E] flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#2A1810] mb-1">
                Inquiry Received
              </h3>
              <p className="text-xs sm:text-sm text-[#6E6963] max-w-sm mx-auto mb-4">
                Thank you. Our Gaya Ji coordinator will call or message your number (+91 {contactPhone}) shortly.
              </p>
              <button
                onClick={() => setMessageSent(false)}
                className="px-5 py-2 rounded-full bg-[#2A1810] text-[#FAF7F2] text-xs font-semibold"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <div>
              <h2 className="font-serif text-2xl font-bold text-[#2A1810] mb-1">
                Send a Message to Our Gaya Ji Coordinator
              </h2>
              <p className="text-xs text-[#6E6963] mb-6">
                Have a specific question regarding dates, Gotra, or travel? Share your details below.
              </p>

              <form onSubmit={handleContactSubmit} className="space-y-4 max-w-2xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#2A1810] mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      placeholder="e.g. Anand Sharma"
                      className="w-full px-4 py-2.5 bg-white rounded-xl border border-[#E5DCCE] text-xs sm:text-sm text-[#2A1810] focus:ring-1 focus:ring-[#C25E1A]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#2A1810] mb-1">
                      Mobile Number (10 digits) *
                    </label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 rounded-l-xl border border-r-0 border-[#E5DCCE] bg-[#F5EFE6] text-xs font-medium text-[#2A1810]">
                        +91
                      </span>
                      <input
                        type="tel"
                        required
                        maxLength={10}
                        value={contactPhone}
                        onChange={(e) => setContactPhone(e.target.value.replace(/\D/g, ""))}
                        placeholder="9876543210"
                        className="w-full px-4 py-2.5 bg-white rounded-r-xl border border-[#E5DCCE] text-xs sm:text-sm text-[#2A1810] focus:ring-1 focus:ring-[#C25E1A]"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#2A1810] mb-1">
                    Your Question / Requirement
                  </label>
                  <textarea
                    rows={3}
                    value={contactQuery}
                    onChange={(e) => setContactQuery(e.target.value)}
                    placeholder="Describe what you would like to know (e.g., traveling with senior parents, wanting guidance on Tripindi Shradh)..."
                    className="w-full px-4 py-2.5 bg-white rounded-xl border border-[#E5DCCE] text-xs sm:text-sm text-[#2A1810] focus:ring-1 focus:ring-[#C25E1A]"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-[#C25E1A] to-[#9A450E] text-white font-bold text-xs sm:text-sm shadow-md hover:brightness-105 transition-all"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Inquiry to Coordinator</span>
                </button>
              </form>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
