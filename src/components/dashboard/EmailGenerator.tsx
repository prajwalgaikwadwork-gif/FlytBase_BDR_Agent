import { INITIAL_WORKFLOW_STEPS } from "@/constants/workflow";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { WorkflowSectionCard } from "./WorkflowSectionCard";

const step = INITIAL_WORKFLOW_STEPS[3];

export function EmailGeneratorSection() {
  return (
    <WorkflowSectionCard step={step} actionLabel="Generate Email">
      <div className="space-y-4">
        <Input
          label="Subject Line"
          name="emailSubject"
          readOnly
          placeholder="Personalized subject line will be generated here"
          className="bg-slate-50"
        />
        <Textarea
          label="Email Body"
          name="emailBody"
          rows={8}
          readOnly
          placeholder="AI-generated outbound email using account research and contact context will appear here."
          className="bg-slate-50"
        />
      </div>
    </WorkflowSectionCard>
  );
}
