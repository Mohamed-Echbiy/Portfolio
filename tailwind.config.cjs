/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        bgDark: "url('./src/assets/HeroBgDark.png')",
        bgLight: "url('./src/assets/HeroBgLight.png')",
      },
      maxWidth: {
        1900: "1920px",
      },
      height: {
        hero: "calc(100vh - 82px)",
      },
      maxHeight: {
        "image-sm": "430px",
        "image-md": "470px",
        "image-lg": "510px",
      },
      colors: {
        primary: colors.emerald,
      },
      minWidth: {
        290: "290 px",
        620: "620 px",
      },
    },
  },
  plugins: [],
};
