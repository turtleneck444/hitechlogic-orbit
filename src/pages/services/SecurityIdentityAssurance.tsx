import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import {
  ShieldCheck,
  Eye,
  Lock,
  CheckCircle2,
  ArrowRight,
  AlertTriangle,
  Clock,
  Target,
  Award,
  Key,
  Monitor,
  Users,
  Zap,
  Globe,
} from "lucide-react";

export default function SecurityIdentityAssurance() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    provider: {
      "@type": "Organization",
      name: "HiTechLogic",
    },
    serviceType: "Security & Identity Management",
    name: "Security & Identity Assurance",
    description: "Zero-trust security architecture with identity lifecycle governance, privileged access controls, and operational security that ensures compliance and threat protection.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "Enterprise security and compliance assurance service",
    },
  };

  const securityCapabilities = [
    {
      title: "Zero-Trust Architecture",
      description: "Identity-based security model that assumes breach and verifies every access attempt, eliminating implicit trust zones",
      capabilities: ["Micro-segmentation", "Continuous authentication", "Least privilege access", "Device verification"],
      icon: ShieldCheck,
    },
    {
      title: "Identity Lifecycle Management",
      description: "Complete governance of user identities from onboarding to offboarding with automated provisioning and deprovisioning",
      capabilities: ["Automated provisioning", "Multi-factor authentication", "Role-based access", "Access certification"],
      icon: Users,
    },
    {
      title: "Threat Detection & Response",
      description: "Advanced threat hunting, incident response orchestration, and compliance monitoring with actionable intelligence",
      capabilities: ["Security information & event management", "Threat intelligence", "Compliance monitoring", "Incident orchestration"],
      icon: Eye,
    },
  ];

  const securityOutcomes = [
    {
      metric: "<10 min",
      label: "Threat Detection Time",
      description: "Average time from threat occurrence to detection and alerting",
    },
    {
      metric: "99.8%",
      label: "Compliance Success Rate",
      description: "Consistent adherence to security policies and frameworks",
    },
    {
      metric: "Zero Breaches",
      label: "Security Incidents Prevented",
      description: "Proactive threat mitigation and breach prevention",
    },
    {
      metric: "100%",
      label: "Audit Success Rate",
      description: "Successful assessment outcomes across all regulatory requirements",
    },
  ];

  return (
    <>
      <SEO
        title="Security & Identity Assurance Services | HiTechLogic"
        description="Zero-trust security architecture with 99.9% threat detection under 10 minutes. Identity governance, compliance assurance, and enterprise-grade security."
        keywords="zero trust security, identity management, compliance assurance, threat detection, privileged access, security operations, soc 2"
        canonical="https://hitechlogic.com/services/security-identity-assurance"
        schema={schema}
      />
      <Layout>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[hsl(var(--deep-navy))] via-[hsl(var(--graphite))] to-[hsl(var(--deep-navy))]">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzM5yZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0icmdiYSgyNTUsMjU1LTI1NSwwLjAzKSIvPjwvZz48L3N2Zz4=')] opacity-20" />
          <div className="relative mx-auto w-full max-w-6xl px-6 pt-32 pb-20 sm:pt-40 sm:pb-28">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg">
                <ShieldCheck className="h-7 w-7 text-white" />
              </div>
              <span className="text-sm font-medium text-white/90 tracking-wide">Zero-Trust Security</span>
            </div>
            <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
              Security & Identity
              <span className="text-blue-200 block sm:inline"> Assurance</span>
            </h1>
            <p className="mt-6 text-xl text-blue-100 max-w-3xl leading-relaxed">
              Zero-trust security that's always compliant. We implement identity lifecycle governance,
              privileged access controls, and operational security that protects your business while
              ensuring regulatory compliance.
            </p>

            <div className="mt-10">
              <Button variant="secondary" size="xl" asChild className="bg-white text-[hsl(var(--navy))] hover:bg-blue-50 shadow-2xl border-white">
                <Link to="/contact" className="flex items-center gap-2 group">
                  <Lock className="h-5 w-5" />
                  <span>Secure Your Systems</span>
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            {/* Key Metrics */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: "Threat Detection", value: "<10 min", icon: Clock },
                { label: "Compliance Rate", value: "99.8%", icon: ShieldCheck },
                { label: "Zero Breaches", value: "100%", icon: Lock },
                { label: "Audit Success", value: "100%", icon: CheckCircle2 },
              ].map((metric, index) => (
                <Card key={metric.label} className="bg-white/10 backdrop-blur-sm border-white/20 text-white p-4 text-center group hover:bg-white/15 transition-all hover:scale-105">
                  <div className="flex justify-center mb-2">
                    <metric.icon className="h-6 w-6" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold mb-1">{metric.value}</div>
                  <div className="text-xs font-medium text-blue-200">{metric.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* The Security Challenge */}
        <section className="section-space bg-white">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="eyebrow text-[hsl(var(--accent-blue))]">Security complexity crisis</span>
                <h2 className="mt-4 text-4xl font-bold text-[hsl(var(--navy))]">
                  Trust is a vulnerability in modern security
                </h2>
                <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                  Perimeter-based security assumes trusted internal networks, but breaches happen
                  everywhere. Legacy identity systems create access sprawl, compliance requirements
                  overwhelm teams, and threat actors exploit trust-based assumptions daily.
                </p>
                <div className="mt-6 space-y-4">
                  {[
                    "81% of breaches involve stolen or weak credentials",
                    "Average breach detection takes 287 days (Verizon DBIR)",
                    "60% of organizations fail compliance audits annually",
                    "Privileged accounts are targeted in 67% of attacks",
                  ].map((stat) => (
                    <div key={stat} className="flex items-start gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 flex-shrink-0 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-[hsl(var(--navy))]" />
                      </div>
                      <p className="text-slate-700">{stat}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <span className="eyebrow text-[hsl(var(--accent-blue))]">Zero-trust reality</span>
                <h2 className="mt-4 text-4xl font-bold text-[hsl(var(--navy))]">
                  Security that assumes breach and prevents compromise
                </h2>
                <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                  Zero-trust eliminates implicit trust, continuously verifies identities and devices,
                  and maintains ironclad compliance posture while dramatically reducing breach risk
                  through intelligent automation and proactive threat hunting.
                </p>
                <div className="mt-6 space-y-4">
                  {[
                    "Zero-trust architecture assumes all access attempts are hostile",
                    "Continuous verification of identity, device, and behavior",
                    "Automated compliance monitoring and remediation",
                    "Threat detection under 10 minutes with actionable alerts",
                  ].map((solution) => (
                    <div key={solution} className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-[hsl(var(--accent-blue))] flex-shrink-0 mt-0.5" />
                      <p className="text-slate-700 font-medium">{solution}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <Button variant="hero" size="lg" asChild>
                    <Link to="/contact" className="flex items-center gap-2 group">
                      <span>Implement Zero Trust</span>
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Security Capabilities */}
        <section id="capabilities" className="section-space bg-slate-50">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="eyebrow text-[hsl(var(--accent-blue))]">Enterprise security platform</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[hsl(var(--navy))]">
                Identity governance with zero-trust fortress
              </h2>
              <p className="mt-6 text-lg text-slate-600">
                Complete security and compliance platform that secures every identity, device,
                and access attempt while maintaining operational efficiency and regulatory compliance.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {securityCapabilities.map((capability, index) => (
                <Card key={capability.title} className="p-8 border-2 hover:border-[hsl(var(--accent-blue))]/30 hover:shadow-xl transition-all hover:-translate-y-1 duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[hsl(var(--accent-blue))]/10 to-[hsl(var(--navy))]/5 group-hover:scale-110 transition-transform duration-300">
                      <capability.icon className="h-7 w-7 text-[hsl(var(--accent-blue))]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-[hsl(var(--navy))] mb-3">{capability.title}</h3>
                      <p className="text-slate-600 mb-6 leading-relaxed">{capability.description}</p>
                      <ul className="space-y-3">
                        {capability.capabilities.map((item) => (
                          <li key={item} className="flex items-center gap-2 text-sm">
                            <CheckCircle2 className="h-4 w-4 text-[hsl(var(--accent-blue))] shrink-0" />
                            <span className="text-slate-700">{item}</span>
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

        {/* Compliance & Risk Management */}
        <section className="section-space bg-white">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="eyebrow text-[hsl(var(--accent-blue))]">Regulatory excellence</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[hsl(var(--navy))]">
                Security that passes every audit, every time
              </h2>
              <p className="mt-6 text-lg text-slate-600">
                Automated compliance monitoring, audit trail generation, and risk assessment
                frameworks that maintain continuous regulatory compliance across SOC 2, HIPAA,
                PCI DSS, and all major frameworks.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {securityOutcomes.map((outcome, index) => (
                <Card key={outcome.label} className="p-6 text-center border-2 hover:border-[hsl(var(--accent-blue))]/30 hover:shadow-xl transition-all hover:-translate-y-1 duration-300 group">
                  <div className="text-3xl md:text-4xl font-bold text-[hsl(var(--accent-blue))] mb-2">{outcome.metric}</div>
                  <div className="text-lg font-semibold text-[hsl(var(--navy))] mb-2">{outcome.label}</div>
                  <div className="text-sm text-slate-600">{outcome.description}</div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Business Impact */}
        <section className="section-space bg-slate-50">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h3 className="text-2xl font-bold text-[hsl(var(--navy))] mb-6">Risk Mitigation & Prevention</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-blue-50/50 to-transparent hover:from-blue-50 transition-all hover:translate-x-2 duration-300 group">
                    <Eye className="h-6 w-6 text-[hsl(var(--accent-blue))] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="font-semibold text-[hsl(var(--navy))]">Proactive Threat Hunting</div>
                      <div className="text-slate-600">Continuous monitoring, anomaly detection, and automated threat response</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-blue-50/50 to-transparent hover:from-blue-50 transition-all hover:translate-x-2 duration-300 group">
                    <Key className="h-6 w-6 text-[hsl(var(--accent-blue))] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="font-semibold text-[hsl(var(--navy))]">Identity Protection</div>
                      <div className="text-slate-600">End-to-end identity lifecycle management and privileged access controls</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-blue-50/50 to-transparent hover:from-blue-50 transition-all hover:translate-x-2 duration-300 group">
                    <Monitor className="h-6 w-6 text-[hsl(var(--accent-blue))] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="font-semibold text-[hsl(var(--navy))]">Continuous Compliance</div>
                      <div className="text-slate-600">Automated compliance checks, audit preparation, and regulatory reporting</div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[hsl(var(--navy))] mb-6">Operational Excellence</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-slate-50/50 to-transparent hover:from-slate-50 transition-all hover:translate-x-2 duration-300 group">
                    <Zap className="h-6 w-6 text-[hsl(var(--accent-blue))] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-[hsl(var(--navy))]">Automated Security</div>
                      <div className="text-slate-600">Automated threat response, compliance enforcement, and access management</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-slate-50/50 to-transparent hover:from-slate-50 transition-all hover:translate-x-2 duration-300 group">
                    <Clock className="h-6 w-6 text-[hsl(var(--accent-blue))] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-[hsl(var(--navy))]">Rapid Incident Response</div>
                      <div className="text-slate-600">Threat detection under 10 minutes with orchestrated incident response</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-slate-50/50 to-transparent hover:from-slate-50 transition-all hover:translate-x-2 duration-300 group">
                    <Award className="h-6 w-6 text-[hsl(var(--accent-blue))] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-[hsl(var(--navy))]">Audit-Ready Always</div>
                      <div className="text-slate-600">Automated audit trail generation and continuous compliance validation</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Framework */}
        <section className="section-space bg-white">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="eyebrow text-[hsl(var(--accent-blue))]">Strategic deployment</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[hsl(var(--navy))]">
                Security transformation without business disruption
              </h2>
              <p className="mt-6 text-lg text-slate-600">
                We implement zero-trust security incrementally, maintaining operational
                continuity while systematically eliminating trust-based vulnerabilities.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  phase: "Assessment & Foundation",
                  icon: Eye,
                  description: "Current state analysis, risk assessment, and security architecture design",
                  timeline: "Weeks 1-4",
                  deliverables: ["Security posture assessment", "Zero-trust architecture design", "Compliance gap analysis"],
                },
                {
                  phase: "Identity & Access Control",
                  icon: Key,
                  description: "Implement identity governance, multi-factor authentication, and access management",
                  timeline: "Weeks 5-12",
                  deliverables: ["Zero-trust implementation", "Identity lifecycle management", "Privileged access controls"],
                },
                {
                  phase: "Threat Detection & Compliance",
                  icon: ShieldCheck,
                  description: "Deploy security monitoring, threat hunting, and automated compliance systems",
                  timeline: "Weeks 13-24",
                  deliverables: ["Security operations center", "Compliance automation", "Continuous monitoring"],
                },
              ].map((phase) => (
                <Card key={phase.phase} className="p-8 text-center border-2 hover:border-[hsl(var(--accent-blue))]/30 hover:shadow-xl transition-all hover:-translate-y-1 duration-300 group">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[hsl(var(--accent-blue))]/10 to-[hsl(var(--navy))]/5 mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <phase.icon className="h-8 w-8 text-[hsl(var(--accent-blue))]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[hsl(var(--navy))] mb-3">{phase.phase}</h3>
                  <div className="text-sm font-semibold text-[hsl(var(--accent-blue))] mb-4">{phase.timeline}</div>
                  <p className="text-slate-600 mb-6 leading-relaxed">{phase.description}</p>
                  <ul className="text-left space-y-2">
                    {phase.deliverables.map((deliverable) => (
                      <li key={deliverable} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-[hsl(var(--accent-blue))] shrink-0" />
                        <span className="text-slate-700">{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Success Story */}
        <section className="section-space bg-slate-50">
          <div className="mx-auto w-full max-w-6xl px-6">
            <Card className="p-8 border-2 border-slate-200 bg-gradient-to-br from-blue-50/50 to-transparent">
              <div className="text-center max-w-3xl mx-auto">
                <Award className="h-12 w-12 text-[hsl(var(--accent-blue))] mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-[hsl(var(--navy))] mb-4">Enterprise Security Transformation Success</h3>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  A large enterprise organization struggled with regulatory compliance and faced multiple audit challenges.
                  Our zero-trust implementation delivered comprehensive data protection, automated compliance
                  monitoring, and threat detection under 10 minutes. They achieved 100% audit success rate and
                  eliminated security incidents while improving operational efficiency by 60%.
                </p>
                <div className="flex justify-center gap-12 text-sm">
                  <div>
                    <div className="font-bold text-[hsl(var(--accent-blue))] text-2xl">Failed audits</div>
                    <div className="text-slate-600">Before implementation</div>
                  </div>
                  <ArrowRight className="h-6 w-6 text-[hsl(var(--accent-blue))] self-center" />
                  <div>
                    <div className="font-bold text-[hsl(var(--accent-blue))] text-2xl">100% success</div>
                    <div className="text-slate-600">Audit success rate</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section-space bg-gradient-to-br from-[hsl(var(--navy))] to-[hsl(var(--navy))]/90 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#ffffff10,transparent_55%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.1),transparent_70%)]" />
          <div className="relative mx-auto max-w-4xl px-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white mb-6">
              <ShieldCheck className="h-4 w-4" />
              <span className="text-sm font-semibold">Zero-Trust Security</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Security That Protects Your Business, Always
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Stop trusting and start verifying. Implement zero-trust security that protects
              every identity, device, and access attempt while maintaining compliance and
              eliminating breach risk through proactive threat management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button variant="secondary" size="xl" asChild className="bg-white text-[hsl(var(--navy))] hover:bg-blue-50 shadow-2xl hover:scale-105 transition-all">
                <Link to="/contact" className="flex items-center gap-2 group">
                  <Eye className="h-5 w-5" />
                  <span>Secure Your Organization</span>
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild className="border-white text-white hover:bg-white/10">
                <Link to="/services" className="flex items-center gap-2">
                  <Lock className="h-5 w-5" />
                  <span>Explore All Services</span>
                </Link>
              </Button>
            </div>

            <div className="pt-8 border-t border-white/10">
              <p className="text-blue-200 text-sm mb-4">Free security assessment • SOC 2 compliance guarantee • Breach prevention warranty</p>
              <div className="flex justify-center gap-8 text-sm text-white/80">
                <div>
                  <div className="font-medium text-white">Zero-Trust Maturity</div>
                  <div>Enterprise implementation</div>
                </div>
                <div>
                  <div className="font-medium text-white">Threat Detection</div>
                  <div>{'<10 minutes'}</div>
                </div>
                <div>
                  <div className="font-medium text-white">Compliance Rate</div>
                  <div>99.8% guaranteed</div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </Layout>
    </>
  );
}
