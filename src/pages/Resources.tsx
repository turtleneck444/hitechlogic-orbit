import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { resources, getFeaturedResources, allTags, type ResourceCategory } from "@/data/resources";
import { BookOpen, FileText, Video, Award, BookMarked, Search, Calendar, Clock, ArrowRight, Filter } from "lucide-react";

const categoryIcons: Record<ResourceCategory, React.ElementType> = {
  blog: BookOpen,
  whitepaper: FileText,
  webinar: Video,
  guide: BookMarked,
};

const categoryColors: Record<ResourceCategory, string> = {
  blog: "from-blue-500 to-blue-600",
  whitepaper: "from-purple-500 to-purple-600",
  webinar: "from-red-500 to-red-600",
  guide: "from-orange-500 to-orange-600",
};

export default function Resources() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<ResourceCategory | "all">("all");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const featuredResources = getFeaturedResources();

  const filteredResources = resources.filter((resource) => {
    const matchesSearch =
      searchQuery === "" ||
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory = selectedCategory === "all" || resource.category === selectedCategory;
    const matchesTag = !selectedTag || resource.tags.includes(selectedTag);

    return matchesSearch && matchesCategory && matchesTag;
  });

  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": resources.map((resource, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Article",
        "name": resource.title,
        "description": resource.description,
        "author": resource.author,
        "datePublished": resource.date,
      },
    })),
  };

  return (
    <>
      <SEO
        title="Resources: Cloud, DevOps, Security & FinOps Insights | HiTechLogic"
        description="Expert insights on cloud operations, DevOps automation, security best practices, FinOps optimization, and SRE. Whitepapers, guides, and webinars from industry leaders."
        keywords="cloud operations, devops best practices, finops guide, kubernetes tutorial, zero-trust security, soc 2 compliance, infrastructure as code, sre practices"
        canonical="https://hitechlogic.com/resources"
        schema={schema}
      />
      <Layout>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-white pt-32 pb-20">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#2e6bff08_1px,transparent_1px),linear-gradient(to_bottom,#2e6bff08_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 border border-[hsl(var(--accent-blue))]/20 mb-6">
                <BookOpen className="h-4 w-4 text-[hsl(var(--accent-blue))]" />
                <span className="text-sm font-bold text-[hsl(var(--navy))]">Knowledge Hub</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[hsl(var(--navy))] mb-6">
                Resources & Insights
              </h1>

              <p className="text-xl text-slate-600 mb-8">
                Expert guidance on cloud operations, DevOps automation, security, FinOps, and reliability engineering
              </p>

              {/* Search Bar */}
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                <Input
                  type="text"
                  placeholder="Search resources, topics, or tags..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-6 text-lg border-2 border-slate-200 focus:border-[hsl(var(--accent-blue))] rounded-xl"
                />
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <Button
                variant={selectedCategory === "all" ? "primary" : "outline"}
                onClick={() => {
                  setSelectedCategory("all");
                  setSelectedTag(null);
                }}
                className="rounded-full"
              >
                <Filter className="h-4 w-4 mr-2" />
                All Resources
              </Button>
              {(["blog", "whitepaper", "guide", "webinar"] as ResourceCategory[]).map((category) => {
                const Icon = categoryIcons[category];
                return (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "primary" : "outline"}
                    onClick={() => {
                      setSelectedCategory(category);
                      setSelectedTag(null);
                    }}
                    className="rounded-full capitalize"
                  >
                    <Icon className="h-4 w-4 mr-2" />
                    {`${category}s`}
                  </Button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Featured Resources */}
        {selectedCategory === "all" && !searchQuery && !selectedTag && (
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--navy))] mb-4">
                  Featured Resources
                </h2>
                <p className="text-lg text-slate-600">
                  Our most popular and impactful content
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredResources.map((resource) => {
                  const Icon = categoryIcons[resource.category];
                  const gradient = categoryColors[resource.category];

                  return (
                    <Card
                      key={resource.id}
                      className="group relative overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 hover:border-[hsl(var(--accent-blue))]/40"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity`} />

                      <div className="relative p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${gradient} shadow-lg`}>
                            <Icon className="h-6 w-6 text-white" />
                          </div>
                          <Badge variant="secondary" className="capitalize">
                            {resource.category}
                          </Badge>
                        </div>

                        <h3 className="text-xl font-bold text-[hsl(var(--navy))] mb-3 line-clamp-2 group-hover:text-[hsl(var(--accent-blue))] transition-colors">
                          {resource.title}
                        </h3>

                        <p className="text-sm text-slate-600 mb-4 line-clamp-3">
                          {resource.description}
                        </p>

                        <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3.5 w-3.5" />
                            <span>{new Date(resource.date).toLocaleDateString()}</span>
                          </div>
                          {resource.readTime && (
                            <div className="flex items-center gap-1">
                              <Clock className="h-3.5 w-3.5" />
                              <span>{resource.readTime}</span>
                            </div>
                          )}
                        </div>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {resource.tags.slice(0, 3).map((tag) => (
                            <button
                              key={tag}
                              onClick={() => setSelectedTag(tag)}
                              className="px-2 py-1 text-xs font-semibold bg-slate-100 text-slate-700 rounded-md hover:bg-[hsl(var(--accent-blue))]/10 hover:text-[hsl(var(--accent-blue))] transition-colors"
                            >
                              {tag}
                            </button>
                          ))}
                        </div>

                        <Link
                          to={resource.href}
                          className="inline-flex items-center gap-2 text-sm font-semibold text-[hsl(var(--accent-blue))] hover:gap-3 transition-all group-hover:underline"
                        >
                          <span>Read More</span>
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* All Resources */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[hsl(var(--navy))]">
                {selectedTag ? `Resources tagged with "${selectedTag}"` : "All Resources"}
              </h2>
              {selectedTag && (
                <Button variant="outline" onClick={() => setSelectedTag(null)} size="sm">
                  Clear Filter
                </Button>
              )}
            </div>

            {filteredResources.length === 0 ? (
              <Card className="p-12 text-center">
                <BookOpen className="h-16 w-16 text-slate-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-slate-600 mb-2">No resources found</h3>
                <p className="text-slate-500">Try adjusting your search or filters</p>
              </Card>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredResources.map((resource) => {
                  const Icon = categoryIcons[resource.category];
                  const gradient = categoryColors[resource.category];

                  return (
                    <Card
                      key={resource.id}
                      className="group relative overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-[hsl(var(--accent-blue))]/30"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity`} />

                      <div className="relative p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <div className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${gradient} shadow-md`}>
                            <Icon className="h-5 w-5 text-white" />
                          </div>
                          <Badge variant="secondary" className="capitalize text-xs">
                            {resource.category}
                          </Badge>
                        </div>

                        <h3 className="text-lg font-bold text-[hsl(var(--navy))] mb-2 line-clamp-2 group-hover:text-[hsl(var(--accent-blue))] transition-colors">
                          {resource.title}
                        </h3>

                        <p className="text-sm text-slate-600 mb-3 line-clamp-2">
                          {resource.description}
                        </p>

                        <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            <span>{new Date(resource.date).toLocaleDateString()}</span>
                          </div>
                          {resource.readTime && (
                            <div className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              <span>{resource.readTime}</span>
                            </div>
                          )}
                        </div>

                        <Link
                          to={resource.href}
                          className="inline-flex items-center gap-2 text-sm font-semibold text-[hsl(var(--accent-blue))] hover:gap-3 transition-all"
                        >
                          <span>Read More</span>
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </Card>
                  );
                })}
              </div>
            )}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-20 bg-gradient-to-br from-[hsl(var(--navy))] to-slate-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Stay Updated with Latest Insights
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Get expert cloud operations, DevOps, and FinOps insights delivered to your inbox
              </p>
              <form 
                name="newsletter" 
                method="POST" 
                data-netlify="true" 
                netlify-honeypot="bot-field"
                className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
              >
                <input type="hidden" name="form-name" value="newsletter" />
                <p hidden>
                  <label>
                    Don't fill this out: <input name="bot-field" />
                  </label>
                </p>
                <Input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-blue-200"
                  required
                />
                <Button type="submit" variant="secondary" size="lg" className="bg-white text-[hsl(var(--navy))] hover:bg-blue-50">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
