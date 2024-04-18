/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  plugins: [
    require('@tailwindcss/forms'),
  ],
  theme: {
    extend: {
      colors: {
        navy: '#07021c',
        pink: '#F943C9',
        gray: '#d4d4d4',
        blue: '#1760f3',
        white: '#eaeaf9',
        purple: '#573f64',
        lavender: '#e6e0fb',
        purewhite: '#ffffff'
      } ,
      fontFamily: {
        'heading': ['Syne', 'ui-sans-serif', 'system-ui'],
        'paragraph': ['Inter', 'ui-sans-serif', 'system-ui'],
      }
    }
  }
}

