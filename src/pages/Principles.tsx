import { Layout } from "@/components/layout/Layout";
import { Card } from "@/components/ui/card";

const principles = [
  {
    title: "Reliability First",
    description: "We calm environments before we optimize them. Reliability is the foundation for every decision we make, every system we manage, and every workflow we design.",
  },
  {
    title: "Human-Centered Engineering",
    description: "Reliable operations are as much about people and process as they are about tooling. We design with teams in mind, ensuring technology supports people—not the other way around.",
  },
  {
    title: "Structured Progression",
    description: "Progress follows a clear, measured path. We document the plan, share the metrics, and move at a sustainable cadence through each stage of operational maturity.",
  },
  {
    title: "Partnership Over Procurement",
    description: "We operate as an extension of your leadership, not as a vendor. True partnership means shared accountability, continuity, and strategic alignment.",
  },
  {
    title: "Transparency Always",
    description: "Clear reporting, honest conversations, and executive-ready communications come standard. We believe operational clarity gives everyone confidence.",
  },
];

export default function Principles() {
  return (
    <Layout>
      <section className="bg-white">
        <div className="mx-auto w-full max-w-4xl px-6 pt-12 pb-24 sm:pt-16 sm:pb-28 lg:pt-20 lg:pb-32 text-center">
          <span className="eyebrow text-electric-blue/70">Operating philosophy</span>
          <h1 className="mt-4 text-4xl md:text-5xl leading-tight text-foreground font-['Inter']">Principles that guide every engagement.</h1>
          <p className="mt-4 text-lg text-slate-600">
            HiTechLogic applies calm, structured, and transparent practices so technology leaders can rely on us as a
            steady partner.
          </p>
        </div>
      </section>

      <section className="section-space bg-[hsl(var(--background))]">
        <div className="mx-auto w-full max-w-5xl px-6">
          <div className="grid gap-6 md:grid-cols-2">
            {principles.map((principle) => (
              <Card key={principle.title} className="p-8">
                <h2 className="text-2xl font-semibold text-foreground">{principle.title}</h2>
                <p className="mt-4 text-sm text-slate-600">{principle.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
