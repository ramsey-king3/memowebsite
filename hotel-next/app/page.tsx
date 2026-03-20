import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center text-memo-text">
      <p className="max-w-md text-memo-text-soft">
        Next.js app for the refactored hotel and datacenter pages. Legacy static pages remain at the repository root.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/hotel"
          className="rounded-full border border-[rgba(106,61,31,0.9)] px-6 py-3 font-semibold text-memo-text no-underline transition-colors hover:border-memo-amber-soft"
        >
          Open Memo for Hotels
        </Link>
        <Link
          href="/datacenter"
          className="rounded-full border border-[rgba(106,61,31,0.9)] px-6 py-3 font-semibold text-memo-text no-underline transition-colors hover:border-memo-amber-soft"
        >
          Open Memo for Data Centers
        </Link>
      </div>
    </main>
  );
}
