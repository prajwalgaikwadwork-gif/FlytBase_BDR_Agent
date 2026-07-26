export function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-center sm:flex-row sm:text-left sm:px-6 lg:px-8">
        <p className="text-xs text-slate-500">
          Built for the FlytBase Hiring Hackathon — AI workflow integration coming next.
        </p>
        <p className="text-xs text-slate-400">Next.js 15 · TypeScript · Tailwind CSS</p>
      </div>
    </footer>
  );
}
