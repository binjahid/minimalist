/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        homeBg: "assets/images/homeBg.png",
      },
      backgroundSize: {
        full: "100% 100%",
      },
      fontFamily: {
        matterR: ["MatterRegular", "sans-serif"],
        matterB: ["MatterBold", "sans-serif"],
      },
      screens: {
        laptop: { max: "1440px" },
        tablet: { max: "950px" },
        breakPoint: { max: "700px" },
      },
    },
  },
  plugins: [],
};
