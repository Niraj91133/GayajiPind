import { SacredPlace, Vedi } from "@/types";

export const SACRED_PLACES: SacredPlace[] = [
  {
    id: "place-vishnupad",
    slug: "vishnupad",
    name: "Vishnupad Temple",
    hindiName: "विष्णुपद मंदिर",
    tagline: "The sanctified footprint of Lord Vishnu etched into solid basalt rock",
    significance: "The heart of Gaya pilgrimage. The 40-cm footprint of Lord Gadadhar Vishnu (Vishnupada) is enshrined here. It is believed that offering pinda here delivers ancestors directly to Vaikuntha.",
    history: "Reconstructed in 1787 AD by the benevolent queen Maharani Ahilyabai Holkar of Indore with exquisite grey granite craftsmanship and an octagonal sanctum tower.",
    whatToKnow: [
      "Men must wear traditional unstitched or clean dhoti/kurta inside sanctum",
      "Pind daan takes place in designated stone Mandapas surrounding the inner footprints",
      "Sanctum opens at 5:00 AM for early morning Mangala Aarti"
    ],
    location: "Chandrachur Ghat Marg, Gaya Ji, Bihar",
    timings: "5:00 AM – 9:00 PM Daily",
    relatedRituals: ["1-Day Pind Daan", "3-Day Complete Pind Daan", "Tripindi Shradh"],
    image: "/images/hero-temple.jpg",
    featured: true
  },
  {
    id: "place-falgu",
    slug: "falgu-river",
    name: "Falgu River (Antarsalila)",
    hindiName: "पवित्र फल्गु नदी",
    tagline: "The sacred river flowing beneath the sands, blessed by the hands of Mata Sita",
    significance: "Due to the mythological curse and boon of Mata Sita during the Treta Yuga, the sacred water flows beneath the sand bed (Antarsalila). Digging a few inches yields crystalline holy water used for ancestral tarpan.",
    history: "Mentioned in the Ramayana where Lord Rama and Mata Sita performed Pind Daan for King Dasharatha.",
    whatToKnow: [
      "Pilgrims begin their morning rituals with snan or prokshan here",
      "Sand pinda offerings and sesame water tarpan are performed at designated ghats",
      "Recently equipped with modern rubber dam (Gayaji Dam) ensuring year-round clean water"
    ],
    location: "Eastern edge of Gaya Ji town, Bihar",
    timings: "Open 24 Hours (Best during 5:30 AM – 11:00 AM)",
    relatedRituals: ["1-Day Pind Daan", "3-Day Complete Pind Daan", "Tripindi Shradh", "Narayan Bali"],
    image: "/images/falgu-river.jpg",
    featured: true
  },
  {
    id: "place-akshayavat",
    slug: "akshayavat",
    name: "Akshayavat Vriksh",
    hindiName: "अक्षयवट वृक्ष",
    tagline: "The immortal banyan tree where ancestral fulfillment (Suphal) is bestowed",
    significance: "The Akshayavat (undying banyan tree) was blessed by Mata Sita to never wither across cosmic cycles. Devotees perform the final pinda offering here to ensure their ancestors attain immortal peace.",
    history: "Ancient tree revered since the Puranic age. Pilgrims conclude their entire Gaya journey here by receiving the blessing 'Suphal' from the Gayawal Purohits.",
    whatToKnow: [
      "Devotees traditionally give up one preferred food or habit as a humble sacrifice here",
      "Brahmin Bhojan and final Dakshina are offered in the shaded premises",
      "Peaceful, serene atmosphere suitable for elderly meditation"
    ],
    location: "South of Vishnupad Temple complex, Gaya Ji",
    timings: "6:00 AM – 7:00 PM Daily",
    relatedRituals: ["1-Day Pind Daan", "3-Day Complete Pind Daan"],
    image: "/images/akshayavat.jpg",
    featured: true
  },
  {
    id: "place-pretshila",
    slug: "pretshila",
    name: "Pretshila Hill & Brahmakund",
    hindiName: "प्रेतशिला पर्वत एवं ब्रह्मकुंड",
    tagline: "The elevated mountain sanctuary dedicated to liberating unpacified souls",
    significance: "Pretshila (The Rock of Departed Spirits) is situated atop an 873-foot hill north of Gaya. Pind Daan with roasted barley sattu and black sesame here liberates souls caught in restless states.",
    history: "Believed to hold Lord Yama’s footmarks and consecrated by Lord Brahma. The sacred Brahmakund lies at the base.",
    whatToKnow: [
      "Accessible via approx. 365 paved stairs, road drive to base, and palanquin/doli service for seniors",
      "Special sattu pinds are offered in fissures atop the rock",
      "Stunning panoramic views of the Gaya valley"
    ],
    location: "8 km North of Gaya City, Bihar",
    timings: "6:00 AM – 5:30 PM",
    relatedRituals: ["3-Day Complete Pind Daan", "Narayan Bali"],
    image: "/images/pind-daan-3day.jpg",
    featured: true
  }
];

