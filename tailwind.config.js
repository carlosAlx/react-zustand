/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        bgTransparent:'rgba(0, 0, 0, 0.5)'
      },
      screens: {
       "mobile": "1060px",
      },
      gridTemplateColumns: {
        gridResponsive: "repeat(auto-fill, minmax(400px, 1fr))",
      },
    },
  },
  plugins: [],
};
