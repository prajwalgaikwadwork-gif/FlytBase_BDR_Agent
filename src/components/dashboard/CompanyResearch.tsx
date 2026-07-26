import { INITIAL_WORKFLOW_STEPS } from "@/constants/workflow";
import { Textarea } from "@/components/ui/Textarea";
import { WorkflowSectionCard } from "./WorkflowSectionCard";

const step = INITIAL_WORKFLOW_STEPS[2];

export function CompanyResearchSection() {
  return (
    <WorkflowSectionCard step={step} actionLabel="Run Research">
      <div className="space-y-4">
        <Textarea
          label="Research Notes Preview"
          name="researchPreview"
          rows={4}
          readOnly
          placeholder="Company overview, recent news, trigger events, and personalization hooks will appear here after AI research runs."
          className="bg-slate-50"
        />
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-slate-200 bg-white px-4 py-3">
            <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Firmographics</p>
            <p className="mt-1 text-sm text-slate-400">Industry, size, location — pending</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white px-4 py-3">
            <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Trigger Events</p>
            <p className="mt-1 text-sm text-slate-400">Funding, launches, hiring — pending</p>
          </div>
        </div>
      </div>
    </WorkflowSectionCard>
  );
}
