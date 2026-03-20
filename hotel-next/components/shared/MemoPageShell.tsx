export function MemoPageShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="mx-auto flex w-full max-w-page flex-col gap-[clamp(18px,2.8vw,30px)] p-[clamp(18px,3vw,40px)] md:gap-7">
      {children}
    </main>
  );
}
