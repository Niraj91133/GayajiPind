export type RitualSlug = 
  | "1-day-pind-daan" 
  | "3-day-complete-pind-daan" 
  | "tripindi-shradh" 
  | "narayan-bali";

export interface Ritual {
  id: string;
  slug: RitualSlug;
  name: string;
  hindiName: string;
  bengaliName?: string;
  tagline: string;
  hindiTagline: string;
  bengaliTagline?: string;
  shortDescription: string;
  fullDescription: string;
  duration: string;
  whoIsItFor: string[];
  whatHappens: {
    title: string;
    description: string;
    location?: string;
  }[];
  included: string[];
  optional: string[];
  notIncluded: string[];
  preparation: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  featured: boolean;
  image: string;
}

export interface Pandit {
  id: string;
  slug: string;
  name: string;
  title: string;
  experienceYears: number;
  lineage: string;
  gotra: string;
  languages: string[];
  specializations: string[];
  bio: string;
  location: string;
  verificationBadge: string;
  image: string;
  available: boolean;
}

export interface SacredPlace {
  id: string;
  slug: string;
  name: string;
  hindiName: string;
  bengaliName?: string;
  tagline: string;
  bengaliTagline?: string;
  significance: string;
  bengaliSignificance?: string;
  history: string;
  whatToKnow: string[];
  location: string;
  timings: string;
  relatedRituals: string[];
  image: string;
  featured: boolean;
}

export interface Vedi {
  id: number;
  name: string;
  hindiName: string;
  location: string;
  importance: string;
  dayRecommended: string;
}

export type BookingStatus =
  | "NEW"
  | "CONTACTED"
  | "DETAILS_CONFIRMED"
  | "BOOKING_CONFIRMED"
  | "PANDIT_ASSIGNED"
  | "TRAVEL_ARRANGED"
  | "COMPLETED"
  | "CANCELLED";

export interface BookingRequest {
  id: string;
  requestId: string;
  ritual: RitualSlug | "not-sure";
  ritualName: string;
  preferredDate: string;
  peopleCount: number;
  fullName: string;
  mobile: string;
  whatsapp: string;
  sameAsMobile: boolean;
  city: string;
  gotra: string;
  knowsGotra: boolean;
  
  // Assistance requests
  seniorAssistance: boolean;
  seniorDetails?: string;
  hotelAssistance: boolean;
  hotelDetails?: string;
  pickupAssistance: boolean;
  transportMode?: "Train" | "Gaya Airport" | "Patna Airport" | "Road" | "Own vehicle" | "Not decided";
  
  // Internal management
  status: BookingStatus;
  assignedPanditId?: string;
  assignedPanditName?: string;
  notes: string[];
  createdAt: string;
  updatedAt: string;
  isNri?: boolean;
  nriCountry?: string;
}

export interface CityGuide {
  slug: string;
  name: string;
  hindiName: string;
  distanceKm: number;
  travelOptions: {
    train: string;
    flight: string;
    road: string;
  };
  recommendedRituals: RitualSlug[];
  highlights: string[];
}

export interface NriCountryGuide {
  slug: string;
  country: string;
  flag: string;
  flightHubs: string[];
  recommendations: string[];
  popularTimings: string;
  timezoneNote: string;
}

export interface FAQItem {
  id: string;
  question: string;
  hindiQuestion?: string;
  answer: string;
  hindiAnswer?: string;
  category: "Rituals" | "Booking" | "Travel & Stay" | "Gotra & Samagri" | "General";
}
