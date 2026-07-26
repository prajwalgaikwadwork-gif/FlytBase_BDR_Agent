import type { WorkflowStep as WorkflowStepType } from "@/types";
import { Badge, formatStatusLabel, statusToBadgeVariant } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

interface WorkflowStepProps {
  step: WorkflowStepType;
  isLast?: boolean;
}

const statusIconStyles: Record<WorkflowStepType["status"], string> = {
  idle: "border-slate-300 bg-white text-slate-400",
  pending: "border-amber-300 bg-amber-50 text-amber-600",
  running: "border-sky-400 bg-sky-50 text-sky-600",
  completed: "border-emerald-400 bg-emerald-50 text-emerald-600",
  error: "border-red-400 bg-red-50 text-red-600",
};

export function WorkflowStep({ step, isLast }: WorkflowStepProps) {
  return (
    <div className="relative flex gap-4">
      {!isLast && (
        <span
          aria-hidden
          className="absolute left-5 top-11 h-[calc(100%-1.5rem)] w-px bg-slate-200"
        />
      )}

      <div
        className={cn(
          "relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 text-sm font-semibold",
          statusIconStyles[step.status]
        )}
      >
        {step.order}
      </div>

      <div className="min-w-0 flex-1 pb-8">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="text-sm font-semibold text-slate-900">{step.title}</h3>
          <Badge variant={statusToBadgeVariant(step.status)}>
            {formatStatusLabel(step.status)}
          </Badge>
        </div>
        <p className="mt-1.5 text-sm leading-relaxed text-slate-500">{step.description}</p>
      </div>
    </div>
  );
}
