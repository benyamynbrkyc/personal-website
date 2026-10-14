# benjaminbrkic.com

Personal website, built with [Astro](https://astro.build) and Tailwind CSS. It is a fully static site served by [Cloudflare Workers static assets](https://developers.cloudflare.com/workers/static-assets/).

## Development

```sh
pnpm install
pnpm dev      # dev server at http://localhost:4321
pnpm check    # type and template diagnostics
pnpm format   # prettier
```

## Build and preview

```sh
pnpm build    # writes the site to dist/
pnpm preview  # builds, then serves dist/ through wrangler (same routing as production)
```

Pages are emitted as files (`work.html`). Cloudflare serves them without a trailing slash (`/work`), and `/work/` redirects to `/work`.

## Deployment

`wrangler.jsonc` defines an assets-only Worker that serves `dist/`. Requests for missing pages get `404.html`.

- `public/_headers` sets security headers and long-lived caching for hashed `/_astro/*` files.
- `public/_redirects` holds permanent redirects for old URLs.

Production deploys run through Workers Builds when `main` is pushed:

| Setting         | Value                 |
| --------------- | --------------------- |
| Build command   | `pnpm run build`      |
| Deploy command  | `npx wrangler deploy` |
| Node.js version | from `.node-version`  |

To deploy manually, run `pnpm run deploy` after `pnpm exec wrangler login`. (`pnpm deploy` without `run` is a built-in pnpm command.)

## SEO

- Canonical URLs, Open Graph and Twitter cards, and JSON-LD (`Person`, `WebSite`, `ProfilePage`, `CollectionPage`) are set in `src/components/BaseHead.astro` and the page files.
- `@astrojs/sitemap` generates `sitemap-index.xml`, and `src/pages/robots.txt.ts` points crawlers to it.
- `public/og.png` is the 1200×630 social share image.
