/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // We'll extract these from the existing theme data
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        accent: 'var(--accent-color)',
        background: 'var(--background-color)',
        foreground: 'var(--foreground-color)',
        error: 'var(--error-color)',
      },
      fontFamily: {
        sans: ['var(--font-family)', 'sans-serif'],
        mono: ['var(--mono-font)', 'monospace'],
      },
    },
  },
  plugins: [],
  // Don't purge existing CSS classes to ensure compatibility
  safelist: [
    // We'll add specific classes that should be preserved here
    'theme-oceanic',
    'theme-darker',
    'theme-lighter',
    'theme-palenight',
    'theme-deepocean',
    'documentation',
    'sidebar',
    'content',
    'card-panel',
    'warn',
    'btn',
    'btn-floating',
    'tooltipped',
  ],
};
