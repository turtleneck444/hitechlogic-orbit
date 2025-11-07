import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { BackgroundPaths } from "@/components/ui/background-paths";

const testimonials = [
  {
    quote:
      "HiTechLogic gave us structure and calm. Within a quarter the incident channel went from panic to measured updates with clear ownership.",
    author: "Nadia Patel",
    role: "COO",
    company: "Meridian Health",
  },
  {
    quote:
      "They treat reliability as an executive function. We now brief our board on a single page that blends risk, spend, and automation adoption.",
    author: "Andre Keller",
    role: "CIO",
    company: "Northwind Bank",
  },
  {
    quote:
      "Our engineering teams can finally focus on roadmap commitments while HiTechLogic manages the operational heartbeat.",
    author: "Lena Cruz",
    role: "EVP of Engineering",
    company: "Apex Commerce",
  },
];

export function Testimonials() {
  return (
    <section className="relative section-space bg-white overflow-hidden">
      {/* Animated Background Paths */}
      <div className="absolute inset-0 z-0 opacity-100">
        <BackgroundPaths />
      </div>

      {/* White Overlay to Soften Background Paths */}
      <div className="absolute inset-0 z-[1] bg-white/60 pointer-events-none" />

      {/* Additional Visual Elements */}
      <div className="absolute inset-0 z-[2] bg-gradient-to-b from-blue-50/30 via-transparent to-blue-50/20 pointer-events-none" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="eyebrow text-electric-blue/70 font-semibold tracking-wide">Voice of the enterprise</span>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-[2.75rem] leading-tight font-bold">
              <span className="bg-gradient-to-r from-[hsl(var(--foreground))] via-[hsl(var(--foreground))] to-[hsl(var(--accent-blue))] bg-clip-text text-transparent">
                Outcomes validated by engineering and operations leadership.
              </span>
            </h2>
          </div>
          <p className="max-w-xl text-sm text-slate-600 leading-relaxed">
            Calm, consistent delivery resonates most with global teams—HiTechLogic keeps their focus on forward progress.
          </p>
        </div>

        <div className="relative z-10 mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.author}
              className="group relative flex h-full flex-col justify-between gap-6 p-8 bg-white/95 backdrop-blur-sm border-2 border-slate-200/60 shadow-lg hover:shadow-2xl hover:border-[hsl(var(--accent-blue))]/30 transition-all duration-500 overflow-hidden hover:-translate-y-1"
            >
              {/* Shimmer Effect on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50/40 to-transparent -translate-x-full group-hover:animate-shimmer" />
              </div>

              {/* Quote Icon Badge */}
              <div className="relative">
                <div className="absolute -top-1 -left-1 w-12 h-12 bg-gradient-to-br from-[hsl(var(--accent-blue))]/20 to-[hsl(var(--signal-purple))]/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center shadow-md ring-2 ring-[hsl(var(--accent-blue))]/20 group-hover:ring-[hsl(var(--accent-blue))]/40 transition-all duration-500">
                  <Quote className="h-6 w-6 text-[hsl(var(--accent-blue))] drop-shadow-sm" strokeWidth={2} />
                </div>
              </div>

              <p className="relative text-base leading-relaxed text-slate-700 font-medium">"{testimonial.quote}"</p>

              <div className="relative border-t-2 border-slate-200/80 pt-5">
                <div className="text-sm font-semibold text-foreground mb-1">{testimonial.author}</div>
                <div className="text-sm text-slate-500">
                  {testimonial.role}, {testimonial.company}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
