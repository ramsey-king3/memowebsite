import { SectionHeading } from "@/components/hotel/SectionHeading";

type Props = {
  variant: "usecase" | "workflow";
  src: string;
  alt: string;
  /** Overrides default section aria-label when no visible `title` is set. */
  sectionAriaLabel?: string;
  /** Visible heading above the diagram; pair with `titleId` for accessibility. */
  title?: string;
  titleId?: string;
  titleMaxWidthClass?: string;
};

const aspectClass = {
  usecase: "aspect-[1600/1500]",
  workflow: "aspect-[1600/940]",
};

const defaultSectionAria: Record<Props["variant"], string> = {
  usecase: "Use cases",
  workflow: "Workflow fit",
};

export function MemoDiagramSection({
  variant,
  src,
  alt,
  sectionAriaLabel,
  title,
  titleId,
  titleMaxWidthClass,
}: Props) {
  const hasTitle = Boolean(title && titleId);

  return (
    <section
      className="w-full"
      aria-label={hasTitle ? undefined : (sectionAriaLabel ?? defaultSectionAria[variant])}
      aria-labelledby={hasTitle ? titleId : undefined}
    >
      {hasTitle ? (
        <SectionHeading id={titleId!} title={title!} titleMaxWidthClass={titleMaxWidthClass} />
      ) : null}

      <figure className="m-0 overflow-hidden rounded-[28px] border border-[rgba(46,63,81,0.94)] border-r-memo-stroke-warm bg-black/20 shadow-memo-elev sm:rounded-[34px] lg:rounded-shell">
        <div className={`relative w-full ${aspectClass[variant]}`}>
          {/* eslint-disable-next-line @next/next/no-img-element -- SVG diagrams; next/image SVG handling is unnecessary here */}
          <img
            src={src}
            alt={alt}
            className="absolute inset-0 h-full w-full object-contain object-center"
            loading={variant === "usecase" ? "eager" : "lazy"}
            decoding="async"
          />
        </div>
      </figure>
    </section>
  );
}
