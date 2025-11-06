import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "Custom",
    description: "Perfect for teams getting started with operational automation",
    features: [
      "Single environment monitoring",
      "Core observability features",
      "10 automated playbooks",
      "Email support",
      "Monthly operations report",
      "Up to 100GB log ingestion",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Growth",
    price: "Custom",
    description: "For growing teams scaling their infrastructure",
    features: [
      "Multi-environment support",
      "Advanced AI filtering",
      "Unlimited automated playbooks",
      "Custom runbook development",
      "Slack/Teams integration",
      "Weekly sync calls",
      "Priority support",
      "Up to 500GB log ingestion",
    ],
    cta: "Request Quote",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Advanced features for large-scale operations",
    features: [
      "Everything in Growth, plus:",
      "SSO & advanced security",
      "Custom SLA agreements",
      "Dedicated success engineer",
      "Security review & compliance",
      "On-premise deployment option",
      "24/7 phone support",
      "Unlimited log ingestion",
      "Custom integrations",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-hero">
        <div className="container relative z-10 mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Simple, Transparent{" "}
            <span className="gradient-text">Pricing</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Choose the plan that fits your infrastructure scale. All plans include our core automation platform with uptime-friendly terms.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <Card
                key={plan.name}
                className={`glass-card p-8 relative hover-scale ${
                  plan.popular ? "border-2 border-accent" : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold gradient-text mb-4">{plan.price}</div>
                  <p className="text-muted-foreground">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.popular ? "hero" : "glass"}
                  size="lg"
                  className="w-full"
                  asChild
                >
                  <Link to="/contact">
                    {plan.cta}
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">All Plans Include</h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div className="glass-card p-6">
                <div className="font-semibold mb-2">Cancel Anytime</div>
                <p className="text-muted-foreground">No long-term contracts or hidden fees</p>
              </div>
              <div className="glass-card p-6">
                <div className="font-semibold mb-2">Transparent Pricing</div>
                <p className="text-muted-foreground">Clear, predictable monthly costs</p>
              </div>
              <div className="glass-card p-6">
                <div className="font-semibold mb-2">Expert Onboarding</div>
                <p className="text-muted-foreground">Dedicated support for smooth setup</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "How is pricing calculated?",
                a: "Pricing is based on your infrastructure scale, log volume, and number of environments. We'll work with you to create a custom quote that fits your needs.",
              },
              {
                q: "Can I change plans later?",
                a: "Absolutely. You can upgrade or downgrade your plan at any time as your needs evolve.",
              },
              {
                q: "What about onboarding fees?",
                a: "Enterprise customers may have one-time onboarding fees depending on complexity. We'll discuss this transparently during the sales process.",
              },
            ].map((faq) => (
              <div key={faq.q} className="glass-card p-6">
                <h3 className="font-semibold mb-2">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Schedule a call with our team to discuss your needs and get a custom quote.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">Request Proposal</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
