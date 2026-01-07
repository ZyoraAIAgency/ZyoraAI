import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { FileText, Scale, AlertCircle, CreditCard, Shield, Gavel, RefreshCw, Mail } from "lucide-react";
const sections = [{
  icon: FileText,
  title: "1. Agreement to Terms",
  content: `By accessing or using the services provided by Zyora AI Agency ("Company," "we," "us," or "our"), you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.

These terms apply to all visitors, users, and clients who access or use our AI automation and digital solutions services.`
}, {
  icon: Scale,
  title: "2. Services Description",
  content: `Zyora AI Agency provides AI automation, website optimization, email/CRM automation, AI call handling, and related digital services. Our services are designed to help businesses scale through intelligent automation solutions.

We reserve the right to modify, suspend, or discontinue any aspect of our services at any time without prior notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuance of services.`
}, {
  icon: CreditCard,
  title: "3. Payment Terms",
  content: `Payment terms are established upon engagement and outlined in your specific service agreement. All fees are non-refundable unless otherwise stated in writing.

Invoices are due within 14 days of receipt unless otherwise agreed. Late payments may incur interest at the rate of 1.5% per month. We reserve the right to suspend services for accounts with outstanding balances exceeding 30 days.`
}, {
  icon: Shield,
  title: "4. Intellectual Property",
  content: `All content, features, and functionality of our services—including but not limited to design, code, graphics, and documentation—are owned by Zyora AI Agency and protected by international copyright and trademark laws.

Upon full payment, clients receive a license to use deliverables for their business purposes. We retain ownership of proprietary methodologies, frameworks, and tools developed during service delivery.`
}, {
  icon: AlertCircle,
  title: "5. Limitation of Liability",
  content: `To the maximum extent permitted by law, Zyora AI Agency shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services.

Our total liability for any claim arising from these terms or our services shall not exceed the total amount paid by you in the twelve (12) months preceding the claim.`
}, {
  icon: RefreshCw,
  title: "6. Service Modifications",
  content: `We continuously improve our services and may update features, pricing, or terms. Significant changes will be communicated to active clients at least 30 days in advance when possible.

Continued use of our services after changes constitutes acceptance of the new terms. If you do not agree to modified terms, you may terminate your engagement following the procedures outlined in your service agreement.`
}, {
  icon: Gavel,
  title: "7. Governing Law & Disputes",
  content: `These Terms of Service shall be governed by and construed in accordance with applicable laws. Any disputes arising from these terms or our services shall first be addressed through good-faith negotiation.

If disputes cannot be resolved through negotiation within 30 days, they shall be submitted to binding arbitration. Each party shall bear its own costs in any dispute resolution process.`
}];
const Terms = () => {
  return <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <div className="noise-overlay" />
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] glow-orb opacity-10" />
          <div className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] glow-orb opacity-5" />
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
                <Gavel className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Legal Agreement</span>
              </motion.div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight mb-6">
                <span className="gradient-text-animated text-gray-900 bg-primary">Terms of Service</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Please read these terms carefully before engaging with our services. 
                By using our services, you agree to these terms and conditions.
              </p>

              <motion.p initial={{
              opacity: 0
            }} animate={{
              opacity: 1
            }} transition={{
              delay: 0.6,
              duration: 0.6
            }} className="text-sm text-muted-foreground/60 mt-6">
                Effective Date: January 2025
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
                      <div className="text-muted-foreground whitespace-pre-line leading-relaxed">
                        {section.content}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>)}
          </div>

          {/* Contact Section */}
          <AnimatedSection delay={0.7}>
            <div className="max-w-4xl mx-auto mt-16">
              <motion.div whileHover={{
              scale: 1.01
            }} className="glass-premium rounded-2xl p-8 text-center border-glow">
                <h3 className="text-xl font-semibold mb-4">Questions About These Terms?</h3>
                <p className="text-muted-foreground mb-6">
                  If you have any questions about these Terms of Service, please contact us. 
                  We're here to clarify any concerns you may have.
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

          {/* Footer Note */}
          <AnimatedSection delay={0.8}>
            <div className="max-w-4xl mx-auto mt-12 text-center">
              <p className="text-sm text-muted-foreground/60">
                These terms constitute the entire agreement between you and Zyora AI Agency 
                regarding the use of our services and supersede all prior agreements.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Terms;