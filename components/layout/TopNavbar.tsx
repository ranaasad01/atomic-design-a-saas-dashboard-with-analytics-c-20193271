"use client";

import { useState } from "react";
import { Bell, Search, Menu, X } from 'lucide-react';
import MobileSidebarDrawer from "./MobileSidebarDrawer";

interface TopNavbarProps {
  title: string;
}

export default function TopNavbar({ title }: TopNavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);

  const notifications = [
    { id: 1, text: "New enterprise signup: Iris Nguyen", time: "2m ago", unread: true },
    { id: 2, text: "Revenue milestone: $124K reached", time: "1h ago", unread: true },
    { id: 3, text: "Churn alert: Frank Lee cancelled", time: "3h ago", unread: false },
    { id: 4, text: "Monthly report is ready", time: "1d ago", unread: false },
  ];

  return (
    <>
      <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 md:px-6 sticky top-0 z-30">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5 text-slate-600" />
          </button>
          <h1 className="text-lg font-semibold text-slate-800">{title}</h1>
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          <div className="hidden md:flex items-center gap-2 bg-slate-100 rounded-lg px-3 py-2 w-56">
            <Search className="w-4 h-4 text-slate-400 flex-shrink-0" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent text-sm text-slate-600 placeholder-slate-400 outline-none w-full"
            />
          </div>

          <div className="relative">
            <button
              onClick={() => setNotifOpen(!notifOpen)}
              className="relative p-2 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Notifications"
            >
              <Bell className="w-5 h-5 text-slate-600" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-indigo-500 rounded-full" />
            </button>

            {notifOpen && (
              <div className="absolute right-0 top-12 w-80 bg-white rounded-xl shadow-xl border border-slate-200 z-50 overflow-hidden">
                <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100">
                  <span className="font-semibold text-slate-800 text-sm">Notifications</span>
                  <button onClick={() => setNotifOpen(false)}>
                    <X className="w-4 h-4 text-slate-400" />
                  </button>
                </div>
                <ul>
                  {notifications.map((n) => (
                    <li
                      key={n.id}
                      className={n.unread
                        ? "px-4 py-3 border-b border-slate-50 hover:bg-slate-50 cursor-pointer transition-colors bg-indigo-50/50"
                        : "px-4 py-3 border-b border-slate-50 hover:bg-slate-50 cursor-pointer transition-colors"}
                    >
                      <p className="text-sm text-slate-700">{n.text}</p>
                      <p className="text-xs text-slate-400 mt-0.5">{n.time}</p>
                    </li>
                  ))}
                </ul>
                <div className="px-4 py-2.5 text-center">
                  <button className="text-xs text-indigo-600 font-medium hover:underline">
                    View all notifications
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="flex items-center gap-2 cursor-pointer group">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-xs font-bold text-white shadow-sm">
              JD
            </div>
            <div className="hidden md:block">
              <p className="text-sm font-medium text-slate-700 leading-none">Jane Doe</p>
              <p className="text-xs text-slate-400 mt-0.5">Admin</p>
            </div>
          </div>
        </div>
      </header>

      <MobileSidebarDrawer open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
