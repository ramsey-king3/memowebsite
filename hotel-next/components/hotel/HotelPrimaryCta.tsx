type HotelPrimaryCtaProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: "hero" | "section";
};

const base =
  "inline-flex items-center justify-center text-center font-semibold tracking-[-0.01em] text-memo-text no-underline transition-[transform,border-color,box-shadow] duration-200 ease-out motion-reduce:transition-none";

const heroStyles =
  "rounded-full border border-[rgba(106,61,31,0.9)] bg-gradient-to-br from-[rgba(10,19,29,0.98)] to-[rgba(8,13,20,0.99)] px-[34px] py-[18px] text-[clamp(1.176rem,1.44vw,1.296rem)] shadow-[0_0_0_1px_rgba(255,122,26,0.26),0_14px_36px_rgba(0,0,0,0.28)] hover:-translate-y-px hover:border-[rgba(255,122,26,0.95)] hover:shadow-[0_0_0_1px_rgba(255,122,26,0.5),0_16px_44px_rgba(0,0,0,0.34)] focus-visible:shadow-[0_0_0_2px_rgba(255,122,26,0.65),0_16px_44px_rgba(0,0,0,0.34)]";

const sectionStyles =
  "gap-2.5 rounded-[26px] border border-[rgba(106,61,31,0.9)] bg-gradient-to-br from-[rgba(10,19,29,0.98)] to-[rgba(8,13,20,0.99)] px-7 py-3.5 text-[clamp(0.98rem,1.2vw,1.05rem)] tracking-[0.01em] shadow-[0_0_0_1px_rgba(255,122,26,0.26),0_14px_36px_rgba(0,0,0,0.28)] hover:-translate-y-px hover:border-[rgba(255,122,26,0.95)] hover:text-[#f7faff] hover:shadow-[0_0_0_1px_rgba(255,122,26,0.5),0_16px_44px_rgba(0,0,0,0.34)] focus-visible:shadow-[0_0_0_2px_rgba(255,122,26,0.65),0_16px_44px_rgba(0,0,0,0.34)]";

export function HotelPrimaryCta({
  href,
  children,
  className = "",
  variant = "hero",
}: HotelPrimaryCtaProps) {
  const styles = variant === "section" ? sectionStyles : heroStyles;

  return (
    <a href={href} className={`${base} ${styles} ${className}`.trim()}>
      {variant === "section" ? (
        <>
          <span
            className="h-3 w-3 shrink-0 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,176,109,0.9),rgba(255,122,26,0.9))] shadow-[0_0_0_1px_rgba(255,122,26,0.22)]"
            aria-hidden
          />
          {children}
        </>
      ) : (
        children
      )}
    </a>
  );
}
