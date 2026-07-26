import { INITIAL_WORKFLOW_STEPS } from "@/constants/workflow";
import { WorkflowSectionCard } from "./WorkflowSectionCard";

const step = INITIAL_WORKFLOW_STEPS[0];

function PlaceholderPanel({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-lg border border-dashed border-slate-200 bg-slate-50/60 px-4 py-6 text-center">
      <p className="text-sm font-medium text-slate-700">{title}</p>
      <p className="mt-1 text-xs text-slate-500">{description}</p>
    </div>
  );
}

export function AccountIdentificationSection() {
  return (
    <WorkflowSectionCard step={step} actionLabel="Identify Accounts">
      <div className="grid gap-4 sm:grid-cols-3">
        <PlaceholderPanel title="ICP Match" description="Accounts matching your target vertical will appear here." />
        <PlaceholderPanel title="Fit Score" description="AI-ranked account fit scores will appear here." />
        <PlaceholderPanel title="Account List" description="Prioritized target accounts will appear here." />
      </div>
    </WorkflowSectionCard>
  );
}
