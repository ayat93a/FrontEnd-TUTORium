module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('../pages/assests/bg.webp')",
      },
      colors:{
      navbg : '#f8f8f8'
      }
    },
    
  },
  plugins: [],
}


