import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { allServices } from "@/data/services";
import { industries } from "@/data/industries";

// Hardcoded list of your 8 core services exactly as requested
const coreServices = [
  {
    id: 'infrastructure-cloud-operations',
    name: 'Infrastructure & Cloud Operations',
    href: '/services/infrastructure-cloud-operations',
  },
  {
    id: 'system-oversight-event-reduction',
    name: 'System Oversight & Event Reduction',
    href: '/services/system-oversight-event-reduction',
  },
  {
    id: 'ai-business-automation',
    name: 'AI Business Automation',
    href: '/services/ai-business-automation',
  },
  {
    id: 'reliability-performance-engineering',
    name: 'Reliability & Performance Engineering',
    href: '/services/reliability-performance-engineering',
  },
  {
    id: 'security-identity-assurance',
    name: 'Cybersecurity & Identity Assurance',
    href: '/services/security-identity-assurance',
  },
  {
    id: 'cost-efficiency-capacity-strategy',
    name: 'World Cloud Cost Efficiency & Capacity Strategy',
    href: '/services/cost-efficiency-capacity-strategy',
  },
  {
    id: 'strategic-technology-partnership',
    name: 'Strategic Technology Partnership',
    href: '/services/strategic-technology-partnership',
  },
  {
    id: 'rapid-prototyping',
    name: 'Rapid Prototyping & App Development',
    href: '/services/rapid-prototyping',
  },
];





