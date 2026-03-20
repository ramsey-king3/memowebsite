import { HotelInsightCard } from "@/components/hotel/HotelInsightCard";
import { HotelPrimaryCta } from "@/components/hotel/HotelPrimaryCta";
import { SectionHeading } from "@/components/hotel/SectionHeading";

import { IconWhExecution } from "./icons/IconWhExecution";
import { IconWhLeader } from "./icons/IconWhLeader";
import { IconWhRecord } from "./icons/IconWhRecord";
import { IconWhRepeating } from "./icons/IconWhRepeating";
import { WAREHOUSE_SCHEDULE_URL } from "./warehouseScheduleUrl";

const cards = [
  {
    variant: "neutral" as const,
    icon: <IconWhExecution />,
    title: "Execution issues are often visible on the radio before they show up in a report",
    body:
      "The first signs of congestion, delayed replenishment, short picks, dock slowdowns, and missed handoffs often surface over radio long before they appear in system data or supervisor review.",
  },
  {
    variant: "soft" as const,
    icon: <IconWhRecord />,
    title: "There is no clear record of how exceptions unfolded",
    body:
      "When orders miss cutoff, a trailer gets backed up, or a floor issue escalates, teams often cannot easily reconstruct when it was first called out, how it was routed, or where the response slowed down.",
  },
  {
    variant: "amber" as const,
    icon: <IconWhRepeating />,
    title: "The same coordination problems keep repeating across shifts",
    body:
      "Delayed replenishment, incomplete handoffs, picking confusion, dock misalignment, and recurring response gaps can happen every day — but without visibility into communication patterns, they stay buried in live radio traffic.",
  },
  {
    variant: "default" as const,
    icon: <IconWhLeader />,
    title: "Warehouse leaders are managing without visibility into frontline execution",
    body:
      "The radio is where floor reality lives, but most operations have no clean way to capture, review, or learn from the communication behind daily execution.",
  },
];

export function WarehouseVisibilitySection() {
  return (
    <section
      className="relative isolate mx-auto w-full max-w-hotel-section overflow-hidden rounded-[28px] border border-[rgba(46,63,81,0.94)] border-r-memo-stroke-warm shadow-memo-elev sm:rounded-[34px] lg:rounded-shell"
      aria-labelledby="wh-radio-title"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-30 opacity-[0.24] memo-surface-grid memo-dots-drift"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-[10px] -z-10 rounded-[calc(2.375rem-8px)] border border-white/[0.04] sm:inset-2.5 lg:rounded-[30px]"
        aria-hidden
      />
      <div
        className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_22%_24%,rgba(14,56,80,0.18),transparent_30%),radial-gradient(circle_at_86%_78%,rgba(255,122,26,0.08),transparent_26%),linear-gradient(160deg,rgba(9,17,26,0.96),rgba(6,10,16,0.98)_58%,rgba(7,12,19,0.99))]"
        aria-hidden
      />

      <div className="relative z-[1] px-[18px] py-[22px] sm:px-6 sm:py-8 lg:px-[clamp(30px,4vw,58px)] lg:py-[clamp(30px,4vw,58px)]">
        <SectionHeading
          id="wh-radio-title"
          title="Zero visibility into radio traffic slows warehouse execution"
          titleMaxWidthClass="max-w-[min(100%,38ch)] sm:max-w-[42ch] md:max-w-[48ch]"
        />

        <ul
          className="mt-5 grid list-none grid-cols-1 gap-[clamp(14px,1.8vw,18px)] p-0 lg:grid-cols-2 lg:items-stretch"
          aria-label="Operational visibility gaps"
        >
          {cards.map((c) => (
            <li key={c.title} className="flex min-h-0">
              <HotelInsightCard
                variant={c.variant}
                title={c.title}
                body={c.body}
                icon={c.icon}
                enableHoverGlowPulse
                stretchInGrid
              />
            </li>
          ))}
        </ul>

        <p className="mt-7 text-center sm:mt-8">
          <HotelPrimaryCta href={WAREHOUSE_SCHEDULE_URL} variant="section">
            Schedule a time to speak
          </HotelPrimaryCta>
        </p>
      </div>
    </section>
  );
}
