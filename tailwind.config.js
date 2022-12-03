/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      "black":"#000000",
      "box":"#28323b",
      "textC1":"#868f9e",
      "upcoming":"#3a4451",
      "upcomingBorder":"#4b687c",
      "darkBox":"#1e2831",
      "t20":"#396f41",
      "progressBar":"#35d825"
    },
  },
  plugins: [],
}

