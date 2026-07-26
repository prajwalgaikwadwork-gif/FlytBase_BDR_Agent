"use client";

import { useState, type ChangeEvent } from "react";
import type { CampaignBrief } from "@/types";
import { VERTICAL_SUGGESTIONS } from "@/constants/workflow";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { SectionHeader } from "@/components/ui/SectionHeader";

const initialBrief: CampaignBrief = {
  targetVertical: "",
  referenceCompany: "",
};

export function CampaignBriefSection() {
  const [brief, setBrief] = useState<CampaignBrief>(initialBrief);

  const handleChange = (field: keyof CampaignBrief) => (event: ChangeEvent<HTMLInputElement>) => {
    setBrief((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleReset = () => setBrief(initialBrief);

  const isValid = brief.targetVertical.trim() && brief.referenceCompany.trim();

  return (
    <Card>
      <CardHeader>
        <SectionHeader
          title="Campaign Brief"
          description="Define your target vertical and reference company to guide the AI workflow."
        />
      </CardHeader>

      <CardContent className="space-y-5">
        <Input
          label="Target Vertical"
          name="targetVertical"
          placeholder="e.g. Drone Operations, Agriculture, Infrastructure Inspection"
          value={brief.targetVertical}
          onChange={handleChange("targetVertical")}
          hint="Industry or use case you want to target for outbound."
        />

        <div className="flex flex-wrap gap-2">
          {VERTICAL_SUGGESTIONS.map((vertical) => (
            <button
              key={vertical}
              type="button"
              onClick={() => setBrief((prev) => ({ ...prev, targetVertical: vertical }))}
              className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600 transition-colors hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700"
            >
              {vertical}
            </button>
          ))}
        </div>

        <Input
          label="Reference Company"
          name="referenceCompany"
          placeholder="e.g. Acme Drone Services"
          value={brief.referenceCompany}
          onChange={handleChange("referenceCompany")}
          hint="A company that represents your ideal customer profile."
        />
      </CardContent>

      <CardFooter className="flex flex-col gap-3 sm:flex-row sm:justify-end">
        <Button variant="outline" onClick={handleReset}>
          Reset
        </Button>
        <Button disabled={!isValid} title={!isValid ? "Fill in both fields to continue" : undefined}>
          Save Brief
        </Button>
      </CardFooter>
    </Card>
  );
}
