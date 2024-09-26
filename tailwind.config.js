/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      // Custom Breakpoints
      'tablet': '835px',
      'lap': '1184px',
      'desktop': '1280px',

      'sm': '640px', // Small screens
      'md': '768px', // Medium screens
      'lg': '1024px', // Large screens
      'xl': '1280px', // Extra large screens
      '2xl': '1536px', // 2x Extra large screens
    },
    
  },
  plugins: [],
}