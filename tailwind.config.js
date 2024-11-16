/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html", "./build/*.js"],
  safelist: ['font-Alata', 'font-Castoro'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['AdvercaseFont', 'sans-serif'],
        primary: ['Gotu', 'sans-serif'],
        secondary: ['Poppins', 'sans-serif'],
        tertiary: ['Flaviotte', 'sans-serif'],
        Castoro: ['Castoro Titling', 'sans-serif'],
        Alata: ['Alata', 'sans-serif'],
      },
      colors: {
        'primary': '#2B1E49',
        'secondary': '#F3D0BB',
        'tertiary': '#EF6570',
        'new-black': '#2F2F2F',
        'new-white': '#FCFCFB',
        'opacity-new-white': '#FCFCFB60',
        'opacity-new-black': '#2F2F2F80'
      },
      backgroundImage: {
        'hero-blur-gradient': 'linear-gradient(117deg, rgba(230, 230, 230, 0.38) 0%, rgba(230, 230, 230, 0.10) 100%)',
        'profile-bg-gradient': 'linear-gradient(180deg, #FCFCFB 0%, #F3D0BB 100%)',
        'welcome-profile-card': 'linear-gradient(293deg, #F3D0BB 12.68%, rgba(244, 244, 244, 0.30) 75.55%)',
        'stats-profile-card': 'linear-gradient(128deg, #F3D0BB 25.8%, #FFFEFD 100%)',
        'latest-post': 'linear-gradient(169deg, rgba(73, 30, 30, 0.39) 0%, #FCFCFB 100%)',
        'carousel-feed-gradient': 'linear-gradient(0deg, #2F2F2F 3.56%, rgba(181, 181, 181, 0.00) 100%);'
      },
      height: {
        'profile-post': '120px',
        'underline-continent': '4px',
      },
      width: {
        'profile-section-sm': '366px',
        'profile-section-lg': '950px',
        'profile-section-2xl': '1068px',
        'profile-post-sm': '200px',
        'profile-post-lg': '180px'
      },
      screens: {
        'mobile-home': '480px'
      },
    },
  },
  plugins: [],
}

