/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Cinzel", "serif"],
        serif: ["Cormorant Garamond", "serif"],
        sans: ["Source Sans 3", "sans-serif"]
      }
    }
  },
  plugins: []
};
