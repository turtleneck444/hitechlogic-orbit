import { Layout } from "@/components/layout/Layout";
import { Card } from "@/components/ui/card";
import { SEO } from "@/components/SEO";

export default function Terms() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://hitechlogic.com/#organization",
    "name": "HiTechLogic",
    "url": "https://hitechlogic.com",
    "logo": "https://hitechlogic.com/logo.png"
  };

  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://hitechlogic.com/terms/#webpage",
    "url": "https://hitechlogic.com/terms",
    "name": "Terms of Service | HiTechLogic",
    "description": "HiTechLogic Terms of Service. Read our terms and conditions for using HiTechLogic managed infrastructure services.",
    "inLanguage": "en-US",
    "isPartOf": {
      "@id": "https://hitechlogic.com/#website"
    },
    "about": {
      "@id": "https://hitechlogic.com/#organization"
    },
    "datePublished": "2024-03-01",
    "dateModified": "2024-03-01"
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://hitechlogic.com/terms/#breadcrumb",
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
        "name": "Terms of Service",
        "item": "https://hitechlogic.com/terms"
      }
    ]
  };

  return (
    <>
      <SEO
        title="Terms of Service | HiTechLogic"
        description="HiTechLogic Terms of Service. Read our terms and conditions for using HiTechLogic managed infrastructure and cloud operations services."
        keywords="terms of service, terms and conditions, user agreement, service agreement, HiTechLogic terms"
        canonical="https://hitechlogic.com/terms"
        schema={[organizationSchema, webpageSchema, breadcrumbSchema]}
      />
      <Layout>
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">Terms of Service</h1>
            <p className="text-muted-foreground mb-12">Last updated: March 2024</p>

            <div className="space-y-8">
              <Card className="glass-card p-8">
                <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground">
                  By accessing and using HiTechLogic's services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                </p>
              </Card>

              <Card className="glass-card p-8">
                <h2 className="text-2xl font-bold mb-4">2. Description of Service</h2>
                <p className="text-muted-foreground">
                  HiTechLogic provides an AI-powered operations platform including observability, automated remediation, and infrastructure management tools. We reserve the right to modify or discontinue services with reasonable notice.
                </p>
              </Card>

              <Card className="glass-card p-8">
                <h2 className="text-2xl font-bold mb-4">3. User Responsibilities</h2>
                <p className="text-muted-foreground mb-4">You agree to:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Provide accurate account information</li>
                  <li>Maintain the security of your account</li>
                  <li>Comply with all applicable laws and regulations</li>
                  <li>Not misuse or attempt to disrupt our services</li>
                  <li>Respect intellectual property rights</li>
                </ul>
              </Card>

              <Card className="glass-card p-8">
                <h2 className="text-2xl font-bold mb-4">4. Payment Terms</h2>
                <p className="text-muted-foreground">
                  Fees are charged based on your selected plan. Payment is due as specified in your subscription agreement. We reserve the right to change pricing with reasonable advance notice.
                </p>
              </Card>

              <Card className="glass-card p-8">
                <h2 className="text-2xl font-bold mb-4">5. Intellectual Property</h2>
                <p className="text-muted-foreground">
                  All content, features, and functionality of HiTechLogic services are owned by HiTechLogic and protected by intellectual property laws. You retain ownership of your data.
                </p>
              </Card>

              <Card className="glass-card p-8">
                <h2 className="text-2xl font-bold mb-4">6. Limitation of Liability</h2>
                <p className="text-muted-foreground">
                  HiTechLogic provides services "as is" without warranties. We are not liable for indirect, incidental, or consequential damages arising from use of our services, to the maximum extent permitted by law.
                </p>
              </Card>

              <Card className="glass-card p-8">
                <h2 className="text-2xl font-bold mb-4">7. Termination</h2>
                <p className="text-muted-foreground">
                  Either party may terminate the agreement with written notice. Upon termination, you must stop using our services and we will provide data export capabilities for a reasonable period.
                </p>
              </Card>

              <Card className="glass-card p-8">
                <h2 className="text-2xl font-bold mb-4">8. Contact Information</h2>
                <p className="text-muted-foreground">
                  For questions about these Terms, contact us at legal@hitechlogic.com
                </p>
              </Card>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}