import type { BDRResults, CampaignBrief, WorkflowStep } from "@/types";
import { INITIAL_WORKFLOW_STEPS } from "@/constants/workflow";

export const emptyResults: BDRResults = {
  accounts: [],
  contacts: [],
  research: null,
  email: null,
};

export const emptyCampaignBrief: CampaignBrief = {
  targetVertical: "",
  referenceCompany: "",
};

export function createInitialWorkflowSteps(): WorkflowStep[] {
  return INITIAL_WORKFLOW_STEPS.map((step) => ({ ...step }));
}
