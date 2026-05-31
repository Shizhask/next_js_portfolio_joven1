export const PageTitle = ({ title, subtitle }: { title: string; subtitle?: string }) => {
  return (
    <div className="mb-10">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{title}</h1>
      {subtitle && (
        <p className="mt-4 text-zinc-400 max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
      {children}
    </div>
  );
};