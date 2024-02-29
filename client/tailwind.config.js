/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
 

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "primary-gradient":
          "linear-gradient(180deg, #FFAE00 -12.86%, #FF7A00 111.98%)",
        "primary-gradient-hover":
          "linear-gradient(180deg, #FFCB5C -12.86%, #FFB800 111.98%)",
        "primary-gradient-active":
          "linear-gradient(180deg, #FFE1A1 -12.86%, #FFDB7E 111.98%)",
        "primary-disabled": "#858585",
        "radial-gradient": "radial-gradient(#1A3554 0%, #020911 100%)",
        "gray-gradient":
          "linear-gradient(180deg, rgba(0, 0, 0, 0) 37.08%, #020911 100%)",
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.5)',
      },
    },
    screens: {
      'sm': '321px',
      'md':'640px',
      'lg': '834px',
      'xl': '835px',
      '2xl': '1280px',
      '3xl': '1513px',
      '4xl': '1700px',
      '5xl': '1921px',
      '6xl': '2560px',
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
});
