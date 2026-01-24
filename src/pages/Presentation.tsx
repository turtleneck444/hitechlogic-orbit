import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { 
  Building2, 
  Shield, 
  Zap, 
  TrendingUp, 
  Users, 
  Award,
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  BarChart3,
  Clock,
  DollarSign,
  Target,
  Sparkles,
  Play,
  Pause,
  ChevronDown,
  Server,
  Cpu,
  Lock,
  Globe,
  Layers,
  Activity,
  LineChart,
  PieChart,
  Briefcase,
  MessageSquare,
  ExternalLink
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Section IDs for navigation
const sections = [
  { id: "hero", label: "Overview", icon: Building2 },
  { id: "value", label: "Value Proposition", icon: Target },
  { id: "services", label: "Services", icon: Layers },
  { id: "metrics", label: "Metrics & ROI", icon: BarChart3 },
  { id: "case-studies", label: "Case Studies", icon: Award },
  { id: "technology", label: "Technology", icon: Cpu },
  { id: "partnership", label: "Partnership", icon: Users },
  { id: "cta", label: "Next Steps", icon: ArrowRight },
];

// Animated counter component
const AnimatedNumber = ({ value, suffix = "", prefix = "", duration = 2 }: { value: number; suffix?: string; prefix?: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const incrementTime = (duration * 1000) / end;
      const timer = setInterval(() => {
        start += Math.ceil(end / 50);
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, incrementTime);
      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return <span ref={ref}>{prefix}{count.toLocaleString()}{suffix}</span>;
};

const Presentation = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isAutoScrolling, setIsAutoScrolling] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((scrollTop / docHeight) * 100);

      // Determine active section
      sections.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const services = [
    {
      icon: Server,
      title: "Infrastructure & Cloud Operations",
      description: "Enterprise-grade cloud architecture with 99.99% uptime guarantee",
      highlight: "24/7 Managed",
    },
    {
      icon: Shield,
      title: "Security & Identity Assurance",
      description: "Zero-trust security framework with compliance automation",
      highlight: "SOC 2 Ready",
    },
    {
      icon: Zap,
      title: "AI-Powered Automation",
      description: "Autonomous systems that reduce manual intervention by 85%",
      highlight: "85% Reduction",
    },
    {
      icon: Activity,
      title: "Reliability Engineering",
      description: "Proactive monitoring and incident prevention",
      highlight: "99.99% SLA",
    },
    {
      icon: LineChart,
      title: "Cost Optimization",
      description: "Strategic capacity planning reducing cloud spend",
      highlight: "40% Savings",
    },
    {
      icon: Users,
      title: "Strategic Partnership",
      description: "Dedicated engineering team as your technology partner",
      highlight: "vCTO Access",
    },
  ];

  const metrics = [
    { value: 99.99, suffix: "%", label: "Uptime SLA", icon: Clock },
    { value: 85, suffix: "%", label: "Cost Reduction", icon: DollarSign },
    { value: 60, suffix: "%", label: "Faster Deployment", icon: Zap },
    { value: 24, suffix: "/7", label: "Expert Support", icon: Shield },
  ];

  const caseStudies = [
    {
      company: "Fortune 500 Retailer",
      industry: "E-Commerce",
      result: "Achieved 99.99% uptime during Black Friday peak traffic",
      metrics: { cost: "45%", uptime: "99.99%", incidents: "92%" },
    },
    {
      company: "Leading FinTech",
      industry: "Financial Services",
      result: "Reduced security incidents by 94% with zero-trust implementation",
      metrics: { cost: "38%", uptime: "99.995%", incidents: "94%" },
    },
    {
      company: "Healthcare Platform",
      industry: "Healthcare",
      result: "HIPAA compliance achieved in 6 weeks with automated monitoring",
      metrics: { cost: "52%", uptime: "99.99%", incidents: "88%" },
    },
  ];

  return (
    <>
      <Helmet>
        <title>Executive Presentation | HiTechLogic</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-muted/30">
        <motion.div
          className="h-full bg-gradient-to-r from-primary to-accent"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Vertical Navigation */}
      <nav className="fixed left-0 top-0 bottom-0 w-20 lg:w-24 bg-[hsl(var(--deep-navy))] border-r border-white/10 z-40 flex flex-col items-center py-8 overflow-hidden">
        {/* Logo */}
        <div className="mb-8">
          <img src="/main-logo.svg" alt="HiTechLogic" className="w-10 h-10 brightness-0 invert" />
        </div>

        {/* Navigation Items */}
        <div className="flex-1 flex flex-col justify-center gap-2">
          {sections.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`group relative flex flex-col items-center justify-center w-14 lg:w-16 h-14 lg:h-16 rounded-xl transition-all duration-300 ${
                activeSection === id
                  ? "bg-primary text-primary-foreground"
                  : "text-white/50 hover:text-white hover:bg-white/10"
              }`}
            >
              <Icon className="w-5 h-5 mb-1" />
              <span className="text-[10px] font-medium hidden lg:block">{label.split(" ")[0]}</span>
              
              {/* Tooltip */}
              <div className="absolute left-full ml-4 px-3 py-2 bg-foreground text-background rounded-lg text-sm font-medium whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity z-50 shadow-lg">
                {label}
                <div className="absolute right-full top-1/2 -translate-y-1/2 border-8 border-transparent border-r-foreground" />
              </div>
            </button>
          ))}
        </div>

        {/* Bottom indicator */}
        <div className="mt-auto text-white/30 text-xs font-mono">
          {Math.round(scrollProgress)}%
        </div>
      </nav>

      {/* Main Content */}
      <main className="ml-20 lg:ml-24">
        {/* Hero Section */}
        <section id="hero" className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-[hsl(var(--deep-navy))] via-[hsl(220,49%,12%)] to-[hsl(var(--deep-navy))]">
          {/* Animated Background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-slower" />
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyZTZiZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
          </div>

          <div className="container mx-auto px-8 lg:px-16 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-5xl"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full border border-primary/30 text-primary mb-8">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-medium">Enterprise Technology Partner</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                Transform Your{" "}
                <span className="relative">
                  <span className="bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent">
                    Technology Operations
                  </span>
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                    <path d="M2 10C50 4 150 2 298 10" stroke="url(#underline-gradient)" strokeWidth="3" strokeLinecap="round"/>
                    <defs>
                      <linearGradient id="underline-gradient" x1="0" y1="0" x2="300" y2="0">
                        <stop stopColor="#2E6BFF" />
                        <stop offset="1" stopColor="#60A5FA" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-3xl leading-relaxed">
                HiTechLogic delivers enterprise-grade infrastructure, security, and automation solutions that reduce operational costs while ensuring 99.99% reliability.
              </p>

              <div className="flex flex-wrap gap-4 mb-16">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg gap-2 group"
                  onClick={() => scrollToSection("cta")}
                >
                  Schedule Discussion
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg"
                  onClick={() => scrollToSection("services")}
                >
                  Explore Solutions
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { label: "Enterprise Clients", value: "150+" },
                  { label: "Uptime SLA", value: "99.99%" },
                  { label: "Cost Reduction", value: "40%+" },
                  { label: "Years Experience", value: "15+" },
                ].map((stat, idx) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + idx * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-white/50 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/40"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </section>

        {/* Value Proposition Section */}
        <section id="value" className="py-24 lg:py-32 bg-background relative">
          <div className="container mx-auto px-8 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="eyebrow text-primary mb-4">Why HiTechLogic</div>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                The Strategic Advantage
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We combine deep technical expertise with strategic business acumen to deliver measurable outcomes.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: TrendingUp,
                  title: "Reduce Operational Costs",
                  description: "Our automation-first approach typically reduces operational overhead by 40-60%, allowing your team to focus on innovation.",
                  color: "from-green-500 to-emerald-600",
                },
                {
                  icon: Shield,
                  title: "Eliminate Risk",
                  description: "Zero-trust security architecture and proactive monitoring prevent incidents before they impact your business.",
                  color: "from-blue-500 to-indigo-600",
                },
                {
                  icon: Zap,
                  title: "Accelerate Delivery",
                  description: "Streamlined DevOps practices and AI-powered automation reduce time-to-market by up to 60%.",
                  color: "from-amber-500 to-orange-600",
                },
              ].map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group"
                >
                  <div className="glass-card p-8 h-full hover-scale cursor-pointer">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Comparison Table */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="executive-panel p-8 lg:p-12"
            >
              <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Before & After HiTechLogic</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="text-lg font-semibold text-destructive mb-4">Before</div>
                  {[
                    "Reactive incident response",
                    "Manual scaling operations",
                    "Fragmented security tools",
                    "Unpredictable costs",
                    "Slow deployment cycles",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-destructive/50" />
                      {item}
                    </div>
                  ))}
                </div>
                <div className="space-y-4">
                  <div className="text-lg font-semibold text-primary mb-4">After</div>
                  {[
                    "Proactive incident prevention",
                    "AI-powered auto-scaling",
                    "Unified security platform",
                    "Predictable, optimized costs",
                    "Continuous delivery pipeline",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-foreground">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 lg:py-32 bg-gradient-to-b from-muted/50 to-background">
          <div className="container mx-auto px-8 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="eyebrow text-primary mb-4">Our Solutions</div>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Enterprise Service Portfolio
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive managed services designed for enterprise scale and reliability.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, idx) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="group"
                >
                  <div className="glass-card p-6 h-full hover-scale cursor-pointer relative overflow-hidden">
                    {/* Highlight Badge */}
                    <div className="absolute top-4 right-4 px-3 py-1 bg-primary/10 rounded-full text-primary text-xs font-semibold">
                      {service.highlight}
                    </div>

                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2 pr-20">{service.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Metrics Section */}
        <section id="metrics" className="py-24 lg:py-32 bg-[hsl(var(--deep-navy))] relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyZTZiZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
          
          <div className="container mx-auto px-8 lg:px-16 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="eyebrow text-primary mb-4">Proven Results</div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Measurable Impact
              </h2>
              <p className="text-xl text-white/60 max-w-3xl mx-auto">
                Our clients consistently achieve significant improvements across all operational metrics.
              </p>
            </motion.div>

            {/* Main Metrics */}
            <div className="grid md:grid-cols-4 gap-6 mb-16">
              {metrics.map((metric, idx) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="text-center p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <metric.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                  <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                    <AnimatedNumber value={metric.value} suffix={metric.suffix} />
                  </div>
                  <div className="text-white/60">{metric.label}</div>
                </motion.div>
              ))}
            </div>

            {/* ROI Calculator Preview */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 lg:p-12 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent border border-primary/30"
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    Calculate Your Potential Savings
                  </h3>
                  <p className="text-white/60 mb-6 leading-relaxed">
                    Based on industry benchmarks and our client results, companies with $5M+ annual IT spend typically realize:
                  </p>
                  <ul className="space-y-3">
                    {[
                      "$800K - $2M annual cost reduction",
                      "3,000+ engineering hours reclaimed",
                      "90%+ reduction in critical incidents",
                      "50% faster feature delivery",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-white">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-8 border border-white/10">
                  <div className="text-center">
                    <div className="text-sm text-white/40 uppercase tracking-wider mb-2">Average Client ROI</div>
                    <div className="text-6xl font-bold text-primary mb-2">312%</div>
                    <div className="text-white/60">First Year Return</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section id="case-studies" className="py-24 lg:py-32 bg-background">
          <div className="container mx-auto px-8 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="eyebrow text-primary mb-4">Success Stories</div>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Client Case Studies
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Real results from enterprise organizations we've partnered with.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              {caseStudies.map((study, idx) => (
                <motion.div
                  key={study.company}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group"
                >
                  <div className="glass-card p-8 h-full hover-scale">
                    <div className="inline-block px-3 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
                      {study.industry}
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{study.company}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{study.result}</p>
                    
                    <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">{study.metrics.cost}</div>
                        <div className="text-xs text-muted-foreground">Cost Savings</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-500">{study.metrics.uptime}</div>
                        <div className="text-xs text-muted-foreground">Uptime</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-amber-500">{study.metrics.incidents}</div>
                        <div className="text-xs text-muted-foreground">Less Incidents</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Trust Logos */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16 text-center"
            >
              <p className="text-muted-foreground mb-8">Trusted by industry leaders</p>
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                {["Fortune 500", "SOC 2 Certified", "AWS Partner", "ISO 27001", "HIPAA Compliant"].map((item) => (
                  <div key={item} className="px-6 py-3 bg-muted rounded-lg text-foreground font-medium">
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Technology Section */}
        <section id="technology" className="py-24 lg:py-32 bg-gradient-to-b from-muted/50 to-background">
          <div className="container mx-auto px-8 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="eyebrow text-primary mb-4">Our Platform</div>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Technology Stack
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Enterprise-grade technology built on proven, scalable architecture.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Architecture Diagram */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="executive-panel p-8">
                  <div className="space-y-4">
                    {[
                      { layer: "Application Layer", items: ["Microservices", "API Gateway", "Load Balancer"] },
                      { layer: "Automation Layer", items: ["AI Engine", "Auto-Remediation", "Scaling"] },
                      { layer: "Security Layer", items: ["Zero Trust", "Encryption", "IAM"] },
                      { layer: "Infrastructure", items: ["Multi-Cloud", "Kubernetes", "Terraform"] },
                    ].map((tier, idx) => (
                      <div key={tier.layer} className="flex items-center gap-4">
                        <div className="w-32 text-right text-sm font-medium text-foreground">{tier.layer}</div>
                        <div className="flex-1 flex gap-2">
                          {tier.items.map((item) => (
                            <div key={item} className="flex-1 px-3 py-2 bg-primary/10 rounded-lg text-center text-sm text-primary font-medium">
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Technology Features */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                {[
                  {
                    icon: Globe,
                    title: "Multi-Cloud Native",
                    description: "Seamless deployment across AWS, Azure, GCP, and hybrid environments.",
                  },
                  {
                    icon: Lock,
                    title: "Security-First Architecture",
                    description: "Zero-trust security with encryption at rest and in transit.",
                  },
                  {
                    icon: Cpu,
                    title: "AI-Powered Operations",
                    description: "Machine learning models for predictive scaling and anomaly detection.",
                  },
                  {
                    icon: Layers,
                    title: "Infrastructure as Code",
                    description: "100% codified infrastructure with GitOps workflows.",
                  },
                ].map((feature, idx) => (
                  <div key={feature.title} className="flex gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                      <p className="text-muted-foreground text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Partnership Section */}
        <section id="partnership" className="py-24 lg:py-32 bg-background">
          <div className="container mx-auto px-8 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="eyebrow text-primary mb-4">Our Approach</div>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Strategic Partnership Model
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We don't just provide services — we become an extension of your team.
              </p>
            </motion.div>

            {/* Partnership Tiers */}
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {[
                {
                  tier: "Foundation",
                  description: "Core infrastructure and operations management",
                  features: ["24/7 Monitoring", "Incident Response", "Basic Automation", "Monthly Reviews"],
                  highlight: false,
                },
                {
                  tier: "Strategic",
                  description: "Full operational partnership with dedicated resources",
                  features: ["Everything in Foundation", "Dedicated Team", "vCTO Access", "Weekly Strategy", "Custom Development"],
                  highlight: true,
                },
                {
                  tier: "Enterprise",
                  description: "Complete technology transformation partnership",
                  features: ["Everything in Strategic", "On-site Engineers", "Board Reporting", "M&A Support", "Custom SLAs"],
                  highlight: false,
                },
              ].map((tier, idx) => (
                <motion.div
                  key={tier.tier}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`relative ${tier.highlight ? "lg:-mt-4 lg:mb-4" : ""}`}
                >
                  <div className={`h-full rounded-2xl p-8 ${
                    tier.highlight 
                      ? "bg-gradient-to-b from-primary to-primary/80 text-white shadow-xl shadow-primary/25" 
                      : "glass-card"
                  }`}>
                    {tier.highlight && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-amber-400 text-amber-900 text-sm font-semibold rounded-full">
                        Most Popular
                      </div>
                    )}
                    <h3 className={`text-2xl font-bold mb-2 ${tier.highlight ? "text-white" : "text-foreground"}`}>
                      {tier.tier}
                    </h3>
                    <p className={`mb-6 ${tier.highlight ? "text-white/80" : "text-muted-foreground"}`}>
                      {tier.description}
                    </p>
                    <ul className="space-y-3">
                      {tier.features.map((feature) => (
                        <li key={feature} className={`flex items-center gap-2 ${tier.highlight ? "text-white" : "text-foreground"}`}>
                          <CheckCircle2 className={`w-4 h-4 ${tier.highlight ? "text-white" : "text-primary"}`} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Team Highlight */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="executive-panel p-8 lg:p-12"
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                    Meet Your Dedicated Team
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Every partnership includes a dedicated team of senior engineers, architects, and a virtual CTO who understand your business goals and technical landscape.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { role: "Solutions Architect", exp: "15+ years avg" },
                      { role: "Site Reliability Engineer", exp: "10+ years avg" },
                      { role: "Security Engineer", exp: "12+ years avg" },
                      { role: "DevOps Specialist", exp: "8+ years avg" },
                    ].map((member) => (
                      <div key={member.role} className="p-4 bg-muted/50 rounded-xl">
                        <div className="font-medium text-foreground">{member.role}</div>
                        <div className="text-sm text-muted-foreground">{member.exp}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="relative">
                    <div className="w-64 h-64 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <Users className="w-24 h-24 text-primary" />
                    </div>
                    <div className="absolute -top-4 -right-4 px-4 py-2 bg-primary text-white rounded-full text-sm font-medium">
                      200+ Engineers
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="cta" className="py-24 lg:py-32 bg-gradient-to-br from-[hsl(var(--deep-navy))] via-[hsl(220,49%,12%)] to-[hsl(var(--deep-navy))] relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-64 bg-gradient-to-b from-primary/20 to-transparent" />
          </div>

          <div className="container mx-auto px-8 lg:px-16 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full border border-primary/30 text-primary mb-8">
                <MessageSquare className="w-4 h-4" />
                <span className="text-sm font-medium">Start the Conversation</span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Operations?
              </h2>
              <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed">
                Schedule a confidential executive briefing to discuss your specific challenges and how we can help you achieve your technology goals.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <Link to="/contact">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-10 py-6 text-lg gap-2 group">
                    Schedule Executive Briefing
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/demo">
                  <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 px-10 py-6 text-lg gap-2">
                    <Play className="w-5 h-5" />
                    Watch Platform Demo
                  </Button>
                </Link>
              </div>

              {/* Contact Options */}
              <div className="grid md:grid-cols-3 gap-6 mt-16">
                {[
                  { icon: MessageSquare, label: "Email Us", value: "executives@hitechlogic.com", href: "mailto:executives@hitechlogic.com" },
                  { icon: Briefcase, label: "Sales Inquiries", value: "sales@hitechlogic.com", href: "mailto:sales@hitechlogic.com" },
                  { icon: ExternalLink, label: "Visit Website", value: "hitechlogic.com", href: "/" },
                ].map((contact) => (
                  <a
                    key={contact.label}
                    href={contact.href}
                    className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
                  >
                    <contact.icon className="w-8 h-8 text-primary mb-3 mx-auto group-hover:scale-110 transition-transform" />
                    <div className="text-white/40 text-sm mb-1">{contact.label}</div>
                    <div className="text-white font-medium">{contact.value}</div>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 bg-[hsl(var(--deep-navy))] border-t border-white/10">
          <div className="container mx-auto px-8 lg:px-16">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-3">
                <img src="/main-logo.svg" alt="HiTechLogic" className="w-8 h-8 brightness-0 invert" />
                <span className="text-white/60 text-sm">© 2024 HiTechLogic. Confidential Presentation.</span>
              </div>
              <div className="flex items-center gap-6">
                <Link to="/legal/privacy" className="text-white/40 hover:text-white text-sm transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/legal/terms" className="text-white/40 hover:text-white text-sm transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
};

export default Presentation;
