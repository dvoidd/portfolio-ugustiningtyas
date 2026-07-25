/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0f0e11",
        "bg-secondary": "#161419",
        primary: "#a78bfa",
        "primary-light": "#c4b5fd",
        "primary-dark": "#7c3aed",
        accent: "#3d3650",
        "accent-light": "#524d6a",
        surface: "rgba(30, 27, 35, 0.8)",
        "white-soft": "#f0eeff",
      },
      fontFamily: {
        epilogue: ["Epilogue", "sans-serif"],
        grotesk: ['"Space Grotesk"', "sans-serif"],
      },
      animation: {
        "scroll-left": "scrollLeft 35s linear infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 8s linear infinite",
        glow: "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        scrollLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          from: { boxShadow: "0 0 20px rgba(167, 139, 250, 0.3)" },
          to: { boxShadow: "0 0 40px rgba(167, 139, 250, 0.7)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
