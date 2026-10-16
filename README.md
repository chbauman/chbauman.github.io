# chrisbaumann.ch

Personal website of Christian Baumann, built with [Astro](https://astro.build) and plain CSS.

```
npm install
npm run dev      # local dev server
npm run build    # static output in dist/
```

- Content: profile, work, education, projects and bands in `src/data/profile.ts`.
- Styling: `src/styles/global.css` (CSS variables, automatic dark mode).
- Deployment: GitHub Actions publishes `dist/` to GitHub Pages on push to `master`
  (repo setting: Pages → Source: GitHub Actions). The custom domain is set via `public/CNAME`.
