"use client";

import React, { useState, useEffect } from "react";
import { Car, Train, Plane, Phone, MessageCircle, CheckCircle2 } from "lucide-react";
import { BookingRequest } from "@/types";
import { getStoredBookings } from "@/lib/db";
import { formatDate } from "@/lib/utils";

export default function AdminTransportPage() {
  const [bookings, setBookings] = useState<BookingRequest[]>([]);

  useEffect(() => {
    const all = getStoredBookings();
    setBookings(all.filter((b) => b.pickupAssistance));
  }, []);

  return (
    <div className="space-y-6 text-left">
      
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-[#E5DCCE]">
        <div>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#2A1810]">
            Transport & Station/Airport Pickups
          </h1>
          <p className="text-xs text-[#6E6963]">
            Coordinate station platform pickups, Patna airport expressway transfers, and local internal cabs.
          </p>
        </div>
        <div className="text-xs font-bold text-[#5C4033] bg-[#FAF5E6] px-3.5 py-1.5 rounded-full border border-[#DFC07C]">
          Active Pickup Leads: {bookings.length}
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
                    <Car className="w-5 h-5 text-[#C25E1A]" />
                    <span className="font-mono text-xs font-bold text-[#2A1810]">{b.requestId}</span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-[#FAF5E6] text-[#B88E3E] text-[10px] font-bold uppercase">
                    {b.status.replace("_", " ")}
                  </span>
                </div>

                <h2 className="font-serif text-lg font-bold text-[#2A1810]">
                  {b.fullName} ({b.peopleCount} Devotees)
                </h2>
                <div className="text-xs text-[#6E6963] mb-3">
                  +91 {b.mobile} • City: {b.city}
                </div>

                <div className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#E5DCCE] text-xs space-y-1 mb-4">
                  <div><strong>Pickup Date:</strong> {formatDate(b.preferredDate)}</div>
                  <div><strong>Arrival Hub Mode:</strong> {b.transportMode || "Train (Gaya Junction)"}</div>
                  <div><strong>Destination:</strong> Vishnupad Temple / Hotel</div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E5DCCE] flex items-center justify-between">
                <span className="text-[11px] text-[#25D366] font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Driver Dispatch Ready
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href={`https://wa.me/91${b.whatsapp}?text=Pranam%20${encodeURIComponent(b.fullName)}.%20I%20am%20calling%20to%20confirm%20your%20arrival%20pickup%20details%20for%20Gaya%20Ji.`}
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
            No pending pickup requests currently.
          </div>
        )}
      </div>

    </div>
  );
}
