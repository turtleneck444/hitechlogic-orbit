import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ShieldCheck, Lock, Key, Eye, UserCheck, AlertTriangle, CheckCircle2, ArrowRight, FileText, Shield, Users, Database, Award, BadgeCheck, ChevronDown } from "lucide-react";
import { useState } from "react";

const capabilities = [
  {
    icon: Key,
    title: "Identity & Access Management",
    description: "Comprehensive IAM governance with least-privilege access, role-based controls, and automated lifecycle management.",
  },
  {
    icon: UserCheck,
    title: "Access Review & Certification",
    description: "Quarterly access reviews with automated workflows, attestation tracking, and remediation enforcement.",
  },
  {
    icon: Lock,
    title: "Privileged Access Monitoring",
    description: "Real-time monitoring and auditing of privileged actions with anomaly detection and immediate alerting.",
  },
  {
    icon: Eye,
    title: "Threat Detection & Response",
    description: "24/7 security monitoring with SIEM integration, threat intelligence, and incident response procedures.",
  },
  {
    icon: Shield,
    title: "Zero-Trust Architecture",
    description: "Implementation of zero-trust principles with continuous verification, micro-segmentation, and policy enforcement.",
  },
  {
    icon: FileText,
    title: "Compliance & Audit Readiness",
    description: "Continuous compliance monitoring with audit trail generation for SOC 2, HIPAA, PCI-DSS, and other frameworks.",
  },
];

const benefits = [
  "Prevent security breaches through proactive threat monitoring and rapid incident response",
  "Maintain compliance with automated access reviews and comprehensive audit trails",
  "Reduce insider threat risk with privileged access monitoring and anomaly detection",
  "Streamline access management with automated provisioning and deprovisioning workflows",
  "Build zero-trust security posture with continuous verification and least-privilege access",
  "Accelerate audit processes with always-ready documentation and compliance reporting",
];

const useCases = [
  {
    title: "SOC 2 Compliance",
    description: "Achieve and maintain SOC 2 Type II certification with continuous access reviews, security monitoring, and automated compliance reporting.",
    compliance: "SOC 2 Type II",
    icon: FileText,
  },
  {
    title: "Zero-Trust Implementation",
    description: "Transition from perimeter-based security to zero-trust architecture with identity-centric controls and continuous verification.",
    compliance: "Security Framework",
    icon: Shield,
  },
  {
    title: "Insider Threat Prevention",
    description: "Detect and prevent insider threats through privileged access monitoring, behavioral analysis, and automated policy enforcement.",
    compliance: "Risk Management",
    icon: Eye,
  },
  {
    title: "Multi-Cloud Security",
    description: "Unify security controls across AWS, Azure, and GCP with centralized identity management and consistent policy enforcement.",
    compliance: "Cloud Security",
    icon: Database,
  },
];

const metrics = [
  { label: "Years in Security", value: "20+", icon: Award },
  { label: "Access Reviews", value: "100%", icon: UserCheck },
  { label: "Threat Detection", value: "<10min", icon: Eye },
  { label: "Compliance Rate", value: "99.8%", icon: BadgeCheck },
];

const securityJourney = [
  {
    step: "1",
    title: "Security Posture Assessment",
    description: "Comprehensive evaluation of current security controls, access patterns, compliance gaps, and threat exposure across all systems.",
    duration: "Week 1-2",
  },
  {
    step: "2",
    title: "Identity Governance Setup",
    description: "Implement IAM framework, define roles and permissions, establish access review workflows, and set up automated provisioning.",
    duration: "Week 3-6",
  },
  {
    step: "3",
    title: "Threat Monitoring Activation",
    description: "Deploy 24/7 security monitoring, configure SIEM integration, establish threat detection rules, and create incident response procedures.",
    duration: "Week 7-10",
  },
  {
    step: "4",
    title: "Continuous Security Operations",
    description: "Quarterly access certifications, ongoing threat monitoring, compliance reporting, and proactive security improvements based on emerging threats.",
    duration: "Ongoing",
  },
];

