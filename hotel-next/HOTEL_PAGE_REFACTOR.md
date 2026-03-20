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
| Shared diagram wrapper | `components/shared/MemoDiagramSection.tsx` (re-exported as `HotelDiagramSection`) |
| Global / body background | `app/layout.tsx`, `app/globals.css` |
| Tailwind theme extensions | `tailwind.config.ts` |

Root page: `app/page.tsx` is a short entry with links to `/hotel` and `/datacenter` so this app can coexist with the static site at the repo root.

## Datacenter page (Next.js)

A matching refactor of **`../datacenter/datacenter-page-synthesized.html`** (legacy HTML and `datacenter/*.svg` are unchanged).

| Area | Path |
|------|------|
| Route | `app/datacenter/page.tsx` → URL `/datacenter` |
| Datacenter sections | `components/datacenter/*` |
| Datacenter card icons | `components/datacenter/icons/*` |
| Diagram SVGs (copied for Next static serving) | `public/datacenter/Datacenter-usecase-section.svg`, `public/datacenter/Datacenter-workflow-fit.svg` |

**Shared vs page-specific**

- **Shared:** `MemoPageShell`, `MemoDiagramSection` (diagram frame + aspect ratio), `HotelPrimaryCta`, `ProofChips`, `SectionHeading`, `HotelInsightCard` (same card system as hotel).
- **Datacenter-only:** `DatacenterHero`, `DatacenterVisibilitySection`, `DatacenterScheduleSection`, `datacenterScheduleUrl` (Fillout CTA URL), datacenter icons.

Metadata for the data center route is set in `app/datacenter/page.tsx` (`title: Memo for Data Centers`).

## How to run

From the `hotel-next` directory:

```bash
npm install
npm run dev
```

Open [http://localhost:3000/hotel](http://localhost:3000/hotel), [http://localhost:3000/datacenter](http://localhost:3000/datacenter), or `/` for entry links.

**Important:** Always include the dev server **port** (`:3000` by default). If the address bar shows only `http://localhost/...` with **no port**, you are usually hitting a different web server (for example a static file server on port 80). That often returns **200** for the HTML but **404** for `/_next/static/css/...` and `/_next/static/chunks/...`, so the page renders **unstyled** (default serif font, broken layout).

Production build (Node server):

```bash
npm run build
npm start
```

Static hosting (entire `out/` folder, including `out/_next/`):

```bash
npm run build:static
npm run preview:static
```

Then open the URL `serve` prints (for example `http://localhost:3000/datacenter`). Do **not** open a single `.html` file from disk or serve only part of the repo — CSS and JS live under `_next/`.

### GitHub Pages (project site at `/<repo>/`)

Build with both env vars (replace `memowebsite` if your repo name differs):

```bash
MEMO_BASE_PATH=/memowebsite MEMO_STATIC_EXPORT=1 npm run build
```

Deploy the contents of `out/` to your Pages branch. Local preview of that build: `npx serve out` and open `http://localhost:3000/memowebsite/datacenter`.

### Reverse proxies

If you proxy only `/hotel` or `/datacenter` to Next but not `/_next`, assets will 404. Forward **`/_next`** to the same Next process (or use `MEMO_BASE_PATH` + static export so assets sit under your site prefix).

## Components (high level)

- **HotelHero** — headline, subhead, primary CTA, proof chips; decorative framing without absolute-positioned core copy.
- **HotelVisibilitySection** — section heading + **HotelInsightCard** grid + secondary CTA.
- **MemoDiagramSection** / **HotelDiagramSection** — responsive container for the large SVG illustrations (`<img>`, correct aspect ratios); optional `sectionAriaLabel` for vertical-specific section labels.
- **HotelScheduleSection** — anchor target `#schedule-time-to-speak` and closing CTA block.
- **HotelPrimaryCta**, **ProofChips**, **SectionHeading** — shared patterns for CTAs, chips, and titled sections (`SectionHeading` supports optional `titleMaxWidthClass` for longer headlines).

## Notes

- Large **use case** and **workflow** graphics remain SVG files (illustration-only); layout and typography for the rest of the page are HTML + Tailwind.
- The **datacenter** vertical uses the same patterns; see the **Datacenter page** section above. Warehouse can follow the same approach when needed.
