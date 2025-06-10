export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a365d',
          light: '#264973',
          dark: '#0d1b2a',
        },
        secondary: {
          DEFAULT: '#c9a55c',
          light: '#d4b87d',
          dark: '#b08b45',
        },
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        serif: ['Lora', 'serif'],
      },
      boxShadow: {
        'custom': '0 4px 20px rgba(0, 0, 0, 0.08)',
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
      }
    },
  },
  plugins: [],
};