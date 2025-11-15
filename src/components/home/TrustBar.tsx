import { Shield, CheckCircle2, Award, Lock } from "lucide-react";

export function TrustBar() {
  const certifications = [
    {
      name: "SOC 2 Type II",
      description: "Certified",
      icon: Shield,
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      name: "HIPAA",
      description: "Compliant",
      icon: Lock,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50"
    },
    {
      name: "PCI DSS",
      description: "Certified",
      icon: CheckCircle2,
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      name: "GDPR",
      description: "Compliant",
      icon: Award,
      color: "text-indigo-600",
      bgColor: "bg-indigo-50"
    },
    {
      name: "ISO 27001",
      description: "Certified",
      icon: Shield,
      color: "text-rose-600",
      bgColor: "bg-rose-50"
    }
  ];

  const marketplaces = [
    {
      name: "AWS Marketplace",
      logo: "aws",
    },
    {
      name: "Azure Marketplace",
      logo: "azure",
    },
    {
      name: "GCP Marketplace",
      logo: "gcp",
    }
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-white to-slate-50/50 border-y border-slate-200/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 border border-[hsl(var(--accent-blue))]/20 mb-3">
              <Shield className="h-3.5 w-3.5 text-[hsl(var(--accent-blue))]" />
              <span className="text-xs font-bold text-[hsl(var(--navy))] uppercase tracking-wider">Enterprise Trust & Compliance</span>
            </div>
            <p className="text-sm text-slate-600">
              Security and compliance built into our agents from day one
            </p>
          </div>

          {/* Certifications Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <div
                  key={index}
                  className="group relative flex flex-col items-center p-4 rounded-xl bg-white border-2 border-slate-200 hover:border-[hsl(var(--accent-blue))]/40 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className={`w-12 h-12 rounded-lg ${cert.bgColor} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`h-6 w-6 ${cert.color}`} />
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-bold text-[hsl(var(--navy))] mb-1">
                      {cert.name}
                    </div>
                    <div className="text-xs text-slate-500 font-semibold">
                      {cert.description}
                    </div>
                  </div>
                  {/* Verified badge */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                    <CheckCircle2 className="h-4 w-4 text-white" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Cloud Marketplace Availability */}
          <div className="border-t border-slate-200 pt-6">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <span className="text-sm font-semibold text-slate-600 uppercase tracking-wider">
                Available on:
              </span>
              <div className="flex items-center gap-6">
                {marketplaces.map((marketplace, index) => (
                  <div
                    key={index}
                    className="group flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 hover:border-[hsl(var(--accent-blue))]/40 hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-6 h-6 rounded bg-slate-100 flex items-center justify-center group-hover:bg-[hsl(var(--accent-blue))]/10 transition-colors">
                      {marketplace.logo === "aws" && (
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M6.76 10.17c0 .38.04.68.11.92.08.23.18.48.32.74.05.08.07.15.07.22 0 .09-.06.18-.17.27l-.57.38c-.08.06-.17.08-.25.08-.09 0-.19-.05-.28-.14-.14-.15-.25-.3-.34-.47-.09-.17-.18-.36-.29-.58-.73.86-1.64 1.29-2.73 1.29-.78 0-1.4-.22-1.85-.67-.45-.45-.68-1.05-.68-1.79 0-.79.28-1.43.84-1.91.56-.48 1.31-.73 2.24-.73.31 0 .63.03.97.08.34.05.69.12 1.06.21v-.69c0-.72-.15-1.22-.45-1.52-.31-.3-.83-.45-1.58-.45-.34 0-.69.04-1.05.12-.36.08-.71.18-1.05.3-.16.06-.27.09-.34.11-.07.02-.12.03-.15.03-.13 0-.2-.09-.2-.29v-.46c0-.15.02-.26.07-.33.05-.07.14-.14.29-.21.34-.18.75-.32 1.23-.44.48-.12.99-.17 1.53-.17 1.17 0 2.02.27 2.56.8.53.53.8 1.34.8 2.43v3.2zm-3.77 1.41c.3 0 .61-.05.94-.17.33-.11.62-.31.87-.58.15-.17.26-.36.32-.58.06-.22.1-.48.10-.78v-.38c-.27-.07-.56-.12-.86-.17-.3-.04-.6-.06-.89-.06-.64 0-1.11.13-1.42.38-.31.25-.47.61-.47 1.08 0 .44.11.77.34 1 .23.24.56.36 1.01.36l.06-.1zm7.49.96c-.17 0-.28-.03-.35-.09-.07-.06-.13-.19-.19-.39l-2.11-6.94c-.06-.19-.09-.32-.09-.39 0-.15.08-.24.23-.24h.96c.18 0 .3.03.36.09.07.06.12.19.18.39l1.51 5.95 1.4-5.95c.05-.2.11-.33.17-.39.07-.06.19-.09.37-.09h.78c.18 0 .3.03.37.09.07.06.13.19.17.39l1.42 6.03 1.55-6.03c.06-.2.12-.33.18-.39.07-.06.19-.09.36-.09h.91c.15 0 .23.08.23.24 0 .05-.01.1-.02.16-.01.06-.03.13-.06.23l-2.16 6.94c-.06.2-.12.33-.19.39-.07.06-.18.09-.35.09h-.84c-.18 0-.3-.03-.37-.09-.07-.06-.13-.19-.17-.4l-1.39-5.81-1.38 5.81c-.05.2-.11.33-.17.4-.07.06-.19.09-.37.09h-.84l-.16.02zm11.86.24c-.48 0-.96-.06-1.43-.16-.47-.11-.83-.23-1.07-.37-.15-.09-.25-.19-.29-.29-.04-.1-.06-.21-.06-.32v-.48c0-.19.07-.29.21-.29.05 0 .11.01.16.03.05.02.13.05.23.09.32.14.67.25 1.04.33.37.08.74.12 1.11.12.59 0 1.04-.1 1.37-.31.33-.21.49-.51.49-.91 0-.27-.09-.49-.26-.67-.17-.18-.5-.34-.98-.49l-1.42-.44c-.72-.23-1.25-.56-1.58-.99-.33-.43-.5-.91-.50-1.44 0-.42.09-.79.27-1.11.18-.32.42-.6.72-.83.3-.23.65-.41 1.06-.53.41-.12.84-.18 1.3-.18.21 0 .42.01.63.04.21.03.41.07.61.11.19.05.38.1.56.16.18.06.33.13.45.19.11.07.2.14.26.22.06.08.09.18.09.31v.44c0 .19-.07.29-.21.29-.08 0-.21-.04-.38-.11-.57-.26-1.21-.39-1.92-.39-.54 0-.96.09-1.26.26-.3.18-.45.45-.45.83 0 .27.09.5.28.68.19.18.54.36 1.06.52l1.39.44c.71.23 1.22.55 1.54.96.32.41.48.88.48 1.4 0 .43-.09.81-.27 1.15-.18.34-.43.63-.75.87-.32.24-.71.42-1.16.55-.47.13-.96.19-1.48.19l.03.03z"/>
                        </svg>
                      )}
                      {marketplace.logo === "azure" && (
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M5.483 17.08l3.633.43L13.73 3.584l-3.63-.43-4.617 13.926zM18 21h-7.225l2.47-5.878L7.973 14.5 4.539 3 11 3.014l7 17.986z"/>
                        </svg>
                      )}
                      {marketplace.logo === "gcp" && (
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12.19 2.38a9.344 9.344 0 0 0-9.234 6.893c.053-.02-.055.013 0 0-1.313.91-2.184 2.384-2.184 4.071 0 2.724 2.21 4.934 4.935 4.934h10.164c3.044 0 5.513-2.468 5.513-5.512 0-2.76-2.027-5.04-4.67-5.445a9.344 9.344 0 0 0-4.524-4.94zm-.102 2.03c2.235-.21 4.384.768 5.848 2.525l.427.515.684-.02c1.94 0 3.51 1.57 3.51 3.51 0 1.94-1.57 3.51-3.51 3.51H5.882c-1.624 0-2.94-1.316-2.94-2.94 0-.927.436-1.75 1.113-2.28l.582-.453.127-.697a7.342 7.342 0 0 1 7.325-6.17z"/>
                        </svg>
                      )}
                    </div>
                    <span className="text-sm font-semibold text-slate-700 group-hover:text-[hsl(var(--accent-blue))] transition-colors">
                      {marketplace.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
