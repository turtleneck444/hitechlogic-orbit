import { Database, Search, Cog, Brain } from "lucide-react";

const steps = [
  {
    icon: Database,
    title: "Ingest",
    description: "Connect your logs, metrics, and traces into our unified observability platform.",
  },
  {
    icon: Search,
    title: "Detect",
    description: "AI algorithms identify meaningful patterns and filter out noise automatically.",
  },
  {
    icon: Cog,
    title: "Act",
    description: "Automated runbooks execute recovery procedures or alert the right team members.",
  },
  {
    icon: Brain,
    title: "Learn",
    description: "System continuously improves, adapting playbooks based on outcomes and feedback.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Four simple steps to autonomous operations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-accent to-transparent" />
              )}
              
              <div className="text-center">
                <div className="relative inline-flex items-center justify-center mb-6">
                  <div className="h-24 w-24 rounded-full bg-gradient-primary flex items-center justify-center glow-effect">
                    <step.icon className="h-10 w-10 text-primary-foreground" />
                  </div>
                  <div className="absolute -top-2 -right-2 h-8 w-8 rounded-full bg-accent flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
