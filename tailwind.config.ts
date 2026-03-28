import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/data/**/*.ts',
  ],
  theme: {
    extend: {
      fontFamily: {
        // Gallery
        'instrument-serif': ['var(--font-instrument-serif)', 'serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
        // SaaS
        'space-grotesk': ['var(--font-space-grotesk)', 'sans-serif'],
        'dm-sans': ['var(--font-dm-sans)', 'sans-serif'],
        // Restaurant
        playfair: ['var(--font-playfair-display)', 'serif'],
        lato: ['var(--font-lato)', 'sans-serif'],
        // Fitness
        oswald: ['var(--font-oswald)', 'sans-serif'],
        roboto: ['var(--font-roboto)', 'sans-serif'],
        // Real Estate
        cormorant: ['var(--font-cormorant-garamond)', 'serif'],
        outfit: ['var(--font-outfit)', 'sans-serif'],
        // Medical
        poppins: ['var(--font-poppins)', 'sans-serif'],
        'source-sans': ['var(--font-source-sans-3)', 'sans-serif'],
        // E-commerce
        sora: ['var(--font-sora)', 'sans-serif'],
        'libre-franklin': ['var(--font-libre-franklin)', 'sans-serif'],
        // Course
        'jakarta-sans': ['var(--font-plus-jakarta-sans)', 'sans-serif'],
        nunito: ['var(--font-nunito)', 'sans-serif'],
        // App
        manrope: ['var(--font-manrope)', 'sans-serif'],
      },
      colors: {
        // Gallery
        gallery: {
          bg: '#fafaf9',
          text: '#1c1917',
          muted: '#78716c',
          border: '#e7e5e4',
        },
        // SaaS
        saas: {
          bg: '#09090b',
          accent: '#8b5cf6',
          'accent-light': '#a78bfa',
          surface: '#18181b',
          border: '#27272a',
        },
        // Restaurant
        restaurant: {
          bg: '#fef7ed',
          green: '#1a3a2a',
          'green-light': '#2d5a40',
          gold: '#c8a55a',
          'gold-light': '#d4b76a',
          cream: '#fdf4e7',
        },
        // Fitness
        fitness: {
          bg: '#000000',
          neon: '#39ff14',
          'neon-dim': '#2ecc10',
          surface: '#111111',
          border: '#222222',
        },
        // Real Estate
        realestate: {
          bg: '#ffffff',
          charcoal: '#2d2d2d',
          'charcoal-light': '#4a4a4a',
          gold: '#c9a96e',
          'gold-light': '#d4b87e',
          surface: '#f5f5f5',
        },
        // Medical
        medical: {
          bg: '#f0fdfa',
          teal: '#0d9488',
          'teal-light': '#14b8a6',
          'teal-dark': '#0f766e',
          surface: '#ffffff',
          border: '#ccfbf1',
          text: '#134e4a',
        },
        // E-commerce
        ecommerce: {
          bg: '#fffbf5',
          coral: '#f43f5e',
          'coral-light': '#fb7185',
          'coral-dark': '#e11d48',
          dark: '#1a1a1a',
          surface: '#ffffff',
          border: '#fecdd3',
          muted: '#6b7280',
        },
        // Course
        course: {
          bg: '#fefce8',
          indigo: '#312e81',
          'indigo-light': '#4338ca',
          amber: '#f59e0b',
          'amber-light': '#fbbf24',
          'amber-dark': '#d97706',
          surface: '#ffffff',
          border: '#e0e7ff',
          text: '#1e1b4b',
        },
        // App
        app: {
          bg: '#0f172a',
          indigo: '#6366f1',
          purple: '#a855f7',
          'indigo-light': '#818cf8',
          surface: '#1e293b',
          border: '#334155',
          mint: '#ecfdf5',
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-in-right': 'slideInRight 0.3s ease-out forwards',
        'slide-out-right': 'slideOutRight 0.3s ease-in forwards',
        'logo-scroll': 'logoScroll 20s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideOutRight: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
        logoScroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
