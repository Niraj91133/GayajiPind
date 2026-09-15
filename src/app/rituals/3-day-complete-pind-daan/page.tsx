import React from "react";
import { notFound } from "next/navigation";
import { getRitualBySlug } from "@/data/rituals";
import { RitualDetailView } from "@/components/rituals/RitualDetailView";

export const metadata = {
  title: "3-Day Complete Pind Daan Pilgrimage in Gaya Ji — GayajiPind",
  description: "Experience the authentic 3-day multi-day pilgrimage covering Falgu, Vishnupad, Pretshila hill, and sacred Vedis with dedicated Teerth Purohit guidance.",
};

export default function ThreeDayPindDaanPage() {
  const ritual = getRitualBySlug("3-day-complete-pind-daan");
  if (!ritual) notFound();

  return <RitualDetailView ritual={ritual} />;
}
