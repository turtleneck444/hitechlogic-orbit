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
      "telephone": "+1-888-448-3244",
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
        title="HiTechLogic - Slash Cloud Costs 50%, Secure Against Threats & Automate with AI"
        description="AI-powered cloud operations, FinOps, and security solutions. Reduce cloud costs by 50%, cut MTTR by 75%, and eliminate 90% of alert noise with intelligent automation and 24/7 managed services."
        keywords="cloud cost optimization, finops, cloud security, AI automation, MTTR reduction, alert noise reduction, devops automation, kubernetes, zero-trust security, soc 2 compliance, cloud migration, site reliability engineering"
        schema={schema}
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
