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
      },
      backgroundImage: {
        'profile-bg-gradient': 'linear-gradient(135deg, #F3D0BB 0%, #FCFCFB 75.14%)',
        'welcome-profile-card': 'linear-gradient(293deg, #F3D0BB 12.68%, rgba(244, 244, 244, 0.30) 75.55%)',
        'stats-profile-card': 'linear-gradient(128deg, #F3D0BB 25.8%, #FFFEFD 100%)'
      },
    },
  },
  plugins: [],
}

