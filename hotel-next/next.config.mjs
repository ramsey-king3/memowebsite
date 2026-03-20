const staticExport = process.env.MEMO_STATIC_EXPORT === "1";
/** GitHub Pages project sites live at /<repo>/ — set e.g. MEMO_BASE_PATH=/memowebsite (no trailing slash). */
const basePath = (process.env.MEMO_BASE_PATH || "").replace(/\/$/, "");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  ...(basePath ? { basePath } : {}),
  /**
   * Set MEMO_STATIC_EXPORT=1 for `npm run build:static` — writes `out/` including `out/_next/`
   * so any static file server can host the site. Default build keeps `next start` working.
   */
  ...(staticExport ? { output: "export" } : {}),
};

export default nextConfig;
