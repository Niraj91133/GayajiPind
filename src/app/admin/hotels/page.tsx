"use client";

import React, { useState, useEffect } from "react";
import { Hotel, Phone, MessageCircle, CheckCircle2, Clock, MapPin } from "lucide-react";
import { BookingRequest } from "@/types";
import { getStoredBookings } from "@/lib/db";
import { formatDate } from "@/lib/utils";

export default function AdminHotelsPage() {
  const [bookings, setBookings] = useState<BookingRequest[]>([]);

  useEffect(() => {
    const all = getStoredBookings();
    setBookings(all.filter((b) => b.hotelAssistance));
  }, []);

  return (
    <div className="space-y-6 text-left">
      
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-[#E5DCCE]">
        <div>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#2A1810]">
            Hotel & Stay Coordination Requests
          </h1>
          <p className="text-xs text-[#6E6963]">
            Track accommodation requests, hotel assignments, check-ins, and guest requirements.
          </p>
        </div>
        <div className="text-xs font-bold text-[#5C4033] bg-[#FAF5E6] px-3.5 py-1.5 rounded-full border border-[#DFC07C]">
          Active Hotel Leads: {bookings.length}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {bookings.length > 0 ? (
          bookings.map((b) => (
            <div
              key={b.id}
              className="bg-white rounded-3xl border border-[#E5DCCE] p-6 shadow-card flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Hotel className="w-5 h-5 text-[#B88E3E]" />
                    <span className="font-mono text-xs font-bold text-[#2A1810]">{b.requestId}</span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-[#FAF5E6] text-[#B88E3E] text-[10px] font-bold uppercase">
                    {b.status.replace("_", " ")}
                  </span>
                </div>

                <h2 className="font-serif text-lg font-bold text-[#2A1810]">
                  {b.fullName} ({b.peopleCount} Guests)
                </h2>
                <div className="text-xs text-[#6E6963] mb-3">
                  +91 {b.mobile} • From {b.city}
                </div>

                <div className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#E5DCCE] text-xs space-y-1 mb-4">
                  <div><strong>Preferred Arrival Date:</strong> {formatDate(b.preferredDate)}</div>
                  <div><strong>Guest Details/Preferences:</strong> {b.hotelDetails || "Standard clean AC family room near temple"}</div>
                  {b.seniorAssistance && (
                    <div className="text-[#C25E1A]"><strong>⚠️ Note:</strong> Senior citizen present (ground floor/lift required)</div>
                  )}
                </div>
              </div>

              <div className="pt-4 border-t border-[#E5DCCE] flex items-center justify-between">
                <span className="text-[11px] text-[#25D366] font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Direct Contact
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href={`https://wa.me/91${b.whatsapp}?text=Pranam%20${encodeURIComponent(b.fullName)}.%20I%20am%20calling%20regarding%20hotel%20options%20for%20your%20Gaya%20Ji%20stay.`}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-[#25D366] text-white hover:bg-[#20ba5a]"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                  <a
                    href={`tel:+91${b.mobile}`}
                    className="p-2 rounded-lg bg-[#2A1810] text-[#DFC07C] hover:bg-[#3D2418]"
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-2 p-10 bg-white rounded-3xl border border-[#E5DCCE] text-center text-xs text-[#6E6963]">
            No pending hotel requests currently.
          </div>
        )}
      </div>

    </div>
  );
}
