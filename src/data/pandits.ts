import { Pandit } from "@/types";

export const PANDITS_DATA: Pandit[] = [
  {
    id: "pandit-1",
    slug: "pandit-kalu-lala-guput",
    name: "Pandit Kalu Lala Guput",
    title: "वरिष्ठ गयावाल तीर्थ पुरोहित (Senior Teerth Purohit)",
    experienceYears: 35,
    lineage: "गयावाल तीर्थ पुरोहित परंपरा, विष्णुपद क्षेत्र, गया जी",
    gotra: "कश्यप / शांडिल्य",
    languages: ["Hindi", "English", "Bhojpuri", "Bengali", "Sanskrit"],
    specializations: [
      "1-दिवसीय एवं 3-दिवसीय गया पिंडदान",
      "विष्णुपद एवं फल्गु तीर्थ श्राद्ध कर्म",
      "त्रिपिंडी श्राद्ध एवं नारायण बलि",
      "गोत्र संकल्प एवं पितृ सुक्त पाठ"
    ],
    bio: "पंडित कालू लाला गुपुत (Kalu Lala Guput) गया जी के अत्यंत प्रतिष्ठित एवं वरिष्ठ गयावाल तीर्थ पुरोहित हैं। विष्णुपद क्षेत्र की पावन गयावाल परंपरा से जुड़े पंडित जी विगत 35 वर्षों से भारत एवं विदेश से आने वाले श्रद्धालु परिवारों का सम्पूर्ण पिंडदान एवं श्राद्ध कर्म शास्त्रोक्त विधि से निर्विघ्न संपन्न कराते आ रहे हैं।",
    location: "विष्णुपद मंदिर परिसर, गया जी, बिहार",
    verificationBadge: "प्रमाणित गयावाल तीर्थ पुरोहित",
    image: "/images/pandit-kalu-lala.jpg",
    available: true
  },
  {
    id: "pandit-2",
    slug: "pandit-ratan-ji",
    name: "Pandit Ratan Ji",
    title: "गयावाल तीर्थ पुरोहित एवं वैदिक विद्वान",
    experienceYears: 30,
    lineage: "पारंपरिक गयावाल तीर्थ पुरोहित वंश, गया क्षेत्र",
    gotra: "कश्यप",
    languages: ["Hindi", "English", "Bhojpuri", "Bengali", "Sanskrit"],
    specializations: [
      "3-दिवसीय संपूर्ण गया तीर्थ परिक्रमा",
      "फल्गु, विष्णुपद एवं अक्षयवट पिंडदान",
      "प्रेतशिला एवं वेदी श्राद्ध विधि",
      "पितृदोष निवारण एवं सुफल संकल्प"
    ],
    bio: "पंडित रतन जी गया जी के अनुभवी एवं श्रद्धालुप्रिय गयावाल तीर्थ पुरोहित हैं। वे वैदिक मर्यादा और शास्त्रोक्त शुद्धता के साथ श्रद्धालुओं को पिंडदान की सूक्ष्म से सूक्ष्म विधि समझाकर संपन्न कराते हैं। वरिष्ठ नागरिकों एवं दूर-दराज से आने वाले परिवारों को सहज और आत्मीय मार्गदर्शन प्रदान करना उनकी प्रमुख विशेषता है।",
    location: "फल्गु तीर्थ एवं विष्णुपद मार्ग, गया जी, बिहार",
    verificationBadge: "प्रमाणित गयावाल तीर्थ पुरोहित",
    image: "/images/pandit-ratan.jpg",
    available: true
  }
];

export function getPanditBySlug(slug: string): Pandit | undefined {
  return PANDITS_DATA.find((p) => p.slug === slug);
}
