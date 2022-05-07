module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        landingBounce: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
          '100%': { transform: 'translateY(0px)' },
        }
      }
    },
  },
  plugins: [],
};