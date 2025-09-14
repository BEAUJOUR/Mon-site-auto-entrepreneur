/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
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
        futuristic: ["Orbitron", "sans-serif"],
      },
    },
  },
  plugins: [],
};
