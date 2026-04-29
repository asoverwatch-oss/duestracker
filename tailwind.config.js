/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0a0a0f',
        card: '#13131f',
        'card-border': '#1e1e30',
        gold: '#d4a017',
        'gold-light': '#f0c040',
        'text-primary': '#f5f0e8',
        'text-muted': '#9ca3af',
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
        rye: ['Rye', 'serif'],
        instrument: ['Instrument Serif', 'serif'],
        cabin: ['Cabin', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
