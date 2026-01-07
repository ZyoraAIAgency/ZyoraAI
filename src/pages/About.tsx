import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Users, Lightbulb, Shield } from "lucide-react";
import zyoraLogo from "@/assets/zyora-logo.png";

const values = [
  {
    icon: Target,
    title: "Precision",
    description:
      "Every system we build is meticulously crafted for maximum impact and efficiency.",
  },
  {
    icon: Users,
    title: "Partnership",
    description:
      "We work alongside you as strategic partners, not just service providers.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We stay at the cutting edge of AI technology to give you a competitive advantage.",
  },
  {
    icon: Shield,
    title: "Reliability",
    description:
      "Our systems are built to scale and perform consistently, day after day.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="noise-overlay" />
      <Navbar />

      <main className="pt-32 pb-20">
        {/* Hero */}
        <section className="px-6 mb-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-secondary/40 backdrop-blur-sm mb-6">
                  <span className="text-xs tracking-[0.15em] text-muted-foreground uppercase font-medium">
                    About Us
                  </span>
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter mb-6">
                  <span className="text-foreground">We Are</span>{" "}
                  <span className="gradient-text">Zyora</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  A team of AI engineers, automation specialists, and growth
                  strategists dedicated to helping ambitious brands scale with
                  intelligent systems.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We believe that the best technology should feel invisible—working
                  tirelessly in the background while you focus on what matters most:
                  growing your business and serving your customers.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="aspect-square max-w-md mx-auto relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-foreground/10 to-transparent rounded-[3rem]" />
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 30,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-0 border border-border/30 rounded-[3rem]"
                  />
                  <div className="absolute inset-8 flex items-center justify-center">
                    <img
                      src={zyoraLogo}
                      alt="Zyora"
                      className="w-full h-full object-contain rounded-3xl"
                    />
                  </div>
                  {/* Floating elements */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute -top-4 -right-4 w-20 h-20 glass-panel rounded-2xl"
                  />
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 5, repeat: Infinity }}
                    className="absolute -bottom-4 -left-4 w-16 h-16 glass-panel rounded-xl"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="px-6 py-24 bg-secondary/20">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-8">
                <span className="gradient-text">Our Mission</span>
              </h2>
              <p className="text-2xl text-foreground font-medium tracking-tight leading-relaxed mb-6">
                To democratize AI automation and give every ambitious business
                access to enterprise-grade systems that scale.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We started Zyora because we saw too many great businesses
                struggling with manual processes, missed leads, and operational
                bottlenecks. We knew AI could solve these problems—but most
                solutions were too expensive, too complex, or too generic. So we
                built something better.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Values */}
        <section className="px-6 py-24">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-6">
                <span className="text-foreground">Our</span>{" "}
                <span className="gradient-text">Values</span>
              </h2>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <AnimatedSection key={value.title} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="glass-panel rounded-2xl p-8 h-full text-center"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-secondary/60 border border-border/50 flex items-center justify-center mx-auto mb-6">
                      <value.icon className="w-6 h-6 text-foreground" />
                    </div>
                    <h3 className="text-xl font-medium text-foreground mb-3 tracking-tight">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="glass-panel rounded-[2rem] p-12 md:p-16 text-center"
              >
                <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-6">
                  <span className="text-foreground">Let's Build</span>{" "}
                  <span className="gradient-text">Together</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
                  Ready to transform your business with AI? Let's start a
                  conversation.
                </p>
                <Button variant="hero" size="xl" asChild>
                  <Link to="/contact" className="group">
                    Get in Touch
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </motion.div>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
