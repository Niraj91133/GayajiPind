"use client";

import React, { useState, useEffect } from "react";
import {
  Search,
  Filter,
  Phone,
  MessageCircle,
  ShieldCheck,
  CheckCircle2,
  Clock,
  User,
  Hotel,
  Car,
  Heart,
  Edit3,
  X,
  Plus,
  ArrowRight
} from "lucide-react";
import { BookingRequest, BookingStatus, Pandit } from "@/types";
import { getStoredBookings, updateBookingStatus } from "@/lib/db";
import { PANDITS_DATA } from "@/data/pandits";
import { formatDate } from "@/lib/utils";

export default function AdminBookingsPage() {
  const [bookings, setBookings] = useState<BookingRequest[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("ALL");
  const [seniorFilter, setSeniorFilter] = useState(false);
  const [hotelFilter, setHotelFilter] = useState(false);
  const [transportFilter, setTransportFilter] = useState(false);

  // Selected Booking for Detail/Edit Modal
  const [selectedBooking, setSelectedBooking] = useState<BookingRequest | null>(null);
  const [newStatus, setNewStatus] = useState<BookingStatus>("NEW");
  const [selectedPanditId, setSelectedPanditId] = useState<string>("");
  const [newNoteText, setNewNoteText] = useState("");
  const [saveSuccess, setSaveSuccess] = useState(false);

  useEffect(() => {
    setBookings(getStoredBookings());
  }, []);

  const openDetailModal = (booking: BookingRequest) => {
    setSelectedBooking(booking);
    setNewStatus(booking.status);
    setSelectedPanditId(booking.assignedPanditId || "");
    setNewNoteText("");
    setSaveSuccess(false);
  };

  const handleSaveChanges = () => {
    if (!selectedBooking) return;
    const updated = updateBookingStatus(
      selectedBooking.requestId,
      newStatus,
      selectedPanditId || undefined,
      newNoteText
    );
    if (updated) {
      setSelectedBooking(updated);
      setBookings(getStoredBookings());
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 2000);
    }
  };

  // Filter pipeline
  const filteredBookings = bookings.filter((b) => {
    const matchesSearch =
      b.requestId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.mobile.includes(searchTerm) ||
      b.city.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter === "ALL" || b.status === statusFilter;
    const matchesSenior = !seniorFilter || b.seniorAssistance;
    const matchesHotel = !hotelFilter || b.hotelAssistance;
    const matchesTransport = !transportFilter || b.pickupAssistance;

    return matchesSearch && matchesStatus && matchesSenior && matchesHotel && matchesTransport;
  });

  const statuses: { key: BookingStatus | "ALL"; label: string }[] = [
    { key: "ALL", label: "All Statuses" },
    { key: "NEW", label: "New Requests" },
    { key: "CONTACTED", label: "Contacted" },
    { key: "DETAILS_CONFIRMED", label: "Details Confirmed" },
    { key: "BOOKING_CONFIRMED", label: "Booking Confirmed" },
    { key: "PANDIT_ASSIGNED", label: "Pandit Assigned" },
    { key: "TRAVEL_ARRANGED", label: "Travel Arranged" },
    { key: "COMPLETED", label: "Completed" },
  ];

  return (
    <div className="space-y-6 text-left">
      
      {/* Page Title */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-[#E5DCCE]">
        <div>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#2A1810]">
            Booking Pipeline & Request Management
          </h1>
          <p className="text-xs text-[#6E6963]">
            Track customer requests, assign verified Pandits, and coordinate logistics.
          </p>
        </div>
        <div className="text-xs font-bold text-[#5C4033] bg-[#FAF5E6] px-3.5 py-1.5 rounded-full border border-[#DFC07C]">
          Total Requests: {bookings.length}
        </div>
      </div>

      {/* Filter Toolbar */}
      <div className="bg-white rounded-3xl border border-[#E5DCCE] p-5 shadow-card space-y-4">
        
        {/* Search and Status Pills */}
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
          <div className="relative w-full lg:max-w-md">
            <Search className="absolute left-3.5 top-3 w-4 h-4 text-[#6E6963]" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by Devotee Name, Mobile, City, or Request ID..."
              className="w-full pl-10 pr-4 py-2.5 bg-[#FAF7F2] rounded-xl border border-[#E5DCCE] text-xs text-[#2A1810] focus:ring-1 focus:ring-[#C25E1A]"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto w-full lg:w-auto pb-1">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-3 py-2 bg-[#FAF7F2] border border-[#E5DCCE] rounded-xl text-xs font-semibold text-[#2A1810]"
            >
              {statuses.map((s) => (
                <option key={s.key} value={s.key}>
                  {s.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Quick Toggles */}
        <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-[#E5DCCE] text-xs">
          <span className="font-bold text-[#6E6963] mr-1">Quick Filters:</span>
          
          <button
            type="button"
            onClick={() => setSeniorFilter(!seniorFilter)}
            className={`px-3 py-1 rounded-full border text-xs font-medium transition-all ${
              seniorFilter
                ? "bg-[#2A1810] text-[#DFC07C] border-[#2A1810]"
                : "bg-[#FAF7F2] border-[#E5DCCE] text-[#5C4033]"
            }`}
          >
            ❤️ Senior Assistance ({bookings.filter((b) => b.seniorAssistance).length})
          </button>

          <button
            type="button"
            onClick={() => setHotelFilter(!hotelFilter)}
            className={`px-3 py-1 rounded-full border text-xs font-medium transition-all ${
              hotelFilter
                ? "bg-[#2A1810] text-[#DFC07C] border-[#2A1810]"
                : "bg-[#FAF7F2] border-[#E5DCCE] text-[#5C4033]"
            }`}
          >
            🏨 Hotel Needed ({bookings.filter((b) => b.hotelAssistance).length})
          </button>

          <button
            type="button"
            onClick={() => setTransportFilter(!transportFilter)}
            className={`px-3 py-1 rounded-full border text-xs font-medium transition-all ${
              transportFilter
                ? "bg-[#2A1810] text-[#DFC07C] border-[#2A1810]"
                : "bg-[#FAF7F2] border-[#E5DCCE] text-[#5C4033]"
            }`}
          >
            🚗 Pickup Needed ({bookings.filter((b) => b.pickupAssistance).length})
          </button>

          {(searchTerm || statusFilter !== "ALL" || seniorFilter || hotelFilter || transportFilter) && (
            <button
              onClick={() => {
                setSearchTerm("");
                setStatusFilter("ALL");
                setSeniorFilter(false);
                setHotelFilter(false);
                setTransportFilter(false);
              }}
              className="text-[#C25E1A] font-bold text-xs hover:underline ml-auto"
            >
              Reset Filters
            </button>
          )}
        </div>
      </div>

      {/* Bookings Table */}
      <div className="bg-white rounded-3xl border border-[#E5DCCE] shadow-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="bg-[#FAF7F2] border-b border-[#E5DCCE] text-[#6E6963] uppercase tracking-wider font-semibold">
                <th className="py-3 px-4">Request ID</th>
                <th className="py-3 px-4">Devotee Name</th>
                <th className="py-3 px-4">Ritual</th>
                <th className="py-3 px-4">Pref Date</th>
                <th className="py-3 px-4">People</th>
                <th className="py-3 px-4">City</th>
                <th className="py-3 px-4">Assistance</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Assigned Pandit</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E5DCCE]/60">
              {filteredBookings.length > 0 ? (
                filteredBookings.map((b) => (
                  <tr key={b.id} className="hover:bg-[#FAF5E6]/40 transition-colors">
                    <td className="py-3.5 px-4 font-mono font-bold text-[#2A1810]">
                      {b.requestId}
                    </td>
                    <td className="py-3.5 px-4">
                      <strong className="text-[#2A1810] block">{b.fullName}</strong>
                      <span className="text-[#6E6963] text-[11px]">+91 {b.mobile}</span>
                    </td>
                    <td className="py-3.5 px-4 font-medium text-[#2A1810]">
                      {b.ritualName}
                    </td>
                    <td className="py-3.5 px-4 text-[#5C4033]">
                      {formatDate(b.preferredDate)}
                    </td>
                    <td className="py-3.5 px-4 font-semibold text-[#2A1810]">
                      {b.peopleCount}
                    </td>
                    <td className="py-3.5 px-4 text-[#6E6963]">
                      {b.city}
                    </td>
                    <td className="py-3.5 px-4">
                      <div className="flex items-center gap-1.5">
                        {b.seniorAssistance && <span title="Senior Citizen Assistance">❤️</span>}
                        {b.hotelAssistance && <span title="Hotel Stay Assistance">🏨</span>}
                        {b.pickupAssistance && <span title="Pickup Transport Assistance">🚗</span>}
                        {!b.seniorAssistance && !b.hotelAssistance && !b.pickupAssistance && (
                          <span className="text-[#9E9085]">—</span>
                        )}
                      </div>
                    </td>
                    <td className="py-3.5 px-4">
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                        b.status === "NEW"
                          ? "bg-[#FCE3CE] text-[#C25E1A]"
                          : b.status === "BOOKING_CONFIRMED" || b.status === "PANDIT_ASSIGNED"
                          ? "bg-[#E8F8EE] text-[#25D366]"
                          : b.status === "COMPLETED"
                          ? "bg-[#FAF5E6] text-[#2A1810]"
                          : "bg-[#FAF5E6] text-[#B88E3E]"
                      }`}>
                        {b.status.replace("_", " ")}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-[#5C4033]">
                      {b.assignedPanditName ? (
                        <span className="font-semibold text-[#2A1810]">{b.assignedPanditName}</span>
                      ) : (
                        <span className="text-[#9E9085] italic">Unassigned</span>
                      )}
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        <a
                          href={`https://wa.me/91${b.whatsapp}?text=Pranam%20${encodeURIComponent(b.fullName)}.%20I%20am%20calling%20from%20GayajiPind%20regarding%20booking%20${b.requestId}.`}
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
                        <button
                          onClick={() => openDetailModal(b)}
                          className="px-2.5 py-1.5 rounded-lg bg-[#FAF5E6] border border-[#DFC07C] text-[#2A1810] font-bold text-[11px] hover:bg-[#F5EFE6] transition-all"
                        >
                          Manage
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={10} className="py-8 text-center text-xs text-[#6E6963]">
                    No booking requests found matching filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Booking Detail & Coordinator Action Modal (Rules #77, #78) */}
      {selectedBooking && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl border border-[#DFC07C]/60 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col text-left">
            
            {/* Modal Header */}
            <div className="p-6 bg-[#2A1810] text-[#FAF7F2] flex items-center justify-between border-b border-[#DFC07C]/30 flex-shrink-0">
              <div>
                <span className="text-[11px] text-[#DFC07C] font-bold uppercase tracking-wider block">
                  Coordinator Case File
                </span>
                <h3 className="font-serif text-xl font-bold text-white">
                  Request {selectedBooking.requestId} — {selectedBooking.fullName}
                </h3>
              </div>
              <button
                onClick={() => setSelectedBooking(null)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-xs sm:text-sm">
              
              {/* Quick Customer Info Matrix */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-[#FAF7F2] border border-[#E5DCCE] text-xs">
                <div>
                  <span className="text-[#6E6963] block">Phone / Mobile:</span>
                  <strong className="text-[#2A1810]">+91 {selectedBooking.mobile}</strong>
                </div>
                <div>
                  <span className="text-[#6E6963] block">WhatsApp:</span>
                  <strong className="text-[#2A1810]">+91 {selectedBooking.whatsapp}</strong>
                </div>
                <div>
                  <span className="text-[#6E6963] block">City & Gotra:</span>
                  <strong className="text-[#2A1810]">{selectedBooking.city} ({selectedBooking.gotra})</strong>
                </div>
                <div>
                  <span className="text-[#6E6963] block">Ritual Requested:</span>
                  <strong className="text-[#2A1810]">{selectedBooking.ritualName}</strong>
                </div>
                <div>
                  <span className="text-[#6E6963] block">Preferred Date:</span>
                  <strong className="text-[#2A1810]">{formatDate(selectedBooking.preferredDate)}</strong>
                </div>
                <div>
                  <span className="text-[#6E6963] block">Attending Devotees:</span>
                  <strong className="text-[#2A1810]">{selectedBooking.peopleCount} Persons</strong>
                </div>
              </div>

              {/* Special Requirements */}
              <div className="p-4 rounded-2xl bg-[#FAF5E6] border border-[#DFC07C]/50 space-y-2 text-xs">
                <span className="font-bold text-[#2A1810] uppercase tracking-wider block">
                  Assistance Requirements:
                </span>
                {selectedBooking.seniorAssistance && (
                  <div className="text-[#C25E1A]">
                    <strong>❤️ Senior Care:</strong> {selectedBooking.seniorDetails || "Yes (Wheelchair / E-rickshaw)"}
                  </div>
                )}
                {selectedBooking.hotelAssistance && (
                  <div className="text-[#B88E3E]">
                    <strong>🏨 Hotel Coordination:</strong> {selectedBooking.hotelDetails || "Yes (Sanitized family rooms requested)"}
                  </div>
                )}
                {selectedBooking.pickupAssistance && (
                  <div className="text-[#2A1810]">
                    <strong>🚗 Transport:</strong> Pickup requested for mode: {selectedBooking.transportMode || "Train"}
                  </div>
                )}
                {!selectedBooking.seniorAssistance && !selectedBooking.hotelAssistance && !selectedBooking.pickupAssistance && (
                  <div className="text-[#6E6963]">Standard ritual coordination only.</div>
                )}
              </div>

              {/* Update Pipeline Status (Rule #42) */}
              <div>
                <label className="block text-xs font-bold text-[#2A1810] mb-2">
                  Update Pipeline Status:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {(["NEW", "CONTACTED", "DETAILS_CONFIRMED", "BOOKING_CONFIRMED", "PANDIT_ASSIGNED", "TRAVEL_ARRANGED", "COMPLETED", "CANCELLED"] as BookingStatus[]).map((st) => (
                    <button
                      key={st}
                      type="button"
                      onClick={() => setNewStatus(st)}
                      className={`p-2 rounded-xl text-xs font-bold border transition-all ${
                        newStatus === st
                          ? "bg-[#2A1810] text-[#DFC07C] border-[#2A1810] shadow-sm"
                          : "bg-[#FAF7F2] border-[#E5DCCE] text-[#5C4033] hover:bg-[#F5EFE6]"
                      }`}
                    >
                      {st.replace("_", " ")}
                    </button>
                  ))}
                </div>
              </div>

              {/* Assign Verified Teerth Pandit (Rule #78) */}
              <div>
                <label className="block text-xs font-bold text-[#2A1810] mb-1">
                  Assign Teerth Pandit:
                </label>
                <select
                  value={selectedPanditId}
                  onChange={(e) => setSelectedPanditId(e.target.value)}
                  className="w-full p-2.5 bg-[#FAF7F2] rounded-xl border border-[#E5DCCE] text-xs font-medium text-[#2A1810]"
                >
                  <option value="">-- Select Verified Pandit --</option>
                  {PANDITS_DATA.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name} ({p.experienceYears}+ yrs exp • {p.lineage.slice(0, 35)}...)
                    </option>
                  ))}
                </select>
              </div>

              {/* Coordinator Notes Log */}
              <div>
                <label className="block text-xs font-bold text-[#2A1810] mb-1">
                  Coordinator Notes & Action Log:
                </label>
                {selectedBooking.notes && selectedBooking.notes.length > 0 && (
                  <div className="space-y-1 mb-2 max-h-32 overflow-y-auto p-3 bg-[#FAF7F2] rounded-xl border border-[#E5DCCE] text-xs text-[#5C4033]">
                    {selectedBooking.notes.map((note, idx) => (
                      <div key={idx} className="border-b border-[#E5DCCE]/40 pb-1">
                        {note}
                      </div>
                    ))}
                  </div>
                )}
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={newNoteText}
                    onChange={(e) => setNewNoteText(e.target.value)}
                    placeholder="Add internal note (e.g. Called customer, confirmed 6 AM slot)..."
                    className="w-full px-3 py-2 bg-white rounded-xl border border-[#E5DCCE] text-xs text-[#2A1810]"
                  />
                </div>
              </div>

              {saveSuccess && (
                <div className="p-3 bg-[#E8F8EE] text-[#25D366] font-bold text-xs rounded-xl flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Changes saved successfully to database!</span>
                </div>
              )}

            </div>

            {/* Modal Footer Actions */}
            <div className="p-4 sm:p-6 bg-[#FAF7F2] border-t border-[#E5DCCE] flex items-center justify-between flex-shrink-0">
              <div className="flex items-center gap-2">
                <a
                  href={`https://wa.me/91${selectedBooking.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-full bg-[#25D366] text-white text-xs font-bold flex items-center gap-1.5 shadow-sm"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href={`tel:+91${selectedBooking.mobile}`}
                  className="px-4 py-2 rounded-full bg-[#2A1810] text-[#FAF7F2] text-xs font-bold flex items-center gap-1.5 shadow-sm"
                >
                  <Phone className="w-3.5 h-3.5 text-[#DFC07C]" />
                  <span>Call</span>
                </a>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedBooking(null)}
                  className="px-4 py-2 rounded-full bg-white border border-[#E5DCCE] text-xs font-bold text-[#2A1810]"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={handleSaveChanges}
                  className="px-6 py-2 rounded-full bg-gradient-to-r from-[#C25E1A] to-[#9A450E] text-white text-xs font-bold shadow-md hover:brightness-105 transition-all"
                >
                  Save Updates
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
