import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://lazytechtalk.com',
  integrations: [
    tailwind(),
    mdx(),
    sitemap(),
  ],
  output: 'static',
  buildOptions: {
    out: './dist',
  },
});
