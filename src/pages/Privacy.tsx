import { Layout } from "@/components/layout/Layout";
import { Card } from "@/components/ui/card";
import { SEO } from "@/components/SEO";

export default function Privacy() {
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
    "@id": "https://hitechlogic.com/privacy/#webpage",
    "url": "https://hitechlogic.com/privacy",
    "name": "Privacy Policy | HiTechLogic",
    "description": "HiTechLogic Privacy Policy. Learn how we collect, use, protect, and handle your personal information and data.",
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
    "@id": "https://hitechlogic.com/privacy/#breadcrumb",
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
        "name": "Privacy Policy",
        "item": "https://hitechlogic.com/privacy"
      }
    ]
  };

  return (
    <>
      <SEO
        title="Privacy Policy | HiTechLogic"
        description="HiTechLogic Privacy Policy. Learn how we collect, use, protect, and handle your personal information and data. Your privacy is our priority."
        keywords="privacy policy, data protection, personal information, GDPR compliance, data security, HiTechLogic privacy"
        canonical="https://hitechlogic.com/privacy"
        schema={[organizationSchema, webpageSchema, breadcrumbSchema]}
      />
      <Layout>
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">Privacy Policy</h1>
            <p className="text-muted-foreground mb-12">Last updated: March 2024</p>

            <div className="space-y-8">
              <Card className="glass-card p-8">
                <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
                <p className="text-muted-foreground mb-4">
                  We collect information you provide directly to us, such as when you create an account, use our services, or communicate with us.
                </p>
                <p className="text-muted-foreground">
                  This includes: name, email address, company information, log data, metrics, and usage information necessary to provide our services.
                </p>
              </Card>

              <Card className="glass-card p-8">
                <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
                <p className="text-muted-foreground mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send technical notices and support messages</li>
                  <li>Respond to your comments and questions</li>
                  <li>Monitor and analyze trends and usage</li>
                </ul>
              </Card>

              <Card className="glass-card p-8">
                <h2 className="text-2xl font-bold mb-4">3. Information Sharing</h2>
                <p className="text-muted-foreground">
                  We do not sell your personal information. We may share your information with third-party service providers who perform services on our behalf, with your consent, or as required by law.
                </p>
              </Card>

              <Card className="glass-card p-8">
                <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
                <p className="text-muted-foreground">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </Card>

              <Card className="glass-card p-8">
                <h2 className="text-2xl font-bold mb-4">5. Your Rights</h2>
                <p className="text-muted-foreground mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Object to processing of your data</li>
                  <li>Export your data</li>
                </ul>
              </Card>

              <Card className="glass-card p-8">
                <h2 className="text-2xl font-bold mb-4">6. Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have questions about this Privacy Policy, please contact us at privacy@hitechlogic.com
                </p>
              </Card>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}