import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import {
  Activity,
  BarChart3,
  Gauge,
  Handshake,
  Server,
  ShieldCheck,
  Workflow,
  ArrowRight,
  Sparkles,
  Target,
  Globe,
  Phone,
  MessageCircle,
  Clock,
  Zap,
  Users,
  Award,
  Shield,
  CheckCircle2,
  Cloud,
  Mail,
  Calendar,
  AlertTriangle,
  Database,
  Cpu,
  Monitor,
  Network,
} from "lucide-react";

export default function InfrastructureCloudOperations() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    provider: {
      "@type": "Organization",
      name: "HiTechLogic",
    },
    serviceType: "Infrastructure Management",
    name: "Infrastructure & Cloud Operations",
    description: "24/7 cloud infrastructure management, monitoring, and optimization with guaranteed 99.99% uptime SLA across AWS, Azure, and GCP.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "Complete infrastructure operations management with uptime guarantees",
    },
  };

  return (
    <>
      <SEO
        title="Infrastructure & Cloud Operations Management | HiTechLogic"
        description="24/7 cloud infrastructure management with 99.99% uptime SLA. AWS, Azure, GCP expertise. Reduce costs 40%, ensure reliability across hybrid environments."
        keywords="cloud infrastructure, AWS management, Azure operations, GCP administration, hybrid cloud, infrastructure monitoring, uptime SLA"
        canonical="https://hitechlogic.com/services/infrastructure-cloud-operations"
        schema={schema}
      />
      <Layout>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[hsl(var(--deep-navy))] via-[hsl(var(--graphite))] to-[hsl(var(--deep-navy))]">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvZz48L3N2Zz4=')] opacity-20" />
          <div className="relative mx-auto w-full max-w-6xl px-6 pt-32 pb-20 sm:pt-40 sm:pb-28">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg">
                <Server className="h-7 w-7 text-[hsl(var(--accent-blue))]" />
              </div>
              <span className="text-sm font-medium text-white/90 tracking-wide">Cloud Infrastructure</span>
            </div>
            <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
              Infrastructure
              <span className="text-[hsl(var(--accent-blue))] block sm:inline"> & Cloud Operations</span>
            </h1>
            <p className="mt-6 text-xl text-white/80 max-w-3xl leading-relaxed">
              Enterprise-grade infrastructure management across AWS, Azure, GCP, and hybrid environments.
              Guaranteed 99.99% uptime with 24/7 monitoring, optimization, and proactive maintenance.
            </p>

            <div className="mt-10">
              <Button variant="hero" size="xl" asChild className="shadow-[0_20px_45px_-20px_rgba(139,92,246,0.8)] hover:shadow-[0_25px_45px_-12px_rgba(139,92,246,0.9)] hover:scale-105 transition-all duration-300">
                <Link to="/contact" className="flex items-center gap-2 group">
                  <Target className="h-5 w-5" />
                  <span>Optimize Infrastructure</span>
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            {/* Key Metrics */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: "Uptime SLA", value: "99.99%", icon: Shield },
                { label: "Response Time", value: "<15 min", icon: Clock },
                { label: "Cost Savings", value: "40%", icon: BarChart3 },
                { label: "Multi-Cloud", value: "AWS/Azure/GCP", icon: Cloud },
              ].map((metric, index) => (
                <div key={metric.label} className="text-center group">
                  <div className="flex justify-center mb-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[hsl(var(--accent-blue))]/10 to-white/5 group-hover:from-[hsl(var(--accent-blue))]/20 group-hover:to-white/10 transition-all duration-300">
                      <metric.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white group-hover:scale-110 transition-transform duration-300">{metric.value}</div>
                  <div className="mt-2 text-sm font-medium text-slate-300">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What It Includes */}
        <section className="section-space bg-slate-50">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="eyebrow text-[hsl(var(--accent-blue))]">Complete infrastructure management</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[hsl(var(--navy))]">
                Always-on infrastructure with zero surprises
              </h2>
              <p className="mt-6 text-lg text-slate-600">
                Unified operations across your entire cloud ecosystem with enterprise-grade reliability,
                security, and performance. From single applications to complex multi-region deployments.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  area: "Infrastructure Foundation",
                  description: "Compute, storage, and networking resources optimized for performance and costs",
                  capabilities: ["Multi-cloud orchestration", "Auto-scaling configuration", "Load balancing", "CDN optimization"],
                  icon: Server,
                },
                {
                  area: "Platform Management",
                  description: "Application platforms and middleware managed for availability and security",
                  capabilities: ["Kubernetes administration", "Database management", "API gateway control", "Service mesh operation"],
                  icon: Cpu,
                },
                {
                  area: "Operational Excellence",
                  description: "24/7 monitoring, automation, and continuous optimization",
                  capabilities: ["Proactive monitoring", "Automated patching", "Performance tuning", "Incident prevention"],
                  icon: Activity,
                },
              ].map((area, index) => (
                <Card key={area.area} className="p-8 border-2 hover:border-[hsl(var(--accent-blue))]/30 hover:shadow-xl transition-all hover:-translate-y-1 duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[hsl(var(--accent-blue))]/10 to-[hsl(var(--navy))]/5 group-hover:scale-110 transition-transform duration-300">
                      <area.icon className="h-7 w-7 text-[hsl(var(--accent-blue))]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-[hsl(var(--navy))] mb-3">{area.area}</h3>
                      <p className="text-slate-600 mb-6 leading-relaxed">{area.description}</p>
                      <ul className="space-y-3">
                        {area.capabilities.map((capability) => (
                          <li key={capability} className="flex items-center gap-2 text-sm">
                            <CheckCircle2 className="h-4 w-4 text-[hsl(var(--accent-blue))] shrink-0" />
                            <span className="text-slate-700">{capability}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Cloud Platforms */}
        <section className="section-space bg-white">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="eyebrow text-[hsl(var(--accent-blue))]">Multi-cloud expertise</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[hsl(var(--navy))]">
                AWS, Azure, GCP optimization
              </h2>
              <p className="mt-6 text-lg text-slate-600">
                Native platform expertise across all major cloud providers with unified management,
                consistent security policies, and platform-neutral automation.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  platform: "Amazon Web Services",
                  expertise: "EC2, ECS, EKS, Lambda, RDS, S3, CloudFormation, CloudWatch",
                  icon: Cloud,
                  color: "orange",
                },
                {
                  platform: "Microsoft Azure",
                  expertise: "Compute, AKS, Functions, SQL Database, Storage, ARM templates, Monitor",
                  icon: Server,
                  color: "blue",
                },
                {
                  platform: "Google Cloud Platform",
                  expertise: "Compute Engine, GKE, Cloud Functions, Cloud SQL, GCS, Deployment Manager",
                  icon: Database,
                  color: "green",
                },
              ].map((cloud, index) => (
                <Card key={cloud.platform} className={`p-8 border-2 hover:shadow-xl transition-all hover:-translate-y-1 duration-300 group ${
                  cloud.color === 'orange' ? 'border-orange-200 hover:border-orange-400' :
                  cloud.color === 'blue' ? 'border-blue-200 hover:border-blue-400' :
                  'border-green-200 hover:border-green-400'
                }`}>
                  <div className="text-center">
                    <div className={`flex h-16 w-16 mx-auto items-center justify-center rounded-xl mb-6 ${
                      cloud.color === 'orange' ? 'bg-orange-50' :
                      cloud.color === 'blue' ? 'bg-blue-50' :
                      'bg-green-50'
                    } group-hover:scale-110 transition-transform duration-300`}>
                      <cloud.icon className={`h-8 w-8 ${
                        cloud.color === 'orange' ? 'text-orange-600' :
                        cloud.color === 'blue' ? 'text-blue-600' :
                        'text-green-600'
                      }`} />
                    </div>
                    <h3 className="text-2xl font-bold text-[hsl(var(--navy))] mb-4">{cloud.platform}</h3>
                    <div className="text-sm text-slate-600 leading-relaxed">{cloud.expertise}</div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Operational Processes */}
        <section className="section-space bg-slate-50">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="eyebrow text-[hsl(var(--accent-blue))]">Operational rigor</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[hsl(var(--navy))]">
                Disciplined change management & monitoring
              </h2>
              <p className="mt-6 text-lg text-slate-600">
                Structured processes ensure zero-downtime deployments, traceable changes, and
                rapid issue resolution with comprehensive audit trails.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-[hsl(var(--navy))] mb-6">Change Management</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-200 hover:border-[hsl(var(--accent-blue))]/30 transition-all hover:translate-x-2 duration-300 group">
                    <CheckCircle2 className="h-6 w-6 text-[hsl(var(--accent-blue))] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="font-semibold text-[hsl(var(--navy))]">Change Planning & Review</div>
                      <div className="text-slate-600">All infrastructure changes require documented plans and peer review</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-200 hover:border-[hsl(var(--accent-blue))]/30 transition-all hover:translate-x-2 duration-300 group">
                    <CheckCircle2 className="h-6 w-6 text-[hsl(var(--accent-blue))] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="font-semibold text-[hsl(var(--navy))]">Automated Deployments</div>
                      <div className="text-slate-600">Infrastructure as Code with automated testing and rollback capabilities</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-200 hover:border-[hsl(var(--accent-blue))]/30 transition-all hover:translate-x-2 duration-300 group">
                    <CheckCircle2 className="h-6 w-6 text-[hsl(var(--accent-blue))] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="font-semibold text-[hsl(var(--navy))]">Change Traceability</div>
                      <div className="text-slate-600">Complete audit trails for all infrastructure modifications and incidents</div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[hsl(var(--navy))] mb-6">Production Stewardship</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-200 hover:border-[hsl(var(--accent-blue))]/30 transition-all hover:translate-x-2 duration-300 group">
                    <CheckCircle2 className="h-6 w-6 text-[hsl(var(--accent-blue))] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="font-semibold text-[hsl(var(--navy))]">24/7 Infrastructure Monitoring</div>
                      <div className="text-slate-600">Real-time monitoring of all systems with automated alerting and response</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-200 hover:border-[hsl(var(--accent-blue))]/30 transition-all hover:translate-x-2 duration-300 group">
                    <CheckCircle2 className="h-6 w-6 text-[hsl(var(--accent-blue))] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="font-semibold text-[hsl(var(--navy))]">Capacity Planning</div>
                      <div className="text-slate-600">Quarterly capacity assessments and proactive scaling recommendations</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-200 hover:border-[hsl(var(--accent-blue))]/30 transition-all hover:translate-x-2 duration-300 group">
                    <CheckCircle2 className="h-6 w-6 text-[hsl(var(--accent-blue))] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="font-semibold text-[hsl(var(--navy))]">Performance Optimization</div>
                      <div className="text-slate-600">Continuous tuning for optimal performance and cost efficiency</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Business Impact */}
        <section className="section-space bg-white">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="eyebrow text-[hsl(var(--accent-blue))]">Proven results</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[hsl(var(--navy))]">
                Infrastructure that drives business success
              </h2>
              <p className="mt-6 text-lg text-slate-600">
                Reliable infrastructure enables business growth. Our clients see improved performance,
                reduced costs, and the ability to focus on their core business objectives.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                {
                  metric: "99.99%",
                  label: "Uptime Availability",
                  description: "Guaranteed uptime across all managed infrastructure",
                },
                {
                  metric: "<15 min",
                  label: "Incident Response",
                  description: "Average time to respond and resolve critical issues",
                },
                {
                  metric: "40%",
                  label: "Cost Optimization",
                  description: "Reduction in cloud infrastructure costs through right-sizing",
                },
                {
                  metric: "100%",
                  label: "Change Success Rate",
                  description: "Zero-downtime deployments and configuration changes",
                },
              ].map((result, index) => (
                <Card key={result.label} className="p-6 text-center border-2 hover:border-[hsl(var(--accent-blue))]/30 hover:shadow-xl transition-all hover:-translate-y-1 duration-300 group">
                  <div className="text-3xl md:text-4xl font-bold text-[hsl(var(--accent-blue))] mb-2">{result.metric}</div>
                  <div className="text-lg font-semibold text-[hsl(var(--navy))] mb-2">{result.label}</div>
                  <div className="text-sm text-slate-600">{result.description}</div>
                </Card>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h3 className="text-2xl font-bold text-[hsl(var(--navy))] mb-6">Operational Benefits</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-blue-50/50 to-transparent hover:from-blue-50 transition-all hover:translate-x-2 duration-300 group">
                    <Shield className="h-6 w-6 text-[hsl(var(--accent-blue))] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-[hsl(var(--navy))]">Production Reliability</div>
                      <div className="text-slate-600">Infrastructure that never goes down with automated failover and recovery</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-blue-50/50 to-transparent hover:from-blue-50 transition-all hover:translate-x-2 duration-300 group">
                    <BarChart3 className="h-6 w-6 text-[hsl(var(--accent-blue))] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-[hsl(var(--navy))]">Cost Optimization</div>
                      <div className="text-slate-600">Right-sized resources with automated scaling and reserved instance management</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-blue-50/50 to-transparent hover:from-blue-50 transition-all hover:translate-x-2 duration-300 group">
                    <Clock className="h-6 w-6 text-[hsl(var(--accent-blue))] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-[hsl(var(--navy))]">Fast Issue Resolution</div>
                      <div className="text-slate-600">Rapid diagnosis and resolution of infrastructure incidents</div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[hsl(var(--navy))] mb-6">Business Impact</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-green-50/50 to-transparent hover:from-green-50 transition-all hover:translate-x-2 duration-300 group">
                    <Target className="h-6 w-6 text-[hsl(var(--accent-blue))] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-[hsl(var(--navy))]">Innovation Focus</div>
                      <div className="text-slate-600">Development teams can focus on features instead of infrastructure maintenance</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-green-50/50 to-transparent hover:from-green-50 transition-all hover:translate-x-2 duration-300 group">
                    <Users className="h-6 w-6 text-[hsl(var(--accent-blue))] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-[hsl(var(--navy))]">Improved Customer Experience</div>
                      <div className="text-slate-600">More reliable applications lead to better user satisfaction and retention</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-green-50/50 to-transparent hover:from-green-50 transition-all hover:translate-x-2 duration-300 group">
                    <BarChart3 className="h-6 w-6 text-[hsl(var(--accent-blue))] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-[hsl(var(--accent-blue))]">Revenue Protection</div>
                      <div className="text-slate-600">Downtime prevention protects critical business revenue streams</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section-space bg-gradient-to-br from-[hsl(var(--navy))] to-[hsl(var(--navy))]/90 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#ffffff10,transparent_55%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.1),transparent_70%)]" />
          <div className="relative mx-auto max-w-4xl px-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white mb-6">
              <Server className="h-4 w-4" />
              <span className="text-sm font-semibold">Infrastructure Excellence</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Infrastructure That Your Business Can Rely On
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Experience enterprise-grade cloud infrastructure management. From single applications
              to complex multi-cloud deployments, we ensure your systems are always available,
              secure, and optimized.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button variant="secondary" size="xl" asChild className="bg-white text-[hsl(var(--navy))] hover:bg-blue-50 shadow-2xl hover:scale-105 transition-all">
                <Link to="/contact" className="flex items-center gap-2 group">
                  <Monitor className="h-5 w-5" />
                  <span>Schedule Infrastructure Review</span>
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild className="border-white text-white hover:bg-white/10">
                <Link to="/contact" className="flex items-center gap-2">
                  <Network className="h-5 w-5" />
                  <span>Multi-Cloud Assessment</span>
                </Link>
              </Button>
            </div>

            <div className="pt-8 border-t border-white/10">
              <p className="text-blue-200 text-sm mb-4">99.99% uptime SLA included with all engagements</p>
              <div className="flex justify-center gap-8 text-sm text-white/80">
                <div>
                  <div className="font-medium text-white">Platform Support</div>
                  <div>AWS/Azure/GCP/Hybrid</div>
                </div>
                <div>
                  <div className="font-medium text-white">24/7 Coverage</div>
                  <div>Always monitored</div>
                </div>
                <div>
                  <div className="font-medium text-white">Response Time</div>
                  <div>{'<15 minutes'}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </Layout>
    </>
  );
}
