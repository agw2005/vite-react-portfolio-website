/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      zIndex: { maximum: 1000 },
      gridTemplateColumns: {
        minmax: "min-content max-content",
      },
      backgroundColor: {
        serviceBackgroundColor: "#404040",
      },
      backgroundImage: {
        serviceBackgroundImage: "url('./assets/img/placeholder10.jpg')",
      },
      padding: {
        sectionSubtitleAboutPaddingRight: "calc(200px + 4em)",
      },
      width: {
        sectionSubtitleWidth: "calc(100% + 2em)",
      },
      boxShadow: {
        bs: "0.5em 0.5em 1.5em rgba(0,0,0,0.5), 0.25em 0.25em 0.5em rgba(0,0,0,0.3)",
      },
      gridTemplateColumns: {
        divPortfolioList: "repeat(auto-fit , minmax(160px , 1fr))",
      },
      colors: {
        accent: "#16e0bd",
        dark: "#303030",
        light: "#fff",
      },
    },
  },
  plugins: [],
};
