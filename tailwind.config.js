/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    extend: {
      fontFamily: {
        heading: ['AdvercaseFont', 'sans-serif'],
        primary: ['Gotu', 'sans-serif'],
        secondary: ['Poppins', 'sans-serif']
      },
      colors: {
        'primary': '#2B1E49',
        'secondary': '#F3D0BB',
        'tertiary': '#EF6570',
        'new-black': '#2F2F2F',
        'new-white': '#FCFCFB',
        'opacity-new-white': '#FCFCFB60'
      }
    },
  },
  plugins: [],
}

