"use client";

import { X } from 'lucide-react';
import Sidebar from "./Sidebar";

interface MobileSidebarDrawerProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileSidebarDrawer({ open, onClose }: MobileSidebarDrawerProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="absolute left-0 top-0 h-full w-64 shadow-2xl animate-slide-in-left">
        <div className="relative h-full">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-1.5 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-4 h-4 text-white" />
          </button>
          <Sidebar onClose={onClose} />
        </div>
      </div>
    </div>
  );
}
