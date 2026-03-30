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
              Aviruddha Productivity Pvt. Ltd. is a precision engineering and manufacturing company headquartered in Pune, India. We partner with global OEMs to deliver high-tolerance machined components across automotive, fluid handling, energy, and industrial sectors.
            </p>
          </motion.div>
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
            <p className="text-primary font-semibold italic">"Driven by Detail. Defined by Purpose."</p>
          </div>
        </div>
      </section>

      {/* Capabilities & Strengths */}
      <section className="section-padding bg-secondary/20">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-heading text-3xl font-bold mb-4">What Sets Us Apart</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              With over a decade of experience in precision machining, Aviruddha has built a reputation for delivering complex, high-tolerance components to some of the most demanding industries worldwide. Our facility in Pune is equipped with advanced CNC machining centres, rigorous quality inspection systems, and a team of skilled engineers.
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
      <section className="section-padding">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-bold mb-6">Built for Global Standards</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Aviruddha serves OEMs and industrial manufacturers across India, Europe, and North America. Our quality systems, documentation practices, and engineering communication are aligned with international expectations—ensuring a seamless experience for global partners.
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
