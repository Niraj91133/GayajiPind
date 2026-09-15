import React from "react";
import { notFound } from "next/navigation";
import { getRitualBySlug } from "@/data/rituals";
import { RitualDetailView } from "@/components/rituals/RitualDetailView";

export const metadata = {
  title: "Narayan Bali in Gaya Ji — Liberation & Moksha for Untimely Departed Souls",
  description: "Revered Vedic Narayan Bali ritual conducted in Gaya Ji for the ultimate spiritual elevation and freedom of departed souls.",
};

export default function NarayanBaliPage() {
  const ritual = getRitualBySlug("narayan-bali");
  if (!ritual) notFound();

  return <RitualDetailView ritual={ritual} />;
}
