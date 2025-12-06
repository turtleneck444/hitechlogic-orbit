import { Layout } from "@/components/layout/Layout";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingDown, Clock, DollarSign } from "lucide-react";
import { SEO } from "@/components/SEO";

const caseStudies = [
  {
    company: "TechFlow Systems",
    industry: "SaaS Platform",
    logo: "TF",
    challenge: "Drowning in alert noise with 200+ daily alerts, 90% false positives. MTTR averaging 45 minutes for routine issues.",
    results: [
      { icon: TrendingDown, metric: "85%", label: "Alert Reduction" },
      { icon: Clock, metric: "12 min", label: "New MTTR" },
      { icon: DollarSign, metric: "$240K", label: "Annual Savings" },
    ],
    stack: ["Kubernetes", "PostgreSQL", "Redis", "AWS"],
    slug: "techflow-systems",
  },
  {
    company: "DataScale Inc",
    industry: "Data Analytics",
    logo: "DS",
    challenge: "Scaling from 50 to 500 microservices. Ops team couldn't keep pace, considering 5 new hires to handle growth.",
    results: [
      { icon: TrendingDown, metric: "92%", label: "Auto-Resolution Rate" },
      { icon: Clock, metric: "3x", label: "Deploy Frequency" },
      { icon: DollarSign, metric: "$600K", label: "Avoided Headcount Cost" },
    ],
    stack: ["Docker", "MongoDB", "RabbitMQ", "GCP"],
    slug: "datascale",
  },
];

export default function CaseStudies() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://hitechlogic.com/#organization",
    "name": "HiTechLogic",
    "url": "https://hitechlogic.com",
    "logo": "https://hitechlogic.com/logo.png"
  };

  const collectionPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": "https://hitechlogic.com/case-studies/#collectionpage",
    "url": "https://hitechlogic.com/case-studies",
    "name": "Customer Success Stories & Case Studies | HiTechLogic",
    "description": "Real results from real teams. See how engineering teams transformed their operations with HiTechLogic's AI-powered infrastructure management.",
    "inLanguage": "en-US",
    "isPartOf": {
      "@id": "https://hitechlogic.com/#website"
    },
    "about": {
      "@id": "https://hitechlogic.com/#organization"
    },
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": caseStudies.map((study, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Article",
          "name": `${study.company} - ${study.industry} Case Study`,
          "description": study.challenge,
          "url": `https://hitechlogic.com/case-studies/${study.slug}`
        }
      }))
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://hitechlogic.com/case-studies/#breadcrumb",
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
        "name": "Case Studies",
        "item": "https://hitechlogic.com/case-studies"
      }
    ]
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://hitechlogic.com/#organization-reviews",
    "name": "HiTechLogic",
    "review": caseStudies.map((study) => ({
      "@type": "Review",
      "author": {
        "@type": "Organization",
        "name": study.company
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": `Achieved ${study.results[0].metric} ${study.results[0].label.toLowerCase()}, ${study.results[1].metric} ${study.results[1].label.toLowerCase()}, and ${study.results[2].metric} ${study.results[2].label.toLowerCase()}.`
    }))
  };

  return (
    <>
      <SEO
        title="Customer Success Stories & Case Studies | HiTechLogic"
        description="Real results from real teams. See how engineering teams transformed their operations with HiTechLogic. 85% alert reduction, 3x deploy frequency, and $600K+ in annual savings."
        keywords="infrastructure case studies, DevOps success stories, SRE case studies, cloud optimization results, MTTR reduction, alert noise reduction, operational excellence, enterprise IT transformation"
        canonical="https://hitechlogic.com/case-studies"
        schema={[organizationSchema, collectionPageSchema, breadcrumbSchema, reviewSchema]}
      />
      <Layout>
        {/* Hero Section */}
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-hero">
          <div className="container relative z-10 mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Real Results from{" "}
              <span className="gradient-text">Real Teams</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              See how engineering teams transformed their operations with HiTechLogic.
            </p>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl space-y-16">
            {caseStudies.map((study, index) => (
              <Card
                key={study.slug}
                className="glass-card p-8 md:p-12 hover-scale"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="grid lg:grid-cols-2 gap-12">
                  {/* Left Column */}
                  <div className="space-y-6">
                    {/* Company Header */}
                    <div className="flex items-center space-x-4">
                      <div className="h-16 w-16 rounded-lg bg-gradient-primary flex items-center justify-center text-primary-foreground text-2xl font-bold">
                        {study.logo}
                      </div>
                      <div>
                        <h2 className="text-2xl md:text-3xl font-bold">{study.company}</h2>
                        <p className="text-muted-foreground">{study.industry}</p>
                      </div>
                    </div>

                    {/* Challenge */}
                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-accent">The Challenge</h3>
                      <p className="text-muted-foreground leading-relaxed">{study.challenge}</p>
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Tech Stack</h3>
                      <div className="flex flex-wrap gap-2">
                        {study.stack.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Read More Link */}
                    <Link
                      to={`/case-studies/${study.slug}`}
                      className="inline-flex items-center space-x-2 text-accent font-semibold hover:translate-x-1 transition-transform"
                    >
                      <span>Read Full Case Study</span>
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </div>

                  {/* Right Column - Results */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold mb-6">Results</h3>
                    {study.results.map((result, rIndex) => (
                      <Card
                        key={result.label}
                        className="glass-card p-6 border-accent/20"
                        style={{ animationDelay: `${(index + rIndex) * 0.1}s` }}
                      >
                        <div className="flex items-center space-x-4">
                          <div className="h-12 w-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                            <result.icon className="h-6 w-6 text-accent" />
                          </div>
                          <div>
                            <div className="text-3xl font-bold gradient-text">{result.metric}</div>
                            <div className="text-sm text-muted-foreground">{result.label}</div>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-card">
          <div className="container mx-auto text-center max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready for Your Success Story?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss how HiTechLogic can transform your operations like it did for these teams.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 rounded-lg bg-gradient-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
            >
              <span>Start Your Journey</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </section>
      </Layout>
    </>
  );
}