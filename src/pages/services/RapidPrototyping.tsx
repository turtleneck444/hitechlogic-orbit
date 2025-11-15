import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
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
} from "lucide-react";

const capabilities = [
  {
    icon: Lightbulb,
    title: "Idea Refinement & UX Design",
    description: "Collaborative discovery workshops to define vision, user journeys, wireframes, and interactive prototypes validated with stakeholders.",
    highlight: "User-centered",
  },
  {
    icon: Code2,
    title: "AI-Accelerated Development",
    description: "Leverage generative AI tools, reusable component libraries, and modern frameworks to build 3-5x faster without sacrificing quality.",
    highlight: "3-5x faster",
  },
  {
    icon: Cloud,
    title: "Cloud-Native Architecture",
    description: "Deploy on modern stacks (serverless, Kubernetes, microservices) with built-in security, compliance, and infrastructure automation.",
    highlight: "Production-ready",
  },
  {
    icon: Layers,
    title: "Iterative Sprint Delivery",
    description: "Bi-weekly sprint cycles with continuous demos, feedback integration, and course corrections to ensure product-market fit.",
    highlight: "Agile sprints",
  },
  {
    icon: Shield,
    title: "MSP-Grade Reliability",
    description: "Built with the same reliability engineering, security hardening, and operational excellence that powers our enterprise MSP.",
    highlight: "Enterprise-ready",
  },
  {
    icon: Sparkles,
    title: "Seamless Hand-off",
    description: "Transition your MVP to our managed services team for 24/7 operations, scaling, monitoring, and ongoing enhancements.",
    highlight: "Managed services",
  },
];

const benefits = [
  "Launch working MVPs in 4-8 weeks instead of 6-12 months",
  "Reduce development costs by 60% with AI-assisted coding and reusable components",
  "Production-ready from day one with built-in security, compliance, and monitoring",
  "Seamless transition to 24/7 managed operations for scaling and support",
  "Iterative delivery ensures continuous feedback and product-market fit",
  "Access enterprise-grade infrastructure and reliability engineering from the start",
];

const metrics = [
  { label: "MVP Launch Time", value: "4-8 wks", icon: Clock },
  { label: "Cost Reduction", value: "60%", icon: TrendingUp },
  { label: "Development Speed", value: "3-5x", icon: Zap },
  { label: "Client Satisfaction", value: "98%", icon: Award },
];

const prototypingJourney = [
  {
    phase: "Discovery",
    description: "Define vision, goals, user personas, and success criteria",
    duration: "Week 1",
    icon: Lightbulb,
  },
  {
    phase: "Design",
    description: "Create wireframes, user flows, and interactive prototypes",
    duration: "Week 1-2",
    icon: Smartphone,
  },
  {
    phase: "Build",
    description: "Sprint-based development with AI-assisted coding",
    duration: "Week 2-6",
    icon: Code2,
  },
  {
    phase: "Launch",
    description: "Deploy to production with monitoring and hand-off",
    duration: "Week 7-8",
    icon: Rocket,
  },
];

const useCases = [
  {
    title: "Mobile & Web Applications",
    description: "Customer-facing mobile apps, internal workflow tools, and web portals built with modern frameworks like React, React Native, and Next.js.",
    icon: Smartphone,
    industry: "All Industries",
  },
  {
    title: "Investor-Ready MVPs",
    description: "Proof-of-concept applications to secure funding or validate market demand with real users before committing to full-scale development.",
    icon: Rocket,
    industry: "Startups",
  },
  {
    title: "Workflow Automation Tools",
    description: "Custom internal tools to automate manual processes, integrate systems, and improve operational efficiency across teams.",
    icon: Layers,
    industry: "Enterprise",
  },
  {
    title: "API & Integration Platforms",
    description: "Backend APIs, microservices, and integration platforms to connect systems, expose data, and enable new digital experiences.",
    icon: Cloud,
    industry: "Technology",
  },
];

