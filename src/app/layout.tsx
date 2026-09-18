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
  title: "Gaya Ji Pind Sewa — Gaya ji Me Pind Daan, Shradha Aur Sewa Ke Sath",
  description: "Gaya Ji Pind Sewa: Arrange your sacred Pind Daan, Tripindi Shradh, or Narayan Bali in Gaya Ji, Bihar with verified Teerth Pandits, transparent coordination, and personal assistance. Gaya ji Me Pind Daan, Shradha Aur Sewa Ke Sath.",
  keywords: [
    "Gaya Ji Pind Sewa",
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
  authors: [{ name: "Gaya Ji Pind Sewa" }],
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#423E3A]" suppressHydrationWarning>
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
