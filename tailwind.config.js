/* tailwind.config.js */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A'
        }
      },
      textShadow: {
        DEFAULT: '0 2px 4px rgba(0, 0, 0, 0.5)',
        sm: '0 1px 2px rgba(0, 0, 0, 0.6)'
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow': {
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-sm': {
          textShadow: '0 1px 2px rgba(0, 0, 0, 0.6)',
        },
      }
      addUtilities(newUtilities)
    },
  ],
}