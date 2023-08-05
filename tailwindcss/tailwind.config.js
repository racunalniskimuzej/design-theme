/**
 * This is a minimal config.
 *
 * If you need the full config, get it from here:
 * https://unpkg.com/browse/tailwindcss@latest/stubs/defaultConfig.stub.js
 */

module.exports = {
  theme: {
    extend: {
      backgroundImage: ({ theme }) => ({
        gradient: `linear-gradient(to right, ${theme(
          "colors.brand.orange"
        )},${theme("colors.brand.pink")},${theme(
          "colors.brand.gray-1"
        )},${theme("colors.brand.gray-2")},${theme("colors.brand.green")})`,
      }),
      colors: {
        brand: {
          "gray-1": "#5c7588",
          "gray-2": "#8f9bad",
          "gray-3": "#cdcfd4",
          green: "#c6d300",
          orange: "#ec681c",
          pink: "#e5006d",
        },
      },
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
