/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{html,js,ts,jsx,tsx}",
    "./components/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "767px",
      lg: "1023px",
      bs: "14439px",
    },
    extend: {
      fontFamily: {
        mainTitle: ["CatchyMager-Normal", "sans-serif"],
        title: ["Gabarito", "sans-serif"],
        header: ["SimpleHandmade", "sans-serif"],
        body: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};
