"use client";

import React, { useState } from "react";
import { Phone, MessageCircle, X, CheckCircle2, User, MapPin } from "lucide-react";
import { useLanguage } from "@/components/common/LanguageContext";

interface TalkToPanditModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultRitual?: string;
}

export function TalkToPanditModal({ isOpen, onClose, defaultRitual = "General Guidance" }: TalkToPanditModalProps) {
  const { language } = useLanguage();
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) return;
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Pranam Pandit Ji. I need guidance regarding Gaya Ji Pind Daan rituals for my family. Name: ${fullName || "Devotee"}, City: ${city || "Not specified"}.`
    );
    window.open(`https://wa.me/919097327088?text=${text}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in text-left">
      <div className="relative w-full max-w-lg bg-[#FAF8F5] rounded-3xl border border-[#E8E2D5] shadow-2xl overflow-hidden">
        
        {/* Top Accent Strip */}
        <div className="h-1.5 bg-[#241812]" />

        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#7A6F67] hover:text-[#241812] rounded-full hover:bg-[#F4EFE6] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-6">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#FAF5E6] border border-[#DFC07C] flex items-center justify-center text-[#B85014]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-serif text-[#241812] font-bold mb-2">
                {language === "hi"
                  ? "अनुरोध प्राप्त हुआ"
                  : language === "bn"
                  ? "অনুরোধ গৃহীত হয়েছে"
                  : "Callback Request Received"}
              </h3>
              <p className="text-[#5C4D44] text-xs sm:text-sm leading-relaxed mb-6 max-w-sm mx-auto">
                {language === "hi"
                  ? "हमारे वरिष्ठ तीर्थ पुरोहित / समन्वयक शीघ्र ही आपके नंबर पर संपर्क कर आपकी पारिवारिक परंपरा अनुसार मार्गदर्शन देंगे।"
                  : language === "bn"
                  ? "আমাদের প্রধান তীর্থ পুরোহিত / সমন্বয়ক শীঘ্রই আপনার সাথে যোগাযোগ করে পারিবারিক রীতি অনুযায়ী সম্পূর্ণ গাইড করবেন।"
                  : "Our senior Teerth Purohit / coordinator will call you directly to understand your family tradition and guide you."}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={handleWhatsAppDirect}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-full font-semibold text-xs uppercase tracking-wider shadow-sm hover:bg-[#20ba5a] transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>
                    {language === "hi"
                      ? "व्हाट्सएप पर बात करें"
                      : language === "bn"
                      ? "হোয়াটসঅ্যাপে কথা বলুন"
                      : "Chat on WhatsApp"}
                  </span>
                </button>
                <button
                  onClick={onClose}
                  className="px-6 py-3 bg-[#E8E2D5] text-[#241812] rounded-full font-semibold text-xs uppercase tracking-wider hover:bg-[#D8D0C0] transition-all"
                >
                  {language === "hi" ? "बंद करें" : language === "bn" ? "বন্ধ করুন" : "Close"}
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="mb-6">
                <span className="text-[11px] font-semibold text-[#9C7A3C] uppercase tracking-widest block mb-1">
                  {language === "hi"
                    ? "निशुल्क शास्त्रोक्त मार्गदर्शन"
                    : language === "bn"
                    ? "বিনামূল্যে বৈদিক পরামর্শ"
                    : "Vedic Guidance"}
                </span>
                <h3 className="text-2xl font-serif text-[#241812] font-bold">
                  {language === "hi"
                    ? "तीर्थ पुरोहित से बात करें"
                    : language === "bn"
                    ? "তীর্থ পুরোহিতের সাথে কথা বলুন"
                    : "Speak with a Teerth Pandit"}
                </h3>
                <p className="text-[#7A6F67] text-xs mt-1">
                  {language === "hi"
                    ? "यदि आप अनुष्ठान या विधि को लेकर असमंजस में हैं, तो सीधे हमारे अनुभवी पंडित जी से मार्गदर्शन प्राप्त करें।"
                    : language === "bn"
                    ? "কোন অনুষ্ঠানটি করবেন বুঝতে না পারলে সরাসরি আমাদের অভিজ্ঞ পুরোহিতের সাথে কথা বলুন।"
                    : "Not sure which ritual is right? Speak directly with an experienced Teerth Purohit in Gaya Ji."}
                </p>
              </div>

              {/* Direct Instant Action Buttons */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <a
                  href="tel:+919097327088"
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#241812] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#38261D] transition-all shadow-sm"
                >
                  <Phone className="w-3.5 h-3.5 text-[#DFC07C]" />
                  <span>
                    {language === "hi"
                      ? "सीधे कॉल करें"
                      : language === "bn"
                      ? "সরাসরি কল করুন"
                      : "Direct Call"}
                  </span>
                </a>
                <button
                  onClick={handleWhatsAppDirect}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#20ba5a] transition-all shadow-sm"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </button>
              </div>

              <div className="relative flex py-2 items-center mb-6">
                <div className="flex-grow border-t border-[#E8E2D5]" />
                <span className="flex-shrink mx-3 text-[11px] text-[#7A6F67] uppercase tracking-wider">
                  {language === "hi"
                    ? "अथवा कॉलबैक का अनुरोध करें"
                    : language === "bn"
                    ? "অথবা কলব্যাকের জন্য অনুরোধ জানান"
                    : "Or Request a Callback"}
                </span>
                <div className="flex-grow border-t border-[#E8E2D5]" />
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-[#241812] mb-1">
                    {language === "hi"
                      ? "आपका पूरा नाम *"
                      : language === "bn"
                      ? "আপনার সম্পূর্ণ নাম *"
                      : "Your Full Name *"}
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Rameshwar Sharma"
                    className="w-full px-4 py-2.5 bg-white rounded-xl border border-[#E8E2D5] text-xs sm:text-sm text-[#241812] focus:ring-1 focus:ring-[#B85014]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#241812] mb-1">
                    {language === "hi"
                      ? "मोबाइल नंबर (10 अंक) *"
                      : language === "bn"
                      ? "মোবাইল নম্বর (১০ অঙ্ক) *"
                      : "Mobile Number (10 digits) *"}
                  </label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 rounded-l-xl border border-r-0 border-[#E8E2D5] bg-[#F4EFE6] text-xs font-medium text-[#241812]">
                      +91
                    </span>
                    <input
                      type="tel"
                      required
                      maxLength={10}
                      pattern="[0-9]{10}"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                      placeholder="9097327088"
                      className="w-full px-4 py-2.5 bg-white rounded-r-xl border border-[#E8E2D5] text-xs sm:text-sm text-[#241812] focus:ring-1 focus:ring-[#B85014]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#241812] mb-1">
                    {language === "hi"
                      ? "आपका शहर (वैकल्पिक)"
                      : language === "bn"
                      ? "আপনার শহর (ঐচ্ছিক)"
                      : "Your City (Optional)"}
                  </label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="e.g. Kolkata, Patna, Delhi"
                    className="w-full px-4 py-2.5 bg-white rounded-xl border border-[#E8E2D5] text-xs sm:text-sm text-[#241812] focus:ring-1 focus:ring-[#B85014]"
                  />
                </div>

                <p className="text-[11px] text-[#7A6F67] leading-tight">
                  {language === "hi"
                    ? "आपकी जानकारी केवल मार्गदर्शन एवं तीर्थ समन्वय के लिए सुरक्षित रखी जाती है।"
                    : language === "bn"
                    ? "আপনার তথ্য সম্পূর্ণ সুরক্ষিত থাকবে এবং শুধুমাত্র তীর্থযাত্রার সহায়তায় ব্যবহৃত হবে।"
                    : "Your details are strictly used to coordinate your pilgrimage. Zero spam."}
                </p>

                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-full bg-[#241812] hover:bg-[#38261D] text-white text-xs font-semibold uppercase tracking-wider shadow-sm transition-all"
                >
                  {language === "hi"
                    ? "कॉलबैक का अनुरोध करें"
                    : language === "bn"
                    ? "বিনামূল্যে পরামর্শ চান"
                    : "Request Free Guidance"}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
