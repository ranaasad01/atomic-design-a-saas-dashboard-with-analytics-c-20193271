"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { revenueOverTime, userSignups, trafficSources } from "@/lib/mock-data";

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-slate-200 rounded-xl shadow-lg p-3 text-sm">
        <p className="font-semibold text-slate-700 mb-1">{label}</p>
        {payload.map((entry: any) => (
          <p key={entry.name} style={{ color: entry.color }} className="text-xs">
            {entry.name}: {typeof entry.value === "number" && entry.value > 1000 ? "$" + entry.value.toLocaleString() : entry.value}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const BarTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-slate-200 rounded-xl shadow-lg p-3 text-sm">
        <p className="font-semibold text-slate-700 mb-1">{label}</p>
        {payload.map((entry: any) => (
          <p key={entry.name} style={{ color: entry.color }} className="text-xs">
            {entry.name}: {entry.value}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const DonutTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-slate-200 rounded-xl shadow-lg p-3 text-sm">
        <p className="font-semibold text-slate-700">{payload[0].name}</p>
        <p className="text-xs text-slate-500">{payload[0].value}%</p>
      </div>
    );
  }
  return null;
};

export default function RevenueLineChart() {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <LineChart data={revenueOverTime} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
        <XAxis dataKey="month" tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
        <YAxis tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} tickFormatter={(v) => "$" + (v / 1000).toFixed(0) + "K"} />
        <Tooltip content={<CustomTooltip />} />
        <Legend wrapperStyle={{ fontSize: "12px", paddingTop: "12px" }} iconType="circle" iconSize={8} />
        <Line type="monotone" dataKey="revenue" name="Revenue" stroke="#6366f1" strokeWidth={2.5} dot={false} activeDot={{ r: 5, fill: "#6366f1" }} />
        <Line type="monotone" dataKey="mrr" name="MRR" stroke="#8b5cf6" strokeWidth={2.5} dot={false} activeDot={{ r: 5, fill: "#8b5cf6" }} strokeDasharray="5 3" />
      </LineChart>
    </ResponsiveContainer>
  );
}

export function UserSignupsBarChart() {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <BarChart data={userSignups} margin={{ top: 10, right: 20, left: 0, bottom: 0 }} barGap={4}>
        <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
        <XAxis dataKey="period" tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
        <YAxis tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
        <Tooltip content={<BarTooltip />} cursor={{ fill: "#f8fafc" }} />
        <Legend wrapperStyle={{ fontSize: "12px", paddingTop: "12px" }} iconType="circle" iconSize={8} />
        <Bar dataKey="signups" name="New Signups" fill="#6366f1" radius={[4, 4, 0, 0]} />
        <Bar dataKey="churned" name="Churned" fill="#c4b5fd" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}

export function TrafficSourceDonutChart() {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <PieChart>
        <Pie data={trafficSources} cx="50%" cy="45%" innerRadius={65} outerRadius={95} paddingAngle={3} dataKey="value">
          {trafficSources.map((entry, index) => (
            <Cell key={index} fill={entry.color} stroke="none" />
          ))}
        </Pie>
        <Tooltip content={<DonutTooltip />} />
        <Legend iconType="circle" iconSize={8} wrapperStyle={{ fontSize: "12px", paddingTop: "8px" }} />
      </PieChart>
    </ResponsiveContainer>
  );
}
