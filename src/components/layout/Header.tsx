import { APP_NAME } from "@/constants/workflow";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-sm font-bold text-white">
            FB
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900">{APP_NAME}</p>
            <p className="hidden text-xs text-slate-500 sm:block">FlytBase Hiring Hackathon</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="hidden rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700 ring-1 ring-emerald-600/20 sm:inline-flex">
            Frontend Ready
          </span>
        </div>
      </div>
    </header>
  );
}
