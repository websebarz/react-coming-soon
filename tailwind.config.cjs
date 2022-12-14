/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    fontFamily: {
      sans: ["Josefin Sans", "sans-serif"],
    },
    colors: {
      primary: "#c08080",
      secondary: "#F47174",
    },
    extend: {
      backgroundImage: {
        "about-pattern": "url('./imgs/bg-pattern-desktop.svg')",
      },
    },
  },
  plugins: [],
};
