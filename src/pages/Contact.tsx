import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Mail, ArrowRight, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: {
          ...formData,
          source: "contact_form",
        },
      });

      if (error) throw error;

      toast({
        title: "Message Sent!",
        description:
          "Thank you for reaching out. We'll get back to you within 24 hours.",
      });

      setFormData({ name: "", email: "", company: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or email us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="noise-overlay" />
      <Navbar />

      <main className="pt-32 pb-20">
        <section className="px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Left - Info */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-secondary/40 backdrop-blur-sm mb-6">
                  <span className="text-xs tracking-[0.15em] text-muted-foreground uppercase font-medium">
                    Get in Touch
                  </span>
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter mb-6">
                  <span className="text-foreground">Let's Start</span>
                  <br />
                  <span className="gradient-text">Building</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed mb-12">
                  Book a free strategy call and discover how AI automation can
                  transform your business. No pressure, just insights.
                </p>

                {/* Contact Info */}
                <div className="space-y-6">
                  <motion.div
                    whileHover={{ x: 4 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-secondary/60 border border-border/50 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">
                        Email us at
                      </p>
                      <a
                        href="mailto:ZyoraAIAgency@outlook.com"
                        className="text-foreground font-medium hover:underline"
                      >
                        ZyoraAIAgency@outlook.com
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 4 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-secondary/60 border border-border/50 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">
                        Response time
                      </p>
                      <p className="text-foreground font-medium">
                        Within 24 hours
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 4 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-secondary/60 border border-border/50 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">
                        We work with
                      </p>
                      <p className="text-foreground font-medium">
                        Clients Worldwide
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Right - Form */}
              <AnimatedSection delay={0.2}>
                <motion.div className="glass-panel rounded-3xl p-8 md:p-10">
                  <h2 className="text-2xl font-semibold text-foreground mb-6 tracking-tight">
                    Send us a message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="text-sm text-muted-foreground mb-2 block"
                        >
                          Your Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          required
                          className="bg-secondary/40 border-border/50 focus:border-foreground/30 rounded-xl h-12"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="text-sm text-muted-foreground mb-2 block"
                        >
                          Email Address
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@company.com"
                          required
                          className="bg-secondary/40 border-border/50 focus:border-foreground/30 rounded-xl h-12"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="company"
                        className="text-sm text-muted-foreground mb-2 block"
                      >
                        Company Name
                      </label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company"
                        className="bg-secondary/40 border-border/50 focus:border-foreground/30 rounded-xl h-12"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="text-sm text-muted-foreground mb-2 block"
                      >
                        Your Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your business and what you're looking to automate..."
                        required
                        rows={5}
                        className="bg-secondary/40 border-border/50 focus:border-foreground/30 rounded-xl resize-none"
                      />
                    </div>
                    <Button
                      type="submit"
                      variant="hero"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                            className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                          />
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2 group">
                          Send Message
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </span>
                      )}
                    </Button>
                  </form>
                </motion.div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