const navigation = [
  { name: "Home", href: "/" },
  {
    name: "Services",
    href: "/services",
    hasServicesDropdown: true
  },
  {
    name: "Industries",
    href: "/industries",
    hasIndustriesDropdown: true
  },
  { name: "Contact", href: "/contact" },
  { name: "About", href: "/about" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [activeDesktopDropdown, setActiveDesktopDropdown] = useState<string | null>(null);
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

  const toggleSection = (sectionName: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionName]: !prev[sectionName]
    }));
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setExpandedSections({});
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
      {/* Main Navigation */}
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Professional Text Logo - Responsive Sizing */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center group">
              <div className="relative">
                <span className="text-lg sm:text-xl md:text-2xl lg:text-2xl font-bold tracking-tight text-slate-900">
                  HiTech<span className="text-[hsl(var(--accent-blue))] font-bold">Logic</span>
                </span>
                {/* Subtle accent glow on hover - Only on desktop */}
                <div className="hidden lg:block absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-20 h-0.5 bg-gradient-to-r from-transparent via-[hsl(var(--accent-blue))]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </Link>
          </div>

          {/* Navigation - With Dropdowns */}
          <div className="hidden lg:flex items-center gap-2">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={item.hasServicesDropdown || item.hasIndustriesDropdown ? () => setActiveDesktopDropdown(item.name) : undefined}
                onMouseLeave={item.hasServicesDropdown || item.hasIndustriesDropdown ? () => setActiveDesktopDropdown(null) : undefined}
              >
                {item.hasServicesDropdown ? (
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
                        activeDesktopDropdown === item.name ? "rotate-180" : ""
                      )} />
                    </Link>
                    {activeDesktopDropdown === item.name && (
                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-80 pt-3 transition-all duration-300 opacity-100 z-50">
                        <div className="rounded-2xl border border-slate-200/60 bg-white shadow-2xl shadow-slate-900/10 overflow-hidden backdrop-blur-sm">
                          {/* Header Section */}
                          <div className="bg-gradient-to-br from-blue-50/70 via-blue-25/50 to-white/90 px-6 py-5 border-b border-slate-200/50">
                            <div className="text-center">
                              <h3 className="text-sm font-bold text-blue-900 tracking-tight">Enterprise Services</h3>
                              <p className="text-xs text-blue-700/80 mt-1 font-medium">Complete managed solutions</p>
                            </div>
                          </div>

                          {/* Services Grid */}
                          <div className="p-4">
                            <div className="grid grid-cols-1 gap-1 max-h-80 overflow-y-auto">
                              {coreServices.map((service, index) => (
                                <Link
                                  key={service.id}
                                  to={service.href}
                                  className="group/service flex items-center justify-between rounded-lg py-3 px-4 hover:bg-gradient-to-r hover:from-blue-50/60 hover:to-slate-50/60 transition-all duration-300 hover:translate-x-1"
                                  style={{animationDelay: `${index * 50}ms`}}
                                >
                                  <div className="flex-1">
                                    <div className="text-sm font-medium text-slate-900 group-hover/service:text-blue-900 transition-colors duration-200 line-clamp-2">
                                      {service.name}
                                    </div>
                                  </div>
                                  <div className="w-5 h-5 flex items-center justify-center ml-3">
                                    <div className="w-0 group-hover/service:w-4 h-4 border-t-2 border-r-2 border-blue-600 rotate-45 transition-all duration-300 opacity-0 group-hover/service:opacity-100 group-hover/service:scale-110"></div>
                                  </div>
                                </Link>
                              ))}
                            </div>

                            {/* Footer CTA */}
                            <div className="mt-4 pt-3 border-t border-slate-200/40">
                              <Link
                                to="/services"
                                className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-gradient-to-r from-slate-100 to-slate-50 hover:from-slate-200 hover:to-slate-100 rounded-lg transition-all duration-200 border border-slate-200/50 hover:border-slate-300 group/footer"
                              >
                                <span className="text-sm font-medium text-slate-700 group-hover/footer:text-slate-900">View All Services</span>
                                <span className="text-xs text-slate-500 group-hover/footer:text-slate-700">→</span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                ) : item.hasIndustriesDropdown ? (
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
                        activeDesktopDropdown === item.name ? "rotate-180" : ""
                      )} />
                    </Link>
                    {activeDesktopDropdown === item.name && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-80 pt-3 transition-all duration-300 opacity-100 z-50">
                        <div className="rounded-2xl border border-slate-200/60 bg-white shadow-2xl shadow-slate-900/10 overflow-hidden backdrop-blur-sm">
                          {/* Header Section */}
                          <div className="bg-gradient-to-br from-blue-50/70 via-blue-25/50 to-white/90 px-6 py-5 border-b border-slate-200/50">
                            <div className="text-center">
                              <h3 className="text-sm font-bold text-blue-900 tracking-tight">Industry Sectors</h3>
                              <p className="text-xs text-blue-700/80 mt-1 font-medium">Tailored enterprise solutions</p>
                            </div>
                          </div>

                          {/* Industries Grid */}
                          <div className="p-4">
                            <div className="grid grid-cols-1 gap-1 max-h-80 overflow-y-auto">
                              {industries.map((industry, index) => (
                                <Link
                                  key={industry.id}
                                  to={industry.href}
                                  className="group/industry flex items-center justify-between rounded-lg py-3 px-4 hover:bg-gradient-to-r hover:from-blue-50/60 hover:to-slate-50/60 transition-all duration-300 hover:translate-x-1"
                                  style={{animationDelay: `${index * 50}ms`}}
                                >
                                  <div className="flex-1">
                                    <div className="text-sm font-medium text-slate-900 group-hover/industry:text-blue-900 transition-colors duration-200 line-clamp-2">
                                      {industry.name}
                                    </div>
                                  </div>
                                  <div className="w-5 h-5 flex items-center justify-center ml-3">
                                    <div className="w-0 group-hover/industry:w-4 h-4 border-t-2 border-r-2 border-blue-600 rotate-45 transition-all duration-300 opacity-0 group-hover/industry:opacity-100 group-hover/industry:scale-110"></div>
                                  </div>
                                </Link>
                              ))}
                            </div>

                            {/* Footer CTA */}
                            <div className="mt-4 pt-3 border-t border-slate-200/40">
                              <Link
                                to="/services"
                                className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-gradient-to-r from-slate-100 to-slate-50 hover:from-slate-200 hover:to-slate-100 rounded-lg transition-all duration-200 border border-slate-200/50 hover:border-slate-300 group/footer"
                              >
                                <span className="text-sm font-medium text-slate-700 group-hover/footer:text-slate-900">Explore All Solutions</span>
                                <span className="text-xs text-slate-500 group-hover/footer:text-slate-700">→</span>
                              </Link>
                            </div>
                          </div>
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
            <div className="hidden lg:block relative group">
              <Button
                variant="hero"
                size="lg"
                className="relative overflow-hidden transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-blue-500/25"
              >
                <Link to="/contact" className="relative z-10 flex items-center gap-2">
                  <span>Request Consultation</span>
                  <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                </Link>
                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg" />
              </Button>

              {/* Creative & Powerful Service Options */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 delay-150">
                <div className="relative">
                  {/* Background glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--accent-blue))]/10 via-transparent to-[hsl(var(--navy))]/10 rounded-2xl blur-xl scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                  <div className="relative flex flex-col gap-0.5 min-w-[260px] p-1.5 bg-white/95 backdrop-blur-xl rounded-xl shadow-lg shadow-[hsl(var(--accent-blue))]/8 border border-white/40">
                    {/* Reduce Your Costs */}
                    <Link
                      to="/services/cost-efficiency-capacity-strategy"
                      className="group/costs flex items-center justify-between bg-white hover:bg-slate-50/60 text-[hsl(var(--navy))] hover:text-[hsl(var(--accent-blue))] font-medium px-3 py-2.5 rounded-full transition-all duration-200 border border-slate-200/30 hover:border-[hsl(var(--accent-blue))]/25"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-br from-green-400 to-emerald-500"></div>
                        <span className="text-xs tracking-wide">Reduce Your Costs</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-medium text-slate-400 group-hover/costs:text-[hsl(var(--accent-blue))] transition-colors duration-200">Save 35%</span>
                      </div>
                    </Link>

                    {/* Reduce Your Risks */}
                    <Link
                      to="/services/security-identity-assurance"
                      className="group/risks flex items-center justify-between bg-white hover:bg-slate-50/60 text-[hsl(var(--navy))] hover:text-[hsl(var(--accent-blue))] font-medium px-3 py-2.5 rounded-full transition-all duration-200 border border-slate-200/30 hover:border-[hsl(var(--accent-blue))]/25"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-br from-blue-400 to-blue-500"></div>
                        <span className="text-xs tracking-wide">Reduce Your Risks</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-medium text-slate-400 group-hover/risks:text-[hsl(var(--accent-blue))] transition-colors duration-200">Zero Breaches</span>
                      </div>
                    </Link>

                    {/* Talk To Us About Your Ideas */}
                    <Link
                      to="/contact"
                      className="group/ideas flex items-center justify-between bg-white hover:bg-slate-50/60 text-[hsl(var(--navy))] hover:text-[hsl(var(--accent-blue))] font-medium px-3 py-2.5 rounded-full transition-all duration-200 border border-slate-200/30 hover:border-[hsl(var(--accent-blue))]/25"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-br from-purple-400 to-purple-500"></div>
                        <span className="text-xs tracking-wide">Talk To Us About Your Ideas</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-medium text-slate-400 group-hover/ideas:text-[hsl(var(--accent-blue))] transition-colors duration-200">Get Started</span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <button
              className="md:hidden flex items-center justify-center p-4 text-slate-700 transition-all duration-200 hover:text-[hsl(var(--accent-blue))] hover:bg-slate-100/50 rounded-lg active:scale-95 touch-manipulation"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation"
              style={{minWidth: '48px', minHeight: '48px'}}
            >
              <Menu className="h-7 w-7" />
            </button>
          </div>
        </div>

        {/* Full Screen Mobile Menu - Slides from Right */}
        {mobileMenuOpen && (
          <>
            {/* Full Backdrop */}
            <div
              className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm animate-in fade-in duration-300 z-40"
              onClick={closeMobileMenu}
            />

            {/* Full Screen Panel - Slides from Right */}
            <div className="lg:hidden fixed inset-0 bg-white animate-in slide-in-from-right-full duration-400 z-50">
              <div className="flex flex-col h-full">
                {/* Header with Close Button */}
                <div className="flex-shrink-0 px-6 py-6 border-b border-slate-200/60 bg-white flex items-center justify-between">
                  {/* HiTechLogic Branding */}
                  <div className="flex items-center">
                    <span className="text-xl font-bold tracking-tight text-slate-900">
                      HiTech<span className="text-[hsl(var(--accent-blue))] font-bold">Logic</span>
                    </span>
                  </div>

                  {/* Close Button */}
                  <button
                    onClick={closeMobileMenu}
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors duration-200"
                    aria-label="Close navigation"
                  >
                    <X className="w-5 h-5 text-slate-700" />
                  </button>
                </div>

                {/* Content - Scrollable */}
                <div className="flex-1 overflow-y-auto">
                  <nav className="px-6 py-6">
                    {/* Main Navigation Items */}
                    <div className="space-y-1">
                      {/* Home */}
                      <Link
                        to="/"
                        onClick={closeMobileMenu}
                        className="flex items-center px-4 py-4 text-lg font-medium text-slate-900 hover:text-[hsl(var(--accent-blue))] hover:bg-slate-50 rounded-xl transition-all duration-300 active:scale-[0.98]"
                      >
                        <span>Home</span>
                      </Link>

                      {/* Services Section */}
                      <div className="py-2">
                        <button
                          onClick={() => toggleSection('services')}
                          className="w-full flex items-center justify-between px-4 py-4 text-left text-lg font-medium text-slate-900 hover:text-[hsl(var(--accent-blue))] hover:bg-slate-50 rounded-xl transition-all duration-300"
                        >
                          <span>Services</span>
                          <ChevronDown className={cn(
                            "w-5 h-5 text-slate-400 transition-transform duration-300",
                            expandedSections.services && "rotate-180 text-slate-700"
                          )} />
                        </button>

                        {expandedSections.services && (
                          <div className="ml-8 mt-2 space-y-2 animate-in slide-in-from-left-2 duration-300 max-h-screen overflow-y-auto relative">
                            {coreServices.map((service) => (
                              <Link
                                key={service.id}
                                to={service.href}
                                onClick={closeMobileMenu}
                                className="group/service flex items-center gap-3 px-4 py-2.5 text-base font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100/50 rounded-lg transition-all duration-200 active:scale-[0.98] relative"
                              >
                                <div className="w-0 group-hover/service:w-1 h-4 bg-gradient-to-b from-[hsl(var(--accent-blue))] to-[hsl(var(--navy))] rounded-full transition-all duration-300 shrink-0"></div>
                                <span className="relative">
                                  {service.name}
                                  <div className="absolute -bottom-1 left-0 w-0 group-hover/service:w-full h-px bg-[hsl(var(--accent-blue))]/30 transition-all duration-300"></div>
                                </span>
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Industries Section */}
                      <div className="py-2">
                        <button
                          onClick={() => toggleSection('industries')}
                          className="w-full flex items-center justify-between px-4 py-4 text-left text-lg font-medium text-slate-900 hover:text-[hsl(var(--accent-blue))] hover:bg-slate-50 rounded-xl transition-all duration-300"
                        >
                          <span>Industries</span>
                          <ChevronDown className={cn(
                            "w-5 h-5 text-slate-400 transition-transform duration-300",
                            expandedSections.industries && "rotate-180 text-slate-700"
                          )} />
                        </button>

                        {expandedSections.industries && (
                          <div className="ml-8 mt-2 space-y-2 animate-in slide-in-from-left-2 duration-300">
                            {industries.map((industry) => (
                              <Link
                                key={industry.id}
                                to={industry.href}
                                onClick={closeMobileMenu}
                                className="group/industry flex items-center gap-3 px-4 py-2.5 text-base font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100/50 rounded-lg transition-all duration-200 active:scale-[0.98] relative"
                              >
                                <div className="w-0 group-hover/industry:w-1 h-4 bg-gradient-to-b from-[hsl(var(--accent-blue))] to-[hsl(var(--navy))] rounded-full transition-all duration-300 shrink-0"></div>
                                <span className="relative">
                                  {industry.name}
                                  <div className="absolute -bottom-1 left-0 w-0 group-hover/industry:w-full h-px bg-[hsl(var(--accent-blue))]/30 transition-all duration-300"></div>
                                </span>
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Other Pages */}
                      <Link
                        to="/contact"
                        onClick={closeMobileMenu}
                        className="flex items-center px-4 py-4 text-lg font-medium text-slate-900 hover:text-[hsl(var(--accent-blue))] hover:bg-slate-50 rounded-xl transition-all duration-300 active:scale-[0.98]"
                      >
                        <span>Contact</span>
                      </Link>

                      <Link
                        to="/about"
                        onClick={closeMobileMenu}
                        className="flex items-center px-4 py-4 text-lg font-medium text-slate-900 hover:text-[hsl(var(--accent-blue))] hover:bg-slate-50 rounded-xl transition-all duration-300 active:scale-[0.98]"
                      >
                        <span>About</span>
                      </Link>
                    </div>

                    {/* Spacer */}
                    <div className="h-8"></div>
                  </nav>
                </div>

                {/* Bottom Section - Compact Contact & Branding */}
                <div className="flex-shrink-0 border-t border-slate-200 bg-gradient-to-b from-white to-slate-50">
                  {/* Contact Information - Much More Compact */}
                  <div className="px-6 py-4 border-b border-slate-200/50">
                    <h3 className="text-sm font-semibold text-slate-900 mb-3">Contact</h3>
                    <div className="flex gap-2">
                      <a
                        href="mailto:contact@hitechlogic.com"
                        className="flex items-center gap-2 p-2 bg-blue-50/50 hover:bg-blue-100/50 rounded-lg transition-all duration-200 text-xs"
                      >
                        <span className="text-blue-600">✉️</span>
                        <span className="text-slate-700 font-medium">Email</span>
                      </a>

                      <a
                        href="tel:+18884483244"
                        className="flex items-center gap-2 p-2 bg-emerald-50/50 hover:bg-emerald-100/50 rounded-lg transition-all duration-200 text-xs"
                      >
                        <span className="text-emerald-600">📞</span>
                        <span className="text-slate-700 font-medium">Call</span>
                      </a>

                      <Link
                        to="/contact"
                        className="flex items-center gap-2 p-2 bg-purple-50/50 hover:bg-purple-100/50 rounded-lg transition-all duration-200 text-xs"
                      >
                        <span className="text-purple-600">💬</span>
                        <span className="text-slate-700 font-medium">Chat</span>
                      </Link>
                    </div>
                  </div>

                  {/* HiTechLogic Branding & CTA */}
                  <div className="px-6 py-4">
                    {/* Brand with accent design */}
                    <div className="text-center mb-4">
                      <div className="relative inline-block">
                        <span className="text-xl font-bold tracking-tight text-slate-900">
                          HiTech<span className="text-[hsl(var(--accent-blue))] font-bold">Logic</span>
                        </span>
                        {/* Subtle accent underline */}
                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-transparent via-[hsl(var(--accent-blue))] to-transparent opacity-60"></div>
                      </div>
                      <div className="text-xs text-slate-500 mt-1">Enterprise Solutions</div>
                    </div>

                    {/* Single prominent CTA */}
                    <div className="flex justify-center">
                      <Button
                        variant="hero"
                        asChild
                        size="sm"
                        onClick={closeMobileMenu}
                        className="w-full max-w-xs"
                      >
                        <Link to="/contact">Get Started</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </nav>
    </header>
  );
}
