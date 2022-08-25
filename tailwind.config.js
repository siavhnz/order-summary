/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      screens: {},
      colors: {
        "pale-blue": "#e0e8ff",
        "very-pale-blue": "#f5f7ff",
        "light-blue": "#ded7ff",
        "dark-blue": "#1f2f56",
        "bright-blue": "#3829e0",
        "Desaturated-blue": "#7280a7",
        "light-purple": "#766cf1",
      },
      backgroundImage: {
        "mobile-pattern": "url('../images/pattern-background-mobile.svg')",
        "desktop-pattern": "url('../images/pattern-background-desktop.svg')",
      },
      fontFamily: {
        sans: ['"Red Hat Display"', "sans-serif"],
      },
      fontSize: {
        "semi-2xl": "1.375rem",
        "semi-3xl": "1.750rem",
      },
      boxShadow: {},
    },
  },
  plugins: [],
};
