import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import WhyDifferentSection from "@/components/sections/WhyDifferentSection";
import { rapidPrototypingSteps } from "@/data/rapidPrototypingSteps";
import {
  Rocket,
  Lightbulb,
  Code2,
  Shield,
  TrendingUp,
  Clock,
  CheckCircle2,
  ArrowRight,
  Users,
  Smartphone,
  Cloud,
  Layers,
  Sparkles,
  Target,
  Zap,
  Award,
  Calendar,
  Phone,
  Mail,
  GitBranch,
} from "lucide-react";

const capabilities = [
  {
    icon: Lightbulb,
    title: "Concept Validation & Design",
    description: "Collaborative ideation and design sprints to validate product vision, user experiences, and market fit before engineering begins.",
    highlight: "User-centered",
  },
  {
    icon: Code2,
    title: "Rapid Development Cycles",
    description: "AI-assisted development with modern frameworks, reusable components, and automated testing to accelerate MVP delivery.",
    highlight: "Accelerated delivery",
  },
  {
    icon: Cloud,
    title: "Production-Ready Architecture",
    description: "Built on enterprise-grade infrastructure with security, scalability, and monitoring from day one.",
    highlight: "MSP standards",
  },
  {
    icon: Layers,
    title: "Iterative User Testing",
    description: "Continuous user feedback integration through rapid iterations ensuring product-market fit.",
    highlight: "Validated results",
  },
  {
    icon: Shield,
    title: "Enterprise Security & Compliance",
    description: "Security-hardened applications with compliance built-in, meeting enterprise and regulatory requirements.",
    highlight: "Secure by default",
  },
  {
    icon: Sparkles,
    title: "Seamless Scaling Support",
    description: "Built for growth with automated scaling capabilities and easy migration to managed operations.",
    highlight: "Scalable foundation",
  },
];

const benefits = [
  "Accelerate time-to-market with rapid prototyping and iterative development cycles",
  "Reduce development costs through AI-assisted coding and reusable component libraries",
  "Launch with confidence using production-ready infrastructure and enterprise security",
  "Seamlessly transition to managed operations for ongoing maintenance and scaling",
  "Validate concepts and gather user feedback before full-scale development commitments",
  "Access enterprise-grade infrastructure and development practices from the start",
];

const metrics = [
  { label: "Time to Production MVP", value: "4-8 weeks", icon: Clock },
  { label: "Cost Efficiency", value: "60% savings", icon: TrendingUp },
  { label: "Development Acceleration", value: "3-5x faster", icon: Zap },
  { label: "Project Success Rate", value: "95%", icon: Award },
];

const process = [
  {
    step: "1",
    title: "Discovery & Validation",
    description: "Define product vision, validate assumptions, and create user experience prototypes for feedback.",
    duration: "Week 0-1",
  },
  {
    step: "2",
    title: "Rapid Development",
    description: "Agile development sprints building functional MVPs with continuous integration and testing.",
    duration: "Week 1-6",
  },
  {
    step: "3",
    title: "Launch & Operate",
    description: "Deploy to production with monitoring, user analytics, and ongoing optimization support.",
    duration: "Week 6+",
  },
  {
    step: "4",
    title: "Scale & Evolve",
    description: "Expand features, integrate user feedback, and prepare for enterprise-scale adoption.",
    duration: "Ongoing",
  },
];

const useCases = [
  {
    title: "Customer-Facing Applications",
    description: "Mobile apps, web portals, and digital experiences built with modern frameworks and enterprise-grade security.",
    icon: Smartphone,
    industry: "All Industries",
  },
  {
    title: "Investor Validation Tools",
    description: "Proof-of-concept applications and demos to demonstrate value to investors and stakeholders.",
    icon: Rocket,
    industry: "Startups",
  },
  {
    title: "Internal Productivity Tools",
    description: "Custom workflow applications to automate manual processes and improve operational efficiency.",
    icon: Layers,
    industry: "Enterprise",
  },
  {
    title: "Digital Platform Solutions",
    description: "API-driven applications and integration platforms to connect systems and enable new digital capabilities.",
    icon: Cloud,
    industry: "Technology",
  },
];

