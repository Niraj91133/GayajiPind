import React from "react";
import { notFound } from "next/navigation";
import { SACRED_PLACES } from "@/data/sacredPlaces";
import { SacredPlaceDetailView } from "@/components/guide/SacredPlaceDetailView";

export const metadata = {
  title: "Akshayavat Tree Gaya Ji — The Immortal Banyan of Suphal Blessings",
  description: "Learn about the immortal Akshayavat tree in Gaya. Final Pind Daan rituals, Gayawal Brahmin Suphal blessings, and significance.",
};

export default function AkshayavatPage() {
  const place = SACRED_PLACES.find((p) => p.slug === "akshayavat");
  if (!place) notFound();

  return <SacredPlaceDetailView place={place} />;
}
