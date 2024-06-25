/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      kanit: ["Kanit", "sans-serif"],
    },
    extend: {
      container: {
        padding: "36px",
        center: true,
      },
    },
  },
  plugins: [],
});
