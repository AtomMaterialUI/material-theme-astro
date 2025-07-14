// @ts-check
import {defineConfig} from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

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