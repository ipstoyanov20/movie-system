/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      colors: {},
      keyframes: {
        cross: {
          '0%': { left:  '-20%', opacity: 0.5 },
          '100%': { left:  '120%', opacity: 0.2 },
        }
      },
      animation:{
        cross: 'cross 20s infinite cubic-bezier(0.4, 0, 0.2, 1)',
      }
    },
  },
  plugins: [],
};

