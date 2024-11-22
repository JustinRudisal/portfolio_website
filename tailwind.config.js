module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all source files
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1d4ed8',
        secondary: '#6b46c1',
        accent: '#fbbf24',
        background: '#f0f4f8',
        text: '#333',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        serif: ['Montserrat', 'serif'],
      },
    },
  },
  plugins: [],
};