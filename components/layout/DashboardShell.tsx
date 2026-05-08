import Sidebar from "./Sidebar";
import TopNavbar from "./TopNavbar";

interface DashboardShellProps {
  children: React.ReactNode;
  title: string;
}

export default function DashboardShell({ children, title }: DashboardShellProps) {
  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden">
      {/* Sidebar — hidden on mobile */}
      <aside className="hidden md:flex flex-shrink-0">
        <Sidebar />
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <TopNavbar title={title} />
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
