/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html', // Include the main HTML file
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      },
    },
  },
  plugins: [],
}