export const VEDIS_DATA: Vedi[] = [
  { id: 1, name: "Falgu Tirth", hindiName: "फल्गु तीर्थ", location: "Falgu Ghat", importance: "Primary water tarpan & initial sankalp", dayRecommended: "Day 1" },
  { id: 2, name: "Vishnupada", hindiName: "विष्णुपद", location: "Sanctum Sanctorum", importance: "Core footprint pinda offering", dayRecommended: "Day 1" },
  { id: 3, name: "Rudrapada", hindiName: "रुद्रपद", location: "Vishnupad Complex", importance: "Lord Shiva footprint for ancestral grace", dayRecommended: "Day 1" },
  { id: 4, name: "Brahmapada", hindiName: "ब्रह्मपद", location: "Vishnupad Complex", importance: "Lord Brahma footprint for lineage liberation", dayRecommended: "Day 1" },
  { id: 5, name: "Kashyappada", hindiName: "कश्यपपद", location: "Vishnupad Complex", importance: "Universal sage gotra pinda", dayRecommended: "Day 1" },
  { id: 6, name: "Dharmasila", hindiName: "धर्मशिला", location: "Vishnupad Sanctum", importance: "Sacred stone placed on demon Gayasura", dayRecommended: "Day 1" },
  { id: 7, name: "Surya Pada", hindiName: "सूर्यपद", location: "Vishnupad Compound", importance: "Solar energy pitru blessings", dayRecommended: "Day 1" },
  { id: 8, name: "Chandra Pada", hindiName: "चन्द्रपद", location: "Vishnupad Compound", importance: "Lunar realm pitru pacification", dayRecommended: "Day 1" },
  { id: 9, name: "Ganesha Pada", hindiName: "गणेशपद", location: "Vishnupad Compound", importance: "Obstacle removal for pitru journey", dayRecommended: "Day 1" },
  { id: 10, name: "Akshayavat", hindiName: "अक्षयवट", location: "Akshayavat", importance: "Immortal tree of Suphal fulfillment", dayRecommended: "Day 1 & Day 3" },
  { id: 11, name: "Pretshila", hindiName: "प्रेतशिला", location: "Pretshila Hill", importance: "Liberation from unfulfilled astral states", dayRecommended: "Day 2" },
  { id: 12, name: "Brahmakund", hindiName: "ब्रह्मकुंड", location: "Pretshila Base", importance: "Sacred pond consecrated by Brahma", dayRecommended: "Day 2" },
  { id: 13, name: "Ramshila", hindiName: "रामशिला", location: "Ramshila Hill", importance: "Where Lord Rama performed Pind Daan", dayRecommended: "Day 2" },
  { id: 14, name: "Ramkund", hindiName: "रामकुंड", location: "Ramshila Base", importance: "Cleansing water for Treta Yuga rites", dayRecommended: "Day 2" },
  { id: 15, name: "Kagbali Vedi", hindiName: "कागबलि वेदी", location: "Pretshila Path", importance: "Oblations for messenger birds (Yama's crow)", dayRecommended: "Day 2" },
  { id: 16, name: "Sita Kund", hindiName: "सीता कुंड", location: "Falgu East Bank", importance: "Where Mata Sita made sand pinds for Dasharatha", dayRecommended: "Day 1" },
  { id: 17, name: "Gaya Sir", hindiName: "गया सिर", location: "Vishnupad Core", importance: "Head region of Gayasura", dayRecommended: "Day 1" },
  { id: 18, name: "Gayakupa", hindiName: "गयाकूप", location: "Vishnupad North", importance: "Holy well for deep ancestral tarpan", dayRecommended: "Day 2" },
  { id: 19, name: "Mundaprishtha", hindiName: "मुण्डपृष्ठ", location: "Vishnupad Hillock", importance: "Ancient high altar for Vedic pinda", dayRecommended: "Day 2" },
  { id: 20, name: "Adigaya", hindiName: "आदिगया", location: "Vishnupad South", importance: "Primordial spot of first Gaya sacrifice", dayRecommended: "Day 1" },
  { id: 21, name: "Matangavapi", hindiName: "मातंगवापी", location: "Dharmaranya", importance: "Matanga Rishi sacred pond", dayRecommended: "Day 3" },
  { id: 22, name: "Dharmaranya", hindiName: "धर्मारण्य", location: "Bodhgaya Marg", importance: "Sacred forest of Lord Dharma", dayRecommended: "Day 3" },
  { id: 23, name: "Brahmasarovar", hindiName: "ब्रह्मसरोवर", location: "Gaya City", importance: "Lake created by Brahma’s mind", dayRecommended: "Day 3" },
  { id: 24, name: "Goprachara", hindiName: "गोप्रचार", location: "Akshayavat Region", importance: "Sacred cow grazing grounds for Go-daan", dayRecommended: "Day 3" },
  { id: 25, name: "Gadavapi", hindiName: "गदावापी", location: "Vishnupad West", importance: "Where Lord Vishnu placed his Kaumodaki mace", dayRecommended: "Day 1" },
  { id: 26, name: "Kanka Tirth", hindiName: "कंक तीर्थ", location: "Falgu Bank", importance: "Purification vedi", dayRecommended: "Day 2" },
  { id: 27, name: "Uttaramansa", hindiName: "उत्तरमानस", location: "North Gaya", importance: "Sun god pilgrimage pond", dayRecommended: "Day 3" },
  { id: 28, name: "Dakshinamansa", hindiName: "दक्षिणमानस", location: "South Gaya", importance: "Southern solar altar", dayRecommended: "Day 3" },
  { id: 29, name: "Jihvalola", hindiName: "जिह्वालोल", location: "Falgu Bed", importance: "Sacred water tongue of earth", dayRecommended: "Day 1" },
  { id: 30, name: "Panchatirth", hindiName: "पंचतीर्थ", location: "Falgu Ghats", importance: "Confluence of 5 sacred energies", dayRecommended: "Day 1" },
  { id: 31, name: "Vaitarani River", hindiName: "वैतरणी नदी", location: "Markandeya Marg", importance: "Symbolic crossing to save ancestors from agony", dayRecommended: "Day 3" },
  { id: 32, name: "Godavari Tirth", hindiName: "गोदावरी तीर्थ", location: "West Hills", importance: "Flow of Southern Ganges in Gaya", dayRecommended: "Day 3" },
  { id: 33, name: "Koti Tirth", hindiName: "कोटि तीर्थ", location: "Vishnupad East", importance: "Merit equivalent to 10 million tirthas", dayRecommended: "Day 1" },
  { id: 34, name: "Pandu Sila", hindiName: "पांडु शिला", location: "Ramshila Foot", importance: "White rock vedi for Pandava rites", dayRecommended: "Day 2" },
  { id: 35, name: "Bhim Gaya", hindiName: "भीम गया", location: "South Rocks", importance: "Kneeprint of Bhima during Mahabharata", dayRecommended: "Day 2" },
  { id: 36, name: "Gopada", hindiName: "गोपद", location: "Akshayavat North", importance: "Holy Kamadhenu hoofprints", dayRecommended: "Day 3" },
  { id: 37, name: "Indrapada", hindiName: "इन्द्रपद", location: "Vishnupad Complex", importance: "Footprint of King Indra", dayRecommended: "Day 1" },
  { id: 38, name: "Agastya Pada", hindiName: "अगस्त्य पद", location: "South Ghat", importance: "Sage Agastya meditation spot", dayRecommended: "Day 2" },
  { id: 39, name: "Krounchapada", hindiName: "क्रौंचपद", location: "Vishnupad East", importance: "Moksha for departed birds & animal lives", dayRecommended: "Day 2" },
  { id: 40, name: "Kardamaleshwar", hindiName: "कर्दमलेश्वर", location: "North Bank", importance: "Lord Shiva sanctum for Gotra purity", dayRecommended: "Day 3" },
  { id: 41, name: "Dadhichi Tirth", hindiName: "दधीचि तीर्थ", location: "Falgu Ghat", importance: "Sage Dadhichi selfless merit vedi", dayRecommended: "Day 2" },
  { id: 42, name: "Bhrigu Pada", hindiName: "भृगु पद", location: "Vishnupad", importance: "Sage Bhrigu divine footprint", dayRecommended: "Day 1" },
  { id: 43, name: "Sanakadi Pada", hindiName: "सनकादि पद", location: "Vishnupad", importance: "Four Kumaras blessing point", dayRecommended: "Day 1" },
  { id: 44, name: "Matanga Pada", hindiName: "मातंग पद", location: "Dharmaranya", importance: "Sage Matanga holy imprint", dayRecommended: "Day 3" },
  { id: 45, name: "Gayatri Pada", hindiName: "गायत्री पद", location: "Gayatri Ghat", importance: "Veda Mata Gayatri culmination vedi", dayRecommended: "Day 3" }
];