export default function SecurityIdentityAssurance() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "How quickly can you detect and respond to security threats?",
      answer: "Our security monitoring platform detects anomalies and suspicious activities in under 10 minutes on average. For critical threats (like unauthorized privileged access or data exfiltration attempts), alerts are triggered immediately with automated containment actions. Our 24/7 SOC team can initiate incident response within 15 minutes of detection, significantly faster than the industry average of 4-6 hours.",
    },
    {
      question: "What compliance frameworks do you support?",
      answer: "We support SOC 2 Type II, HIPAA, PCI-DSS, ISO 27001, NIST Cybersecurity Framework, and industry-specific regulations like GDPR and CCPA. Our compliance automation generates audit-ready documentation, tracks control effectiveness, and provides continuous compliance scoring. We can also customize controls for proprietary or emerging compliance requirements specific to your industry.",
    },
    {
      question: "How does zero-trust differ from traditional security?",
      answer: "Traditional security relies on perimeter defense (castle-and-moat approach). Zero-trust assumes breach and verifies every access request regardless of network location. We implement identity-centric controls where every user, device, and application is continuously authenticated and authorized based on context (location, device posture, behavior patterns). This dramatically reduces attack surface and limits lateral movement during breaches.",
    },
    {
      question: "Can you integrate with our existing security tools?",
      answer: "Yes. We integrate with major SIEM platforms (Splunk, Datadog, ELK), identity providers (Okta, Azure AD, Auth0), cloud platforms (AWS, Azure, GCP), and security tools (CrowdStrike, Palo Alto, Cisco). Our platform acts as a security orchestration layer, consolidating alerts, automating workflows, and providing unified visibility across your security stack without replacing existing investments.",
    },
    {
      question: "How do you handle access reviews without disrupting business operations?",
      answer: "We automate 80% of the access review process through smart workflows. Access that hasn't changed and follows policy is auto-certified. Only exceptions and high-risk access require manual review by managers. We provide intuitive interfaces for attestation, send automated reminders, and track completion metrics. The entire quarterly review process typically takes managers 15-30 minutes instead of days.",
    },
    {
      question: "What happens if an audit finds a security gap?",
      answer: "Our continuous compliance monitoring typically identifies gaps before auditors do. If an audit does uncover issues, we provide immediate remediation plans with prioritized actions based on risk. We track remediation progress, generate evidence of completion, and update compliance documentation. Our goal is to have zero audit findings, but when they occur, we resolve them within 48 hours for critical issues and 2 weeks for lower-risk items.",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-red-50/20 to-rose-50/30">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="relative mx-auto w-full max-w-6xl px-6 pt-32 pb-20 sm:pt-40 sm:pb-28">
          <div className="animate-[fade-in_0.5s_ease-out]">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500 to-[hsl(var(--navy))] shadow-lg shadow-red-500/25">
                <ShieldCheck className="h-7 w-7 text-white" />
              </div>
              <span className="eyebrow text-red-600">Security & Identity Assurance</span>
            </div>
          </div>
          <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-[hsl(var(--navy))] animate-[fade-in_0.6s_ease-out_0.1s_both]">
            Zero-Trust Security,<br />
            <span className="text-red-600">Always Compliant</span>
          </h1>
          <p className="mt-6 text-xl text-slate-600 max-w-3xl leading-relaxed animate-[fade-in_0.7s_ease-out_0.2s_both]">
            Comprehensive security and identity governance with continuous access reviews, threat monitoring,
            and compliance automation that keeps your environment secure and audit-ready.
          </p>

          <div className="mt-10 flex flex-wrap gap-4 animate-[fade-in_0.8s_ease-out_0.3s_both]">
            <Button variant="hero" size="xl" asChild className="shadow-[0_20px_45px_-20px_rgba(239,68,68,0.8)] hover:scale-105 transition-transform">
              <Link to="/contact" className="flex items-center gap-2">
                <span>Request Security Assessment</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild className="hover:scale-105 transition-transform">
              <Link to="/demo">View Security Demo</Link>
            </Button>
          </div>

          {/* Metrics */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 animate-[fade-in_0.9s_ease-out_0.4s_both]">
            {metrics.map((metric) => (
              <div key={metric.label} className="text-center group hover:scale-105 transition-transform">
                <div className="flex items-center justify-center mb-2">
                  <metric.icon className="h-6 w-6 text-red-600" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-red-600">{metric.value}</div>
                <div className="mt-2 text-sm font-medium text-slate-600">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-gradient-to-r from-[hsl(var(--navy))] to-slate-900 py-8">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-red-400">0</div>
              <div className="mt-1 text-sm text-slate-300">Breaches with Our Security</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-400">50K+</div>
              <div className="mt-1 text-sm text-slate-300">Threats Blocked</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-400">100%</div>
              <div className="mt-1 text-sm text-slate-300">Audit Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-400">$100M+</div>
              <div className="mt-1 text-sm text-slate-300">Breach Costs Prevented</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="section-space bg-white">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 text-red-700 font-semibold text-sm mb-6">
                <AlertTriangle className="h-4 w-4" />
                The Threat Landscape
              </div>
              <h2 className="text-3xl font-bold text-[hsl(var(--navy))] mb-6">
                Security complexity is escalating
              </h2>
              <div className="space-y-4 text-slate-600">
                <p className="flex items-start gap-3">
                  <span className="text-red-500 font-bold mt-1">→</span>
                  <span>Average data breach costs $4.45M with 277-day detection time</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-red-500 font-bold mt-1">→</span>
                  <span>Insider threats account for 34% of breaches, most go undetected</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-red-500 font-bold mt-1">→</span>
                  <span>Manual access reviews take weeks, often ignored or rubber-stamped</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-red-500 font-bold mt-1">→</span>
                  <span>Compliance failures result in millions in fines and lost business</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-red-500 font-bold mt-1">→</span>
                  <span>Cloud adoption expands attack surface with inconsistent controls</span>
                </p>
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 text-red-700 font-semibold text-sm mb-6">
                <ShieldCheck className="h-4 w-4" />
                Our Zero-Trust Approach
              </div>
              <h2 className="text-3xl font-bold text-[hsl(var(--navy))] mb-6">
                Defense in depth with automation
              </h2>
              <div className="space-y-4 text-slate-600">
                <p className="flex items-start gap-3">
                  <span className="text-red-600 font-bold mt-1">✓</span>
                  <span>Sub-10-minute threat detection with 24/7 monitoring and automated response</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-red-600 font-bold mt-1">✓</span>
                  <span>Privileged access monitoring with behavioral analysis for insider threats</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-red-600 font-bold mt-1">✓</span>
                  <span>Automated quarterly access reviews completed in hours, not weeks</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-red-600 font-bold mt-1">✓</span>
                  <span>Always audit-ready documentation with continuous compliance tracking</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-red-600 font-bold mt-1">✓</span>
                  <span>Unified security controls across all cloud platforms and environments</span>
                </p>
              </div>
              <div className="mt-8">
                <Button variant="primary" size="lg" asChild className="bg-red-600 hover:bg-red-700">
                  <Link to="/contact" className="flex items-center gap-2">
                    <span>Get Security Audit</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Security Impact */}
      <section className="section-space bg-gradient-to-br from-slate-50 to-red-50/30">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="eyebrow text-red-600">Real impact</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[hsl(var(--navy))]">
              From vulnerable to protected
            </h2>
            <p className="mt-6 text-lg text-slate-600">
              See how zero-trust security and identity governance transform security posture and compliance readiness.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 border-2 border-red-200 bg-gradient-to-br from-red-50/50 to-white">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-700 font-semibold text-xs mb-4">
                BEFORE
              </div>
              <div className="space-y-6">
                <div>
                  <div className="text-4xl font-bold text-red-600 mb-2">4-6 hours</div>
                  <div className="text-sm text-slate-600">Threat Detection Time</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-red-600 mb-2">45%</div>
                  <div className="text-sm text-slate-600">Access Review Completion</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-red-600 mb-2">3 weeks</div>
                  <div className="text-sm text-slate-600">Audit Preparation Time</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-red-600 mb-2">12</div>
                  <div className="text-sm text-slate-600">Security Incidents/Year</div>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-2 border-red-200 bg-gradient-to-br from-red-50/50 to-white">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 font-semibold text-xs mb-4">
                AFTER
              </div>
              <div className="space-y-6">
                <div>
                  <div className="text-4xl font-bold text-green-600 mb-2">&lt;10 min</div>
                  <div className="text-sm text-slate-600">Threat Detection Time</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-green-600 mb-2">100%</div>
                  <div className="text-sm text-slate-600">Access Review Completion</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-green-600 mb-2">Always</div>
                  <div className="text-sm text-slate-600">Audit Ready</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-green-600 mb-2">0</div>
                  <div className="text-sm text-slate-600">Security Breaches</div>
                </div>
              </div>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <Button variant="primary" size="lg" asChild className="bg-red-600 hover:bg-red-700">
              <Link to="/case-studies">See Security Success Stories</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Security Journey Timeline */}
      <section className="section-space bg-white">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="eyebrow text-red-600">Implementation process</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[hsl(var(--navy))]">
              Your security transformation journey
            </h2>
            <p className="mt-6 text-lg text-slate-600">
              A systematic approach to implementing zero-trust security and continuous compliance.
            </p>
          </div>

          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-200 via-red-300 to-red-200" />

            <div className="space-y-12">
              {securityJourney.map((phase, index) => (
                <div key={phase.step} className={`relative grid md:grid-cols-2 gap-8 items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                  {index % 2 === 0 ? (
                    <>
                      <Card className="p-8 border-2 border-red-200 bg-gradient-to-br from-red-50/50 to-white hover:shadow-xl transition-all md:ml-auto">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-red-600 text-white font-bold text-xl shadow-lg">
                            {phase.step}
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-[hsl(var(--navy))]">{phase.title}</h3>
                            <span className="text-sm text-red-600 font-semibold">{phase.duration}</span>
                          </div>
                        </div>
                        <p className="text-slate-600 leading-relaxed">{phase.description}</p>
                      </Card>
                      <div className="hidden md:block" />
                    </>
                  ) : (
                    <>
                      <div className="hidden md:block" />
                      <Card className="p-8 border-2 border-red-200 bg-gradient-to-br from-red-50/50 to-white hover:shadow-xl transition-all">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-red-600 text-white font-bold text-xl shadow-lg">
                            {phase.step}
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-[hsl(var(--navy))]">{phase.title}</h3>
                            <span className="text-sm text-red-600 font-semibold">{phase.duration}</span>
                          </div>
                        </div>
                        <p className="text-slate-600 leading-relaxed">{phase.description}</p>
                      </Card>
                    </>
                  )}
                  {/* Center Circle */}
                  <div className="hidden md:block absolute left-[50%] top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-red-500 border-4 border-white shadow-lg z-10" />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button variant="primary" size="lg" asChild className="bg-red-600 hover:bg-red-700">
              <Link to="/contact" className="flex items-center gap-2">
                <span>Start Security Journey</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section-space bg-[hsl(var(--background))]">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="eyebrow text-red-600">Why choose us</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[hsl(var(--navy))]">
              HiTechLogic vs. Traditional Security Approaches
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-[hsl(var(--navy))] to-slate-900">
                  <th className="p-4 text-left text-white font-semibold">Security Aspect</th>
                  <th className="p-4 text-center text-white font-semibold">HiTechLogic Zero-Trust</th>
                  <th className="p-4 text-center text-slate-400 font-semibold">Traditional Security</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr className="border-b border-slate-200">
                  <td className="p-4 font-medium text-slate-900">Threat Detection Speed</td>
                  <td className="p-4 text-center">
                    <div className="text-red-600 font-bold">&lt;10 minutes</div>
                    <div className="text-xs text-slate-500">Real-time monitoring</div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="text-slate-600">4-6 hours</div>
                    <div className="text-xs text-slate-500">Reactive detection</div>
                  </td>
                </tr>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <td className="p-4 font-medium text-slate-900">Access Review Completion</td>
                  <td className="p-4 text-center">
                    <div className="text-red-600 font-bold">100% automated</div>
                    <div className="text-xs text-slate-500">Hours, not weeks</div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="text-slate-600">45% completion</div>
                    <div className="text-xs text-slate-500">Manual, time-consuming</div>
                  </td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-4 font-medium text-slate-900">Audit Preparation</td>
                  <td className="p-4 text-center">
                    <div className="text-red-600 font-bold">Always ready</div>
                    <div className="text-xs text-slate-500">Continuous compliance</div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="text-slate-600">3-4 weeks</div>
                    <div className="text-xs text-slate-500">Scramble before audits</div>
                  </td>
                </tr>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <td className="p-4 font-medium text-slate-900">Security Model</td>
                  <td className="p-4 text-center">
                    <div className="text-red-600 font-bold">Zero-trust</div>
                    <div className="text-xs text-slate-500">Continuous verification</div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="text-slate-600">Perimeter-based</div>
                    <div className="text-xs text-slate-500">Trust inside network</div>
                  </td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-4 font-medium text-slate-900">Insider Threat Detection</td>
                  <td className="p-4 text-center">
                    <div className="text-red-600 font-bold">Behavioral analysis</div>
                    <div className="text-xs text-slate-500">Proactive monitoring</div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="text-slate-600">Post-incident</div>
                    <div className="text-xs text-slate-500">After damage is done</div>
                  </td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-4 font-medium text-slate-900">Compliance Coverage</td>
                  <td className="p-4 text-center">
                    <div className="text-red-600 font-bold">Multi-framework</div>
                    <div className="text-xs text-slate-500">SOC 2, HIPAA, PCI-DSS+</div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="text-slate-600">Single framework</div>
                    <div className="text-xs text-slate-500">Limited scope</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 text-center">
            <Button variant="primary" size="lg" asChild className="bg-red-600 hover:bg-red-700">
              <Link to="/pricing">View Security Plans</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="section-space bg-white">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="eyebrow text-red-600">Core capabilities</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[hsl(var(--navy))]">
              End-to-end security and identity governance
            </h2>
            <p className="mt-6 text-lg text-slate-600">
              From access management to threat detection, we secure every layer of your environment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability, index) => (
              <Card
                key={capability.title}
                className="p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-red-300 group hover:-translate-y-1"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-red-500/10 to-red-600/5 group-hover:from-red-500/20 group-hover:to-red-600/10 transition-all">
                  <capability.icon className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-[hsl(var(--navy))]">{capability.title}</h3>
                <p className="mt-3 text-slate-600 leading-relaxed">{capability.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-space bg-[hsl(var(--background))]">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <span className="eyebrow text-red-600">Business value</span>
              <h2 className="mt-4 text-4xl font-bold text-[hsl(var(--navy))]">Security as a competitive advantage</h2>
              <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                Strong security posture builds customer trust, enables compliance certifications,
                and protects your most valuable assets from ever-evolving threats.
              </p>
              <div className="mt-8">
                <Button variant="primary" size="lg" asChild className="bg-red-600 hover:bg-red-700">
                  <Link to="/demo" className="flex items-center gap-2">
                    <span>View Security Platform</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit}
                  className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-red-50/50 to-transparent hover:from-red-50 transition-all hover:scale-105"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <CheckCircle2 className="h-6 w-6 text-red-600 shrink-0 mt-0.5" />
                  <span className="text-slate-700 leading-relaxed">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="section-space bg-white">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="eyebrow text-red-600">Common scenarios</span>
            <h2 className="mt-4 text-4xl font-bold text-[hsl(var(--navy))]">Security for every compliance requirement</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase) => (
              <Card key={useCase.title} className="p-8 border-2 hover:border-red-300 hover:shadow-xl transition-all hover:-translate-y-1 group">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-red-500/10 to-red-600/5 group-hover:from-red-500/20 group-hover:to-red-600/10 transition-all">
                    <useCase.icon className="h-6 w-6 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-[hsl(var(--navy))]">{useCase.title}</h3>
                      <span className="text-xs font-semibold px-2 py-1 rounded-full bg-red-100 text-red-700">{useCase.compliance}</span>
                    </div>
                    <p className="mt-2 text-slate-600 leading-relaxed">{useCase.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="primary" size="lg" asChild className="bg-red-600 hover:bg-red-700">
              <Link to="/case-studies">View Compliance Stories</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-space bg-gradient-to-br from-slate-50 to-red-50/30">
        <div className="mx-auto w-full max-w-4xl px-6">
          <div className="text-center mb-16">
            <span className="eyebrow text-red-600">Common questions</span>
            <h2 className="mt-4 text-4xl font-bold text-[hsl(var(--navy))]">
              Everything you need to know
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-2 border-red-100 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-red-50/50 transition-colors"
                >
                  <span className="font-semibold text-[hsl(var(--navy))] pr-8">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-red-600 shrink-0 transition-transform ${openFaq === index ? 'rotate-180' : ''}`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-red-100 pt-4">
                    {faq.answer}
                  </div>
                )}
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-600 mb-4">Have more security questions?</p>
            <Button variant="outline" size="lg" asChild className="border-red-600 text-red-600 hover:bg-red-50">
              <Link to="/contact">Speak with Security Expert</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-space bg-gradient-to-br from-red-600 to-[hsl(var(--navy))]">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Ready to build zero-trust security?</h2>
          <p className="mt-6 text-xl text-red-100">
            Let's assess your security posture, implement identity governance, and create compliance
            automation that keeps you protected and audit-ready 24/7.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button variant="secondary" size="xl" asChild className="bg-white text-red-600 hover:bg-red-50 hover:scale-105 transition-transform">
              <Link to="/contact" className="flex items-center gap-2">
                <span>Schedule Security Assessment</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild className="border-white text-white hover:bg-white/10 hover:scale-105 transition-transform">
              <Link to="/services">Explore All Services</Link>
            </Button>
          </div>

          {/* Risk-Free Guarantee */}
          <div className="mt-16 pt-8 border-t border-red-400/30">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Shield className="h-6 w-6 text-red-200" />
              <span className="text-red-100 font-semibold text-lg">Security Guarantee</span>
            </div>
            <p className="text-red-100/90 max-w-2xl mx-auto">
              If we don't detect a critical security gap or compliance issue within your first 30 days,
              we'll provide a full refund. Zero breaches with our security—guaranteed.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
