import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, ArrowRight, Server, Activity, Workflow, ShieldCheck, BarChart3, Handshake, Gauge, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

import { Code, TrendingUp, Heart, ShoppingCart, Cloud } from "lucide-react";

const serviceMegaMenu = [
  {
    icon: Server,
    title: "Infrastructure & Cloud Operations",
    description: "Elite multi-cloud orchestration with zero-downtime deployments",
    href: "/services/infrastructure-cloud-operations",
  },
  {
    icon: Activity,
    title: "System Oversight & Event Reduction",
    description: "AI-powered observability that transforms chaos into clarity",
    href: "/services/system-oversight-event-reduction",
  },
  {
    icon: Workflow,
    title: "Automated Corrective Actions",
    description: "Self-healing infrastructure that works around the clock",
    href: "/services/automated-corrective-actions",
  },
  {
    icon: Gauge,
    title: "Reliability & Performance Engineering",
    description: "Architectural tuning, load assurance, and SLO management",
    href: "/services/reliability-performance-engineering",
  },
  {
    icon: ShieldCheck,
    title: "Security & Identity Assurance",
    description: "Identity governance, access fidelity, and threat monitoring",
    href: "/services/security-identity-assurance",
  },
  {
    icon: BarChart3,
    title: "Cost Efficiency & Capacity Strategy",
    description: "Data-driven financial optimization that maximizes ROI",
    href: "/services/cost-efficiency-capacity-strategy",
  },
  {
    icon: Handshake,
    title: "Strategic Technology Partnership",
    description: "Executive alignment, roadmap facilitation, and leadership",
    href: "/services/strategic-technology-partnership",
  },
  {
    icon: Sparkles,
    title: "Rapid Prototyping & App Development",
    description: "Human-centered design sprints that validate and build MVPs",
    href: "/services/rapid-prototyping",
  },
];

