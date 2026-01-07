import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Globe, Mail, Phone, Layers, Bot, Workflow, Database } from "lucide-react";
const services = [{
  icon: Zap,
  title: "AI Automation for Sales & Leads",
  description: "Transform your sales pipeline with intelligent AI workflows that qualify, nurture, and convert leads 24/7 without human intervention.",
  features: ["Automated lead scoring & qualification", "Personalized outreach sequences", "Real-time intent detection", "CRM sync & data enrichment"]
}, {
  icon: Globe,
  title: "Website/App & Funnel Optimization",
  description: "High-converting landing pages and sales funnels engineered for performance, built with conversion psychology and data-driven design.",
  features: ["A/B testing & optimization", "Conversion rate optimization", "Mobile-first responsive design", "Speed & performance tuning"]
}, {
  icon: Mail,
  title: "Email & CRM Automation",
  description: "Seamless email sequences and CRM integrations that nurture leads through every stage of your funnel while you focus on strategy.",
  features: ["Multi-step email sequences", "Behavior-triggered campaigns", "CRM workflow automation", "Analytics & reporting"]
}, {
  icon: Phone,
  title: "AI Call Handling & Follow-ups",
  description: "Never miss a lead with AI-powered call routing, intelligent transcription, and automated follow-up systems that work around the clock.",
  features: ["AI-powered call routing", "Automatic transcription & notes", "Smart follow-up scheduling", "Call analytics & insights"]
}, {
  icon: Layers,
  title: "Full AI Ecosystem for Brands",
  description: "Complete end-to-end AI infrastructure that connects every touchpoint of your business into one intelligent, self-optimizing system.",
  features: ["Cross-platform integration", "Unified data architecture", "Predictive analytics", "Continuous optimization"]
}, {
  icon: Bot,
  title: "Custom AI Chatbots",
  description: "Intelligent conversational AI that handles customer inquiries, books meetings, and provides support with human-like understanding.",
  features: ["Natural language processing", "Custom training & personas", "Multi-channel deployment", "Seamless handoff to humans"]
}, {
  icon: Workflow,
  title: "Workflow Automation",
  description: "Eliminate repetitive tasks and streamline operations with custom automation workflows that save hours every week.",
  features: ["Process mapping & design", "Tool integration & APIs", "Error handling & alerts", "Performance monitoring"]
}, {
  icon: Database,
  title: "Data & Analytics Systems",
  description: "Turn raw data into actionable insights with automated reporting, dashboards, and predictive analytics powered by AI.",
  features: ["Automated data collection", "Real-time dashboards", "Predictive modeling", "Custom report generation"]
}];
const Services = () => {
  return <div className="min-h-screen bg-background">
      <div className="noise-overlay" />
      <Navbar />

      <main className="pt-32 pb-20">
        {/* Hero */}
        <section className="px-6 mb-24">
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1]
          }} className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-secondary/40 backdrop-blur-sm mb-6">
                <span className="text-xs tracking-[0.15em] text-muted-foreground uppercase font-medium">
                  Our Services
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter mb-6">
                <span className="gradient-text">AI Systems</span>
                <br />
                <span className="text-foreground">That Drive Results</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We don't just implement tools—we architect intelligent automation
                ecosystems that transform how your business operates and scales.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="px-6 mb-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => <AnimatedSection key={service.title} delay={index * 0.1}>
                  <motion.div whileHover={{
                y: -4
              }} transition={{
                duration: 0.3
              }} className="glass-panel rounded-3xl p-8 h-full group">
                    <div className="w-14 h-14 rounded-2xl bg-secondary/60 border border-border/50 flex items-center justify-center mb-6 group-hover:border-foreground/20 transition-colors">
                      <service.icon className="w-6 h-6 text-foreground" />
                    </div>
                    <h3 className="text-2xl font-medium text-foreground mb-4 tracking-tight text-justify font-mono">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <ul className="grid grid-cols-2 gap-3">
                      {service.features.map(feature => <li key={feature} className="text-sm text-muted-foreground flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-muted-foreground" />
                          {feature}
                        </li>)}
                    </ul>
                  </motion.div>
                </AnimatedSection>)}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <motion.div whileHover={{
              scale: 1.01
            }} className="glass-panel rounded-[2rem] p-12 md:p-16 text-center">
                <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-6">
                  <span className="text-foreground">Ready to</span>{" "}
                  <span className="gradient-text">Automate?</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
                  Let's discuss how we can build the perfect AI automation system
                  for your business needs.
                </p>
                <Button variant="hero" size="xl" asChild>
                  <Link to="/contact" className="group">
                    Book a Strategy Call
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </motion.div>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <Footer />
    </div>;
};
export default Services;