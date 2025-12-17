import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { CheckCircle2, ArrowRight, Mail, Clock, Calendar } from "lucide-react";

const FormSuccess = () => {
  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://hitechlogic.com/success/#webpage",
    "url": "https://hitechlogic.com/success",
    "name": "Thank You - Form Submitted Successfully | HiTechLogic",
    "description": "Thank you for contacting HiTechLogic. Your message has been received and our team will respond shortly.",
    "inLanguage": "en-US",
    "isPartOf": {
      "@id": "https://hitechlogic.com/#website"
    }
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
        "name": "Success",
        "item": "https://hitechlogic.com/success"
      }
    ]
  };

  return (
    <>
      <SEO
        title="Thank You - Form Submitted Successfully | HiTechLogic"
        description="Thank you for contacting HiTechLogic. Your message has been received and our team will respond within one business day."
        canonical="https://hitechlogic.com/success"
        schema={[webpageSchema, breadcrumbSchema]}
      />
      <Layout>
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[hsl(var(--deep-navy))] via-[hsl(var(--graphite))] to-[hsl(var(--deep-navy))]">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvZz48L3N2Zz4=')] opacity-20" />
          
          <div className="relative z-10 container mx-auto px-6 py-20">
            <div className="max-w-2xl mx-auto text-center">
              {/* Success Icon */}
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-[hsl(var(--accent-blue))]/20 rounded-full blur-xl animate-pulse" />
                  <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-[hsl(var(--accent-blue))] to-[hsl(var(--signal-purple))] shadow-2xl">
                    <CheckCircle2 className="h-12 w-12 text-white" />
                  </div>
                </div>
              </div>

              {/* Main Message */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Thank You!
              </h1>
              <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed">
                Your message has been received. Our enterprise team will review your request and respond within one business day.
              </p>

              {/* What's Next Card */}
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-8 mb-10">
                <h2 className="text-xl font-semibold text-white mb-6">What happens next?</h2>
                <div className="grid gap-4 text-left">
                  <div className="flex items-start gap-4 p-4 rounded-lg bg-white/5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[hsl(var(--accent-blue))]/20 flex-shrink-0">
                      <Mail className="h-5 w-5 text-[hsl(var(--accent-blue))]" />
                    </div>
                    <div>
                      <p className="font-medium text-white">Confirmation Email</p>
                      <p className="text-sm text-white/70">You'll receive a confirmation email with your request details.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-lg bg-white/5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[hsl(var(--accent-blue))]/20 flex-shrink-0">
                      <Clock className="h-5 w-5 text-[hsl(var(--accent-blue))]" />
                    </div>
                    <div>
                      <p className="font-medium text-white">Expert Review</p>
                      <p className="text-sm text-white/70">Our infrastructure specialists will review your requirements.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-lg bg-white/5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[hsl(var(--accent-blue))]/20 flex-shrink-0">
                      <Calendar className="h-5 w-5 text-[hsl(var(--accent-blue))]" />
                    </div>
                    <div>
                      <p className="font-medium text-white">Personalized Response</p>
                      <p className="text-sm text-white/70">We'll reach out with a tailored plan within 24 hours.</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/" className="flex items-center gap-2">
                    Return to Home
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="border-white/20 text-white hover:bg-white/10">
                  <Link to="/services">
                    Explore Our Services
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default FormSuccess;
