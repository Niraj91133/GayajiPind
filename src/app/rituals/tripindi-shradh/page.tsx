import React from "react";
import { notFound } from "next/navigation";
import { getRitualBySlug } from "@/data/rituals";
import { RitualDetailView } from "@/components/rituals/RitualDetailView";

export const metadata = {
  title: "Tripindi Shradh in Gaya Ji — Pitru Dosha Nivaran & Ancestral Pacification",
  description: "Specialized Vedic Tripindi Shradh performed in Gaya Ji to appease unpacified souls across Brahma, Vishnu, and Shiva realms.",
};

export default function TripindiShradhPage() {
  const ritual = getRitualBySlug("tripindi-shradh");
  if (!ritual) notFound();

  return <RitualDetailView ritual={ritual} />;
}
