/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6366F1",    // Indigo
        secondary: "#EC4899",  // Pink
        dark: "#0F172A",       // Slate-900
        light: "#F8FAFC",      // Slate-50
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 30px rgba(0,0,0,0.08)",
      },
      container: {
        center: true,
        padding: "1rem",
      },
    },
  },
  plugins: [],
};
