import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesOverview from "@/components/ServicesOverview";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import servicesImg from "@/assets/services-quality.jpg";

const capabilities = [
  { title: "CNC Turning", desc: "Multi-axis turning up to ±5μm tolerance for shafts, bushings, and rotational components." },
  { title: "CNC Milling", desc: "Complex 3D geometries, pocketing, and contour milling for housings and manifolds." },
  { title: "Surface Finishing", desc: "CED coating, electroless nickel plating (ENP), chrome plating, and powder coating." },
  { title: "Material Expertise", desc: "SS 316L, Inconel, MS, hardened steel, copper, brass, and aluminum alloys." },
  { title: "Quality Systems", desc: "SPC-controlled processes with IATF-aligned documentation and full traceability." },
  { title: "Prototyping", desc: "Rapid first-article development with iterative DFM feedback loops." },
];

const Services = () => (
  <>
    <Navbar />
    <main className="pt-20">
      <section className="section-padding bg-secondary/20">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">Services</p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Full-Spectrum Precision Manufacturing
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              From engineering review to final dispatch, every stage is precision-controlled. We combine advanced CNC capabilities with rigorous quality systems to deliver components that meet global standards.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <img src={servicesImg} alt="Quality control" loading="lazy" width={1280} height={960} className="rounded-lg w-full h-80 object-cover" />
          </motion.div>
        </div>
      </section>

      {/* Detailed capabilities */}
      <section className="section-padding">
        <div className="container mx-auto">
          <h2 className="font-heading text-3xl font-bold mb-12 text-center">Technical Capabilities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6 hover:border-primary/30 transition-colors"
              >
                <h3 className="font-heading text-lg font-semibold mb-2">{c.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ServicesOverview />
      <CTASection />
    </main>
    <Footer />
  </>
);

export default Services;
