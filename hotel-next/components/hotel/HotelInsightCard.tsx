import type { ReactNode } from "react";

export type HotelCardVariant = "default" | "neutral" | "soft" | "amber";

const shells: Record<
  HotelCardVariant,
  { border: string; accent: string; accentSoft: string; hoverBorder: string }
> = {
  default: {
    border: "border-[rgba(39,69,91,0.92)]",
    accent: "#1fe1ff",
    accentSoft: "rgba(31, 225, 255, 0.08)",
    hoverBorder: "hover:border-[rgba(125,230,255,0.6)]",
  },
  neutral: {
    border: "border-[rgba(39,69,91,0.92)]",
    accent: "#7de6ff",
    accentSoft: "rgba(125, 230, 255, 0.07)",
    hoverBorder: "hover:border-[rgba(125,230,255,0.6)]",
  },
  soft: {
    border: "border-[rgba(80,49,27,0.92)]",
    accent: "#ff8a2e",
    accentSoft: "rgba(255, 138, 46, 0.07)",
    hoverBorder: "hover:border-[rgba(125,230,255,0.6)]",
  },
  amber: {
    border: "border-[rgba(90,50,24,0.92)]",
    accent: "#ff7a1a",
    accentSoft: "rgba(255, 122, 26, 0.08)",
    hoverBorder: "hover:border-[rgba(255,138,46,0.55)]",
  },
};

type HotelInsightCardProps = {
  title: string;
  body: string;
  icon: ReactNode;
  variant?: HotelCardVariant;
  /** When true, adds a subtle pulsing glow under the card on hover. */
  enableHoverGlowPulse?: boolean;
  /** Fill the grid cell height (pair with a flex `li` in a stretched CSS grid row). */
  stretchInGrid?: boolean;
};

export function HotelInsightCard({
  title,
  body,
  icon,
  variant = "default",
  enableHoverGlowPulse = false,
  stretchInGrid = false,
}: HotelInsightCardProps) {
  const v = shells[variant];

  const stretchArticle =
    stretchInGrid ? " flex h-full min-h-0 w-full min-w-0 flex-1 flex-col" : "";
  const stretchInner = stretchInGrid ? " flex-1" : "";

  const article = (
    <article
      className={`relative z-[1] overflow-hidden rounded-card border p-[22px] shadow-card transition-[transform,border-color,box-shadow] duration-200 ease-out motion-reduce:transition-none md:hover:-translate-y-[3px] md:hover:shadow-card-hover ${v.border} ${v.hoverBorder} focus-within:border-[rgba(255,122,26,0.58)] focus-within:shadow-[0_0_0_2px_rgba(255,122,26,0.35),0_26px_70px_rgba(0,0,0,0.32)] max-md:px-[18px] max-md:pb-[18px] max-md:pt-5${stretchArticle}`}
      style={{
        backgroundImage: `radial-gradient(circle at 100% 0%, ${v.accentSoft}, transparent 42%), linear-gradient(145deg, rgba(10, 19, 29, 0.92), rgba(8, 13, 20, 0.97))`,
      }}
    >
      <div
        className="pointer-events-none absolute inset-2 rounded-[calc(1.625rem-8px)] border border-white/[0.04]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-[22px] top-[18px] h-0.5 w-[92px] rounded-full opacity-90 max-md:left-[18px] max-md:w-[74px]"
        style={{ backgroundColor: v.accent }}
        aria-hidden
      />
      <div
        className={`relative z-[1] mt-2.5 grid grid-cols-[40px_1fr] items-start gap-3.5 sm:grid-cols-[44px_1fr]${stretchInner}`}
      >
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-[rgba(35,56,74,0.92)] bg-gradient-to-br from-[rgba(9,18,27,0.98)] to-[rgba(9,16,22,0.98)] shadow-[0_0_0_1px_rgba(31,225,255,0.08)] sm:h-11 sm:w-11 sm:rounded-2xl"
          aria-hidden
        >
          {icon}
        </div>
        <div className="min-w-0">
          <h3 className="mb-2.5 text-[clamp(1.15rem,1.5vw,1.4rem)] font-semibold leading-tight tracking-[-0.03em]">
            {title}
          </h3>
          <p className="max-w-[62ch] text-[clamp(0.98rem,1.25vw,1.08rem)] leading-[1.52] text-memo-text">
            {body}
          </p>
        </div>
      </div>
    </article>
  );

  if (!enableHoverGlowPulse) {
    return article;
  }

  const wrapStretch = stretchInGrid ? " flex h-full min-h-0 w-full flex-col" : "";

  return (
    <div className={`memo-card-hover-wrap relative z-0 pb-3${wrapStretch}`}>
      <div
        className="memo-card-underglow"
        aria-hidden
        style={{
          background: `radial-gradient(ellipse at 50% 40%, ${v.accentSoft}, transparent 72%)`,
        }}
      />
      {article}
    </div>
  );
}
