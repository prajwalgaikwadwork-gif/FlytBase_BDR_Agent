# FlytBase Outbound BDR Agent

AI-powered outbound BDR dashboard built for the **FlytBase Hiring Hackathon**.


## Workflow Architecture

```mermaid
flowchart TD

A([Campaign Brief]) --> B[Brief Interpreter]

B --> C[Extract Requirements]
C --> C1[Target Vertical]
C --> C2[Reference Account]
C --> C3[Geography]
C --> C4[Target Commodities]
C --> C5[Target Contacts]
C --> C6[Conversion Goal]

C --> D[Structured Campaign Object]

D --> E[Account Discovery Agent]

E --> F{Account Matches ICP?}

F -- Yes --> H[Evidence Validation]
F -- No --> G[Reject Account]

H --> I{Public Evidence Available?}

I -- Yes --> K[Qualified Account]
I -- No --> J[Reject Account]

K --> L[Contact Discovery Agent]

L --> M{Target Role Verified?}

M -- Yes --> O[Verified Contact]
M -- No --> N[Reject Contact]

O --> P[Company Research]

P --> Q[Evidence-Based Insights]

Q --> R[Personalized Outreach Generator]

R --> S[Generate Email Draft]

S --> T[Attach Evidence Sources]

T --> U[Results Dashboard]

U --> V([Human Review])
```
## Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **Responsive UI**

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   ├── health/route.ts      # Health check endpoint
│   │   └── workflow/route.ts    # Placeholder for AI workflow API
│   ├── globals.css
│   ├── layout.tsx               # Root layout with header/footer
│   └── page.tsx                 # Dashboard home page
├── components/
│   ├── dashboard/
│   │   ├── CampaignBrief.tsx    # Target vertical & reference company
│   │   ├── AIWorkflow.tsx       # 4-step workflow pipeline
│   │   ├── ResultsSection.tsx   # Results display area
│   │   └── DashboardHeader.tsx
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── ui/                      # Reusable UI primitives
├── constants/
│   └── workflow.ts              # App constants & initial workflow steps
├── lib/
│   └── utils.ts                 # Utility helpers (cn)
└── types/
    └── index.ts                 # Shared TypeScript types
```

## Dashboard Sections

1. **Campaign Brief** — Target Vertical, Reference Company
2. **AI Workflow** — Account Identification, Contact Discovery, Company Research, Personalized Email Generator
3. **Results** — Placeholder panels for workflow output

## Next Steps

- Connect AI agents to `/api/workflow`
- Implement state management for workflow execution
- Populate Results section with live data
- Add loading/error states per workflow step

## Scripts

| Command       | Description              |
|---------------|--------------------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build       |
| `npm run start` | Start production server |
| `npm run lint`  | Run ESLint             |
