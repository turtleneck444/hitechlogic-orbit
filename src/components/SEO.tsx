import { Helmet } from "react-helmet-async";

export interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  twitterCard?: string;
  schema?: object | object[];
}

export function SEO({
  title,
  description,
  keywords,
  canonical,
  ogType = "website",
  ogImage = "https://hitechlogic.com/og-image.jpg",
  twitterCard = "summary_large_image",
  schema
}: SEOProps) {
  const fullTitle = title.includes("HiTechLogic") ? title : `${title} | HiTechLogic`;
  const siteUrl = "https://hitechlogic.com";
  const fullCanonical = canonical || window.location.href;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonical} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="HiTechLogic" />
      
      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:url" content={fullCanonical} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="HiTechLogic" />
      
      {/* Schema.org JSON-LD */}
      {schema && (
        Array.isArray(schema) ? (
          schema.map((schemaItem, index) => (
            <script key={index} type="application/ld+json">
              {JSON.stringify(schemaItem)}
            </script>
          ))
        ) : (
          <script type="application/ld+json">
            {JSON.stringify(schema)}
          </script>
        )
      )}
    </Helmet>
  );
}
