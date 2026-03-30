import { motion } from "framer-motion";
import { Cog, Target, Layers, Shield, Wrench, Gauge } from "lucide-react";

const services = [
  {
    icon: Cog,
    title: "CNC Precision Machining",
    desc: "Multi-axis CNC turning and milling for complex geometries with micron-level accuracy.",
  },
  {
    icon: Target,
    title: "Design for Manufacturing",
    desc: "Collaborative DFM reviews to optimize cost, quality, and timeline before production begins.",
  },
  {
    icon: Layers,
    title: "Medium-Volume Production",
    desc: "High-mix, medium-volume runs with consistent quality across every batch.",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    desc: "SPC checkpoints, IATF-compliant documentation, and full traceability on every part.",
  },
  {
    icon: Wrench,
    title: "Surface Finishing",
    desc: "CED coating, electroless nickel plating, chrome plating, and powder coating capabilities.",
  },
  {
    icon: Gauge,
    title: "Custom Components",
    desc: "From Inconel to SS 316L, copper to hardened steel—engineered to your exact specifications.",
  },
];

const ServicesOverview = () => (
  <section className="section-padding bg-secondary/30">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">
          Our Services
        </p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
          End-to-End Manufacturing Capabilities
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          From engineering review to final dispatch—every stage is
          precision-controlled and quality-assured.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-6 hover:border-primary/30 transition-colors group"
          >
            <s.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-heading text-lg font-semibold mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesOverview;
