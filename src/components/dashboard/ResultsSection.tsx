import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";

const resultTabs = [
  {
    id: "accounts",
    title: "Accounts",
    description: "Identified target accounts will appear here.",
  },
  {
    id: "contacts",
    title: "Contacts",
    description: "Discovered decision-makers will appear here.",
  },
  {
    id: "research",
    title: "Research",
    description: "Company insights and trigger events will appear here.",
  },
  {
    id: "email",
    title: "Generated Email",
    description: "Personalized outbound copy will appear here.",
  },
] as const;

function EmptyState({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex min-h-[140px] flex-col items-center justify-center rounded-lg border border-dashed border-slate-200 bg-slate-50/50 px-4 py-8 text-center">
      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-5"
          aria-hidden
        >
          <path
            fillRule="evenodd"
            d="M10 2a6 6 0 00-6 6c0 1.887-.454 3.665-1.257 5.234a.75.75 0 00.515 1.076 32.91 32.91 0 003.256.508 3.5 3.5 0 006.972 0 32.904 32.904 0 003.256-.508.75.75 0 00.515-1.076A11.448 11.448 0 0116 8a6 6 0 00-6-6zM8.05 14.943l-.066-.002-.066.002a28.416 28.416 0 00-1.053-.465 9.135 9.135 0 01-1.458-1.102 8.963 8.963 0 01-2.458-2.458 9.135 9.135 0 01-1.102-1.458 28.416 28.416 0 00-.465-1.053l-.002-.066.002-.066a28.416 28.416 0 00.465-1.053 9.135 9.135 0 011.102-1.458 8.963 8.963 0 012.458-2.458 9.135 9.135 0 011.458-1.102 28.416 28.416 0 001.053-.465l.066-.002.066.002a28.416 28.416 0 001.053.465 9.135 9.135 0 011.458 1.102 8.963 8.963 0 012.458 2.458 9.135 9.135 0 011.102 1.458 28.416 28.416 0 00.465 1.053l.002.066-.002.066a28.416 28.416 0 00-.465 1.053 9.135 9.135 0 01-1.102 1.458 8.963 8.963 0 01-2.458 2.458 9.135 9.135 0 01-1.458 1.102 28.416 28.416 0 00-1.053.465z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <p className="text-sm font-medium text-slate-700">{title}</p>
      <p className="mt-1 max-w-xs text-xs text-slate-500">{description}</p>
    </div>
  );
}

export function ResultsSection() {
  return (
    <Card>
      <CardHeader>
        <SectionHeader
          title="Results"
          description="Output from each AI workflow step will be displayed here once the pipeline runs."
        />
      </CardHeader>

      <CardContent>
        <div className="grid gap-4 sm:grid-cols-2">
          {resultTabs.map((tab) => (
            <EmptyState key={tab.id} title={tab.title} description={tab.description} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
