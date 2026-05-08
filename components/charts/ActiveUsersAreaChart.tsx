"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
import { activeUsersTrend, churnTrend, multiSeriesData } from "@/lib/mock-data";

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-slate-200 rounded-xl shadow-lg p-3 text-sm">
        <p className="font-semibold text-slate-700 mb-1">{label}</p>
        {payload.map((entry: any) => (
          <p key={entry.name} style={{ color: entry.color }} className="text-xs">
            {entry.name}: {entry.value.toLocaleString()}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export default function ActiveUsersAreaChart() {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <AreaChart data={activeUsersTrend} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="usersGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#6366f1" stopOpacity={0.2} />
            <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="sessionsGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.15} />
            <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
        <XAxis dataKey="date" tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
        <YAxis tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} tickFormatter={(v) => (v / 1000).toFixed(1) + "K"} />
        <Tooltip content={<CustomTooltip />} />
        <Legend wrapperStyle={{ fontSize: "12px", paddingTop: "12px" }} iconType="circle" iconSize={8} />
        <Area type="monotone" dataKey="users" name="Active Users" stroke="#6366f1" strokeWidth={2.5} fill="url(#usersGrad)" />
        <Area type="monotone" dataKey="sessions" name="Sessions" stroke="#8b5cf6" strokeWidth={2.5} fill="url(#sessionsGrad)" />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export function ChurnTrendChart() {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <LineChart data={churnTrend} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
        <XAxis dataKey="month" tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
        <YAxis tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} tickFormatter={(v) => v + "%"} domain={[0, 5]} />
        <Tooltip content={<CustomTooltip />} />
        <Legend wrapperStyle={{ fontSize: "12px", paddingTop: "12px" }} iconType="circle" iconSize={8} />
        <Line type="monotone" dataKey="churn" name="Churn Rate %" stroke="#f43f5e" strokeWidth={2.5} dot={false} activeDot={{ r: 5 }} />
        <Line type="monotone" dataKey="retention" name="Retention %" stroke="#10b981" strokeWidth={2.5} dot={false} activeDot={{ r: 5 }} />
      </LineChart>
    </ResponsiveContainer>
  );
}

export function MultiSeriesLineChart({ metric }: { metric: string }) {
  const colorMap: Record<string, string> = {
    revenue: "#6366f1",
    users: "#8b5cf6",
    sessions: "#a78bfa",
    conversions: "#10b981",
  };
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={multiSeriesData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="metricGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={colorMap[metric] || "#6366f1"} stopOpacity={0.2} />
            <stop offset="95%" stopColor={colorMap[metric] || "#6366f1"} stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
        <XAxis dataKey="month" tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
        <YAxis tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
        <Tooltip content={<CustomTooltip />} />
        <Area type="monotone" dataKey={metric} stroke={colorMap[metric] || "#6366f1"} strokeWidth={2.5} fill="url(#metricGrad)" />
      </AreaChart>
    </ResponsiveContainer>
  );
}
