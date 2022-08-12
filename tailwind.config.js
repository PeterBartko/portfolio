/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/pages/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      animation: {
        hue: 'hue-rotate 4s infinite alternate',
      },
      keyframes: {
        'hue-rotate': {
          '0%': {
            filter: 'hue-rotate(-40deg)',
          },
          '100%': {
            filter: 'hue-rotate(0deg)',
          },
        },
      },
    },
  },
  plugins: [],
}
