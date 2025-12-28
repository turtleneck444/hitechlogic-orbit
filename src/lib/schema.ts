/**
 * Advanced Schema.org Structured Data Utilities
 * Comprehensive schema markup for SEO and rich search results
 */

const SITE_URL = "https://hitechlogic.com";
const SITE_NAME = "HiTechLogic";
const LOGO_URL = `${SITE_URL}/logo.png`;
const OG_IMAGE_URL = `${SITE_URL}/og-image.png`;
const PHONE = "+1-888-448-3244";
const EMAIL = "contact@hitechlogic.com";

// ============================================
// BASE ORGANIZATION SCHEMA
// ============================================
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  "name": SITE_NAME,
  "alternateName": "HiTechLogic Inc.",
  "legalName": "HiTechLogic, Inc.",
  "description": "Enterprise-grade AI-powered infrastructure reliability, automation, and managed operations. Reduce alert noise by 80-90%, accelerate MTTR by 85%, and achieve 99.99% uptime with intelligent DevOps solutions.",
  "url": SITE_URL,
  "logo": {
    "@type": "ImageObject",
    "@id": `${SITE_URL}/#logo`,
    "url": LOGO_URL,
    "contentUrl": LOGO_URL,
    "width": 400,
    "height": 400,
    "caption": "HiTechLogic Logo"
  },
  "image": {
    "@type": "ImageObject",
    "url": OG_IMAGE_URL,
    "width": 1200,
    "height": 630
  },
  "foundingDate": "2015",
  "foundingLocation": {
    "@type": "Place",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "San Francisco",
      "addressRegion": "CA",
      "addressCountry": "US"
    }
  },
  "slogan": "Infrastructure Operations Perfected",
  "sameAs": [
    "https://linkedin.com/company/hitechlogic",
    "https://twitter.com/hitechlogic",
    "https://github.com/hitechlogic"
  ],
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": PHONE,
      "contactType": "sales",
      "email": "sales@hitechlogic.com",
      "availableLanguage": ["English"],
      "contactOption": "TollFree",
      "areaServed": "Worldwide"
    },
    {
      "@type": "ContactPoint",
      "telephone": PHONE,
      "contactType": "customer support",
      "email": "support@hitechlogic.com",
      "availableLanguage": ["English"],
      "hoursAvailable": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59"
      }
    },
    {
      "@type": "ContactPoint",
      "telephone": PHONE,
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
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "100 California Street",
    "addressLocality": "San Francisco",
    "addressRegion": "CA",
    "postalCode": "94111",
    "addressCountry": "US"
  },
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 37.7749,
      "longitude": -122.4194
    },
    "geoRadius": 20000000
  },
  "knowsAbout": [
    "Infrastructure as Code",
    "Site Reliability Engineering",
    "DevOps Automation",
    "Cloud Cost Optimization",
    "Kubernetes Management",
    "Multi-Cloud Operations",
    "Security Operations Center",
    "AI-Powered Operations",
    "Enterprise IT Management",
    "FinOps",
    "Zero Trust Security",
    "Chaos Engineering",
    "Incident Management",
    "Platform Engineering"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "500",
    "bestRating": "5",
    "worstRating": "1"
  },
  "award": [
    "99.99% Uptime SLA Achievement",
    "Industry Leader in Infrastructure Automation 2024",
    "Enterprise Trust Award 2024",
    "Innovation Excellence Award 2024",
    "Top Managed Services Provider 2024"
  ],
  "memberOf": [
    {
      "@type": "Organization",
      "name": "Cloud Native Computing Foundation"
    },
    {
      "@type": "Organization",
      "name": "DevOps Institute"
    },
    {
      "@type": "Organization",
      "name": "FinOps Foundation"
    }
  ],
  "numberOfEmployees": {
    "@type": "QuantitativeValue",
    "minValue": 100,
    "maxValue": 500
  }
};

// ============================================
// WEBSITE SCHEMA
// ============================================
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  "url": SITE_URL,
  "name": `${SITE_NAME} - Enterprise Infrastructure Operations`,
  "description": "AI-powered infrastructure reliability, automation, and managed operations for enterprise organizations",
  "publisher": {
    "@id": `${SITE_URL}/#organization`
  },
  "inLanguage": "en-US",
  "potentialAction": [
    {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${SITE_URL}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  ],
  "copyrightHolder": {
    "@id": `${SITE_URL}/#organization`
  },
  "copyrightYear": 2015
};

