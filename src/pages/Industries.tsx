import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import IndustriesGallery from "@/components/IndustriesGallery";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";

const Industries = () => (
  <>
    <Navbar />
    <main className="pt-20">
      <section className="section-padding bg-secondary/20">
        <div className="container mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">Industries & Products</p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Precision Components for Every Sector
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              From automotive transmission parts to Inconel turbine components—we serve industries that demand zero compromise on quality.
            </p>
          </motion.div>
        </div>
      </section>

      <IndustriesGallery />
      <CTASection />
    </main>
    <Footer />
  </>
);

export default Industries;
