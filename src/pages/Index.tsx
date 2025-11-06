import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { ValuePillars } from "@/components/home/ValuePillars";
import { HowItWorks } from "@/components/home/HowItWorks";
import { ProofSection } from "@/components/home/ProofSection";
import { Testimonials } from "@/components/home/Testimonials";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <ValuePillars />
      <HowItWorks />
      <ProofSection />
      <Testimonials />
      <CTASection />
    </Layout>
  );
};

export default Index;
