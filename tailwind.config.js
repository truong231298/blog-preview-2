/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'YellowSet': 'hsl(47, 88%, 63%)',
        'WhiteSet': 'hsl(0, 0%, 100%)',
        'Gray500': 'hsl(0, 0%, 42%)',
        'Gray950': 'hsl(0, 0%, 7%)',
      },
      backgroundColor:{
        
      }
    },
  },
  plugins: [],
}