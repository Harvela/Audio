/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      serif: ['Poppins', 'serif'],
      mono: ['Poppins', 'monospace'],
      heading: ['Poppins', 'sans-serif'],
    },
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      gray: '#EAEAEA',
    },
    extend: {
      colors: {
        white: '#FFFFFF',
        black: '#000000',
        gray: '#EAEAEA',
        primary50: '#000000',
        secondary50: '#FFFFFF',
        border: '#A3A3A3',
        blue: '#0072c6',
        yellow: '#FFECD1',
        primary: {
          100: '#F0FFFD',
          200: '#C5FFF9',
          300: '#6DAFA7',
          400: '#0F2624',
          500: '#0E9F90',
          DEFAULT: '#FFEAD6',
          on: '#f4f8fd',
        },
      },
      lineHeight: {
        hero: '4.5rem',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-1deg)' },
          '50%': { transform: 'rotate(1deg)' },
        },
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
