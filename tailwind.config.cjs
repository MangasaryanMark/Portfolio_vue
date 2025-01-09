/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {

    colors: {
      ...colors,
      'custom': '#6566e2',
      'xaki-kanach': '#404d3c',
      'header-color': '#f7e5d2',
      'footer-of-footer': '#fbf2e8'
    },
    fontFamily: {
      sans: ['Graphic', 'sans-serif'],
      serif: ['Merryweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  variants: {
    extend: {
      borderColor: ['focus-visible'],
      opacity: ['disabled'],
    }
  }
}

