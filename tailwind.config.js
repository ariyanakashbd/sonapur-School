/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1e6f5c',
        secondary: '#f5a623',
        light: '#f4f9f7',
      },
      fontFamily: {
        bangla: ['"Hind Siliguri"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
