import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import type { WorkflowStepStatus } from "@/types";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "success" | "warning" | "info" | "muted";
  className?: string;
}

const variantStyles = {
  default: "bg-indigo-50 text-indigo-700 ring-indigo-600/20",
  success: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
  warning: "bg-amber-50 text-amber-700 ring-amber-600/20",
  info: "bg-sky-50 text-sky-700 ring-sky-600/20",
  muted: "bg-slate-100 text-slate-600 ring-slate-500/10",
};

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

export function statusToBadgeVariant(
  status: WorkflowStepStatus
): "default" | "success" | "warning" | "info" | "muted" {
  switch (status) {
    case "completed":
      return "success";
    case "running":
      return "info";
    case "pending":
      return "warning";
    case "error":
      return "warning";
    default:
      return "muted";
  }
}

export function formatStatusLabel(status: WorkflowStepStatus): string {
  return status.charAt(0).toUpperCase() + status.slice(1);
}
