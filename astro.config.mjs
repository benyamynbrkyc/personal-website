// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.benjaminbrkic.com',
  // Pages are emitted as `work.html`, which Cloudflare serves at `/work`.
  trailingSlash: 'never',
  build: {
    format: 'file',
    inlineStylesheets: 'always',
  },
  fonts: [
    {
      name: 'Inter',
      cssVariable: '--font-inter',
      provider: fontProviders.fontsource(),
      weights: ['100 900'],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['ui-sans-serif', 'system-ui', 'sans-serif'],
    },
  ],
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
