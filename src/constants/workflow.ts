import type { WorkflowStep } from "@/types";

export const APP_NAME = "FlytBase Outbound BDR Agent";

export const APP_DESCRIPTION =
  "AI-powered outbound BDR workflow for account identification, contact discovery, research, and personalized outreach.";

export const INITIAL_WORKFLOW_STEPS: WorkflowStep[] = [
  {
    id: "account-identification",
    title: "Account Identification",
    description: "Identify high-fit target accounts based on your campaign brief and ICP criteria.",
    status: "idle",
    order: 1,
  },
  {
    id: "contact-discovery",
    title: "Contact Discovery",
    description: "Find decision-makers and champions at identified accounts.",
    status: "idle",
    order: 2,
  },
  {
    id: "company-research",
    title: "Company Research",
    description: "Gather firmographic data, recent news, and trigger events for personalization.",
    status: "idle",
    order: 3,
  },
  {
    id: "email-generator",
    title: "Personalized Email Generator",
    description: "Draft tailored outbound emails using research insights and contact context.",
    status: "idle",
    order: 4,
  },
];

export const VERTICAL_SUGGESTIONS = [
  "Drone Operations",
  "Agriculture & Precision Farming",
  "Infrastructure Inspection",
  "Logistics & Delivery",
  "Public Safety",
  "Energy & Utilities",
] as const;
