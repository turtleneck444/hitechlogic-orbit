import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-electric-blue/10 rounded-full blur-3xl animate-glow-pulse" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-signal-purple/10 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-card mb-8">
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium">AI-Powered Operations Platform</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            From Outages to{" "}
            <span className="gradient-text">Autonomy</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            HiTechLogic blends observability, smart detection, and automated runbooks so your systems recover themselves—before customers feel the pain.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="xl" asChild className="group">
              <Link to="/contact">
                Book a Strategy Call
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="glass" size="xl" asChild>
              <Link to="/platform">See the Platform</Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-border/20">
            <p className="text-sm text-muted-foreground mb-6">Trusted by engineering teams at</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {["Company A", "Company B", "Company C", "Company D"].map((company) => (
                <div key={company} className="text-lg font-semibold">
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
