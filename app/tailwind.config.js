/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts,css}'], // darkMode: 'class',
  theme: {
    container: {
      center: true
    }, extend: {}
  },
  daisyui: {
    themes: [{
      golda: {
        'primary': '#e148ff',
        'secondary': '#4b4b4b',
        'accent': '#31ffd9',
        'neutral': '#525252',
        'base-100': '#1e1e1e',
        'info': '#00dcff',
        'success': '#bef264',
        'warning': '#facc15',
        'error': '#f44f63'
      }
    }]
  }, plugins: [require('@tailwindcss/typography'), require('daisyui')]
}
