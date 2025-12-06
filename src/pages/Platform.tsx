import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Eye, Filter, Workflow, Brain, FileText, ArrowRight } from "lucide-react";
import { SEO } from "@/components/SEO";

const features = [
  {
    icon: Eye,
    title: "Unified Observability",
    description: "Aggregate logs, metrics, and distributed traces into a single timeline. See the complete story of every request, error, and system behavior in one place.",
    benefits: ["Real-time monitoring", "Distributed tracing", "Log aggregation", "Custom dashboards"],
  },
  {
    icon: Filter,
    title: "Smart Alert Filtering",
    description: "AI-powered noise reduction ensures only meaningful alerts reach your team. No more alert fatigue—just actionable insights when they matter.",
    benefits: ["ML-based anomaly detection", "Alert correlation", "Priority scoring", "Customizable thresholds"],
  },
  {
    icon: Workflow,
    title: "Automation Playbooks",
    description: "Drag-and-drop workflow builder for creating automated responses. Manual execution or fully autonomous—you decide the level of automation.",
    benefits: ["Visual workflow editor", "Pre-built templates", "Version control", "Test mode"],
  },
  {
    icon: Brain,
    title: "Continuous Learning",
    description: "Every automated action improves the system. Our AI analyzes outcomes, identifies patterns, and suggests optimizations to your runbooks.",
    benefits: ["Outcome tracking", "Pattern recognition", "Automated suggestions", "Performance analytics"],
  },
  {
    icon: FileText,
    title: "Weekly Ops Briefing",
    description: "Automated report showing prevented incidents, time saved, reliability score changes, and recommended improvements. Stay informed without the manual work.",
    benefits: ["Automated reporting", "Trend analysis", "Cost tracking", "Executive summaries"],
  },
];

const comparison = {
  manual: [
    "Alert fatigue from noise",
    "Manual incident response",
    "Reactive operations",
    "Growing ops headcount",
    "Unpredictable MTTR",
  ],
  hitechlogic: [
    "Only meaningful alerts",
    "Automated remediation",
    "Proactive prevention",
    "Scalable automation",
    "Consistent fast recovery",
  ],
};

export default function Platform() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://hitechlogic.com/#organization",
    "name": "HiTechLogic",
    "url": "https://hitechlogic.com",
    "logo": "https://hitechlogic.com/logo.png"
  };

  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": "https://hitechlogic.com/platform/#softwareapplication",
    "name": "HiTechLogic Autonomous Operations Platform",
    "description": "Complete platform for autonomous infrastructure operations with unified observability, AI-powered alert filtering, automation playbooks, and continuous learning capabilities.",
    "applicationCategory": "BusinessApplication",
    "applicationSubCategory": "Infrastructure Management",
    "operatingSystem": "Cloud-based",
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "price": "0",
      "description": "Custom pricing based on infrastructure scale"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "500",
      "bestRating": "5"
    },
    "featureList": features.map(f => f.title).join(", "),
    "publisher": {
      "@id": "https://hitechlogic.com/#organization"
    }
  };

  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://hitechlogic.com/platform/#webpage",
    "url": "https://hitechlogic.com/platform",
    "name": "Platform Features - Autonomous Infrastructure Operations | HiTechLogic",
    "description": "Complete platform for autonomous infrastructure operations. Unified observability, AI-powered alert filtering, automation playbooks, and self-healing infrastructure.",
    "inLanguage": "en-US",
    "isPartOf": {
      "@id": "https://hitechlogic.com/#website"
    },
    "about": {
      "@id": "https://hitechlogic.com/#organization"
    },
    "mainEntity": {
      "@id": "https://hitechlogic.com/platform/#softwareapplication"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://hitechlogic.com/platform/#breadcrumb",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://hitechlogic.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Platform",
        "item": "https://hitechlogic.com/platform"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the HiTechLogic Platform?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The HiTechLogic Platform is a complete solution for autonomous infrastructure operations, combining unified observability, AI-powered alert filtering, automation playbooks, continuous learning, and automated reporting in one integrated system."
        }
      },
      {
        "@type": "Question",
        "name": "How does AI-powered alert filtering work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our ML-based anomaly detection correlates alerts, scores priority, and filters noise to ensure only meaningful alerts reach your team. This typically reduces alert volume by 80-90%."
        }
      },
      {
        "@type": "Question",
        "name": "Can I customize automation playbooks?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our drag-and-drop workflow builder allows you to create custom automated responses. You can choose manual execution, semi-automated, or fully autonomous operation based on your comfort level."
        }
      }
    ]
  };

  return (
    <>
      <SEO
        title="Platform Features - Autonomous Infrastructure Operations | HiTechLogic"
        description="Complete platform for autonomous infrastructure operations. Unified observability, AI-powered alert filtering, automation playbooks, continuous learning, and self-healing infrastructure. Request a demo today."
        keywords="infrastructure platform, autonomous operations, observability platform, alert filtering, automation playbooks, AI operations, self-healing infrastructure, DevOps platform, SRE tools, infrastructure automation"
        canonical="https://hitechlogic.com/platform"
        schema={[organizationSchema, softwareApplicationSchema, webpageSchema, breadcrumbSchema, faqSchema]}
      />
      <Layout>
        {/* Hero Section */}
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-hero overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-electric-blue/10 rounded-full blur-3xl" />
          </div>
          
          <div className="container relative z-10 mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              The Complete Platform for{" "}
              <span className="gradient-text">Autonomous Operations</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              From observability to automation, everything you need to build self-healing infrastructure in one integrated platform.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Request a Demo
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="space-y-16">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className={`flex flex-col ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  } gap-12 items-center`}
                >
                  <div className="flex-1">
                    <div className="inline-flex items-center justify-center h-16 w-16 rounded-lg bg-gradient-primary mb-6 glow-effect">
                      <feature.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{feature.title}</h2>
                    <p className="text-lg text-muted-foreground mb-6">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center space-x-2">
                          <div className="h-5 w-5 rounded-full bg-accent/20 flex items-center justify-center">
                            <div className="h-2 w-2 rounded-full bg-accent" />
                          </div>
                          <span className="text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex-1">
                    <Card className="glass-card p-8 h-80 flex items-center justify-center">
                      <div className="text-center text-muted-foreground">
                        <feature.icon className="h-24 w-24 mx-auto mb-4 opacity-20" />
                        <p>Feature Visualization</p>
                      </div>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-card">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Manual Operations vs. HiTechLogic
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="glass-card p-8">
                <h3 className="text-xl font-bold mb-6 text-muted-foreground">Manual Operations</h3>
                <ul className="space-y-4">
                  {comparison.manual.map((item) => (
                    <li key={item} className="flex items-start space-x-3">
                      <span className="text-destructive mt-1">✕</span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
              <Card className="glass-card p-8 border-2 border-accent">
                <h3 className="text-xl font-bold mb-6 gradient-text">HiTechLogic Platform</h3>
                <ul className="space-y-4">
                  {comparison.hitechlogic.map((item) => (
                    <li key={item} className="flex items-start space-x-3">
                      <span className="text-accent mt-1">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              See the Platform in Action
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Book a personalized demo and discover how HiTechLogic can transform your operations.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">Schedule Demo</Link>
            </Button>
          </div>
        </section>
      </Layout>
    </>
  );
}