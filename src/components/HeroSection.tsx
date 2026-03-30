import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero-machining.jpg";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0">
      <img src={heroImg} alt="Precision CNC machining" width={1920} height={1080} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-background/75" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
    </div>

    <div className="container mx-auto px-4 relative z-10 pt-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl"
      >
        <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
          Precision Engineering & Manufacturing
        </p>
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
          Engineering Trust,{" "}
          <span className="text-gradient">Empowering Growth</span>
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
          Your strategic manufacturing partner for high-precision machined
          components. From micron-level tolerances to full-scale production—we
          deliver engineering excellence, every time.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/contact"
            className="bg-primary text-primary-foreground px-8 py-3.5 rounded font-semibold text-base hover:bg-primary/90 transition-colors text-center"
          >
            Request a Quote
          </Link>
          <Link
            to="/services"
            className="border border-border text-foreground px-8 py-3.5 rounded font-semibold text-base hover:bg-secondary transition-colors text-center"
          >
            Explore Capabilities
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-border/40 max-w-lg">
          {[
            { value: "10+", label: "Years Experience" },
            { value: "50+", label: "Global Clients" },
            { value: "±5μm", label: "Precision Tolerance" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-heading text-2xl md:text-3xl font-bold text-primary">{stat.value}</p>
              <p className="text-muted-foreground text-xs mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
