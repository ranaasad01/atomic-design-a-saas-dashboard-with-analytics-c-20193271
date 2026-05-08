export const kpiData = {
  revenue: { value: 124500, change: 12.5, trend: "up" as const },
  mrr: { value: 10375, change: 8.2, trend: "up" as const },
  activeUsers: { value: 3842, change: 5.1, trend: "up" as const },
  churnRate: { value: 2.4, change: -0.3, trend: "down" as const },
  arr: { value: 124500, change: 12.5, trend: "up" as const },
  newSignups: { value: 284, change: 18.7, trend: "up" as const },
};

export const revenueOverTime = [
  { month: "Jan", revenue: 72000, mrr: 6000 },
  { month: "Feb", revenue: 78500, mrr: 6542 },
  { month: "Mar", revenue: 81200, mrr: 6767 },
  { month: "Apr", revenue: 85000, mrr: 7083 },
  { month: "May", revenue: 90300, mrr: 7525 },
  { month: "Jun", revenue: 94800, mrr: 7900 },
  { month: "Jul", revenue: 99200, mrr: 8267 },
  { month: "Aug", revenue: 104500, mrr: 8708 },
  { month: "Sep", revenue: 109000, mrr: 9083 },
  { month: "Oct", revenue: 115200, mrr: 9600 },
  { month: "Nov", revenue: 120800, mrr: 10067 },
  { month: "Dec", revenue: 124500, mrr: 10375 },
];

export const userSignups = [
  { period: "Jan", signups: 120, churned: 18 },
  { period: "Feb", signups: 145, churned: 22 },
  { period: "Mar", signups: 132, churned: 15 },
  { period: "Apr", signups: 168, churned: 28 },
  { period: "May", signups: 190, churned: 20 },
  { period: "Jun", signups: 175, churned: 25 },
  { period: "Jul", signups: 210, churned: 18 },
  { period: "Aug", signups: 235, churned: 30 },
  { period: "Sep", signups: 220, churned: 22 },
  { period: "Oct", signups: 255, churned: 27 },
  { period: "Nov", signups: 270, churned: 24 },
  { period: "Dec", signups: 284, churned: 19 },
];

export const trafficSources = [
  { name: "Organic Search", value: 38, color: "#6366f1" },
  { name: "Direct", value: 24, color: "#8b5cf6" },
  { name: "Referral", value: 18, color: "#a78bfa" },
  { name: "Social Media", value: 12, color: "#c4b5fd" },
  { name: "Email", value: 8, color: "#ddd6fe" },
];

export const activeUsersTrend = [
  { date: "Jan", users: 2100, sessions: 4200 },
  { date: "Feb", users: 2350, sessions: 4800 },
  { date: "Mar", users: 2200, sessions: 4500 },
  { date: "Apr", users: 2600, sessions: 5200 },
  { date: "May", users: 2900, sessions: 5800 },
  { date: "Jun", users: 2750, sessions: 5500 },
  { date: "Jul", users: 3100, sessions: 6200 },
  { date: "Aug", users: 3350, sessions: 6700 },
  { date: "Sep", users: 3200, sessions: 6400 },
  { date: "Oct", users: 3550, sessions: 7100 },
  { date: "Nov", users: 3700, sessions: 7400 },
  { date: "Dec", users: 3842, sessions: 7684 },
];

export const recentTransactions = [
  { id: "TXN-001", user: "Alice Johnson", email: "alice@acme.com", plan: "Pro", amount: 99, status: "paid", date: "2024-12-28" },
  { id: "TXN-002", user: "Bob Martinez", email: "bob@techcorp.io", plan: "Enterprise", amount: 499, status: "paid", date: "2024-12-27" },
  { id: "TXN-003", user: "Carol White", email: "carol@startup.co", plan: "Starter", amount: 29, status: "paid", date: "2024-12-27" },
  { id: "TXN-004", user: "David Kim", email: "david@devhub.net", plan: "Pro", amount: 99, status: "failed", date: "2024-12-26" },
  { id: "TXN-005", user: "Eva Chen", email: "eva@cloudbase.io", plan: "Enterprise", amount: 499, status: "paid", date: "2024-12-26" },
  { id: "TXN-006", user: "Frank Lee", email: "frank@saasify.com", plan: "Pro", amount: 99, status: "refunded", date: "2024-12-25" },
  { id: "TXN-007", user: "Grace Park", email: "grace@nexus.ai", plan: "Starter", amount: 29, status: "paid", date: "2024-12-25" },
  { id: "TXN-008", user: "Henry Brown", email: "henry@launchpad.co", plan: "Pro", amount: 99, status: "paid", date: "2024-12-24" },
];

