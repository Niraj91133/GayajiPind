import React from "react";

export function SacredDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 my-6 ${className}`}>
      <div className="h-[1px] w-12 sm:w-24 bg-gradient-to-r from-transparent to-[#B88E3E]/60" />
      <div className="flex items-center gap-1.5 text-[#B88E3E]">
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 2L14.4 8.6L21.5 9.2L16.2 13.8L17.8 20.8L12 17.2L6.2 20.8L7.8 13.8L2.5 9.2L9.6 8.6L12 2Z" />
        </svg>
      </div>
      <div className="h-[1px] w-12 sm:w-24 bg-gradient-to-l from-transparent to-[#B88E3E]/60" />
    </div>
  );
}

export function LotusMotif({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M24 6C24 6 18 16 18 26C18 31 21 36 24 38C27 36 30 31 30 26C30 16 24 6 24 6Z"
        fill="currentColor"
        fillOpacity="0.25"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M24 16C21 18 10 24 10 32C10 36 15 40 24 42C33 40 38 36 38 32C38 24 27 18 24 16Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M24 22C17 24 6 28 6 36C6 40 12 44 24 45C36 44 42 40 42 36C42 28 31 24 24 22Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeOpacity="0.7"
      />
    </svg>
  );
}

export function TempleArchBorder({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative rounded-2xl border border-[#E5DCCE] bg-white/80 backdrop-blur-sm shadow-card hover:shadow-heritage transition-all duration-300 ${className}`}>
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#B88E3E]/60 to-transparent rounded-t-2xl" />
      {children}
    </div>
  );
}
