import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Clock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Collect data from the form
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      company: formData.get("company"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      service_type: formData.get("service_type"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("http://localhost:5000/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitted(true);
        toast.success("Quote request submitted successfully!");
      } else {
        toast.error("Failed to submit. Please try again later.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Connection error. Is the backend server running?");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="section-padding">
          <div className="container mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
              <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">Contact Us</p>
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
                Let's Build Precision Together
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Share your requirements and our engineering team will respond within 24 hours.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {/* Form */}
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
                {submitted ? (
                  <div className="glass-card p-8 text-center">
                    <h3 className="font-heading text-xl font-bold text-primary mb-2">Thank You!</h3>
                    <p className="text-muted-foreground">We've received your inquiry and will respond within 24 hours.</p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="mt-4 text-primary text-sm font-medium hover:underline"
                    >
                      Send another inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-foreground/80 mb-1.5 block">Name *</label>
                        <input name="name" required type="text" className="w-full bg-muted border border-border rounded px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Your name" />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground/80 mb-1.5 block">Company</label>
                        <input name="company" type="text" className="w-full bg-muted border border-border rounded px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Company name" />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-foreground/80 mb-1.5 block">Email *</label>
                        <input name="email" required type="email" className="w-full bg-muted border border-border rounded px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary" placeholder="your@email.com" />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground/80 mb-1.5 block">Phone</label>
                        <input name="phone" type="tel" className="w-full bg-muted border border-border rounded px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary" placeholder="+91 XXXXX XXXXX" />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground/80 mb-1.5 block">Service Interest *</label>
                      <select name="service_type" required className="w-full bg-muted border border-border rounded px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary">
                        <option value="">Select a service</option>
                        <option value="CNC Machining">CNC Machining</option>
                        <option value="Precision Turning">Precision Turning</option>
                        <option value="Grinding">Grinding</option>
                        <option value="Surface Finishing">Surface Finishing</option>
                        <option value="Trade Inquiry">Trade/Brand Inquiry</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground/80 mb-1.5 block">Requirements *</label>
                      <textarea name="message" required rows={4} className="w-full bg-muted border border-border rounded px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary resize-none" placeholder="Describe your component requirements, quantities, materials..." />
                    </div>
                    <button 
                      disabled={loading}
                      type="submit" 
                      className="w-full bg-primary text-primary-foreground py-3 rounded font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50"
                    >
                      {loading ? "Submitting..." : "Submit Inquiry"}
                    </button>
                  </form>
                )}
              </motion.div>

              {/* Contact info */}
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="space-y-6">
                <div>
                  <h3 className="font-heading text-xl font-semibold mb-4">Direct Contact</h3>
                  <p className="text-muted-foreground text-sm mb-1">Director: Ganesh Jamgaonkar</p>
                </div>

                <div className="space-y-4">
                  {[
                    { icon: Phone, label: "+91 74209 16314", href: "tel:+917420916314" },
                    { icon: Mail, label: "ganesh@aviruddha.com", href: "mailto:ganesh@aviruddha.com" },
                    { icon: Linkedin, label: "LinkedIn Profile", href: "https://linkedin.com/in/ganeshjamgaonkar" },
                  ].map((c) => (
                    <a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                      <c.icon className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-sm">{c.label}</span>
                    </a>
                  ))}
                </div>

                <div className="flex items-start gap-3 text-muted-foreground">
                  <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <p className="text-sm">
                    Gat No-464/3 Kad Wasti, Kuruli, Chakan,<br />
                    Taluka-Khed, Pune 410501,<br />
                    Maharashtra, India
                  </p>
                </div>

                <div className="flex items-center gap-3 text-muted-foreground">
                  <Clock className="w-5 h-5 text-primary shrink-0" />
                  <p className="text-sm">Mon–Sat: 9:00 AM – 6:00 PM IST</p>
                </div>

                <a href="https://www.aviruddha.com" target="_blank" rel="noopener noreferrer" className="inline-block text-primary text-sm font-medium hover:underline mt-2">
                  www.aviruddha.com
                </a>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;