export const users = [
  { id: "USR-001", name: "Alice Johnson", email: "alice@acme.com", plan: "Pro", status: "active", joined: "2024-01-15", mrr: 99, sessions: 142 },
  { id: "USR-002", name: "Bob Martinez", email: "bob@techcorp.io", plan: "Enterprise", status: "active", joined: "2024-02-03", mrr: 499, sessions: 287 },
  { id: "USR-003", name: "Carol White", email: "carol@startup.co", plan: "Starter", status: "active", joined: "2024-03-22", mrr: 29, sessions: 56 },
  { id: "USR-004", name: "David Kim", email: "david@devhub.net", plan: "Pro", status: "inactive", joined: "2024-04-10", mrr: 99, sessions: 12 },
  { id: "USR-005", name: "Eva Chen", email: "eva@cloudbase.io", plan: "Enterprise", status: "active", joined: "2024-05-01", mrr: 499, sessions: 334 },
  { id: "USR-006", name: "Frank Lee", email: "frank@saasify.com", plan: "Pro", status: "churned", joined: "2024-06-18", mrr: 0, sessions: 0 },
  { id: "USR-007", name: "Grace Park", email: "grace@nexus.ai", plan: "Starter", status: "active", joined: "2024-07-05", mrr: 29, sessions: 78 },
  { id: "USR-008", name: "Henry Brown", email: "henry@launchpad.co", plan: "Pro", status: "active", joined: "2024-08-12", mrr: 99, sessions: 195 },
  { id: "USR-009", name: "Iris Nguyen", email: "iris@pixelcraft.io", plan: "Enterprise", status: "active", joined: "2024-09-20", mrr: 499, sessions: 412 },
  { id: "USR-010", name: "Jack Wilson", email: "jack@buildfast.co", plan: "Starter", status: "trial", joined: "2024-12-01", mrr: 0, sessions: 23 },
];

export const revenueByPlan = [
  { name: "Starter", value: 12, color: "#a78bfa" },
  { name: "Pro", value: 45, color: "#6366f1" },
  { name: "Enterprise", value: 43, color: "#4f46e5" },
];

export const churnTrend = [
  { month: "Jan", churn: 3.2, retention: 96.8 },
  { month: "Feb", churn: 3.0, retention: 97.0 },
  { month: "Mar", churn: 2.8, retention: 97.2 },
  { month: "Apr", churn: 3.1, retention: 96.9 },
  { month: "May", churn: 2.9, retention: 97.1 },
  { month: "Jun", churn: 2.7, retention: 97.3 },
  { month: "Jul", churn: 2.6, retention: 97.4 },
  { month: "Aug", churn: 2.5, retention: 97.5 },
  { month: "Sep", churn: 2.6, retention: 97.4 },
  { month: "Oct", churn: 2.4, retention: 97.6 },
  { month: "Nov", churn: 2.5, retention: 97.5 },
  { month: "Dec", churn: 2.4, retention: 97.6 },
];

export const multiSeriesData = [
  { month: "Jan", revenue: 72000, users: 2100, sessions: 4200, conversions: 120 },
  { month: "Feb", revenue: 78500, users: 2350, sessions: 4800, conversions: 145 },
  { month: "Mar", revenue: 81200, users: 2200, sessions: 4500, conversions: 132 },
  { month: "Apr", revenue: 85000, users: 2600, sessions: 5200, conversions: 168 },
  { month: "May", revenue: 90300, users: 2900, sessions: 5800, conversions: 190 },
  { month: "Jun", revenue: 94800, users: 2750, sessions: 5500, conversions: 175 },
  { month: "Jul", revenue: 99200, users: 3100, sessions: 6200, conversions: 210 },
  { month: "Aug", revenue: 104500, users: 3350, sessions: 6700, conversions: 235 },
  { month: "Sep", revenue: 109000, users: 3200, sessions: 6400, conversions: 220 },
  { month: "Oct", revenue: 115200, users: 3550, sessions: 7100, conversions: 255 },
  { month: "Nov", revenue: 120800, users: 3700, sessions: 7400, conversions: 270 },
  { month: "Dec", revenue: 124500, users: 3842, sessions: 7684, conversions: 284 },
];

export const analyticsBreakdown = [
  { metric: "Page Views", thisMonth: 284500, lastMonth: 251200, change: 13.3 },
  { metric: "Unique Visitors", thisMonth: 48200, lastMonth: 42100, change: 14.5 },
  { metric: "Avg. Session Duration", thisMonth: 4.2, lastMonth: 3.8, change: 10.5 },
  { metric: "Bounce Rate", thisMonth: 32.1, lastMonth: 35.4, change: -9.3 },
  { metric: "Conversion Rate", thisMonth: 3.8, lastMonth: 3.2, change: 18.8 },
  { metric: "Revenue per User", thisMonth: 32.4, lastMonth: 29.8, change: 8.7 },
];
