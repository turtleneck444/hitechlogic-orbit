import { Link } from "react-router-dom";
import {
  Github,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Server,
  TrendingUp,
  BookOpen,
  FileText,
  Shield,
  FileCheck,
  Briefcase,
  Target,
  Users,
  MessageSquare,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const footerLinks = {
  company: [
    { name: "Services", href: "/services", icon: Server },
    { name: "Approach", href: "/approach", icon: Target },
    { name: "Principles", href: "/principles", icon: Shield },
    { name: "About", href: "/about", icon: Users },
  ],
  resources: [
    { name: "Case Studies", href: "/case-studies", icon: Briefcase },
    { name: "Blog", href: "/blog", icon: BookOpen },
    { name: "Contact", href: "/contact", icon: MessageSquare },
  ],
  legal: [
    { name: "Privacy Policy", href: "/legal/privacy", icon: Shield },
    { name: "Terms of Service", href: "/legal/terms", icon: FileCheck },
  ],
};

const socialLinks = [
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "GitHub", icon: Github, href: "#" },
];

const contactInfo = [
  { icon: Mail, label: "Email", value: "hello@hitechlogic.com", href: "mailto:hello@hitechlogic.com" },
  { icon: Phone, label: "Phone", value: "+1 (555) 123-4567", href: "tel:+15551234567" },
  { icon: MapPin, label: "Location", value: "San Francisco, CA", href: "#" },
];

