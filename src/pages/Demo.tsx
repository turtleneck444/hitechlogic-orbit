import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/blocks/hero-section-2";
import { SEO } from "@/components/SEO";

const Demo = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://hitechlogic.com/#organization",
    "name": "HiTechLogic",
    "url": "https://hitechlogic.com",
    "logo": "https://hitechlogic.com/logo.png"
  };

  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://hitechlogic.com/demo/#webpage",
    "url": "https://hitechlogic.com/demo",
    "name": "Request a Demo - See HiTechLogic Platform in Action",
    "description": "Schedule a personalized demo of the HiTechLogic platform. See how AI-powered automation, observability, and self-healing infrastructure can transform your operations.",
    "inLanguage": "en-US",
    "isPartOf": {
      "@id": "https://hitechlogic.com/#website"
    },
    "about": {
      "@id": "https://hitechlogic.com/#organization"
    },
    "potentialAction": {
      "@type": "ScheduleAction",
      "name": "Schedule Demo",
      "target": "https://hitechlogic.com/demo"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://hitechlogic.com/demo/#breadcrumb",
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
        "name": "Demo",
        "item": "https://hitechlogic.com/demo"
      }
    ]
  };

  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "HiTechLogic Platform Demo",
    "description": "Personalized demonstration of the HiTechLogic autonomous operations platform",
    "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
    "eventStatus": "https://schema.org/EventScheduled",
    "location": {
      "@type": "VirtualLocation",
      "url": "https://hitechlogic.com/demo"
    },
    "organizer": {
      "@id": "https://hitechlogic.com/#organization"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <>
      <SEO
        title="Request a Demo - See HiTechLogic Platform in Action"
        description="Schedule a personalized demo of the HiTechLogic platform. See how AI-powered automation, unified observability, and self-healing infrastructure can transform your operations."
        keywords="HiTechLogic demo, infrastructure demo, DevOps platform demo, automation demo, observability demo, SRE tools demo, schedule demo"
        canonical="https://hitechlogic.com/demo"
        schema={[organizationSchema, webpageSchema, breadcrumbSchema, eventSchema]}
      />
      <Layout>
        <HeroSection />
      </Layout>
    </>
  );
};

export default Demo;