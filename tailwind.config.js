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
      regester : '#127A89',
      login : '#f3f8f2',
      }
    },
    
  },
  plugins: [],
}


