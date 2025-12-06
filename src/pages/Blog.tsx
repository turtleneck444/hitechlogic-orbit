import { Layout } from "@/components/layout/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight, Clock, BookOpen, Filter, Tag } from "lucide-react";
import { blogPosts, getFeaturedPosts, getAllCategories } from "@/data/blogPosts";
import { useState } from "react";
import { SEO } from "@/components/SEO";

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const featuredPosts = getFeaturedPosts();
  const categories = ["All", ...getAllCategories()];

  const filteredPosts = selectedCategory === "All"
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "HiTechLogic Engineering Insights",
    description: "Expert insights on cloud infrastructure, DevOps automation, FinOps, and AI-powered operations.",
    url: "https://hitechlogic.com/blog",
    publisher: {
      "@type": "Organization",
      name: "HiTechLogic"
    }
  };

  return (
    <>
      <SEO
        title="Engineering Insights & Best Practices | HiTechLogic Blog"
        description="Expert insights on cloud infrastructure, DevOps automation, FinOps, AI-powered operations, and reliability engineering from the HiTechLogic team."
        keywords="cloud infrastructure, devops, finops, ai automation, cloud optimization, infrastructure monitoring, rapid prototyping"
        canonical="https://hitechlogic.com/blog"
        schema={schema}
      />
      <Layout>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[hsl(var(--deep-navy))] via-[hsl(var(--graphite))] to-[hsl(var(--deep-navy))]">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvZz48L3N2Zz4=')] opacity-20" />
          <div className="relative mx-auto w-full max-w-6xl px-6 pt-32 pb-20 sm:pt-40 sm:pb-28">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg">
                <BookOpen className="h-7 w-7 text-[hsl(var(--accent-blue))]" />
              </div>
              <span className="text-sm font-medium text-white/90 tracking-wide">Engineering Insights</span>
            </div>
            <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
              Technical Blog
              <span className="text-[hsl(var(--accent-blue))] block sm:inline"> & Insights</span>
            </h1>
            <p className="mt-6 text-xl text-white/80 max-w-3xl leading-relaxed">
              Practical guides, best practices, and lessons learned from operating infrastructure at scale.
              Deep dives into AI automation, cloud optimization, and reliability engineering.
            </p>
          </div>
        </section>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="py-16 px-6 bg-gradient-to-b from-[hsl(var(--deep-navy))] to-background">
            <div className="container mx-auto max-w-6xl">
              <div className="flex items-center gap-3 mb-8">
                <Tag className="h-5 w-5 text-[hsl(var(--accent-blue))]" />
                <h2 className="text-2xl font-bold text-white">Featured Articles</h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredPosts.map((post, index) => (
                  <Link
                    key={post.slug}
                    to={`/blog/${post.slug}`}
                    className="group"
                  >
                    <Card className="overflow-hidden h-full bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 hover:border-[hsl(var(--accent-blue))]/50 transition-all duration-300">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute top-4 right-4">
                          <span className="px-3 py-1 text-xs font-semibold rounded-full bg-[hsl(var(--signal-purple))]/90 text-white backdrop-blur-sm">
                            Featured
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="px-3 py-1 text-xs font-medium rounded-full bg-[hsl(var(--accent-blue))]/20 text-[hsl(var(--accent-blue))]">
                            {post.category}
                          </span>
                          <span className="text-xs text-white/60 flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {post.readTime}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold mb-3 text-white group-hover:text-[hsl(var(--accent-blue))] transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-white/70 mb-4 line-clamp-2 text-sm">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-xs text-white/60 pt-4 border-t border-white/10">
                          <div className="flex items-center gap-1">
                            <User className="h-3 w-3" />
                            <span>{post.author.split(' ')[0]}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Category Filter */}
        <section className="py-12 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="flex items-center gap-3 mb-6">
              <Filter className="h-5 w-5 text-[hsl(var(--accent-blue))]" />
              <h3 className="text-lg font-semibold">Filter by Category</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "primary" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category
                    ? "bg-gradient-to-r from-[hsl(var(--accent-blue))] to-[hsl(var(--signal-purple))] hover:opacity-90"
                    : "hover:bg-[hsl(var(--accent-blue))]/10 hover:border-[hsl(var(--accent-blue))]"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* All Posts Grid */}
        <section className="py-12 px-6 pb-24">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-2xl font-bold mb-8">
              {selectedCategory === "All" ? "All Articles" : `${selectedCategory} Articles`}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="group"
                >
                  <Card className="overflow-hidden h-full hover:shadow-lg hover:shadow-[hsl(var(--accent-blue))]/20 transition-all duration-300">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-3 py-1 text-xs font-medium rounded-full bg-[hsl(var(--accent-blue))]/20 text-[hsl(var(--accent-blue))]">
                          {post.category}
                        </span>
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold mb-3 group-hover:text-[hsl(var(--accent-blue))] transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 line-clamp-2 text-sm">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border/50">
                        <div className="flex items-center gap-1">
                          <User className="h-3 w-3" />
                          <span>{post.author.split(' ')[0]}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 mt-4 text-[hsl(var(--accent-blue))] font-medium text-sm group-hover:translate-x-1 transition-transform">
                        <span>Read article</span>
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
