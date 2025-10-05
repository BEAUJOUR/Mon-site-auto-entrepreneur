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

      fontFamily: {
        serif: [
          "Didot",
          "Didot LT STD",
          "Hoefler Text",
          "Garamond",
          "Calisto MT",
          "Times New Roman",
          "serif",
        ],
        title: [
          "Didot",
          "Didot LT STD",
          "Hoefler Text",
          "Garamond",
          "Calisto MT",
          "Times New Roman",
          "serif",
        ],
      },

      // 💬 Augmentation globale de la typographie
      fontSize: {
        xs: ["0.875rem", "1.3rem"], // 14px — petits éléments
        sm: ["1rem", "1.5rem"], // 16px — captions lisibles
        base: ["1.120rem", "1.75rem"], // 18px — texte normal confortable
        md: ["1.25rem", "1.9rem"], // 20px — descriptions, cartes
        lg: ["1.5rem", "2.2rem"], // 24px — sous-titres
        xl: ["1.875rem", "2.4rem"], // 30px — titres section
        "2xl": ["2.10rem", "2.8rem"], // 36px — titres forts
        "3xl": ["3rem", "3.4rem"], // 48px — hero desktop
        "4xl": ["3.50rem", "4rem"], // 60px
      },
    },
  },
  plugins: [],
};
