export type ServiceCategory = {
  id: string;
  name: string;
  description: string;
  icon: string;
  services: Service[];
};

export type Service = {
  id: string;
  name: string;
  description: string;
  features: string[];
  benefits: string[];
  href: string;
};

export const serviceCategories: ServiceCategory[] = [
  {
    id: "cybersecurity-cloud-security",
    name: "Cybersecurity & Cloud Security",
    description: "Comprehensive security solutions including vulnerability management, zero-trust frameworks, and real-time threat detection",
    icon: "ShieldCheck",
    services: [
      {
        id: "vulnerability-management",
        name: "Vulnerability Management",
        description: "Proactive identification and remediation of security vulnerabilities across your infrastructure",
        features: [
          "Continuous vulnerability scanning and assessment",
          "Automated patch management and deployment",
          "Risk-based prioritization and remediation",
          "Compliance reporting and audit trails",
        ],
        benefits: [
          "Reduce attack surface by 80%",
          "Accelerate patch deployment by 60%",
          "Ensure compliance with enterprise security standards",
        ],
        href: "/services/security-identity-assurance",
      },
      {
        id: "cloud-security",
        name: "Cloud Security Posture Management",
        description: "Comprehensive cloud security with real-time threat detection and automated remediation",
        features: [
          "Multi-cloud security monitoring (AWS, Azure, GCP)",
          "Misconfig detection and auto-remediation",
          "Identity and access management (IAM) governance",
          "Data encryption and key management",
        ],
        benefits: [
          "Prevent 95% of cloud misconfigurations",
          "Reduce security incidents by 70%",
          "Maintain continuous compliance",
        ],
        href: "/services/security-identity-assurance",
      },
      {
        id: "zero-trust-security",
        name: "Zero-Trust Security",
        description: "Implement zero-trust architecture with identity-based access controls and micro-segmentation",
        features: [
          "Identity verification and multi-factor authentication",
          "Network micro-segmentation",
          "Least-privilege access enforcement",
          "Continuous authentication and authorization",
        ],
        benefits: [
          "Eliminate lateral movement threats",
          "Reduce breach impact by 90%",
          "Enable secure remote work",
        ],
        href: "/services/security-identity-assurance",
      },
      {
        id: "threat-detection-response",
        name: "Threat Detection & Ransomware Response",
        description: "AI-powered threat detection with automated incident response and ransomware protection",
        features: [
          "24/7 security operations center (SOC)",
          "AI-driven threat hunting and detection",
          "Automated incident response playbooks",
          "Ransomware detection and recovery",
        ],
        benefits: [
          "Detect threats in under 5 minutes",
          "Respond to incidents 10x faster",
          "Prevent ransomware attacks",
        ],
        href: "/services/security-identity-assurance",
      },
      {
        id: "supply-chain-security",
        name: "Software Supply Chain Security",
        description: "Secure your software supply chain from code to deployment",
        features: [
          "Software bill of materials (SBOM) generation",
          "Dependency vulnerability scanning",
          "Container image security scanning",
          "CI/CD pipeline security hardening",
        ],
        benefits: [
          "Identify vulnerabilities before deployment",
          "Ensure compliance with security frameworks",
          "Protect against supply chain attacks",
        ],
        href: "/services/security-identity-assurance",
      },
    ],
  },
  {
    id: "development-deployment",
    name: "Development & Deployment",
    description: "DevOps services, infrastructure-as-code (IaC), and Kubernetes/microservices support",
    icon: "Code",
    services: [
      {
        id: "devops-automation",
        name: "DevOps & CI/CD Automation",
        description: "Streamline development workflows with automated CI/CD pipelines and DevOps best practices",
        features: [
          "CI/CD pipeline design and implementation",
          "Automated testing and quality gates",
          "GitOps workflows and version control",
          "Release management and deployment strategies",
        ],
        benefits: [
          "Deploy 20x more frequently",
          "Reduce deployment failures by 80%",
          "Accelerate time-to-market",
        ],
        href: "/services/automated-corrective-actions",
      },
      {
        id: "infrastructure-as-code",
        name: "Infrastructure-as-Code (IaC)",
        description: "Manage infrastructure with code using Terraform, CloudFormation, and Pulumi",
        features: [
          "Infrastructure provisioning automation",
          "Configuration management (Ansible, Chef, Puppet)",
          "State management and drift detection",
          "Multi-cloud IaC orchestration",
        ],
        benefits: [
          "Provision infrastructure 10x faster",
          "Eliminate configuration drift",
          "Enable infrastructure versioning and rollback",
        ],
        href: "/services/infrastructure-cloud-operations",
      },
      {
        id: "kubernetes-microservices",
        name: "Kubernetes & Microservices",
        description: "Container orchestration and microservices architecture for cloud-native applications",
        features: [
          "Kubernetes cluster design and deployment",
          "Service mesh implementation (Istio, Linkerd)",
          "Container security and runtime protection",
          "Auto-scaling and load balancing",
        ],
        benefits: [
          "Scale applications dynamically",
          "Improve resource utilization by 60%",
          "Enable zero-downtime deployments",
        ],
        href: "/services/reliability-performance-engineering",
      },
      {
        id: "automated-testing",
        name: "Automated Testing & Quality Assurance",
        description: "Comprehensive testing automation for continuous quality assurance",
        features: [
          "Unit, integration, and end-to-end testing",
          "Performance and load testing",
          "Security testing (SAST, DAST)",
          "Test data management",
        ],
        benefits: [
          "Catch bugs 90% earlier",
          "Reduce testing time by 70%",
          "Improve code quality",
        ],
        href: "/services/reliability-performance-engineering",
      },
      {
        id: "rapid-prototyping",
        name: "Rapid Prototyping & Development",
        description: "Turn ideas into production-ready MVPs in 4-8 weeks with AI-accelerated delivery",
        features: [
          "Concept validation and clickable prototypes",
          "AI-assisted full-stack development with enterprise patterns",
          "Cloud-native architecture (serverless, Kubernetes, microservices)",
          "Security, testing, and CI/CD built in from sprint one",
          "Seamless hand-off to managed services for scaling",
        ],
        benefits: [
          "Launch MVPs in 4-8 weeks",
          "Production-ready from day one",
          "Reduce development costs by 60%",
          "Built with MSP-grade reliability and security",
        ],
        href: "/services/rapid-prototyping",
      },
    ],
  },
  {
    id: "cloud-infrastructure-finops",
    name: "Cloud Infrastructure & FinOps",
    description: "Migration & modernization, observability & monitoring, cloud FinOps, and business continuity",
    icon: "Cloud",
    services: [
      {
        id: "cloud-migration-modernization",
        name: "Cloud Migration & Modernization",
        description: "Seamless cloud migration with zero downtime and application modernization",
        features: [
          "Cloud readiness assessment",
          "Migration strategy and planning (lift-and-shift, re-platform, refactor)",
          "Application modernization (containers, serverless)",
          "Data migration and synchronization",
        ],
        benefits: [
          "Migrate with zero downtime",
          "Reduce infrastructure costs by 40%",
          "Improve application performance by 3x",
        ],
        href: "/services/infrastructure-cloud-operations",
      },
      {
        id: "observability-monitoring",
        name: "Observability & Monitoring",
        description: "Full-stack observability with AI-powered insights and intelligent alerting",
        features: [
          "Unified monitoring (metrics, logs, traces)",
          "AI-powered anomaly detection",
          "Intelligent alert correlation and noise reduction",
          "Custom dashboards and SLO tracking",
        ],
        benefits: [
          "Reduce alert noise by 90%",
          "Detect issues 80% faster",
          "Improve MTTR by 75%",
        ],
        href: "/services/system-oversight-event-reduction",
      },
      {
        id: "cloud-finops",
        name: "Cloud FinOps & Cost Optimization",
        description: "AI-driven cost optimization, financial governance, and FinOps maturity",
        features: [
          "Cloud cost visibility and allocation",
          "Automated cost optimization (rightsizing, reserved instances)",
          "Budget forecasting and anomaly detection",
          "Showback and chargeback reporting",
        ],
        benefits: [
          "Reduce cloud costs by 50%",
          "Eliminate waste spending",
          "Enable cost-aware engineering",
        ],
        href: "/services/cost-efficiency-capacity-strategy",
      },
      {
        id: "business-continuity",
        name: "Business Continuity & Disaster Recovery",
        description: "Comprehensive disaster recovery planning and business continuity solutions",
        features: [
          "Disaster recovery planning and testing",
          "Backup and restore automation",
          "High availability architecture design",
          "Failover and redundancy strategies",
        ],
        benefits: [
          "Achieve 99.99% uptime",
          "Recover from disasters in minutes",
          "Ensure business continuity",
        ],
        href: "/services/reliability-performance-engineering",
      },
      {
        id: "digital-workplace",
        name: "Digital Workplace & Collaboration",
        description: "Modern digital workplace solutions with secure remote work enablement",
        features: [
          "Virtual desktop infrastructure (VDI)",
          "Collaboration platform management (M365, Slack, Zoom)",
          "Endpoint management and security",
          "Remote work productivity tools",
        ],
        benefits: [
          "Enable seamless remote work",
          "Improve collaboration by 60%",
          "Secure distributed workforce",
        ],
        href: "/services/infrastructure-cloud-operations",
      },
    ],
  },
  {
    id: "business-consulting",
    name: "Business Consulting",
    description: "Strategic consulting for hybrid & multi-cloud, managed services, and security advisory",
    icon: "Briefcase",
    services: [
      {
        id: "hybrid-multicloud-consulting",
        name: "Hybrid & Multi-Cloud Consulting",
        description: "Strategic guidance for hybrid and multi-cloud architecture and governance",
        features: [
          "Cloud strategy and roadmap development",
          "Hybrid cloud architecture design",
          "Multi-cloud governance and policies",
          "Vendor selection and negotiation",
        ],
        benefits: [
          "Optimize cloud investments",
          "Avoid vendor lock-in",
          "Enable cloud flexibility",
        ],
        href: "/services/strategic-technology-partnership",
      },
      {
        id: "managed-services",
        name: "Cloud & Security Managed Services",
        description: "24/7 managed operations for cloud infrastructure and security",
        features: [
          "24/7 NOC and SOC operations",
          "Proactive monitoring and maintenance",
          "Incident management and resolution",
          "Quarterly business reviews and optimization",
        ],
        benefits: [
          "Reduce operational overhead by 70%",
          "Access expert resources 24/7",
          "Focus on core business initiatives",
        ],
        href: "/services/strategic-technology-partnership",
      },
      {
        id: "security-consulting",
        name: "Security Consulting & Advisory",
        description: "Strategic security guidance and compliance advisory services",
        features: [
          "Security posture assessment",
          "Compliance roadmap for enterprise standards and regulations",
          "Security program development",
          "Executive security training and awareness",
        ],
        benefits: [
          "Achieve compliance certification",
          "Build security-first culture",
          "Reduce security risks",
        ],
        href: "/services/security-identity-assurance",
      },
      {
        id: "reliability-engineering",
        name: "Site Reliability Engineering (SRE)",
        description: "SRE practices to improve reliability, performance, and operational excellence",
        features: [
          "SLO/SLI definition and tracking",
          "Error budget management",
          "Capacity planning and forecasting",
          "Post-incident reviews and blameless postmortems",
        ],
        benefits: [
          "Achieve 99.99% uptime SLAs",
          "Reduce incidents by 80%",
          "Build reliability culture",
        ],
        href: "/services/reliability-performance-engineering",
      },
    ],
  },
];

// Export individual service lists for backward compatibility
export const allServices = serviceCategories.flatMap((category) => category.services);

export const getServicesByCategory = (categoryId: string) => {
  const category = serviceCategories.find((cat) => cat.id === categoryId);
  return category?.services || [];
};

export const getServiceById = (serviceId: string) => {
  return allServices.find((service) => service.id === serviceId);
};
