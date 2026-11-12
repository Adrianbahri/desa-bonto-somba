/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0F2E22", // Deep Forest Pine
          dark: "#071A12",    // Darkest Pine
          light: "#1B4332",   // Medium Pine
        },
        terracotta: {
          DEFAULT: "#059669", // Vibrant Jewel Emerald
          hover: "#047857",   // Deep Emerald Hover
          soft: "#ECFDF5",    // Soft Emerald Tint
        },
        ochre: {
          DEFAULT: "#A7F3D0", // Soft Emerald Mint (badges & highlights)
          light: "#D1FAE5",   // Lighter Emerald
          cream: "#ECFDF5",   // Soft Emerald Mist (background circles)
        },
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "Inter", "-apple-system", "sans-serif"],
        serif: ["Lora", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
