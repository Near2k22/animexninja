module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        background: "#1a1c20",
        notactive: "#8d8f94",
      },
      width: {
        player: "1024px",
      },
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
};