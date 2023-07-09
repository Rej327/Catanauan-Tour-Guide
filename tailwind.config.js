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
        title: ["CatchyMager-Normal", "sans-serif"],
        header: ["Mistrully", "sans-serif"],
        body: ["Josefin Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
