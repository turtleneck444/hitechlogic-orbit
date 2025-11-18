import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight, Clock, BookOpen, Sparkles } from "lucide-react";
import { getFeaturedPosts } from "@/data/blogPosts";

export const BlogWidget = () => {
  const featuredPosts = getFeaturedPosts().slice(0, 3);

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[hsl(var(--deep-navy))]/10 to-background" />

      <div className="container relative z-10 mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[hsl(var(--accent-blue))]/10 to-[hsl(var(--signal-purple))]/10 border border-[hsl(var(--accent-blue))]/20 mb-4">
            <Sparkles className="h-4 w-4 text-[hsl(var(--accent-blue))]" />
            <span className="text-sm font-medium text-[hsl(var(--accent-blue))]">Latest Insights</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            From Our <span className="bg-gradient-to-r from-[hsl(var(--accent-blue))] to-[hsl(var(--signal-purple))] bg-clip-text text-transparent">Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Expert insights on infrastructure automation, cloud optimization, and AI-powered operations.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredPosts.map((post, index) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group"
            >
              <Card className="overflow-hidden h-full hover:shadow-xl hover:shadow-[hsl(var(--accent-blue))]/20 transition-all duration-300 hover:-translate-y-1">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-[hsl(var(--accent-blue))] to-[hsl(var(--signal-purple))] text-white shadow-lg">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Meta Info */}
                  <div className="flex items-center gap-3 mb-3 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      <span>{post.author.split(' ')[0]}</span>
                    </div>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                    </div>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold mb-3 group-hover:text-[hsl(var(--accent-blue))] transition-colors line-clamp-2 min-h-[3.5rem]">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  {/* Read More Link */}
                  <div className="flex items-center gap-2 text-[hsl(var(--accent-blue))] font-medium text-sm group-hover:gap-3 transition-all">
                    <span>Read article</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            asChild
            className="group border-2 border-[hsl(var(--accent-blue))]/30 hover:border-[hsl(var(--accent-blue))] hover:bg-[hsl(var(--accent-blue))]/10"
          >
            <Link to="/blog" className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              <span>View All Articles</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
