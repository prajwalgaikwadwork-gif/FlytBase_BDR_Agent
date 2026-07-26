import { INITIAL_WORKFLOW_STEPS } from "@/constants/workflow";
import { WorkflowSectionCard } from "./WorkflowSectionCard";

const step = INITIAL_WORKFLOW_STEPS[1];

function PlaceholderPanel({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-lg border border-dashed border-slate-200 bg-slate-50/60 px-4 py-6 text-center">
      <p className="text-sm font-medium text-slate-700">{title}</p>
      <p className="mt-1 text-xs text-slate-500">{description}</p>
    </div>
  );
}

export function ContactDiscoverySection() {
  return (
    <WorkflowSectionCard step={step} actionLabel="Find Contacts">
      <div className="grid gap-4 sm:grid-cols-3">
        <PlaceholderPanel title="Decision Makers" description="C-level and VP contacts will appear here." />
        <PlaceholderPanel title="Champions" description="Operational champions will appear here." />
        <PlaceholderPanel title="Contact Details" description="Email and LinkedIn profiles will appear here." />
      </div>
    </WorkflowSectionCard>
  );
}
