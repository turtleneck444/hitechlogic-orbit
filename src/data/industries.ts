export type Industry = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  heroImage: string;
  audience: string[];
  compliance: string[];
  challenges: string[];
  solutions: string[];
  metrics: {
    label: string;
    value: string;
    icon: string;
  }[];
  services: {
    id: string;
    title: string;
    description: string;
    outcome: string;
  }[];
  href: string;
};

export const industries: Industry[] = [
  {
    id: "technology",
    name: "Technology & Software Development",
    tagline: "Accelerate innovation without sacrificing reliability",
    description: "For technology companies building products that customers depend on, we provide the infrastructure reliability that enables rapid iteration and seamless scaling.",
    icon: "Code",
    heroImage: "/images/industries/tech-hero.jpg",
    audience: ["Chief Technology Officers", "Chief Information Officers", "VP of Engineering", "VP of Infrastructure", "DevOps Directors"],
    compliance: ["Enterprise Compliance", "Security Standards", "Privacy Regulations", "Data Protection"],
    challenges: [
      "24/7 uptime requirements with zero maintenance windows",
      "Scaling infrastructure exponentially during growth phases",
      "Managing complex microservices architectures across multiple environments",
      "Rapid deployment cycles conflicting with stability requirements",
      "Security vulnerabilities introduced through continuous deployment",
      "Cost optimization while maintaining performance SLAs"
    ],
    solutions: [
      "99.99% uptime SLA with proactive monitoring and automated remediation",
      "Elastic infrastructure that scales seamlessly with demand",
      "Unified observability across microservices and cloud platforms",
      "CI/CD pipeline reliability without compromising speed",
      "Automated security scanning integrated into development workflows",
      "Predictive cost forecasting with automated optimization recommendations"
    ],
    metrics: [
      {
        label: "Uptime SLA",
        value: "99.99%",
        icon: "CheckCircle"
      },
      {
        label: "Deployment Frequency",
        value: "20x/day",
        icon: "TrendingUp"
      },
      {
        label: "MTTR Reduction",
        value: "90%",
        icon: "Zap"
      },
      {
        label: "Security Incidents",
        value: "0",
        icon: "Shield"
      }
    ],
    services: [
      {
        id: "infrastructure-cloud-operations",
        title: "Infrastructure & Cloud Operations",
        description: "Always-on infrastructure management with automated provisioning, monitoring, and scaling.",
        outcome: "99.99% uptime, zero outages, unlimited scalability"
      },
      {
        id: "system-oversight-event-reduction",
        title: "System Oversight & Event Reduction",
        description: "Proactive monitoring, intelligent alerting, and automated event correlation for complex architectures.",
        outcome: "80% reduction in alerts, 2-minute incident detection"
      },
      {
        id: "automated-corrective-actions",
        title: "Automated Corrective Actions",
        description: "Self-healing workflows and automated runbooks for continuous reliability.",
        outcome: "95% faster incident resolution, 48% fewer repeat issues"
      },
      {
        id: "reliability-performance-engineering",
        title: "Reliability & Performance Engineering",
        description: "Performance baselines, SLO tracking, and architectural reliability engineering.",
        outcome: "100% SLO compliance, 90% MTTR improvement"
      },
      {
        id: "rapid-prototyping",
        title: "Rapid Prototyping & Development",
        description: "Accelerated development with AI-assisted prototyping and production-ready architectures.",
        outcome: "4-8 weeks to MVP, 60% faster development"
      },
      {
        id: "security-identity-assurance",
        title: "Cybersecurity & Identity Assurance",
        description: "Zero-trust security with automated compliance monitoring and threat detection.",
        outcome: "<10 minutes threat detection, 100% compliance"
      },
      {
        id: "cost-efficiency-capacity-strategy",
        title: "World Cloud Cost Efficiency & Capacity Strategy",
        description: "Automated FinOps with predictive capacity planning and cost optimization.",
        outcome: "35% cost reduction, 95% forecast accuracy"
      },
      {
        id: "strategic-technology-partnership",
        title: "Strategic Technology Partnership",
        description: "Executive alignment that ties your infrastructure operations to product vision and enterprise outcomes.",
        outcome: "Aligned leadership, measurable innovation velocity"
      }
    ],
    href: "/industries/technology"
  },
  {
    id: "financial-services",
    name: "Financial Services",
    tagline: "Compliance, security, and availability for financial operations",
    description: "Banks, fintech companies, and financial institutions rely on us to maintain regulatory compliance, ensure system security, and deliver the 99.999% uptime their customers expect.",
    icon: "TrendingUp",
    heroImage: "/images/industries/finance-hero.jpg",
    audience: ["Chief Information Security Officers", "Chief Compliance Officers", "Chief Technology Officers", "VP of Risk", "Director of Operations"],
    compliance: ["Enterprise Compliance", "Payment Security", "Banking Regulations", "Financial Standards", "Security Frameworks", "Privacy Regulations", "Data Protection"],
    challenges: [
      "Strict regulatory compliance requiring continuous monitoring and reporting",
      "Financial transaction processing that must be available 99.999% of the time",
      "Data security and privacy requirements for sensitive customer information",
      "Legacy systems modernization without disrupting business operations",
      "Real-time fraud detection and prevention across multiple channels",
      "Financial reporting accuracy and audit trail requirements",
      "Scalability during peak market hours and high-volume periods"
    ],
    solutions: [
      "Automated compliance monitoring and continuous audit-readiness",
      "99.999% availability SLAs with multi-region failover capabilities",
      "Zero-trust security architecture with end-to-end encryption",
      "Cloud migration strategies with zero downtime and risk mitigation",
      "AI-powered fraud detection with real-time response automation",
      "Immutable audit trails with blockchain-level data integrity",
      "Predictive scaling for high-volume periods and market events"
    ],
    metrics: [
      {
        label: "Uptime SLA",
        value: "99.999%",
        icon: "CheckCircle"
      },
      {
        label: "Compliance Success",
        value: "100%",
        icon: "ShieldCheck"
      },
      {
        label: "Fraud Prevention",
        value: "99.9%",
        icon: "Lock"
      },
      {
        label: "Audit Readiness",
        value: "Always",
        icon: "FileText"
      }
    ],
    services: [
      {
        id: "security-identity-assurance",
        title: "Security & Identity Assurance",
        description: "Comprehensive security controls, compliance automation, and identity governance for financial data.",
        outcome: "Zero breaches, 100% audit success, regulatory compliance"
      },
      {
        id: "infrastructure-cloud-operations",
        title: "Infrastructure & Cloud Operations",
        description: "99.999% uptime infrastructure with proactive monitoring and automated remediation.",
        outcome: "Zero downtime, 50% faster incident response"
      },
      {
        id: "system-oversight-event-reduction",
        title: "System Oversight & Event Reduction",
        description: "Financial-grade monitoring and alerting for mission-critical transaction systems.",
        outcome: "95% alert noise reduction, real-time fraud detection"
      },
      {
        id: "reliability-performance-engineering",
        title: "Reliability & Performance Engineering",
        description: "High-availability architecture design and performance engineering for financial systems.",
        outcome: "99.999% transaction success rate, sub-second response times"
      },
      {
        id: "automated-corrective-actions",
        title: "Automated Corrective Actions",
        description: "Self-healing automation for financial transaction systems with compliance guardrails.",
        outcome: "Instant failover, automated compliance reporting"
      },
      {
        id: "cost-efficiency-capacity-strategy",
        title: "Cost Efficiency & Capacity Strategy",
        description: "FinOps for financial institutions with predictive capacity planning and cost optimization.",
        outcome: "30% infrastructure cost reduction, precise capacity planning"
      },
      {
        id: "rapid-prototyping",
        title: "Rapid Prototyping & Development",
        description: "Accelerated financial feature delivery with AI-assisted prototyping and compliance review.",
        outcome: "Compliance-ready pilots in weeks, 4x faster launch cadence"
      },
      {
        id: "strategic-technology-partnership",
        title: "Strategic Technology Partnership",
        description: "Executive-level guidance for technology strategy and regulatory compliance partnerships.",
        outcome: "Strategic alignment, regulatory expertise, executive confidence"
      }
    ],
    href: "/industries/financial-services"
  },
  {
    id: "healthcare",
    name: "Healthcare",
    tagline: "Patient safety and compliance through technology reliability",
    description: "Healthcare organizations trust us to safeguard patient data, ensure system availability during critical moments, and maintain strict regulatory compliance with healthcare standards.",
    icon: "Heart",
    heroImage: "/images/industries/healthcare-hero.jpg",
    audience: ["Chief Information Officers", "Chief Compliance Officers", "Chief Technology Officers", "VP of IT", "Director of Clinical Informatics"],
    compliance: ["Healthcare Compliance", "Health Data Protection", "Medical Device Standards", "Privacy Regulations", "Security Frameworks", "Healthcare Security"],
    challenges: [
      "Healthcare compliance requirements across all patient data systems",
      "24/7 availability for critical patient care systems and emergency response",
      "Protecting sensitive patient health information across all touchpoints",
      "Maintaining data integrity for electronic health records (EHR) systems",
      "Real-time monitoring and alerting for clinical decision support systems",
      "Regulatory reporting and audit requirements for patient safety",
      "Legacy system integration with modern healthcare technologies",
      "Scalability for telemedicine and mobile health applications"
    ],
    solutions: [
      "Comprehensive healthcare compliance automation with continuous monitoring and reporting",
      "Mission-critical system availability with redundant failover capabilities",
      "End-to-end patient data protection with zero-trust security and encryption at rest/transit",
      "Blockchain-level data integrity controls for electronic health records",
      "24/7 clinical system monitoring with immediate incident response capabilities",
      "Automated compliance documentation and audit trail generation",
      "Secure integration between legacy systems and modern healthcare platforms",
      "Elastic scaling for telemedicine platforms and mobile health applications"
    ],
    metrics: [
      {
        label: "Compliance Success",
        value: "100%",
        icon: "ShieldCheck"
      },
      {
        label: "Patient Data Protection",
        value: "Zero Breaches",
        icon: "Lock"
      },
      {
        label: "System Availability",
        value: "99.999%",
        icon: "Activity"
      },
      {
        label: "Patient Safety",
        value: "Zero Incidents",
        icon: "Heart"
      }
    ],
    services: [
      {
        id: "security-identity-assurance",
        title: "Security & Identity Assurance",
        description: "Healthcare compliance automation, patient data protection, and zero-trust controls.",
        outcome: "Zero patient data breaches, audit-readiness on demand"
      },
      {
        id: "infrastructure-cloud-operations",
        title: "Infrastructure & Cloud Operations",
        description: "Clinician-grade infrastructure with redundant failover, compliance reporting, and sensor reliability.",
        outcome: "99.999% availability during critical care windows"
      },
      {
        id: "system-oversight-event-reduction",
        title: "System Oversight & Event Reduction",
        description: "Real-time clinical telemetry, alert noise reduction, and patient safety event correlation.",
        outcome: "Real-time patient safety insight, <2-minute detection"
      },
      {
        id: "reliability-performance-engineering",
        title: "Reliability & Performance Engineering",
        description: "EHR and clinical system engineering with strict SLOs and performance guardrails.",
        outcome: "Zero interruptions, 100% SLO compliance for care delivery"
      },
      {
        id: "automated-corrective-actions",
        title: "Automated Corrective Actions",
        description: "Self-healing automation that keeps healthcare workflows compliant while remediating incidents.",
        outcome: "Instant recovery, automated compliance reporting"
      },
      {
        id: "cost-efficiency-capacity-strategy",
        title: "Cost Efficiency & Capacity Strategy",
        description: "Healthcare FinOps with volume-based capacity planning for seasonal peaks.",
        outcome: "Optimized spend, predictable care capacity"
      },
      {
        id: "rapid-prototyping",
        title: "Rapid Prototyping & Development",
        description: "Clinical innovation prototyping with compliance review baked in.",
        outcome: "Compliance-ready pilots in weeks, patient-safe rollouts"
      },
      {
        id: "strategic-technology-partnership",
        title: "Strategic Technology Partnership",
        description: "Executive support for healthcare digital transformation, governance, and compliance leadership.",
        outcome: "Aligned leadership, measurable patient outcomes"
      }
    ],
    href: "/industries/healthcare"
  },
  {
    id: "ecommerce",
    name: "E-commerce & Retail",
    tagline: "High-velocity commerce with zero downtime",
    description: "E-commerce companies depend on us to maintain peak performance during flash sales, holiday rushes, and viral marketing campaigns while protecting customer data and enabling seamless shopping experiences.",
    icon: "ShoppingCart",
    heroImage: "/images/industries/ecommerce-hero.jpg",
    audience: ["Chief Technology Officers", "VP of Engineering", "Director of E-commerce", "Chief Information Officers", "VP of Operations"],
    compliance: ["Payment Security", "Privacy Regulations", "Data Protection", "Enterprise Compliance", "Security Frameworks"],
    challenges: [
      "Website and checkout system availability during peak traffic periods",
      "Scalability for flash sales, promotions, and viral marketing campaigns",
      "Payment processing security and compliance standards",
      "Customer data protection and privacy regulations compliance",
      "Real-time order processing and inventory synchronization",
      "Mobile commerce performance and cross-device consistency",
      "Holiday and seasonal traffic spikes with automated scaling",
      "Third-party integration reliability (shipping, payments, fulfillment)"
    ],
    solutions: [
      "Auto-scaling infrastructure that handles 10x+ traffic spikes instantly",
      "99.999% uptime during peak sales events and promotions",
      "Payment security compliance automation with continuous monitoring",
      "Privacy-compliant data handling with automated audit trails",
      "Real-time order processing with transactional consistency guarantees",
      "Unified performance across desktop, mobile, and app experiences",
      "Predictive scaling algorithms for seasonal and promotional events",
      "Integration monitoring and automated reconciliation for third parties"
    ],
    metrics: [
      {
        label: "Peak Traffic Scale",
        value: "10x+",
        icon: "TrendingUp"
      },
      {
        label: "Conversion Rate",
        value: "+25%",
        icon: "DollarSign"
      },
      {
        label: "Downtime",
        value: "0%",
        icon: "CheckCircle"
      },
      {
        label: "Customer Retention",
        value: "+40%",
        icon: "Users"
      }
    ],
    services: [
      {
        id: "infrastructure-cloud-operations",
        title: "Infrastructure & Cloud Operations",
        description: "Auto-scaling e-commerce infrastructure with real-time capacity management.",
        outcome: "Zero downtime during peak sales, unlimited scalability"
      },
      {
        id: "system-oversight-event-reduction",
        title: "System Oversight & Event Reduction",
        description: "Real-time commerce monitoring, checkout optimization, and customer experience tracking.",
        outcome: "95% faster issue resolution, optimal customer experience"
      },
      {
        id: "automated-corrective-actions",
        title: "Automated Corrective Actions",
        description: "Self-healing commerce systems with automated failover and recovery.",
        outcome: "Instant cart recovery, seamless checkout experiences"
      },
      {
        id: "reliability-performance-engineering",
        title: "Reliability & Performance Engineering",
        description: "High-performance architecture for e-commerce platforms and payment processing.",
        outcome: "Sub-second page loads, 99.999% transaction success"
      },
      {
        id: "security-identity-assurance",
        title: "Security & Identity Assurance",
        description: "Payment security compliance, transaction protection, and customer data security.",
        outcome: "Zero payment breaches, 100% payment security compliance"
      },
      {
        id: "cost-efficiency-capacity-strategy",
        title: "Cost Efficiency & Capacity Strategy",
        description: "E-commerce FinOps with cost optimization and peak traffic cost management.",
        outcome: "25% cost reduction, optimized seasonal spending"
      },
      {
        id: "rapid-prototyping",
        title: "Rapid Prototyping & Development",
        description: "Fast feature deployment and A/B testing for e-commerce optimization.",
        outcome: "4x faster feature deployment, data-driven optimization"
      },
      {
        id: "strategic-technology-partnership",
        title: "Strategic Technology Partnership",
        description: "Executive alignment that ties infrastructure operations to revenue targets and seasonal plans.",
        outcome: "Aligned leadership, resilient peak-season execution"
      }
    ],
    href: "/industries/ecommerce"
  },
  {
    id: "saas",
    name: "SaaS & Cloud Software",
    tagline: "Enterprise-grade reliability for SaaS platforms",
    description: "SaaS companies rely on our infrastructure reliability to deliver the uptime SLAs their enterprise customers expect, while enabling rapid feature development and global scalability.",
    icon: "Cloud",
    heroImage: "/images/industries/saas-hero.jpg",
    audience: ["Chief Technology Officers", "VP of Engineering", "VP of Product", "Director of Infrastructure", "Chief Information Officers"],
    compliance: ["Enterprise Compliance", "Security Frameworks", "Privacy Regulations", "Data Protection", "Healthcare Standards", "Payment Security"],
    challenges: [
      "99.99% or higher uptime SLAs for enterprise SaaS customers",
      "Multi-tenant architecture scaling across millions of users",
      "Data isolation and security for B2B and enterprise customers",
      "Global infrastructure deployment and performance optimization",
      "Regulatory compliance across multiple jurisdictions and industries",
      "Feature deployment frequency without compromising system stability",
      "Third-party integrations and API reliability management",
      "Cost optimization while maintaining performance and feature velocity"
    ],
    solutions: [
      "99.999% uptime SLAs with automated failover and disaster recovery",
      "Elastic multi-tenant architecture that scales to millions of users",
      "Zero-trust security with tenant data isolation and encryption",
      "Global CDN and edge computing for optimal user performance worldwide",
      "Multi-framework compliance automation across enterprise standards",
      "Blue-green deployment strategies and canary release automation",
      "Comprehensive API monitoring and third-party integration management",
      "Predictive resource allocation and automated cost optimization"
    ],
    metrics: [
      {
        label: "Uptime SLA",
        value: "99.999%",
        icon: "CheckCircle"
      },
      {
        label: "Global Users",
        value: "10M+",
        icon: "Users"
      },
      {
        label: "Deployment Speed",
        value: "100x/day",
        icon: "Zap"
      },
      {
        label: "Compliance Coverage",
        value: "Multi-framework",
        icon: "Shield"
      }
    ],
    services: [
      {
        id: "infrastructure-cloud-operations",
        title: "Infrastructure & Cloud Operations",
        description: "Enterprise SaaS infrastructure with global availability and 99.999% uptime.",
        outcome: "Zero customer downtime, global performance optimization"
      },
      {
        id: "system-oversight-event-reduction",
        title: "System Oversight & Event Reduction",
        description: "Multi-tenant monitoring, global performance tracking, and proactive issue detection.",
        outcome: "97% fewer customer-impacting incidents, real-time global visibility"
      },
      {
        id: "reliability-performance-engineering",
        title: "Reliability & Performance Engineering",
        description: "SaaS architecture reliability, SLO management, and performance engineering.",
        outcome: "100% SLO achievement, optimal customer experience"
      },
      {
        id: "automated-corrective-actions",
        title: "Automated Corrective Actions",
        description: "Self-healing SaaS platforms with automated remediation and tenant isolation.",
        outcome: "Instant incident resolution, zero tenant spillover effects"
      },
      {
        id: "security-identity-assurance",
        title: "Security & Identity Assurance",
        description: "Enterprise security controls, regulatory compliance automation, and tenant data protection.",
        outcome: "Enterprise compliance certification, zero data breaches"
      },
      {
        id: "cost-efficiency-capacity-strategy",
        title: "Cost Efficiency & Capacity Strategy",
        description: "SaaS FinOps with usage-based pricing optimization and capacity planning.",
        outcome: "40% infrastructure cost reduction, profitable scalability"
      },
      {
        id: "rapid-prototyping",
        title: "Rapid Prototyping & Development",
        description: "Accelerated SaaS feature development with AI-assisted prototyping.",
        outcome: "6x faster product development, competitive feature advantage"
      },
      {
        id: "strategic-technology-partnership",
        title: "Strategic Technology Partnership",
        description: "Executive alignment that ties platform operations to roadmap velocity and enterprise expectations.",
        outcome: "Aligned teams, measurable business outcomes"
      }
    ],
    href: "/industries/saas"
  }
];

export const getIndustryById = (industryId: string) => {
  return industries.find((industry) => industry.id === industryId);
};
