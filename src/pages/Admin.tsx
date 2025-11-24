import { useMemo, useState } from "react";
import type { ServiceProgram, Client } from "@/data/admin";
import { projects } from "@/data/admin";
import { useAdmin } from "@/contexts/AdminContext";
import { ClientModal } from "@/components/admin/ClientModal";
import { MeetingModal } from "@/components/admin/MeetingModal";
import { ProgramModal } from "@/components/admin/ProgramModal";
import { TicketModal } from "@/components/admin/TicketModal";
import { ConfirmDialog } from "@/components/admin/ConfirmDialog";
import { StatsCard } from "@/components/admin/StatsCard";
import { ActivityFeed } from "@/components/admin/ActivityFeed";
import { QuickActions } from "@/components/admin/QuickActions";
import { RevenueChart } from "@/components/admin/RevenueChart";
import { ProjectsOverview } from "@/components/admin/ProjectsOverview";
import { LiveMetrics } from "@/components/admin/LiveMetrics";
import { RealTimeActivityFeed } from "@/components/admin/RealTimeActivityFeed";
import { EmptyState } from "@/components/admin/EmptyState";
import { ProjectCard } from "@/components/admin/ProjectCard";
import { ProjectDetailModal } from "@/components/admin/ProjectDetailModal";
import {
  Activity,
  ArrowRight,
  BarChart3,
  CalendarCheck,
  ChevronLeft,
  ChevronRight,
  FileText,
  GaugeCircle,
  Home,
  ShieldCheck,
  Users,
  Plus,
  Edit2,
  Trash2,
  Search,
  Download,
  TrendingUp,
  Zap,
  Clock,
  Target,
  FolderKanban,
} from "lucide-react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const healthBadge = {
  stable: "text-emerald-700 bg-emerald-100",
  watch: "text-amber-700 bg-amber-100",
  critical: "text-red-700 bg-red-100",
} as const;

const stageOrder: Array<ServiceProgram["stage"]> = ["Discover", "Stabilize", "Automate", "Scale"];

const stageCopy: Record<ServiceProgram["stage"], string> = {
  Discover: "Baseline telemetry, risk inventory, runbook debt",
  Stabilize: "Noise reduction, access governance, MTTR control",
  Automate: "Self-healing workflows & change orchestration",
  Scale: "Performance uplift, FinOps telemetry, expansion",
};

const navItems = [
  { key: "overview", label: "Overview", icon: Home },
  { key: "clients", label: "Clients", icon: Users },
  { key: "projects", label: "Projects", icon: FolderKanban },
  { key: "programs", label: "Programs", icon: Activity },
  { key: "meetings", label: "Meetings", icon: CalendarCheck },
  { key: "security", label: "Security", icon: ShieldCheck },
  { key: "analytics", label: "Analytics", icon: BarChart3 },
  { key: "forms", label: "Forms", icon: FileText },
] as const;

