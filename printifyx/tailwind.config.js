/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // enable dark mode
  content: ['./index.html', './src/**/*.{js,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#1d4ed8',
        secondary: '#f59e0b',
        accent: '#22c55e',
      },
    },
  },
  safelist: [
    'btn-primary',
    'card',
    'input-field',
    'text-gradient',
    'modal',
    'hidden',
  ],
  plugins: [],
};