const faqs = [
  {
    question: "How quickly can we get a working prototype?",
    answer: "Most clients have a functional MVP within 2-4 weeks of project kickoff. This includes initial user testing and deployment to production infrastructure.",
  },
  {
    question: "Do you build for mobile, web, or both?",
    answer: "We build comprehensive digital experiences across mobile, web, and occasionally desktop platforms. Our solutions use modern frameworks like React, React Native, and Next.js for cross-platform compatibility.",
  },
  {
    question: "Can you transition the prototype to our in-house team?",
    answer: "Absolutely. We provide comprehensive documentation, code handoff, and knowledge transfer. Many clients gradually transition maintenance and development responsibilities once the product validates market fit.",
  },
  {
    question: "What if our idea needs to change during development?",
    answer: "Our agile approach embraces change. We use iterative development cycles that incorporate user feedback and course corrections throughout the process, not just at the end.",
  },
  {
    question: "Do you include hosting and ongoing maintenance?",
    answer: "We deploy on production infrastructure with monitoring and basic maintenance included for the first 3 months. We can transition to fully managed services for longer-term support and scaling.",
  },
];

const prototypingJourney = [
  {
    phase: "Discovery & Validation",
    description: "Define product vision, validate assumptions, and create user experience prototypes for feedback",
    duration: "Weeks 0-1",
    icon: Lightbulb,
  },
  {
    phase: "Build & Launch",
    description: "Sprint-based development that deploys production-ready experiences with guardrails",
    duration: "Weeks 1-6",
    icon: Code2,
  },
  {
    phase: "Operate & Scale",
    description: "Transition to managed operations with reliability and FinOps visibility",
    duration: "Weeks 6+",
    icon: Shield,
  },
];

const trustIndicators = [
  { label: "Prototypes Delivered", value: "250+", description: "MVPs across industries" },
  { label: "Average Launch Time", value: "6 weeks", description: "From idea to production" },
  { label: "Client Retention", value: "94%", description: "During maintenance phase" },
  { label: "Technologies Supported", value: "15+", description: "Modern frameworks" },
];

