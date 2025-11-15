import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { rapidPrototypingSteps, type RapidPrototypingStep } from "@/data/rapidPrototypingSteps";

type StepTemplateProps = {
  slug: string;
};

export function StepTemplate({ slug }: StepTemplateProps) {
  const step = rapidPrototypingSteps.find((item) => item.slug === slug);
  if (!step) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: step.title,
    description: step.overview,
  };

  return (
    <>
      <SEO
        title={`${step.title} | HiTechLogic Rapid Prototyping`}
        description={step.description}
        canonical={`https://hitechlogic.com/services/rapid-prototyping/${step.slug}`}
        schema={schema}
      />
      <Layout>
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-xs uppercase tracking-widest text-slate-500 mb-3">{step.specialty}</p>
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">{step.title}</h1>
              <p className="text-lg text-slate-600 mb-4">{step.overview}</p>
              <p className="text-base text-slate-500">{step.focus}</p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button variant="primary" size="lg" asChild>
                  <Link to="/contact" className="inline-flex items-center gap-2">
                    Talk to our prototyping specialists
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/services/rapid-prototyping">
                    Back to Rapid Prototyping Overview
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="p-6 bg-white border border-slate-200 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle2 className="h-5 w-5 text-[hsl(var(--accent-blue))]" />
                  <h3 className="text-lg font-semibold text-slate-900">Deliverables</h3>
                </div>
                <ul className="space-y-3">
                  {step.deliverables.map((deliverable) => (
                    <li key={deliverable} className="text-sm text-slate-600 flex items-start gap-2">
                      <span className="mt-1 h-1 w-1 rounded-full bg-[hsl(var(--accent-blue))]" />
                      <span>{deliverable}</span>
                    </li>
                  ))}
                </ul>
              </Card>
              <Card className="p-6 bg-white border border-slate-200 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle2 className="h-5 w-5 text-[hsl(var(--accent-blue))]" />
                  <h3 className="text-lg font-semibold text-slate-900">Outcomes</h3>
                </div>
                <ul className="space-y-3">
                  {step.outcomes.map((outcome) => (
                    <li key={outcome} className="text-sm text-slate-600 flex items-start gap-2">
                      <span className="mt-1 h-1 w-1 rounded-full bg-slate-400" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
