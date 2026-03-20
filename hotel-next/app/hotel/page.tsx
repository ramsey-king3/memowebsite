import { MemoPageShell } from "@/components/shared/MemoPageShell";
import { HotelDiagramSection } from "@/components/hotel/HotelDiagramSection";
import { HotelHero } from "@/components/hotel/HotelHero";
import { HotelScheduleSection } from "@/components/hotel/HotelScheduleSection";
import { HotelVisibilitySection } from "@/components/hotel/HotelVisibilitySection";

export default function HotelPage() {
  return (
    <MemoPageShell>
      <HotelHero />
      <HotelVisibilitySection />
      <HotelDiagramSection
        variant="usecase"
        src="/hotel/hotel-usecase-section.svg"
        alt="Where Memo drives clarity across hotel operations"
      />
      <HotelDiagramSection
        variant="workflow"
        src="/hotel/hotel-workflow-fit.svg"
        alt="Memo workflow adapts to hotel operations"
      />
      <HotelScheduleSection />
    </MemoPageShell>
  );
}
