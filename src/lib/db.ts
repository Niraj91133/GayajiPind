import { BookingRequest, BookingStatus, Pandit } from "@/types";
import { PANDITS_DATA } from "@/data/pandits";

const STORAGE_KEY = "gayajipind_booking_requests_v1";

const INITIAL_BOOKINGS: BookingRequest[] = [
  {
    id: "req-1",
    requestId: "GP-849201",
    ritual: "1-day-pind-daan",
    ritualName: "1-Day Pind Daan",
    preferredDate: "2026-10-18",
    peopleCount: 3,
    fullName: "Anurag Sharma",
    mobile: "9876543210",
    whatsapp: "9876543210",
    sameAsMobile: true,
    city: "Patna",
    gotra: "Kashyap",
    knowsGotra: true,
    seniorAssistance: true,
    seniorDetails: "Wheelchair needed for 74yo mother at Vishnupad",
    hotelAssistance: true,
    hotelDetails: "AC Double Room for 1 night near temple",
    pickupAssistance: true,
    transportMode: "Road",
    status: "PANDIT_ASSIGNED",
    assignedPanditId: "pandit-1",
    assignedPanditName: "Acharya Rameshwar Gayawal",
    notes: [
      "Coordinator spoken on 14 Sept. Mother is walking with stick, arranged e-rickshaw.",
      "Assigned Acharya Rameshwar Ji for early 6:00 AM Vishnupad sankalp."
    ],
    createdAt: "2026-09-14T10:30:00.000Z",
    updatedAt: "2026-09-14T15:20:00.000Z"
  },
  {
    id: "req-2",
    requestId: "GP-612495",
    ritual: "3-day-complete-pind-daan",
    ritualName: "3-Day Complete Pind Daan",
    preferredDate: "2026-11-04",
    peopleCount: 4,
    fullName: "Rajesh Kumar Verma",
    mobile: "9431287650",
    whatsapp: "9431287650",
    sameAsMobile: true,
    city: "Delhi NCR",
    gotra: "Vatsa",
    knowsGotra: true,
    seniorAssistance: false,
    hotelAssistance: true,
    hotelDetails: "Family suite for 2 nights",
    pickupAssistance: true,
    transportMode: "Train",
    status: "DETAILS_CONFIRMED",
    assignedPanditId: "pandit-2",
    assignedPanditName: "Pandit Vidyadhar Mishra",
    notes: [
      "Arriving via Mahabodhi Express at Gaya Jn at 05:45 AM. Station pickup arranged."
    ],
    createdAt: "2026-09-15T08:15:00.000Z",
    updatedAt: "2026-09-15T11:00:00.000Z"
  },
  {
    id: "req-3",
    requestId: "GP-938210",
    ritual: "tripindi-shradh",
    ritualName: "Tripindi Shradh",
    preferredDate: "2026-10-25",
    peopleCount: 2,
    fullName: "Pooja Hegde",
    mobile: "9820154321",
    whatsapp: "9820154321",
    sameAsMobile: true,
    city: "Bengaluru",
    gotra: "Bharadwaj",
    knowsGotra: true,
    seniorAssistance: false,
    hotelAssistance: false,
    pickupAssistance: false,
    transportMode: "Patna Airport",
    status: "NEW",
    notes: [],
    createdAt: "2026-09-15T13:40:00.000Z",
    updatedAt: "2026-09-15T13:40:00.000Z"
  },
  {
    id: "req-4",
    requestId: "GP-492104",
    ritual: "narayan-bali",
    ritualName: "Narayan Bali",
    preferredDate: "2026-10-12",
    peopleCount: 2,
    fullName: "Siddharth Deshmukh",
    mobile: "9167234567",
    whatsapp: "9167234567",
    sameAsMobile: true,
    city: "Mumbai",
    gotra: "Sandilya",
    knowsGotra: true,
    seniorAssistance: false,
    hotelAssistance: true,
    hotelDetails: "Near Vishnupad temple",
    pickupAssistance: true,
    transportMode: "Gaya Airport",
    status: "BOOKING_CONFIRMED",
    assignedPanditId: "pandit-3",
    assignedPanditName: "Acharya Devendra Shastri",
    notes: [
      "Advised on special havan samagri. Pandit Devendra Ji briefed on lineage details."
    ],
    createdAt: "2026-09-13T16:00:00.000Z",
    updatedAt: "2026-09-14T09:30:00.000Z"
  },
  {
    id: "req-5",
    requestId: "GP-772910",
    ritual: "3-day-complete-pind-daan",
    ritualName: "3-Day Complete Pind Daan",
    preferredDate: "2026-11-20",
    peopleCount: 5,
    fullName: "Vikram & Sunita Mehta",
    mobile: "14155552671",
    whatsapp: "14155552671",
    sameAsMobile: true,
    city: "San Francisco, USA",
    gotra: "Kashyap",
    knowsGotra: true,
    seniorAssistance: true,
    seniorDetails: "Senior parents (80yo & 76yo) - Need ground floor & palki at Pretshila",
    hotelAssistance: true,
    hotelDetails: "Premium 4-star / comfortable heritage stay 3 nights",
    pickupAssistance: true,
    transportMode: "Patna Airport",
    status: "CONTACTED",
    isNri: true,
    nriCountry: "USA",
    notes: [
      "Coordinated via WhatsApp on PST evening. Family flying via SFO-DEL-PAT. Dedicated vehicle and doli booked."
    ],
    createdAt: "2026-09-15T04:10:00.000Z",
    updatedAt: "2026-09-15T12:00:00.000Z"
  }
];

export function getStoredBookings(): BookingRequest[] {
  if (typeof window === "undefined") {
    return INITIAL_BOOKINGS;
  }
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_BOOKINGS));
      return INITIAL_BOOKINGS;
    }
    return JSON.parse(raw);
  } catch {
    return INITIAL_BOOKINGS;
  }
}

export function saveBookingRequest(request: BookingRequest): void {
  if (typeof window === "undefined") return;
  try {
    const existing = getStoredBookings();
    const updated = [request, ...existing.filter((b) => b.id !== request.id && b.requestId !== request.requestId)];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (err) {
    console.error("Error saving booking request:", err);
  }
}

export function updateBookingStatus(
  requestId: string,
  status: BookingStatus,
  assignedPanditId?: string,
  newNote?: string
): BookingRequest | null {
  if (typeof window === "undefined") return null;
  try {
    const existing = getStoredBookings();
    const idx = existing.findIndex((b) => b.requestId === requestId || b.id === requestId);
    if (idx === -1) return null;

    const item = { ...existing[idx] };
    item.status = status;
    item.updatedAt = new Date().toISOString();

    if (assignedPanditId) {
      const pandit = PANDITS_DATA.find((p) => p.id === assignedPanditId);
      if (pandit) {
        item.assignedPanditId = pandit.id;
        item.assignedPanditName = pandit.name;
      }
    }

    if (newNote && newNote.trim()) {
      item.notes = [...(item.notes || []), `[${new Date().toLocaleDateString("en-IN")}] ${newNote.trim()}`];
    }

    existing[idx] = item;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
    return item;
  } catch (err) {
    console.error("Error updating booking:", err);
    return null;
  }
}

export function findBookingByIdOrMobile(query: string): BookingRequest | undefined {
  const clean = query.trim().toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  const all = getStoredBookings();
  return all.find((b) => {
    const matchId = b.requestId.toLowerCase().replace(/[^a-zA-Z0-9]/g, "") === clean;
    const matchMobile = b.mobile.includes(clean) || clean.includes(b.mobile);
    return matchId || matchMobile;
  });
}
