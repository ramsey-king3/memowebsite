import { SectionHeading } from "@/components/hotel/SectionHeading";

const aspectClass = {
  usecase: "aspect-[1600/1500]",
  workflow: "aspect-[1600/940]",
} as const;

type Variant = keyof typeof aspectClass;

type Props = {
  variant: Variant;
  /** Public URL to the SVG (e.g. `/warehouse/warehouse-workflow-fit.svg`). */
  src: string;
  alt: string;
  sectionAriaLabel?: string;
  title?: string;
  titleId?: string;
  titleMaxWidthClass?: string;
};

/**
 * Warehouse diagrams: embedded with `<object>` so SVG-internal motion (dash flows, pulses)
 * runs; fluid width scales with the layout instead of a fixed 1600px strip + scroll.
 */
export function WarehouseDiagramSection({
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
      aria-label={hasTitle ? undefined : sectionAriaLabel}
      aria-labelledby={hasTitle ? titleId : undefined}
    >
      {hasTitle ? (
        <SectionHeading id={titleId!} title={title!} titleMaxWidthClass={titleMaxWidthClass} />
      ) : null}

      <figure className="memo-diagram-live relative m-0 overflow-hidden rounded-[28px] border border-[rgba(46,63,81,0.94)] border-r-memo-stroke-warm bg-black/25 shadow-memo-elev sm:rounded-[34px] lg:rounded-shell">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.22] memo-surface-grid memo-diagram-live-grid"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -inset-px rounded-[inherit] bg-gradient-to-br from-memo-cyan/15 via-transparent to-memo-amber/12 memo-diagram-live-sheen"
          aria-hidden
        />

        <div className={`relative z-[1] w-full ${aspectClass[variant]}`}>
          <object
            type="image/svg+xml"
            data={src}
            title={alt}
            aria-label={alt}
            className="absolute inset-0 block h-full w-full border-0"
          >
            {/* Fallback when <object> is unsupported */}
            {/* eslint-disable-next-line @next/next/no-img-element -- SVG diagram fallback */}
            <img src={src} alt={alt} className="h-full w-full object-contain object-center" />
          </object>
        </div>
      </figure>
    </section>
  );
}
