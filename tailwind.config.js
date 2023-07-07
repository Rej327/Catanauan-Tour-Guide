/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{html,js,ts,jsx,tsx}",
    "./components/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ["Mistrully", "sans-serif"],
        head: ["CocoGothic-Bold_trial", "sans-serif"],
        body: ["CocoGothic_trial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
