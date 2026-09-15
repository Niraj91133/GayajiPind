import React from "react";
import { notFound } from "next/navigation";
import { SACRED_PLACES } from "@/data/sacredPlaces";
import { SacredPlaceDetailView } from "@/components/guide/SacredPlaceDetailView";

export const metadata = {
  title: "Pretshila Hill Gaya Ji — Mountain Shrine for Unpacified Departed Souls",
  description: "Complete guide to Pretshila Hill and Brahmakund in Gaya Ji. Pind Daan with roasted sattu, stairs, palanquin options for seniors, and significance.",
};

export default function PretshilaPage() {
  const place = SACRED_PLACES.find((p) => p.slug === "pretshila");
  if (!place) notFound();

  return <SacredPlaceDetailView place={place} />;
}
