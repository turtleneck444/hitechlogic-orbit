import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { ValuePillars } from "@/components/home/ValuePillars";
import { HowItWorks } from "@/components/home/HowItWorks";
import { ServiceExplorer } from "@/components/home/ServiceExplorer";
import { CTASection } from "@/components/home/CTASection";
import { AssessmentTool } from "@/components/home/AssessmentTool";
import { AIAutomationFlow } from "@/components/home/AIAutomationFlow";
import { SEO } from "@/components/SEO";
import {
  organizationSchema,
  websiteSchema,
  siteNavigationSchema,
  localBusinessSchema,
  createWebPageSchema,
  createBreadcrumbSchema,
  createFAQSchema,
  createHowToSchema,
  createServiceSchema,
  createOfferCatalogSchema,
  SCHEMA_CONSTANTS
} from "@/lib/schema";

const { SITE_URL } = SCHEMA_CONSTANTS;

const Index = () => {
  // WebPage schema for homepage
  const webpageSchema = createWebPageSchema({
    url: SITE_URL,
    name: "HiTechLogic - Enterprise Infrastructure Operations Perfected | AI-Powered DevOps & SRE",
    description: "Transform enterprise infrastructure with AI-powered automation. Achieve 99.99% uptime, reduce costs by 50%, and eliminate 90% of alert noise. Trusted by 500+ enterprises worldwide.",
    dateModified: "2025-01-28",
    speakable: ["h1", ".hero-description"]
  });

  // Homepage breadcrumb
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: SITE_URL }
  ]);

  // FAQ schema with common questions
  const faqSchema = createFAQSchema([
    {
      question: "What makes HiTechLogic different from traditional managed service providers?",
      answer: "HiTechLogic goes beyond monitoring to make infrastructure truly autonomous. Our AI-driven remediation, zero-compromise reliability approach, and partnership-first mentality deliver measurable results: 99.99% uptime, 50% cost reduction, and 85% faster incident resolution."
    },
    {
      question: "How quickly can HiTechLogic improve our infrastructure operations?",
      answer: "Most enterprise clients see measurable improvements within 30 days. Our comprehensive assessment takes 1-2 weeks, followed by strategic implementation. Critical improvements like alert noise reduction (80-90%) and MTTR acceleration (85%) are typically achieved within the first month."
    },
    {
      question: "What industries does HiTechLogic serve?",
      answer: "HiTechLogic serves enterprise organizations across all major industries including financial services, healthcare, technology, e-commerce, manufacturing, and government. Our solutions are industry-agnostic and can be customized for specific regulatory and operational requirements."
    },
    {
      question: "What is your uptime guarantee?",
      answer: "We guarantee 99.99% uptime across all enterprise plans. This translates to less than 52 minutes of downtime per year. Our SLA includes financial credits for any violations, demonstrating our confidence in our reliability engineering."
    },
    {
      question: "How do you reduce alert noise by 80-90%?",
      answer: "Our AI-powered alert correlation engine uses machine learning to identify patterns, deduplicate alerts, and intelligently group related issues. This reduces false positives and ensures your team only sees actionable alerts that require attention."
    }
  ], `${SITE_URL}/#faq`);

  // HowTo schema for infrastructure transformation
  const howToSchema = createHowToSchema({
    name: "How to Achieve 99.99% Infrastructure Uptime with HiTechLogic",
    description: "Step-by-step guide to transforming enterprise infrastructure operations with AI-powered automation and reliability engineering",
    totalTime: "P30D",
    tool: [
      "HiTechLogic Automation Platform",
      "Intelligent Alert Correlation Engine",
      "Automated Runbook Library",
      "AI-Powered Observability Dashboard"
    ],
    supply: [
      "Enterprise Infrastructure Assessment",
      "Current Monitoring Configuration",
      "Incident History Data"
    ],
    steps: [
      {
        name: "Infrastructure Assessment",
        text: "Comprehensive evaluation of current infrastructure, monitoring tools, alert configurations, and operational processes. Our team identifies reliability gaps and automation opportunities.",
        url: `${SITE_URL}/contact`
      },
      {
        name: "Strategic Planning",
        text: "Develop customized automation roadmap and reliability improvement plan based on your specific infrastructure challenges and business objectives.",
        url: `${SITE_URL}/approach`
      },
      {
        name: "Implementation",
        text: "Deploy AI-powered automation, intelligent monitoring, and automated remediation systems. Configure runbooks and establish 24/7 operations coverage.",
        url: `${SITE_URL}/services`
      },
      {
        name: "Continuous Optimization",
        text: "Ongoing monitoring, performance tuning, and optimization for sustained 99.99% uptime. Regular reliability reviews and proactive improvements.",
        url: `${SITE_URL}/platform`
      }
    ],
    id: `${SITE_URL}/#howto`
  });

  // Primary service offering schema
  const serviceSchema = createServiceSchema({
    id: `${SITE_URL}/#primaryservice`,
    name: "Enterprise Infrastructure Operations",
    description: "Complete managed infrastructure services delivering 99.99% uptime, 50% cost reduction, and operational excellence through AI-powered automation.",
    url: SITE_URL,
    serviceType: "Managed Infrastructure Services",
    slogan: "Infrastructure Operations Perfected",
    audience: "CTOs, CIOs, VP of Engineering, DevOps Directors, IT Directors, Platform Engineering Leaders",
    aggregateRating: { ratingValue: "4.9", reviewCount: "500" },
    offers: [
      { name: "Infrastructure Reliability Engineering", description: "24/7 SRE services with 99.99% uptime guarantees" },
      { name: "FinOps & Cost Optimization", description: "Reduce cloud costs by 50% with AI-driven optimization" },
      { name: "Security Operations Center", description: "Zero-trust security with automated threat detection" },
      { name: "DevOps Automation", description: "615+ automated runbooks with 99.9% success rate" },
      { name: "Alert Noise Reduction", description: "Reduce monitoring alerts by 80-90% with intelligent correlation" }
    ]
  });

  return (
    <>
      <SEO
        title="HiTechLogic - Enterprise Infrastructure Operations Perfected | AI-Powered DevOps & SRE Solutions"
        description="Transform enterprise infrastructure with AI-powered automation. Achieve 99.99% uptime, reduce costs by 50%, eliminate 90% alert noise. Trusted by 500+ enterprises with proven results in FinOps, security, and reliability engineering."
        keywords="enterprise infrastructure management, AI-powered DevOps, site reliability engineering, FinOps cost optimization, cloud security operations, infrastructure automation, MTTR reduction, alert noise reduction, enterprise IT operations, managed services provider, infrastructure as code, zero-trust security, kubernetes management, multi-cloud operations"
        schema={[
          organizationSchema,
          websiteSchema,
          webpageSchema,
          breadcrumbSchema,
          faqSchema,
          howToSchema,
          serviceSchema,
          siteNavigationSchema,
          localBusinessSchema
        ]}
      />
      <Layout>
        <Hero />
        <ValuePillars />
        <ServiceExplorer />
        <AIAutomationFlow />
        <HowItWorks />
        <AssessmentTool />
        <CTASection />
      </Layout>
    </>
  );
};

export default Index;