// ============================================
// WEBPAGE SCHEMA BUILDER
// ============================================
export interface WebPageSchemaOptions {
  url: string;
  name: string;
  description: string;
  datePublished?: string;
  dateModified?: string;
  breadcrumb?: string;
  primaryImageUrl?: string;
  mainEntity?: string;
  isPartOf?: string;
  speakable?: string[];
}

export function createWebPageSchema(options: WebPageSchemaOptions) {
  const {
    url,
    name,
    description,
    datePublished = "2023-01-01",
    dateModified = new Date().toISOString().split('T')[0],
    breadcrumb,
    primaryImageUrl = OG_IMAGE_URL,
    mainEntity,
    isPartOf = `${SITE_URL}/#website`,
    speakable
  } = options;

  const schema: Record<string, any> = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}/#webpage`,
    "url": url,
    "name": name,
    "description": description,
    "inLanguage": "en-US",
    "isPartOf": { "@id": isPartOf },
    "about": { "@id": `${SITE_URL}/#organization` },
    "datePublished": datePublished,
    "dateModified": dateModified,
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": primaryImageUrl,
      "width": 1200,
      "height": 630
    }
  };

  if (breadcrumb) {
    schema.breadcrumb = { "@id": breadcrumb };
  }

  if (mainEntity) {
    schema.mainEntity = { "@id": mainEntity };
  }

  if (speakable && speakable.length > 0) {
    schema.speakable = {
      "@type": "SpeakableSpecification",
      "cssSelector": speakable
    };
  }

  return schema;
}

// ============================================
// BREADCRUMB SCHEMA BUILDER
// ============================================
export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function createBreadcrumbSchema(items: BreadcrumbItem[], id?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": id || `${items[items.length - 1]?.url || SITE_URL}/#breadcrumb`,
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

// ============================================
// FAQ SCHEMA BUILDER
// ============================================
export interface FAQItem {
  question: string;
  answer: string;
}

export function createFAQSchema(faqs: FAQItem[], id?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": id,
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

// ============================================
// SERVICE SCHEMA BUILDER
// ============================================
export interface ServiceSchemaOptions {
  id: string;
  name: string;
  description: string;
  url: string;
  serviceType: string;
  category?: string;
  slogan?: string;
  offers?: Array<{ name: string; description: string }>;
  audience?: string;
  aggregateRating?: { ratingValue: string; reviewCount: string };
  areaServed?: string;
  availableChannel?: {
    serviceUrl: string;
    contactType?: string;
  };
}

export function createServiceSchema(options: ServiceSchemaOptions) {
  const {
    id,
    name,
    description,
    url,
    serviceType,
    category = "IT Services",
    slogan,
    offers,
    audience,
    aggregateRating,
    areaServed = "Worldwide",
    availableChannel
  } = options;

  const schema: Record<string, any> = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": id,
    "name": name,
    "description": description,
    "url": url,
    "provider": { "@id": `${SITE_URL}/#organization` },
    "serviceType": serviceType,
    "category": category,
    "areaServed": areaServed,
    "termsOfService": `${SITE_URL}/terms`,
    "serviceOutput": "Infrastructure reliability and operational excellence"
  };

  if (slogan) {
    schema.slogan = slogan;
  }

  if (availableChannel) {
    schema.availableChannel = {
      "@type": "ServiceChannel",
      "serviceUrl": availableChannel.serviceUrl,
      "servicePhone": {
        "@type": "ContactPoint",
        "telephone": PHONE,
        "contactType": availableChannel.contactType || "customer service",
        "availableLanguage": ["English"]
      }
    };
  }

  if (offers && offers.length > 0) {
    schema.hasOfferCatalog = {
      "@type": "OfferCatalog",
      "name": `${name} Services`,
      "itemListElement": offers.map(offer => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": offer.name,
          "description": offer.description
        }
      }))
    };
  }

  if (audience) {
    schema.audience = {
      "@type": "Audience",
      "audienceType": audience
    };
  }

  if (aggregateRating) {
    schema.aggregateRating = {
      "@type": "AggregateRating",
      "ratingValue": aggregateRating.ratingValue,
      "reviewCount": aggregateRating.reviewCount,
      "bestRating": "5",
      "worstRating": "1"
    };
  }

  return schema;
}

// ============================================
// PROFESSIONAL SERVICE SCHEMA
// ============================================
export function createProfessionalServiceSchema(options: ServiceSchemaOptions) {
  const baseSchema = createServiceSchema(options);
  return {
    ...baseSchema,
    "@type": "ProfessionalService",
    "priceRange": "$$$",
    "paymentAccepted": ["Credit Card", "Bank Transfer", "Invoice"],
    "currenciesAccepted": "USD"
  };
}