const techStack = [
  {
    category: "Frontend",
    technologies: ["React", "React Native", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Backend",
    technologies: ["Node.js", "Python", "Go", "Serverless (Lambda)", "GraphQL"],
  },
  {
    category: "Infrastructure",
    technologies: ["AWS", "Azure", "GCP", "Kubernetes", "Terraform"],
  },
  {
    category: "Database",
    technologies: ["PostgreSQL", "MongoDB", "DynamoDB", "Redis"],
  },
];

export default function RapidPrototyping() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Rapid Prototyping & App Development",
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
        title="Rapid Prototyping & App Development | HiTechLogic"
        description="Turn ideas into working MVPs in 4-8 weeks. AI-accelerated development with cloud-native architecture and MSP-grade reliability. Reduce development costs by 60%."
        keywords="rapid prototyping, mvp development, app development, AI-assisted development, cloud-native apps, serverless, react native, product development, startup mvp, proof of concept"
        canonical="https://hitechlogic.com/services/rapid-prototyping"
        schema={schema}
      />
      <Layout>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-white via-purple-50/30 to-white pt-32 pb-24">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:60px_60px]" />

          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-50 to-blue-50 border border-[hsl(var(--signal-purple))]/20 mb-6">
                <Rocket className="h-4 w-4 text-[hsl(var(--signal-purple))]" />
                <span className="text-sm font-bold text-[hsl(var(--navy))]">New Service</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[hsl(var(--navy))] mb-6">
                Rapid Prototyping & App Development
              </h1>

              <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                From whiteboard to working product in weeks, not months. Our Rapid Prototyping Studio combines human-centred design,
                AI-assisted development, and infrastructure automation to deliver production-ready MVPs that scale.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Button
                  variant="primary"
                  size="xl"
                  asChild
                  className="bg-gradient-to-r from-[hsl(var(--signal-purple))] to-[hsl(var(--accent-blue))] hover:from-[hsl(var(--signal-purple))]/90 hover:to-[hsl(var(--accent-blue))]/90 shadow-2xl"
                >
                  <Link to="/contact">
                    Start Your Prototype
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="xl" asChild>
                  <Link to="/demo">
                    View Demo Projects
                  </Link>
                </Button>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {metrics.map((metric, index) => {
                  const Icon = metric.icon;
                  return (
                    <Card key={index} className="p-6 text-center bg-white border-2 border-slate-200 hover:border-[hsl(var(--signal-purple))]/30 hover:shadow-xl transition-all">
                      <Icon className="h-8 w-8 text-[hsl(var(--signal-purple))] mx-auto mb-3" />
                      <div className="text-3xl font-black bg-gradient-to-br from-[hsl(var(--signal-purple))] to-[hsl(var(--accent-blue))] bg-clip-text text-transparent mb-2">
                        {metric.value}
                      </div>
                      <div className="text-xs font-semibold text-slate-600 uppercase tracking-wide">
                        {metric.label}
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--navy))] mb-6">
                What Makes Our Prototyping Different
              </h2>
              <p className="text-lg text-slate-600">
                We don't just build prototypes – we build production-ready applications with the same MSP-grade reliability
                and security that powers our enterprise managed services.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {capabilities.map((capability, index) => {
                const Icon = capability.icon;
                return (
                  <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 border-2 border-slate-200 hover:border-[hsl(var(--signal-purple))]/30 group">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[hsl(var(--signal-purple))]/10 to-purple-50 border border-[hsl(var(--signal-purple))]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="h-6 w-6 text-[hsl(var(--signal-purple))]" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-bold text-[hsl(var(--navy))]">
                            {capability.title}
                          </h3>
                          <span className="text-xs font-bold text-[hsl(var(--signal-purple))] bg-purple-50 px-2 py-1 rounded-full">
                            {capability.highlight}
                          </span>
                        </div>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {capability.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* The Process */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-purple-50/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--navy))] mb-6">
                Our Rapid Prototyping Process
              </h2>
              <p className="text-lg text-slate-600">
                From idea to launch in 4-8 weeks with continuous feedback and iterative delivery
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {prototypingJourney.map((phase, index) => {
                const Icon = phase.icon;
                return (
                  <Card key={index} className="p-6 bg-white border-2 border-slate-200 hover:border-[hsl(var(--signal-purple))]/30 hover:shadow-xl transition-all group relative">
                    {index < prototypingJourney.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 -right-4 z-10">
                        <ArrowRight className="h-6 w-6 text-[hsl(var(--signal-purple))]/40" />
                      </div>
                    )}
                    <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-[hsl(var(--signal-purple))]/10 to-purple-50 border border-[hsl(var(--signal-purple))]/20 mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="h-7 w-7 text-[hsl(var(--signal-purple))]" />
                    </div>
                    <div className="text-xs font-bold text-[hsl(var(--signal-purple))] uppercase tracking-wider mb-2">
                      {phase.duration}
                    </div>
                    <h3 className="text-xl font-bold text-[hsl(var(--navy))] mb-2 group-hover:text-[hsl(var(--signal-purple))] transition-colors">
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

        {/* Use Cases */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--navy))] mb-6">
                What We Build
              </h2>
              <p className="text-lg text-slate-600">
                From mobile apps to integration platforms – we turn your vision into production-ready software
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {useCases.map((useCase, index) => {
                const Icon = useCase.icon;
                return (
                  <Card key={index} className="p-8 hover:shadow-2xl transition-all duration-300 border-2 border-slate-200 hover:border-[hsl(var(--signal-purple))]/30 group">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-[hsl(var(--signal-purple))]/10 to-purple-50 border border-[hsl(var(--signal-purple))]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="h-7 w-7 text-[hsl(var(--signal-purple))]" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-xl font-bold text-[hsl(var(--navy))] group-hover:text-[hsl(var(--signal-purple))] transition-colors">
                            {useCase.title}
                          </h3>
                          <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded-full">
                            {useCase.industry}
                          </span>
                        </div>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {useCase.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-purple-50/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--navy))] mb-6">
                Modern Technology Stack
              </h2>
              <p className="text-lg text-slate-600">
                We use industry-leading frameworks and tools to build fast, secure, and scalable applications
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {techStack.map((stack, index) => (
                <Card key={index} className="p-6 bg-white border-2 border-slate-200 hover:border-[hsl(var(--signal-purple))]/30 hover:shadow-lg transition-all">
                  <h3 className="text-lg font-bold text-[hsl(var(--navy))] mb-4">
                    {stack.category}
                  </h3>
                  <ul className="space-y-2">
                    {stack.technologies.map((tech, techIndex) => (
                      <li key={techIndex} className="flex items-center gap-2 text-sm text-slate-600">
                        <CheckCircle2 className="h-4 w-4 text-[hsl(var(--signal-purple))] flex-shrink-0" />
                        {tech}
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--navy))] mb-6">
                Why Choose HiTechLogic for Rapid Prototyping?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 p-6 rounded-xl bg-gradient-to-br from-white to-purple-50/30 border-2 border-slate-200 hover:border-[hsl(var(--signal-purple))]/30 hover:shadow-lg transition-all">
                  <CheckCircle2 className="h-6 w-6 text-[hsl(var(--signal-purple))] flex-shrink-0 mt-1" />
                  <p className="text-slate-700 font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-[hsl(var(--navy))] via-[hsl(var(--signal-purple))]/90 to-[hsl(var(--navy))]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Bring Your Idea to Life?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Schedule a free consultation to discuss your project, timeline, and how we can help you launch faster.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Button
                  variant="secondary"
                  size="xl"
                  asChild
                  className="bg-white text-[hsl(var(--navy))] hover:bg-white/90"
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
                  className="border-2 border-white text-white hover:bg-white/10"
                >
                  <Link to="/services">
                    View All Services
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Link>
                </Button>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-white/80 text-sm">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>+1-888-448-3244</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>prototyping@hitechlogic.com</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
