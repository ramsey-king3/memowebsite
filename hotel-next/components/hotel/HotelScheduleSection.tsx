import { HotelPrimaryCta } from "./HotelPrimaryCta";

export function HotelScheduleSection() {
  return (
    <section
      id="schedule-time-to-speak"
      className="mx-auto w-full max-w-hotel-section"
      aria-label="Schedule a time to speak"
    >
      <div className="relative overflow-hidden rounded-[28px] border border-[rgba(46,63,81,0.96)] border-r-memo-stroke-warm shadow-memo sm:rounded-[34px] lg:rounded-shell">
        <div
          className="pointer-events-none absolute inset-0 z-0 memo-surface-grid opacity-[0.16]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -inset-20 z-0 memo-surface-glow"
          aria-hidden
        />
        <div
          className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_22%_24%,rgba(14,56,80,0.18),transparent_30%),radial-gradient(circle_at_86%_18%,rgba(255,122,26,0.09),transparent_24%),linear-gradient(160deg,rgba(9,17,26,0.96),rgba(6,10,16,0.98)_58%,rgba(7,12,19,0.99))]"
          aria-hidden
        />

        <div className="relative z-[1] px-6 py-8 text-center sm:px-10 sm:py-12 lg:px-[clamp(26px,4.5vw,62px)] lg:py-[clamp(26px,4.5vw,62px)]">
          <div
            className="mx-auto mb-4 h-0.5 w-14 rounded-full bg-memo-amber shadow-[0_0_0_1px_rgba(255,122,26,0.18)]"
            aria-hidden
          />
          <h2 className="m-0 text-[clamp(2.05rem,3.4vw,3.1rem)] font-semibold leading-[1.04] tracking-[-0.045em]">
            Schedule a time to speak
          </h2>
          <p className="mx-auto mt-4 max-w-[65ch] text-pretty text-[clamp(1.05rem,1.5vw,1.22rem)] leading-[1.65] text-memo-text-soft">
            Memo turns radio traffic into measurable operational insight across hotel operations.
          </p>
          <HotelPrimaryCta
            href="#schedule-time-to-speak"
            className="mt-7 sm:mt-8"
          >
            Schedule a time to speak
          </HotelPrimaryCta>
        </div>
      </div>
    </section>
  );
}
