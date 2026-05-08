export const dynamic = "force-dynamic";
import DashboardShell from "@/components/layout/DashboardShell";
import KpiCardGrid from "@/components/dashboard/KpiCardGrid";
import { RecentTransactionsTable } from "@/components/dashboard/KpiCardGrid";
import ChartCard from "@/components/charts/ChartCard";
import RevenueLineChart, {
  UserSignupsBarChart,
  TrafficSourceDonutChart,
} from "@/components/charts/RevenueLineChart";
import ActiveUsersAreaChart from "@/components/charts/ActiveUsersAreaChart";

export default function Page() {
  return (
    <DashboardShell title="Dashboard Overview">
      {/* KPI Cards */}
      <section aria-label="Key performance indicators">
        <KpiCardGrid />
      </section>

      {/* Charts Row 1 */}
      <section className="grid grid-cols-1 xl:grid-cols-3 gap-4 mt-6" aria-label="Revenue and user charts">
        <div className="xl:col-span-2">
          <ChartCard
            title="Revenue & MRR"
            subtitle="Monthly revenue and recurring revenue over the past 12 months"
          >
            <RevenueLineChart />
          </ChartCard>
        </div>
        <div>
          <ChartCard
            title="Traffic Sources"
            subtitle="Breakdown of where your users come from"
          >
            <TrafficSourceDonutChart />
          </ChartCard>
        </div>
      </section>

      {/* Charts Row 2 */}
      <section className="grid grid-cols-1 xl:grid-cols-2 gap-4 mt-4" aria-label="User activity charts">
        <ChartCard
          title="Active Users & Sessions"
          subtitle="Daily active users and total sessions trend"
        >
          <ActiveUsersAreaChart />
        </ChartCard>
        <ChartCard
          title="User Signups vs Churn"
          subtitle="New signups and churned users per month"
        >
          <UserSignupsBarChart />
        </ChartCard>
      </section>

      {/* Recent Transactions */}
      <section className="mt-4" aria-label="Recent transactions">
        <ChartCard
          title="Recent Transactions"
          subtitle="Latest billing events across all plans"
          action={
            <a
              href="/revenue"
              className="text-xs font-medium text-indigo-600 hover:text-indigo-700 hover:underline"
            >
              View all →
            </a>
          }
        >
          <RecentTransactionsTable />
        </ChartCard>
      </section>
    </DashboardShell>
  );
}
