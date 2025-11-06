import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Target, Shield, Heart, Zap } from "lucide-react";

const principles = [
  {
    icon: Shield,
    title: "Reliability",
    description: "We believe systems should be trustworthy. Every feature we build prioritizes stability and uptime.",
  },
  {
    icon: Target,
    title: "Safety",
    description: "Automation should empower, not endanger. We build with guardrails, testing, and rollback mechanisms.",
  },
  {
    icon: Heart,
    title: "Empathy",
    description: "We understand the stress of production incidents. Our platform is designed to reduce that burden.",
  },
  {
    icon: Zap,
    title: "Rigor",
    description: "Engineering excellence in every detail. We apply the same standards to our platform that we expect from yours.",
  },
];

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-hero">
        <div className="container relative z-10 mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Built by Operators,{" "}
            <span className="gradient-text">for Operators</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            HiTechLogic was founded by engineers who lived through the pain of scaling infrastructure and wanted a better way.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              To make infrastructure reliability accessible to every engineering team, regardless of size or expertise. We believe that modern operations should be proactive, automated, and—most importantly—humane.
            </p>
          </div>

          <Card className="glass-card p-12">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Too many talented engineers spend their nights and weekends fighting production fires. Too many companies struggle to scale their operations without proportionally scaling their ops teams. We built HiTechLogic to change that reality.
            </p>
          </Card>
        </div>
      </section>

      {/* Principles */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Our Principles</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              These values guide every decision we make
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {principles.map((principle, index) => (
              <Card
                key={principle.title}
                className="glass-card p-8 text-center hover-scale"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-lg bg-gradient-primary mb-6 glow-effect">
                  <principle.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3">{principle.title}</h3>
                <p className="text-muted-foreground">{principle.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Leadership Team</h2>
            <p className="text-xl text-muted-foreground">
              Experienced operators who've built and scaled infrastructure at leading tech companies
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Rivera",
                role: "Co-Founder & CEO",
                bio: "Former VP of Engineering at CloudScale. Built ops teams from 5 to 50 engineers.",
              },
              {
                name: "Jordan Chen",
                role: "Co-Founder & CTO",
                bio: "Ex-Google SRE. Led reliability initiatives for services handling billions of requests.",
              },
              {
                name: "Sam Taylor",
                role: "Head of Product",
                bio: "Product leader from Datadog. Deep expertise in observability and automation.",
              },
            ].map((member, index) => (
              <Card
                key={member.name}
                className="glass-card p-8 text-center hover-scale"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-24 w-24 rounded-full bg-gradient-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-sm text-accent mb-4">{member.role}</p>
                <p className="text-muted-foreground">{member.bio}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Careers CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-xl text-muted-foreground mb-8">
            We're always looking for talented engineers and operators who share our vision for better infrastructure management.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">View Open Positions</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
