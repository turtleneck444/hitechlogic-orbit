import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight } from "lucide-react";

const stages = [
  {
    stage: 1,
    title: "Stabilize",
    subtitle: "Build your operational foundation",
    description: "Get the basics right. Reduce noise, establish baselines, and ensure your team can trust the alerts they receive.",
    outcomes: [
      "Alert noise reduced by 70-80%",
      "Clear visibility into system health",
      "Defined escalation procedures",
      "Baseline performance metrics established",
    ],
    checklist: [
      "Centralized logging implemented",
      "Core metrics being tracked",
      "On-call rotation established",
      "Incident response documentation",
    ],
  },
  {
    stage: 2,
    title: "Strengthen",
    subtitle: "Harden your platform reliability",
    description: "Move beyond reactive firefighting. Automate common tasks, implement proactive monitoring, and build resilience into your systems.",
    outcomes: [
      "MTTR reduced by 50%+",
      "Automated remediation for common issues",
      "Proactive capacity planning",
      "Cross-team runbook standardization",
    ],
    checklist: [
      "Automated playbooks for top 10 incidents",
      "SLO/SLI framework in place",
      "Regular game days conducted",
      "Predictive alerting enabled",
    ],
  },
  {
    stage: 3,
    title: "Scale",
    subtitle: "Grow without operational burden",
    description: "Prepare for growth. Optimize architecture, accelerate delivery velocity, and ensure your ops doesn't become a bottleneck.",
    outcomes: [
      "Deploy frequency increased 3x",
      "Ops team scales sub-linearly",
      "Infrastructure costs optimized",
      "Self-service developer tools",
    ],
    checklist: [
      "CI/CD fully automated",
      "Infrastructure as code adopted",
      "Automated testing at scale",
      "Cost optimization playbooks",
    ],
  },
  {
    stage: 4,
    title: "Autonomy",
    subtitle: "Achieve self-healing operations",
    description: "The ultimate goal: systems that heal themselves. Let automation handle routine classes of issues while your team focuses on innovation.",
    outcomes: [
      "90%+ incidents auto-resolved",
      "Engineering time reclaimed for features",
      "Predictive issue prevention",
      "Continuous system optimization",
    ],
    checklist: [
      "AI-driven incident detection",
      "Full auto-remediation for common patterns",
      "Chaos engineering integrated",
      "Self-optimizing infrastructure",
    ],
  },
];

export default function Stages() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-hero">
        <div className="container relative z-10 mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Your Journey to{" "}
            <span className="gradient-text">Operational Excellence</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            A proven roadmap from reactive operations to autonomous infrastructure. We meet you where you are and guide you forward.
          </p>
        </div>
      </section>

      {/* Progress Bar */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center justify-between">
            {stages.map((stage, index) => (
              <div key={stage.stage} className="flex items-center flex-1">
                <div className="text-center">
                  <div className="h-12 w-12 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold mb-2">
                    {stage.stage}
                  </div>
                  <div className="text-sm font-semibold hidden md:block">{stage.title}</div>
                </div>
                {index < stages.length - 1 && (
                  <div className="flex-1 h-1 bg-accent/30 mx-2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stages */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl space-y-24">
          {stages.map((stage, index) => (
            <div key={stage.stage} className="space-y-8">
              {/* Stage Header */}
              <div className="text-center">
                <div className="inline-flex items-center space-x-4 mb-4">
                  <div className="h-16 w-16 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground text-2xl font-bold glow-effect">
                    {stage.stage}
                  </div>
                  <div className="text-left">
                    <h2 className="text-3xl md:text-4xl font-bold">Stage {stage.stage}: {stage.title}</h2>
                    <p className="text-xl gradient-text font-semibold">{stage.subtitle}</p>
                  </div>
                </div>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  {stage.description}
                </p>
              </div>

              {/* Content Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Outcomes */}
                <Card className="glass-card p-8">
                  <h3 className="text-xl font-bold mb-6 flex items-center space-x-2">
                    <span className="h-8 w-8 rounded-lg bg-accent/20 flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-accent" />
                    </span>
                    <span>Key Outcomes</span>
                  </h3>
                  <ul className="space-y-3">
                    {stage.outcomes.map((outcome) => (
                      <li key={outcome} className="flex items-start space-x-3">
                        <div className="h-5 w-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="h-2 w-2 rounded-full bg-accent" />
                        </div>
                        <span className="text-muted-foreground">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </Card>

                {/* Checklist */}
                <Card className="glass-card p-8">
                  <h3 className="text-xl font-bold mb-6">Readiness Checklist</h3>
                  <ul className="space-y-3">
                    {stage.checklist.map((item) => (
                      <li key={item} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Where Are You on the Journey?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's assess your current stage and create a roadmap to operational autonomy.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">
              Get Your Readiness Assessment
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
