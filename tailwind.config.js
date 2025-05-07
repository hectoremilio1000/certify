/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.463rem",
      "3xl": "1.553rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
    extend: {
      /* ---------- NUEVOS COLORES ---------- */
      colors: {
        primary: "#0047FF", // Royal Blue – logo y títulos
        primaryLt: "#00B2FF", // Azure – hovers, iconos
        darkHero: "#0047FF", // Charcoal – hero overlay
        textMain: "#2E2E32", // Charcoal-900 – copy largo
        cta: "#FFC727", // Amber-500 – botón amarillo
      },
      /* Gradiente diagonal para el check / hero */
      backgroundImage: {
        "royal-azure": "linear-gradient(135deg, #0047FF 0%, #00B2FF 100%)",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
