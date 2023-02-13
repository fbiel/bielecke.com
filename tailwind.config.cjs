/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui"), require('@tailwindcss/typography'), require('@tailwindcss/line-clamp'), ],
  daisyui: {
    themes: ["garden", "halloween", "lemonade"],
    theme: "garden",
    darkTheme: "halloween",
    styled: true,
    base: true,
    themes: true
  },
}