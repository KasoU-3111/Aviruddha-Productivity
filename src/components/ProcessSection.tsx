import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Requirement Understanding",
    desc: "Detailed technical review of drawings, specifications, and critical-to-quality features.",
  },
  {
    num: "02",
    title: "Engineering Review (DFM)",
    desc: "Collaborative DFM feedback exploring cost-quality-timeline balance before any metal is cut.",
  },
  {
    num: "03",
    title: "Pilot Batch Development",
    desc: "Trial machining and first-piece sample submission for customer approval and validation.",
  },
  {
    num: "04",
    title: "First-Part Approval",
    desc: "Tooling, material, SPC checkpoints, and inspection mapping aligned with IATF standards.",
  },
  {
    num: "05",
    title: "Production & Delivery",
    desc: "Full-scale production with OTIF-focused logistics, quality gates, and continuous improvement.",
  },
];

const ProcessSection = () => (
  <section className="section-padding">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">
          Our Process
        </p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
          Structured. Transparent. Reliable.
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Every engagement follows a disciplined workflow—from requirement
          understanding to continuous improvement.
        </p>
      </motion.div>

      <div className="relative max-w-3xl mx-auto">
        {/* Line */}
        <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-border" />

        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="relative flex gap-6 md:gap-8 mb-12 last:mb-0"
          >
            <div className="relative z-10 w-12 h-12 md:w-16 md:h-16 rounded-full bg-card border-2 border-primary flex items-center justify-center shrink-0">
              <span className="font-heading font-bold text-primary text-sm md:text-base">
                {step.num}
              </span>
            </div>
            <div className="pt-2 md:pt-3">
              <h3 className="font-heading text-lg md:text-xl font-semibold mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
