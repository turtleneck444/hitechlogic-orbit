import { Card } from "@/components/ui/card";
import { TrendingDown, Clock, DollarSign, CheckCircle } from "lucide-react";

const metrics = [
  {
    icon: TrendingDown,
    value: "-85%",
    label: "Alert Volume",
    description: "Noise removed through correlation and scoring",
  },
  {
    icon: Clock,
    value: "4.5x",
    label: "MTTR Improvement",
    description: "Accelerated through playbook automation",
  },
  {
    icon: DollarSign,
    value: "32%",
    label: "Cost Stability",
    description: "Runbooks optimize spend across environments",
  },
  {
    icon: CheckCircle,
    value: "99.98%",
    label: "Availability",
    description: "Continuous governance and predictive response",
  },
];

export function ProofSection() {
  return (
    <section className="section-space bg-white">
      <div className="mx-auto w-full max-w-[1420px] px-4 sm:px-6 lg:px-14">
        <div className="rounded-3xl border border-[hsl(var(--border))] bg-white p-10 shadow-[0_24px_60px_-48px_rgba(11,18,32,0.25)]">
          <div className="flex flex-col gap-6 pb-10 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="eyebrow text-electric-blue/70">Reliability outcomes</span>
              <h2 className="mt-4 text-3xl md:text-4xl leading-tight text-foreground">
                Executive Telemetry Designed for Confident Reporting
              </h2>
            </div>
            <p className="max-w-xl text-sm text-slate-600">
              Metrics refresh continuously so technology, operations, and finance leadership share one version of truth.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric) => (
              <Card key={metric.label} className="bg-[hsl(var(--background))] p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-[hsl(var(--border))] bg-white">
                  <metric.icon className="h-5 w-5 text-electric-blue" />
                </div>
                <div className="mt-6 text-4xl font-semibold text-foreground">{metric.value}</div>
                <div className="mt-2 text-xs font-semibold uppercase tracking-wide text-slate-500">{metric.label}</div>
                <p className="mt-3 text-sm text-slate-600">{metric.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
