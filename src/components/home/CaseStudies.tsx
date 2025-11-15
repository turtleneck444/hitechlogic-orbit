import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import { getFeaturedCaseStudies } from "@/data/caseStudies";

export function CaseStudies() {
  const featuredCaseStudies = getFeaturedCaseStudies();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 border border-[hsl(var(--accent-blue))]/20 mb-6">
            <TrendingUp className="h-4 w-4 text-[hsl(var(--accent-blue))]" />
            <span className="text-sm font-bold text-[hsl(var(--navy))]">Proven Results</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[hsl(var(--navy))] mb-6">
            Transforming Businesses with Measurable Impact
          </h2>
          <p className="text-lg text-slate-600">
            Real client success stories with quantifiable outcomes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredCaseStudies.map((caseStudy) => (
            <Card
              key={caseStudy.id}
              className="group relative overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 hover:border-[hsl(var(--accent-blue))]/30"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--accent-blue))]/5 to-[hsl(var(--signal-purple))]/5 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative p-6">
                {/* Industry Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 mb-4">
                  <Building2 className="h-3.5 w-3.5 text-slate-600" />
                  <span className="text-xs font-semibold text-slate-700">{caseStudy.industry}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[hsl(var(--navy))] mb-3 line-clamp-2">
                  {caseStudy.title}
                </h3>

                {/* Challenge Preview */}
                <p className="text-sm text-slate-600 mb-6 line-clamp-3">
                  {caseStudy.challenge}
                </p>

                {/* Results Grid */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {caseStudy.results.slice(0, 2).map((result, index) => (
                    <div
                      key={index}
                      className="p-3 rounded-lg bg-gradient-to-br from-blue-50 to-white border border-[hsl(var(--accent-blue))]/20"
                    >
                      <div className="text-2xl font-black bg-gradient-to-br from-[hsl(var(--accent-blue))] to-[hsl(var(--signal-purple))] bg-clip-text text-transparent mb-1">
                        {result.metric}
                      </div>
                      <div className="text-xs font-semibold text-slate-700 line-clamp-2">
                        {result.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Testimonial */}
                {caseStudy.testimonial && (
                  <div className="mb-6 p-4 rounded-lg bg-slate-50 border border-slate-200">
                    <p className="text-sm text-slate-700 italic line-clamp-3 mb-2">
                      "{caseStudy.testimonial.quote}"
                    </p>
                    <p className="text-xs font-semibold text-slate-900">
                      — {caseStudy.testimonial.author}, {caseStudy.testimonial.role}
                    </p>
                  </div>
                )}

                {/* Read More Link */}
                <Link
                  to={`/case-studies/${caseStudy.id}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[hsl(var(--accent-blue))] hover:gap-3 transition-all group-hover:underline"
                >
                  <span>Read Full Case Study</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button variant="outline" size="lg" asChild>
            <Link to="/case-studies" className="group flex items-center gap-2">
              <span>View All Case Studies</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
