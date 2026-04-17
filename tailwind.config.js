/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        neon: {
          purple: '#b026ff',
          dim: '#7a1ab8',
          glow: '#d966ff',
          pink: '#ff2d78',
        },
        dark: {
          950: '#050507',
          900: '#0a0a0f',
          800: '#10101a',
          700: '#16162a',
          600: '#1e1e35',
          500: '#252545',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        glowPulse: {
          from: { boxShadow: '0 0 10px #b026ff55, 0 0 20px #b026ff33' },
          to: { boxShadow: '0 0 25px #b026ffaa, 0 0 50px #b026ff55, 0 0 80px #b026ff33' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
    },
  },
  plugins: [],
};
