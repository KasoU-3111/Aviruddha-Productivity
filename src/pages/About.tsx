import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import aboutImg from "@/assets/about-precision.jpg";
import servicesImg from "@/assets/services-quality.jpg";

const About = () => (
  <>
    <Navbar />
    <main className="pt-20">
      {/* Hero */}
      <section className="section-padding bg-secondary/20">
        <div className="container mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">About Aviruddha</p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Engineering Trust, Building Partnerships
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Aviruddha Productivity Pvt. Ltd. is a precision engineering and manufacturing company headquartered in Pune, India. With over 7 years of experience, we partner with Tier 1 suppliers and global OEMs to deliver high-tolerance machined components across automotive, fluid handling, energy, and industrial sectors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quote highlight */}
      <section className="py-12 bg-primary/10 border-y border-primary/20">
        <div className="container mx-auto text-center">
          <p className="font-heading text-2xl md:text-3xl font-bold text-primary italic">
            "Driven by Detail. Defined by Purpose."
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img src={aboutImg} alt="Precision components" loading="lazy" width={1280} height={960} className="rounded-lg w-full h-80 object-cover" />
          </div>
          <div>
            <h2 className="font-heading text-3xl font-bold mb-4">Our Philosophy</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We believe manufacturing excellence is built on structured processes, transparent communication, and a relentless focus on quality. We don't operate as transactional vendors—we position ourselves as strategic partners invested in our clients' success.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our DFM-led approach ensures that every component is optimized for manufacturability, cost-efficiency, and performance before production begins. This engineering discipline eliminates surprises and builds lasting trust.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Today, we proudly export precision components to <span className="text-foreground font-medium">Germany, the United Kingdom, France, and the United States</span>—serving as a reliable manufacturing partner to Tier 1 suppliers and OEMs across the globe.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-secondary/20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">Certifications & Compliance</p>
            <h2 className="font-heading text-3xl font-bold mb-4">Globally Recognized Standards</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our quality systems and processes are certified to the highest international standards, ensuring every component meets exacting specifications.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { title: "IATF 16949", desc: "Automotive quality management system certification for consistent, reliable production." },
              { title: "ISO 9001", desc: "International standard for quality management systems across all manufacturing processes." },
              { title: "DPIIT Recognized", desc: "Recognized by the Department for Promotion of Industry and Internal Trade, Government of India." },
            ].map((cert) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card p-6 text-center"
              >
                <h3 className="font-heading text-xl font-bold text-primary mb-2">{cert.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{cert.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities & Strengths */}
      <section className="section-padding">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-heading text-3xl font-bold mb-4">What Sets Us Apart</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              With 7+ years of experience in precision machining, Aviruddha has built a reputation for delivering complex, high-tolerance components to some of the most demanding industries worldwide. Our facility in Pune is equipped with advanced CNC machining centres, rigorous quality inspection systems, and a team of skilled engineers.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We specialize in medium-volume, high-mix production—handling diverse materials including stainless steel, Inconel, copper, and specialty alloys. Every project goes through our structured DFM review, pilot batch validation, and multi-stage quality checkpoints before full production begins.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our capabilities span CNC turning, milling, grinding, and surface finishing (CED, ENP, powder coating), enabling us to deliver fully finished components ready for assembly.
            </p>
          </div>
          <div>
            <img src={servicesImg} alt="Quality inspection at Aviruddha facility" loading="lazy" width={1280} height={960} className="rounded-lg w-full h-80 object-cover" />
          </div>
        </div>
      </section>

      {/* Global Commitment */}
      <section className="section-padding bg-secondary/20">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-bold mb-6">Built for Global Standards</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Aviruddha serves Tier 1 suppliers, OEMs, and industrial manufacturers across India, Europe, and North America. Our quality systems, documentation practices, and engineering communication are aligned with international expectations—ensuring a seamless experience for global partners.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            From first inquiry to final delivery, our structured workflow and transparent communication make us a reliable extension of your engineering team. We don't just manufacture parts—we co-engineer solutions that reduce cost, improve performance, and accelerate your time to market.
          </p>
        </div>
      </section>

      <CTASection />
    </main>
    <Footer />
  </>
);

export default About;
