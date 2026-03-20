import { HotelPrimaryCta } from "@/components/hotel/HotelPrimaryCta";
import { ProofChips } from "@/components/hotel/ProofChips";

import { WAREHOUSE_SCHEDULE_URL } from "./warehouseScheduleUrl";

const proofChips = [
  { label: "Your existing radios" },
  { label: "Rapid deployment" },
  { label: "Fully on-prem" },
];

const shellRadius = "rounded-[28px] sm:rounded-[34px] lg:rounded-shell";

export function WarehouseHero() {
  return (
    <section
      className={`relative isolate border border-[rgba(46,63,81,0.96)] border-r-memo-stroke-warm shadow-memo ${shellRadius}`}
      aria-labelledby="wh-hero-title"
    >
      <div
        className={`pointer-events-none absolute inset-0 -z-10 ${shellRadius} overflow-hidden`}
        aria-hidden
      >
        <div className="memo-surface-grid absolute inset-0 opacity-[0.18]" />
        <div className="memo-surface-glow absolute -inset-20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_24%,rgba(14,56,80,0.18),transparent_30%),radial-gradient(circle_at_86%_18%,rgba(255,122,26,0.09),transparent_24%),linear-gradient(160deg,rgba(9,17,26,0.96),rgba(6,10,16,0.98)_58%,rgba(7,12,19,0.99))]" />
      </div>

      <div
        className="pointer-events-none absolute left-6 right-6 top-6 hidden h-px bg-[rgba(21,33,47,0.35)] md:left-[4.5rem] md:right-[4.5rem] md:top-24 md:block xl:left-[72px] xl:right-[72px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-6 left-6 right-6 hidden h-px bg-[rgba(21,33,47,0.35)] md:bottom-[5.75rem] md:left-[4.5rem] md:right-[4.5rem] md:block xl:left-[72px] xl:right-[72px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-6 top-6 hidden h-0.5 w-16 rounded-full bg-memo-amber opacity-[0.32] md:left-[4.5rem] md:top-24 md:block xl:left-[72px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-[5.75rem] right-[5.5rem] hidden h-0.5 w-40 rounded-full bg-memo-amber-soft opacity-[0.32] lg:block"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-[62.5%] top-36 hidden w-px opacity-40 xl:block xl:bottom-[7.75rem] xl:top-36"
        style={{ background: "rgba(21, 33, 47, 0.88)" }}
        aria-hidden
      />

      <div
        className={`relative z-[1] mx-auto flex w-full min-w-0 max-w-5xl flex-col items-center px-4 py-10 text-center sm:px-8 sm:py-12 md:py-14 lg:px-[72px] lg:py-[clamp(2.5rem,5vw,4.5rem)] xl:min-h-[min(68dvh,780px)] xl:justify-center xl:py-[clamp(3rem,6vw,4.5rem)]`}
      >
        <div className="flex w-full min-w-0 flex-col items-center">
          <div
            className="mb-6 h-0.5 w-16 shrink-0 rounded-full bg-memo-amber shadow-[0_0_0_1px_rgba(255,122,26,0.18)] sm:mb-7"
            aria-hidden
          />
          <h1
            id="wh-hero-title"
            className="m-0 w-full min-w-0 max-w-[min(100%,36rem)] text-balance sm:max-w-[44rem] md:max-w-[50rem] lg:max-w-[54rem]"
          >
            <span className="block text-[clamp(1.65rem,calc(1rem+3.25vw),3.35rem)] font-semibold leading-[1.06] tracking-[-0.045em] sm:leading-[1.04]">
              Warehouse radio traffic signals bottlenecks, exceptions, and delays.
            </span>
            <span className="mt-3 block text-pretty text-[clamp(1.02rem,calc(0.82rem+1.25vw),1.98rem)] font-bold leading-snug tracking-[-0.02em] text-memo-orange sm:mt-4 sm:leading-tight">
              Memo turns that traffic into wall-to-wall operational visibility.
            </span>
          </h1>

          <HotelPrimaryCta
            href={WAREHOUSE_SCHEDULE_URL}
            className="mt-10 w-full max-w-md sm:mt-12 sm:w-auto md:mt-14"
          >
            Schedule a time to speak
          </HotelPrimaryCta>

          <ProofChips chips={proofChips} />
        </div>
      </div>
    </section>
  );
}
