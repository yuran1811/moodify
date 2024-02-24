/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}", "./src/pages/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        hcmus: { bg: "#21262c", fg: "#111b88" },
        primary: { bg: "#0b5345", fg: "#fff" },
        secondary: { bg: "#f60", fg: "#fff" },
      },
    },
  },
  plugins: [],
};
