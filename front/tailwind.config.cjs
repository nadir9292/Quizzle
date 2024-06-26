/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat"],
        dancing: ["Dancing Script"],
        passion: ["Passion One"],
        garamond: ["Garamond"],
        hando: ["Hando"],
      },
      colors: {
        bluePrimary: "#210b3a",
      },
      backgroundImage: {
        normal: "url('../public/background.png')",
        mobile: "url('../public/background_mobile.png')",
        purple: "url('../public/background_purple.png')",
      },
      fontSize: {
        sm: "0.8rem",
        base: "1rem",
        xl: "1.25rem",
        "2xl": "1.563rem",
        "3xl": "1.953rem",
        "4xl": "2.441rem",
        "45xl": "5.441rem",
        "5xl": "8.052rem",
      },
    },
  },
  plugins: [],
}
