/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        custom: "3px 2px 1px rgba(0,0,0,0.4)",
      },
    },
  },
  plugins: [],
};
