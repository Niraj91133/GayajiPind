import { CityGuide } from "@/types";

export const CITIES_DATA: CityGuide[] = [
  {
    slug: "patna",
    name: "Patna",
    hindiName: "पटना",
    distanceKm: 105,
    travelOptions: {
      train: "Multiple daily express trains (Vande Bharat, Jan Shatabdi, Intercity) in 1.5–2 hours from Patna Junction to Gaya Junction.",
      flight: "Patna Airport (PAT) is 100 km away. Direct private AC cab takes approx. 2.5 hours via Patna-Gaya Highway.",
      road: "Smooth 4-lane NH-22 & Patna-Gaya Expressway connecting directly in 2 to 2.5 hours."
    },
    recommendedRituals: ["1-day-pind-daan", "tripindi-shradh"],
    highlights: [
      "Most popular 1-day same-day return pilgrimage route",
      "Early morning cab pickup from Patna home, ritual at Gaya, evening return",
      "Senior-friendly itinerary with zero overnight stay required"
    ]
  },
  {
    slug: "delhi",
    name: "Delhi NCR",
    hindiName: "दिल्ली एनसीआर",
    distanceKm: 990,
    travelOptions: {
      train: "Direct premium trains including Gaya Rajdhani, Mahabodhi Express, Purushottam Express (11–13 hours overnight).",
      flight: "Daily direct and 1-stop flights from Indira Gandhi International Airport (DEL) to Gaya Airport (GAY) or Patna Airport (PAT).",
      road: "Overnight driving via Yamuna Expressway and NH-19 (Grand Trunk Road)."
    },
    recommendedRituals: ["1-day-pind-daan", "3-day-complete-pind-daan", "tripindi-shradh"],
    highlights: [
      "Board Mahabodhi/Rajdhani in evening, arrive early morning in Gaya",
      "Direct coordinator pickup from Gaya Junction Platform",
      "Flexible 2-day or 3-day weekend pilgrimage package"
    ]
  },
  {
    slug: "mumbai",
    name: "Mumbai",
    hindiName: "मुंबई",
    distanceKm: 1680,
    travelOptions: {
      train: "Direct trains like Kolkata Mail via Gaya, Mumbai LTT-Ranchi Express, or via Patna Jn.",
      flight: "Direct connecting flights from Mumbai (BOM) to Patna (PAT) or seasonal direct charters to Gaya Airport (GAY).",
      road: "Flight to Patna followed by pre-booked GayajiPind AC cab to Gaya (2 hours)."
    },
    recommendedRituals: ["3-day-complete-pind-daan", "narayan-bali", "tripindi-shradh"],
    highlights: [
      "Special coordination for Marathi, Gujarati & Marwari families",
      "Pandits fluent in Marathi and Gujarati",
      "Complete 3-day sacred circuit with sanitized hotel stay"
    ]
  },
  {
    slug: "kolkata",
    name: "Kolkata",
    hindiName: "कोलकाता",
    distanceKm: 480,
    travelOptions: {
      train: "Multiple daily fast trains (Howrah-Gaya Vande Bharat Express in 5.5 hours, Poorva, Kalka Mail).",
      flight: "Direct 50-minute flight from Netaji Subhash Chandra Bose Airport (CCU) to Gaya or Patna.",
      road: "Direct drive via Grand Trunk Road (NH-19) in approx. 8–9 hours."
    },
    recommendedRituals: ["1-day-pind-daan", "3-day-complete-pind-daan"],
    highlights: [
      "Morning Vande Bharat arrival and evening return option",
      "Bengali-speaking Teerth Pandits well-versed in Gaudiya traditions",
      "Complete Falgu and Vishnupad coordination"
    ]
  },
  {
    slug: "bengaluru",
    name: "Bengaluru",
    hindiName: "बेंगलुरु",
    distanceKm: 1850,
    travelOptions: {
      train: "Sanghamitra Express to Patna/Gaya, or Bangalore-Patna Superfast.",
      flight: "Direct flights from Kempegowda International Airport (BLR) to Patna Airport (PAT), followed by cab transfer.",
      road: "Airport pickup coordinated directly to Gaya hotel."
    },
    recommendedRituals: ["3-day-complete-pind-daan", "tripindi-shradh"],
    highlights: [
      "Customized itineraries for South Indian / Kannada devotees",
      "English and Hindi speaking coordinator assistance",
      "Pre-arranged temple logistics and satvik meals"
    ]
  },
  {
    slug: "hyderabad",
    name: "Hyderabad",
    hindiName: "हैदराबाद",
    distanceKm: 1380,
    travelOptions: {
      train: "Secunderabad-Patna Express, Danapur Express to Gaya/Patna.",
      flight: "Daily direct 2-hour flights from Rajiv Gandhi Airport (HYD) to Patna (PAT).",
      road: "Private transfer from Patna airport to Gaya hotel."
    },
    recommendedRituals: ["1-day-pind-daan", "3-day-complete-pind-daan", "narayan-bali"],
    highlights: [
      "Telugu-friendly support and clear guidance on traditional sankalp",
      "Comfortable hotel stay arrangement for senior family members"
    ]
  }
];

export function getCityBySlug(slug: string): CityGuide | undefined {
  return CITIES_DATA.find((c) => c.slug === slug);
}
