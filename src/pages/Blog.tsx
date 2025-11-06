import { Layout } from "@/components/layout/Layout";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight } from "lucide-react";

const posts = [
  {
    title: "Why Alert Noise Eats Your Roadmap",
    excerpt: "Every false alarm costs your team focus, momentum, and trust. Learn how AI-driven filtering can restore signal clarity and reclaim engineering time.",
    author: "Jordan Chen",
    date: "March 15, 2024",
    readTime: "6 min read",
    tags: ["Operations", "Automation"],
    slug: "alert-noise-roadmap",
  },
  {
    title: "A Practical Guide to Self-Healing Runbooks",
    excerpt: "Step-by-step approach to building automated remediation that actually works. From identifying patterns to implementing safe automation.",
    author: "Alex Rivera",
    date: "March 8, 2024",
    readTime: "8 min read",
    tags: ["Automation", "Best Practices"],
    slug: "self-healing-runbooks",
  },
  {
    title: "Reducing Ops Cost Without Slowing Delivery",
    excerpt: "How to optimize infrastructure spending while maintaining—or even improving—reliability and velocity. Real strategies that work.",
    author: "Sam Taylor",
    date: "March 1, 2024",
    readTime: "7 min read",
    tags: ["Cost Optimization", "Strategy"],
    slug: "reduce-ops-cost",
  },
];

export default function Blog() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-hero">
        <div className="container relative z-10 mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Engineering <span className="gradient-text">Insights</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Practical guides, best practices, and lessons learned from operating infrastructure at scale.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group"
              >
                <Card
                  className="glass-card p-8 h-full hover-scale"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-accent/20 text-accent"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-bold mb-3 group-hover:gradient-text transition-all">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-muted-foreground mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between text-sm text-muted-foreground pt-4 border-t border-border/50">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>

                  {/* Read More */}
                  <div className="flex items-center space-x-2 mt-4 text-accent font-medium group-hover:translate-x-1 transition-transform">
                    <span>Read more</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16">
            <Card className="glass-card p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Get the latest insights on infrastructure operations, automation, and reliability delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-3 rounded-md bg-background border border-border focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <button className="px-6 py-3 rounded-md bg-gradient-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
                  Subscribe
                </button>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}
