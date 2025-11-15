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

export type ProjectStatus = "planning" | "in-progress" | "on-hold" | "completed" | "cancelled";

export type ProjectPriority = "low" | "medium" | "high" | "critical";

export type Milestone = {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  completed: boolean;
  completedAt?: string;
};

export type ProjectDocument = {
  id: string;
  name: string;
  type: string;
  size: string;
  uploadedBy: string;
  uploadedAt: string;
  url?: string;
};

export type ProjectNote = {
  id: string;
  content: string;
  author: string;
  createdAt: string;
  updatedAt?: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  clientId: string;
  clientName: string;
  status: ProjectStatus;
  priority: ProjectPriority;
  startDate: string;
  dueDate: string;
  completedDate?: string;
  progress: number;
  budget: string;
  team: string[];
  tags: string[];
  color: string;
  milestones: Milestone[];
  documents: ProjectDocument[];
  notes: ProjectNote[];
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

export const projects: Project[] = [
  {
    id: "prj-01",
    title: "Cloud Migration Initiative",
    description: "Migrate legacy infrastructure to AWS with zero downtime and enhanced security posture",
    clientId: "cl-01",
    clientName: "Northwind Health",
    status: "in-progress",
    priority: "high",
    startDate: "2025-01-15",
    dueDate: "2025-06-30",
    progress: 45,
    budget: "$450K",
    team: ["E. Patel", "L. Gomez", "K. Williams"],
    tags: ["cloud", "migration", "aws", "infrastructure"],
    color: "from-blue-500 to-blue-600",
    milestones: [
      {
        id: "ms-01",
        title: "Infrastructure Assessment Complete",
        description: "Complete analysis of current infrastructure and migration requirements",
        dueDate: "2025-02-15",
        completed: true,
        completedAt: "2025-02-14",
      },
      {
        id: "ms-02",
        title: "Development Environment Migration",
        description: "Migrate development and staging environments to AWS",
        dueDate: "2025-03-30",
        completed: true,
        completedAt: "2025-03-28",
      },
      {
        id: "ms-03",
        title: "Production Cutover",
        description: "Execute production migration with rollback plan",
        dueDate: "2025-06-15",
        completed: false,
      },
    ],
    documents: [
      {
        id: "doc-01",
        name: "Migration Architecture Plan.pdf",
        type: "application/pdf",
        size: "2.4 MB",
        uploadedBy: "E. Patel",
        uploadedAt: "2025-01-20",
      },
      {
        id: "doc-02",
        name: "Security Compliance Checklist.xlsx",
        type: "application/xlsx",
        size: "156 KB",
        uploadedBy: "L. Gomez",
        uploadedAt: "2025-02-05",
      },
    ],
    notes: [
      {
        id: "note-01",
        content: "Client approved additional budget for enhanced monitoring tools. Proceeding with DataDog integration.",
        author: "E. Patel",
        createdAt: "2025-03-15 14:30",
      },
    ],
  },
  {
    id: "prj-02",
    title: "Zero Trust Security Implementation",
    description: "Implement comprehensive zero-trust architecture across all systems and applications",
    clientId: "cl-03",
    clientName: "Bridgestone FinTech",
    status: "in-progress",
    priority: "critical",
    startDate: "2025-02-01",
    dueDate: "2025-08-31",
    progress: 62,
    budget: "$680K",
    team: ["J. Chen", "R. Singh", "M. Rodriguez"],
    tags: ["security", "zero-trust", "compliance", "identity"],
    color: "from-red-500 to-rose-600",
    milestones: [
      {
        id: "ms-04",
        title: "Identity Governance Framework",
        description: "Deploy identity and access management infrastructure",
        dueDate: "2025-03-31",
        completed: true,
        completedAt: "2025-03-30",
      },
      {
        id: "ms-05",
        title: "Network Segmentation",
        description: "Implement micro-segmentation and network policies",
        dueDate: "2025-05-31",
        completed: true,
        completedAt: "2025-05-28",
      },
      {
        id: "ms-06",
        title: "Security Audit & Certification",
        description: "Complete SOC 2 Type II audit with zero findings",
        dueDate: "2025-08-15",
        completed: false,
      },
    ],
    documents: [
      {
        id: "doc-03",
        name: "Zero Trust Architecture Blueprint.pdf",
        type: "application/pdf",
        size: "5.2 MB",
        uploadedBy: "J. Chen",
        uploadedAt: "2025-02-10",
      },
      {
        id: "doc-04",
        name: "IAM Policy Documentation.docx",
        type: "application/docx",
        size: "892 KB",
        uploadedBy: "R. Singh",
        uploadedAt: "2025-03-12",
      },
      {
        id: "doc-05",
        name: "Security Compliance Matrix.xlsx",
        type: "application/xlsx",
        size: "234 KB",
        uploadedBy: "M. Rodriguez",
        uploadedAt: "2025-04-18",
      },
    ],
    notes: [
      {
        id: "note-02",
        content: "Successfully passed initial security audit. Only minor findings that have been resolved.",
        author: "J. Chen",
        createdAt: "2025-06-01 09:15",
      },
      {
        id: "note-03",
        content: "Client requested additional MFA coverage for contractor access. Implementing Okta adaptive MFA.",
        author: "R. Singh",
        createdAt: "2025-06-08 16:45",
      },
    ],
  },
  {
    id: "prj-03",
    title: "E-commerce Platform Modernization",
    description: "Rebuild legacy e-commerce platform with modern microservices architecture",
    clientId: "cl-02",
    clientName: "Apex Commerce",
    status: "planning",
    priority: "medium",
    startDate: "2025-07-01",
    dueDate: "2025-12-31",
    progress: 15,
    budget: "$920K",
    team: ["M. Torres", "A. Kim", "S. Johnson"],
    tags: ["modernization", "microservices", "e-commerce", "scalability"],
    color: "from-purple-500 to-indigo-600",
    milestones: [
      {
        id: "ms-07",
        title: "Technical Discovery & Planning",
        description: "Complete technical assessment and architecture design",
        dueDate: "2025-07-31",
        completed: false,
      },
      {
        id: "ms-08",
        title: "MVP Development",
        description: "Build minimum viable product with core features",
        dueDate: "2025-10-15",
        completed: false,
      },
      {
        id: "ms-09",
        title: "Full Production Launch",
        description: "Complete platform migration and go-live",
        dueDate: "2025-12-20",
        completed: false,
      },
    ],
    documents: [
      {
        id: "doc-06",
        name: "Platform Requirements.pdf",
        type: "application/pdf",
        size: "1.8 MB",
        uploadedBy: "M. Torres",
        uploadedAt: "2025-06-15",
      },
    ],
    notes: [
      {
        id: "note-04",
        content: "Initial stakeholder kickoff scheduled for July 5th. Preparing technical presentation.",
        author: "M. Torres",
        createdAt: "2025-06-20 11:00",
      },
    ],
  },
  {
    id: "prj-04",
    title: "Manufacturing IoT Integration",
    description: "Deploy IoT sensors and real-time monitoring across manufacturing facilities",
    clientId: "cl-04",
    clientName: "Helios Manufacturing",
    status: "on-hold",
    priority: "low",
    startDate: "2025-03-01",
    dueDate: "2025-09-30",
    progress: 28,
    budget: "$340K",
    team: ["S. Adebayo", "L. Chen"],
    tags: ["iot", "monitoring", "manufacturing", "automation"],
    color: "from-orange-500 to-amber-600",
    milestones: [
      {
        id: "ms-10",
        title: "Sensor Deployment Phase 1",
        description: "Install sensors in primary production facility",
        dueDate: "2025-04-30",
        completed: true,
        completedAt: "2025-04-28",
      },
      {
        id: "ms-11",
        title: "Data Pipeline Infrastructure",
        description: "Build real-time data processing pipeline",
        dueDate: "2025-06-30",
        completed: false,
      },
    ],
    documents: [],
    notes: [
      {
        id: "note-05",
        content: "Project on hold pending budget approval for Q3. Expected to resume in August.",
        author: "S. Adebayo",
        createdAt: "2025-05-15 13:20",
      },
    ],
  },
];
