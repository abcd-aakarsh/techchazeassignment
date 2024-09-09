/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      1.5: "2px",
      6: "6px",
    },
    extend: {
      colors: {
        "hero-color": "#F8F6E4",
        "text-color": "#111111",
        "button-color": "#399866",
        "button-border-color": "#16442C",
        "circle-color": "#FDC137",
        "sub-color": "#5F5F5F",
        "bar-color": "#E0E0E0",
        "bar-red": "#FF1414",
        "bar-green": "#0E9602",
        "bar-yellow": "#FB983D",
        "donate-button-border": "#AF8523",
        "donate-border-sub": "#F8F6E4",
        "button-sub-color": "#D0D0D0",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans"],
        manuale: ["Manuale", "serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
