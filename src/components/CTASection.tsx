import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CTASection = () => (
  <section className="section-padding bg-secondary/30">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto"
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
          Ready to Build{" "}
          <span className="text-gradient">Precision Together?</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
          Whether you need a single prototype or a full production run, our
          engineering team is ready to partner with you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="bg-primary text-primary-foreground px-8 py-3.5 rounded font-semibold hover:bg-primary/90 transition-colors"
          >
            Request a Quote
          </Link>
          <a
            href="tel:+917420916314"
            className="border border-border text-foreground px-8 py-3.5 rounded font-semibold hover:bg-secondary transition-colors"
          >
            Call +91 74209 16314
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
