import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { ValuePillars } from "@/components/home/ValuePillars";
import { HowItWorks } from "@/components/home/HowItWorks";
import { ServiceExplorer } from "@/components/home/ServiceExplorer";
import { CTASection } from "@/components/home/CTASection";
import { AssessmentTool } from "@/components/home/AssessmentTool";
import { AIAutomationFlow } from "@/components/home/AIAutomationFlow";
import { SEO } from "@/components/SEO";

const Index = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://hitechlogic.com/#organization",
    "name": "HiTechLogic",
    "alternateName": "HiTechLogic Inc.",
    "description": "Enterprise-grade AI-powered infrastructure reliability, automation, and managed operations. Reduce alert noise by 80-90%, accelerate MTTR by 85%, and achieve 99.99% uptime with intelligent DevOps solutions.",
    "url": "https://hitechlogic.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://hitechlogic.com/logo.png",
      "width": 400,
      "height": 400
    },
    "image": "https://hitechlogic.com/og-image.jpg",
    "foundingDate": "2015",
    "founders": [
      {
        "@type": "Person",
        "name": "HiTechLogic Leadership Team",
        "jobTitle": "Executive Leadership"
      }
    ],
    "slogan": "Infrastructure Operations Perfected",
    "sameAs": [
      "https://linkedin.com/company/hitechlogic",
      "https://twitter.com/hitechlogic"
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+1-888-448-3244",
        "contactType": "sales",
        "email": "contact@hitechlogic.com",
        "availableLanguage": ["English"],
        "contactOption": "TollFree"
      },
      {
        "@type": "ContactPoint",
        "telephone": "+1-888-448-3244",
        "contactType": "technical support",
        "email": "support@hitechlogic.com",
        "availableLanguage": ["English"],
        "hoursAvailable": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "00:00",
          "closes": "23:59"
        }
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "San Francisco",
      "addressRegion": "CA",
      "addressCountry": "US"
    },
    "areaServed": "Worldwide",
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 37.7749,
        "longitude": -122.4194
      },
      "geoRadius": 20000000
    },
    "offers": [
      {
        "@type": "Service",
        "name": "Infrastructure Reliability Engineering",
        "description": "24/7 SRE services with 99.99% uptime guarantees and intelligent automation",
        "provider": {
          "@id": "https://hitechlogic.com/#organization"
        }
      },
      {
        "@type": "Service",
        "name": "FinOps & Cost Optimization",
        "description": "Reduce cloud costs by 50% with AI-driven resource optimization and governance",
        "provider": {
          "@id": "https://hitechlogic.com/#organization"
        }
      },
      {
        "@type": "Service",
        "name": "Security Operations Center",
        "description": "Zero-trust security with automated threat detection and compliance management",
        "provider": {
          "@id": "https://hitechlogic.com/#organization"
        }
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "HiTechLogic Service Catalog",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Infrastructure Automation",
            "description": "615+ automated runbooks with 99.9% success rate"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Alert Noise Reduction",
            "description": "Reduce monitoring alerts by 80-90% with intelligent correlation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "MTTR Acceleration",
            "description": "Sub-15 minute incident response with automated remediation"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "500",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Organization",
          "name": "Fortune 500 Financial Services"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "HiTechLogic transformed our infrastructure operations. We achieved 99.99% uptime and reduced costs by 48% within 6 months."
      }
    ],
    "knowsAbout": [
      "Infrastructure as Code",
      "Site Reliability Engineering",
      "DevOps Automation",
      "Cloud Cost Optimization",
      "Kubernetes Management",
      "Multi-Cloud Operations",
      "Security Operations Center",
      "AI-Powered Operations",
      "Enterprise IT Management"
    ],
    "expertise": [
      "Enterprise Infrastructure Management",
      "Cloud Operations Excellence",
      "DevOps Transformation",
      "Security Operations",
      "Cost Optimization",
      "Reliability Engineering"
    ],
    "award": [
      "99.99% Uptime SLA Achievement",
      "Industry Leader in Infrastructure Automation",
      "Enterprise Trust Award 2024",
      "Innovation Excellence Award"
    ],
    "memberOf": [
      "Enterprise Technology Alliance",
      "Cloud Computing Association",
      "DevOps Institute"
    ]
  };

  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://hitechlogic.com/#webpage",
    "url": "https://hitechlogic.com",
    "name": "HiTechLogic - Enterprise Infrastructure Operations Perfected | AI-Powered DevOps & SRE",
    "description": "Transform enterprise infrastructure with AI-powered automation. Achieve 99.99% uptime, reduce costs by 50%, and eliminate 90% of alert noise. Trusted by 500+ enterprises worldwide.",
    "inLanguage": "en-US",
    "isPartOf": {
      "@id": "https://hitechlogic.com/#website"
    },
    "about": {
      "@id": "https://hitechlogic.com/#organization"
    },
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": "https://hitechlogic.com/og-image.jpg",
      "width": 1200,
      "height": 630
    },
    "datePublished": "2023-01-01",
    "dateModified": "2025-01-21"
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://hitechlogic.com/#website",
    "url": "https://hitechlogic.com",
    "name": "HiTechLogic - Enterprise Infrastructure Operations",
    "description": "AI-powered infrastructure reliability, automation, and managed operations for enterprise organizations",
    "publisher": {
      "@id": "https://hitechlogic.com/#organization"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://hitechlogic.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "sameAs": [
      "https://linkedin.com/company/hitechlogic",
      "https://twitter.com/hitechlogic"
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://hitechlogic.com"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What makes HiTechLogic different from traditional managed service providers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "HiTechLogic goes beyond monitoring to make infrastructure truly autonomous. Our AI-driven remediation, zero-compromise reliability approach, and partnership-first mentality deliver measurable results: 99.99% uptime, 50% cost reduction, and 85% faster incident resolution."
        }
      },
      {
        "@type": "Question",
        "name": "How quickly can HiTechLogic improve our infrastructure operations?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most enterprise clients see measurable improvements within 30 days. Our comprehensive assessment takes 1-2 weeks, followed by strategic implementation. Critical improvements like alert noise reduction (80-90%) and MTTR acceleration (85%) are typically achieved within the first month."
        }
      },
      {
        "@type": "Question",
        "name": "What industries does HiTechLogic serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "HiTechLogic serves enterprise organizations across all major industries including financial services, healthcare, technology, e-commerce, manufacturing, and government. Our solutions are industry-agnostic and can be customized for specific regulatory and operational requirements."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Achieve 99.99% Infrastructure Uptime",
    "description": "Step-by-step guide to transforming enterprise infrastructure operations with AI-powered automation and reliability engineering",
    "image": "https://hitechlogic.com/og-image.jpg",
    "totalTime": "P30D",
    "supply": [
      {
        "@type": "HowToSupply",
        "name": "Enterprise Infrastructure Assessment"
      },
      {
        "@type": "HowToSupply",
        "name": "AI-Powered Monitoring Tools"
      }
    ],
    "tool": [
      {
        "@type": "HowToTool",
        "name": "HiTechLogic Automation Platform"
      },
      {
        "@type": "HowToTool",
        "name": "Intelligent Alert Correlation Engine"
      }
    ],
    "step": [
      {
        "@type": "HowToStep",
        "name": "Infrastructure Assessment",
        "text": "Comprehensive evaluation of current infrastructure, monitoring, and operational processes",
        "position": 1
      },
      {
        "@type": "HowToStep",
        "name": "Strategic Planning",
        "text": "Develop customized automation roadmap and reliability improvement plan",
        "position": 2
      },
      {
        "@type": "HowToStep",
        "name": "Implementation",
        "text": "Deploy AI-powered automation, monitoring, and remediation systems",
        "position": 3
      },
      {
        "@type": "HowToStep",
        "name": "Optimization",
        "text": "Continuous monitoring and optimization for sustained 99.99% uptime",
        "position": 4
      }
    ]
  };

  return (
    <>
      <SEO
        title="HiTechLogic - Enterprise Infrastructure Operations Perfected | AI-Powered DevOps & SRE Solutions"
        description="Transform enterprise infrastructure with AI-powered automation. Achieve 99.99% uptime, reduce costs by 50%, eliminate 90% alert noise. Trusted by 500+ enterprises with proven results in FinOps, security, and reliability engineering."
        keywords="enterprise infrastructure management, AI-powered DevOps, site reliability engineering, FinOps cost optimization, cloud security operations, infrastructure automation, MTTR reduction, alert noise reduction, enterprise IT operations, managed services provider, infrastructure as code, zero-trust security, kubernetes management, multi-cloud operations"
        schema={[organizationSchema, webpageSchema, websiteSchema, breadcrumbSchema, faqSchema, howToSchema]}
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
