import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          950: '#0b1310',
          900: '#101b16',
          800: '#182720',
          700: '#22362c',
          600: '#324a3d',
        },
        brass: {
          200: '#ead9b3',
          300: '#dcc38c',
          400: '#c9a868',
          500: '#b8944f',
          600: '#96793d',
          700: '#7a6231',
        },
        paper: {
          50: '#faf8f3',
          100: '#f3efe4',
          200: '#e8e1d1',
        },
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'ui-serif', 'Georgia', 'serif'],
        body: ['var(--font-worksans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.2em',
      },
      maxWidth: {
        content: '1400px',
      },
    },
  },
  plugins: [],
};

export default config;
