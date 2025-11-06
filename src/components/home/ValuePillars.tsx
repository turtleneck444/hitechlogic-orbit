import { Shield, Zap, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const pillars = [
  {
    icon: Shield,
    title: "Unmatched Reliability",
    description: "Detect issues before they become incidents. Our AI-powered monitoring identifies patterns and anomalies that human operators miss, ensuring your systems stay healthy 24/7.",
  },
  {
    icon: Zap,
    title: "Operational Efficiency",
    description: "Automate repetitive tasks and eliminate alert noise. Focus your team on innovation while our intelligent runbooks handle routine operations and recovery procedures.",
  },
  {
    icon: TrendingUp,
    title: "Effortless Scalability",
    description: "Grow your infrastructure without growing your ops team. Our platform scales with you, adapting to increasing complexity while keeping costs predictable and manageable.",
  },
];

export function ValuePillars() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Built for Modern Engineering Teams
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Three core principles drive everything we build
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <Card
              key={pillar.title}
              className="glass-card p-8 hover-scale group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-12 w-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-6 group-hover:shadow-glow transition-shadow">
                <pillar.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{pillar.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
