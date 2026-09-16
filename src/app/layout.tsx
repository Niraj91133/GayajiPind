import type { Metadata, Viewport } from "next";
import "./globals.css";
import { LanguageProvider } from "@/components/common/LanguageContext";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyBar } from "@/components/layout/MobileStickyBar";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#2A1810",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://gayajipindsewa.com"),
  title: "GayajiPind — Trusted Digital Pilgrimage Coordinator for Gaya Ji",
  description: "Arrange your sacred Pind Daan, Tripindi Shradh, or Narayan Bali in Gaya Ji, Bihar with verified Teerth Pandits, transparent coordination, and personal assistance.",
  keywords: [
    "Gaya Pind Daan",
    "Gaya Ji Pind Daan booking",
    "Vishnupad temple Pind Daan",
    "Tripindi Shradh Gaya",
    "Narayan Bali Gaya Ji",
    "Teerth Pandit Gaya",
    "Falgu River Shradh",
    "Akshayavat Gaya",
    "45 Vedi Gaya Ji"
  ],
  authors: [{ name: "GayajiPind Pilgrimage Coordinator" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#423E3A]">
        <LanguageProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <MobileStickyBar />
        </LanguageProvider>
      </body>
    </html>
  );
}
