/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f4ff',
          100: '#e6ecff',
          200: '#cdd9ff',
          300: '#a5baff',
          400: '#7a94ff',
          500: '#4f6dff',
          600: '#3d52d5',
          700: '#2d3aa8',
          800: '#1f2666',
          900: '#0f1626',
        },
        accent: {
          emerald: '#10b981',
          danger: '#ef4444',
          warning: '#f59e0b',
        },
        dark: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
          950: '#030712',
        },
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
      },
      boxShadow: {
        glow: '0 0 20px rgba(79, 109, 255, 0.3)',
        'glow-lg': '0 0 40px rgba(79, 109, 255, 0.4)',
        card: '0 8px 32px rgba(0, 0, 0, 0.2)',
        'card-sm': '0 4px 16px rgba(0, 0, 0, 0.15)',
      },
      animation: {
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shield': 'shield 2s ease-in-out infinite',
      },
      keyframes: {
        shield: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        'sf-pro': ['-apple-system', 'BlinkMacSystemFont', '"SF Pro Display"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
