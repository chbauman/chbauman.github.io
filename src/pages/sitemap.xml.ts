import type { APIRoute } from 'astro';

// One plain sitemap with every page except the 404 page.
const pages = Object.keys(import.meta.glob('./*.astro'))
  .map((f) => f.replace('./', '').replace('.astro', ''))
  .filter((name) => name !== '404');

export const GET: APIRoute = ({ site }) => {
  const urls = pages
    .map((name) => (name === 'index' ? '' : `${name}/`))
    .sort()
    .map((path) => `  <url><loc>${new URL(path, site).href}</loc></url>`)
    .join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
