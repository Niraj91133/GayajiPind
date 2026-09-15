import { Pandit } from "@/types";

export const PANDITS_DATA: Pandit[] = [
  {
    id: "pandit-1",
    slug: "acharya-ramesh-sharma",
    name: "Acharya Rameshwar Gayawal",
    title: "Senior Teerth Purohit & Vedic Scholar",
    experienceYears: 34,
    lineage: "7th Generation Gayawal Tirth Purohit Family, Vishnupad Kshetra",
    gotra: "Shandilya",
    languages: ["Hindi", "English", "Bhojpuri", "Maithili", "Sanskrit"],
    specializations: [
      "1-Day & 3-Day Gaya Pind Daan",
      "Tripindi Shradh",
      "Narayan Bali Vidhi",
      "Vedic Pitru Suktam Chanting"
    ],
    bio: "Acharya Rameshwar Ji is a revered Teerth Purohit in Gaya Ji with over 34 years of unbroken devotion conducting sacred ancestral rituals for thousands of devotee families from India, USA, Canada, and the UK. Coming from a heritage of authentic Gayawal lineage directly serving at the Vishnupad Sanctum, his gentle manner, meticulous adherence to Shastras, and compassionate step-by-step guidance provide immense peace of mind to pilgrims of all generations.",
    location: "Vishnupad Temple Compound, Gaya Ji, Bihar",
    verificationBadge: "Verified Gayawal Teerth Lineage",
    image: "/images/pandit-rameshwar.jpg",
    available: true
  },
  {
    id: "pandit-2",
    slug: "pandit-vidyadhar-mishra",
    name: "Pandit Vidyadhar Mishra",
    title: "Veda Shastri & Falgu Tirtha Purohit",
    experienceYears: 26,
    lineage: "Rigvedic Sampradaya, Traditional Falgu Ghat Tirth Purohit",
    gotra: "Kashyap",
    languages: ["Hindi", "English", "Bengali", "Sanskrit"],
    specializations: [
      "Falgu Ghat Tarpan",
      "Pretshila Shradh Vidhi",
      "Annual Pitru Paksha Maha-Shradh",
      "Kashi-Gaya-Prayag Tirth Vidhi"
    ],
    bio: "Pandit Vidyadhar Mishra is an accomplished Sanskrit scholar from Sampurnanand Sanskrit University who has dedicated his life to maintaining pristine Vedic standards during Gaya Ji pilgrimage rites. He is celebrated for his patience with senior citizens and NRI families who are experiencing traditional rites for the first time, ensuring every family member understands the spiritual significance of each pinda.",
    location: "Falgu Sangam Marg, Gaya Ji, Bihar",
    verificationBadge: "Verified Veda Shastri & Purohit",
    image: "/images/pandit-vidyadhar.jpg",
    available: true
  },
  {
    id: "pandit-3",
    slug: "acharya-devendra-pandey",
    name: "Acharya Devendra Shastri",
    title: "Maha-Purohit & Dharmadhikari",
    experienceYears: 29,
    lineage: "Akshayavat Heritage Purohit Clan, Gaya Ji",
    gotra: "Bharadwaj",
    languages: ["Hindi", "English", "Gujarati", "Marathi", "Sanskrit"],
    specializations: [
      "Complete 3-Day 45-Vedi Circuit",
      "Akshayavat Suphal Vidhi",
      "Pitru Dosha Nivaran",
      "Special Senior Citizen Assisted Sankalp"
    ],
    bio: "Carrying forward the solemn responsibilities of his forefathers at the sacred Akshayavat tree, Acharya Devendra Shastri guides pilgrims through the culmination of their ancestral rites with dignity and profound spiritual depth. His multilingual fluency makes families from Maharashtra, Gujarat, and South India feel entirely at home.",
    location: "Akshayavat Marg, Gaya Ji, Bihar",
    verificationBadge: "Verified Gayawal Heritage Purohit",
    image: "/images/pandit-devendra.jpg",
    available: true
  }
];

export function getPanditBySlug(slug: string): Pandit | undefined {
  return PANDITS_DATA.find((p) => p.slug === slug);
}