export default function RapidPrototyping() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Rapid Prototyping & Development",
    "description": "Turn ideas into working prototypes and production-ready applications in 4-8 weeks with AI-accelerated development, cloud-native architecture, and MSP-grade reliability.",
    "provider": {
      "@type": "Organization",
      "name": "HiTechLogic"
    },
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Rapid Prototyping Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mobile & Web App Development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "MVP Development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Workflow Automation Tools"
          }
        }
      ]
    }
  };

  return (
    <>
      <SEO
        title="Rapid Prototyping & Development | HiTechLogic"
        description="Turn ideas into working MVPs in 4-8 weeks. AI-accelerated development with cloud-native architecture and MSP-grade reliability. Reduce development costs by 60%."
        keywords="rapid prototyping, mvp development, app development, AI-assisted development, cloud-native apps, serverless, react native, product development, startup mvp, proof of concept"
        canonical="https://hitechlogic.com/services/rapid-prototyping"
        schema={schema}
      />
      <Layout>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[hsl(var(--deep-navy))] via-[hsl(var(--graphite))] to-[hsl(var(--deep-navy))]">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvZz48L3N2Zz4=')] opacity-20" />
          <div className="relative mx-auto w-full max-w-6xl px-6 pt-32 pb-20 sm:pt-40 sm:pb-28">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg">
                <Rocket className="h-7 w-7 text-[hsl(var(--accent-blue))]" />
              </div>
              <span className="text-sm font-medium text-white/90 tracking-wide">Rapid Prototyping</span>
            </div>
            <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white text-balance max-w-5xl">
              Rapid Prototyping
              <span className="text-[hsl(var(--accent-blue))] block sm:inline"> & Development</span>
            </h1>
            <p className="mt-6 text-xl text-white/80 max-w-3xl leading-relaxed">
              From whiteboard to working product in 4-8 weeks. AI-accelerated development with production-ready infrastructure,
              enterprise security, and seamless transition to 24/7 managed operations.
            </p>

            <div className="mt-10">
              <Button variant="hero" size="xl" asChild className="shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                <Link to="/contact" className="flex items-center gap-2 group">
                  <Target className="h-5 w-5" />
                  <span>Start Your Prototype</span>
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            {/* Key Metrics */}
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {metrics.map((metric) => {
                const Icon = metric.icon;
                return (
                  <div key={metric.label} className="rounded-2xl border border-white/15 bg-white/5 p-4 md:p-5 text-center shadow-lg shadow-black/10">
                    <div className="flex justify-center mb-2">
                      <Icon className="h-5 w-5 md:h-6 md:w-6 text-[hsl(var(--accent-blue))]" />
                    </div>
                    <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">{metric.value}</div>
                    <div className="mt-1 text-xs md:text-sm font-medium text-white/70">{metric.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* What It Includes */}
        <section className="section-space bg-slate-50">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="eyebrow text-[hsl(var(--accent-blue))]">Production-ready from day one</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[hsl(var(--navy))]">
                What Makes Our Prototyping Different
              </h2>
              <p className="mt-6 text-lg text-slate-600">
                We don't just build prototypes – we build production-ready applications with the same MSP-grade reliability
                and security that powers our enterprise managed services.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {capabilities.map((capability, index) => {
                const Icon = capability.icon;
                return (
                  <Card key={index} className="p-8 border-2 hover:border-[hsl(var(--accent-blue))]/30 hover:shadow-xl transition-all hover:-translate-y-1 duration-300 group">
                    <div className="flex items-start gap-4">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[hsl(var(--accent-blue))]/10 to-[hsl(var(--navy))]/5 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-7 w-7 text-[hsl(var(--accent-blue))]" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-[hsl(var(--navy))] mb-3">{capability.title}</h3>
                        <p className="text-slate-600 mb-4 leading-relaxed">{capability.description}</p>
                        <span className="text-xs font-bold text-[hsl(var(--accent-blue))] bg-gradient-to-br from-[hsl(var(--accent-blue))]/10 to-[hsl(var(--navy))]/5 px-3 py-1 rounded-full border border-[hsl(var(--accent-blue))]/30">
                          {capability.highlight}
                        </span>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process Specialties */}
        <section className="section-space bg-white">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="eyebrow text-[hsl(var(--accent-blue))]">Specialized expertise at every step</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[hsl(var(--navy))]">
                Evaluating concepts before we code
              </h2>
              <p className="mt-6 text-lg text-slate-600">
                The people who evaluate, engineer, launch, and operate each step are specialized so nothing ever stalls on ideation.
              </p>
            </div>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              {rapidPrototypingSteps.map((step) => (
                <Card key={step.slug} className="flex flex-col h-full border border-slate-200 shadow-sm bg-white">
                  <div className="p-6 flex-1">
                    <div className="text-xs uppercase tracking-widest text-slate-500 mb-2">
                      {step.specialty}
                    </div>
                    <h3 className="text-xl font-semibold text-[hsl(var(--navy))] mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm text-slate-600 mb-4">
                      {step.overview}
                    </p>
                    <div className="space-y-2">
                      {step.deliverables.slice(0, 3).map((item) => (
                        <div key={item} className="flex items-start gap-2 text-sm text-slate-600">
                          <span className="mt-0.5 h-1 w-1 rounded-full bg-[hsl(var(--accent-blue))]" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="px-6 pb-6 pt-4">
                    <Link
                      to={`/services/rapid-prototyping/${step.slug}`}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-[hsl(var(--accent-blue))] hover:text-[hsl(var(--navy))]"
                    >
                      Go to the specialty page
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* The Process */}
        <section className="section-space bg-slate-50">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="eyebrow text-[hsl(var(--accent-blue))]">Rapid development methodology</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[hsl(var(--navy))]">
                Our Rapid Prototyping Process
              </h2>
              <p className="mt-6 text-lg text-slate-600">
                From idea to launch in 4-8 weeks with continuous feedback and iterative delivery
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {prototypingJourney.map((phase, index) => {
                const Icon = phase.icon;
                return (
                  <Card key={index} className="p-6 bg-white border-2 border-slate-200 hover:border-[hsl(var(--accent-blue))]/30 hover:shadow-xl transition-all group relative">
                    {index < prototypingJourney.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 -right-4 z-10">
                        <ArrowRight className="h-6 w-6 text-[hsl(var(--accent-blue))]/40" />
                      </div>
                    )}
                    <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-[hsl(var(--accent-blue))]/10 to-[hsl(var(--navy))]/5 border border-[hsl(var(--accent-blue))]/30 mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="h-7 w-7 text-[hsl(var(--accent-blue))]" />
                    </div>
                    <div className="text-xs font-bold text-[hsl(var(--accent-blue))] uppercase tracking-wider mb-2">
                      {phase.duration}
                    </div>
                    <h3 className="text-xl font-bold text-[hsl(var(--navy))] mb-2 group-hover:text-[hsl(var(--accent-blue))] transition-colors">
                      {phase.phase}
                    </h3>
                    <p className="text-sm text-slate-600">
                      {phase.description}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-12 bg-gradient-to-br from-[hsl(var(--deep-navy))] via-[hsl(var(--graphite))] to-[hsl(var(--deep-navy))]">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {trustIndicators.map((indicator) => (
                <div key={indicator.label} className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">{indicator.value}</div>
                  <div className="text-sm text-[hsl(var(--accent-blue))]">{indicator.label}</div>
                  <div className="text-xs text-slate-300 mt-1">{indicator.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="section-space bg-white">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="eyebrow text-[hsl(var(--accent-blue))]">How it works</span>
                <h2 className="mt-4 text-4xl font-bold text-[hsl(var(--navy))]">From concept to production-ready MVP</h2>
                <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                  Our Rapid Prototyping service transforms ideas into production-ready applications in weeks,
                  not months. We validate concepts, build MVPs, and launch with confidence using enterprise-grade
                  development practices from day one.
                </p>
                <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                  Whether you're a startup seeking to validate an idea, an enterprise looking to digitize processes,
                  or any business ready to turn vision into value – our iterative approach ensures you launch successfully.
                </p>
                <div className="mt-8">
                  <Button variant="hero" size="lg" asChild>
                    <Link to="/contact" className="flex items-center gap-2 group">
                      <span>Get Started Today</span>
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-6 border-2 border-[hsl(var(--accent-blue))]/30 bg-gradient-to-br from-[hsl(var(--accent-blue))]/10 to-[hsl(var(--navy))]/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <Rocket className="h-8 w-8 text-[hsl(var(--accent-blue))] mb-3" />
                  <div className="text-2xl font-bold text-[hsl(var(--navy))] mb-1">4-8</div>
                  <div className="text-sm text-slate-600">Weeks to launch</div>
                </Card>
                <Card className="p-6 border-2 border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <Zap className="h-8 w-8 text-[hsl(var(--accent-blue))] mb-3" />
                  <div className="text-2xl font-bold text-[hsl(var(--navy))] mb-1">60%</div>
                  <div className="text-sm text-slate-600">Cost savings</div>
                </Card>
                <Card className="p-6 border-2 border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <Shield className="h-8 w-8 text-[hsl(var(--accent-blue))] mb-3" />
                  <div className="text-2xl font-bold text-[hsl(var(--navy))] mb-1">MSP</div>
                  <div className="text-sm text-slate-600">Grade security</div>
                </Card>
                <Card className="p-6 border-2 border-[hsl(var(--accent-blue))]/30 bg-gradient-to-br from-[hsl(var(--accent-blue))]/10 to-[hsl(var(--navy))]/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <TrendingUp className="h-8 w-8 text-[hsl(var(--accent-blue))] mb-3" />
                  <div className="text-2xl font-bold text-[hsl(var(--navy))] mb-1">3-5x</div>
                  <div className="text-sm text-slate-600">Faster delivery</div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Process Timeline */}
        <section className="section-space bg-gradient-to-br from-slate-50 to-white">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="eyebrow text-[hsl(var(--accent-blue))]">Our process</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[hsl(var(--navy))]">
                4-week production launch cycle
              </h2>
              <p className="mt-6 text-lg text-slate-600">
                From concept validation to production deployment – we transform ideas into reality quickly and safely.
              </p>
            </div>

            <div className="relative">
              {/* Connection Line */}
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[hsl(var(--accent-blue))]/20 via-[hsl(var(--accent-blue))] to-[hsl(var(--accent-blue))]/20 -translate-y-1/2" />

              <div className="grid md:grid-cols-4 gap-6 relative">
                {process.map((item, index) => (
                  <Card key={item.step} className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-slate-200 hover:border-[hsl(var(--accent-blue))]/30 group">
                    <div className="flex flex-col items-center text-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[hsl(var(--accent-blue))] to-[hsl(var(--navy))] text-white text-2xl font-bold mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        {item.step}
                      </div>
                      <div className="text-sm font-semibold text-[hsl(var(--accent-blue))] mb-2">{item.duration}</div>
                      <h3 className="text-lg font-bold text-[hsl(var(--navy))] mb-3">{item.title}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div className="mt-12 text-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact" className="flex items-center gap-2 group">
                  <span>Start Your Project</span>
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section-space bg-white">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <span className="eyebrow text-[hsl(var(--accent-blue))]">Business value</span>
                <h2 className="mt-4 text-4xl font-bold text-[hsl(var(--navy))]">Accelerate innovation without the risk</h2>
                <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                  Launch production-ready applications faster and more affordably than traditional development approaches.
                  Our MVP-first methodology reduces risk while delivering enterprise-grade applications.
                </p>
                <div className="mt-8">
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/contact" className="flex items-center gap-2 group">
                      <span>Get Started</span>
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={benefit} className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-[hsl(var(--accent-blue))]/10 to-transparent hover:from-[hsl(var(--accent-blue))]/20 transition-all hover:translate-x-2 duration-300 group">
                    <CheckCircle2 className="h-6 w-6 text-[hsl(var(--accent-blue))] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <span className="text-slate-700 leading-relaxed">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="section-space bg-[hsl(var(--background))]">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="eyebrow text-[hsl(var(--accent-blue))]">Common scenarios</span>
              <h2 className="mt-4 text-4xl font-bold text-[hsl(var(--navy))]">Built for innovation across industries</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => {
                const Icon = useCase.icon;
                return (
                  <Card key={useCase.title} className="p-8 border-2 border-slate-200 hover:border-[hsl(var(--accent-blue))]/30 hover:shadow-xl transition-all hover:-translate-y-1 duration-300 group">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[hsl(var(--accent-blue))]/10 to-[hsl(var(--navy))]/5 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-6 w-6 text-[hsl(var(--accent-blue))]" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-bold text-[hsl(var(--navy))]">{useCase.title}</h3>
                          <span className="text-sm font-semibold text-[hsl(var(--accent-blue))] bg-gradient-to-br from-[hsl(var(--accent-blue))]/10 to-[hsl(var(--navy))]/5 px-2 py-1 rounded-full">
                            {useCase.industry}
                          </span>
                        </div>
                        <p className="text-slate-600 leading-relaxed">{useCase.description}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-space bg-white">
          <div className="mx-auto w-full max-w-4xl px-6">
            <div className="text-center mb-16">
              <span className="eyebrow text-[hsl(var(--accent-blue))]">Frequently asked questions</span>
              <h2 className="mt-4 text-4xl font-bold text-[hsl(var(--navy))]">Everything you need to know</h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 border-2 hover:border-[hsl(var(--accent-blue))]/30">
                  <h3 className="text-lg font-bold text-[hsl(var(--navy))] mb-3">{faq.question}</h3>
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-slate-600 mb-6">Still have questions?</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="outline" size="lg" asChild>
                  <Link to="/contact" className="flex items-center gap-2">
                    <Mail className="h-5 w-5" />
                    <span>Email Us</span>
                  </Link>
                </Button>
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact" className="flex items-center gap-2 group">
                    <Phone className="h-5 w-5" />
                    <span>Schedule a Call</span>
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why HiTechLogic Is Different */}
        <WhyDifferentSection />

        {/* Why customers replace legacy monitoring with HiTechLogic */}
        <section className="section-space bg-gradient-to-br from-slate-50 to-white">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="eyebrow text-[hsl(var(--accent-blue))]">4. Why customers replace legacy monitoring with HiTechLogic</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[hsl(var(--navy))]">
                Intelligent Automation vs. Basic Monitoring
              </h2>
              <p className="mt-6 text-lg text-slate-600">
                We don't just monitor - we prevent issues, automate recovery, and continuously optimize
                performance across your entire infrastructure ecosystem.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full bg-white border border-slate-200 rounded-2xl shadow-lg">
                <thead>
                  <tr className="bg-gradient-to-r from-[hsl(var(--navy))] to-[hsl(var(--navy))]/90 text-white">
                    <th className="px-6 py-4 text-left font-bold text-lg">Capability</th>
                    <th className="px-6 py-4 text-center font-bold text-lg border-l border-slate-300">Legacy Monitoring</th>
                    <th className="px-6 py-4 text-center font-bold text-lg border-l border-slate-300 bg-gradient-to-r from-[hsl(var(--accent-blue))] to-[hsl(var(--accent-blue))]/90">HiTechLogic</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      capability: "Issue Detection",
                      legacy: "Reactive alerts on symptoms only",
                      hitechlogic: "Predictive anomaly detection with root cause correlation",
                    },
                    {
                      capability: "Response Time",
                      legacy: "15-30 minutes to detect and notify",
                      hitechlogic: "<2 minutes automated remediation",
                    },
                    {
                      capability: "Resolution Method",
                      legacy: "Manual investigation and human intervention",
                      hitechlogic: "Automated runbooks with intelligent decision trees",
                    },
                    {
                      capability: "Learning & Adaptation",
                      legacy: "Static thresholds and fixed alerts",
                      hitechlogic: "AI learns from each incident, continuously improving",
                    },
                    {
                      capability: "Operational Overhead",
                      legacy: "70% of time spent on routine tasks",
                      hitechlogic: "DevOps focus on innovation, not firefighting",
                    },
                    {
                      capability: "Cost Efficiency",
                      legacy: "$5,400 average cost per incident",
                      hitechlogic: "$540 average with 90% cost reduction",
                    },
                    {
                      capability: "Uptime SLA",
                      legacy: "Industry standard 99.9%",
                      hitechlogic: "Guaranteed 99.99% with automated fallbacks",
                    },
                  ].map((row, index) => (
                    <tr key={index} className={`${index % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'} hover:bg-blue-50/30 transition-all duration-300`}>
                      <td className="px-6 py-4 font-semibold text-[hsl(var(--navy))] text-left border-r border-slate-200">
                        {row.capability}
                      </td>
                      <td className="px-6 py-4 text-slate-600 text-center text-sm">
                        {row.legacy}
                      </td>
                      <td className="px-6 py-4 bg-gradient-to-r from-green-50 to-green-100/50 font-semibold text-green-800 text-center text-sm border-l-2 border-green-200">
                        <CheckCircle2 className="h-5 w-5 text-green-600 inline-block mr-2" />
                        {row.hitechlogic}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-12 text-center">
              <div className="bg-gradient-to-br from-[hsl(var(--accent-blue))]/10 to-green-50/50 rounded-2xl p-8 border border-[hsl(var(--accent-blue))]/20">
                <TrendingUp className="h-12 w-12 text-[hsl(var(--accent-blue))] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-[hsl(var(--navy))] mb-4">90% Operational Cost Reduction</h3>
                <p className="text-lg text-slate-600 mb-6 max-w-2xl mx-auto">
                  Customers consistently report dramatic improvements in both operational efficiency
                  and system reliability when replacing legacy monitoring with HiTechLogic's
                  intelligent automation platform.
                </p>
                <div className="flex justify-center gap-8 text-sm">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[hsl(var(--accent-blue))]">615</div>
                    <div className="text-slate-600">Pre-built runbooks</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[hsl(var(--accent-blue))]">99.9%</div>
                    <div className="text-slate-600">Automation success</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[hsl(var(--accent-blue))]">$2.1M</div>
                    <div className="text-slate-600">Annual savings</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-[hsl(var(--deep-navy))] via-[hsl(var(--graphite))] to-[hsl(var(--deep-navy))]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Bring Your Idea to Life?
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                Schedule a free consultation to discuss your project, timeline, and how we can help you launch faster.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Button
                  variant="secondary"
                  size="xl"
                  asChild
                  className="bg-[hsl(var(--accent-blue))] text-white hover:bg-[hsl(var(--accent-blue))]/90"
                >
                  <Link to="/contact">
                    <Calendar className="h-5 w-5 mr-2" />
                    Schedule Consultation
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="xl"
                  asChild
                  className="border-2 border-slate-200 text-white hover:bg-white/10"
                >
                  <Link to="/services">
                    View All Services
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Link>
                </Button>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-slate-300 text-sm">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>+1-888-448-3244</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>contact@hitechlogic.com</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
