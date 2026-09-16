"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import {
  CheckCircle2,
  Calendar,
  Users,
  User,
  Phone,
  MessageCircle,
  MapPin,
  HelpCircle,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  Hotel,
  Car,
  Heart,
  Clock,
  Check
} from "lucide-react";
import { useLanguage } from "@/components/common/LanguageContext";
import { RITUALS_DATA } from "@/data/rituals";
import { BookingRequest, RitualSlug } from "@/types";
import { generateBookingId, formatDate } from "@/lib/utils";
import { saveBookingRequest } from "@/lib/db";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { TalkToPanditModal } from "@/components/common/TalkToPanditModal";

function BookingForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { language, t } = useLanguage();

  const [step, setStep] = useState<number>(1);
  const [panditModalOpen, setPanditModalOpen] = useState(false);

  // Form State
  const [ritual, setRitual] = useState<RitualSlug | "not-sure">("1-day-pind-daan");
  const [preferredDate, setPreferredDate] = useState("");
  const [peopleCount, setPeopleCount] = useState(2);
  const [fullName, setFullName] = useState("");
  const [mobile, setMobile] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [sameAsMobile, setSameAsMobile] = useState(true);
  const [city, setCity] = useState("");
  const [gotra, setGotra] = useState("");
  const [knowsGotra, setKnowsGotra] = useState(true);

  // Assistance Add-ons
  const [seniorAssistance, setSeniorAssistance] = useState(false);
  const [seniorDetails, setSeniorDetails] = useState("");
  const [hotelAssistance, setHotelAssistance] = useState(false);
  const [hotelDetails, setHotelDetails] = useState("");
  const [pickupAssistance, setPickupAssistance] = useState(false);
  const [transportMode, setTransportMode] = useState<"Train" | "Gaya Airport" | "Patna Airport" | "Road" | "Own vehicle" | "Not decided">("Train");

  // Submitted Record
  const [submittedBooking, setSubmittedBooking] = useState<BookingRequest | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Prepopulate from URL params if available
  useEffect(() => {
    const urlRitual = searchParams.get("ritual") as RitualSlug;
    if (urlRitual && RITUALS_DATA.some((r) => r.slug === urlRitual)) {
      setRitual(urlRitual);
    }
  }, [searchParams]);

  // Handle WhatsApp sync
  useEffect(() => {
    if (sameAsMobile) {
      setWhatsapp(mobile);
    }
  }, [mobile, sameAsMobile]);

  // Validation checks
  const isStep1Valid = !!ritual;
  const isStep2Valid = !!preferredDate;
  const isStep3Valid = peopleCount >= 1;
  const isStep4Valid =
    fullName.trim().length >= 2 &&
    mobile.trim().length === 10 &&
    (sameAsMobile || whatsapp.trim().length >= 10);

  const handleNext = () => {
    if (step === 1 && !isStep1Valid) return;
    if (step === 2 && !isStep2Valid) return;
    if (step === 3 && !isStep3Valid) return;
    if (step === 4 && !isStep4Valid) return;
    setStep((prev) => prev + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBack = () => {
    setStep((prev) => Math.max(1, prev - 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmitBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const selectedRitualObj = RITUALS_DATA.find((r) => r.slug === ritual);
    const generatedId = generateBookingId();

    const newBooking: BookingRequest = {
      id: `req-${Date.now()}`,
      requestId: generatedId,
      ritual,
      ritualName: selectedRitualObj ? selectedRitualObj.name : "To Be Discussed with Pandit",
      preferredDate,
      peopleCount,
      fullName: fullName.trim(),
      mobile: mobile.trim(),
      whatsapp: sameAsMobile ? mobile.trim() : whatsapp.trim(),
      sameAsMobile,
      city: city.trim() || "Not Specified",
      gotra: knowsGotra ? (gotra.trim() || "Kashyap (Default)") : "Guidance Needed on Arrival",
      knowsGotra,
      seniorAssistance,
      seniorDetails: seniorAssistance ? seniorDetails : undefined,
      hotelAssistance,
      hotelDetails: hotelAssistance ? hotelDetails : undefined,
      pickupAssistance,
      transportMode: pickupAssistance ? transportMode : undefined,
      status: "NEW",
      notes: [`[${new Date().toLocaleDateString("en-IN")}] Online booking request submitted by customer.`],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    saveBookingRequest(newBooking);
    setTimeout(() => {
      setSubmittedBooking(newBooking);
      setIsSubmitting(false);
      setStep(6);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 600);
  };

  const stepsList = [
    { num: 1, label: language === "hi" ? "01 अनुष्ठान" : "01 Ritual" },
    { num: 2, label: language === "hi" ? "02 तारीख" : "02 Date" },
    { num: 3, label: language === "hi" ? "03 सदस्य" : "03 People" },
    { num: 4, label: language === "hi" ? "04 विवरण" : "04 Details" },
    { num: 5, label: language === "hi" ? "05 समीक्षा" : "05 Review" },
  ];

  return (
    <div className="min-h-screen bg-[#FAF7F2] py-8 lg:py-12">
      <Breadcrumbs
        items={[
          { label: language === "hi" ? "बुकिंग अनुरोध" : "Request Booking" }
        ]}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#2A1810]">
            {language === "hi" ? "तीर्थ यात्रा बुकिंग का अनुरोध" : "Request Pilgrimage Booking"}
          </h1>
          <p className="text-xs sm:text-sm text-[#6E6963] mt-2">
            {language === "hi"
              ? "कोई ऑनलाइन पेमेंट नहीं। हमारे समन्वयक विवरण की पुष्टि के लिए आपसे सीधे संपर्क करेंगे।"
              : "No online payment required. Our coordinator will contact you directly on call/WhatsApp to confirm all details."}
          </p>
        </div>

        {/* Multi-Step Flow Body */}
        {step < 6 ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Progress Sidebar (Desktop) */}
            <div className="hidden lg:block lg:col-span-4 bg-white rounded-2xl border border-[#E5DCCE] p-6 shadow-card sticky top-28">
              <h3 className="font-serif text-base font-bold text-[#2A1810] mb-4 pb-3 border-b border-[#E5DCCE]">
                {language === "hi" ? "अनुरोध प्रगति" : "Your Booking Request"}
              </h3>

              <div className="space-y-4 mb-6">
                {stepsList.map((s) => {
                  const isCompleted = s.num < step;
                  const isCurrent = s.num === step;

                  return (
                    <div
                      key={s.num}
                      className={`flex items-center gap-3 p-2.5 rounded-xl transition-all ${
                        isCurrent
                          ? "bg-[#FAF5E6] border border-[#DFC07C]/60 text-[#2A1810] font-semibold"
                          : isCompleted
                          ? "text-[#25D366]"
                          : "text-[#9E9085]"
                      }`}
                    >
                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                          isCompleted
                            ? "bg-[#25D366] text-white"
                            : isCurrent
                            ? "bg-[#2A1810] text-[#DFC07C]"
                            : "bg-[#F5EFE6] text-[#6E6963]"
                        }`}
                      >
                        {isCompleted ? <Check className="w-3.5 h-3.5" /> : s.num}
                      </div>
                      <span className="text-xs">{s.label}</span>
                    </div>
                  );
                })}
              </div>

              {/* Dynamic Request Summary Preview */}
              <div className="bg-[#FAF7F2] rounded-xl p-4 border border-[#E5DCCE] text-xs space-y-2">
                <span className="text-[11px] font-bold text-[#B88E3E] uppercase tracking-wider block">
                  {language === "hi" ? "चयनित विवरण" : "Summary Preview"}:
                </span>
                <div className="flex justify-between">
                  <span className="text-[#6E6963]">{language === "hi" ? "अनुष्ठान:" : "Ritual:"}</span>
                  <span className="font-semibold text-[#2A1810] text-right">
                    {ritual === "not-sure"
                      ? "Guidance Needed"
                      : RITUALS_DATA.find((r) => r.slug === ritual)?.name || ritual}
                  </span>
                </div>
                {preferredDate && (
                  <div className="flex justify-between">
                    <span className="text-[#6E6963]">{language === "hi" ? "तारीख:" : "Date:"}</span>
                    <span className="font-semibold text-[#2A1810]">{formatDate(preferredDate)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-[#6E6963]">{language === "hi" ? "सदस्य:" : "People:"}</span>
                  <span className="font-semibold text-[#2A1810]">{peopleCount}</span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[#E5DCCE] text-[11px] text-[#6E6963] leading-relaxed">
                🔒 {language === "hi" ? "आपकी जानकारी पूर्णतः सुरक्षित है।" : "Zero spam. Used only to coordinate your pilgrimage."}
              </div>
            </div>

            {/* Right Column: Step Content Card */}
            <div className="lg:col-span-8 bg-white rounded-3xl border border-[#E5DCCE] p-6 sm:p-10 shadow-card">
              
              {/* Mobile Step Indicator */}
              <div className="lg:hidden flex items-center justify-between mb-6 pb-4 border-b border-[#E5DCCE]">
                <span className="text-xs font-bold text-[#C25E1A]">
                  Step {step} of 5
                </span>
                <span className="text-xs text-[#6E6963]">
                  {stepsList[step - 1]?.label}
                </span>
              </div>

              {/* Step 1: Select Ritual */}
              {step === 1 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-[#2A1810]">
                      {language === "hi" ? "आप कौन सा अनुष्ठान कराना चाहते हैं?" : "What would you like to perform?"}
                    </h2>
                    <p className="text-xs text-[#6E6963] mt-1">
                      {language === "hi"
                        ? "गया जी में संपन्न कराए जाने वाले मुख्य पारंपरिक वैदिक अनुष्ठान।"
                        : "Select the sacred ritual for your family or choose guidance if unsure."}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {RITUALS_DATA.map((r) => (
                      <button
                        key={r.id}
                        type="button"
                        onClick={() => setRitual(r.slug)}
                        className={`p-5 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                          ritual === r.slug
                            ? "bg-[#FAF5E6] border-[#B88E3E] shadow-sm ring-1 ring-[#B88E3E]"
                            : "bg-[#FAF7F2] border-[#E5DCCE] hover:border-[#D2C5B0]"
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-[11px] font-semibold text-[#C25E1A] uppercase tracking-wider">
                              {r.duration}
                            </span>
                            <div
                              className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                                ritual === r.slug
                                  ? "bg-[#2A1810] border-[#2A1810] text-[#DFC07C]"
                                  : "border-[#D2C5B0]"
                              }`}
                            >
                              {ritual === r.slug && <Check className="w-3 h-3" />}
                            </div>
                          </div>
                          <h3 className="font-serif text-base font-bold text-[#2A1810]">
                            {language === "hi" ? r.hindiName : r.name}
                          </h3>
                          <p className="text-xs text-[#6E6963] mt-1 leading-relaxed">
                            {language === "hi" ? r.hindiTagline : r.shortDescription}
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>

                  {/* "I'm Not Sure" Option (Rule #34) */}
                  <button
                    type="button"
                    onClick={() => setRitual("not-sure")}
                    className={`w-full p-4 rounded-2xl border text-left transition-all flex items-center justify-between ${
                      ritual === "not-sure"
                        ? "bg-[#FAF5E6] border-[#B88E3E] ring-1 ring-[#B88E3E]"
                        : "bg-[#FAF7F2] border-[#E5DCCE] hover:border-[#D2C5B0]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-white border border-[#E5DCCE] flex items-center justify-center text-[#C25E1A]">
                        <HelpCircle className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#2A1810]">
                          {language === "hi" ? "मुझे निश्चित पता नहीं — पंडित जी से मार्गदर्शन चाहिए" : "I'm Not Sure — Help Me Decide"}
                        </h4>
                        <p className="text-xs text-[#6E6963]">
                          {language === "hi" ? "समन्वयक आपकी पारिवारिक परंपरा समझकर अनुष्ठान तय करेंगे।" : "Our Teerth Pandit will guide you based on your family background."}
                        </p>
                      </div>
                    </div>
                    <div
                      className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                        ritual === "not-sure"
                          ? "bg-[#2A1810] border-[#2A1810] text-[#DFC07C]"
                          : "border-[#D2C5B0]"
                      }`}
                    >
                      {ritual === "not-sure" && <Check className="w-3 h-3" />}
                    </div>
                  </button>

                  <div className="flex justify-end pt-4">
                    <button
                      type="button"
                      onClick={handleNext}
                      disabled={!isStep1Valid}
                      className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#C25E1A] to-[#9A450E] text-white font-semibold text-sm shadow-md hover:brightness-105 disabled:opacity-50 transition-all"
                    >
                      <span>{t.booking.continue}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Preferred Date (Rule #35) */}
              {step === 2 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-[#2A1810]">
                      {language === "hi" ? "आप किस तारीख को आने की योजना बना रहे हैं?" : "When are you planning to visit?"}
                    </h2>
                    <p className="text-xs text-[#6E6963] mt-1">
                      {language === "hi"
                        ? "यह आपकी पसंदीदा तारीख है (Preferred Date), जिसकी अंतिम पुष्टि समन्वयक द्वारा की जाएगी।"
                        : "This is your preferred date. Your coordinator will confirm exact availability on call."}
                    </p>
                  </div>

                  <div className="max-w-md">
                    <label className="block text-xs font-semibold text-[#2A1810] mb-2">
                      {language === "hi" ? "पसंदीदा तारीख (Preferred Date) *" : "Preferred Date *"}
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3.5 top-3.5 w-5 h-5 text-[#B88E3E]" />
                      <input
                        type="date"
                        required
                        value={preferredDate}
                        min={new Date().toISOString().split("T")[0]}
                        onChange={(e) => setPreferredDate(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 bg-[#FAF7F2] rounded-xl border border-[#E5DCCE] text-sm text-[#2A1810] focus:ring-1 focus:ring-[#C25E1A] focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#FAF5E6] border border-[#DFC07C]/50 text-xs text-[#5C4033] leading-relaxed">
                    ℹ️ <strong>{language === "hi" ? "लचीलापन:" : "Date Flexibility:"}</strong>{" "}
                    {language === "hi"
                      ? "यदि आपकी यात्रा योजना में कोई बदलाव होता है, तो आप अपने समन्वयक को सूचित कर तारीख आसानी से बदल सकते हैं।"
                      : "If your travel schedule changes later, you can effortlessly reschedule by notifying your assigned coordinator."}
                  </div>

                  <div className="flex items-center justify-between pt-4">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="inline-flex items-center gap-1.5 px-6 py-3 rounded-full border border-[#E5DCCE] text-xs font-semibold text-[#2A1810] hover:bg-[#F5EFE6] transition-all"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>{t.booking.back}</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleNext}
                      disabled={!isStep2Valid}
                      className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#C25E1A] to-[#9A450E] text-white font-semibold text-sm shadow-md hover:brightness-105 disabled:opacity-50 transition-all"
                    >
                      <span>{t.booking.continue}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Number of People (Rule #36) */}
              {step === 3 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-[#2A1810]">
                      {language === "hi" ? "कुल कितने सदस्य अनुष्ठान में भाग लेंगे?" : "How many people are performing the ritual?"}
                    </h2>
                    <p className="text-xs text-[#6E6963] mt-1">
                      {language === "hi"
                        ? "परिवार के कुल उपस्थित होने वाले सदस्यों की संख्या चुनें।"
                        : "Total number of attending family members (karta and accompanying family)."}
                    </p>
                  </div>

                  <div className="flex items-center justify-center p-8 bg-[#FAF7F2] rounded-2xl border border-[#E5DCCE] max-w-md mx-auto">
                    <div className="flex items-center gap-6">
                      <button
                        type="button"
                        onClick={() => setPeopleCount((p) => Math.max(1, p - 1))}
                        className="w-12 h-12 rounded-full bg-white border border-[#E5DCCE] text-xl font-bold text-[#2A1810] hover:bg-[#F5EFE6] shadow-sm flex items-center justify-center active:scale-95"
                      >
                        -
                      </button>

                      <div className="text-center min-w-[80px]">
                        <span className="font-serif text-4xl font-bold text-[#2A1810]">
                          {peopleCount}
                        </span>
                        <span className="block text-xs text-[#6E6963] mt-1">
                          {peopleCount === 1 ? "Person" : "People"}
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={() => setPeopleCount((p) => Math.min(25, p + 1))}
                        className="w-12 h-12 rounded-full bg-white border border-[#E5DCCE] text-xl font-bold text-[#2A1810] hover:bg-[#F5EFE6] shadow-sm flex items-center justify-center active:scale-95"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="inline-flex items-center gap-1.5 px-6 py-3 rounded-full border border-[#E5DCCE] text-xs font-semibold text-[#2A1810] hover:bg-[#F5EFE6] transition-all"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>{t.booking.back}</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleNext}
                      disabled={!isStep3Valid}
                      className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#C25E1A] to-[#9A450E] text-white font-semibold text-sm shadow-md hover:brightness-105 disabled:opacity-50 transition-all"
                    >
                      <span>{t.booking.continue}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 4: Personal Details & Assistance Options (Rules #37, #38, #39, #54, #31, #32) */}
              {step === 4 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-[#2A1810]">
                      {language === "hi" ? "व्यक्तिगत विवरण एवं विशेष आवश्यकताएं" : "Personal Details & Assistance"}
                    </h2>
                    <p className="text-xs text-[#6E6963] mt-1">
                      {language === "hi"
                        ? "हमारे समन्वयक इस नंबर पर संपर्क करके समस्त व्यवस्थाएं सुनिश्चित करेंगे।"
                        : "Your coordinator will contact you on this number to confirm all ritual & travel arrangements."}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-semibold text-[#2A1810] mb-1">
                        {language === "hi" ? "पूरा नाम *" : "Full Name *"}
                      </label>
                      <div className="relative">
                        <User className="absolute left-3.5 top-3 w-4 h-4 text-[#6E6963]" />
                        <input
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="e.g. Rameshwar Sharma"
                          className="w-full pl-10 pr-4 py-2.5 bg-[#FAF7F2] rounded-xl border border-[#E5DCCE] text-sm text-[#2A1810] focus:ring-1 focus:ring-[#C25E1A] focus:bg-white"
                        />
                      </div>
                    </div>

                    {/* City */}
                    <div>
                      <label className="block text-xs font-semibold text-[#2A1810] mb-1">
                        {language === "hi" ? "आपका शहर / मूल स्थान" : "Your City / Hometown"}
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-3.5 top-3 w-4 h-4 text-[#6E6963]" />
                        <input
                          type="text"
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          placeholder="e.g. Patna, Delhi, Mumbai, USA"
                          className="w-full pl-10 pr-4 py-2.5 bg-[#FAF7F2] rounded-xl border border-[#E5DCCE] text-sm text-[#2A1810] focus:ring-1 focus:ring-[#C25E1A] focus:bg-white"
                        />
                      </div>
                    </div>

                    {/* Mobile Number */}
                    <div>
                      <label className="block text-xs font-semibold text-[#2A1810] mb-1">
                        {language === "hi" ? "मोबाइल नंबर (10 अंक) *" : "Mobile Number (10 digits) *"}
                      </label>
                      <div className="relative flex">
                        <span className="inline-flex items-center px-3 rounded-l-xl border border-r-0 border-[#E5DCCE] bg-[#F5EFE6] text-xs font-medium text-[#2A1810]">
                          +91
                        </span>
                        <input
                          type="tel"
                          required
                          maxLength={10}
                          value={mobile}
                          onChange={(e) => setMobile(e.target.value.replace(/\D/g, ""))}
                          placeholder="9876543210"
                          className="w-full px-4 py-2.5 bg-[#FAF7F2] rounded-r-xl border border-[#E5DCCE] text-sm text-[#2A1810] focus:ring-1 focus:ring-[#C25E1A] focus:bg-white"
                        />
                      </div>
                    </div>

                    {/* WhatsApp */}
                    <div>
                      <label className="block text-xs font-semibold text-[#2A1810] mb-1">
                        WhatsApp Number
                      </label>
                      <div className="flex items-center gap-2 mb-1.5">
                        <input
                          type="checkbox"
                          id="sameAsMobile"
                          checked={sameAsMobile}
                          onChange={(e) => setSameAsMobile(e.target.checked)}
                          className="w-4 h-4 text-[#C25E1A] rounded border-[#E5DCCE] focus:ring-[#C25E1A]"
                        />
                        <label htmlFor="sameAsMobile" className="text-xs text-[#5C4033] cursor-pointer">
                          {language === "hi" ? "व्हाट्सएप नंबर मोबाइल के समान है" : "WhatsApp is same as mobile number"}
                        </label>
                      </div>

                      {!sameAsMobile && (
                        <div className="relative">
                          <MessageCircle className="absolute left-3.5 top-3 w-4 h-4 text-[#25D366]" />
                          <input
                            type="tel"
                            value={whatsapp}
                            onChange={(e) => setWhatsapp(e.target.value.replace(/\D/g, ""))}
                            placeholder="Enter WhatsApp number"
                            className="w-full pl-10 pr-4 py-2.5 bg-[#FAF7F2] rounded-xl border border-[#E5DCCE] text-sm text-[#2A1810] focus:ring-1 focus:ring-[#C25E1A] focus:bg-white"
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Gotra Section (Rule #37) */}
                  <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E5DCCE]">
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-xs font-bold text-[#2A1810]">
                        {language === "hi" ? "पारिवारिक गोत्र (Gotra)" : "Family Gotra"}
                      </label>
                      <button
                        type="button"
                        onClick={() => setKnowsGotra(!knowsGotra)}
                        className="text-xs text-[#C25E1A] font-semibold hover:underline"
                      >
                        {knowsGotra
                          ? (language === "hi" ? "गोत्र नहीं पता? क्लिक करें" : "Don't know Gotra? Click here")
                          : (language === "hi" ? "गोत्र पता है" : "I know my Gotra")}
                      </button>
                    </div>

                    {knowsGotra ? (
                      <input
                        type="text"
                        value={gotra}
                        onChange={(e) => setGotra(e.target.value)}
                        placeholder="e.g. Kashyap, Vatsa, Bharadwaj, Sandilya"
                        className="w-full px-4 py-2 bg-white rounded-xl border border-[#E5DCCE] text-sm text-[#2A1810]"
                      />
                    ) : (
                      <div className="p-3 bg-[#FAF5E6] rounded-xl border border-[#DFC07C]/50 text-xs text-[#5C4033]">
                        {language === "hi"
                          ? "कोई बात नहीं। संकल्प के समय हमारे तीर्थ पंडित जी कश्यप गोत्र अथवा आपकी कुल परंपरा अनुसार विधि पूर्ण करवाएंगे।"
                          : "That's completely fine. Our Teerth Pandit will guide you during Sankalp on arrival using universal Vedic tradition."}
                      </div>
                    )}
                  </div>

                  {/* Optional Assistance Add-ons (Rules #30, #31, #32, #54) */}
                  <div className="space-y-3 pt-2">
                    <span className="text-xs font-bold text-[#2A1810] uppercase tracking-wider block">
                      {language === "hi" ? "अतिरिक्त सहायता विकल्प (वैकल्पिक):" : "Optional Assistance Requirements:"}
                    </span>

                    {/* Senior Assistance */}
                    <div className="p-3.5 rounded-xl border border-[#E5DCCE] bg-white">
                      <div className="flex items-center justify-between">
                        <label className="flex items-center gap-2.5 cursor-pointer text-xs font-semibold text-[#2A1810]">
                          <input
                            type="checkbox"
                            checked={seniorAssistance}
                            onChange={(e) => setSeniorAssistance(e.target.checked)}
                            className="w-4 h-4 text-[#C25E1A] rounded border-[#E5DCCE]"
                          />
                          <Heart className="w-4 h-4 text-[#C25E1A]" />
                          <span>{language === "hi" ? "वरिष्ठ नागरिक सहायता (Senior Citizen Support)" : "Senior Citizen Assistance"}</span>
                        </label>
                        <span className="text-[11px] text-[#6E6963] hidden sm:inline">
                          {language === "hi" ? "ई-रिक्शा / व्हीलचेयर" : "E-rickshaw / Wheelchair"}
                        </span>
                      </div>
                      {seniorAssistance && (
                        <input
                          type="text"
                          value={seniorDetails}
                          onChange={(e) => setSeniorDetails(e.target.value)}
                          placeholder="e.g. Wheelchair needed for 75yo mother at temple"
                          className="mt-2.5 w-full px-3 py-2 bg-[#FAF7F2] rounded-lg border border-[#E5DCCE] text-xs text-[#2A1810]"
                        />
                      )}
                    </div>

                    {/* Hotel Assistance */}
                    <div className="p-3.5 rounded-xl border border-[#E5DCCE] bg-white">
                      <div className="flex items-center justify-between">
                        <label className="flex items-center gap-2.5 cursor-pointer text-xs font-semibold text-[#2A1810]">
                          <input
                            type="checkbox"
                            checked={hotelAssistance}
                            onChange={(e) => setHotelAssistance(e.target.checked)}
                            className="w-4 h-4 text-[#C25E1A] rounded border-[#E5DCCE]"
                          />
                          <Hotel className="w-4 h-4 text-[#B88E3E]" />
                          <span>{language === "hi" ? "होटल व्यवस्था सहायता (Need Hotel Stay?)" : "Hotel Accommodation Assistance"}</span>
                        </label>
                        <span className="text-[11px] text-[#6E6963] hidden sm:inline">
                          {language === "hi" ? "मंदिर के निकट स्वच्छ कमरे" : "Near Vishnupad Temple"}
                        </span>
                      </div>
                      {hotelAssistance && (
                        <input
                          type="text"
                          value={hotelDetails}
                          onChange={(e) => setHotelDetails(e.target.value)}
                          placeholder="e.g. 1 AC Room for 2 nights, family friendly"
                          className="mt-2.5 w-full px-3 py-2 bg-[#FAF7F2] rounded-lg border border-[#E5DCCE] text-xs text-[#2A1810]"
                        />
                      )}
                    </div>

                    {/* Pickup Assistance */}
                    <div className="p-3.5 rounded-xl border border-[#E5DCCE] bg-white">
                      <div className="flex items-center justify-between">
                        <label className="flex items-center gap-2.5 cursor-pointer text-xs font-semibold text-[#2A1810]">
                          <input
                            type="checkbox"
                            checked={pickupAssistance}
                            onChange={(e) => setPickupAssistance(e.target.checked)}
                            className="w-4 h-4 text-[#C25E1A] rounded border-[#E5DCCE]"
                          />
                          <Car className="w-4 h-4 text-[#B88E3E]" />
                          <span>{language === "hi" ? "स्टेशन / एयरपोर्ट पिकअप सहायता" : "Pickup & Local Transport Assistance"}</span>
                        </label>
                      </div>
                      {pickupAssistance && (
                        <div className="mt-2.5 flex flex-wrap gap-2">
                          {(["Train", "Gaya Airport", "Patna Airport", "Road", "Own vehicle"] as const).map((mode) => (
                            <button
                              key={mode}
                              type="button"
                              onClick={() => setTransportMode(mode)}
                              className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                                transportMode === mode
                                  ? "bg-[#2A1810] text-[#DFC07C] border-[#2A1810]"
                                  : "bg-[#FAF7F2] text-[#423E3A] border-[#E5DCCE]"
                              }`}
                            >
                              {mode}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="inline-flex items-center gap-1.5 px-6 py-3 rounded-full border border-[#E5DCCE] text-xs font-semibold text-[#2A1810] hover:bg-[#F5EFE6] transition-all"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>{t.booking.back}</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleNext}
                      disabled={!isStep4Valid}
                      className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#C25E1A] to-[#9A450E] text-white font-semibold text-sm shadow-md hover:brightness-105 disabled:opacity-50 transition-all"
                    >
                      <span>{language === "hi" ? "समीक्षा करें" : "Review Request"}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 5: Review Request (Rule #40) */}
              {step === 5 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-[#2A1810]">
                      {language === "hi" ? "अपने अनुरोध की समीक्षा करें" : "Review Your Request"}
                    </h2>
                    <p className="text-xs text-[#6E6963] mt-1">
                      {language === "hi"
                        ? "कृपया विवरण की पुष्टि करें। सबमिट करने के बाद हमारे समन्वयक आपसे संपर्क करेंगे।"
                        : "Verify your request details before submission. Zero upfront payment required."}
                    </p>
                  </div>

                  {/* Summary Card */}
                  <div className="bg-[#FAF7F2] rounded-2xl border border-[#DFC07C]/50 p-6 space-y-3.5 text-xs sm:text-sm">
                    <div className="flex justify-between py-1.5 border-b border-[#E5DCCE]">
                      <span className="text-[#6E6963]">{language === "hi" ? "अनुष्ठान (Ritual):" : "Ritual:"}</span>
                      <strong className="text-[#2A1810] font-serif font-bold text-right">
                        {ritual === "not-sure" ? "Vedic Guidance by Pandit" : RITUALS_DATA.find((r) => r.slug === ritual)?.name}
                      </strong>
                    </div>

                    <div className="flex justify-between py-1.5 border-b border-[#E5DCCE]">
                      <span className="text-[#6E6963]">{language === "hi" ? "पसंदीदा तारीख:" : "Preferred Date:"}</span>
                      <strong className="text-[#2A1810]">{formatDate(preferredDate)}</strong>
                    </div>

                    <div className="flex justify-between py-1.5 border-b border-[#E5DCCE]">
                      <span className="text-[#6E6963]">{language === "hi" ? "श्रद्धालुओं की संख्या:" : "People:"}</span>
                      <strong className="text-[#2A1810]">{peopleCount}</strong>
                    </div>

                    <div className="flex justify-between py-1.5 border-b border-[#E5DCCE]">
                      <span className="text-[#6E6963]">{language === "hi" ? "नाम एवं संपर्क:" : "Name & Mobile:"}</span>
                      <div className="text-right">
                        <span className="font-semibold text-[#2A1810] block">{fullName}</span>
                        <span className="text-xs text-[#6E6963]">+91 {mobile}</span>
                      </div>
                    </div>

                    <div className="flex justify-between py-1.5 border-b border-[#E5DCCE]">
                      <span className="text-[#6E6963]">{language === "hi" ? "शहर एवं गोत्र:" : "City & Gotra:"}</span>
                      <strong className="text-[#2A1810]">
                        {city || "Not specified"} • {knowsGotra ? (gotra || "Kashyap") : "Guidance on Arrival"}
                      </strong>
                    </div>

                    {/* Extra services */}
                    <div className="pt-2 text-xs text-[#5C4033]">
                      <span className="font-semibold block text-[#2A1810] mb-1">
                        {language === "hi" ? "अतिरिक्त सेवाएं:" : "Additional Services Requested:"}
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {seniorAssistance && (
                          <span className="px-2.5 py-1 bg-[#FAF5E6] rounded-md border border-[#DFC07C] text-[#C25E1A] font-medium">
                            ✓ Senior Citizen Support ({seniorDetails || "Yes"})
                          </span>
                        )}
                        {hotelAssistance && (
                          <span className="px-2.5 py-1 bg-[#FAF5E6] rounded-md border border-[#DFC07C] text-[#B88E3E] font-medium">
                            ✓ Hotel Coordination ({hotelDetails || "Yes"})
                          </span>
                        )}
                        {pickupAssistance && (
                          <span className="px-2.5 py-1 bg-[#FAF5E6] rounded-md border border-[#DFC07C] text-[#2A1810] font-medium">
                            ✓ Pickup ({transportMode})
                          </span>
                        )}
                        {!seniorAssistance && !hotelAssistance && !pickupAssistance && (
                          <span className="text-[#9E9085]">Standard Ritual Coordination</span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Reassurance Notice (Rule #40) */}
                  <div className="p-4 rounded-xl bg-[#FAF5E6] border border-[#DFC07C]/40 text-xs text-[#5C4033] leading-relaxed">
                    <p className="font-semibold text-[#2A1810] mb-1">
                      {language === "hi" ? "हम आपसे संपर्क करेंगे:" : "We will contact you to confirm:"}
                    </p>
                    <ul className="list-disc pl-4 space-y-0.5">
                      <li>{language === "hi" ? "अनुष्ठान एवं संकल्प का संपूर्ण विवरण" : "Exact ritual and Sankalp requirements"}</li>
                      <li>{language === "hi" ? "होटल, वाहन अथवा वरिष्ठ नागरिक व्यवस्था" : "Hotel stay, cab pickup, or senior assistance"}</li>
                      <li>{language === "hi" ? "प्रमाणित तीर्थ पंडित का आवंटन" : "Assignment of verified Teerth Pandit"}</li>
                      <li>{language === "hi" ? "सेवा एवं दक्षिणा शुल्क का पारदर्शी विवरण" : "Transparent final service details"}</li>
                    </ul>
                  </div>

                  <div className="flex items-center justify-between pt-4">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="inline-flex items-center gap-1.5 px-6 py-3 rounded-full border border-[#E5DCCE] text-xs font-semibold text-[#2A1810] hover:bg-[#F5EFE6] transition-all"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>{t.booking.back}</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleSubmitBooking}
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-2 px-9 py-4 rounded-full bg-gradient-to-r from-[#C25E1A] to-[#9A450E] text-white font-bold text-sm sm:text-base shadow-xl hover:brightness-105 active:scale-95 disabled:opacity-50 transition-all"
                    >
                      {isSubmitting ? (
                        <span>{language === "hi" ? "अनुरोध सबमिट हो रहा है..." : "Submitting Request..."}</span>
                      ) : (
                        <>
                          <span>{t.booking.submitRequest}</span>
                          <CheckCircle2 className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>
        ) : (
          /* Step 6: Calm Success Confirmation (Rules #41, #67) */
          <div className="max-w-2xl mx-auto bg-white rounded-3xl border border-[#DFC07C]/60 p-8 sm:p-12 shadow-2xl text-center animate-fade-in">
            <div className="w-20 h-20 mx-auto rounded-full bg-[#FAF5E6] border-2 border-[#B88E3E] flex items-center justify-center text-[#B88E3E] mb-6 shadow-sm">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="inline-block px-3.5 py-1 rounded-full bg-[#FAF5E6] text-[#B88E3E] text-xs font-bold uppercase tracking-wider mb-2">
              {language === "hi" ? "अनुरोध दर्ज हुआ" : "Request Received"}
            </div>

            <h2 className="font-serif text-3xl font-bold text-[#2A1810] mb-2">
              {language === "hi" ? "आपका बुकिंग अनुरोध प्राप्त हो गया है" : "Your Booking Request Has Been Received"}
            </h2>

            {/* Request ID Display */}
            <div className="my-6 p-4 rounded-2xl bg-[#FAF7F2] border border-[#E5DCCE] inline-block max-w-sm mx-auto">
              <span className="text-xs text-[#6E6963] block uppercase tracking-wider">
                {language === "hi" ? "अनुरोध संदर्भ क्रमांक" : "Your Request Reference ID"}
              </span>
              <span className="font-serif text-2xl sm:text-3xl font-bold text-[#2A1810] tracking-wider mt-0.5 block">
                {submittedBooking?.requestId || "GP-XXXXXX"}
              </span>
            </div>

            <p className="text-sm text-[#5C4033] leading-relaxed max-w-lg mx-auto mb-8">
              {language === "hi"
                ? `श्री ${fullName}, आपके अनुरोध का विवरण हमारे गया जी तीर्थ समन्वयक को प्राप्त हो गया है। हमारे समन्वयक आपके नंबर (+91 ${mobile}) पर कॉल अथवा व्हाट्सएप करके संपूर्ण विवरण की पुष्टि करेंगे।`
                : language === "bn"
                ? `শ্রী ${fullName}, আপনার অনুরোধের বিবরণ আমাদের তীর্থ সমন্বয়ক পেয়েছেন। সমন্বয়ক আপনার নম্বরে (+91 ${mobile}) কল বা হোয়াটসঅ্যাপ করে সমস্ত ব্যবস্থার নিশ্চিতকরণ করবেন।`
                : `Thank you, ${fullName}. Our Gaya Ji pilgrimage coordinator has received your request and will contact you directly on +91 ${mobile} to confirm ritual details and pandit assignment.`}
            </p>

            {/* Action Buttons (Rule #41) */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-8">
              <a
                href={`https://wa.me/919097327088?text=${encodeURIComponent(
                  `Pranam Pandit Ji. I have submitted booking request ${submittedBooking?.requestId} for Gaya Ji Pind Daan. Devotee: ${fullName}.`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] text-white font-semibold text-sm shadow-md hover:bg-[#20ba5a] transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>
                  {language === "hi"
                    ? "व्हाट्सएप पर तुरंत पुष्टि करें"
                    : language === "bn"
                    ? "হোয়াটসঅ্যাপে যোগাযোগ করুন"
                    : "WhatsApp Coordinator"}
                </span>
              </a>

              <a
                href="tel:+919097327088"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#2A1810] text-[#FAF7F2] font-semibold text-sm hover:bg-[#3D2418] transition-all"
              >
                <Phone className="w-4 h-4 text-[#DFC07C]" />
                <span>
                  {language === "hi"
                    ? "सीधे कॉल करें"
                    : language === "bn"
                    ? "সরাসরি কল করুন"
                    : "Direct Call Us"}
                </span>
              </a>

              <Link
                href={`/booking-status?id=${submittedBooking?.requestId}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#FAF5E6] border border-[#DFC07C] text-[#2A1810] font-semibold text-sm hover:bg-[#F5EFE6] transition-all"
              >
                <span>
                  {language === "hi"
                    ? "प्रगति जांचें"
                    : language === "bn"
                    ? "স্ট্যাটাস দেখুন"
                    : "Track Status"}
                </span>
              </Link>
            </div>

            <div className="pt-6 border-t border-[#E5DCCE]">
              <Link
                href="/"
                className="text-xs font-semibold text-[#6E6963] hover:text-[#2A1810] transition-colors"
              >
                ← {language === "hi" ? "मुख्य पृष्ठ पर लौटें" : "Back to Home"}
              </Link>
            </div>
          </div>
        )}

      </div>

      <TalkToPanditModal
        isOpen={panditModalOpen}
        onClose={() => setPanditModalOpen(false)}
      />
    </div>
  );
}

export default function RequestBookingPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-sm text-[#6E6963]">Loading Booking System...</div>}>
      <BookingForm />
    </Suspense>
  );
}
