import { ArrowUp, ArrowDown } from 'lucide-react';
import { cn } from "@/lib/utils";

interface KpiCardProps {
  title: string;
  value: string;
  change: number;
  trend: "up" | "down";
  icon: React.ReactNode;
  prefix?: string;
  suffix?: string;
  description?: string;
}

export default function KpiCard({
  title,
  value,
  change,
  trend,
  icon,
  description,
}: KpiCardProps) {
  const isPositive = trend === "up";
  const changeAbs = Math.abs(change);

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-all duration-200 group relative overflow-hidden">
      {/* Subtle gradient accent */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-indigo-50 to-transparent rounded-bl-full opacity-60 group-hover:opacity-100 transition-opacity" />

      <div className="relative">
        <div className="flex items-start justify-between mb-3">
          <div className="p-2.5 rounded-xl bg-indigo-50 text-indigo-600">
            {icon}
          </div>
          <div
            className={cn(
              "flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-full",
              isPositive
                ? "bg-emerald-50 text-emerald-600"
                : "bg-red-50 text-red-500"
            )}
          >
            {isPositive ? (
              <ArrowUp className="w-3 h-3" />
            ) : (
              <ArrowDown className="w-3 h-3" />
            )}
            {changeAbs.toFixed(1)}%
          </div>
        </div>

        <p className="text-2xl font-bold text-slate-800 mb-1">{value}</p>
        <p className="text-sm font-medium text-slate-500">{title}</p>
        {description && (
          <p className="text-xs text-slate-400 mt-1">{description}</p>
        )}
      </div>
    </div>
  );
}
