/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  safelist: [
    "uppercase",
    "text-xl",
    "text-2xl",
    "text-3xl",
    "text-4xl",
    "text-5xl",
    "font-bold",
    "font-semibold",
    "rounded-2xl",
    "shadow-card",
    "shadow-soft",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00b8a9",
        "primary-dark": "#00917c",
        secondary: "#f1fbfc",
        "text-dark": "#10375c",
        "text-light": "#6c7a89",
        white: "#ffffff",
      },

      boxShadow: {
        soft: "0 10px 20px rgba(0, 0, 0, 0.05)",
        card: "0 6px 15px rgba(0, 0, 0, 0.05)",
      },

      borderRadius: {
        xl: "0.75rem",
        "2xl": "1.25rem",
      },

      // 🩶 Police : Montserrat (équilibrée)
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        title: ["Montserrat", "sans-serif"],
      },

      // 📏 Échelle typographique ajustée
      fontSize: {
        sm: ["0.95rem", "1.6rem"], // petit texte (légende)
        base: ["1.05rem", "1.9rem"], // corps de texte
        lg: ["1.2rem", "2rem"], // paragraphes importants
        xl: ["1.45rem", "2.2rem"], // sous-titres
        "2xl": ["1.7rem", "2.3rem"], // titres secondaires
        "3xl": ["2rem", "2.6rem"], // titres principaux
        "4xl": ["2.4rem", "2.8rem"], // h1 sur desktop
        "5xl": ["3rem", "3.2rem"], // très grand titre (landing)
      },
    },
  },
  plugins: [],
};
