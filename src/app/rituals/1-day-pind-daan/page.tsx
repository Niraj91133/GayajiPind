import React from "react";
import { notFound } from "next/navigation";
import { getRitualBySlug } from "@/data/rituals";
import { RitualDetailView } from "@/components/rituals/RitualDetailView";

export const metadata = {
  title: "1-Day Pind Daan in Gaya Ji — Comprehensive Single-Day Pilgrimage",
  description: "Arrange your 1-Day Pind Daan across Falgu River, Vishnupad Mandir, and Akshayavat with a verified Teerth Pandit and personal coordinator.",
};

export default function OneDayPindDaanPage() {
  const ritual = getRitualBySlug("1-day-pind-daan");
  if (!ritual) notFound();

  return <RitualDetailView ritual={ritual} />;
}