// ============================================
// HOW-TO SCHEMA BUILDER
// ============================================
export interface HowToStep {
  name: string;
  text: string;
  url?: string;
  image?: string;
}

export interface HowToSchemaOptions {
  name: string;
  description: string;
  steps: HowToStep[];
  totalTime?: string;
  estimatedCost?: { currency: string; value: string };
  tool?: string[];
  supply?: string[];
  image?: string;
  id?: string;
}

export function createHowToSchema(options: HowToSchemaOptions) {
  const {
    name,
    description,
    steps,
    totalTime,
    estimatedCost,
    tool,
    supply,
    image = OG_IMAGE_URL,
    id
  } = options;

  const schema: Record<string, any> = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": name,
    "description": description,
    "image": image,
    "step": steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.name,
      "text": step.text,
      ...(step.url && { "url": step.url }),
      ...(step.image && { "image": step.image })
    }))
  };

  if (id) {
    schema["@id"] = id;
  }

  if (totalTime) {
    schema.totalTime = totalTime;
  }

  if (estimatedCost) {
    schema.estimatedCost = {
      "@type": "MonetaryAmount",
      "currency": estimatedCost.currency,
      "value": estimatedCost.value
    };
  }

  if (tool && tool.length > 0) {
    schema.tool = tool.map(t => ({
      "@type": "HowToTool",
      "name": t
    }));
  }

  if (supply && supply.length > 0) {
    schema.supply = supply.map(s => ({
      "@type": "HowToSupply",
      "name": s
    }));
  }

  return schema;
}

// ============================================
// ARTICLE / BLOG SCHEMA BUILDER
// ============================================
export interface ArticleSchemaOptions {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  author: string;
  image?: string;
  articleSection?: string;
  keywords?: string[];
  wordCount?: number;
  id?: string;
}

export function createArticleSchema(options: ArticleSchemaOptions) {
  const {
    headline,
    description,
    url,
    datePublished,
    dateModified = datePublished,
    author,
    image = OG_IMAGE_URL,
    articleSection,
    keywords,
    wordCount,
    id
  } = options;

  const schema: Record<string, any> = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": headline,
    "description": description,
    "url": url,
    "datePublished": datePublished,
    "dateModified": dateModified,
    "author": {
      "@type": "Person",
      "name": author,
      "url": SITE_URL
    },
    "publisher": { "@id": `${SITE_URL}/#organization` },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    },
    "image": {
      "@type": "ImageObject",
      "url": image,
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en-US"
  };

  if (id) {
    schema["@id"] = id;
  }

  if (articleSection) {
    schema.articleSection = articleSection;
  }

  if (keywords && keywords.length > 0) {
    schema.keywords = keywords.join(", ");
  }

  if (wordCount) {
    schema.wordCount = wordCount;
  }

  return schema;
}

export function createBlogPostingSchema(options: ArticleSchemaOptions) {
  const baseSchema = createArticleSchema(options);
  return {
    ...baseSchema,
    "@type": "BlogPosting"
  };
}

// ============================================
// LOCAL BUSINESS SCHEMA
// ============================================
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#localbusiness`,
  "name": SITE_NAME,
  "description": "Enterprise infrastructure management and cloud operations services",
  "url": SITE_URL,
  "telephone": PHONE,
  "email": EMAIL,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "100 California Street",
    "addressLocality": "San Francisco",
    "addressRegion": "CA",
    "postalCode": "94111",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 37.7749,
    "longitude": -122.4194
  },
  "areaServed": "Worldwide",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "opens": "00:00",
    "closes": "23:59"
  },
  "priceRange": "$$$",
  "paymentAccepted": ["Credit Card", "Bank Transfer", "Invoice"],
  "currenciesAccepted": "USD"
};

// ============================================
// CONTACT PAGE SCHEMA
// ============================================
export function createContactPageSchema(url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${url}/#contactpage`,
    "url": url,
    "name": "Contact HiTechLogic | 24/7 Enterprise Support & Technical Consulting",
    "description": "Connect with our infrastructure reliability experts. 24/7 support, technical consulting, and strategic partnerships.",
    "inLanguage": "en-US",
    "isPartOf": { "@id": `${SITE_URL}/#website` },
    "about": { "@id": `${SITE_URL}/#organization` },
    "mainEntity": { "@id": `${SITE_URL}/#organization` },
    "potentialAction": {
      "@type": "CommunicateAction",
      "target": url,
      "description": "Contact HiTechLogic for enterprise infrastructure support and consulting"
    }
  };
}

