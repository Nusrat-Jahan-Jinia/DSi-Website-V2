module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        blue: {
          royalblue: "#0D3DCB",
        },
        yellow: {
          btn: "#FFCD1B",
        },
        sky: {
          btn: "#1991FF",
        },
      },
      fontFamily: {
        headline: ["Inter"],
        body: ["Inter"],
        button: ["Inter"],
      },
      variants: { visibility: ["responsive", "hover", "group-hover"] },
      plugins: [],
    },
  },
};
