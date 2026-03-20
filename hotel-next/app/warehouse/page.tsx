import { MemoPageShell } from "@/components/shared/MemoPageShell";
import { WarehouseDiagramSection } from "@/components/warehouse/WarehouseDiagramSection";
import { WarehouseHero } from "@/components/warehouse/WarehouseHero";
import { WarehouseScheduleSection } from "@/components/warehouse/WarehouseScheduleSection";
import { WarehouseVisibilitySection } from "@/components/warehouse/WarehouseVisibilitySection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Memo for Warehouses",
  description:
    "Memo turns warehouse radio traffic into wall-to-wall operational visibility—bottlenecks, exceptions, and delays made measurable.",
};

export default function WarehousePage() {
  return (
    <MemoPageShell>
      <WarehouseHero />
      <WarehouseVisibilitySection />
      <WarehouseDiagramSection
        variant="usecase"
        src="/warehouse/warehouse-usecase-section.svg"
        alt="Diagram: where Memo drives clarity across warehouse and logistics operations"
        sectionAriaLabel="Warehouse use cases"
      />
      <WarehouseDiagramSection
        variant="workflow"
        src="/warehouse/warehouse-workflow-fit.svg"
        alt="Memo works inside the communication your teams already rely on — warehouse workflow loop"
        sectionAriaLabel="Warehouse workflow fit"
      />
      <WarehouseScheduleSection />
    </MemoPageShell>
  );
}
