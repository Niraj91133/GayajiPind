import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FAF7F2",
        surface: "#FFFFFF",
        "surface-warm": "#F5EFE6",
        "surface-card": "#FFFFFF",
        "heritage-dark": "#2A1810",
        "heritage-brown": "#3D2418",
        "heritage-muted": "#5C4033",
        "saffron-light": "#FFF5EC",
        "saffron-subtle": "#FCE3CE",
        "saffron-primary": "#C25E1A",
        "saffron-dark": "#9A450E",
        "gold-light": "#FBF5E6",
        "gold-subtle": "#EEDEB2",
        "gold-primary": "#B88E3E",
        "gold-dark": "#8C6824",
        "gold-metallic": "#DFC07C",
        "sand-border": "#E5DCCE",
        "sand-dark": "#D2C5B0",
        "charcoal-dark": "#242220",
        "charcoal-body": "#423E3A",
        "charcoal-muted": "#6E6963",
        "sacred-red": "#8C2424",
      },
      fontFamily: {
        serif: ["var(--font-cinzel)", "var(--font-cormorant)", "Georgia", "serif"],
        display: ["var(--font-cinzel)", "Cinzel", "serif"],
        editorial: ["var(--font-cormorant)", "Cormorant Garamond", "serif"],
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "Inter", "sans-serif"],
      },
      boxShadow: {
        heritage: "0 4px 20px -2px rgba(42, 24, 16, 0.06), 0 2px 6px -1px rgba(42, 24, 16, 0.04)",
        "heritage-lg": "0 10px 30px -4px rgba(42, 24, 16, 0.08), 0 4px 12px -2px rgba(42, 24, 16, 0.05)",
        gold: "0 0 0 1px rgba(184, 142, 62, 0.2), 0 4px 16px -2px rgba(184, 142, 62, 0.15)",
        card: "0 1px 3px rgba(42, 24, 16, 0.05), 0 10px 25px -5px rgba(42, 24, 16, 0.04)",
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #DFC07C 0%, #B88E3E 50%, #8C6824 100%)",
        "saffron-gradient": "linear-gradient(135deg, #E27429 0%, #C25E1A 50%, #9A450E 100%)",
        "heritage-gradient": "linear-gradient(180deg, #FAF7F2 0%, #F5EFE6 100%)",
        "dark-gradient": "linear-gradient(180deg, #2A1810 0%, #1D100A 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
