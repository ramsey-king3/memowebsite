# Asset map (old → new paths)

This documents moves and renames performed during the repo reorganization. Git history retains prior blobs where files were renamed with `git mv`.

## Root → per-page folders

| Old path | New path | Notes |
|----------|----------|--------|
| `index.html` (full hotel page, `chore/repo-organization`) | [`hotel/hotel-page-sythesization.html`](hotel/hotel-page-sythesization.html) | Hotel page uses [`hotel/hotel-landing.css`](hotel/hotel-landing.css) (isolated from `styles.css`); anchor CTAs and SVG paths remain under `hotel/`. |
| `index.html` | [`index.html`](index.html) | Replaced with redirect + links (see [`archive/root-index-full-hotel-embed-chore-branch.html`](archive/root-index-full-hotel-embed-chore-branch.html) for the previous root file). |
| `Hotel-usecase-section.svg` | [`hotel/hotel-usecase-section.svg`](hotel/hotel-usecase-section.svg) | Renamed for consistent `hotel-*` naming. |
| `Hotel-workflow-fit.svg` | [`hotel/hotel-workflow-fit.svg`](hotel/hotel-workflow-fit.svg) | Renamed for consistent `hotel-*` naming. |
| `hotel-radio-visibility-section.svg` | [`hotel/hotel-radio-visibility-section.svg`](hotel/hotel-radio-visibility-section.svg) | Co-located with hotel page (not referenced by the synthesized HTML; radio section is inline in the page). |
| `warehouse-page-synthesized.html` | [`warehouse/warehouse-page-synthesized.html`](warehouse/warehouse-page-synthesized.html) | `styles.css` → `../styles.css`; SVG paths updated. |
| `Warehouse-usecase-section.svg` | [`warehouse/warehouse-usecase-section.svg`](warehouse/warehouse-usecase-section.svg) | Renamed to `warehouse-*` pattern. |
| `warehouse-workflow-fit.svg` | [`warehouse/warehouse-workflow-fit.svg`](warehouse/warehouse-workflow-fit.svg) | Unchanged filename; moved into folder. |
| `warehouse-radio-visibility-section.svg` | [`warehouse/warehouse-radio-visibility-section.svg`](warehouse/warehouse-radio-visibility-section.svg) | Co-located with warehouse page (not referenced by the synthesized HTML). |
| `datacenter/Datacenters-usecase-section.svg` | [`datacenter/Datacenter-usecase-section.svg`](datacenter/Datacenter-usecase-section.svg) | Typo fix in filename (`Datacenters` → `Datacenter`); [`datacenter/datacenter-page-synthesized.html`](datacenter/datacenter-page-synthesized.html) updated. |
| `datacenter/datacenter-radio-visibility-section.svg` | [`datacenter/Datacenter-radio-visibility-section.svg`](datacenter/Datacenter-radio-visibility-section.svg) | Casing aligned with other `Datacenter-*` SVGs (not referenced by the synthesized HTML). |

## Files introduced from `origin/feature/warehouse-page-synthesized`

These were not on `chore/repo-organization` before checkout; they were added from the feature branch, then placed as above:

- `warehouse-page-synthesized.html` and warehouse SVGs
- `datacenter/*` as listed
- `hotel-page-sythesization.html` (feature variant) → archived (see below)

## Archive

| Path | Origin | Reason |
|------|--------|--------|
| [`archive/root-index-full-hotel-embed-chore-branch.html`](archive/root-index-full-hotel-embed-chore-branch.html) | Former root `index.html` on this branch | Preserves the self-contained hotel page that lived at `/` before the redirect. |
| [`archive/hotel-page-sythesization-fillout-cta-variant.html`](archive/hotel-page-sythesization-fillout-cta-variant.html) | `hotel-page-sythesization.html` on `origin/feature/warehouse-page-synthesized` | Alternate hotel page (external Fillout form CTAs vs in-page `#schedule-time-to-speak` anchors). |
| [`archive/Warehouse-hero-section.svg`](archive/Warehouse-hero-section.svg) | Root on feature branch | Not referenced by `warehouse-page-synthesized.html` (hero is CSS/HTML in-page). |

## Unchanged

- [`styles.css`](styles.css) — remains at repository root.
