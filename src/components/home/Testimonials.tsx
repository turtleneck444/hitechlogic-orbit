import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "HiTechLogic transformed how we handle incidents. What used to take hours now resolves automatically in minutes. Our engineering team can finally focus on building features instead of fighting fires.",
    author: "Sarah Chen",
    role: "VP of Engineering",
    company: "TechCorp",
  },
  {
    quote: "The AI-driven alert filtering alone saved us countless hours of wasted effort. We went from drowning in alerts to having a clear signal on what actually matters.",
    author: "Michael Rodriguez",
    role: "DevOps Lead",
    company: "CloudScale Inc",
  },
  {
    quote: "We scaled from 50 to 500 services without adding a single ops person. HiTechLogic's automation platform grows with us, keeping our infrastructure reliable and our costs predictable.",
    author: "Emily Thompson",
    role: "CTO",
    company: "DataFlow Systems",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Trusted by Engineering Leaders
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See what teams say about working with HiTechLogic
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.author}
              className="glass-card p-8 hover-scale"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="h-8 w-8 text-accent mb-4" />
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-border/50 pt-4">
                <div className="font-semibold">{testimonial.author}</div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.role} at {testimonial.company}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
