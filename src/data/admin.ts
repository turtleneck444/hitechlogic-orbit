export type Client = {
  id: string;
  name: string;
  industry: string;
  health: "stable" | "watch" | "critical";
  mrr: string;
  owners: string[];
};

export type Meeting = {
  id: string;
  title: string;
  date: string;
  account: string;
  focus: string;
  owner: string;
};

export type ServiceProgram = {
  id: string;
  name: string;
  stage: "Discover" | "Stabilize" | "Automate" | "Scale";
  nextAction: string;
  confidence: number;
};

export type FormSubmission = {
  id: string;
  requester: string;
  company: string;
  type: string;
  submittedAt: string;
  status: "new" | "review" | "scheduled";
};

export type Metric = {
  label: string;
  value: string;
  change: string;
};

export type RevenueMetric = {
  label: string;
  value: string;
  delta: string;
};

export type SupportTicket = {
  id: string;
  account: string;
  severity: "P1" | "P2" | "P3";
  summary: string;
  owner: string;
  eta: string;
};

export type AnalyticsPoint = {
  month: string;
  mttr: number;
  automation: number;
};

export const adminMetrics: Metric[] = [
  { label: "Active Clients", value: "24", change: "+3 this quarter" },
  { label: "Automation Coverage", value: "67%", change: "+5 runbooks" },
  { label: "MTTR Median", value: "21 min", change: "↓ 14%" },
  { label: "Open Initiatives", value: "12", change: "4 in Stabilize" },
];

export const clients: Client[] = [
  {
    id: "cl-01",
    name: "Northwind Health",
    industry: "Healthcare",
    health: "stable",
    mrr: "$140K",
    owners: ["E. Patel", "L. Gomez"],
  },
  {
    id: "cl-02",
    name: "Apex Commerce",
    industry: "Retail",
    health: "watch",
    mrr: "$96K",
    owners: ["M. Torres"],
  },
  {
    id: "cl-03",
    name: "Bridgestone FinTech",
    industry: "Finance",
    health: "stable",
    mrr: "$120K",
    owners: ["J. Chen", "R. Singh"],
  },
  {
    id: "cl-04",
    name: "Helios Manufacturing",
    industry: "Manufacturing",
    health: "critical",
    mrr: "$72K",
    owners: ["S. Adebayo"],
  },
];

export const meetings: Meeting[] = [
  {
    id: "mt-01",
    title: "Quarterly Reliability Council",
    date: "Jun 12 · 09:00 EST",
    account: "Northwind Health",
    focus: "Stage 2 → 3 transition",
    owner: "Elena Patel",
  },
  {
    id: "mt-02",
    title: "FinOps + Automation Alignment",
    date: "Jun 14 · 13:00 EST",
    account: "Helios Manufacturing",
    focus: "Cost guardrails + runbook debt",
    owner: "Ravi Singh",
  },
  {
    id: "mt-03",
    title: "Security Incident Tabletop",
    date: "Jun 17 · 11:30 EST",
    account: "Apex Commerce",
    focus: "Zero-trust response drill",
    owner: "Lara Gomez",
  },
];

export const programs: ServiceProgram[] = [
  {
    id: "sp-01",
    name: "Northwind · Platform Reliability",
    stage: "Automate",
    nextAction: "Deploy AI noise-correlation",
    confidence: 82,
  },
  {
    id: "sp-02",
    name: "Helios · Identity Assurance",
    stage: "Stabilize",
    nextAction: "Finalize JIT access runbooks",
    confidence: 64,
  },
  {
    id: "sp-03",
    name: "Bridgestone · FinOps",
    stage: "Scale",
    nextAction: "Publish unit economics pack",
    confidence: 91,
  },
];

export const forms: FormSubmission[] = [
  {
    id: "fs-01",
    requester: "Maya Li",
    company: "Atlas BioTech",
    type: "Reliability Baseline",
    submittedAt: "Jun 04, 08:23",
    status: "review",
  },
  {
    id: "fs-02",
    requester: "Daniel Ortiz",
    company: "CivicGrid",
    type: "Security Assessment",
    submittedAt: "Jun 04, 10:11",
    status: "scheduled",
  },
  {
    id: "fs-03",
    requester: "Priya Anand",
    company: "BluePeak Logistics",
    type: "Cost Optimization",
    submittedAt: "Jun 05, 07:45",
    status: "new",
  },
];

export const analyticsTrend: AnalyticsPoint[] = [
  { month: "Jan", mttr: 32, automation: 52 },
  { month: "Feb", mttr: 28, automation: 56 },
  { month: "Mar", mttr: 25, automation: 59 },
  { month: "Apr", mttr: 24, automation: 61 },
  { month: "May", mttr: 22, automation: 63 },
  { month: "Jun", mttr: 21, automation: 67 },
];

export const revenueMetrics: RevenueMetric[] = [
  { label: "Current MRR", value: "$1.42M", delta: "+$60K vs last month" },
  { label: "Forecasted MRR", value: "$1.58M", delta: "+$160K pipeline" },
  { label: "Avg. Contract", value: "$59K", delta: "+6% YoY" },
];

export const supportTickets: SupportTicket[] = [
  {
    id: "st-01",
    account: "Helios Manufacturing",
    severity: "P1",
    summary: "Database failover instability",
    owner: "Ops Pod Delta",
    eta: "Resolving · 35m",
  },
  {
    id: "st-02",
    account: "Northwind Health",
    severity: "P2",
    summary: "Automation runbook validation",
    owner: "Automation Guild",
    eta: "Validation · 2h",
  },
  {
    id: "st-03",
    account: "Apex Commerce",
    severity: "P3",
    summary: "Cost telemetry sync",
    owner: "FinOps Pod",
    eta: "Queued",
  },
];
