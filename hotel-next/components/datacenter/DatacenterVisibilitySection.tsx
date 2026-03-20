import { HotelInsightCard } from "@/components/hotel/HotelInsightCard";
import { HotelPrimaryCta } from "@/components/hotel/HotelPrimaryCta";
import { SectionHeading } from "@/components/hotel/SectionHeading";

import { DATACENTER_SCHEDULE_URL } from "./datacenterScheduleUrl";
import { IconDcEscalation } from "./icons/IconDcEscalation";
import { IconDcLeaderCoordination } from "./icons/IconDcLeaderCoordination";
import { IconDcRecord } from "./icons/IconDcRecord";
import { IconDcRepeating } from "./icons/IconDcRepeating";

const cards = [
  {
    variant: "soft" as const,
    icon: <IconDcEscalation />,
    title: "Critical issues are often escalated before leadership can see them",
    body:
      "The first signs of a facilities issue, security concern, access problem, or response delay often surface over radio, long before they appear in a report or formal incident review.",
  },
  {
    variant: "neutral" as const,
    icon: <IconDcRecord />,
    title: "There is no clear record of how incidents unfolded",
    body:
      "When an event occurs, operators often cannot easily reconstruct when it was first called out, how it was routed, who responded, or where coordination started to break down.",
  },
  {
    variant: "neutral" as const,
    icon: <IconDcRepeating />,
    title: "The same response and handoff problems keep repeating",
    body:
      "Delayed dispatch, incomplete callouts, vague updates, and inconsistent escalation patterns can happen across shifts, but without visibility into radio traffic, those breakdowns stay buried.",
  },
  {
    variant: "soft" as const,
    icon: <IconDcLeaderCoordination />,
    title: "Leaders are managing mission-critical operations without visibility into frontline coordination",
    body:
      "Power, cooling, security, and facility response may all be tightly monitored, but the communication layer behind human coordination is still largely invisible.",
  },
];

export function DatacenterVisibilitySection() {
  return (
    <section
      className="relative isolate mx-auto w-full max-w-hotel-section overflow-hidden rounded-[28px] border border-[rgba(46,63,81,0.94)] border-r-memo-stroke-warm shadow-memo-elev sm:rounded-[34px] lg:rounded-shell"
      aria-labelledby="dc-radio-title"
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
          id="dc-radio-title"
          title="Zero visibility into radio traffic creates avoidable risk in mission-critical operations"
          titleMaxWidthClass="max-w-[min(100%,38ch)] sm:max-w-[42ch] md:max-w-[48ch]"
        />

        <ul
          className="mt-5 grid list-none grid-cols-1 gap-[clamp(14px,1.8vw,18px)] p-0 lg:grid-cols-2"
          aria-label="Operational visibility gaps"
        >
          {cards.map((c) => (
            <li key={c.title}>
              <HotelInsightCard
                variant={c.variant}
                title={c.title}
                body={c.body}
                icon={c.icon}
                enableHoverGlowPulse
              />
            </li>
          ))}
        </ul>

        <p className="mt-7 text-center sm:mt-8">
          <HotelPrimaryCta href={DATACENTER_SCHEDULE_URL} variant="section">
            Schedule a time to speak
          </HotelPrimaryCta>
        </p>
      </div>
    </section>
  );
}
