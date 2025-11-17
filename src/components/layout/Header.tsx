import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, ArrowRight, Server, Activity, Workflow, ShieldCheck, BarChart3, Handshake, Gauge, Sparkles, Home, Building2, Briefcase, BookOpen, Phone, Users, Lightbulb, Search } from "lucide-react";
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
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    solutions: false,
    industries: false,
    resources: false,
    company: false,
  });
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
          <div className="lg:hidden fixed inset-x-0 top-[112px] bottom-0 overflow-y-auto bg-white/98 backdrop-blur-xl border-t border-slate-200/60 animate-in slide-in-from-top-2 duration-300">
            <div className="flex flex-col min-h-full">
              {/* Search Bar */}
              <div className="px-6 py-4 border-b border-slate-100">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search services, industries..."
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent-blue))]/20 focus:border-[hsl(var(--accent-blue))]/40 transition-all duration-200"
                  />
                </div>
              </div>

              {/* Navigation Content */}
              <div className="flex-1 overflow-y-auto px-6 py-6">
                <nav className="space-y-3">
                  {/* Home Section */}
                  <div className="space-y-2">
                    <Link
                      to="/"
                      onClick={handleMobileNavClick}
                      className={cn(
                        "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 active:scale-95",
                        isActivePath("/")
                          ? "bg-gradient-to-r from-[hsl(var(--accent-blue))] to-[hsl(var(--navy))] text-white shadow-lg shadow-[hsl(var(--accent-blue))]/25"
                          : "hover:bg-slate-50 text-slate-700 hover:text-[hsl(var(--navy))]"
                      )}
                    >
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 group-hover:bg-slate-200 transition-colors duration-200">
                        <Home className="h-4 w-4 text-slate-600" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold">Home</div>
                        <div className="text-xs text-slate-500">Welcome & overview</div>
                      </div>
                      {isActivePath("/") && <ArrowRight className="h-4 w-4 text-white ml-auto" />}
                    </Link>
                  </div>

                  {/* Solutions Section */}
                  <div className="space-y-2">
                    <button
                      onClick={() => toggleSection('solutions')}
                      className="flex items-center justify-between w-full px-4 py-3 rounded-xl hover:bg-slate-50 transition-all duration-200 active:scale-95"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100">
                          <Briefcase className="h-4 w-4 text-slate-600" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-slate-900">Solutions</div>
                          <div className="text-xs text-slate-500">Our services & offerings</div>
                        </div>
                      </div>
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 text-slate-400 transition-transform duration-300",
                          expandedSections.solutions && "rotate-180"
                        )}
                      />
                    </button>

                    {expandedSections.solutions && (
                      <div className="ml-12 space-y-1 animate-in slide-in-from-top-1 duration-200">
                        <Link
                          to="/services"
                          onClick={handleMobileNavClick}
                          className={cn(
                            "flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-200 active:scale-95",
                            isActivePath("/services")
                              ? "bg-[hsl(var(--accent-blue))]/10 text-[hsl(var(--accent-blue))] font-semibold"
                              : "hover:bg-slate-50 text-slate-600 hover:text-[hsl(var(--navy))]"
                          )}
                        >
                          <div className="text-xs font-medium">All Services</div>
                          {isActivePath("/services") && <ArrowRight className="h-3 w-3 text-[hsl(var(--accent-blue))] ml-auto" />}
                        </Link>

                        {serviceMegaMenu.map((service) => (
                          <Link
                            key={service.href}
                            to={service.href}
                            onClick={handleMobileNavClick}
                            className={cn(
                              "flex items-start gap-3 px-4 py-2.5 rounded-lg transition-all duration-200 active:scale-95",
                              isActivePath(service.href)
                                ? "bg-[hsl(var(--accent-blue))]/10 border-l-2 border-[hsl(var(--accent-blue))]"
                                : "hover:bg-slate-50 hover:border-l-2 hover:border-slate-200"
                            )}
                          >
                            <div className="flex h-6 w-6 items-center justify-center rounded bg-slate-100 mt-0.5">
                              <service.icon className="h-3 w-3 text-slate-500" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-xs font-medium text-slate-700 leading-tight">{service.title}</div>
                            </div>
                            {isActivePath(service.href) && <ArrowRight className="h-3 w-3 text-[hsl(var(--accent-blue))] flex-shrink-0 mt-0.5" />}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Industries Section */}
                  <div className="space-y-2">
                    <button
                      onClick={() => toggleSection('industries')}
                      className="flex items-center justify-between w-full px-4 py-3 rounded-xl hover:bg-slate-50 transition-all duration-200 active:scale-95"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100">
                          <Building2 className="h-4 w-4 text-slate-600" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-slate-900">Industries</div>
                          <div className="text-xs text-slate-500">Industry-specific solutions</div>
                        </div>
                      </div>
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 text-slate-400 transition-transform duration-300",
                          expandedSections.industries && "rotate-180"
                        )}
                      />
                    </button>

                    {expandedSections.industries && (
                      <div className="ml-12 space-y-1 animate-in slide-in-from-top-1 duration-200">
                        <Link
                          to="/industries"
                          onClick={handleMobileNavClick}
                          className={cn(
                            "flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-200 active:scale-95",
                            isActivePath("/industries")
                              ? "bg-[hsl(var(--accent-blue))]/10 text-[hsl(var(--accent-blue))] font-semibold"
                              : "hover:bg-slate-50 text-slate-600 hover:text-[hsl(var(--navy))]"
                          )}
                        >
                          <div className="text-xs font-medium">All Industries</div>
                          {isActivePath("/industries") && <ArrowRight className="h-3 w-3 text-[hsl(var(--accent-blue))] ml-auto" />}
                        </Link>

                        {industriesMegaMenu.map((industry) => (
                          <Link
                            key={industry.href}
                            to={industry.href}
                            onClick={handleMobileNavClick}
                            className={cn(
                              "flex items-start gap-3 px-4 py-2.5 rounded-lg transition-all duration-200 active:scale-95",
                              isActivePath(industry.href)
                                ? "bg-[hsl(var(--accent-blue))]/10 border-l-2 border-[hsl(var(--accent-blue))]"
                                : "hover:bg-slate-50 hover:border-l-2 hover:border-slate-200"
                            )}
                          >
                            <div className="flex h-6 w-6 items-center justify-center rounded bg-slate-100 mt-0.5">
                              <industry.icon className="h-3 w-3 text-slate-500" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-xs font-medium text-slate-700 leading-tight">{industry.title}</div>
                            </div>
                            {isActivePath(industry.href) && <ArrowRight className="h-3 w-3 text-[hsl(var(--accent-blue))] flex-shrink-0 mt-0.5" />}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Resources Section */}
                  <div className="space-y-2">
                    <button
                      onClick={() => toggleSection('resources')}
                      className="flex items-center justify-between w-full px-4 py-3 rounded-xl hover:bg-slate-50 transition-all duration-200 active:scale-95"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100">
                          <BookOpen className="h-4 w-4 text-slate-600" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-slate-900">Resources</div>
                          <div className="text-xs text-slate-500">Guides & insights</div>
                        </div>
                      </div>
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 text-slate-400 transition-transform duration-300",
                          expandedSections.resources && "rotate-180"
                        )}
                      />
                    </button>

                    {expandedSections.resources && (
                      <div className="ml-12 space-y-1 animate-in slide-in-from-top-1 duration-200">
                        <Link
                          to="/resources"
                          onClick={handleMobileNavClick}
                          className={cn(
                            "flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-200 active:scale-95",
                            isActivePath("/resources")
                              ? "bg-[hsl(var(--accent-blue))]/10 text-[hsl(var(--accent-blue))] font-semibold"
                              : "hover:bg-slate-50 text-slate-600 hover:text-[hsl(var(--navy))]"
                          )}
                        >
                          <div className="text-xs font-medium">Resource Library</div>
                          {isActivePath("/resources") && <ArrowRight className="h-3 w-3 text-[hsl(var(--accent-blue))] ml-auto" />}
                        </Link>

                        <Link
                          to="/blog"
                          onClick={handleMobileNavClick}
                          className={cn(
                            "flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-200 active:scale-95",
                            isActivePath("/blog")
                              ? "bg-[hsl(var(--accent-blue))]/10 text-[hsl(var(--accent-blue))] font-semibold"
                              : "hover:bg-slate-50 text-slate-600 hover:text-[hsl(var(--navy))]"
                          )}
                        >
                          <div className="text-xs font-medium">Blog</div>
                          {isActivePath("/blog") && <ArrowRight className="h-3 w-3 text-[hsl(var(--accent-blue))] ml-auto" />}
                        </Link>

                        <Link
                          to="/case-studies"
                          onClick={handleMobileNavClick}
                          className={cn(
                            "flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-200 active:scale-95",
                            isActivePath("/case-studies")
                              ? "bg-[hsl(var(--accent-blue))]/10 text-[hsl(var(--accent-blue))] font-semibold"
                              : "hover:bg-slate-50 text-slate-600 hover:text-[hsl(var(--navy))]"
                          )}
                        >
                          <div className="text-xs font-medium">Case Studies</div>
                          {isActivePath("/case-studies") && <ArrowRight className="h-3 w-3 text-[hsl(var(--accent-blue))] ml-auto" />}
                        </Link>
                      </div>
                    )}
                  </div>

                  {/* Company Section */}
                  <div className="space-y-2">
                    <button
                      onClick={() => toggleSection('company')}
                      className="flex items-center justify-between w-full px-4 py-3 rounded-xl hover:bg-slate-50 transition-all duration-200 active:scale-95"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100">
                          <Users className="h-4 w-4 text-slate-600" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-slate-900">Company</div>
                          <div className="text-xs text-slate-500">About & principles</div>
                        </div>
                      </div>
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 text-slate-400 transition-transform duration-300",
                          expandedSections.company && "rotate-180"
                        )}
                      />
                    </button>

                    {expandedSections.company && (
                      <div className="ml-12 space-y-1 animate-in slide-in-from-top-1 duration-200">
                        <Link
                          to="/about"
                          onClick={handleMobileNavClick}
                          className={cn(
                            "flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-200 active:scale-95",
                            isActivePath("/about")
                              ? "bg-[hsl(var(--accent-blue))]/10 text-[hsl(var(--accent-blue))] font-semibold"
                              : "hover:bg-slate-50 text-slate-600 hover:text-[hsl(var(--navy))]"
                          )}
                        >
                          <div className="text-xs font-medium">About</div>
                          {isActivePath("/about") && <ArrowRight className="h-3 w-3 text-[hsl(var(--accent-blue))] ml-auto" />}
                        </Link>

                        <Link
                          to="/principles"
                          onClick={handleMobileNavClick}
                          className={cn(
                            "flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-200 active:scale-95",
                            isActivePath("/principles")
                              ? "bg-[hsl(var(--accent-blue))]/10 text-[hsl(var(--accent-blue))] font-semibold"
                              : "hover:bg-slate-50 text-slate-600 hover:text-[hsl(var(--navy))]"
                          )}
                        >
                          <div className="text-xs font-medium">Principles</div>
                          {isActivePath("/principles") && <ArrowRight className="h-3 w-3 text-[hsl(var(--accent-blue))] ml-auto" />}
                        </Link>
                      </div>
                    )}
                  </div>
                </nav>

                {/* CTA Section */}
                <div className="mt-8 pt-6 border-t border-slate-200/60">
                  <div className="space-y-3">
                    <Button
                      variant="hero"
                      size="lg"
                      asChild
                      className="w-full h-12 text-sm font-semibold shadow-lg shadow-[hsl(var(--accent-blue))]/20 hover:shadow-xl hover:shadow-[hsl(var(--accent-blue))]/30"
                    >
                      <Link to="/contact" onClick={handleMobileNavClick} className="flex items-center justify-center gap-2">
                        <Phone className="h-4 w-4" />
                        Request Consultation
                      </Link>
                    </Button>

                    {/* Quick Contact Actions */}
                    <div className="grid grid-cols-2 gap-3">
                      <a
                        href="mailto:contact@hitechlogic.com"
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-[hsl(var(--accent-blue))]/30 hover:bg-[hsl(var(--accent-blue))]/5 transition-all duration-200 active:scale-95"
                      >
                        <svg className="h-4 w-4 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span className="text-xs font-medium">Email</span>
                      </a>

                      <div className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-50 border border-slate-200">
                        <svg className="h-4 w-4 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span className="text-xs font-medium">Call</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Branding */}
              <div className="px-6 py-4 border-t border-slate-200/60 bg-slate-50/50">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2">
                    <div className="h-6 w-6 rounded-lg bg-gradient-to-br from-[hsl(var(--accent-blue))] to-[hsl(var(--navy))] flex items-center justify-center">
                      <ShieldCheck className="h-3 w-3 text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[hsl(var(--navy))]">HiTechLogic</p>
                      <p className="text-xs text-slate-500">Enterprise Managed Services</p>
                    </div>
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
