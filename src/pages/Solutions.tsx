import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Shield, DollarSign, TrendingUp, ArrowRight } from "lucide-react";

const solutions = [
  {
    icon: Shield,
    title: "Reliability First",
    tagline: "Build unshakeable infrastructure confidence",
    description: "Stop fighting fires and start preventing them. Our intelligent monitoring and automated recovery systems ensure your applications stay online and performant.",
    useCases: [
      {
        title: "Proactive Incident Prevention",
        description: "Detect degradation patterns before they cascade into outages. AI identifies early warning signs and triggers preventive actions automatically.",
      },
      {
        title: "Faster Mean Time to Recovery",
        description: "Automated runbooks execute proven remediation steps instantly. No more scrambling through documentation during critical incidents.",
      },
      {
        title: "Post-Incident Learning",
        description: "Every incident makes your system smarter. Automated analysis identifies root causes and suggests permanent fixes.",
      },
    ],
    cta: "Improve Reliability",
  },
  {
    icon: DollarSign,
    title: "Cost Control",
    tagline: "Optimize infrastructure spending intelligently",
    description: "Cut operational costs without sacrificing reliability. Our platform identifies waste, automates right-sizing, and reduces the need for constant manual intervention.",
    useCases: [
      {
        title: "Resource Right-Sizing",
        description: "Continuous analysis of utilization patterns automatically recommends cost-saving adjustments without impacting performance.",
      },
      {
        title: "Anomaly-Driven Alerts",
        description: "Eliminate wasted engineering hours chasing false alarms. Our ML filters ensure your team only handles genuine issues.",
      },
      {
        title: "Automation Over Headcount",
        description: "Scale operations without linear growth in team size. One automated playbook can handle thousands of incidents.",
      },
    ],
    cta: "Reduce Costs",
  },
  {
    icon: TrendingUp,
    title: "Scale with Confidence",
    tagline: "Grow infrastructure without operational burden",
    description: "Your business is growing—your ops complexity doesn't have to. Deploy faster, handle more traffic, and manage increased system complexity without proportional ops investment.",
    useCases: [
      {
        title: "Elastic Operations",
        description: "Automation scales instantly with your infrastructure. Handle 10x traffic spikes without 10x the operational overhead.",
      },
      {
        title: "Self-Service for Developers",
        description: "Empower development teams with safe automation guardrails. Ship faster while maintaining operational excellence.",
      },
      {
        title: "Architectural Evolution",
        description: "Migrate to microservices, containers, or serverless with confidence. Our platform adapts to your architectural decisions.",
      },
    ],
    cta: "Scale Smarter",
  },
];

export default function Solutions() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-hero">
        <div className="container relative z-10 mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Solutions for Every{" "}
            <span className="gradient-text">Operational Challenge</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Whether you're focused on reliability, cost efficiency, or scaling your infrastructure, HiTechLogic has you covered.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto space-y-32">
          {solutions.map((solution, index) => (
            <div key={solution.title} className="space-y-8">
              {/* Solution Header */}
              <div className="text-center max-w-3xl mx-auto">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-lg bg-gradient-primary mb-6 glow-effect">
                  <solution.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{solution.title}</h2>
                <p className="text-xl gradient-text font-semibold mb-4">{solution.tagline}</p>
                <p className="text-lg text-muted-foreground">{solution.description}</p>
              </div>

              {/* Use Cases */}
              <div className="grid md:grid-cols-3 gap-6">
                {solution.useCases.map((useCase, ucIndex) => (
                  <Card
                    key={useCase.title}
                    className="glass-card p-6 hover-scale"
                    style={{ animationDelay: `${ucIndex * 0.1}s` }}
                  >
                    <h3 className="text-xl font-bold mb-3">{useCase.title}</h3>
                    <p className="text-muted-foreground">{useCase.description}</p>
                  </Card>
                ))}
              </div>

              {/* CTA */}
              <div className="text-center">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">
                    {solution.cta}
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Not Sure Which Solution Fits?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Talk to our team about your specific challenges. We'll help you design the perfect operational strategy.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">Schedule Consultation</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
