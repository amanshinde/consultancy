/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        brand: {
          DEFAULT: '#4338ca',
          soft: '#a5b4fc',
          accent: '#14b8a6',
        },
      },
      boxShadow: {
        'glow-sm': '0 10px 40px rgba(99, 102, 241, 0.25)',
        'card-lg': '0 30px 80px rgba(15, 23, 42, 0.45)',
      },
      backgroundImage: {
        'hero-sheen':
          'radial-gradient(circle at top, rgba(99,102,241,0.18), rgba(255,255,255,0))',
      },
    },
  },
  plugins: [],
}

