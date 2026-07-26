import type { ReactNode } from "react";
import type { WorkflowStep } from "@/types";
import { Badge, formatStatusLabel, statusToBadgeVariant } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";

interface WorkflowSectionCardProps {
  step: WorkflowStep;
  children?: ReactNode;
  actionLabel?: string;
}

export function WorkflowSectionCard({
  step,
  children,
  actionLabel = "Run Step",
}: WorkflowSectionCardProps) {
  return (
    <Card>
      <CardHeader>
        <SectionHeader
          title={
            <span className="flex flex-wrap items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-indigo-600 text-xs font-bold text-white">
                {step.order}
              </span>
              {step.title}
              <Badge variant={statusToBadgeVariant(step.status)}>
                {formatStatusLabel(step.status)}
              </Badge>
            </span>
          }
          description={step.description}
          action={
            <Button variant="outline" size="sm" disabled>
              {actionLabel}
            </Button>
          }
        />
      </CardHeader>

      <CardContent>{children}</CardContent>

      <CardFooter>
        <p className="text-xs text-slate-500">
          AI agent integration for this step will be added in the next phase.
        </p>
      </CardFooter>
    </Card>
  );
}
