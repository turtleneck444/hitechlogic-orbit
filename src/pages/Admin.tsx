import { useMemo, useState } from "react";
import type { ServiceProgram } from "@/data/admin";
import {
  adminMetrics,
  analyticsTrend,
  clients,
  forms,
  meetings,
  programs,
  revenueMetrics,
  supportTickets,
} from "@/data/admin";
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
  { key: "programs", label: "Programs", icon: Activity },
  { key: "meetings", label: "Meetings", icon: CalendarCheck },
  { key: "security", label: "Security", icon: ShieldCheck },
  { key: "analytics", label: "Analytics", icon: BarChart3 },
  { key: "forms", label: "Forms", icon: FileText },
] as const;

export default function Admin() {
  const [selectedIndustry, setSelectedIndustry] = useState("All");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState<(typeof navItems)[number]["key"]>("overview");

  const industries = useMemo(() => {
    const set = new Set(clients.map((client) => client.industry));
    return ["All", ...Array.from(set)];
  }, []);

  const filteredClients = useMemo(() => {
    return selectedIndustry === "All"
      ? clients
      : clients.filter((client) => client.industry === selectedIndustry);
  }, [selectedIndustry]);

  const programsByStage = useMemo(() => {
    return stageOrder.map((stage) => ({
      stage,
      items: programs.filter((program) => program.stage === stage),
    }));
  }, []);

  const OverviewView = () => (
    <div className="space-y-8">
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {adminMetrics.map((metric) => (
          <article
            key={metric.label}
            className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
              {metric.label}
            </p>
            <p className="mt-2 text-2xl font-semibold text-[hsl(var(--navy))]">
              {metric.value}
            </p>
            <p className="text-xs text-slate-500">{metric.change}</p>
          </article>
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm space-y-6">
          <header className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
                Operations Pulse
              </p>
              <h2 className="text-xl font-semibold text-[hsl(var(--navy))]">MTTR & Automation</h2>
            </div>
            <BarChart3 className="h-5 w-5 text-[hsl(var(--accent-blue))]" />
          </header>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={analyticsTrend} margin={{ left: -15, right: 10, top: 10 }}>
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
        </article>

        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm space-y-4">
          <header className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
                Revenue Snapshot
              </p>
              <h2 className="text-xl font-semibold text-[hsl(var(--navy))]">Finance & Pipeline</h2>
            </div>
            <GaugeCircle className="h-5 w-5 text-[hsl(var(--accent-blue))]" />
          </header>
          <div className="grid gap-3 sm:grid-cols-3">
            {revenueMetrics.map((metric) => (
              <div key={metric.label} className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
                  {metric.label}
                </p>
                <p className="text-2xl font-semibold text-[hsl(var(--navy))]">{metric.value}</p>
                <p className="text-xs text-slate-500">{metric.delta}</p>
              </div>
            ))}
          </div>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={revenueMetrics}>
                <XAxis dataKey="label" stroke="#94a3b8" fontSize={12} />
                <YAxis stroke="#94a3b8" fontSize={12} />
                <Tooltip contentStyle={{ borderRadius: 12, borderColor: "#e2e8f0" }} />
                <Bar dataKey="value" fill="#2563eb" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </article>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm space-y-4">
          <header className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
                Upcoming Meetings
              </p>
              <h2 className="text-xl font-semibold text-[hsl(var(--navy))]">Week at a Glance</h2>
            </div>
            <CalendarCheck className="h-5 w-5 text-[hsl(var(--accent-blue))]" />
          </header>
          <div className="space-y-3">
            {meetings.map((meeting) => (
              <div key={meeting.id} className="rounded-2xl border border-slate-100 bg-slate-50/80 p-4">
                <p className="text-xs font-semibold text-slate-500">{meeting.date}</p>
                <p className="text-sm font-semibold text-[hsl(var(--navy))]">{meeting.title}</p>
                <p className="text-xs text-slate-500">{meeting.account}</p>
                <p className="text-xs text-slate-500">Focus: {meeting.focus}</p>
                <p className="text-xs text-slate-500">Owner: {meeting.owner}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm space-y-4">
          <header className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
                Support Tickets
              </p>
              <h2 className="text-xl font-semibold text-[hsl(var(--navy))]">Live Escalations</h2>
            </div>
            <ShieldCheck className="h-5 w-5 text-[hsl(var(--accent-blue))]" />
          </header>
          <div className="space-y-3">
            {supportTickets.map((ticket) => (
              <div key={ticket.id} className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4">
                <div className="flex items-center justify-between text-sm font-semibold text-[hsl(var(--navy))]">
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
            ))}
          </div>
        </article>
      </section>
    </div>
  );

  const ClientsView = () => (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm space-y-4">
      <header className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
            Priority Accounts
          </p>
          <h2 className="text-xl font-semibold text-[hsl(var(--navy))]">Client Health</h2>
        </div>
        <div className="flex flex-wrap items-center gap-2 text-sm">
          <span className="text-xs font-semibold text-slate-500">Industry</span>
          <select
            className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm"
            value={selectedIndustry}
            onChange={(event) => setSelectedIndustry(event.target.value)}
          >
            {industries.map((industry) => (
              <option key={industry} value={industry}>
                {industry}
              </option>
            ))}
          </select>
        </div>
      </header>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="text-xs uppercase tracking-wide text-slate-500">
              <th className="py-2">Client</th>
              <th>Industry</th>
              <th>Status</th>
              <th>Owners</th>
              <th className="text-right">MRR</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {filteredClients.map((client) => (
              <tr key={client.id} className="text-slate-700">
                <td className="py-3 font-semibold text-[hsl(var(--navy))]">{client.name}</td>
                <td>{client.industry}</td>
                <td>
                  <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${healthBadge[client.health]}`}>
                    {client.health}
                  </span>
                </td>
                <td className="text-xs text-slate-500">{client.owners.join(", ")}</td>
                <td className="text-right font-semibold">{client.mrr}</td>
              </tr>
            ))}
          </tbody>
        </table>
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
        <Activity className="h-5 w-5 text-[hsl(var(--accent-blue))]" />
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
                <div key={program.id} className="rounded-xl border border-white bg-white p-3 shadow-sm">
                  <p className="text-sm font-semibold text-[hsl(var(--navy))]">{program.name}</p>
                  <p className="text-xs text-slate-500">Next: {program.nextAction}</p>
                  <div className="mt-2 h-1.5 rounded-full bg-slate-200">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[hsl(var(--accent-blue))] to-[hsl(var(--accent-blue))]/60"
                      style={{ width: `${program.confidence}%` }}
                    />
                  </div>
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
        <CalendarCheck className="h-5 w-5 text-[hsl(var(--accent-blue))]" />
      </header>
      <div className="grid gap-3 lg:grid-cols-2">
        {meetings.map((meeting) => (
          <div key={meeting.id} className="rounded-2xl border border-slate-100 bg-slate-50/80 p-4">
            <p className="text-xs font-semibold text-slate-500">{meeting.date}</p>
            <p className="text-sm font-semibold text-[hsl(var(--navy))]">{meeting.title}</p>
            <p className="text-xs text-slate-500">{meeting.account}</p>
            <p className="text-xs text-slate-500">Focus: {meeting.focus}</p>
            <p className="text-xs text-slate-500">Owner: {meeting.owner}</p>
          </div>
        ))}
      </div>
    </section>
  );

  const SecurityView = () => (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm space-y-4">
      <header className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">Support Tickets</p>
          <h2 className="text-xl font-semibold text-[hsl(var(--navy))]">Live Escalations</h2>
        </div>
        <ShieldCheck className="h-5 w-5 text-[hsl(var(--accent-blue))]" />
      </header>
      <div className="grid gap-3 lg:grid-cols-2">
        {supportTickets.map((ticket) => (
          <div key={ticket.id} className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4">
            <div className="flex items-center justify-between text-sm font-semibold text-[hsl(var(--navy))]">
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
        ))}
      </div>
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
          {forms.map((submission) => (
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
        {forms.map((submission) => (
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
  );

  const tabContent = {
    overview: <OverviewView />,
    clients: <ClientsView />,
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
              <p className="font-semibold text-[hsl(var(--navy))]">Reliability Baseline</p>
              <p>42% of active clients booked for Q3 diagnostics.</p>
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
                <button className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--accent-blue))]/40 bg-white px-5 py-2 text-sm font-semibold text-[hsl(var(--accent-blue))]">
                  <Users className="h-4 w-4" /> Invite teammate
                </button>
                <button className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--accent-blue))] px-5 py-2 text-sm font-semibold text-white">
                  Export snapshot
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </header>

          {tabContent[activeTab]}
        </div>
      </div>
    </main>
  );
}
