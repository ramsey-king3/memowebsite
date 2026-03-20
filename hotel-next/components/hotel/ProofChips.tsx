type Chip = { label: string; warm?: boolean };

export function ProofChips({ chips, id }: { chips: Chip[]; id?: string }) {
  return (
    <ul
      id={id}
      className="mt-10 flex w-full min-w-0 max-w-4xl list-none flex-wrap items-center justify-center gap-x-4 gap-y-3 p-0 sm:mt-14 sm:gap-x-8 sm:gap-y-4 md:mt-20 lg:mt-[4.5rem] lg:gap-x-12 xl:mt-[5.5rem] xl:gap-x-16"
      aria-label="Memo deployment proof points"
    >
      {chips.map((chip) => (
        <li
          key={chip.label}
          className={`min-w-0 max-w-[100%] text-center text-[clamp(0.95rem,calc(0.85rem+1.1vw),1.78rem)] font-bold leading-snug tracking-[-0.02em] ${
            chip.warm ? "text-memo-orange" : "text-memo-text"
          }`}
        >
          {chip.label}
        </li>
      ))}
    </ul>
  );
}
