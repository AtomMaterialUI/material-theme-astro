// @ts-check
import mdx from '@astrojs/mdx';
import preact from '@astrojs/preact';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.material-theme.com',
  integrations: [
    mdx(),
    sitemap(),
    tailwind({
      // Use applyBaseStyles: false to prevent Tailwind from injecting its base styles
      applyBaseStyles: false,
    }),
    preact({ devtools: true }),
  ],
  // Enable Markdown and MDX support with custom configuration
  markdown: {
    syntaxHighlight: 'prism',
    remarkPlugins: [],
    rehypePlugins: [],
    shikiConfig: {
      theme: 'material-theme-ocean',
    },
  },
});