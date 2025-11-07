import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";

const maturityJourney = [
  {
    stage: "01",
    title: "Clear",
    focus: "Restore clarity & reduce noise",
    description:
      "We steady the environment, reduce alert fatigue, and build the operational baselines that leaders can trust.",
    outcomes: ["70%+ noise reduction", "MTTR baseline established", "Unified incident logging"],
  },
  {
    stage: "02",
    title: "Steady",
    focus: "Automate recurring issues",
    description:
      "Automation, runbooks, and disciplined rituals remove repeat work while proactive monitoring predicts risk.",
    outcomes: ["Critical runbooks deployed", "Weekly reliability briefings", "Guard-railed automation adoption"],
  },
  {
    stage: "03",
    title: "Strong",
    focus: "Improve architecture & delivery velocity",
    description:
      "We embed reliability into delivery, align architecture decisions with capacity planning, and support change at pace.",
    outcomes: ["Release cadence increases", "Capacity plans approved quarterly", "Ops effort scales sub-linearly"],
  },
  {
    stage: "04",
    title: "Self-Maintaining",
    focus: "Shift into autonomous operations",
    description:
      "Autonomous workflows, predictive insights, and cultural reinforcement keep teams focused on strategic growth.",
    outcomes: ["Auto-resolution coverage climbs", "Executive scorecards trend positive", "Reliability mindset adopted"],
  },
];

export default function Approach() {
  return (
    <Layout>
      <section className="bg-white">
        <div className="mx-auto w-full max-w-5xl px-6 pt-12 pb-24 sm:pt-16 sm:pb-28 lg:pt-20 lg:pb-32 text-center">
          <span className="eyebrow text-electric-blue/70">Operational evolution</span>
          <h1 className="mt-4 text-4xl md:text-5xl leading-tight text-foreground">Four stages. Measured progress.</h1>
          <p className="mt-4 text-lg text-slate-600">
            We guide teams from reactive firefighting to self-maintaining operations through a structured, four-stage roadmap.
          </p>
        </div>
      </section>

      <section className="section-space bg-[hsl(var(--background))]">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="grid gap-6 lg:grid-cols-4">
            {maturityJourney.map((stage, index) => (
              <div key={stage.title} className="relative">
                {index < maturityJourney.length - 1 && (
                  <span className="absolute right-[-24px] top-1/2 hidden h-px w-12 bg-[hsl(var(--border))] lg:block" />
                )}
                <Card className="h-full rounded-3xl border-[hsl(var(--border))] bg-white p-8">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">{stage.stage}</div>
                  <h2 className="mt-4 text-2xl font-semibold text-foreground">{stage.title}</h2>
                  <p className="text-sm font-medium text-electric-blue">{stage.focus}</p>
                  <p className="mt-4 text-sm text-slate-600">{stage.description}</p>
                  <ul className="mt-6 space-y-2 text-sm text-slate-600">
                    {stage.outcomes.map((outcome) => (
                      <li key={outcome} className="flex items-start gap-2">
                        <Check className="mt-0.5 h-4 w-4 text-electric-blue" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground">Let’s map your next stage.</h2>
          <p className="mt-4 text-lg text-slate-600">
            Share where you are today and we’ll outline the actions, governance, and cultural shifts required to move
            forward.
          </p>
          <div className="mt-8 flex justify-center">
            <Button variant="primary" size="xl" asChild>
              <Link to="/contact">
                Request Maturity Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
