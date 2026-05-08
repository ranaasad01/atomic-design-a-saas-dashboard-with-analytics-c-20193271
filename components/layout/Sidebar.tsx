"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Layout, Activity, Users, Star, Settings, Sparkles, ChevronDown, Circle } from 'lucide-react';
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/dashboard", label: "Overview", icon: Layout },
  { href: "/analytics", label: "Analytics", icon: Activity },
  { href: "/users", label: "Users", icon: Users },
  { href: "/revenue", label: "Revenue", icon: Star },
  { href: "/settings", label: "Settings", icon: Settings },
];

const recentProjects = [
  { name: "Q4 Campaign", color: "#6366f1" },
  { name: "Product Launch", color: "#8b5cf6" },
  { name: "User Research", color: "#a78bfa" },
];

interface SidebarProps {
  onClose?: () => void;
}

export default function Sidebar({ onClose }: SidebarProps) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col h-full bg-[#1e1b4b] text-white w-64">
      {/* Logo */}
      <div className="flex items-center gap-3 px-6 py-5 border-b border-white/10">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-400 to-violet-500 flex items-center justify-center shadow-lg">
          <Sparkles className="w-4 h-4 text-white" />
        </div>
        <span className="font-bold text-lg tracking-tight">Analytix</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 overflow-y-auto">
        <p className="text-xs font-semibold text-indigo-300/60 uppercase tracking-widest px-3 mb-2">
          Main Menu
        </p>
        <ul className="space-y-1">
          {navItems.map(({ href, label, icon: Icon }) => {
            const isActive = pathname === href || (href === "/dashboard" && pathname === "/");
            return (
              <li key={href}>
                <Link
                  href={href}
                  onClick={onClose}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150",
                    isActive
                      ? "bg-indigo-500/30 text-white shadow-sm border border-indigo-400/20"
                      : "text-indigo-200/70 hover:bg-white/5 hover:text-white"
                  )}
                >
                  <Icon className={cn("w-4 h-4 flex-shrink-0", isActive ? "text-indigo-300" : "")} />
                  {label}
                  {isActive && (
                    <span className="ml-auto w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="mt-6">
          <div className="flex items-center justify-between px-3 mb-2">
            <p className="text-xs font-semibold text-indigo-300/60 uppercase tracking-widest">
              Recent
            </p>
            <ChevronDown className="w-3 h-3 text-indigo-300/40" />
          </div>
          <ul className="space-y-1">
            {recentProjects.map((project) => (
              <li key={project.name}>
                <button className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-indigo-200/60 hover:text-white hover:bg-white/5 w-full transition-all">
                  <Circle className="w-2 h-2 flex-shrink-0" style={{ color: project.color, fill: project.color }} />
                  {project.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Bottom user section */}
      <div className="px-3 py-4 border-t border-white/10">
        <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer transition-all">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-400 to-violet-500 flex items-center justify-center text-xs font-bold flex-shrink-0">
            JD
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-white truncate">Jane Doe</p>
            <p className="text-xs text-indigo-300/60 truncate">jane@analytix.io</p>
          </div>
          <Settings className="w-3.5 h-3.5 text-indigo-300/40 flex-shrink-0" />
        </div>
      </div>
    </div>
  );
}
