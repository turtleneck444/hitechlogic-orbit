import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import { Link } from "react-router-dom";

export function CTASection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="glass-card rounded-2xl p-12 text-center relative overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-primary opacity-10" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Transform Your Operations?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get your free infrastructure readiness assessment and discover how much time and money you could save with automated operations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="hero" size="xl" asChild className="group">
                <Link to="/contact">
                  Get Your Readiness Score
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="glass" size="xl" asChild>
                <a href="#" download>
                  <Download className="h-5 w-5" />
                  Download Checklist
                </a>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground mt-6">
              No credit card required • Free 30-minute consultation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
