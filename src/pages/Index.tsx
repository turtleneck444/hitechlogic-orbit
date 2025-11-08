import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { ValuePillars } from "@/components/home/ValuePillars";
import { HowItWorks } from "@/components/home/HowItWorks";
import { HeadlineSection } from "@/components/home/HeadlineSection";
import { ServiceExplorer } from "@/components/home/ServiceExplorer";
import { ProofSection } from "@/components/home/ProofSection";
import { ReliabilityBaselineCTA } from "@/components/home/ReliabilityBaselineCTA";
import { CTASection } from "@/components/home/CTASection";
import { SEO } from "@/components/SEO";

const Index = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "HiTechLogic",
    "description": "AI-powered infrastructure reliability, automation, and managed operations that reduce alert noise by 80-90% and accelerate MTTR.",
    "url": "https://hitechlogic.com",
    "logo": "https://hitechlogic.com/logo.png",
    "sameAs": [
      "https://linkedin.com/company/hitechlogic",
      "https://twitter.com/hitechlogic"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-123-4567",
      "contactType": "Sales",
      "email": "contact@hitechlogic.com"
    },
    "offers": {
      "@type": "AggregateOffer",
      "offerCount": "3",
      "lowPrice": "Custom",
      "priceCurrency": "USD"
    }
  };

  return (
    <>
      <SEO 
        title="HiTechLogic - AI-Powered Infrastructure Reliability & Managed Operations"
        description="Transform your infrastructure with AI-powered reliability engineering. Reduce alert noise by 80-90%, accelerate MTTR, and automate operations with intelligent monitoring and self-healing workflows."
        keywords="infrastructure reliability, managed operations, AI automation, alert noise reduction, MTTR improvement, cloud operations, DevOps automation, intelligent monitoring, self-healing infrastructure, SRE services"
        schema={schema}
      />
      <Layout>
        <Hero />
        <ValuePillars />
        <HowItWorks />
        <HeadlineSection />
        <ServiceExplorer />
        <ProofSection />
        <CTASection />
      </Layout>
    </>
  );
};

export default Index;
