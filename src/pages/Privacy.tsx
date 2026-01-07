import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Shield, Lock, Eye, Database, UserCheck, Mail } from "lucide-react";
const sections = [{
  icon: Database,
  title: "Information We Collect",
  content: ["Personal identification information (name, email address, phone number) when you contact us or subscribe to our services.", "Usage data including pages visited, time spent, and interactions with our website.", "Technical data such as IP address, browser type, and device information for analytics purposes.", "Communication records when you correspond with us via email or contact forms."]
}, {
  icon: Eye,
  title: "How We Use Your Information",
  content: ["To provide and maintain our AI automation services.", "To communicate with you about your inquiries and our services.", "To improve our website experience and service offerings.", "To send periodic emails regarding updates (with your consent).", "To comply with legal obligations and protect our rights."]
}, {
  icon: Shield,
  title: "Data Protection & Security",
  content: ["We implement industry-standard security measures to protect your personal data.", "All data transmissions are encrypted using SSL/TLS protocols.", "Access to personal information is restricted to authorized personnel only.", "We regularly review and update our security practices."]
}, {
  icon: UserCheck,
  title: "Your Rights Under GDPR",
  content: ["Right to access: Request copies of your personal data.", "Right to rectification: Request correction of inaccurate information.", "Right to erasure: Request deletion of your personal data.", "Right to restrict processing: Request limitation of data processing.", "Right to data portability: Request transfer of your data.", "Right to object: Object to processing of your personal data."]
}, {
  icon: Lock,
  title: "Cookies & Tracking",
  content: ["We use essential cookies to ensure proper website functionality.", "Analytics cookies help us understand how visitors interact with our site.", "You can control cookie preferences through your browser settings.", "Third-party services may set their own cookies subject to their privacy policies."]
}, {
  icon: Mail,
  title: "Contact & Data Requests",
  content: ["For any privacy-related inquiries or data requests, contact us at ZyoraAIAgency@outlook.com.", "We will respond to legitimate requests within 30 days.", "You may lodge a complaint with your local data protection authority if unsatisfied with our response."]
}];
const Privacy = () => {
  return <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <div className="noise-overlay" />
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] glow-orb opacity-10" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] glow-orb opacity-5" />
        </div>

        <div className="container relative z-10 px-6">
          <AnimatedSection>
            <motion.div initial={{
            opacity: 0,
            scale: 0.9
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1]
          }} className="text-center max-w-3xl mx-auto">
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.2,
              duration: 0.6
            }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-premium mb-8">
                <Shield className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">GDPR Compliant</span>
              </motion.div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight mb-6">
                <span className="gradient-text-animated bg-primary-foreground text-gray-900 font-sans font-semibold">Privacy Policy</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Your privacy is important to us. This policy outlines how Zyora AI Agency 
                collects, uses, and protects your personal information.
              </p>

              <motion.p initial={{
              opacity: 0
            }} animate={{
              opacity: 1
            }} transition={{
              delay: 0.6,
              duration: 0.6
            }} className="text-sm text-muted-foreground/60 mt-6">
                Last updated: January 2025
              </motion.p>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20">
        <div className="container px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            {sections.map((section, index) => <AnimatedSection key={section.title} delay={index * 0.1}>
                <motion.div whileHover={{
              scale: 1.01,
              y: -4
            }} transition={{
              duration: 0.3
            }} className="glass-premium rounded-2xl p-8 hover-lift spotlight">
                  <div className="flex items-start gap-6">
                    <motion.div whileHover={{
                  rotate: 5,
                  scale: 1.1
                }} transition={{
                  duration: 0.3
                }} className="w-12 h-12 rounded-xl bg-secondary/80 flex items-center justify-center flex-shrink-0 border border-border/50">
                      <section.icon className="w-6 h-6 text-foreground/80" />
                    </motion.div>

                    <div className="flex-1">
                      <h2 className="text-xl md:text-2xl font-semibold mb-4 gradient-text">
                        {section.title}
                      </h2>
                      <ul className="space-y-3">
                        {section.content.map((item, itemIndex) => <motion.li key={itemIndex} initial={{
                      opacity: 0,
                      x: -10
                    }} whileInView={{
                      opacity: 1,
                      x: 0
                    }} viewport={{
                      once: true
                    }} transition={{
                      delay: itemIndex * 0.1,
                      duration: 0.4
                    }} className="text-muted-foreground flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50 mt-2 flex-shrink-0" />
                            <span>{item}</span>
                          </motion.li>)}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>)}
          </div>

          {/* Additional Info */}
          <AnimatedSection delay={0.6}>
            <div className="max-w-4xl mx-auto mt-16">
              <motion.div whileHover={{
              scale: 1.01
            }} className="glass-premium rounded-2xl p-8 text-center border-glow">
                <h3 className="text-xl font-semibold mb-4">Questions About Your Privacy?</h3>
                <p className="text-muted-foreground mb-6">
                  We're committed to transparency. If you have any questions about this privacy policy 
                  or how we handle your data, please don't hesitate to reach out.
                </p>
                <motion.a href="mailto:ZyoraAIAgency@outlook.com" whileHover={{
                scale: 1.05
              }} whileTap={{
                scale: 0.98
              }} className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                  <Mail className="w-4 h-4" />
                  Contact Us
                </motion.a>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Privacy;