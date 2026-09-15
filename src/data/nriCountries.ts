import { NriCountryGuide } from "@/types";

export const NRI_COUNTRIES_DATA: NriCountryGuide[] = [
  {
    slug: "usa",
    country: "United States (USA)",
    flag: "🇺🇸",
    flightHubs: ["New York (JFK/EWR)", "San Francisco (SFO)", "Chicago (ORD)", "Dallas (DFW)"],
    recommendations: [
      "Book international flight to New Delhi (DEL) or Kolkata (CCU), with seamless domestic connection to Gaya (GAY) or Patna (PAT)",
      "Schedule WhatsApp consultation aligned with US EST/PST time zones",
      "Choose the 3-Day Complete Pilgrimage package to adjust for jet lag and perform unhurried rituals"
    ],
    popularTimings: "Pitru Paksha (Sept/Oct), Winter holiday season (Nov–Feb), or any convenient ancestral tithi",
    timezoneNote: "Our coordinators are available on WhatsApp across US Eastern & Pacific hours for your family consultation."
  },
  {
    slug: "uk",
    country: "United Kingdom (UK)",
    flag: "🇬🇧",
    flightHubs: ["London Heathrow (LHR)", "Manchester (MAN)", "Birmingham (BHX)"],
    recommendations: [
      "Direct flights from London to Delhi or Mumbai, connecting directly to Gaya or Patna",
      "Pre-coordinated end-to-end luxury pickup and premium heritage stay near Vishnupad",
      "English & Hindi speaking Pandit assignment"
    ],
    popularTimings: "Autumn Pitru Paksha & Spring Shradh periods",
    timezoneNote: "GMT-friendly WhatsApp consultation scheduled at your convenience."
  },
  {
    slug: "canada",
    country: "Canada",
    flag: "🇨🇦",
    flightHubs: ["Toronto (YYZ)", "Vancouver (YVR)", "Calgary (YYC)", "Montreal (YUL)"],
    recommendations: [
      "Connecting flights via Delhi to Gaya/Patna",
      "Assistance with Gotra identification and family tree preparation prior to departure",
      "Full family group coordination with senior assistance"
    ],
    popularTimings: "Pitru Paksha, October–March pleasant months",
    timezoneNote: "EST & PST video/voice coordination available."
  },
  {
    slug: "uae",
    country: "United Arab Emirates & Gulf (UAE)",
    flag: "🇦🇪",
    flightHubs: ["Dubai (DXB)", "Abu Dhabi (AUH)", "Sharjah (SHJ)"],
    recommendations: [
      "Short 3.5-hour direct flights to India (Delhi/Kolkata/Patna)",
      "Ideal for quick 2-day or 3-day weekend visits",
      "Private airport pickup and express VIP coordination"
    ],
    popularTimings: "Year-round availability with fast same-day or 2-day schedules",
    timezoneNote: "Gulf Standard Time (GST) seamless coordination."
  },
  {
    slug: "australia",
    country: "Australia",
    flag: "🇦🇺",
    flightHubs: ["Sydney (SYD)", "Melbourne (MEL)", "Brisbane (BNE)", "Perth (PER)"],
    recommendations: [
      "Flights via Singapore/Bangkok into India, connecting to Gaya/Patna",
      "Comprehensive multi-day assistance including Bodh Gaya visits if desired",
      "Family tree documentation assistance before arrival"
    ],
    popularTimings: "Australian spring/autumn breaks & Pitru Paksha",
    timezoneNote: "AEST & AWST responsive WhatsApp support."
  },
  {
    slug: "singapore",
    country: "Singapore & SE Asia",
    flag: "🇸🇬",
    flightHubs: ["Singapore Changi (SIN)", "Kuala Lumpur (KUL)"],
    recommendations: [
      "Direct international charter flights directly to Gaya Airport (GAY) during pilgrim season",
      "Convenient 4-hour flight distance",
      "Multi-lingual Pandits supporting Tamil, Hindi, and English"
    ],
    popularTimings: "Direct pilgrim charter season (Sept–March)",
    timezoneNote: "SGT direct WhatsApp assistance."
  }
];

export function getNriCountryBySlug(slug: string): NriCountryGuide | undefined {
  return NRI_COUNTRIES_DATA.find((c) => c.slug === slug);
}
