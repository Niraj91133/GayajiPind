"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, MessageCircle, CalendarCheck } from "lucide-react";
import { useLanguage } from "@/components/common/LanguageContext";

export function MobileStickyBar() {
  const pathname = usePathname();
  const { language, t } = useLanguage();

  // On the booking multi-step flow or admin portal, do not show the default sticky marketing bar
  if (pathname.startsWith("/request-booking") || pathname.startsWith("/admin")) {
    return null;
  }

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      "Pranam Pandit Ji. I want to inquire about Gaya Ji Pind Daan rituals and booking assistance."
    );
    window.open(`https://wa.me/919097327088?text=${text}`, "_blank");
  };

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-[#FAF8F5]/98 backdrop-blur-md border-t border-[#E8E2D5] px-3 py-2 shadow-2xl">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* Call Button */}
        <a
          href="tel:+919097327088"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-white border border-[#E8E2D5] text-[#241812] text-[11px] font-semibold active:scale-95 transition-transform shadow-xs"
        >
          <Phone className="w-4 h-4 text-[#B85014] mb-0.5" />
          <span>{language === "hi" ? "कॉल करें" : language === "bn" ? "কল করুন" : "Call Pandit"}</span>
        </a>

        {/* WhatsApp Button */}
        <button
          onClick={handleWhatsApp}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#25D366] text-white text-[11px] font-semibold active:scale-95 transition-transform shadow-xs"
        >
          <MessageCircle className="w-4 h-4 mb-0.5" />
          <span>WhatsApp</span>
        </button>

        {/* Request Booking Primary CTA */}
        <Link
          href="/request-booking"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#241812] text-[#FAF8F5] text-[11px] font-semibold active:scale-95 transition-transform shadow-sm"
        >
          <CalendarCheck className="w-4 h-4 text-[#DFC07C] mb-0.5" />
          <span>{language === "hi" ? "बुकिंग करें" : language === "bn" ? "বুকিং করুন" : "Book Ritual"}</span>
        </Link>
      </div>
    </div>
  );
}
