import React from "react";
import { notFound } from "next/navigation";
import { SACRED_PLACES } from "@/data/sacredPlaces";
import { SacredPlaceDetailView } from "@/components/guide/SacredPlaceDetailView";

export const metadata = {
  title: "Falgu River Gaya Ji — The Sacred Antarsalila River & Tarpan Ghats",
  description: "Guide to the holy Falgu River in Gaya. Ramayana legend of Mata Sita, holy snan, sand pinda offerings, and Ghat timings.",
};

export default function FalguRiverPage() {
  const place = SACRED_PLACES.find((p) => p.slug === "falgu-river");
  if (!place) notFound();

  return <SacredPlaceDetailView place={place} />;
}
