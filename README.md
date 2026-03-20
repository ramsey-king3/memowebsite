# Memo website (synthesized pages)

Static HTML landing pages and SVG diagrams for Memo, grouped by vertical.

## Layout

| Path | Purpose |
|------|---------|
| [`styles.css`](styles.css) | Shared stylesheet for hotel and warehouse pages (data center page uses inline styles). |
| [`index.html`](index.html) | Entry point: redirects to the hotel synthesized page; includes links to warehouse and data center pages. |
| [`hotel/`](hotel/) | Hotel vertical: synthesized page + SVG assets. |
| [`warehouse/`](warehouse/) | Warehouse / logistics vertical. |
| [`datacenter/`](datacenter/) | Data center vertical (self-contained HTML + local SVGs). |
| [`archive/`](archive/) | Snapshots and assets that are duplicates, alternate variants, or not wired into a page. |

See [`ASSET_MAP.md`](ASSET_MAP.md) for the mapping from pre-reorganization paths to the current tree.

## Local preview

Open `index.html` in a browser, or open any page under `hotel/`, `warehouse/`, or `datacenter/` directly. Hotel and warehouse pages load `../styles.css` from the repo root.
