import { MemoPageShell } from "@/components/shared/MemoPageShell";
import { MemoDiagramSection } from "@/components/shared/MemoDiagramSection";
import { DatacenterHero } from "@/components/datacenter/DatacenterHero";
import { DatacenterScheduleSection } from "@/components/datacenter/DatacenterScheduleSection";
import { DatacenterVisibilitySection } from "@/components/datacenter/DatacenterVisibilitySection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Memo for Data Centers",
  description:
    "Memo makes radio signals visible, reviewable, and actionable for mission-critical data center operations.",
};

export default function DatacenterPage() {
  return (
    <MemoPageShell>
      <DatacenterHero />
      <DatacenterVisibilitySection />
      <MemoDiagramSection
        variant="usecase"
        src="/datacenter/Datacenter-usecase-section.svg"
        alt="Where Memo drives clarity across mission-critical data center operations"
        sectionAriaLabel="Datacenter use cases"
      />
      <MemoDiagramSection
        variant="workflow"
        src="/datacenter/Datacenter-workflow-fit.svg"
        alt="Memo workflow fit visual in data center operations"
        sectionAriaLabel="Datacenter workflow fit"
      />
      <DatacenterScheduleSection />
    </MemoPageShell>
  );
}
