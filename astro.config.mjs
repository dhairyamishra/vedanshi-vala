import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://dhairyamishra.github.io',
  base: '/vedanshi-vala',
  trailingSlash: 'always',
  output: 'static',
  integrations: [react(), tailwind(), sitemap(), icon(), mdx()],
});
