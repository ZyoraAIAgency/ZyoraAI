import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    slug: "future-of-ai-automation-2025",
    title: "The Future of AI Automation: What to Expect in 2025",
    excerpt:
      "Explore the cutting-edge AI trends that will reshape how businesses operate, from autonomous agents to hyper-personalization.",
    category: "Industry Trends",
    author: "Zyora Team",
    date: "January 5, 2025",
    readTime: "8 min read",
    featured: true,
  },
  {
    slug: "5-signs-business-needs-automation",
    title: "5 Signs Your Business Needs AI Automation",
    excerpt:
      "Discover the key indicators that suggest it's time to implement AI automation in your business processes.",
    category: "Business Tips",
    author: "Zyora Team",
    date: "January 3, 2025",
    readTime: "5 min read",
    featured: false,
  },
  {
    slug: "maximizing-roi-ai-systems",
    title: "Maximizing ROI with AI Systems: A Complete Guide",
    excerpt:
      "Learn how to measure, optimize, and scale your AI automation investments for maximum return.",
    category: "Strategy",
    author: "Zyora Team",
    date: "December 28, 2024",
    readTime: "10 min read",
    featured: false,
  },
  {
    slug: "ai-vs-traditional-automation",
    title: "AI Automation vs Traditional Automation: Key Differences",
    excerpt:
      "Understanding the fundamental differences between AI-powered automation and traditional rule-based systems.",
    category: "Education",
    author: "Zyora Team",
    date: "December 22, 2024",
    readTime: "6 min read",
    featured: false,
  },
  {
    slug: "building-ai-first-company",
    title: "Building an AI-First Company Culture",
    excerpt:
      "How forward-thinking businesses are embedding AI into their DNA and staying ahead of the competition.",
    category: "Culture",
    author: "Zyora Team",
    date: "December 18, 2024",
    readTime: "7 min read",
    featured: false,
  },
  {
    slug: "ai-customer-service-revolution",
    title: "The AI Customer Service Revolution",
    excerpt:
      "How AI is transforming customer support from a cost center into a competitive advantage.",
    category: "Industry Trends",
    author: "Zyora Team",
    date: "December 12, 2024",
    readTime: "6 min read",
    featured: false,
  },
];

const Blog = () => {
  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  return (
    <div className="min-h-screen bg-background">
      <div className="noise-overlay" />
      <Navbar />

      <main className="pt-32 pb-20">
        {/* Header */}
        <section className="px-6 mb-20">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-secondary/40 backdrop-blur-sm mb-6">
                <span className="text-xs tracking-[0.15em] text-muted-foreground uppercase font-medium">
                  Insights & Resources
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter mb-6">
                <span className="gradient-text">AI Automation</span>{" "}
                <span className="text-foreground">Blog</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Expert insights, trends, and strategies to help you leverage AI
                automation for business growth.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="px-6 mb-20">
            <div className="max-w-7xl mx-auto">
              <AnimatedSection>
                <motion.article
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="glass-panel rounded-3xl p-8 md:p-12 border border-border/50 hover:border-foreground/20 transition-all duration-500 group cursor-pointer relative overflow-hidden"
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="px-3 py-1 rounded-full bg-foreground/10 text-xs font-medium text-foreground">
                        Featured
                      </span>
                      <span className="px-3 py-1 rounded-full border border-border/50 text-xs font-medium text-muted-foreground">
                        {featuredPost.category}
                      </span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4 group-hover:gradient-text transition-all duration-300">
                      {featuredPost.title}
                    </h2>

                    <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
                      {featuredPost.excerpt}
                    </p>

                    <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{featuredPost.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="w-6 h-6 text-foreground" />
                  </div>
                </motion.article>
              </AnimatedSection>
            </div>
          </section>
        )}

        {/* Blog Grid */}
        <section className="px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <AnimatedSection key={post.slug} delay={index * 0.1}>
                  <motion.article
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="glass-panel rounded-2xl p-6 border border-border/50 hover:border-foreground/20 transition-all duration-500 group cursor-pointer h-full flex flex-col"
                  >
                    <div className="mb-4">
                      <span className="px-3 py-1 rounded-full border border-border/50 text-xs font-medium text-muted-foreground">
                        {post.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-medium tracking-tight text-foreground mb-3 group-hover:gradient-text transition-all duration-300 flex-grow">
                      {post.title}
                    </h3>

                    <p className="text-sm text-muted-foreground mb-6 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-xs text-muted-foreground mt-auto pt-4 border-t border-border/30">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </motion.article>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 mt-32">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <div className="glass-panel rounded-3xl p-12 text-center border border-border/50">
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
                  <span className="text-foreground">Ready to</span>{" "}
                  <span className="gradient-text">Automate?</span>
                </h2>
                <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                  Let's discuss how AI automation can transform your business
                  operations.
                </p>
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">
                    Book a Strategy Call
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
