/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Mont: ["Montserrat"],
        Anaheim: ["Anaheim"],
        Overpass: ["Overpass"],
      },
      screens: {
        xs: "450px",
      },
      animation: {
        slideDown: "slideDown 0.3s forwards",
      },
      keyframes: {
        slideDown: {
          from: { opacity: 0, transform: "translateY(-100%)" },
          to: { opacity: 1, transform: "translateY(0%)" },
        },
      },
    },
  },
  plugins: [],
};