const industriesMegaMenu = [
  {
    icon: Code,
    title: "Technology & Software Development",
    description: "Reliability for rapid deployment and scaling",
    href: "/industries/technology",
  },
  {
    icon: TrendingUp,
    title: "Financial Services",
    description: "Compliance, security, and 99.999% availability",
    href: "/industries/financial-services",
  },
  {
    icon: Heart,
    title: "Healthcare",
    description: "Patient safety and HIPAA compliance",
    href: "/industries/healthcare",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce & Retail",
    description: "Zero downtime during peak sales events",
    href: "/industries/ecommerce",
  },
  {
    icon: Cloud,
    title: "SaaS & Cloud Software",
    description: "Enterprise-grade reliability and compliance",
    href: "/industries/saas",
  },
];

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "Solutions",
    href: "/services",
    hasMegaMenu: true,
  },
  {
    name: "Industries",
    href: "/industries",
    hasIndustriesMenu: true,
  },
  { name: "Principles", href: "/principles" },
  {
    name: "Resources",
    href: "#",
    submenu: [
      { name: "Resource Library", href: "/resources", description: "Guides, whitepapers & tools" },
      { name: "Blog", href: "/blog", description: "Operational intelligence & viewpoints" },
    ],
  },
  { name: "About", href: "/about" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActivePath = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <header
      className={cn(
        "w-full fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-white shadow-[0_20px_60px_-30px_rgba(30,64,175,0.6)]"
          : "bg-white shadow-[0_10px_35px_-30px_rgba(30,64,175,0.4)]",
      )}
    >
      {/* Top Bar - White background with glow */}
      <div className="w-full border-b border-slate-200 bg-white/95 text-slate-700 shadow-[0_20px_45px_-35px_rgba(37,99,235,0.5)] backdrop-blur-lg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-12 items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-md bg-white/60 border border-[hsl(var(--accent-blue))]/20 shadow-sm">
                <ShieldCheck className="h-3.5 w-3.5 text-[hsl(var(--accent-blue))]" />
              </div>
              <span className="text-sm font-semibold text-slate-900">Enterprise Managed Services Provider</span>
            </div>
            <div className="hidden md:flex items-center gap-5">
              <a
                href="mailto:contact@hitechlogic.com"
                className="group flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors duration-200"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>contact@hitechlogic.com</span>
              </a>
              <div className="h-4 w-px bg-slate-200" />
              <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
                <svg className="h-4 w-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Professional Text Logo */}
          <div className="flex items-center">
            <Link to="/" className="group flex items-center gap-3">
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-black tracking-tighter text-slate-900 transition-colors duration-300 group-hover:text-[hsl(var(--accent-blue))] leading-none">
                  HiTech
                </span>
                <span className="text-2xl font-black tracking-tighter text-[hsl(var(--accent-blue))] leading-none">
                  Logic
                </span>
              </div>
              <div className="h-px w-12 bg-gradient-to-r from-slate-300 to-[hsl(var(--accent-blue))] transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:from-[hsl(var(--accent-blue))] group-hover:to-slate-300" />
            </Link>
          </div>

          {/* Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => (item.hasMegaMenu || item.hasIndustriesMenu || item.submenu) && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.hasMegaMenu ? (
                  <>
                  <Link
                    to={item.href}
                    className={cn(
                      "relative flex items-center gap-1.5 px-5 py-2.5 text-[15px] font-semibold transition-all duration-200",
                      isActivePath(item.href)
                        ? "text-[hsl(var(--navy))]"
                        : "text-slate-600 hover:text-[hsl(var(--navy))]",
                      "before:absolute before:bottom-0 before:left-5 before:right-5 before:h-0.5 before:bg-gradient-to-r before:from-[hsl(var(--accent-blue))] before:to-[hsl(var(--navy))] before:transition-all before:duration-300",
                      isActivePath(item.href)
                        ? "before:scale-x-100 before:opacity-100 before:shadow-[0_0_12px_rgba(46,107,255,0.6)] before:drop-shadow-[0_0_8px_rgba(46,107,255,0.8)]"
                        : "before:scale-x-0 before:opacity-0 hover:before:scale-x-100 hover:before:opacity-100"
                    )}
                  >
                    <span>{item.name}</span>
                    <ChevronDown className={cn(
                      "h-3.5 w-3.5 transition-all duration-300",
                      activeDropdown === item.name ? "rotate-180" : ""
                    )} />
                  </Link>
                    {activeDropdown === item.name && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-[820px] pt-2 transition-opacity duration-200 opacity-100">
                        <div className="rounded-2xl border border-slate-200/80 bg-white shadow-2xl shadow-slate-900/10 overflow-hidden backdrop-blur-xl">
                          <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 via-white to-blue-50/20 pointer-events-none" />
                          <div className="relative p-8">
                            <div className="mb-7 flex items-center justify-between">
                              <div>
                                <h3 className="text-base font-bold text-[hsl(var(--navy))] mb-1.5">Our Services</h3>
                                <p className="text-sm text-slate-500">Comprehensive managed reliability solutions</p>
                              </div>
                              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[hsl(var(--accent-blue))]/10 to-[hsl(var(--navy))]/5">
                                <Server className="h-5 w-5 text-[hsl(var(--accent-blue))]" />
                              </div>
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                              {serviceMegaMenu.map((service) => (
                                <Link
                                  key={service.title}
                                  to={service.href}
                                  className="group/service flex items-start gap-3.5 rounded-xl p-4 transition-all duration-200 hover:bg-white hover:shadow-lg hover:shadow-slate-200/50 border border-slate-100 hover:border-[hsl(var(--accent-blue))]/20 hover:-translate-y-0.5"
                                >
                                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-slate-50 to-white border border-slate-200/60 shadow-sm group-hover/service:from-[hsl(var(--accent-blue))]/5 group-hover/service:to-blue-50/50 group-hover/service:border-[hsl(var(--accent-blue))]/30 group-hover/service:shadow-md group-hover/service:shadow-[hsl(var(--accent-blue))]/10 transition-all duration-200">
                                    <service.icon className="h-5 w-5 text-[hsl(var(--accent-blue))] transition-transform duration-200 group-hover/service:scale-110" />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between gap-2">
                                      <h4 className="text-sm font-semibold text-[hsl(var(--navy))] group-hover/service:text-[hsl(var(--accent-blue))] transition-colors line-clamp-1">
                                        {service.title}
                                      </h4>
                                      <ArrowRight className="h-3.5 w-3.5 shrink-0 text-[hsl(var(--accent-blue))] opacity-0 -translate-x-2 group-hover/service:opacity-100 group-hover/service:translate-x-0 transition-all duration-200" />
                                    </div>
                                    <p className="text-xs text-slate-500 mt-1 line-clamp-1">{service.description}</p>
                                  </div>
                                </Link>
                              ))}
                            </div>
                            <div className="mt-6 pt-6 border-t border-slate-200/60">
                              <Link
                                to="/contact"
                                className="group/cta inline-flex items-center gap-2.5 rounded-lg px-5 py-2.5 text-sm font-semibold text-[hsl(var(--accent-blue))] hover:bg-[hsl(var(--accent-blue))]/5 transition-all duration-200"
                              >
                                <span>Schedule a consultation</span>
                                <ArrowRight className="h-4 w-4 transition-transform group-hover/cta:translate-x-1" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                ) : item.hasIndustriesMenu ? (
                  <>
                    <Link
                      to={item.href}
                      className={cn(
                        "relative flex items-center gap-1.5 px-5 py-2.5 text-[15px] font-semibold transition-all duration-200",
                        isActivePath(item.href)
                          ? "text-[hsl(var(--navy))]"
                          : "text-slate-600 hover:text-[hsl(var(--navy))]",
                        "before:absolute before:bottom-0 before:left-5 before:right-5 before:h-0.5 before:bg-gradient-to-r before:from-[hsl(var(--accent-blue))] before:to-[hsl(var(--navy))] before:transition-all before:duration-300",
                        isActivePath(item.href)
                          ? "before:scale-x-100 before:opacity-100"
                          : "before:scale-x-0 before:opacity-0 hover:before:scale-x-100 hover:before:opacity-100"
                      )}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={cn(
                        "h-3.5 w-3.5 transition-all duration-300",
                        activeDropdown === item.name ? "rotate-180" : ""
                      )} />
                    </Link>
                    {activeDropdown === item.name && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-[900px] pt-2 transition-opacity duration-200 opacity-100">
                        <div className="rounded-2xl border border-slate-200/80 bg-white shadow-2xl shadow-slate-900/10 overflow-hidden backdrop-blur-xl">
                          <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 via-white to-purple-50/20 pointer-events-none" />
                          <div className="relative p-8">
                            <div className="mb-7 flex items-center justify-between">
                              <div>
                                <h3 className="text-base font-bold text-[hsl(var(--navy))] mb-1.5">Industry Solutions</h3>
                                <p className="text-sm text-slate-500">Specialized reliability solutions for your industry</p>
                              </div>
                              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[hsl(var(--accent-blue))]/10 to-[hsl(var(--navy))]/5">
                                <Server className="h-5 w-5 text-[hsl(var(--accent-blue))]" />
                              </div>
                            </div>
                            <div className="grid grid-cols-1 gap-3">
                              {industriesMegaMenu.map((industry) => (
                                <Link
                                  key={industry.title}
                                  to={industry.href}
                                  className="group/industry flex items-start gap-3.5 rounded-xl p-4 transition-all duration-200 hover:bg-white hover:shadow-lg hover:shadow-slate-200/50 border border-slate-100 hover:border-purple-300/20 hover:-translate-y-0.5"
                                >
                                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-slate-50 to-white border border-slate-200/60 shadow-sm group-hover/industry:from-purple-50/50 group-hover/industry:to-blue-50/50 group-hover/industry:border-purple-300/30 group-hover/industry:shadow-md group-hover/industry:shadow-purple-200/10 transition-all duration-200">
                                    <industry.icon className="h-5 w-5 text-purple-600 transition-transform duration-200 group-hover/industry:scale-110" />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between gap-2">
                                      <h4 className="text-sm font-semibold text-[hsl(var(--navy))] group-hover/industry:text-purple-600 transition-colors line-clamp-1">
                                        {industry.title}
                                      </h4>
                                      <ArrowRight className="h-3.5 w-3.5 shrink-0 text-purple-600 opacity-0 -translate-x-2 group-hover/industry:opacity-100 group-hover/industry:translate-x-0 transition-all duration-200" />
                                    </div>
                                    <p className="text-xs text-slate-500 mt-1 line-clamp-1">{industry.description}</p>
                                  </div>
                                </Link>
                              ))}
                            </div>
                            <div className="mt-6 pt-6 border-t border-slate-200/60">
                              <Link
                                to="/contact"
                                className="group/cta inline-flex items-center gap-2.5 rounded-lg px-5 py-2.5 text-sm font-semibold text-purple-600 hover:bg-purple-50 transition-all duration-200"
                              >
                                <span>Discuss your industry needs</span>
                                <ArrowRight className="h-4 w-4 transition-transform group-hover/cta:translate-x-1" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                ) : item.submenu ? (
                  <>
                    <button className={cn(
                      "relative flex items-center gap-1.5 px-5 py-2.5 text-[15px] font-semibold transition-all duration-200",
                      "text-slate-600 hover:text-[hsl(var(--navy))]"
                    )}>
                      <span>{item.name}</span>
                      <ChevronDown className={cn(
                        "h-3.5 w-3.5 transition-all duration-300",
                        activeDropdown === item.name ? "rotate-180" : ""
                      )} />
                    </button>
                    {activeDropdown === item.name && (
                      <div className="absolute top-full left-0 w-80 pt-2 transition-opacity duration-200 opacity-100">
                        <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-2xl shadow-slate-900/10">
                        {item.submenu.map((subitem: any) => (
                          <Link
                            key={subitem.name}
                            to={subitem.href}
                            className="group/item block rounded-lg px-4 py-3.5 transition-all duration-200 hover:bg-slate-50"
                          >
                            <div className="flex items-start justify-between gap-3">
                              <div className="flex-1">
                                <div className="text-[15px] font-semibold text-[hsl(var(--navy))] group-hover/item:text-[hsl(var(--accent-blue))] transition-colors">
                                  {subitem.name}
                                </div>
                                {subitem.description && (
                                  <div className="text-xs text-slate-500 mt-1">
                                    {subitem.description}
                                  </div>
                                )}
                              </div>
                              <ArrowRight className="h-4 w-4 text-[hsl(var(--accent-blue))] opacity-0 -translate-x-1 transition-all duration-200 group-hover/item:opacity-100 group-hover/item:translate-x-0 flex-shrink-0 mt-0.5" />
                            </div>
                          </Link>
                        ))}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.href}
                    className={cn(
                      "relative px-5 py-2.5 text-[15px] font-semibold transition-all duration-200",
                      isActivePath(item.href)
                        ? "text-[hsl(var(--navy))]"
                        : "text-slate-600 hover:text-[hsl(var(--navy))]",
                      "before:absolute before:bottom-0 before:left-5 before:right-5 before:h-0.5 before:bg-gradient-to-r before:from-[hsl(var(--accent-blue))] before:to-[hsl(var(--navy))] before:transition-all before:duration-300",
                      isActivePath(item.href)
                        ? "before:scale-x-100 before:opacity-100 before:shadow-[0_0_12px_rgba(46,107,255,0.6)] before:drop-shadow-[0_0_8px_rgba(46,107,255,0.8)]"
                        : "before:scale-x-0 before:opacity-0 hover:before:scale-x-100 hover:before:opacity-100"
                    )}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="flex items-center gap-3">
            <div className="hidden lg:block">
              <Button variant="hero" size="lg" asChild className="px-7 py-3.5 text-[15px] font-semibold shadow-[0_20px_45px_-20px_rgba(46,107,255,0.8)] hover:scale-[1.03]">
                <Link to="/contact" className="group flex items-center gap-2">
                  <span>Request Strategy Consultation</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            <button
              className="lg:hidden flex items-center justify-center rounded-lg border border-slate-200 bg-white p-2.5 text-slate-600 shadow-sm transition-all hover:border-slate-300 hover:bg-slate-50 hover:shadow"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[112px] bottom-0 overflow-y-auto bg-white/95 backdrop-blur-xl animate-fade-in border-t border-slate-200/50">
            <div className="flex flex-col min-h-full px-6 py-8 pb-28">
              {/* Primary Navigation - Clean List */}
              <nav className="space-y-1.5">
                {/* Solutions Section */}
                <div className="space-y-1">
                  <div className="px-6 py-3 text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Solutions
                  </div>
                  <Link
                    to="/services"
                    className={cn(
                      "group flex items-center justify-between px-6 py-4 rounded-2xl transition-all duration-300",
                      isActivePath("/services")
                        ? "bg-gradient-to-r from-[hsl(var(--accent-blue))] to-[hsl(var(--navy))] text-white shadow-lg shadow-[hsl(var(--accent-blue))]/25"
                        : "hover:bg-slate-50/80 text-slate-700 active:scale-[0.98]"
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="text-base font-semibold tracking-tight">All Services</span>
                    <ArrowRight className={cn(
                      "h-5 w-5 transition-all duration-300",
                      isActivePath("/services")
                        ? "text-white translate-x-0"
                        : "text-slate-400 -translate-x-1 group-hover:translate-x-0 group-hover:text-[hsl(var(--accent-blue))]"
                    )} />
                  </Link>

                </div>

                {/* Resources Section */}
                <div className="space-y-1 pt-4">
                  <div className="px-6 py-3 text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Resources
                  </div>
                  <Link
                    to="/resources"
                    className={cn(
                      "group flex items-center justify-between px-6 py-4 rounded-2xl transition-all duration-300",
                      isActivePath("/resources")
                        ? "bg-gradient-to-r from-[hsl(var(--accent-blue))] to-[hsl(var(--navy))] text-white shadow-lg shadow-[hsl(var(--accent-blue))]/25"
                        : "hover:bg-slate-50/80 text-slate-700 active:scale-[0.98]"
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="text-base font-semibold tracking-tight">Resource Library</span>
                    <ArrowRight className={cn(
                      "h-5 w-5 transition-all duration-300",
                      isActivePath("/resources")
                        ? "text-white translate-x-0"
                        : "text-slate-400 -translate-x-1 group-hover:translate-x-0 group-hover:text-[hsl(var(--accent-blue))]"
                    )} />
                  </Link>

                  <Link
                    to="/blog"
                    className={cn(
                      "group flex items-center justify-between px-6 py-4 rounded-2xl transition-all duration-300",
                      isActivePath("/blog")
                        ? "bg-gradient-to-r from-[hsl(var(--accent-blue))] to-[hsl(var(--navy))] text-white shadow-lg shadow-[hsl(var(--accent-blue))]/25"
                        : "hover:bg-slate-50/80 text-slate-700 active:scale-0.98"
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="text-base font-semibold tracking-tight">Blog</span>
                    <ArrowRight className={cn(
                      "h-5 w-5 transition-all duration-300",
                      isActivePath("/blog")
                        ? "text-white translate-x-0"
                        : "text-slate-400 -translate-x-1 group-hover:translate-x-0 group-hover:text-[hsl(var(--accent-blue))]"
                    )} />
                  </Link>
                </div>

                {/* Company Section */}
                <div className="space-y-1 pt-4">
                  <div className="px-6 py-3 text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Company
                  </div>
                  <Link
                    to="/"
                    className={cn(
                      "group flex items-center justify-between px-6 py-4 rounded-2xl transition-all duration-300",
                      isActivePath("/")
                        ? "bg-gradient-to-r from-[hsl(var(--accent-blue))] to-[hsl(var(--navy))] text-white shadow-lg shadow-[hsl(var(--accent-blue))]/25"
                        : "hover:bg-slate-50/80 text-slate-700 active:scale-[0.98]"
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="text-base font-semibold tracking-tight">Home</span>
                    <ArrowRight className={cn(
                      "h-5 w-5 transition-all duration-300",
                      isActivePath("/")
                        ? "text-white translate-x-0"
                        : "text-slate-400 -translate-x-1 group-hover:translate-x-0 group-hover:text-[hsl(var(--accent-blue))]"
                    )} />
                  </Link>

                  <Link
                    to="/principles"
                    className={cn(
                      "group flex items-center justify-between px-6 py-4 rounded-2xl transition-all duration-300",
                      isActivePath("/principles")
                        ? "bg-gradient-to-r from-[hsl(var(--accent-blue))] to-[hsl(var(--navy))] text-white shadow-lg shadow-[hsl(var(--accent-blue))]/25"
                        : "hover:bg-slate-50/80 text-slate-700 active:scale-[0.98]"
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="text-base font-semibold tracking-tight">Principles</span>
                    <ArrowRight className={cn(
                      "h-5 w-5 transition-all duration-300",
                      isActivePath("/principles")
                        ? "text-white translate-x-0"
                        : "text-slate-400 -translate-x-1 group-hover:translate-x-0 group-hover:text-[hsl(var(--accent-blue))]"
                    )} />
                  </Link>
                  <Link
                    to="/about"
                    className={cn(
                      "group flex items-center justify-between px-6 py-4 rounded-2xl transition-all duration-300",
                      isActivePath("/about")
                        ? "bg-gradient-to-r from-[hsl(var(--accent-blue))] to-[hsl(var(--navy))] text-white shadow-lg shadow-[hsl(var(--accent-blue))]/25"
                        : "hover:bg-slate-50/80 text-slate-700 active:scale-[0.98]"
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="text-base font-semibold tracking-tight">About</span>
                    <ArrowRight className={cn(
                      "h-5 w-5 transition-all duration-300",
                      isActivePath("/about")
                        ? "text-white translate-x-0"
                        : "text-slate-400 -translate-x-1 group-hover:translate-x-0 group-hover:text-[hsl(var(--accent-blue))]"
                    )} />
                  </Link>
                </div>
              </nav>

              {/* Divider */}
              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-200/60"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="px-4 text-xs font-medium text-slate-400 bg-white uppercase tracking-wider">Get Started</span>
                </div>
              </div>

              {/* CTA Section */}
              <div className="space-y-4">
                <Button
                  variant="hero"
                  size="lg"
                  asChild
                  className="w-full h-14 text-base font-semibold shadow-xl shadow-[hsl(var(--accent-blue))]/30 hover:shadow-2xl hover:shadow-[hsl(var(--accent-blue))]/40 transition-all duration-300"
                >
                  <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="group flex items-center justify-center gap-2.5">
                    <span>Request Consultation</span>
                    <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>

                {/* Contact Cards - Premium Design */}
                <div className="grid grid-cols-1 gap-3 pt-2">
                  <a
                    href="mailto:contact@hitechlogic.com"
                    className="group flex items-center gap-4 px-5 py-4 rounded-xl bg-gradient-to-br from-slate-50 to-white border border-slate-200/60 hover:border-[hsl(var(--accent-blue))]/30 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm border border-slate-200/60 group-hover:border-[hsl(var(--accent-blue))]/20 group-hover:bg-[hsl(var(--accent-blue))]/5 transition-all duration-300">
                      <svg className="h-5 w-5 text-[hsl(var(--accent-blue))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium text-slate-500 mb-0.5">Email</p>
                      <p className="text-sm font-semibold text-slate-700 truncate group-hover:text-[hsl(var(--accent-blue))] transition-colors">
                        contact@hitechlogic.com
                      </p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 px-5 py-4 rounded-xl bg-gradient-to-br from-slate-50 to-white border border-slate-200/60">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm border border-slate-200/60">
                      <svg className="h-5 w-5 text-[hsl(var(--accent-blue))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium text-slate-500 mb-0.5">Phone</p>
                      <p className="text-sm font-semibold text-slate-700">+1 (888) 448-3244</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Branding */}
              <div className="mt-auto pt-8">
                <div className="text-center">
                  <p className="text-xs font-medium text-slate-400 tracking-wide">Enterprise Managed Services</p>
                  <div className="mt-2 flex items-center justify-center gap-2">
                    <div className="h-1 w-1 rounded-full bg-[hsl(var(--accent-blue))]"></div>
                    <p className="text-xs font-semibold text-[hsl(var(--navy))]">HiTechLogic</p>
                    <div className="h-1 w-1 rounded-full bg-[hsl(var(--accent-blue))]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