// ============================================
// ABOUT PAGE SCHEMA
// ============================================
export function createAboutPageSchema(url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${url}/#aboutpage`,
    "url": url,
    "name": "About HiTechLogic | Enterprise Infrastructure & Cloud Operations",
    "description": "Transforming enterprise technology operations worldwide. 10+ years of excellence with 99.99% uptime guarantees.",
    "inLanguage": "en-US",
    "isPartOf": { "@id": `${SITE_URL}/#website` },
    "mainEntity": { "@id": `${SITE_URL}/#organization` }
  };
}

// ============================================
// COLLECTION PAGE SCHEMA (for Services, Blog, etc.)
// ============================================
export interface CollectionItem {
  name: string;
  url: string;
  description?: string;
}

export function createCollectionPageSchema(
  url: string,
  name: string,
  description: string,
  items: CollectionItem[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${url}/#collectionpage`,
    "url": url,
    "name": name,
    "description": description,
    "inLanguage": "en-US",
    "isPartOf": { "@id": `${SITE_URL}/#website` },
    "about": { "@id": `${SITE_URL}/#organization` },
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "url": item.url,
        ...(item.description && { "description": item.description })
      }))
    }
  };
}

// ============================================
// ITEM LIST SCHEMA BUILDER
// ============================================
export function createItemListSchema(
  items: CollectionItem[],
  name?: string,
  id?: string
) {
  const schema: Record<string, any> = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "url": item.url,
      ...(item.description && { "description": item.description })
    }))
  };

  if (name) {
    schema.name = name;
  }

  if (id) {
    schema["@id"] = id;
  }

  return schema;
}

// ============================================
// OFFER CATALOG SCHEMA
// ============================================
export interface OfferItem {
  name: string;
  description: string;
  price?: string;
  priceCurrency?: string;
}

export function createOfferCatalogSchema(
  name: string,
  offers: OfferItem[],
  id?: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    "@id": id,
    "name": name,
    "itemListElement": offers.map(offer => ({
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": offer.name,
        "description": offer.description
      },
      ...(offer.price && offer.priceCurrency && {
        "price": offer.price,
        "priceCurrency": offer.priceCurrency
      })
    }))
  };
}

// ============================================
// REVIEW SCHEMA BUILDER
// ============================================
export interface ReviewData {
  author: string;
  authorType?: "Person" | "Organization";
  reviewBody: string;
  ratingValue: number;
  datePublished?: string;
}

export function createReviewSchema(reviews: ReviewData[]) {
  return reviews.map(review => ({
    "@type": "Review",
    "author": {
      "@type": review.authorType || "Organization",
      "name": review.author
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": review.ratingValue.toString(),
      "bestRating": "5",
      "worstRating": "1"
    },
    "reviewBody": review.reviewBody,
    ...(review.datePublished && { "datePublished": review.datePublished })
  }));
}

// ============================================
// SOFTWARE APPLICATION SCHEMA (for Platform page)
// ============================================
export function createSoftwareApplicationSchema(options: {
  name: string;
  description: string;
  url: string;
  applicationCategory?: string;
  operatingSystem?: string;
  offers?: { price: string; priceCurrency: string };
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${options.url}/#software`,
    "name": options.name,
    "description": options.description,
    "url": options.url,
    "applicationCategory": options.applicationCategory || "BusinessApplication",
    "operatingSystem": options.operatingSystem || "Web",
    "provider": { "@id": `${SITE_URL}/#organization` },
    ...(options.offers && {
      "offers": {
        "@type": "Offer",
        "price": options.offers.price,
        "priceCurrency": options.offers.priceCurrency
      }
    }),
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "500",
      "bestRating": "5",
      "worstRating": "1"
    }
  };
}

// ============================================
// EVENT SCHEMA (for Demo/Webinars)
// ============================================
export function createEventSchema(options: {
  name: string;
  description: string;
  url: string;
  startDate?: string;
  endDate?: string;
  eventAttendanceMode?: string;
  location?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    "@id": `${options.url}/#event`,
    "name": options.name,
    "description": options.description,
    "url": options.url,
    "eventAttendanceMode": options.eventAttendanceMode || "https://schema.org/OnlineEventAttendanceMode",
    "eventStatus": "https://schema.org/EventScheduled",
    "organizer": { "@id": `${SITE_URL}/#organization` },
    ...(options.startDate && { "startDate": options.startDate }),
    ...(options.endDate && { "endDate": options.endDate }),
    "location": options.location ? {
      "@type": "VirtualLocation",
      "url": options.url
    } : {
      "@type": "VirtualLocation",
      "url": options.url
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "validFrom": new Date().toISOString()
    }
  };
}

