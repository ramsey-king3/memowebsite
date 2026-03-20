type Props = {
  variant: "usecase" | "workflow";
  src: string;
  alt: string;
};

const aspectClass = {
  usecase: "aspect-[1600/1500]",
  workflow: "aspect-[1600/940]",
};

export function HotelDiagramSection({ variant, src, alt }: Props) {
  return (
    <section
      className="w-full"
      aria-label={variant === "usecase" ? "Hotel use cases" : "Hotel workflow fit"}
    >
      <figure className="m-0 overflow-hidden rounded-[28px] border border-[rgba(46,63,81,0.94)] border-r-memo-stroke-warm bg-black/20 shadow-memo-elev sm:rounded-[34px] lg:rounded-shell">
        <div className={`relative w-full overflow-hidden ${aspectClass[variant]}`}>
          {/* eslint-disable-next-line @next/next/no-img-element -- SVG diagrams; next/image SVG handling is unnecessary here */}
          <img
            src={src}
            alt={alt}
            className="h-full w-full object-contain object-center"
            loading={variant === "usecase" ? "eager" : "lazy"}
            decoding="async"
          />
        </div>
      </figure>
    </section>
  );
}