export default function Admin() {
  const adminData = useAdmin();
  const [selectedIndustry, setSelectedIndustry] = useState("All");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState<(typeof navItems)[number]["key"]>("overview");
  const [searchQuery, setSearchQuery] = useState("");
  const [projectStatusFilter, setProjectStatusFilter] = useState<string>("all");
  const [projectSearchQuery, setProjectSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState<any>(null);

  // Modal states
  const [clientModal, setClientModal] = useState<{ isOpen: boolean; mode: 'add' | 'edit'; client?: Client }>({ isOpen: false, mode: 'add' });
  const [meetingModal, setMeetingModal] = useState<{ isOpen: boolean; mode: 'add' | 'edit'; meeting?: any }>({ isOpen: false, mode: 'add' });
  const [programModal, setProgramModal] = useState<{ isOpen: boolean; mode: 'add' | 'edit'; program?: any }>({ isOpen: false, mode: 'add' });
  const [ticketModal, setTicketModal] = useState<{ isOpen: boolean; mode: 'add' | 'edit'; ticket?: any }>({ isOpen: false, mode: 'add' });
  const [confirmDialog, setConfirmDialog] = useState<{ isOpen: boolean; title: string; message: string; onConfirm: () => void }>({ isOpen: false, title: '', message: '', onConfirm: () => {} });

  const industries = useMemo(() => {
    const set = new Set(adminData.clients.map((client) => client.industry));
    return ["All", ...Array.from(set)];
  }, [adminData.clients]);

  const filteredClients = useMemo(() => {
    let result = adminData.clients;

    if (selectedIndustry !== "All") {
      result = result.filter((client) => client.industry === selectedIndustry);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter((client) =>
        client.name.toLowerCase().includes(query) ||
        client.industry.toLowerCase().includes(query) ||
        client.owners.some(owner => owner.toLowerCase().includes(query))
      );
    }

    return result;
  }, [selectedIndustry, searchQuery, adminData.clients]);

  const programsByStage = useMemo(() => {
    return stageOrder.map((stage) => ({
      stage,
      items: adminData.programs.filter((program) => program.stage === stage),
    }));
  }, [adminData.programs]);

  const filteredProjects = useMemo(() => {
    let result = projects;

    // Filter by status
    if (projectStatusFilter !== "all") {
      result = result.filter((project) => project.status === projectStatusFilter);
    }

    // Filter by search query
    if (projectSearchQuery.trim()) {
      const query = projectSearchQuery.toLowerCase();
      result = result.filter((project) =>
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.clientName.toLowerCase().includes(query) ||
        project.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    return result;
  }, [projectStatusFilter, projectSearchQuery]);

  const OverviewView = () => {
    // Map metrics to StatsCard props with beautiful icons and gradients
    const statsCardData = [
      {
        title: adminData.adminMetrics[0].label,
        value: adminData.adminMetrics[0].value,
        change: adminData.adminMetrics[0].change,
        trend: "up" as const,
        icon: Users,
        color: "text-blue-600",
        gradient: "from-blue-500 to-blue-600",
      },
      {
        title: adminData.adminMetrics[1].label,
        value: adminData.adminMetrics[1].value,
        change: adminData.adminMetrics[1].change,
        trend: "up" as const,
        icon: Zap,
        color: "text-purple-600",
        gradient: "from-purple-500 to-purple-600",
      },
      {
        title: adminData.adminMetrics[2].label,
        value: adminData.adminMetrics[2].value,
        change: adminData.adminMetrics[2].change,
        trend: "down" as const,
        icon: Clock,
        color: "text-green-600",
        gradient: "from-green-500 to-green-600",
      },
      {
        title: adminData.adminMetrics[3].label,
        value: adminData.adminMetrics[3].value,
        change: adminData.adminMetrics[3].change,
        trend: "neutral" as const,
        icon: Target,
        color: "text-orange-600",
        gradient: "from-orange-500 to-amber-600",
      },
    ];

    return (
      <div className="space-y-8">
        {/* Quick Actions - Now Prominently Featured at Top */}
        <section className="rounded-3xl border-2 border-[hsl(var(--accent-blue))]/20 bg-gradient-to-br from-blue-50/50 via-white to-purple-50/30 p-8 shadow-xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--accent-blue))]/5 to-transparent" />
          <div className="relative">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[hsl(var(--accent-blue))] mb-2">
                  Quick Actions
                </p>
                <h2 className="text-3xl font-black bg-gradient-to-r from-[hsl(var(--navy))] to-[hsl(var(--accent-blue))] bg-clip-text text-transparent">
                  Common Tasks
                </h2>
                <p className="text-sm text-slate-600 mt-1">Choose an action to get started quickly</p>
              </div>
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[hsl(var(--accent-blue))] to-blue-700 shadow-2xl shadow-blue-500/50 group-hover:scale-110 transition-transform duration-300">
                <Zap className="h-8 w-8 text-white animate-pulse" />
              </div>
            </div>
            <QuickActions />
          </div>
        </section>

        {/* Live Metrics - Real-time Animated Metrics */}
        <section>
          <LiveMetrics />
        </section>

        {/* Enhanced Stats Cards - Now with Beautiful Animations */}
        <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {statsCardData.map((stat, index) => (
            <div key={stat.title} style={{ animationDelay: `${index * 100}ms` }}>
              <StatsCard {...stat} />
            </div>
          ))}
        </section>

        {/* Main Content Grid - 2/3 Left Column + 1/3 Right Sidebar */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column - Main Charts and Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Revenue Chart - Beautiful Visualization */}
            <RevenueChart />

            {/* Projects Overview - Portfolio Summary */}
            <ProjectsOverview />

            {/* Operations Pulse Chart - Enhanced with Premium Styling */}
            <article className="rounded-3xl border-2 border-slate-100 bg-gradient-to-br from-white to-slate-50/50 p-8 shadow-xl hover:shadow-2xl transition-all duration-500 space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-3xl" />
              <div className="relative">
                <header className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-slate-500 mb-2">
                      Operations Pulse
                    </p>
                    <h2 className="text-2xl font-black text-[hsl(var(--navy))]">MTTR & Automation</h2>
                  </div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-xl shadow-blue-500/30">
                    <BarChart3 className="h-7 w-7 text-white" />
                  </div>
                </header>
                <div className="h-64 mt-6">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={adminData.analyticsTrend} margin={{ left: -15, right: 10, top: 10 }}>
                      <defs>
                        <linearGradient id="mttr" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#0f172a" stopOpacity={0.35} />
                          <stop offset="95%" stopColor="#0f172a" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="automation" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#2563eb" stopOpacity={0.25} />
                          <stop offset="95%" stopColor="#2563eb" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <XAxis dataKey="month" stroke="#94a3b8" fontSize={12} />
                      <YAxis stroke="#94a3b8" fontSize={12} />
                      <Tooltip contentStyle={{ borderRadius: 12, borderColor: "#e2e8f0" }} />
                      <Area type="monotone" dataKey="mttr" stroke="#0f172a" fill="url(#mttr)" strokeWidth={2} />
                      <Area type="monotone" dataKey="automation" stroke="#2563eb" fill="url(#automation)" strokeWidth={2} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </article>
          </div>

          {/* Right Sidebar - Activity Feed and Quick Info */}
          <div className="space-y-6">
            {/* Real-Time Activity Feed - Live Updates */}
            <RealTimeActivityFeed />

            {/* Upcoming Meetings - Enhanced Premium View */}
            <article className="rounded-3xl border-2 border-slate-100 bg-gradient-to-br from-white to-blue-50/20 p-6 shadow-xl hover:shadow-2xl transition-all duration-500 space-y-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-2xl" />
              <div className="relative">
                <header className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-slate-500 mb-1">
                      This Week
                    </p>
                    <h2 className="text-xl font-black text-[hsl(var(--navy))]">Meetings</h2>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg shadow-blue-500/30">
                    <CalendarCheck className="h-5 w-5 text-white" />
                  </div>
                </header>
                <div className="space-y-3">
                  {adminData.meetings.slice(0, 3).map((meeting) => (
                    <div key={meeting.id} className="group rounded-2xl border-2 border-slate-100 bg-gradient-to-br from-white to-slate-50/50 p-4 hover:border-[hsl(var(--accent-blue))]/40 hover:shadow-lg transition-all duration-300 cursor-pointer">
                      <p className="text-xs font-bold text-[hsl(var(--accent-blue))]">{meeting.date}</p>
                      <p className="text-sm font-black text-[hsl(var(--navy))] mt-1 group-hover:text-[hsl(var(--accent-blue))] transition-colors">{meeting.title}</p>
                      <p className="text-xs text-slate-600 mt-1">{meeting.account}</p>
                    </div>
                  ))}
                </div>
              </div>
            </article>

            {/* Support Tickets - Enhanced Premium View */}
            <article className="rounded-3xl border-2 border-slate-100 bg-gradient-to-br from-white to-red-50/10 p-6 shadow-xl hover:shadow-2xl transition-all duration-500 space-y-4 relative overflow-hidden">
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-red-500/10 to-transparent rounded-full blur-2xl" />
              <div className="relative">
                <header className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-slate-500 mb-1">
                      Live Status
                    </p>
                    <h2 className="text-xl font-black text-[hsl(var(--navy))]">Tickets</h2>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-green-600 shadow-lg shadow-green-500/30">
                    <ShieldCheck className="h-5 w-5 text-white" />
                  </div>
                </header>
                <div className="space-y-3">
                  {adminData.supportTickets.slice(0, 3).map((ticket) => (
                    <div key={ticket.id} className="group rounded-2xl border-2 border-slate-100 bg-gradient-to-br from-white to-slate-50/50 p-4 hover:border-[hsl(var(--accent-blue))]/40 hover:shadow-lg transition-all duration-300 cursor-pointer">
                      <div className="flex items-center justify-between text-sm font-black text-[hsl(var(--navy))] mb-2">
                        <span className="truncate group-hover:text-[hsl(var(--accent-blue))] transition-colors">{ticket.account}</span>
                        <span
                          className={`rounded-full px-2.5 py-1 text-xs font-black border-2 shadow-sm ${
                            ticket.severity === "P1"
                              ? "text-red-700 bg-red-100 border-red-200 shadow-red-500/20"
                              : ticket.severity === "P2"
                              ? "text-amber-700 bg-amber-100 border-amber-200 shadow-amber-500/20"
                              : "text-blue-700 bg-blue-100 border-blue-200 shadow-blue-500/20"
                          }`}
                        >
                          {ticket.severity}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 font-semibold">{ticket.summary}</p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    );
  };

  const ClientsView = () => (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm space-y-4">
      <header className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
            Priority Accounts
          </p>
          <h2 className="text-xl font-semibold text-[hsl(var(--navy))]">Client Health</h2>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search clients..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 rounded-full border border-slate-200 bg-white text-sm focus:border-[hsl(var(--accent-blue))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent-blue))]/20"
            />
          </div>
          <select
            className="rounded-full border border-slate-200 bg-white px-3 py-2 text-sm"
            value={selectedIndustry}
            onChange={(event) => setSelectedIndustry(event.target.value)}
          >
            {industries.map((industry) => (
              <option key={industry} value={industry}>
                {industry}
              </option>
            ))}
          </select>
          <button
            onClick={() => setClientModal({ isOpen: true, mode: 'add' })}
            className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--accent-blue))] px-4 py-2 text-sm font-semibold text-white hover:bg-[hsl(var(--accent-blue))]/90 transition"
          >
            <Plus className="h-4 w-4" />
            Add Client
          </button>
        </div>
      </header>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="text-xs uppercase tracking-wide text-slate-500 border-b border-slate-200">
              <th className="py-3">Client</th>
              <th>Industry</th>
              <th>Status</th>
              <th>Owners</th>
              <th className="text-right">MRR</th>
              <th className="text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {filteredClients.map((client) => (
              <tr key={client.id} className="text-slate-700 hover:bg-slate-50/50 transition">
                <td className="py-3 font-semibold text-[hsl(var(--navy))]">{client.name}</td>
                <td>{client.industry}</td>
                <td>
                  <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${healthBadge[client.health]}`}>
                    {client.health}
                  </span>
                </td>
                <td className="text-xs text-slate-500">{client.owners.join(", ")}</td>
                <td className="text-right font-semibold">{client.mrr}</td>
                <td className="text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button
                      onClick={() => setClientModal({ isOpen: true, mode: 'edit', client })}
                      className="p-2 rounded-lg hover:bg-blue-50 text-blue-600 transition"
                      title="Edit client"
                    >
                      <Edit2 className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => setConfirmDialog({
                        isOpen: true,
                        title: 'Delete Client',
                        message: `Are you sure you want to delete ${client.name}? This action cannot be undone.`,
                        onConfirm: () => adminData.deleteClient(client.id),
                      })}
                      className="p-2 rounded-lg hover:bg-red-50 text-red-600 transition"
                      title="Delete client"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredClients.length === 0 && (
          <EmptyState
            icon={Users}
            title={searchQuery || selectedIndustry !== "All" ? "No Clients Found" : "No Clients Yet"}
            description={
              searchQuery || selectedIndustry !== "All"
                ? "No clients match your search criteria. Try adjusting your filters."
                : "Start by adding your first client to the system."
            }
            action={{
              label: "Add First Client",
              onClick: () => setClientModal({ isOpen: true, mode: 'add' }),
            }}
          />
        )}
      </div>
    </section>
  );

  const ProjectsView = () => (
    <section className="space-y-6">
      {/* Header with Filters */}
      <div className="rounded-3xl border-2 border-slate-100 bg-white p-6 shadow-sm">
        <header className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Project Portfolio
            </p>
            <h2 className="text-2xl font-black text-[hsl(var(--navy))]">All Projects</h2>
            <p className="text-sm text-slate-600 mt-1">
              {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
              {projectStatusFilter !== "all" && ` • ${projectStatusFilter}`}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search projects..."
                value={projectSearchQuery}
                onChange={(e) => setProjectSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 rounded-full border-2 border-slate-200 bg-white text-sm focus:border-[hsl(var(--accent-blue))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent-blue))]/20 transition-all"
              />
            </div>
            <select
              className="rounded-full border-2 border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 focus:border-[hsl(var(--accent-blue))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent-blue))]/20 transition-all"
              value={projectStatusFilter}
              onChange={(e) => setProjectStatusFilter(e.target.value)}
            >
              <option value="all">All Status</option>
              <option value="planning">Planning</option>
              <option value="in-progress">In Progress</option>
              <option value="on-hold">On Hold</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
            </select>
            <button
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[hsl(var(--accent-blue))] to-blue-600 px-5 py-2 text-sm font-bold text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <Plus className="h-4 w-4" />
              New Project
            </button>
          </div>
        </header>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <ProjectCard
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="rounded-3xl border-2 border-slate-100 bg-white p-6 shadow-sm">
          <EmptyState
            icon={FolderKanban}
            title={projectSearchQuery || projectStatusFilter !== "all" ? "No Projects Found" : "No Projects Yet"}
            description={
              projectSearchQuery || projectStatusFilter !== "all"
                ? "No projects match your search criteria. Try adjusting your filters."
                : "Start by creating your first project to track work and milestones."
            }
            action={{
              label: "Create First Project",
              onClick: () => console.log("Create project"),
            }}
          />
        </div>
      )}

      {/* Project Stats Summary */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-2xl border-2 border-slate-100 bg-gradient-to-br from-blue-50 to-white p-5 hover:shadow-lg transition-all duration-300">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">In Progress</span>
            <div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
          </div>
          <p className="text-3xl font-black text-[hsl(var(--navy))]">
            {projects.filter(p => p.status === 'in-progress').length}
          </p>
        </div>
        <div className="rounded-2xl border-2 border-slate-100 bg-gradient-to-br from-green-50 to-white p-5 hover:shadow-lg transition-all duration-300">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Completed</span>
            <div className="h-2 w-2 rounded-full bg-green-500" />
          </div>
          <p className="text-3xl font-black text-[hsl(var(--navy))]">
            {projects.filter(p => p.status === 'completed').length}
          </p>
        </div>
        <div className="rounded-2xl border-2 border-slate-100 bg-gradient-to-br from-yellow-50 to-white p-5 hover:shadow-lg transition-all duration-300">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">On Hold</span>
            <div className="h-2 w-2 rounded-full bg-yellow-500" />
          </div>
          <p className="text-3xl font-black text-[hsl(var(--navy))]">
            {projects.filter(p => p.status === 'on-hold').length}
          </p>
        </div>
        <div className="rounded-2xl border-2 border-slate-100 bg-gradient-to-br from-purple-50 to-white p-5 hover:shadow-lg transition-all duration-300">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Total Budget</span>
            <div className="h-2 w-2 rounded-full bg-purple-500" />
          </div>
          <p className="text-3xl font-black text-[hsl(var(--navy))]">
            ${projects.reduce((sum, p) => sum + parseInt(p.budget.replace(/[$K,]/g, '')), 0)}K
          </p>
        </div>
      </div>
    </section>
  );

  const ProgramsView = () => (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm space-y-4">
      <header className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">Service Programs</p>
          <h2 className="text-xl font-semibold text-[hsl(var(--navy))]">Journey Kanban</h2>
        </div>
        <button
          onClick={() => setProgramModal({ isOpen: true, mode: 'add' })}
          className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--accent-blue))] px-4 py-2 text-sm font-semibold text-white hover:bg-[hsl(var(--accent-blue))]/90 transition"
        >
          <Plus className="h-4 w-4" />
          Add Program
        </button>
      </header>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {programsByStage.map(({ stage, items }) => (
          <div key={stage} className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4 space-y-2">
            <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
              <span>{stage}</span>
              <span>{items.length}</span>
            </div>
            <p className="text-xs text-slate-500">{stageCopy[stage]}</p>
            <div className="space-y-2">
              {items.length === 0 && <p className="text-xs text-slate-400">No engagements yet</p>}
              {items.map((program) => (
                <div key={program.id} className="group rounded-xl border border-white bg-white p-3 shadow-sm hover:shadow-md transition">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-[hsl(var(--navy))]">{program.name}</p>
                      <p className="text-xs text-slate-500">Next: {program.nextAction}</p>
                    </div>
                    <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition">
                      <button
                        onClick={() => setProgramModal({ isOpen: true, mode: 'edit', program })}
                        className="p-1 rounded hover:bg-blue-50 text-blue-600"
                        title="Edit"
                      >
                        <Edit2 className="h-3 w-3" />
                      </button>
                      <button
                        onClick={() => setConfirmDialog({
                          isOpen: true,
                          title: 'Delete Program',
                          message: `Are you sure you want to delete ${program.name}?`,
                          onConfirm: () => adminData.deleteProgram(program.id),
                        })}
                        className="p-1 rounded hover:bg-red-50 text-red-600"
                        title="Delete"
                      >
                        <Trash2 className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                  <div className="mt-2 h-1.5 rounded-full bg-slate-200">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[hsl(var(--accent-blue))] to-[hsl(var(--accent-blue))]/60"
                      style={{ width: `${program.confidence}%` }}
                    />
                  </div>
                  <p className="text-xs text-slate-500 mt-1">{program.confidence}% confidence</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );

  const MeetingsView = () => (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm space-y-4">
      <header className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">Calendar</p>
          <h2 className="text-xl font-semibold text-[hsl(var(--navy))]">Upcoming Meetings</h2>
        </div>
        <button
          onClick={() => setMeetingModal({ isOpen: true, mode: 'add' })}
          className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--accent-blue))] px-4 py-2 text-sm font-semibold text-white hover:bg-[hsl(var(--accent-blue))]/90 transition"
        >
          <Plus className="h-4 w-4" />
          Add Meeting
        </button>
      </header>
      <div className="grid gap-3 lg:grid-cols-2">
        {adminData.meetings.map((meeting) => (
          <div key={meeting.id} className="group rounded-2xl border border-slate-100 bg-slate-50/80 p-4 hover:shadow-md transition">
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-slate-500">{meeting.date}</p>
                <p className="text-sm font-semibold text-[hsl(var(--navy))]">{meeting.title}</p>
                <p className="text-xs text-slate-500">{meeting.account}</p>
                <p className="text-xs text-slate-500">Focus: {meeting.focus}</p>
                <p className="text-xs text-slate-500">Owner: {meeting.owner}</p>
              </div>
              <div className="flex flex-col gap-1 opacity-0 group-hover:opacity-100 transition">
                <button
                  onClick={() => setMeetingModal({ isOpen: true, mode: 'edit', meeting })}
                  className="p-2 rounded-lg hover:bg-blue-50 text-blue-600"
                  title="Edit"
                >
                  <Edit2 className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setConfirmDialog({
                    isOpen: true,
                    title: 'Delete Meeting',
                    message: `Are you sure you want to delete "${meeting.title}"?`,
                    onConfirm: () => adminData.deleteMeeting(meeting.id),
                  })}
                  className="p-2 rounded-lg hover:bg-red-50 text-red-600"
                  title="Delete"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {adminData.meetings.length === 0 && (
        <EmptyState
          icon={CalendarCheck}
          title="No Meetings Scheduled"
          description="Your calendar is clear. Schedule a meeting with your clients or team."
          action={{
            label: "Schedule Meeting",
            onClick: () => setMeetingModal({ isOpen: true, mode: 'add' }),
          }}
        />
      )}
    </section>
  );

  const SecurityView = () => (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm space-y-4">
      <header className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">Support Tickets</p>
          <h2 className="text-xl font-semibold text-[hsl(var(--navy))]">Live Escalations</h2>
        </div>
        <button
          onClick={() => setTicketModal({ isOpen: true, mode: 'add' })}
          className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--accent-blue))] px-4 py-2 text-sm font-semibold text-white hover:bg-[hsl(var(--accent-blue))]/90 transition"
        >
          <Plus className="h-4 w-4" />
          Create Ticket
        </button>
      </header>
      <div className="grid gap-3 lg:grid-cols-2">
        {adminData.supportTickets.map((ticket) => (
          <div key={ticket.id} className="group rounded-2xl border border-slate-100 bg-slate-50/70 p-4 hover:shadow-md transition">
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between text-sm font-semibold text-[hsl(var(--navy))] mb-2">
                  <span>{ticket.account}</span>
                  <span
                    className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                      ticket.severity === "P1"
                        ? "text-red-700 bg-red-100"
                        : ticket.severity === "P2"
                        ? "text-amber-700 bg-amber-100"
                        : "text-blue-700 bg-blue-100"
                    }`}
                  >
                    {ticket.severity}
                  </span>
                </div>
                <p className="text-xs text-slate-500">{ticket.summary}</p>
                <p className="text-xs text-slate-500">Owner: {ticket.owner}</p>
                <p className="text-xs text-slate-500">ETA: {ticket.eta}</p>
              </div>
              <div className="flex flex-col gap-1 opacity-0 group-hover:opacity-100 transition">
                <button
                  onClick={() => setTicketModal({ isOpen: true, mode: 'edit', ticket })}
                  className="p-2 rounded-lg hover:bg-blue-50 text-blue-600"
                  title="Edit"
                >
                  <Edit2 className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setConfirmDialog({
                    isOpen: true,
                    title: 'Delete Ticket',
                    message: `Are you sure you want to delete this ticket for ${ticket.account}?`,
                    onConfirm: () => adminData.deleteTicket(ticket.id),
                  })}
                  className="p-2 rounded-lg hover:bg-red-50 text-red-600"
                  title="Delete"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {adminData.supportTickets.length === 0 && (
        <EmptyState
          icon={ShieldCheck}
          title="All Clear!"
          description="No active support tickets at the moment. Your systems are running smoothly."
          action={{
            label: "Create Ticket",
            onClick: () => setTicketModal({ isOpen: true, mode: 'add' }),
          }}
        />
      )}
    </section>
  );

  const AnalyticsView = () => (
    <div className="space-y-8">
      <OverviewView />
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm space-y-4">
        <header className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">Inbound Demand</p>
            <h2 className="text-xl font-semibold text-[hsl(var(--navy))]">Forms & Requests</h2>
          </div>
          <FileText className="h-5 w-5 text-[hsl(var(--accent-blue))]" />
        </header>
        <div className="space-y-3">
          {adminData.forms.map((submission) => (
            <div key={submission.id} className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4">
              <div className="flex items-center justify-between text-sm font-semibold text-[hsl(var(--navy))]">
                <span>{submission.requester}</span>
                <span className="text-xs uppercase tracking-[0.35em] text-slate-500">{submission.status}</span>
              </div>
              <p className="text-xs text-slate-500">{submission.company}</p>
              <p className="text-xs text-slate-500">{submission.type}</p>
              <p className="text-xs text-slate-500">Submitted {submission.submittedAt}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );

  const FormsView = () => (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm space-y-4">
      <header className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">Forms & Requests</p>
          <h2 className="text-xl font-semibold text-[hsl(var(--navy))]">Inbound Signals</h2>
        </div>
        <FileText className="h-5 w-5 text-[hsl(var(--accent-blue))]" />
      </header>
      <div className="space-y-3">
        {adminData.forms.map((submission) => (
          <div key={submission.id} className="group rounded-2xl border border-slate-100 bg-slate-50/70 p-4 hover:shadow-md transition">
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between text-sm font-semibold text-[hsl(var(--navy))] mb-2">
                  <span>{submission.requester}</span>
                  <select
                    value={submission.status}
                    onChange={(e) => adminData.updateFormStatus(submission.id, e.target.value as any)}
                    className="text-xs uppercase tracking-[0.35em] bg-transparent border-none text-slate-500 cursor-pointer hover:text-[hsl(var(--accent-blue))] focus:outline-none"
                  >
                    <option value="new">New</option>
                    <option value="review">Review</option>
                    <option value="scheduled">Scheduled</option>
                  </select>
                </div>
                <p className="text-xs text-slate-500">{submission.company}</p>
                <p className="text-xs text-slate-500">{submission.type}</p>
                <p className="text-xs text-slate-500">Submitted {submission.submittedAt}</p>
              </div>
              <button
                onClick={() => setConfirmDialog({
                  isOpen: true,
                  title: 'Delete Form Submission',
                  message: `Are you sure you want to delete the submission from ${submission.requester}?`,
                  onConfirm: () => adminData.deleteForm(submission.id),
                })}
                className="p-2 rounded-lg hover:bg-red-50 text-red-600 opacity-0 group-hover:opacity-100 transition"
                title="Delete"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
      {adminData.forms.length === 0 && (
        <EmptyState
          icon={FileText}
          title="No Form Submissions"
          description="You haven't received any form submissions yet. Share your intake form with potential clients."
        />
      )}
    </section>
  );

  const tabContent = {
    overview: <OverviewView />,
    clients: <ClientsView />,
    projects: <ProjectsView />,
    programs: <ProgramsView />,
    meetings: <MeetingsView />,
    security: <SecurityView />,
    analytics: <AnalyticsView />,
    forms: <FormsView />,
  } as const;

  return (
    <main className="min-h-screen bg-[hsl(var(--background))]">
      <div className="flex w-full gap-6 py-8 pr-4 sm:pr-6 lg:pr-8">
        <aside
          className={`sticky top-6 h-[calc(100vh-3rem)] rounded-[32px] border border-slate-200 bg-gradient-to-b from-white via-white to-slate-50/60 p-4 shadow-2xl shadow-slate-900/10 transition-all duration-300 ${
            sidebarCollapsed ? "w-16" : "w-64"
          }`}
        >
          <div className="flex items-center justify-between">
            {!sidebarCollapsed && (
              <div>
                <p className="text-[0.6rem] font-semibold uppercase tracking-[0.4em] text-slate-400">HiTechLogic</p>
                <p className="text-sm font-semibold text-[hsl(var(--navy))]">Command</p>
              </div>
            )}
            <button
              className="rounded-full border border-slate-200 bg-slate-50 p-2 hover:border-[hsl(var(--accent-blue))] hover:text-[hsl(var(--accent-blue))] transition"
              onClick={() => setSidebarCollapsed((prev) => !prev)}
              aria-label="Toggle sidebar"
            >
              {sidebarCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
            </button>
          </div>
          <nav className="mt-6 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.key}
                className={`group flex w-full items-center gap-3 rounded-2xl px-3 py-2 text-sm font-semibold transition ${
                  sidebarCollapsed ? "justify-center" : "justify-start"
                } ${
                  activeTab === item.key
                    ? "bg-[hsl(var(--accent-blue))]/15 text-[hsl(var(--accent-blue))] shadow-inner shadow-[hsl(var(--accent-blue))]/20"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
                onClick={() => setActiveTab(item.key)}
              >
                <item.icon className="h-4 w-4" />
                {!sidebarCollapsed && <span>{item.label}</span>}
              </button>
            ))}
          </nav>
          {!sidebarCollapsed && (
            <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50/80 p-3 text-xs text-slate-500 shadow-inner">
              <p className="font-semibold text-[hsl(var(--navy))]">Quick Stats</p>
              <p>{adminData.clients.length} active clients</p>
              <p>{adminData.programs.length} programs running</p>
              <p>{adminData.supportTickets.length} open tickets</p>
            </div>
          )}
        </aside>

        <div className="flex-1 space-y-10 px-0">
          <header className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">Internal Console</p>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl md:text-[2.5rem] font-semibold text-[hsl(var(--navy))]">HiTechLogic Command Center</h1>
                <p className="text-sm text-slate-600">
                  Unified view of clients, programs, revenue, and reliability posture.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => adminData.exportData('csv')}
                  className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--accent-blue))]/40 bg-white px-5 py-2 text-sm font-semibold text-[hsl(var(--accent-blue))] hover:bg-[hsl(var(--accent-blue))]/5 transition"
                >
                  <Download className="h-4 w-4" /> Export CSV
                </button>
                <button
                  onClick={() => adminData.exportData('json')}
                  className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--accent-blue))] px-5 py-2 text-sm font-semibold text-white hover:bg-[hsl(var(--accent-blue))]/90 transition"
                >
                  Export JSON
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </header>

          <div key={activeTab} className="animate-fade-in">
            {tabContent[activeTab]}
          </div>
        </div>
      </div>

      {/* Modals */}
      <ClientModal
        isOpen={clientModal.isOpen}
        onClose={() => setClientModal({ isOpen: false, mode: 'add' })}
        onSave={(client) => {
          if (clientModal.mode === 'edit') {
            adminData.updateClient((client as Client).id, client);
          } else {
            adminData.addClient(client);
          }
        }}
        client={clientModal.client}
        mode={clientModal.mode}
      />

      <MeetingModal
        isOpen={meetingModal.isOpen}
        onClose={() => setMeetingModal({ isOpen: false, mode: 'add' })}
        onSave={(meeting) => {
          if (meetingModal.mode === 'edit') {
            adminData.updateMeeting((meeting as any).id, meeting);
          } else {
            adminData.addMeeting(meeting);
          }
        }}
        meeting={meetingModal.meeting}
        mode={meetingModal.mode}
      />

      <ProgramModal
        isOpen={programModal.isOpen}
        onClose={() => setProgramModal({ isOpen: false, mode: 'add' })}
        onSave={(program) => {
          if (programModal.mode === 'edit') {
            adminData.updateProgram((program as any).id, program);
          } else {
            adminData.addProgram(program);
          }
        }}
        program={programModal.program}
        mode={programModal.mode}
      />

      <TicketModal
        isOpen={ticketModal.isOpen}
        onClose={() => setTicketModal({ isOpen: false, mode: 'add' })}
        onSave={(ticket) => {
          if (ticketModal.mode === 'edit') {
            adminData.updateTicket((ticket as any).id, ticket);
          } else {
            adminData.addTicket(ticket);
          }
        }}
        ticket={ticketModal.ticket}
        mode={ticketModal.mode}
      />

      <ConfirmDialog
        isOpen={confirmDialog.isOpen}
        onClose={() => setConfirmDialog({ isOpen: false, title: '', message: '', onConfirm: () => {} })}
        onConfirm={confirmDialog.onConfirm}
        title={confirmDialog.title}
        message={confirmDialog.message}
        confirmText="Delete"
        confirmVariant="danger"
      />

      <ProjectDetailModal
        project={selectedProject}
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
      />
    </main>
  );
}