const trustIndicators = [
  "SOC 2 Type II Certified",
  "ISO 27001 Compliant",
  "GDPR Ready",
  "99.99% Uptime SLA"
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setTimeout(() => setSubscribed(false), 3000);
    setEmail("");
  };

  return (
    <footer className="relative border-t border-[hsl(var(--border))] bg-gradient-to-b from-white to-slate-50/30 overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--accent-blue))]/[0.02] via-transparent to-[hsl(var(--signal-purple))]/[0.02] pointer-events-none" />

      {/* Newsletter CTA Section */}
      <div className="relative border-b border-slate-200/60">
        <div className="mx-auto w-full max-w-[1420px] px-4 sm:px-6 lg:px-14 py-8 lg:py-10">
          <div className="grid gap-6 lg:grid-cols-2 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[hsl(var(--accent-blue))]/10 border border-[hsl(var(--accent-blue))]/20 mb-3">
                <TrendingUp className="h-3.5 w-3.5 text-[hsl(var(--accent-blue))]" />
                <span className="text-xs font-semibold text-[hsl(var(--navy))]">Enterprise Insights</span>
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-[hsl(var(--navy))] mb-2">
                Stay Ahead With Operational Intelligence
              </h3>
              <p className="text-slate-600 text-sm max-w-xl">
                Get monthly insights on infrastructure reliability, automation strategies, and governance best practices.
              </p>
            </div>
            <div>
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your.email@company.com"
                    className="w-full h-12 pl-12 pr-4 rounded-xl border border-slate-200 bg-white focus:border-[hsl(var(--accent-blue))] focus:ring-2 focus:ring-[hsl(var(--accent-blue))]/20 outline-none transition-all text-sm"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="h-12 px-6 bg-[hsl(var(--accent-blue))] hover:bg-[hsl(var(--accent-blue))]/90 text-white rounded-xl font-semibold shadow-lg shadow-[hsl(var(--accent-blue))]/20 transition-all"
                >
                  {subscribed ? (
                    <>
                      <CheckCircle2 className="h-4 w-4 mr-2" />
                      Subscribed
                    </>
                  ) : (
                    <>
                      Subscribe
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </>
                  )}
                </Button>
              </form>
              <p className="text-xs text-slate-500 mt-3">
                Join 5,000+ infrastructure leaders. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative mx-auto w-full max-w-[1420px] px-4 sm:px-6 lg:px-14 py-10 lg:py-12">
        <div className="grid gap-8 lg:grid-cols-12">
          {/* Company Info - Left Column */}
          <div className="space-y-5 lg:col-span-4">
            <Link to="/" className="inline-flex items-center text-xl font-bold tracking-tight text-[hsl(var(--navy))] group">
              <span className="group-hover:text-[hsl(var(--accent-blue))] transition-colors">HiTechLogic</span>
            </Link>

            <p className="text-sm text-slate-600 leading-relaxed max-w-sm">
              HiTechLogic equips enterprise infrastructure teams with the clarity, automation, and governance required to operate with confidence across global environments.
            </p>

            {/* Contact Info */}
            <div className="space-y-2.5">
              {contactInfo.map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  className="flex items-center space-x-3 text-sm text-slate-600 hover:text-[hsl(var(--accent-blue))] transition-colors group"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 group-hover:bg-[hsl(var(--accent-blue))]/10 transition-colors">
                    <contact.icon className="h-4 w-4 text-slate-500 group-hover:text-[hsl(var(--accent-blue))] transition-colors" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">{contact.label}</div>
                    <div className="font-medium">{contact.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="group flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 transition-all hover:border-[hsl(var(--accent-blue))] hover:bg-[hsl(var(--accent-blue))] hover:text-white hover:shadow-lg hover:shadow-[hsl(var(--accent-blue))]/20 hover:-translate-y-0.5"
                  aria-label={social.name}
                >
                  <social.icon className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links - Right Columns */}
          <div className="lg:col-span-8">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Company Links */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-[hsl(var(--navy))] mb-4">Company</h3>
                <ul className="space-y-2.5">
                  {footerLinks.company.map((link) => (
                    <li key={link.name}>
                      <Link
                        className="group flex items-center space-x-2.5 text-sm text-slate-600 hover:text-[hsl(var(--accent-blue))] transition-all"
                        to={link.href}
                      >
                        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-100 group-hover:bg-[hsl(var(--accent-blue))]/10 transition-colors">
                          <link.icon className="h-3.5 w-3.5 text-slate-500 group-hover:text-[hsl(var(--accent-blue))] transition-colors" />
                        </div>
                        <span className="group-hover:translate-x-0.5 transition-transform">{link.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources Links */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-[hsl(var(--navy))] mb-4">Resources</h3>
                <ul className="space-y-2.5">
                  {footerLinks.resources.map((link) => (
                    <li key={link.name}>
                      <Link
                        className="group flex items-center space-x-2.5 text-sm text-slate-600 hover:text-[hsl(var(--accent-blue))] transition-all"
                        to={link.href}
                      >
                        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-100 group-hover:bg-[hsl(var(--accent-blue))]/10 transition-colors">
                          <link.icon className="h-3.5 w-3.5 text-slate-500 group-hover:text-[hsl(var(--accent-blue))] transition-colors" />
                        </div>
                        <span className="group-hover:translate-x-0.5 transition-transform">{link.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Legal Links */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-[hsl(var(--navy))] mb-4">Governance</h3>
                <ul className="space-y-2.5 mb-4">
                  {footerLinks.legal.map((link) => (
                    <li key={link.name}>
                      <Link
                        className="group flex items-center space-x-2.5 text-sm text-slate-600 hover:text-[hsl(var(--accent-blue))] transition-all"
                        to={link.href}
                      >
                        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-100 group-hover:bg-[hsl(var(--accent-blue))]/10 transition-colors">
                          <link.icon className="h-3.5 w-3.5 text-slate-500 group-hover:text-[hsl(var(--accent-blue))] transition-colors" />
                        </div>
                        <span className="group-hover:translate-x-0.5 transition-transform">{link.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* Trust Indicators */}
                <div className="pt-3 border-t border-slate-200">
                  <p className="text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wider">Compliance</p>
                  <div className="space-y-1.5">
                    {trustIndicators.map((indicator) => (
                      <div key={indicator} className="flex items-center space-x-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[hsl(var(--accent-blue))]" />
                        <span className="text-xs text-slate-600">{indicator}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-slate-200/60">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-500">
              <span className="font-medium">
                © {new Date().getFullYear()} HiTechLogic. All rights reserved.
              </span>
              <span className="hidden md:inline text-slate-300">|</span>
              <span>Built for resilient, long-term partnerships</span>
            </div>
            <div className="flex items-center space-x-2 text-xs text-slate-500">
              <div className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              <span>All systems operational</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
