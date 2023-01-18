/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container : {
      center: true,
      padding: '30px',
    },
    extend: {
      colors: {
        primary: '#67e8f9',
        secondary: '#64748b',
        darkgrey: '#1e293b',
      },
      screens: {
        '2x': '1320px',
      }
    },
  },
  plugins: [],
}
