export type WorkflowStepStatus = "idle" | "pending" | "running" | "completed" | "error";

export interface CampaignBrief {
  targetVertical: string;
  referenceCompany: string;
}

export interface WorkflowStep {
  id: string;
  title: string;
  description: string;
  status: WorkflowStepStatus;
  order: number;
}

export interface AccountResult {
  id: string;
  companyName: string;
  industry: string;
  fitScore: number;
  website?: string;
}

export interface ContactResult {
  id: string;
  name: string;
  title: string;
  email?: string;
  linkedIn?: string;
}

export interface ResearchResult {
  id: string;
  summary: string;
  keyInsights: string[];
  recentNews?: string[];
}

export interface EmailResult {
  id: string;
  subject: string;
  body: string;
  contactName: string;
}

export interface BDRResults {
  accounts: AccountResult[];
  contacts: ContactResult[];
  research: ResearchResult | null;
  email: EmailResult | null;
}

export interface DashboardState {
  campaignBrief: CampaignBrief;
  workflowSteps: WorkflowStep[];
  results: BDRResults;
}
