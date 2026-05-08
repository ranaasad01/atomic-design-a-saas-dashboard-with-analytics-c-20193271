interface ChartCardProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  action?: React.ReactNode;
  className?: string;
}

export default function ChartCard({
  title,
  subtitle,
  children,
  action,
  className = "",
}: ChartCardProps) {
  return (
    <div className={"bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden " + className}>
      <div className="flex items-start justify-between px-5 pt-5 pb-2">
        <div>
          <h3 className="font-semibold text-slate-800 text-base">{title}</h3>
          {subtitle && (
            <p className="text-xs text-slate-400 mt-0.5">{subtitle}</p>
          )}
        </div>
        {action && <div>{action}</div>}
      </div>
      <div className="px-2 pb-4">{children}</div>
    </div>
  );
}
