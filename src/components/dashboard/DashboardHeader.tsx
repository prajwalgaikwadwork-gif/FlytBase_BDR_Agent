import { APP_DESCRIPTION, APP_NAME } from "@/constants/workflow";

export function DashboardHeader() {
  return (
    <section className="space-y-3">
      <div className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 ring-1 ring-indigo-600/20">
        Outbound BDR Agent
      </div>
      <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{APP_NAME}</h1>
      <p className="max-w-2xl text-base leading-relaxed text-slate-600">{APP_DESCRIPTION}</p>
    </section>
  );
}
