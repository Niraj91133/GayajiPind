import React from "react";
import { notFound } from "next/navigation";
import { SACRED_PLACES } from "@/data/sacredPlaces";
import { SacredPlaceDetailView } from "@/components/guide/SacredPlaceDetailView";

export const metadata = {
  title: "Vishnupad Temple Gaya Ji — The Sacred Footprint of Lord Vishnu",
  description: "Complete guide to Vishnupad Temple in Gaya Ji. History, significance for Pind Daan, darshan timings, and rituals.",
};

export default function VishnupadPage() {
  const place = SACRED_PLACES.find((p) => p.slug === "vishnupad");
  if (!place) notFound();

  return <SacredPlaceDetailView place={place} />;
}
