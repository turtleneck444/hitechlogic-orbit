import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import {
  Lightbulb,
  Target,
  Users,
  FileText,
  Presentation,
  ArrowRight,
  CheckCircle2,
  Clock,
  TrendingUp,
  Zap,
  Brain,
  BookOpen,
  Award,
  Star,
  Heart,
  Shield,
} from "lucide-react";

export default function RapidDesignPrototyping() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    provider: {
      "@type": "Organization",
      name: "HiTechLogic",
    },
    serviceType: "Product Design & Prototyping",
    name: "Rapid Design & Prototyping",
    description: "Accelerate ideation with human-centered design, concept validation, and interactive prototypes that de-risk development by 80% before any code is written.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "Concept validation and prototyping service to accelerate idea-to-MVP timeline",
    },
  };

  const benefits = [
    {
      title: "80% Reduction in Development Risk",
      description: "Validate concepts before committing to expensive development cycles",
      metric: "80%",
      icon: Shield,
    },
    {
      title: "Executive Alignment Within Days",
      description: "Clear decision-making framework that gets leadership on board quickly",
      metric: "3-5 days",
      icon: Users,
    },
    {
      title: "Market-Ready Concept Validation",
      description: "User testing and feedback loops ensure market resonance",
      metric: "95%",
      icon: Target,
    },
  ];

  const deliverables = [
    {
      title: "Situation Intelligence Briefing",
      description: "Comprehensive analysis of market conditions, competitor landscape, and technical feasibility",
      icon: FileText,
      details: ["Market analysis", "Competitor mapping", "Technical assessment", "Risk evaluation"],
    },
    {
      title: "Interactive Experience Prototypes",
      description: "High-fidelity, clickable prototypes that simulate the complete user experience",
      icon: Presentation,
      details: ["Wireframes to mockups", "User flows", "Interaction design", "Usability testing"],
    },
    {
      title: "Concept Validation Framework",
      description: "Structured methodology for testing hypotheses and measuring concept success",
      icon: BookOpen,
      details: ["Hypothesis testing", "User interviews", "Data analysis", "Decision criteria"],
    },
  ];

  return (
    <>
      <SEO
        title="Rapid Design & Prototyping Services | HiTechLogic"
        description="Accelerate product development with rapid prototyping, concept validation, and interactive design. Reduce development risk by 80%, validate ideas within days of starting."
        keywords="rapid prototyping, product design, concept validation, user experience design, MVP development, product strategy, design thinking"
        canonical="https://hitechlogic.com/services/rapid-prototyping/steps/rapid-design-prototyping"
        schema={schema}
      />
      <Layout>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[hsl(var(--deep-navy))] via-[hsl(var(--graphite))] to-[hsl(var(--deep-navy))]">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvZz48L3N2Zz4=')] opacity-20" />
          <div className="relative mx-auto w-full max-w-6xl px-6 pt-32 pb-20 sm:pt-40 sm:pb-28">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg">
                <Lightbulb className="h-7 w-7 text-white" />
              </div>
              <span className="text-sm font-medium text-white/90 tracking-wide">Phase 01</span>
            </div>
            <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
              Rapid Design
              <span className="text-[hsl(var(--accent-blue))]/80 block sm:inline"> & Prototyping</span>
            </h1>
            <p className="mt-6 text-xl text-slate-200 max-w-3xl leading-relaxed">
              Transform ideas into validated concepts. Our human-centered design approach evaluates
              your situation, creates testable prototypes, and provides data-driven confidence before
              any development begins.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button variant="secondary" size="xl" asChild className="bg-white text-[hsl(var(--navy))] hover:bg-slate-50 shadow-2xl border-white">
                <Link to="/contact" className="flex items-center gap-2 group">
                  <Target className="h-5 w-5" />
                  <span>Start Concept Validation</span>
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild className="text-white border-white/30 hover:bg-white/10 hover:border-white/50">
                <Link to="#benefits">
                  <Zap className="h-5 w-5 mr-2" />
                  See Results
                </Link>
              </Button>
            </div>

            {/* Key Metrics */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: "Idea to Prototype", value: "5-7 days", icon: Clock },
                { label: "Success Rate", value: "85%", icon: TrendingUp },
                { label: "Stakeholder Confidence", value: "95%", icon: Heart },
                { label: "Cost Efficiency", value: "80%", icon: Award },
              ].map((metric, index) => (
                <Card key={metric.label} className="bg-white/10 backdrop-blur-sm border-white/20 text-white p-4 text-center group hover:bg-white/15 transition-all hover:scale-105">
                  <div className="flex justify-center mb-2">
                    <metric.icon className="h-6 w-6" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold mb-1">{metric.value}</div>
                  <div className="text-xs font-medium text-slate-200">{metric.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* The Problem */}
        <section className="section-space bg-white">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="eyebrow text-[hsl(var(--accent-blue))]"></span>
                <h2 className="mt-4 text-4xl font-bold text-[hsl(var(--navy))]">
                  Most ideas die in ideation because they're never tested
                </h2>
                <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                  Teams spend months debating ideas in meetings and PowerPoint decks, but never create
                  tangible prototypes that demonstrate value. This leads to years of development wasted
                  on untested assumptions and stakeholder politics masquerading as strategy.
                </p>
                <div className="mt-6 space-y-4">
                  {[
                    "85% of software projects miss budget, timeline, or quality targets",
                    "Only 39% of product ideas reach market viability testing",
                    "Average time from idea to validated concept: 6+ months",
                  ].map((fact) => (
                    <div key={fact} className="flex items-start gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-100 flex-shrink-0 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-red-500" />
                      </div>
                      <p className="text-slate-700">{fact}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <span className="eyebrow text-[hsl(var(--accent-blue))]">Our solution</span>
                <h2 className="mt-4 text-4xl font-bold text-[hsl(var(--navy))]">
                  Validate concepts quickly, decide decisively
                </h2>
                <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                  We mobilize cross-functional teams immediately, map your situation comprehensively,
                  and create interactive prototypes that generate real user feedback and stakeholder
                  consensus within days.
                </p>
                <div className="mt-6 space-y-4">
                  {[
                    "5-7 days from IDEATION to VALIDATED PROTOTYPE",
                    "80% reduction in development risk and cost",
                    "Stakeholder alignment and executive buy-in secured",
                  ].map((benefit) => (
                    <div key={benefit} className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-[hsl(var(--accent-blue))] flex-shrink-0 mt-0.5" />
                      <p className="text-slate-700 font-medium">{benefit}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <Button variant="hero" size="lg" asChild>
                    <Link to="/contact" className="flex items-center gap-2 group">
                      <span>Accelerate Your Ideas</span>
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="section-space bg-slate-50">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="eyebrow text-[hsl(var(--accent-blue))]">Systematic validation</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[hsl(var(--navy))]">
                From vague ideas to validated concepts
              </h2>
              <p className="mt-6 text-lg text-slate-600">
                Our structured approach transforms abstract ideas into concrete, testable concepts
                that provide clear decision-making signals and eliminate guesswork.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Situation Assessment",
                  description: "Map your business context, technical landscape, and market opportunities in comprehensive detail.",
                  icon: FileText,
                  color: "from-[hsl(var(--accent-blue))] to-[hsl(var(--navy))]",
                },
                {
                  step: "2",
                  title: "Concept Generation",
                  description: "Brainstorm multiple approaches and validate them against business objectives and technical viability.",
                  icon: Lightbulb,
                  color: "from-[hsl(var(--accent-blue))] to-[hsl(var(--navy))]",
                },
                {
                  step: "3",
                  title: "Rapid Prototyping",
                  description: "Create clickable, interactive prototypes that demonstrate value and gather meaningful feedback.",
                  icon: Presentation,
                  color: "from-[hsl(var(--accent-blue))] to-[hsl(var(--navy))]",
                },
                {
                  step: "4",
                  title: "Validation & Decision",
                  description: "Test concepts with real users and stakeholders to provide data-driven confidence for next steps.",
                  icon: Target,
                  color: "from-[hsl(var(--accent-blue))] to-[hsl(var(--navy))]",
                },
              ].map((step, index) => (
                <Card key={step.step} className="p-6 text-center hover:shadow-xl transition-all hover:-translate-y-1 duration-300 group border-0 shadow-lg">
                  <div className={`flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ${step.color} text-white text-2xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {step.step}
                  </div>
                  <div className={`flex h-12 w-12 rounded-xl bg-gradient-to-br ${step.color} items-center justify-center mx-auto mb-4 shadow-lg`}>
                    <step.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[hsl(var(--navy))] mb-3">{step.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Deliverables */}
        <section className="section-space bg-white">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="eyebrow text-[hsl(var(--accent-blue))]">Concrete outcomes</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[hsl(var(--navy))]">
                Deliverables that drive decisions
              </h2>
              <p className="mt-6 text-lg text-slate-600">
                You receive tangible, actionable outputs that provide clear direction and eliminate
                the ambiguity that typically plagues product ideation.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {deliverables.map((deliverable, index) => (
                <Card key={deliverable.title} className="p-8 border-2 hover:border-[hsl(var(--accent-blue))]/30 hover:shadow-xl transition-all hover:-translate-y-1 duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[hsl(var(--accent-blue))]/10 to-[hsl(var(--navy))]/5 group-hover:scale-110 transition-transform duration-300">
                      <deliverable.icon className="h-7 w-7 text-[hsl(var(--accent-blue))]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-[hsl(var(--navy))] mb-3">{deliverable.title}</h3>
                      <p className="text-slate-600 mb-6 leading-relaxed">{deliverable.description}</p>
                      <ul className="space-y-2">
                        {deliverable.details.map((detail) => (
                          <li key={detail} className="flex items-center gap-2 text-sm">
                            <CheckCircle2 className="h-4 w-4 text-[hsl(var(--accent-blue))] shrink-0" />
                            <span className="text-slate-700">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Business Impact */}
        <section className="section-space bg-slate-50">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="eyebrow text-[hsl(var(--accent-blue))]">Measurable results</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[hsl(var(--navy))]">
                Transform ideation into strategic advantage
              </h2>
              <p className="mt-6 text-lg text-slate-600">
                Our clients see immediate acceleration of product development cycles and higher
                success rates for concepts that reach market validation.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12 mb-12">
              {benefits.map((benefit) => (
                <Card key={benefit.title} className="p-8 text-center border-0 bg-white shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 duration-300 group">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[hsl(var(--accent-blue))]/10 to-[hsl(var(--navy))]/5 mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="h-10 w-10 text-[hsl(var(--accent-blue))]" />
                  </div>
                  <div className="text-3xl font-bold mb-2 text-[hsl(var(--accent-blue))]">
                    {benefit.metric}
                  </div>
                  <h3 className="text-xl font-bold text-[hsl(var(--navy))] mb-3">{benefit.title}</h3>
                  <p className="text-slate-600">{benefit.description}</p>
                </Card>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h3 className="text-2xl font-bold text-[hsl(var(--navy))] mb-6">Operational Efficiency</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-200 hover:border-[hsl(var(--accent-blue))]/30 transition-all hover:translate-x-2 duration-300 group">
                    <Clock className="h-6 w-6 text-[hsl(var(--accent-blue))] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="font-semibold text-[hsl(var(--navy))]">Weeks Instead of Months</div>
                      <div className="text-slate-600">Get from idea to validated concept in days instead of months of meetings</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-200 hover:border-[hsl(var(--accent-blue))]/30 transition-all hover:translate-x-2 duration-300 group">
                    <TrendingUp className="h-6 w-6 text-[hsl(var(--accent-blue))] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="font-semibold text-[hsl(var(--navy))]">Higher Success Rates</div>
                      <div className="text-slate-600">Concepts that go through our validation process are 85% more likely to succeed</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-200 hover:border-[hsl(var(--accent-blue))]/30 transition-all hover:translate-x-2 duration-300 group">
                    <Users className="h-6 w-6 text-[hsl(var(--accent-blue))] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="font-semibold text-[hsl(var(--navy))]">Stakeholder Alignment</div>
                      <div className="text-slate-600">Everyone understands and supports the direction before resources are committed</div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[hsl(var(--navy))] mb-6">Competitive Advantage</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-200 hover:border-[hsl(var(--accent-blue))]/30 transition-all hover:translate-x-2 duration-300 group">
                    <Zap className="h-6 w-6 text-[hsl(var(--accent-blue))] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="font-semibold text-[hsl(var(--navy))]">First to Market</div>
                      <div className="text-slate-600">Validated concepts move to development faster while competitors are still in meetings</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-200 hover:border-[hsl(var(--accent-blue))]/30 transition-all hover:translate-x-2 duration-300 group">
                    <Target className="h-6 w-6 text-[hsl(var(--accent-blue))] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="font-semibold text-[hsl(var(--navy))]">Market Confidence</div>
                      <div className="text-slate-600">Launch products that actually solve real problems with proven market demand</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-200 hover:border-[hsl(var(--accent-blue))]/30 transition-all hover:translate-x-2 duration-300 group">
                    <Award className="h-6 w-6 text-[hsl(var(--accent-blue))] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="font-semibold text-[hsl(var(--navy))]">Resource Efficiency</div>
                      <div className="text-slate-600">Don't waste development time and budget on ideas that won't work</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study */}
        <section className="section-space bg-white">
          <div className="mx-auto w-full max-w-6xl px-6">
            <Card className="p-8 border-2 border-[hsl(var(--accent-blue))]/20 bg-gradient-to-br from-[hsl(var(--accent-blue))]/5 to-transparent">
              <div className="text-center max-w-3xl mx-auto">
                <Star className="h-12 w-12 text-[hsl(var(--accent-blue))] mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-[hsl(var(--navy))] mb-4">Rapid Concept Validation Success</h3>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  Organizations leveraging our rapid prototyping methodology reduce time-to-market by up to 80%
                  while significantly improving product-market fit. Our systematic approach to concept validation
                  enables teams to make data-driven decisions quickly, eliminating months of uncertainty and
                  costly development missteps before they happen.
                </p>
                <div className="flex justify-center gap-12 text-sm">
                  <div>
                    <div className="font-bold text-[hsl(var(--accent-blue))] text-2xl">12 concepts</div>
                    <div className="text-slate-600">Before validation</div>
                  </div>
                  <ArrowRight className="h-6 w-6 text-[hsl(var(--accent-blue))] self-center" />
                  <div>
                    <div className="font-bold text-[hsl(var(--accent-blue))] text-2xl">1 winner</div>
                    <div className="text-slate-600">After 2 weeks</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section-space bg-gradient-to-br from-[hsl(var(--navy))] to-[hsl(var(--navy))]/90 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#ffffff10,transparent_55%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.1),transparent_70%)]" />
          <div className="relative mx-auto max-w-4xl px-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white mb-6">
              <Lightbulb className="h-4 w-4" />
              <span className="text-sm font-semibold">Concept Acceleration</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Keep Your Ideas Alive with Fast Validation
            </h2>
            <p className="text-xl text-slate-200 mb-8 max-w-2xl mx-auto">
              Don't let great ideas die in meetings and PowerPoint presentations. Get from ideation
              to validated prototypes in days, with stakeholder confidence and market validation
              — before you commit to expensive development cycles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button variant="secondary" size="xl" asChild className="bg-white text-[hsl(var(--navy))] hover:bg-blue-50 shadow-2xl hover:scale-105 transition-all">
                <Link to="/contact" className="flex items-center gap-2 group">
                  <Brain className="h-5 w-5" />
                  <span>Start Your Concept Validation</span>
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild className="border-white text-white hover:bg-white/10">
                <Link to="/services/rapid-prototyping/steps/build-launch" className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5" />
                  <span>Next: Build & Launch</span>
                </Link>
              </Button>
            </div>

            <div className="pt-8 border-t border-white/10">
              <p className="text-slate-200 text-sm mb-4">No risk assessment • Remote-friendly process • NDA protected</p>
              <div className="flex justify-center gap-8 text-sm text-white/80">
                <div>
                  <div className="font-medium text-white">Time to Results</div>
                  <div>5-7 business days</div>
                </div>
                <div>
                  <div className="font-medium text-white">Deliverables</div>
                  <div>3 validated concepts</div>
                </div>
                <div>
                  <div className="font-medium text-white">Success Rate</div>
                  <div>85%+ concept validation</div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </Layout>
    </>
  );
}
