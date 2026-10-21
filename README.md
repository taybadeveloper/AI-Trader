# Al-Trader — AI-Powered Trading Platform

The marketing website for **Al-Trader** ([al-trader.org](https://al-trader.org)), an AI-powered
trading platform for forex, crypto and stocks. Built with **Next.js (App Router)**,
**TypeScript** and **Tailwind CSS v4** — light theme.

## Pages

- `/` — landing page: hero with AI dashboard mockup, stats, features, how it works, pricing, testimonials, FAQ, CTA
- `/about` — company story, mission and values
- `/blog` — blog listing, with 3 starter posts in `src/lib/posts.ts`
- `/contact` — contact form (client-side demo; wire it to Formspree/Resend for real submissions)
- `/privacy`, `/terms` — legal pages
- `sitemap.xml` and `robots.txt` — generated automatically (`src/app/sitemap.ts`, `src/app/robots.ts`)

## SEO

The site is optimized for the keyword **"al-trader"** — metadata, headings, copy, JSON-LD
(Organization / WebSite / SoftwareApplication), canonical URLs and the sitemap all use
`https://al-trader.org` as the base URL.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Deploy to Vercel (recommended)

1. Push this repo to GitHub.
2. Import it at [vercel.com/new](https://vercel.com/new).
3. In **Settings → Domains**, add `al-trader.org` and point the domain's DNS to Vercel.

No configuration needed — Next.js deploys with zero config on Vercel.
