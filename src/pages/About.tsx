import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const partnershipQualities = [
  {
    title: "Calm collaboration",
    description: "We operate with executive-level composure, balancing urgency with discipline so your teams stay focused.",
  },
  {
    title: "Structured communication",
    description: "Weekly reliability briefs, transparent scorecards, and aligned rituals keep leaders informed without noise.",
  },
  {
    title: "Shared accountability",
    description: "We own outcomes alongside you—risk reviews, governance meetings, and roadmap decisions are joint efforts.",
  },
];

const culturalNotes = [
  "Reliability is a cultural choice. The most resilient organizations treat stability as a shared value, not a single team’s burden.",
  "Operational clarity gives people confidence. When engineers know the plan, they can innovate without worrying about what might break.",
  "Partnership matters. Lasting change happens when leadership, operators, and partners move in lockstep—no surprises, no heroics.",
];

export default function About() {
  return (
    <Layout>
      <section className="bg-white">
        <div className="mx-auto w-full max-w-4xl px-6 pt-12 pb-24 sm:pt-16 sm:pb-28 lg:pt-20 lg:pb-32 text-center">
          <span className="eyebrow text-electric-blue/70">Leadership & partnership</span>
          <h1 className="mt-4 text-4xl md:text-5xl leading-tight text-foreground">Steady guidance for complex operations.</h1>
          <p className="mt-4 text-lg text-slate-600">
            HiTechLogic was founded by operators who believe reliability is both a technical practice and a cultural commitment.
          </p>
        </div>
      </section>

      <section className="section-space">
        <div className="mx-auto w-full max-w-5xl px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <Card className="p-10">
              <h2 className="text-2xl font-semibold text-foreground">Our mission</h2>
              <p className="mt-4 text-base text-slate-600">
                We help organizations operate with confidence by managing the day-to-day realities of modern infrastructure—calmly,
                transparently, and with measurable outcomes.
              </p>
              <p className="mt-6 text-base text-slate-600">
                Reliable technology environments unlock strategic focus. When incident channels are quiet and governance is clear,
                leaders can pursue growth without hesitation.
              </p>
            </Card>
            <Card className="p-10">
              <h2 className="text-2xl font-semibold text-foreground">Partnering with HiTechLogic feels like…</h2>
              <ul className="mt-6 space-y-4 text-sm text-slate-600">
                {partnershipQualities.map((item) => (
                  <li key={item.title}>
                    <p className="font-semibold text-foreground">{item.title}</p>
                    <p>{item.description}</p>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <section className="section-space bg-[hsl(var(--background))]">
        <div className="mx-auto w-full max-w-5xl px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground">Reliability is cultural, operational, and technical.</h2>
          <div className="mt-8 space-y-6 text-base text-slate-600">
            {culturalNotes.map((note) => (
              <p key={note}>{note}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground">Leadership team</h2>
            <p className="mt-4 text-base text-slate-600">Seasoned operators who have scaled infrastructure for global enterprises.</p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                name: "Alex Rivera",
                role: "CEO",
                bio: "Former VP of Engineering who led reliability transformations across cloud programs.",
              },
              {
                name: "Jordan Chen",
                role: "CTO",
                bio: "Ex-SRE leader focused on automation, observability, and safe change management.",
              },
              {
                name: "Maya Ortiz",
                role: "Head of Strategic Engagements",
                bio: "Advisor to CIOs on operational governance, culture, and executive storytelling.",
              },
            ].map((leader) => (
              <Card key={leader.name} className="p-8 text-center">
                <div className="mx-auto mb-4 h-20 w-20 rounded-full bg-[hsl(var(--muted))]" />
                <h3 className="text-xl font-semibold text-foreground">{leader.name}</h3>
                <p className="text-sm text-electric-blue">{leader.role}</p>
                <p className="mt-4 text-sm text-slate-600">{leader.bio}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-[hsl(var(--background))]">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground">Let’s build reliability together.</h2>
          <p className="mt-4 text-lg text-slate-600">
            If you value calm, confidence, and strategic partnership, we’d be honored to support your journey.
          </p>
          <div className="mt-8 flex justify-center">
            <Button variant="primary" size="xl" asChild>
              <Link to="/contact">Request Strategy Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
