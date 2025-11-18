export type CaseStudy = {
  id: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
    description: string;
  }[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
  services: string[];
  image?: string;
  featured: boolean;
};

export const caseStudies: CaseStudy[] = [
  {
    id: "healthcare-cloud-migration",
    title: "Healthcare Provider Achieves Zero-Downtime Cloud Migration",
    client: "Ruixen Healthcare",
    industry: "Healthcare",
    challenge: "A leading healthcare provider needed to migrate their legacy on-premises infrastructure to AWS while maintaining healthcare compliance and ensuring zero downtime for critical patient care systems.",
    solution: "HiTechLogic designed and executed a phased migration strategy with automated failover, real-time data synchronization, and comprehensive security controls including encryption at rest and in transit.",
    results: [
      {
        metric: "99.99%",
        value: "Uptime Maintained",
        description: "Zero downtime during entire migration process",
      },
      {
        metric: "52%",
        value: "Cost Reduction",
        description: "Infrastructure costs reduced through rightsizing and reserved instances",
      },
      {
        metric: "3x",
        value: "Performance Improvement",
        description: "Application response times improved dramatically",
      },
      {
        metric: "100%",
        value: "Healthcare Compliance",
        description: "Achieved and maintained full regulatory compliance",
      },
    ],
    testimonial: {
      quote: "HiTechLogic's expertise enabled us to modernize our infrastructure without disrupting patient care. The cost savings alone justified the investment, but the performance improvements have been transformational.",
      author: "Dr. Sarah Chen",
      role: "Chief Information Officer",
      company: "Ruixen Healthcare",
    },
    services: ["Cloud Migration & Modernization", "Security & Compliance", "Infrastructure Operations"],
    featured: true,
  },
  {
    id: "fintech-security-transformation",
    title: "FinTech Company Achieves Enterprise Compliance Certification",
    client: "Bridgestone FinTech",
    industry: "Financial Services",
    challenge: "A rapidly growing fintech startup needed to achieve enterprise compliance certification to win enterprise customers, but lacked the security infrastructure and processes required for compliance.",
    solution: "HiTechLogic implemented a comprehensive zero-trust security architecture, deployed continuous vulnerability management, established incident response procedures, and guided the company through the audit process.",
    results: [
      {
        metric: "6 Months",
        value: "Time to Certification",
        description: "Achieved enterprise compliance certification in record time",
      },
      {
        metric: "Zero",
        value: "Audit Findings",
        description: "Passed audit with zero findings or exceptions",
      },
      {
        metric: "95%",
        value: "Threat Prevention",
        description: "Prevented 95% of potential security incidents",
      },
      {
        metric: "3x",
        value: "Enterprise Revenue",
        description: "Enterprise customer revenue tripled post-certification",
      },
    ],
    testimonial: {
      quote: "HiTechLogic didn't just help us check a compliance box – they transformed our security posture and gave us a competitive advantage in winning enterprise deals.",
      author: "James Liu",
      role: "VP of Engineering",
      company: "Bridgestone FinTech",
    },
    services: ["Zero-Trust Security", "Compliance & Governance", "Security Consulting"],
    featured: true,
  },
  {
    id: "ecommerce-finops-optimization",
    title: "E-commerce Platform Slashes Cloud Costs by 58%",
    client: "Apex Commerce",
    industry: "Retail & E-commerce",
    challenge: "A high-growth e-commerce platform was experiencing runaway cloud costs with limited visibility into spending patterns and no optimization strategy in place.",
    solution: "HiTechLogic implemented comprehensive FinOps practices including real-time cost allocation, automated rightsizing, reserved instance planning, and AI-powered anomaly detection to optimize cloud spending.",
    results: [
      {
        metric: "58%",
        value: "Cost Reduction",
        description: "Annual cloud spending reduced from $2.4M to $1.0M",
      },
      {
        metric: "Real-time",
        value: "Cost Visibility",
        description: "Implemented granular cost tracking across all teams and services",
      },
      {
        metric: "85%",
        value: "Resource Utilization",
        description: "Improved compute resource utilization from 32% to 85%",
      },
      {
        metric: "$1.4M",
        value: "Annual Savings",
        description: "Recurring annual savings enabling reinvestment in growth",
      },
    ],
    testimonial: {
      quote: "The ROI was immediate. Within 60 days, we saw dramatic cost reductions while actually improving performance. HiTechLogic's FinOps expertise paid for itself many times over.",
      author: "Maria Torres",
      role: "Chief Technology Officer",
      company: "Apex Commerce",
    },
    services: ["Cloud FinOps", "Cost Optimization", "Resource Management"],
    featured: true,
  },
  {
    id: "manufacturing-iot-monitoring",
    title: "Manufacturing Leader Deploys Predictive Maintenance",
    client: "Helios Manufacturing",
    industry: "Manufacturing",
    challenge: "A global manufacturing company faced frequent equipment failures leading to unplanned downtime, production losses, and safety concerns across multiple facilities.",
    solution: "HiTechLogic deployed IoT sensors across manufacturing equipment, implemented real-time monitoring with AI-powered predictive analytics, and created automated maintenance workflows to prevent failures before they occur.",
    results: [
      {
        metric: "78%",
        value: "Downtime Reduction",
        description: "Unplanned downtime reduced from 156 hours to 34 hours annually",
      },
      {
        metric: "$3.2M",
        value: "Production Recovery",
        description: "Annual value of prevented production losses",
      },
      {
        metric: "92%",
        value: "Prediction Accuracy",
        description: "AI models accurately predict equipment failures 3-7 days in advance",
      },
      {
        metric: "45%",
        value: "Maintenance Efficiency",
        description: "Maintenance teams operate more efficiently with predictive scheduling",
      },
    ],
    testimonial: {
      quote: "Predictive maintenance has transformed our operations. We've moved from reactive firefighting to proactive prevention, dramatically improving both safety and profitability.",
      author: "Samuel Adebayo",
      role: "Director of Operations",
      company: "Helios Manufacturing",
    },
    services: ["IoT Integration", "Predictive Analytics", "Automated Workflows"],
    featured: false,
  },
  {
    id: "saas-reliability-engineering",
    title: "SaaS Provider Achieves 99.99% Uptime SLA",
    client: "CloudVault Technologies",
    industry: "Technology & SaaS",
    challenge: "A B2B SaaS provider struggled with frequent outages, slow incident response times, and customer churn due to reliability issues preventing them from offering competitive SLAs.",
    solution: "HiTechLogic implemented comprehensive SRE practices including SLO definition, error budget management, automated incident response, intelligent alerting, and chaos engineering to build resilience.",
    results: [
      {
        metric: "99.99%",
        value: "Uptime Achieved",
        description: "Consistent 99.99% uptime enabling enterprise SLAs",
      },
      {
        metric: "87%",
        value: "Alert Noise Reduced",
        description: "Intelligent filtering reduced alert volume from 2,400 to 312 monthly",
      },
      {
        metric: "12 min",
        value: "Average MTTR",
        description: "Mean time to resolution improved from 68 minutes to 12 minutes",
      },
      {
        metric: "35%",
        value: "Customer Retention",
        description: "Improved retention rate due to reliability improvements",
      },
    ],
    testimonial: {
      quote: "HiTechLogic's SRE expertise transformed us from struggling with reliability to leading our market in uptime. Our customers notice the difference, and so does our bottom line.",
      author: "Alexandra Kim",
      role: "VP of Engineering",
      company: "CloudVault Technologies",
    },
    services: ["SRE Implementation", "Incident Management", "Observability & Monitoring"],
    featured: false,
  },
  {
    id: "enterprise-devops-transformation",
    title: "Enterprise Accelerates Release Velocity by 20x",
    client: "Global Financial Services Corp",
    industry: "Financial Services",
    challenge: "A large enterprise financial institution had slow, manual release processes taking weeks or months, preventing them from competing with agile fintech startups.",
    solution: "HiTechLogic modernized their software delivery with comprehensive DevOps automation including CI/CD pipelines, infrastructure-as-code, automated testing, and container orchestration.",
    results: [
      {
        metric: "20x",
        value: "Faster Releases",
        description: "Deploy frequency increased from monthly to multiple times daily",
      },
      {
        metric: "94%",
        value: "Deployment Success",
        description: "Deployment failure rate reduced from 35% to 6%",
      },
      {
        metric: "70%",
        value: "Testing Automation",
        description: "Automated 70% of testing, freeing engineers for innovation",
      },
      {
        metric: "6 Weeks",
        value: "Time to Market",
        description: "New features reach customers 6 weeks faster on average",
      },
    ],
    testimonial: {
      quote: "HiTechLogic helped us achieve what we thought impossible – enterprise-scale agility. We now deliver features as fast as the startups trying to disrupt us.",
      author: "Robert Singh",
      role: "Chief Digital Officer",
      company: "Global Financial Services Corp",
    },
    services: ["DevOps Transformation", "CI/CD Automation", "Container Orchestration"],
    featured: false,
  },
];

export const getFeaturedCaseStudies = () => {
  return caseStudies.filter((cs) => cs.featured);
};

export const getCaseStudiesByIndustry = (industry: string) => {
  return caseStudies.filter((cs) => cs.industry === industry);
};

export const getCaseStudyById = (id: string) => {
  return caseStudies.find((cs) => cs.id === id);
};
