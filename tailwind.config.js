/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      colors: {},
      keyframes: {
        cross: {
          '0%': { left:  '-50%', opacity: 0.5 },
          '100%': { left:  '120%', opacity: 0.2 },
        }
      },
      animation:{
        cross: 'cross 25s infinite cubic-bezier(0.4, 0, 0.2, 1)',
        middleDilayed: 'cross 25s infinite 2s cubic-bezier(0.4, 0, 0.2, 1)',
        lastDelayed: 'cross 25s infinite 1s cubic-bezier(0.4, 0, 0.2, 1)',
      }
    },
  },
  plugins: [],
};

