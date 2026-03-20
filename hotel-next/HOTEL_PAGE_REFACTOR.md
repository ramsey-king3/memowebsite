# Hotel page — Next.js refactor

## What this is

A **responsive**, **component-based** rebuild of the legacy hotel landing page using **Next.js (App Router)**, **React**, and **Tailwind CSS**. Visual direction, copy, and structure follow:

- Source: `../hotel/hotel-page-sythesization.html` (unchanged in the repo)
- Shared design tokens: `../styles.css` (reference only; styles are reimplemented in Tailwind + `app/globals.css`)

The original HTML file and static assets under `../hotel/` are **not modified** by this work.

## Where things live

| Area | Path |
|------|------|
| Route | `app/hotel/page.tsx` → URL `/hotel` |
| Page shell / max width | `components/shared/MemoPageShell.tsx` |
| Hotel sections | `components/hotel/*` |
| Card icons (inline SVG) | `components/hotel/icons/*` |
| Diagram SVGs (copied from legacy) | `public/hotel/hotel-usecase-section.svg`, `public/hotel/hotel-workflow-fit.svg` |
| Global / body background | `app/layout.tsx`, `app/globals.css` |
| Tailwind theme extensions | `tailwind.config.ts` |

Root page: `app/page.tsx` is a short entry with a link to `/hotel` so this app can coexist with the static site at the repo root.

## How to run

From the `hotel-next` directory:

```bash
npm install
npm run dev
```

Open [http://localhost:3000/hotel](http://localhost:3000/hotel) (or `/` which redirects).

Production build:

```bash
npm run build
npm start
```

## Components (high level)

- **HotelHero** — headline, subhead, primary CTA, proof chips; decorative framing without absolute-positioned core copy.
- **HotelVisibilitySection** — section heading + **HotelInsightCard** grid + secondary CTA.
- **HotelDiagramSection** — responsive container for the large SVG illustrations (`<img>`, correct aspect ratios).
- **HotelScheduleSection** — anchor target `#schedule-time-to-speak` and closing CTA block.
- **HotelPrimaryCta**, **ProofChips**, **SectionHeading** — shared patterns for CTAs, chips, and titled sections.

## Notes

- Large **use case** and **workflow** graphics remain SVG files (illustration-only); layout and typography for the rest of the page are HTML + Tailwind.
- When you refactor warehouse/datacenter pages, you can add routes under `app/` and shared primitives under `components/shared/` following the same patterns.
