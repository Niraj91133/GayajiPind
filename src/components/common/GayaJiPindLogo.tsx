import React from "react";

interface LogoProps {
  showTagline?: boolean;
  size?: "sm" | "md" | "lg";
  variant?: "dark" | "light";
  className?: string;
}

export function GayaJiPindEmblem({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Gaya Ji Pind Sewa Emblem"
    >
      <defs>
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F7E7B6" />
          <stop offset="50%" stopColor="#DFC07C" />
          <stop offset="100%" stopColor="#B88E3E" />
        </linearGradient>
        <linearGradient id="flameGrad" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#D9381E" />
          <stop offset="50%" stopColor="#E26D14" />
          <stop offset="100%" stopColor="#FFC837" />
        </linearGradient>
        <radialGradient id="haloGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#DFC07C" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#DFC07C" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Outer Halo Glow */}
      <circle cx="50" cy="50" r="48" fill="url(#haloGrad)" />

      {/* Outer Sacred Ring */}
      <circle cx="50" cy="50" r="44" stroke="url(#goldGrad)" strokeWidth="2.5" />
      <circle cx="50" cy="50" r="40" stroke="url(#goldGrad)" strokeWidth="1" strokeDasharray="2 3" opacity="0.8" />

      {/* Sacred Rays / Dots (8 directions) */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => {
        const rad = (deg * Math.PI) / 180;
        const cx = 50 + 44 * Math.cos(rad);
        const cy = 50 + 44 * Math.sin(rad);
        return <circle key={i} cx={cx} cy={cy} r="1.5" fill="url(#goldGrad)" />;
      })}

      {/* Sacred Kalash Base */}
      <path
        d="M38 72 C 38 64, 42 58, 50 58 C 58 58, 62 64, 62 72 C 62 76, 58 78, 50 78 C 42 78, 38 76, 38 72 Z"
        fill="url(#goldGrad)"
      />
      {/* Kalash Neck */}
      <path
        d="M43 58 C 43 56, 45 54, 50 54 C 55 54, 57 56, 57 58 Z"
        fill="url(#goldGrad)"
      />
      {/* Kalash Rim */}
      <rect x="41" y="52" width="18" height="3" rx="1.5" fill="url(#goldGrad)" />

      {/* Mango Leaves emerging from Kalash */}
      <path d="M42 52 C 34 44, 30 38, 36 34 C 42 38, 44 46, 45 52 Z" fill="#3A5A40" opacity="0.9" />
      <path d="M58 52 C 66 44, 70 38, 64 34 C 58 38, 56 46, 55 52 Z" fill="#3A5A40" opacity="0.9" />
      <path d="M46 52 C 44 42, 48 34, 50 30 C 52 34, 56 42, 54 52 Z" fill="#588157" />

      {/* Lotus Petals at Bottom of Kalash */}
      <path d="M30 72 C 35 68, 42 74, 50 76 C 58 74, 65 68, 70 72 C 65 82, 35 82, 30 72 Z" fill="url(#goldGrad)" opacity="0.85" />

      {/* Sacred Flame of Shradha / Diya (Top) */}
      <path
        d="M50 20 C 54 28, 57 34, 54 42 C 52 46, 48 46, 46 42 C 43 34, 46 28, 50 20 Z"
        fill="url(#flameGrad)"
      />
      {/* Inner Flame Glow */}
      <path
        d="M50 26 C 52 31, 54 35, 52 40 C 51 42, 49 42, 48 40 C 46 35, 48 31, 50 26 Z"
        fill="#FFF5C0"
      />

      {/* Central Sacred Tilak Dot */}
      <circle cx="50" cy="65" r="3.5" fill="#B85014" />
    </svg>
  );
}

export function GayaJiPindLogo({
  showTagline = true,
  size = "md",
  variant = "dark",
  className = "",
}: LogoProps) {
  const isDarkBg = variant === "light"; // text needs to be light for dark background

  const sizeClasses = {
    sm: { emblem: "w-7 h-7 sm:w-8 sm:h-8", title: "text-sm sm:text-lg", tag: "text-[8px] sm:text-[9px]" },
    md: { emblem: "w-8 h-8 sm:w-10 sm:h-11", title: "text-base sm:text-xl lg:text-2xl", tag: "text-[8px] sm:text-[10px]" },
    lg: { emblem: "w-10 h-10 sm:w-14 sm:h-14", title: "text-xl sm:text-3xl", tag: "text-[10px] sm:text-xs" },
  }[size];

  return (
    <div className={`flex items-center gap-3 group text-left ${className}`}>
      {/* Emblem container */}
      <div className={`${sizeClasses.emblem} flex-shrink-0 rounded-full bg-[#241812] border border-[#9C7A3C]/60 flex items-center justify-center p-1 group-hover:scale-105 transition-transform shadow-md`}>
        <GayaJiPindEmblem className="w-full h-full" />
      </div>

      {/* Text Branding */}
      <div className="flex flex-col justify-center">
        <div className={`font-serif font-bold tracking-tight leading-tight ${sizeClasses.title} ${isDarkBg ? "text-white" : "text-[#241812]"}`}>
          Gaya Ji <span className="text-[#B85014]">Pind Sewa</span>
        </div>

        {showTagline && (
          <span
            className={`tracking-tight font-medium ${sizeClasses.tag} ${
              isDarkBg ? "text-[#DFC07C]" : "text-[#9C7A3C]"
            } font-sans mt-0.5`}
          >
            Gaya ji Me Pind Daan, Shradha Aur Sewa Ke Sath
          </span>
        )}
      </div>
    </div>
  );
}
