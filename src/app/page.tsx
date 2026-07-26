import {
  AccountIdentificationSection,
  CampaignBriefSection,
  CompanyResearchSection,
  ContactDiscoverySection,
  DashboardHeader,
  EmailGeneratorSection,
  ResultsSection,
} from "@/components/dashboard";
import { Button } from "@/components/ui/Button";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
      <div className="space-y-8">
        <DashboardHeader />

        <div className="flex justify-end">
          <Button variant="secondary" disabled>
            Run Full Workflow
          </Button>
        </div>

        <CampaignBriefSection />

        <div className="space-y-6">
          <AccountIdentificationSection />
          <ContactDiscoverySection />
          <CompanyResearchSection />
          <EmailGeneratorSection />
        </div>

        <ResultsSection />
      </div>
    </div>
  );
}
