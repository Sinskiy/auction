/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      screens: {
        'xs': { 'raw': '(min-width: 400px)' },
        // => @media (min-height: 800px) { ... }
      }
    },
  },
  plugins: [] ,
}
