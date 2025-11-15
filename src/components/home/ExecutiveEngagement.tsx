import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, TrendingUp, BarChart3, Calendar, Target, Handshake, ArrowRight, CheckCircle2 } from "lucide-react";

export function ExecutiveEngagement() {
  const executiveServices = [
    {
      icon: Calendar,
      title: "Quarterly Strategy Summits",
      description: "Executive-level governance with strategic planning sessions to align technology initiatives with business goals",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: BarChart3,
      title: "Custom KPI Dashboards",
      description: "Real-time executive dashboards showing ROI, cost optimization, reliability metrics, and business impact",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Users,
      title: "Embedded Leadership",
      description: "Dedicated technology leaders who integrate with your executive team for seamless collaboration",
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: Target,
      title: "Business Outcome Focus",
      description: "Technology roadmaps built around revenue growth, market expansion, and competitive advantage",
      color: "from-indigo-500 to-purple-500",
    },
  ];

  const governanceFeatures = [
    "Monthly executive briefings with data-driven insights",
    "Quarterly business reviews with strategic recommendations",
    "Direct escalation paths to C-level leadership",
    "Joint innovation workshops and modernization planning",
    "Compliance and risk reporting for board presentations",
    "Custom SLAs aligned with business-critical objectives",
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white via-blue-50/30 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#2e6bff08_1px,transparent_1px),linear-gradient(to_bottom,#2e6bff08_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 border border-[hsl(var(--accent-blue))]/20 mb-6">
            <Handshake className="h-4 w-4 text-[hsl(var(--accent-blue))]" />
            <span className="text-sm font-bold text-[hsl(var(--navy))]">Strategic Partnership</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[hsl(var(--navy))] mb-6">
            Executive-Level Partnership & Governance
          </h2>
          <p className="text-lg text-slate-600">
            Enterprise clients value strategic partnership. We embed leadership into your organization,
            delivering executive-level governance with quarterly strategy summits and custom KPI dashboards.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left: Executive Services */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[hsl(var(--navy))] mb-6">
              What You Get
            </h3>
            {executiveServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group flex items-start gap-4 p-5 rounded-xl bg-white border-2 border-slate-200 hover:border-[hsl(var(--accent-blue))]/40 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-2xl transition-all duration-300`}>
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-[hsl(var(--navy))] mb-2 group-hover:text-[hsl(var(--accent-blue))] transition-colors">
                      {service.title}
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Governance Features */}
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-br from-[hsl(var(--accent-blue))]/20 to-[hsl(var(--signal-purple))]/20 rounded-3xl blur-2xl opacity-50" />

            <Card className="relative p-8 bg-gradient-to-br from-white to-blue-50/30 border-2 border-[hsl(var(--accent-blue))]/20 hover:border-[hsl(var(--accent-blue))]/40 hover:shadow-2xl transition-all duration-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[hsl(var(--accent-blue))] to-[hsl(var(--signal-purple))] flex items-center justify-center shadow-lg">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[hsl(var(--navy))]">
                    Strategic Governance Model
                  </h3>
                  <p className="text-sm text-slate-600">
                    Aligning technology with business objectives
                  </p>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                {governanceFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 group/item">
                    <CheckCircle2 className="h-5 w-5 text-[hsl(var(--accent-blue))] flex-shrink-0 mt-0.5 group-hover/item:scale-125 transition-transform" />
                    <p className="text-sm text-slate-700 group-hover/item:text-[hsl(var(--navy))] transition-colors">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-slate-200">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[
                    { value: "C-Level", label: "Leadership Access" },
                    { value: "Quarterly", label: "Strategy Reviews" },
                    { value: "Custom", label: "SLAs & KPIs" },
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-black bg-gradient-to-br from-[hsl(var(--accent-blue))] to-[hsl(var(--signal-purple))] bg-clip-text text-transparent mb-1">
                        {stat.value}
                      </div>
                      <div className="text-xs font-semibold text-slate-600 uppercase tracking-wide">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                <Button
                  variant="primary"
                  size="lg"
                  asChild
                  className="w-full bg-gradient-to-r from-[hsl(var(--accent-blue))] to-[hsl(var(--signal-purple))] hover:from-[hsl(var(--accent-blue))]/90 hover:to-[hsl(var(--signal-purple))]/90 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  <Link to="/contact" className="group">
                    Schedule Executive Briefing
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>

        {/* Bottom Proof Statement */}
        <div className="max-w-4xl mx-auto text-center p-8 rounded-2xl bg-gradient-to-r from-slate-50 to-blue-50/50 border border-slate-200">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Handshake className="h-6 w-6 text-[hsl(var(--accent-blue))]" />
            <h3 className="text-xl font-bold text-[hsl(var(--navy))]">
              Trusted by Enterprise Leaders
            </h3>
          </div>
          <p className="text-slate-600 mb-4">
            Our executive partnership model has helped Fortune 500 companies and fast-growing enterprises
            scale infrastructure, reduce costs, and accelerate innovation—all while maintaining SOC 2, HIPAA,
            and GDPR compliance.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-semibold text-slate-700">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[hsl(var(--accent-blue))]" />
              <span>Fortune 500 Trusted</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[hsl(var(--signal-purple))]" />
              <span>100+ Enterprise Clients</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>99.99% SLA Adherence</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
