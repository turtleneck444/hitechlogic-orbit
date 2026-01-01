import { Layout } from "@/components/layout/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link, useParams, Navigate } from "react-router-dom";
import { Calendar, User, Clock, Tag, ArrowLeft, ArrowRight, Mail } from "lucide-react";
import { getPostBySlug, blogPosts } from "@/data/blogPosts";
import { SEO } from "@/components/SEO";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : null;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = blogPosts
    .filter((entry) => entry.category === post.category && entry.slug !== post.slug)
    .slice(0, 3);

  const contentParagraphs = post.content.split("\n").filter((paragraph) => paragraph.trim());

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://hitechlogic.com/#organization",
        "name": "HiTechLogic",
        "url": "https://hitechlogic.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://hitechlogic.com/logo.png",
          "width": 400,
          "height": 400
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://hitechlogic.com/#website",
        "url": "https://hitechlogic.com",
        "name": "HiTechLogic",
        "publisher": { "@id": "https://hitechlogic.com/#organization" }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://hitechlogic.com/blog/${post.slug}/#breadcrumb`,
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
            "name": "Blog",
            "item": "https://hitechlogic.com/blog"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": post.title,
            "item": `https://hitechlogic.com/blog/${post.slug}`
          }
        ]
      },
      {
        "@type": "BlogPosting",
        "@id": `https://hitechlogic.com/blog/${post.slug}/#article`,
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `https://hitechlogic.com/blog/${post.slug}/#webpage`
        },
        "headline": post.title,
        "description": post.excerpt,
        "image": {
          "@type": "ImageObject",
          "url": post.image || "https://hitechlogic.com/og-image.png",
          "width": 1200,
          "height": 630
        },
        "datePublished": post.date,
        "dateModified": post.date,
        "author": {
          "@type": "Person",
          "name": post.author,
          "jobTitle": post.authorRole,
          "worksFor": { "@id": "https://hitechlogic.com/#organization" }
        },
        "publisher": { "@id": "https://hitechlogic.com/#organization" },
        "keywords": post.tags.join(", "),
        "articleSection": post.category,
        "inLanguage": "en-US",
        "isPartOf": { "@id": "https://hitechlogic.com/#website" },
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": ["h1", ".article-excerpt"]
        },
        "wordCount": post.content.split(/\s+/).length
      },
      {
        "@type": "WebPage",
        "@id": `https://hitechlogic.com/blog/${post.slug}/#webpage`,
        "url": `https://hitechlogic.com/blog/${post.slug}`,
        "name": `${post.title} | HiTechLogic Blog`,
        "description": post.excerpt,
        "isPartOf": { "@id": "https://hitechlogic.com/#website" },
        "about": { "@id": "https://hitechlogic.com/#organization" },
        "breadcrumb": { "@id": `https://hitechlogic.com/blog/${post.slug}/#breadcrumb` },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": post.image || "https://hitechlogic.com/og-image.png"
        },
        "datePublished": post.date,
        "dateModified": post.date,
        "inLanguage": "en-US"
      }
    ]
  };

  return (
    <>
      <SEO
        title={`${post.title} | HiTechLogic Blog`}
        description={post.excerpt}
        keywords={post.tags.join(", ")}
        canonical={`https://hitechlogic.com/blog/${post.slug}`}
        schema={schema}
      />
      <Layout>
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[hsl(var(--deep-navy))] via-[hsl(var(--graphite))] to-[hsl(var(--deep-navy))]">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvZz48L3N2Zz4=')] opacity-20" />
          <div className="relative mx-auto w-full max-w-6xl px-6 py-20 sm:py-28">
            <div className="flex items-center gap-3 mb-6">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
              </Link>
            </div>
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[hsl(var(--accent-blue))] mb-3">{post.category}</p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white mb-6">
                {post.title}
              </h1>
              <p className="article-excerpt text-lg text-white/80 mb-8 leading-relaxed">{post.excerpt}</p>
              <div className="flex flex-wrap gap-6 text-sm text-white/70">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  {post.author} &bull; {post.authorRole}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {post.readTime}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content + Sidebar */}
        <main className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[3fr,1fr]">
          <article className="space-y-10 rounded-3xl border border-slate-100 bg-white p-8 shadow-xl shadow-slate-900/5">
            <section className="space-y-6 text-slate-700 leading-relaxed">
              {contentParagraphs.map((paragraph, index) => {
                if (paragraph.startsWith("# ")) {
                  return (
                    <h2 key={index} className="text-2xl font-semibold text-[hsl(var(--navy))]">
                      {paragraph.replace("# ", "")}
                    </h2>
                  );
                }

                if (paragraph.startsWith("## ")) {
                  return (
                    <h3 key={index} className="text-xl font-semibold text-[hsl(var(--navy))]">
                      {paragraph.replace("## ", "")}
                    </h3>
                  );
                }

                if (paragraph.startsWith("- ") || paragraph.startsWith("• ")) {
                  return (
                    <div key={index} className="flex gap-2 text-sm text-slate-700">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[hsl(var(--accent-blue))]" />
                      <span>{paragraph.replace(/^[-•]\s*/, "")}</span>
                    </div>
                  );
                }

                return (
                  <p key={index} className="text-base text-slate-700">
                    {paragraph}
                  </p>
                );
              })}
            </section>

            <section className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-400">Tags</p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-[hsl(var(--navy))]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </section>
          </article>

          <aside className="space-y-6">
            <Card className="space-y-3 p-6 border border-slate-200 bg-white">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">Author</p>
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[hsl(var(--accent-blue))]/10 text-[hsl(var(--accent-blue))]">
                  <User className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-[hsl(var(--navy))]">{post.author}</p>
                  <p className="text-sm text-slate-500">{post.authorRole}</p>
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Deep experience automating infrastructure, building resilient platforms, and keeping enterprise teams confident.
              </p>
              <Button variant="outline" size="lg" asChild className="w-full">
                <Link to="/contact" className="flex items-center justify-center gap-2">
                  <Mail className="h-4 w-4" />
                  Schedule a Call
                </Link>
              </Button>
            </Card>

            <Card className="p-6 space-y-4 border border-slate-200 bg-white">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">Related Articles</p>
              <div className="space-y-3">
                {relatedPosts.map((entry) => (
                  <Link
                    key={entry.slug}
                    to={`/blog/${entry.slug}`}
                    className="flex flex-col gap-1 rounded-xl border border-slate-100 px-3 py-2 hover:border-[hsl(var(--accent-blue))]/40 transition-colors"
                  >
                    <p className="text-sm font-semibold text-[hsl(var(--navy))]">{entry.title}</p>
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <Clock className="h-3.5 w-3.5" />
                      {entry.readTime}
                    </div>
                  </Link>
                ))}
              </div>
            </Card>
          </aside>
        </main>
      </Layout>
    </>
  );
}