// ============================================
// SITE NAVIGATION ELEMENT SCHEMA
// ============================================
export const siteNavigationSchema = {
  "@context": "https://schema.org",
  "@type": "SiteNavigationElement",
  "@id": `${SITE_URL}/#sitenav`,
  "name": "Main Navigation",
  "hasPart": [
    { "@type": "SiteNavigationElement", "name": "Home", "url": SITE_URL },
    { "@type": "SiteNavigationElement", "name": "Services", "url": `${SITE_URL}/services` },
    { "@type": "SiteNavigationElement", "name": "Platform", "url": `${SITE_URL}/platform` },
    { "@type": "SiteNavigationElement", "name": "Industries", "url": `${SITE_URL}/industries` },
    { "@type": "SiteNavigationElement", "name": "About", "url": `${SITE_URL}/about` },
    { "@type": "SiteNavigationElement", "name": "Blog", "url": `${SITE_URL}/blog` },
    { "@type": "SiteNavigationElement", "name": "Contact", "url": `${SITE_URL}/contact` }
  ]
};

// ============================================
// SPEAKABLE SCHEMA (for voice search optimization)
// ============================================
export function createSpeakableSchema(selectors: string[]) {
  return {
    "@type": "SpeakableSpecification",
    "cssSelector": selectors
  };
}

// ============================================
// GRAPH SCHEMA BUILDER (combines multiple schemas)
// ============================================
export function createGraphSchema(schemas: object[]) {
  return {
    "@context": "https://schema.org",
    "@graph": schemas.map(schema => {
      // Remove context from individual schemas when in graph
      const { "@context": _, ...rest } = schema as Record<string, any>;
      return rest;
    })
  };
}

// ============================================
// PRE-BUILT PAGE SCHEMAS
// ============================================

// Homepage schema collection
export const homepageSchemas = [
  organizationSchema,
  websiteSchema,
  createWebPageSchema({
    url: SITE_URL,
    name: "HiTechLogic - Enterprise Infrastructure Operations Perfected",
    description: "Transform enterprise infrastructure with AI-powered automation. Achieve 99.99% uptime, reduce costs by 50%, eliminate 90% alert noise.",
    speakable: ["h1", ".hero-description"]
  }),
  createBreadcrumbSchema([{ name: "Home", url: SITE_URL }]),
  siteNavigationSchema
];

// Services page schema collection
export function getServicesPageSchemas() {
  return [
    organizationSchema,
    createWebPageSchema({
      url: `${SITE_URL}/services`,
      name: "Managed IT Services for Enterprise Cloud Infrastructure & Reliability",
      description: "Complete managed infrastructure services delivering 99.99% uptime, 40% cost reduction, and operational excellence."
    }),
    createBreadcrumbSchema([
      { name: "Home", url: SITE_URL },
      { name: "Services", url: `${SITE_URL}/services` }
    ]),
    createServiceSchema({
      id: `${SITE_URL}/services/#service`,
      name: "Enterprise Infrastructure Management Services",
      description: "Complete managed infrastructure services delivering 99.99% uptime and operational excellence.",
      url: `${SITE_URL}/services`,
      serviceType: "Managed Infrastructure Services",
      slogan: "Infrastructure Operations Perfected",
      audience: "CTOs, CIOs, VP of Engineering, DevOps Directors, IT Directors",
      aggregateRating: { ratingValue: "4.9", reviewCount: "500" }
    })
  ];
}

// Contact page schema collection
export function getContactPageSchemas() {
  const url = `${SITE_URL}/contact`;
  return [
    organizationSchema,
    localBusinessSchema,
    createContactPageSchema(url),
    createBreadcrumbSchema([
      { name: "Home", url: SITE_URL },
      { name: "Contact", url }
    ])
  ];
}

// About page schema collection
export function getAboutPageSchemas() {
  const url = `${SITE_URL}/about`;
  return [
    organizationSchema,
    createAboutPageSchema(url),
    createBreadcrumbSchema([
      { name: "Home", url: SITE_URL },
      { name: "About", url }
    ])
  ];
}

// Export site constants
export const SCHEMA_CONSTANTS = {
  SITE_URL,
  SITE_NAME,
  LOGO_URL,
  OG_IMAGE_URL,
  PHONE,
  EMAIL
};
