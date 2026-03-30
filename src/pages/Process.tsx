import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProcessSection from "@/components/ProcessSection";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";

const Process = () => (
  <>
    <Navbar />
    <main className="pt-20">
      <section className="section-padding bg-secondary/20">
        <div className="container mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">Our Process</p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              A Learning-Led Engineering Workflow
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our process isn't linear—it's iterative and learning-led. Every loop strengthens reliability, elevates trust, and creates true customer partnership.
            </p>
          </motion.div>
        </div>
      </section>

      <ProcessSection />
      <CTASection />
    </main>
    <Footer />
  </>
);

export default Process;
