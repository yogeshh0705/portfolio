import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Signal amber — the primary accent. Chosen over the default blue to feel
        // more like solder/copper/PCB traces than another AI-SaaS gradient.
        brand: {
          DEFAULT: '#ff7a1a',
          dark: '#c9560a',
        },
        // Secondary accent — a circuit-trace green, used sparingly for contrast.
        signal: {
          DEFAULT: '#6bffb8',
        },
        ink: {
          DEFAULT: '#08090b',
          light: '#f5f4f0',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-space-mono)', 'ui-monospace', 'monospace'],
      },
      backgroundImage: {
        grid: 'linear-gradient(to right, rgba(245,244,240,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(245,244,240,0.06) 1px, transparent 1px)',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.6s ease-out forwards',
        marquee: 'marquee 28s linear infinite',
        blink: 'blink 1s step-end infinite',
      },
    },
  },
  plugins: [],
};

export default config;
