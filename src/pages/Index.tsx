import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { ValuePillars } from "@/components/home/ValuePillars";
import { HowItWorks } from "@/components/home/HowItWorks";
import { HeadlineSection } from "@/components/home/HeadlineSection";
import { ServiceExplorer } from "@/components/home/ServiceExplorer";
import { ProofSection } from "@/components/home/ProofSection";
import { ReliabilityBaselineCTA } from "@/components/home/ReliabilityBaselineCTA";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <ValuePillars />
      <HowItWorks />
      <HeadlineSection />
      <ServiceExplorer />
      <ProofSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
