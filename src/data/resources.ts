export type ResourceCategory = "blog" | "whitepaper" | "webinar" | "case-study" | "guide";

export type Resource = {
  id: string;
  title: string;
  description: string;
  category: ResourceCategory;
  author: string;
  date: string;
  readTime?: string;
  image?: string;
  tags: string[];
  featured: boolean;
  href: string;
};

export const resources: Resource[] = [
  {
    id: "finops-ai-automation",
    title: "The Future of FinOps: AI-Powered Cloud Cost Optimization",
    description: "Discover how AI agents are revolutionizing cloud financial management, automatically optimizing spend and eliminating waste in real-time. Learn strategies that reduce cloud costs by 50% without sacrificing performance.",
    category: "whitepaper",
    author: "HiTechLogic FinOps Team",
    date: "2025-01-10",
    readTime: "15 min",
    tags: ["FinOps", "AI Automation", "Cloud Cost Optimization", "AWS", "Azure"],
    featured: true,
    href: "/resources/finops-ai-automation",
  },
  {
    id: "zero-trust-implementation",
    title: "Zero-Trust Security: A Practical Implementation Guide",
    description: "Step-by-step guide to implementing zero-trust architecture in enterprise environments. Covers identity governance, network segmentation, and continuous authentication strategies that reduce breach risk by 90%.",
    category: "guide",
    author: "Security Practice Lead",
    date: "2025-01-08",
    readTime: "20 min",
    tags: ["Zero-Trust", "Security", "Compliance", "Identity Management"],
    featured: true,
    href: "/resources/zero-trust-implementation",
  },
  {
    id: "kubernetes-production-readiness",
    title: "Kubernetes in Production: Enterprise Readiness Checklist",
    description: "Comprehensive guide to deploying and operating Kubernetes at scale. Includes security hardening, observability setup, disaster recovery, and cost optimization strategies from real enterprise deployments.",
    category: "guide",
    author: "Cloud Architecture Team",
    date: "2025-01-05",
    readTime: "25 min",
    tags: ["Kubernetes", "DevOps", "Cloud Native", "Containers"],
    featured: true,
    href: "/resources/kubernetes-production-readiness",
  },
  {
    id: "sre-maturity-model",
    title: "The SRE Maturity Model: From Reactive to Proactive Operations",
    description: "Framework for evolving your operations from firefighting to reliability engineering. Learn how Fortune 500 companies achieve 99.99% uptime and reduce MTTR by 75% through systematic SRE practices.",
    category: "blog",
    author: "SRE Practice Director",
    date: "2025-01-03",
    readTime: "12 min",
    tags: ["SRE", "Reliability Engineering", "DevOps", "Incident Management"],
    featured: false,
    href: "/resources/sre-maturity-model",
  },
  {
    id: "ai-driven-incident-response",
    title: "AI-Driven Incident Response: 90% Alert Noise Reduction",
    description: "How machine learning and intelligent automation transform incident management. Real-world case study showing 90% reduction in alert noise and 75% faster MTTR through AI-powered correlation and automated response.",
    category: "case-study",
    author: "Automation Engineering Team",
    date: "2024-12-28",
    readTime: "10 min",
    tags: ["AI", "Automation", "Incident Response", "Observability"],
    featured: false,
    href: "/resources/ai-driven-incident-response",
  },
  {
    id: "multi-cloud-governance",
    title: "Multi-Cloud Governance: Policies That Scale",
    description: "Best practices for governing AWS, Azure, and GCP environments simultaneously. Covers cost allocation, security policies, compliance automation, and centralized observability across cloud providers.",
    category: "whitepaper",
    author: "Cloud Governance Team",
    date: "2024-12-20",
    readTime: "18 min",
    tags: ["Multi-Cloud", "Cloud Governance", "Compliance", "Policy Management"],
    featured: false,
    href: "/resources/multi-cloud-governance",
  },
  {
    id: "infrastructure-as-code-best-practices",
    title: "Infrastructure-as-Code: From Basics to Enterprise Scale",
    description: "Master IaC with Terraform, CloudFormation, and Pulumi. Learn state management, module design, testing strategies, and how to manage infrastructure across 100+ environments without configuration drift.",
    category: "guide",
    author: "Infrastructure Engineering",
    date: "2024-12-15",
    readTime: "22 min",
    tags: ["IaC", "Terraform", "DevOps", "Automation"],
    featured: false,
    href: "/resources/infrastructure-as-code-best-practices",
  },
  {
    id: "soc2-certification-roadmap",
    title: "SOC 2 Certification in 90 Days: A Practical Roadmap",
    description: "Accelerated path to SOC 2 Type II certification. Covers gap analysis, control implementation, evidence collection, and audit preparation based on successful certifications achieved in record time.",
    category: "webinar",
    author: "Compliance Practice",
    date: "2024-12-10",
    readTime: "45 min",
    tags: ["SOC 2", "Compliance", "Security", "Audit"],
    featured: false,
    href: "/resources/soc2-certification-roadmap",
  },
  {
    id: "cloud-migration-zero-downtime",
    title: "Cloud Migration Strategies: Achieving Zero Downtime",
    description: "Battle-tested strategies for migrating mission-critical workloads to the cloud without service interruptions. Includes cutover planning, data synchronization, and rollback procedures from 50+ successful migrations.",
    category: "blog",
    author: "Migration Practice Lead",
    date: "2024-12-05",
    readTime: "14 min",
    tags: ["Cloud Migration", "AWS", "Azure", "Zero Downtime"],
    featured: false,
    href: "/resources/cloud-migration-zero-downtime",
  },
  {
    id: "devops-metrics-that-matter",
    title: "DevOps Metrics That Actually Drive Business Value",
    description: "Move beyond vanity metrics to KPIs that correlate with business outcomes. Learn which metrics predict incidents, identify bottlenecks, and demonstrate ROI to executive leadership.",
    category: "blog",
    author: "DevOps Excellence Team",
    date: "2024-11-28",
    readTime: "10 min",
    tags: ["DevOps", "Metrics", "KPIs", "Business Value"],
    featured: false,
    href: "/resources/devops-metrics-that-matter",
  },
];

export const getFeaturedResources = () => {
  return resources.filter((r) => r.featured);
};

export const getResourcesByCategory = (category: ResourceCategory) => {
  return resources.filter((r) => r.category === category);
};

export const getResourcesByTag = (tag: string) => {
  return resources.filter((r) => r.tags.includes(tag));
};

export const getResourceById = (id: string) => {
  return resources.find((r) => r.id === id);
};

export const allTags = Array.from(new Set(resources.flatMap((r) => r.tags))).sort();
