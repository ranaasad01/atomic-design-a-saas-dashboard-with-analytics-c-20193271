import { DollarSign, Users, TrendingDown, Activity } from 'lucide-react';
import KpiCard from "./KpiCard";
import { kpiData, recentTransactions, users } from "@/lib/mock-data";
import { formatCurrency, formatNumber } from "@/lib/utils";

// ---- RecentTransactionsTable ----
const statusStyles: Record<string, string> = {
  paid: "bg-emerald-50 text-emerald-700 border border-emerald-200",
  failed: "bg-red-50 text-red-600 border border-red-200",
  refunded: "bg-amber-50 text-amber-700 border border-amber-200",
};

export function RecentTransactionsTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-slate-100">
            <th className="text-left text-xs font-semibold text-slate-400 uppercase tracking-wider pb-3 px-4">Transaction</th>
            <th className="text-left text-xs font-semibold text-slate-400 uppercase tracking-wider pb-3 px-4 hidden md:table-cell">User</th>
            <th className="text-left text-xs font-semibold text-slate-400 uppercase tracking-wider pb-3 px-4 hidden lg:table-cell">Plan</th>
            <th className="text-left text-xs font-semibold text-slate-400 uppercase tracking-wider pb-3 px-4">Amount</th>
            <th className="text-left text-xs font-semibold text-slate-400 uppercase tracking-wider pb-3 px-4">Status</th>
            <th className="text-left text-xs font-semibold text-slate-400 uppercase tracking-wider pb-3 px-4 hidden sm:table-cell">Date</th>
          </tr>
        </thead>
        <tbody>
          {recentTransactions.map((txn) => (
            <tr key={txn.id} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
              <td className="py-3 px-4">
                <span className="font-mono text-xs text-indigo-600 font-medium">{txn.id}</span>
              </td>
              <td className="py-3 px-4 hidden md:table-cell">
                <div>
                  <p className="font-medium text-slate-700">{txn.user}</p>
                  <p className="text-xs text-slate-400">{txn.email}</p>
                </div>
              </td>
              <td className="py-3 px-4 hidden lg:table-cell">
                <span className="text-xs font-medium text-slate-600 bg-slate-100 px-2 py-1 rounded-full">{txn.plan}</span>
              </td>
              <td className="py-3 px-4">
                <span className="font-semibold text-slate-800">${txn.amount}</span>
              </td>
              <td className="py-3 px-4">
                <span className={"text-xs font-medium px-2.5 py-1 rounded-full capitalize " + (statusStyles[txn.status] || "")}>
                  {txn.status}
                </span>
              </td>
              <td className="py-3 px-4 hidden sm:table-cell">
                <span className="text-xs text-slate-400">{txn.date}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ---- UsersTable ----
const userStatusStyles: Record<string, string> = {
  active: "bg-emerald-50 text-emerald-700 border border-emerald-200",
  inactive: "bg-slate-100 text-slate-500 border border-slate-200",
  churned: "bg-red-50 text-red-600 border border-red-200",
  trial: "bg-amber-50 text-amber-700 border border-amber-200",
};

export function UsersTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-slate-100">
            <th className="text-left text-xs font-semibold text-slate-400 uppercase tracking-wider pb-3 px-4">User</th>
            <th className="text-left text-xs font-semibold text-slate-400 uppercase tracking-wider pb-3 px-4 hidden md:table-cell">Plan</th>
            <th className="text-left text-xs font-semibold text-slate-400 uppercase tracking-wider pb-3 px-4">Status</th>
            <th className="text-left text-xs font-semibold text-slate-400 uppercase tracking-wider pb-3 px-4 hidden lg:table-cell">MRR</th>
            <th className="text-left text-xs font-semibold text-slate-400 uppercase tracking-wider pb-3 px-4 hidden lg:table-cell">Sessions</th>
            <th className="text-left text-xs font-semibold text-slate-400 uppercase tracking-wider pb-3 px-4 hidden sm:table-cell">Joined</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
              <td className="py-3 px-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-400 to-violet-500 flex items-center justify-center text-xs font-bold text-white flex-shrink-0">
                    {user.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <p className="font-medium text-slate-700">{user.name}</p>
                    <p className="text-xs text-slate-400">{user.email}</p>
                  </div>
                </div>
              </td>
              <td className="py-3 px-4 hidden md:table-cell">
                <span className="text-xs font-medium text-slate-600 bg-slate-100 px-2 py-1 rounded-full">{user.plan}</span>
              </td>
              <td className="py-3 px-4">
                <span className={"text-xs font-medium px-2.5 py-1 rounded-full capitalize " + (userStatusStyles[user.status] || "")}>
                  {user.status}
                </span>
              </td>
              <td className="py-3 px-4 hidden lg:table-cell">
                <span className="font-semibold text-slate-800">{user.mrr > 0 ? "$" + user.mrr : "—"}</span>
              </td>
              <td className="py-3 px-4 hidden lg:table-cell">
                <span className="text-slate-600">{user.sessions}</span>
              </td>
              <td className="py-3 px-4 hidden sm:table-cell">
                <span className="text-xs text-slate-400">{user.joined}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function KpiCardGrid() {
  const cards = [
    {
      title: "Total Revenue",
      value: formatCurrency(kpiData.revenue.value),
      change: kpiData.revenue.change,
      trend: kpiData.revenue.trend,
      icon: <DollarSign className="w-5 h-5" />,
      description: "vs. last year",
    },
    {
      title: "Monthly Recurring Revenue",
      value: formatCurrency(kpiData.mrr.value),
      change: kpiData.mrr.change,
      trend: kpiData.mrr.trend,
      icon: <Activity className="w-5 h-5" />,
      description: "vs. last month",
    },
    {
      title: "Active Users",
      value: formatNumber(kpiData.activeUsers.value),
      change: kpiData.activeUsers.change,
      trend: kpiData.activeUsers.trend,
      icon: <Users className="w-5 h-5" />,
      description: "vs. last month",
    },
    {
      title: "Churn Rate",
      value: kpiData.churnRate.value.toFixed(1) + "%",
      change: Math.abs(kpiData.churnRate.change),
      trend: "down" as const,
      icon: <TrendingDown className="w-5 h-5" />,
      description: "improved this month",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      {cards.map((card) => (
        <KpiCard key={card.title} {...card} />
      ))}
    </div>
  );
}
