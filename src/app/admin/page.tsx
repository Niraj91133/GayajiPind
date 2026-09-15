"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  CalendarCheck,
  Clock,
  CheckCircle2,
  Users,
  Hotel,
  Car,
  Globe,
  Phone,
  MessageCircle,
  ArrowRight,
  Filter,
  ShieldCheck,
  AlertCircle
} from "lucide-react";
import { BookingRequest } from "@/types";
import { getStoredBookings } from "@/lib/db";
import { formatDate } from "@/lib/utils";

export default function AdminDashboardPage() {
  const [bookings, setBookings] = useState<BookingRequest[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setBookings(getStoredBookings());
    setLoading(false);
  }, []);

  // Compute live KPIs
  const newRequests = bookings.filter((b) => b.status === "NEW");
  const pendingFollowUps = bookings.filter((b) => b.status === "CONTACTED" || b.status === "DETAILS_CONFIRMED");
  const confirmedBookings = bookings.filter((b) => b.status === "BOOKING_CONFIRMED" || b.status === "PANDIT_ASSIGNED" || b.status === "TRAVEL_ARRANGED");
  const upcomingRituals = bookings.filter((b) => b.status !== "COMPLETED" && b.status !== "CANCELLED");
  const hotelRequests = bookings.filter((b) => b.hotelAssistance);
  const transportRequests = bookings.filter((b) => b.pickupAssistance);
  const nriLeads = bookings.filter((b) => b.isNri || b.city.toLowerCase().includes("usa") || b.city.toLowerCase().includes("uk"));

  const recentBookings = bookings.slice(0, 5);

  return (
    <div className="space-y-8 text-left">
      
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[#E5DCCE]">
        <div>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#2A1810]">
            Coordinator Operations Dashboard
          </h1>
          <p className="text-xs sm:text-sm text-[#6E6963] mt-0.5">
            Real-time pilgrimage lead queue, Pandit assignment, and service tracking.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/admin/bookings"
            className="px-5 py-2.5 rounded-full bg-[#2A1810] text-[#FAF7F2] font-bold text-xs shadow-md hover:bg-[#3D2418] transition-all flex items-center gap-1.5"
          >
            <span>Manage All Bookings</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#DFC07C]" />
          </Link>
        </div>
      </div>

      {/* KPI Stat Cards Grid (Rules #75, #117) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        
        {/* 1. New Requests */}
        <div className="p-5 rounded-2xl bg-white border border-[#DFC07C]/60 shadow-card">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C25E1A]">New Requests</span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#C25E1A] animate-ping" />
          </div>
          <div className="font-serif text-3xl font-bold text-[#2A1810]">
            {newRequests.length}
          </div>
          <span className="text-[11px] text-[#6E6963] block mt-1">Requires coordinator contact</span>
        </div>

        {/* 2. Pending Follow-ups */}
        <div className="p-5 rounded-2xl bg-white border border-[#E5DCCE] shadow-card">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#B88E3E]">Follow-ups</span>
            <Clock className="w-4 h-4 text-[#B88E3E]" />
          </div>
          <div className="font-serif text-3xl font-bold text-[#2A1810]">
            {pendingFollowUps.length}
          </div>
          <span className="text-[11px] text-[#6E6963] block mt-1">Details being discussed</span>
        </div>

        {/* 3. Confirmed Bookings */}
        <div className="p-5 rounded-2xl bg-white border border-[#E5DCCE] shadow-card">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#25D366]">Confirmed</span>
            <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
          </div>
          <div className="font-serif text-3xl font-bold text-[#2A1810]">
            {confirmedBookings.length}
          </div>
          <span className="text-[11px] text-[#6E6963] block mt-1">Pandit & schedule set</span>
        </div>

        {/* 4. Total Active Queue */}
        <div className="p-5 rounded-2xl bg-[#FAF5E6] border border-[#DFC07C] shadow-card">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2A1810]">Upcoming Rituals</span>
            <CalendarCheck className="w-4 h-4 text-[#C25E1A]" />
          </div>
          <div className="font-serif text-3xl font-bold text-[#2A1810]">
            {upcomingRituals.length}
          </div>
          <span className="text-[11px] text-[#5C4033] block mt-1">Scheduled for Gaya Ji</span>
        </div>

        {/* 5. Hotel Requests */}
        <div className="p-5 rounded-2xl bg-white border border-[#E5DCCE] shadow-card">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6E6963]">Hotel Stays</span>
            <Hotel className="w-4 h-4 text-[#B88E3E]" />
          </div>
          <div className="font-serif text-3xl font-bold text-[#2A1810]">
            {hotelRequests.length}
          </div>
          <span className="text-[11px] text-[#6E6963] block mt-1">Accommodation needed</span>
        </div>

        {/* 6. Transport Requests */}
        <div className="p-5 rounded-2xl bg-white border border-[#E5DCCE] shadow-card">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6E6963]">Pickups</span>
            <Car className="w-4 h-4 text-[#C25E1A]" />
          </div>
          <div className="font-serif text-3xl font-bold text-[#2A1810]">
            {transportRequests.length}
          </div>
          <span className="text-[11px] text-[#6E6963] block mt-1">Station/Airport cabs</span>
        </div>

        {/* 7. NRI Leads */}
        <div className="p-5 rounded-2xl bg-white border border-[#E5DCCE] shadow-card">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6E6963]">NRI Enquiries</span>
            <Globe className="w-4 h-4 text-[#B88E3E]" />
          </div>
          <div className="font-serif text-3xl font-bold text-[#2A1810]">
            {nriLeads.length}
          </div>
          <span className="text-[11px] text-[#6E6963] block mt-1">USA / UK / Canada / UAE</span>
        </div>

        {/* 8. Senior Citizens */}
        <div className="p-5 rounded-2xl bg-white border border-[#E5DCCE] shadow-card">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C25E1A]">Senior Care</span>
            <span className="text-xs">❤️</span>
          </div>
          <div className="font-serif text-3xl font-bold text-[#2A1810]">
            {bookings.filter((b) => b.seniorAssistance).length}
          </div>
          <span className="text-[11px] text-[#6E6963] block mt-1">Wheelchair / E-rickshaws</span>
        </div>

      </div>

      {/* Recent Booking Requests Table (Rules #77, #118) */}
      <div className="bg-white rounded-3xl border border-[#E5DCCE] p-6 shadow-card overflow-hidden">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="font-serif text-xl font-bold text-[#2A1810]">
              Recent Booking Inquiries
            </h2>
            <p className="text-xs text-[#6E6963]">
              Quickly contact devotees and update pipeline status.
            </p>
          </div>
          <Link
            href="/admin/bookings"
            className="text-xs font-bold text-[#C25E1A] hover:underline flex items-center gap-1"
          >
            <span>View All ({bookings.length})</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-[#E5DCCE] text-[#6E6963] uppercase tracking-wider">
                <th className="py-3 px-3">Req ID</th>
                <th className="py-3 px-3">Devotee</th>
                <th className="py-3 px-3">Ritual</th>
                <th className="py-3 px-3">Preferred Date</th>
                <th className="py-3 px-3">People</th>
                <th className="py-3 px-3">City</th>
                <th className="py-3 px-3">Status</th>
                <th className="py-3 px-3">Assigned Pandit</th>
                <th className="py-3 px-3 text-right">Direct Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E5DCCE]/60">
              {recentBookings.map((b) => (
                <tr key={b.id} className="hover:bg-[#FAF7F2] transition-colors">
                  <td className="py-3.5 px-3 font-mono font-bold text-[#2A1810]">
                    {b.requestId}
                  </td>
                  <td className="py-3.5 px-3">
                    <strong className="text-[#2A1810] block">{b.fullName}</strong>
                    <span className="text-[#6E6963] text-[11px]">+91 {b.mobile}</span>
                  </td>
                  <td className="py-3.5 px-3 font-medium text-[#2A1810]">
                    {b.ritualName}
                  </td>
                  <td className="py-3.5 px-3 text-[#5C4033]">
                    {formatDate(b.preferredDate)}
                  </td>
                  <td className="py-3.5 px-3 font-semibold text-[#2A1810]">
                    {b.peopleCount}
                  </td>
                  <td className="py-3.5 px-3 text-[#6E6963]">
                    {b.city}
                  </td>
                  <td className="py-3.5 px-3">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      b.status === "NEW"
                        ? "bg-[#FCE3CE] text-[#C25E1A]"
                        : b.status === "BOOKING_CONFIRMED" || b.status === "PANDIT_ASSIGNED"
                        ? "bg-[#E8F8EE] text-[#25D366]"
                        : "bg-[#FAF5E6] text-[#B88E3E]"
                    }`}>
                      {b.status.replace("_", " ")}
                    </span>
                  </td>
                  <td className="py-3.5 px-3 text-[#5C4033]">
                    {b.assignedPanditName || <span className="text-[#9E9085] italic">Not Assigned</span>}
                  </td>
                  <td className="py-3.5 px-3 text-right">
                    <div className="flex items-center justify-end gap-1.5">
                      <a
                        href={`https://wa.me/91${b.whatsapp}?text=Pranam%20${encodeURIComponent(b.fullName)}.%20I%20am%20contacting%20from%20GayajiPind%20regarding%20your%20booking%20${b.requestId}.`}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 rounded-lg bg-[#25D366] text-white hover:bg-[#20ba5a]"
                        title="WhatsApp Customer"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                      </a>
                      <a
                        href={`tel:+91${b.mobile}`}
                        className="p-1.5 rounded-lg bg-[#2A1810] text-[#DFC07C] hover:bg-[#3D2418]"
                        title="Call Customer"
                      >
                        <Phone className="w-3.5 h-3.5" />
                      </a>
                      <Link
                        href="/admin/bookings"
                        className="p-1.5 rounded-lg bg-[#FAF5E6] text-[#2A1810] hover:bg-[#F5EFE6] border border-[#E5DCCE]"
                        title="View Details"
                      >
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
