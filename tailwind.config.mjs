/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        primaryT: 'var(--primaryT)',
        accent: 'var(--accent)',
        accentT: 'var(--accentT)',
        accent2: 'var(--accent2)',
        accent2T: 'var(--accent2T)',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        text: 'var(--text)',
        selectBg: 'var(--selectBg)',
        selectFg: 'var(--selectFg)',
        'accent-text': 'var(--accent-text)',
        button: 'var(--button)',
        second: 'var(--second)',
        disabled: 'var(--disabled)',
        contrast: 'var(--contrast)',
        active: 'var(--active)',
        border: 'var(--border)',
        hl: 'var(--hl)',
        tree: 'var(--tree)',
        notif: 'var(--notif)',
        excluded: 'var(--excluded)',
        yellow: 'var(--yellow)',
        green: 'var(--green)',
        cyan: 'var(--cyan)',
        blue: 'var(--blue)',
        purple: 'var(--purple)',
        red: 'var(--red)',
        red2: 'var(--red2)',
        orange: 'var(--orange)',
        orange2: 'var(--orange2)',
        gray: 'var(--gray)',
        silver: 'var(--silver)',
        black: 'var(--black)',
      },
      backgroundColor: (theme) => ({
        ...theme('colors'),
      }),
      textColor: (theme) => ({
        ...theme('colors'),
      }),
      borderColor: (theme) => ({
        ...theme('colors'),
      }),
      fill: (theme) => ({
        ...theme('colors'),
      }),
      fontFamily: {
        main: ['Roboto', 'Calibri', 'Arial', 'sans-serif'],
        code: ['Source Code Pro', 'Monaco', 'Bitstream Vera Sans Mono', 'Lucida Console', 'Terminal', 'monospace'],
      },
      backgroundImage: {
        laptop: 'var(--laptop)',
        logo: 'var(--logo)',
      },
      transitionProperty: {
        all: 'all',
        colors: 'color, background-color, border-color, text-decoration-color, fill, stroke',
      },
      transitionDuration: {
        1000: '1000ms',
      },
    },
  },
  plugins: [],
  // Don't purge existing CSS classes to ensure compatibility
  safelist: [
    // We'll add specific classes that should be preserved here
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