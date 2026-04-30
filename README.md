# Qunigma — Landing Page

Marketing landing page for [qunigma.ai](https://qunigma.ai) — AI-native active cyber defense platform.

Built with **Next.js 14 App Router**, TypeScript, Tailwind CSS. Bilingual (PL/EN).

## Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Video:** Cloudflare Stream (HLS)
- **Deployment:** Vercel

## Run locally

**Prerequisites:** Node.js 18+

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

```
app/
├── layout.tsx          # Root layout, dynamic lang attr (PL/EN)
├── page.tsx            # PL homepage
├── privacy/            # PL Privacy Policy
├── platforma/          # PL Platform page
├── rozwiazania/        # PL Solutions page
├── compliance/         # PL Compliance page
├── firma/              # PL About page
├── wiedza/             # PL Resources page
└── en/                 # EN versions (mirrors PL structure)

components/             # Shared React components
middleware.ts           # Sets x-pathname header for lang detection
```

## SEO

- `app/sitemap.ts` — dynamic sitemap (PL + EN)
- `app/robots.ts` — robots.txt
- hreflang alternates on all pages
- schema.org JSON-LD (SoftwareApplication) on homepages
- Dynamic `lang` attribute via middleware
