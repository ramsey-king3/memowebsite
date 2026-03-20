import { HotelInsightCard } from "./HotelInsightCard";
import { HotelPrimaryCta } from "./HotelPrimaryCta";
import { SectionHeading } from "./SectionHeading";
import { IconCoordination } from "./icons/IconCoordination";
import { IconGuestExperience } from "./icons/IconGuestExperience";
import { IconLeaderVisibility } from "./icons/IconLeaderVisibility";
import { IconServiceRecord } from "./icons/IconServiceRecord";

const cards = [
  {
    variant: "neutral" as const,
    icon: <IconGuestExperience />,
    title: "Guest experience issues are often caught too late",
    body:
      "The first warning signs of a poor stay usually surface over the radio—not in a dashboard. By the time management sees the problem, the guest experience may already be off track.",
  },
  {
    variant: "soft" as const,
    icon: <IconServiceRecord />,
    title: "There is no clear record of how service breakdowns unfolded",
    body:
      "When something goes wrong, hotels often cannot easily see when the issue was reported, how quickly teams responded, or where the handoff failed.",
  },
  {
    variant: "amber" as const,
    icon: <IconCoordination />,
    title: "The same coordination problems keep repeating",
    body:
      "Delays in room readiness, housekeeping dispatch, engineering response, and guest-request follow-through can happen across every shift—but without visibility into communication patterns, those issues stay buried.",
  },
  {
    variant: "default" as const,
    icon: <IconLeaderVisibility />,
    title: "Hotel leaders are managing without visibility into frontline reality",
    body:
      "The radio is where operational truth lives, but most hotels have no way to capture, review, or learn from it at scale.",
  },
];

export function HotelVisibilitySection() {
  return (
    <section
      className="relative isolate mx-auto w-full max-w-hotel-section overflow-hidden rounded-[28px] border border-[rgba(46,63,81,0.94)] border-r-memo-stroke-warm shadow-memo-elev sm:rounded-[34px] lg:rounded-shell"
      aria-labelledby="memo-hotel-title"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-30 opacity-[0.18] memo-surface-grid"
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
          id="memo-hotel-title"
          title="Zero visibility into your radio traffic harms your hotel"
        />

        <ul
          className="mt-5 grid list-none grid-cols-1 gap-[clamp(14px,1.8vw,18px)] p-0 lg:grid-cols-2"
          aria-label="Operational visibility gaps"
        >
          {cards.map((c) => (
            <li key={c.title}>
              <HotelInsightCard variant={c.variant} title={c.title} body={c.body} icon={c.icon} />
            </li>
          ))}
        </ul>

        <p className="mt-7 text-center sm:mt-8">
          <HotelPrimaryCta href="#schedule-time-to-speak" variant="section">
            Schedule a time to speak
          </HotelPrimaryCta>
        </p>
      </div>
    </section>
  );
}
