type SectionHeadingProps = {
  title: string;
  id: string;
  as?: "h1" | "h2";
  /** Tailwind max-width class for the title (default matches hotel section density). */
  titleMaxWidthClass?: string;
};

export function SectionHeading({
  title,
  id,
  as: Tag = "h2",
  titleMaxWidthClass = "max-w-[24ch]",
}: SectionHeadingProps) {
  return (
    <header className="px-1 pb-6 pt-1 text-center sm:pb-8">
      <div
        className="mx-auto mb-[18px] h-0.5 w-14 rounded-full bg-memo-amber shadow-[0_0_0_1px_rgba(255,122,26,0.18)]"
        aria-hidden
      />
      <Tag
        id={id}
        className={`mx-auto ${titleMaxWidthClass} text-balance text-[clamp(2.05rem,3.4vw,3.1rem)] font-semibold leading-[1.04] tracking-[-0.045em]`}
      >
        {title}
      </Tag>
    </header>
  );
}
