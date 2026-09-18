"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  CalendarCheck,
  Award,
  Hotel,
  Car,
  Globe,
  Lock,
  LogOut,
  Menu,
  X,
  KeyRound,
  ShieldCheck,
  Eye,
  EyeOff
} from "lucide-react";
import { LotusMotif } from "@/components/common/MotifDividers";

const CORRECT_PASSWORD = "Ratangdas60@";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [passwordInput, setPasswordInput] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const authStatus = localStorage.getItem("gaya_coordinator_auth");
    if (authStatus === "true") {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === CORRECT_PASSWORD) {
      localStorage.setItem("gaya_coordinator_auth", "true");
      setIsAuthenticated(true);
      setErrorMsg("");
    } else {
      setErrorMsg("गलत पासवर्ड! कृपया सही कॉर्डिनेटर पासवर्ड दर्ज करें।");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("gaya_coordinator_auth");
    setIsAuthenticated(false);
    setPasswordInput("");
    setErrorMsg("");
  };

  // Loading state while checking localStorage
  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen bg-[#2A1810] text-[#FAF7F2] flex items-center justify-center p-4">
        <div className="w-8 h-8 border-2 border-[#DFC07C] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  // Password Protection Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#2A1810] text-[#FAF7F2] flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-md bg-[#3D2418] border border-[#DFC07C]/40 rounded-3xl p-6 sm:p-8 shadow-2xl text-left relative">
          
          {/* Top Logo */}
          <div className="flex flex-col items-center text-center mb-6">
            <div className="w-14 h-14 rounded-full bg-[#2A1810] border-2 border-[#DFC07C] flex items-center justify-center text-[#DFC07C] mb-3 shadow-md">
              <LotusMotif className="w-8 h-8" />
            </div>
            <h1 className="font-serif text-2xl font-bold text-white">
              Gaya Ji <span className="text-[#DFC07C]">Coordinator Portal</span>
            </h1>
            <p className="text-xs text-[#D2C5B0] mt-1">
              सुरक्षित कॉर्डिनेटर एक्सेस • पासवर्ड दर्ज करें
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-[#DFC07C] uppercase tracking-wider mb-2">
                Coordinator Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={passwordInput}
                  onChange={(e) => {
                    setPasswordInput(e.target.value);
                    setErrorMsg("");
                  }}
                  placeholder="Enter Password..."
                  className="w-full px-4 py-3 pr-10 rounded-xl bg-[#2A1810] border border-[#DFC07C]/50 text-white placeholder-[#7A6F67] text-sm focus:outline-none focus:border-[#DFC07C] focus:ring-1 focus:ring-[#DFC07C]"
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#D2C5B0] hover:text-white"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {errorMsg && (
              <div className="p-3 rounded-xl bg-red-900/40 border border-red-500/50 text-red-200 text-xs text-center font-medium">
                {errorMsg}
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3 px-4 rounded-xl bg-[#DFC07C] hover:bg-[#F7E7B6] text-[#2A1810] font-bold text-sm transition-all shadow-md flex items-center justify-center gap-2"
            >
              <KeyRound className="w-4 h-4" />
              <span>Login to Portal</span>
            </button>
          </form>

          <div className="mt-6 pt-4 border-t border-white/10 text-center">
            <Link href="/" className="text-xs text-[#D2C5B0] hover:text-white underline">
              ← Return to Main Website
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const adminNav = [
    { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
    { href: "/admin/bookings", label: "Booking Requests", icon: CalendarCheck },
    { href: "/admin/pandits", label: "Pandits Registry", icon: Award },
    { href: "/admin/hotels", label: "Hotel Requests", icon: Hotel },
    { href: "/admin/transport", label: "Transport & Pickup", icon: Car },
    { href: "/admin/nri-leads", label: "NRI Leads", icon: Globe },
  ];

  return (
    <div className="min-h-screen bg-[#F5EFE6] text-[#2A1810] flex flex-col md:flex-row">
      {/* Mobile Top Header */}
      <div className="md:hidden bg-[#2A1810] text-[#FAF7F2] p-4 flex items-center justify-between border-b border-[#DFC07C]/40">
        <Link href="/admin" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#3D2418] border border-[#DFC07C] flex items-center justify-center text-[#DFC07C]">
            <LotusMotif className="w-5 h-5" />
          </div>
          <span className="font-serif font-bold text-lg">GayajiPind Admin</span>
        </Link>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 rounded-lg bg-white/10 text-white"
        >
          {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Sidebar Navigation */}
      <aside
        className={`${
          sidebarOpen ? "block" : "hidden"
        } md:block w-full md:w-64 bg-[#2A1810] text-[#FAF7F2] flex-shrink-0 border-r border-[#DFC07C]/20 flex flex-col justify-between p-4 sm:p-6 min-h-screen`}
      >
        <div>
          {/* Admin Brand */}
          <Link href="/admin" className="hidden md:flex items-center gap-3 mb-8 pb-4 border-b border-[#DFC07C]/20">
            <div className="w-10 h-10 rounded-full bg-[#3D2418] border border-[#DFC07C] flex items-center justify-center text-[#DFC07C]">
              <LotusMotif className="w-6 h-6" />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-serif text-lg font-bold tracking-tight text-white leading-none">
                Gayaji<span className="text-[#DFC07C]">Pind</span>
              </span>
              <span className="text-[10px] uppercase tracking-wider text-[#D2C5B0] mt-0.5">
                Coordinator Console
              </span>
            </div>
          </Link>

          {/* Nav Links */}
          <nav className="space-y-1.5 text-left">
            {adminNav.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                    isActive
                      ? "bg-[#FAF5E6] text-[#2A1810] font-bold shadow-sm"
                      : "text-[#D2C5B0] hover:text-white hover:bg-white/10"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? "text-[#C25E1A]" : "text-[#DFC07C]"}`} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom User Info & Front-end Link */}
        <div className="pt-6 border-t border-[#DFC07C]/20 text-left space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#3D2418] border border-[#DFC07C] flex items-center justify-center text-xs font-bold text-[#DFC07C]">
                GP
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-white">Gaya Coordinator</span>
                <span className="text-[10px] text-[#25D366] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#25D366]" /> Live Portal
                </span>
              </div>
            </div>

            <button
              onClick={handleLogout}
              className="p-2 rounded-lg bg-red-950/60 hover:bg-red-900 border border-red-800 text-red-300 transition-colors"
              title="Logout Coordinator"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>

          <Link
            href="/"
            className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-medium transition-colors"
          >
            <span>Back to Public Website</span>
          </Link>
        </div>
      </aside>

      {/* Main Admin Content Body */}
      <main className="flex-grow p-4 sm:p-6 lg:p-8 overflow-y-auto max-w-7xl mx-auto w-full">
        {children}
      </main>
    </div>
  );
}

