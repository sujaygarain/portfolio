// /** @type {import('tailwindcss').Config} */
// export const content = ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"];
// export const theme = {
//   extend: {
//     fontFamily: {
//       sans: ["Poppins", "sans-serif"], // Add Google Font
//     },
//     colors: {
//       primary: "#0f172a", // Navy Blue
//       accent: "#1d4ed8", // Vibrant Blue
//       neutral: "#f1f5f9", // Light Background
//     },
//   },
// };
// export const plugins = [];

/** @type {import('tailwindcss').Config} */
export const content = [
  "./index.html",
  "./src/**/*.{js,jsx,ts,tsx}" // Scan all React components
];
export const theme = {
  extend: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"], // Google Font
    },
    colors: {
      primary: "#0f172a", // Dark Navy Blue
      accent: "#1d4ed8", // Vibrant Blue
      neutral: "#f1f5f9", // Light Gray Background
    },
    spacing: {
      128: "32rem", // Custom spacing (e.g., for large sections)
      144: "36rem",
    },
  },
};
export const plugins = [];
