import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://chrisbaumann.ch',
  trailingSlash: 'ignore',
  integrations: [sitemap({ filter: (page) => !page.endsWith('/404/') && !page.endsWith('/404') })],
});
