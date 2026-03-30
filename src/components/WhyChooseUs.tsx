import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const reasons = [
  "Micron-level precision with tolerances up to ±5μm",
  "DFM-led co-engineering for cost-optimized designs",
  "IATF-compliant quality systems and documentation",
  "Multi-material expertise: steel, SS, Inconel, copper",
  "Transparent communication and milestone-based updates",
  "End-to-end capability from prototype to production",
  "Surface finishing in-house: CED, ENP, chrome, powder coat",
  "Long-term partnership model—not transactional vendor approach",
];

const WhyChooseUs = () => (
  <section className="section-padding bg-secondary/30">
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">
            Why Aviruddha
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Built for Precision. Driven by Partnership.
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We don't just manufacture parts—we engineer trust. Every engagement
            is structured around transparency, quality, and a shared commitment
            to engineering excellence.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid gap-4"
        >
          {reasons.map((r, i) => (
            <div key={i} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <span className="text-foreground/85 text-sm">{r}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
