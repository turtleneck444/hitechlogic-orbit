import { Card } from "@/components/ui/card";
import { TrendingDown, Clock, DollarSign, CheckCircle } from "lucide-react";

const metrics = [
  {
    icon: TrendingDown,
    value: "80-90%",
    label: "Reduction in Alert Noise",
    description: "Only meaningful alerts reach your team",
  },
  {
    icon: Clock,
    value: "75%",
    label: "Faster MTTR",
    description: "Automated recovery cuts response time",
  },
  {
    icon: DollarSign,
    value: "40%",
    label: "Lower Ops Costs",
    description: "Automation reduces manual intervention",
  },
  {
    icon: CheckCircle,
    value: "99.9%",
    label: "Uptime Achieved",
    description: "Self-healing systems prevent outages",
  },
];

export function ProofSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Results That Matter
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real impact on reliability, efficiency, and costs
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <Card
              key={metric.label}
              className="glass-card p-6 text-center hover-scale"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-accent/20 mb-4">
                <metric.icon className="h-6 w-6 text-accent" />
              </div>
              <div className="text-4xl font-bold gradient-text mb-2">
                {metric.value}
              </div>
              <div className="font-semibold mb-2">{metric.label}</div>
              <p className="text-sm text-muted-foreground">
                {metric.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
