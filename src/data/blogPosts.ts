export type BlogPost = {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
  slug: string;
  image: string;
};

export const blogPosts: BlogPost[] = [
  {
    title: "Why Alert Noise Eats Your Roadmap",
    excerpt:
      "Every false alarm costs focus, momentum, and trust. Learn how AI-driven filtering restores signal clarity and reclaims engineering time.",
    author: "Jordan Chen",
    date: "March 15, 2024",
    readTime: "6 min read",
    tags: ["Operations", "Automation"],
    slug: "alert-noise-roadmap",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "A Practical Guide to Self-Healing Runbooks",
    excerpt:
      "Step-by-step approach to building automated remediation that actually works. From identifying patterns to implementing safe automation.",
    author: "Alex Rivera",
    date: "March 8, 2024",
    readTime: "8 min read",
    tags: ["Automation", "Best Practices"],
    slug: "self-healing-runbooks",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Reducing Ops Cost Without Slowing Delivery",
    excerpt:
      "How to optimize infrastructure spending while improving reliability and velocity. Real strategies that align spending to outcomes.",
    author: "Sam Taylor",
    date: "March 1, 2024",
    readTime: "7 min read",
    tags: ["Cost Optimization", "Strategy"],
    slug: "reduce-ops-cost",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80",
  },
];
