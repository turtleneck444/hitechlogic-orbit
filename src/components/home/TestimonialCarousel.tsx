import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { caseStudies } from "@/data/caseStudies";

export function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Filter only case studies with testimonials
  const testimonials = caseStudies.filter(study => study.testimonial);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 6000); // Change slide every 6 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const goToNext = () => {
    setIsAutoPlaying(false);
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setActiveIndex(index);
  };

  if (testimonials.length === 0) return null;

  const currentTestimonial = testimonials[activeIndex];
  const currentCaseStudy = currentTestimonial;

  return (
    <section className="py-20 bg-gradient-to-br from-[hsl(var(--navy))] via-slate-900 to-[hsl(var(--navy))]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
            <Star className="h-4 w-4 text-white fill-white" />
            <span className="text-sm font-bold text-white">Client Success Stories</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-white/80">
            Hear from clients who have transformed their operations with HiTechLogic
          </p>
        </div>

        {/* Carousel */}
        <div className="max-w-6xl mx-auto relative">
          {/* Navigation Buttons */}
          <div className="hidden md:flex absolute left-0 right-0 top-1/2 -translate-y-1/2 justify-between pointer-events-none z-10">
            <Button
              onClick={goToPrevious}
              variant="outline"
              size="icon"
              className="pointer-events-auto -translate-x-6 bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white backdrop-blur-sm"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              onClick={goToNext}
              variant="outline"
              size="icon"
              className="pointer-events-auto translate-x-6 bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white backdrop-blur-sm"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          {/* Testimonial Card */}
          <Card className="p-8 md:p-12 bg-white border-2 border-white/20 shadow-2xl relative overflow-hidden">
            {/* Decorative Quote */}
            <div className="absolute top-6 right-6 opacity-5">
              <Quote className="h-32 w-32 text-[hsl(var(--accent-blue))]" />
            </div>

            <div className="relative">
              {/* Industry Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 border border-[hsl(var(--accent-blue))]/20 mb-6">
                <span className="text-xs font-bold text-[hsl(var(--navy))] uppercase tracking-wide">
                  {currentCaseStudy.industry}
                </span>
              </div>

              {/* Quote */}
              <div className="mb-8">
                <Quote className="h-8 w-8 text-[hsl(var(--accent-blue))]/40 mb-4" />
                <blockquote className="text-xl md:text-2xl text-slate-700 font-medium leading-relaxed mb-6">
                  "{currentTestimonial.testimonial?.quote}"
                </blockquote>
              </div>

              {/* Author Info */}
              <div className="flex items-center justify-between flex-wrap gap-6 pb-8 mb-8 border-b-2 border-slate-100">
                <div>
                  <div className="text-lg font-bold text-[hsl(var(--navy))]">
                    {currentTestimonial.testimonial?.author}
                  </div>
                  <div className="text-sm text-slate-600">
                    {currentTestimonial.testimonial?.role}
                  </div>
                  <div className="text-sm font-semibold text-[hsl(var(--accent-blue))]">
                    {currentTestimonial.testimonial?.company}
                  </div>
                </div>

                {/* Star Rating */}
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
              </div>

              {/* Key Results */}
              <div>
                <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">
                  Key Results Achieved
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {currentCaseStudy.results.slice(0, 4).map((result, index) => (
                    <div key={index} className="text-center p-4 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50/50 border border-[hsl(var(--accent-blue))]/20">
                      <div className="text-2xl md:text-3xl font-black bg-gradient-to-br from-[hsl(var(--accent-blue))] to-[hsl(var(--signal-purple))] bg-clip-text text-transparent mb-1">
                        {result.metric}
                      </div>
                      <div className="text-xs font-semibold text-slate-600 uppercase tracking-wide">
                        {result.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          {/* Dots Navigation */}
          <div className="flex items-center justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === activeIndex
                    ? "w-12 h-3 bg-white"
                    : "w-3 h-3 bg-white/40 hover:bg-white/60"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden items-center justify-center gap-4 mt-6">
            <Button
              onClick={goToPrevious}
              variant="outline"
              size="sm"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white backdrop-blur-sm"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Previous
            </Button>
            <Button
              onClick={goToNext}
              variant="outline"
              size="sm"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white backdrop-blur-sm"
            >
              Next
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
