import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { SEO } from "@/components/SEO";
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  LifeBuoy,
  CheckCircle2,
  Clock,
  Shield,
  Users,
  ArrowRight,
  MessageSquare,
  Globe,
} from "lucide-react";

const challengeOptions = [
  "Reducing alert noise",
  "Improving MTTR",
  "Automation & runbooks",
  "Identity governance",
  "Cost & capacity planning",
  "Scaling delivery velocity",
];

const contactHighlights = [
  "5-minute response for critical incidents",
  "Executive-level automation and strategy partners",
  "Global reliability coverage with distributed engineering pods",
  "Confidence-grade runbooks with human governance",
];

const contactInfo = [
  { icon: Mail, label: "Email", value: "hello@hitechlogic.com", href: "mailto:hello@hitechlogic.com" },
  { icon: Phone, label: "Phone", value: "+1 (888) 448-3244", href: "tel:+18884483244" },
  { icon: MapPin, label: "Location", value: "San Francisco, CA", href: "https://maps.google.com/?q=San+Francisco,+CA" },
];

const faqs = [
  {
    question: "How quickly can you respond to a critical incident?",
    answer: "For our managed clients, we guarantee 5-minute response for critical incidents and 15 minutes for all other support tickets. Our 24/7 NOC (Network Operations Center) monitors your infrastructure continuously.",
  },
  {
    question: "Do you work with our existing tools and processes?",
    answer: "Absolutely. We integrate with your current stack rather than forcing replacements. Whether you're using AWS, Azure, Kubernetes, Datadog, Splunk, or any other enterprise tools, we enhance what you have while maintaining your operational preferences.",
  },
  {
    question: "What's the process for getting started?",
    answer: "We begin with a comprehensive assessment (usually 1-2 weeks), followed by strategic planning, implementation, and ongoing optimization. Most clients see measurable improvements within 30 days.",
  },
  {
    question: "Do you offer proof-of-concept or trial periods?",
    answer: "Yes, we offer free 30-day proof-of-concept deployments for enterprise clients. This allows you to experience our operational excellence firsthand without any long-term commitment.",
  },
  {
    question: "What makes you different from other managed services providers?",
    answer: "We go beyond monitoring and alerting to make infrastructure truly autonomous. Our AI-driven remediation, zero-compromise reliability approach, and partnership-first mentality set us apart from traditional MSPs.",
  },
];

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://hitechlogic.com/#organization",
  "name": "HiTechLogic",
  "url": "https://hitechlogic.com",
  "logo": "https://hitechlogic.com/logo.png",
  "description": "Enterprise-grade AI-powered infrastructure reliability, automation, and managed operations. Reduce alert noise by 80-90%, accelerate MTTR by 85%, and achieve 99.99% uptime.",
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+1-888-448-3244",
      "contactType": "sales",
      "email": "contact@hitechlogic.com",
      "availableLanguage": ["English"],
      "contactOption": "TollFree"
    },
    {
      "@type": "ContactPoint",
      "telephone": "+1-888-448-3244",
      "contactType": "technical support",
      "email": "support@hitechlogic.com",
      "availableLanguage": ["English"],
      "hoursAvailable": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59"
      }
    }
  ]
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": "https://hitechlogic.com/contact/#contactpage",
  "url": "https://hitechlogic.com/contact",
  "name": "Contact HiTechLogic | 24/7 Enterprise Support & Technical Consulting",
  "description": "Connect with our infrastructure reliability experts. 24/7 support, technical consulting, and strategic partnerships. Get enterprise-grade infrastructure operations.",
  "inLanguage": "en-US",
  "isPartOf": {
    "@id": "https://hitechlogic.com/#website"
  },
  "about": {
    "@id": "https://hitechlogic.com/#organization"
  },
  "mainEntity": {
    "@id": "https://hitechlogic.com/#organization"
  },
  "breadcrumb": {
    "@id": "https://hitechlogic.com/contact/#breadcrumb"
  },
  "potentialAction": {
    "@type": "CommunicateAction",
    "target": "https://hitechlogic.com/contact",
    "description": "Contact HiTechLogic for enterprise infrastructure support and consulting"
  }
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://hitechlogic.com/#localbusiness",
  "name": "HiTechLogic",
  "description": "Enterprise infrastructure management and cloud operations services",
  "url": "https://hitechlogic.com",
  "telephone": "+1-888-448-3244",
  "email": "contact@hitechlogic.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "San Francisco",
    "addressRegion": "CA",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 37.7749,
    "longitude": -122.4194
  },
  "areaServed": "Worldwide",
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 37.7749,
      "longitude": -122.4194
    },
    "geoRadius": 20000000
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "HiTechLogic Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "24/7 Infrastructure Support",
          "description": "Round-the-clock enterprise infrastructure monitoring and support"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Technical Consulting",
          "description": "Expert consulting for infrastructure reliability and operations"
        }
      }
    ]
  },
  "openingHours": "Mo-Su 00:00-23:59",
  "priceRange": "$$$"
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://hitechlogic.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Contact",
      "item": "https://hitechlogic.com/contact"
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How quickly can HiTechLogic respond to a critical incident?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For our managed clients, we guarantee 5-minute response for critical incidents and 15 minutes for all other support tickets. Our 24/7 NOC (Network Operations Center) monitors your infrastructure continuously."
      }
    },
    {
      "@type": "Question",
      "name": "Do you work with existing enterprise tools and processes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. We integrate with your current stack rather than forcing replacements. Whether you're using AWS, Azure, Kubernetes, Datadog, Splunk, or any other enterprise tools, we enhance what you have while maintaining your operational preferences."
      }
    },
    {
      "@type": "Question",
      "name": "What's the process for getting started with HiTechLogic?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We begin with a comprehensive assessment (usually 1-2 weeks), followed by strategic planning, implementation, and ongoing optimization. Most clients see measurable improvements within 30 days."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer proof-of-concept or trial periods?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we offer free 30-day proof-of-concept deployments for enterprise clients. This allows you to experience our operational excellence firsthand without any long-term commitment."
      }
    },
    {
      "@type": "Question",
      "name": "What makes HiTechLogic different from traditional managed service providers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We go beyond monitoring and alerting to make infrastructure truly autonomous. Our AI-driven remediation, zero-compromise reliability approach, and partnership-first mentality set us apart from traditional MSPs."
      }
    }
  ]
};

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedChallenges, setSelectedChallenges] = useState<string[]>([]);

  const toggleChallenge = (value: string) => {
    setSelectedChallenges((prev) => (prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      toast({
        title: "Request received",
        description: "A member of our leadership team will reach out shortly.",
      });
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
      setSelectedChallenges([]);
    }, 1000);
  };

  return (
    <>
      <SEO
        title="Contact HiTechLogic | 24/7 Enterprise Support & Technical Consulting"
        description="Connect with our infrastructure reliability experts. 24/7 support, technical consulting, and strategic partnerships. Get enterprise-grade infrastructure operations."
        keywords="contact HiTechLogic, enterprise support, 24/7 NOC, technical consulting, infrastructure experts, managed services partnership, SRE support"
        canonical="https://hitechlogic.com/contact"
        schema={[organizationSchema, contactPageSchema, localBusinessSchema, breadcrumbSchema, faqSchema]}
      />
      <Layout>
        <section className="relative overflow-hidden bg-gradient-to-br from-[hsl(var(--deep-navy))] via-[hsl(var(--graphite))] to-[hsl(var(--deep-navy))]">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvZz48L3N2Zz4=')] opacity-20" />
          <div className="relative mx-auto w-full max-w-6xl px-6 pt-32 pb-20 sm:pt-40 sm:pb-28">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg">
                <LifeBuoy className="h-7 w-7 text-[hsl(var(--accent-blue))]" />
              </div>
              <span className="text-sm font-medium text-white/90 tracking-wide">Contact HiTechLogic</span>
            </div>
            <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight text-white">
              How Can We{" "}
              <span className="text-[hsl(var(--accent-blue))] block sm:inline">Help You Today?</span>
            </h1>
            <p className="mt-6 text-xl text-white/80 max-w-3xl leading-relaxed">
              Whether you need urgent incident support, strategic infrastructure planning, or operational excellence,
              our enterprise team is ready to deliver calm, capable assistance with 5-minute response times.
            </p>
            <div className="mt-10">
              <Button variant="hero" size="xl" asChild className="shadow-[0_20px_45px_-20px_rgba(139,92,246,0.8)] hover:shadow-[0_25px_45px_-12px_rgba(139,92,246,0.9)] hover:scale-105 transition-all duration-300">
                <Link to="#consultation" className="flex items-center gap-2 group">
                  <Calendar className="h-5 w-5" />
                  <span>Schedule Consultation</span>
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
            <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {[
                { label: "Response Time", value: "5 min", icon: Clock },
                { label: "Uptime SLA", value: "99.99%", icon: Shield },
                { label: "Global Reach", value: "24/7", icon: Globe },
                { label: "Client Success", value: "500+", icon: Users },
              ].map((metric) => (
                <div key={metric.label} className="text-center group px-4 py-2">
                  <div className="flex justify-center mb-3">
                    <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[hsl(var(--accent-blue))]/10 to-white/5 group-hover:from-[hsl(var(--accent-blue))]/20 group-hover:to-white/10 transition-all duration-300">
                      <metric.icon className="h-5 w-5 md:h-6 md:w-6 text-white" />
                    </div>
                  </div>
                  <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white group-hover:scale-110 transition-transform duration-300">{metric.value}</div>
                  <div className="mt-1 md:mt-2 text-xs md:text-sm font-medium text-slate-300">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="consultation" className="section-space bg-slate-50">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="grid gap-12 lg:grid-cols-[1.05fr,0.95fr] items-start">
              <div className="space-y-6 order-2 lg:order-1">
                <div className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-2 text-[hsl(var(--navy))] font-semibold">
                  <Calendar className="h-4 w-4" />
                  Consultation & Support
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[hsl(var(--navy))]">
                  Let’s architect your next era.
                  <span className="block bg-gradient-to-r from-[hsl(var(--accent-blue))] to-[hsl(var(--signal-purple))] bg-clip-text text-transparent">
                    Reliable, autonomous, and executive-backed.
                  </span>
                </h2>
                <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                  Share the outcomes you need and our enterprise specialists will design the automated programs, strategic guardrails,
                  and operations advisory that keeps your infrastructure ahead of disruption.
                </p>
                <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2">
                  {contactHighlights.map((item) => (
                    <div key={item} className="flex gap-3 rounded-xl border border-slate-200 bg-white/90 p-3 md:p-4 text-sm text-slate-600">
                      <CheckCircle2 className="h-5 w-5 text-[hsl(var(--accent-blue))] flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white/90 p-4 md:p-5 text-sm text-slate-600">
                  {contactInfo.map((contact) => (
                    <a
                      key={contact.label}
                      href={contact.href}
                      className="flex items-center gap-3 py-2 border-b border-slate-100 last:border-b-0 hover:text-[hsl(var(--accent-blue))] transition-colors"
                    >
                      <contact.icon className="h-5 w-5 text-slate-500 flex-shrink-0" />
                      <div>
                        <p className="text-[0.65rem] uppercase tracking-[0.35em] text-slate-400">{contact.label}</p>
                        <p className="font-semibold text-[hsl(var(--navy))]">{contact.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <Card className="space-y-6 border border-slate-200 bg-white p-6 md:p-8 shadow-2xl">
                  <div className="space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">Need a focused dialogue?</p>
                    <h3 className="text-xl md:text-2xl font-bold text-[hsl(var(--navy))]">Request a Strategy Session</h3>
                    <p className="text-sm text-slate-600">
                      Fill out your details, tell us your top priorities, and we’ll respond with a curated plan within one business day.
                    </p>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input id="fullName" name="fullName" placeholder="Jordan Nelson" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" name="email" type="email" placeholder="jordan@company.com" required />
                    </div>
                    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="company">Company *</Label>
                        <Input id="company" name="company" placeholder="Northwind Bank" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="role">Role *</Label>
                        <Input id="role" name="role" placeholder="VP Infrastructure" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Current infrastructure challenges *</Label>
                      <div className="grid gap-3 grid-cols-1 sm:grid-cols-2">
                        {challengeOptions.map((option) => (
                          <label key={option} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-3 hover:border-indigo-300 transition-colors cursor-pointer">
                            <Checkbox
                              checked={selectedChallenges.includes(option)}
                              onCheckedChange={() => toggleChallenge(option)}
                              className="mt-1"
                            />
                            <span className="text-sm text-slate-700 leading-relaxed">{option}</span>
                          </label>
                        ))}
                        {selectedChallenges.map((challenge) => (
                          <input key={challenge} name="challenges[]" type="hidden" value={challenge} />
                        ))}
                      </div>
                    </div>
                    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="best-time">Preferred time for call *</Label>
                        <Select name="best-time" required>
                          <SelectTrigger>
                            <SelectValue placeholder="Select time window" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="morning">Morning (8–11am EST)</SelectItem>
                            <SelectItem value="midday">Midday (11am–2pm EST)</SelectItem>
                            <SelectItem value="afternoon">Afternoon (2–5pm EST)</SelectItem>
                            <SelectItem value="evening">Evening (5–7pm EST)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="timeline">Urgency level *</Label>
                        <Select name="timeline" required>
                          <SelectTrigger>
                            <SelectValue placeholder="Select priority" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="immediate">Immediate assistance needed</SelectItem>
                            <SelectItem value="week">This week if possible</SelectItem>
                            <SelectItem value="month">This month</SelectItem>
                            <SelectItem value="quarter">Planning for future quarters</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="context">Additional context</Label>
                      <Textarea
                        id="context"
                        name="context"
                        placeholder="Share details about your current infrastructure, recent challenges, planned initiatives, or anything else that might help us prepare for our discussion."
                        rows={3}
                        className="resize-none"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="budget">Budget / Investment Range</Label>
                      <Input id="budget" name="budget" placeholder="$1M+" />
                    </div>
                    <div>
                      <Button
                        className="w-full bg-[hsl(var(--accent-blue))] hover:bg-[hsl(var(--accent-blue))]/80 h-12 text-base font-semibold"
                        disabled={isSubmitting}
                        type="submit"
                      >
                        {isSubmitting ? "Scheduling..." : "Schedule Strategy Consultation"}
                      </Button>
                      <p className="text-center text-sm font-medium text-slate-500 mt-2">We'll respond within one business day</p>
                    </div>
                  </form>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="section-space bg-white">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white text-[hsl(var(--navy))] font-semibold mb-6">
                <MessageSquare className="h-4 w-4" />
                <span>Frequently Asked</span>
              </div>
              <h2 className="text-4xl font-black text-slate-900 mb-8">Common Questions</h2>
              <p className="text-lg text-slate-600">Quick answers to the most frequently asked questions about our services and processes.</p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index} className="border-2 border-slate-100 overflow-hidden group">
                  <details className="group">
                    <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-slate-50 transition-colors">
                      <span className="font-semibold text-slate-900 text-left pr-8">{faq.question}</span>
                      <ArrowRight className="h-5 w-5 text-slate-500 transition-transform group-open:rotate-90" />
                    </summary>
                    <div className="px-6 pb-6">
                      <div className="pt-4 border-t border-slate-100">
                        <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  </details>
                </Card>
              ))}
            </div>
          </div>
        </section>

      </Layout>
    </>
  );
}
