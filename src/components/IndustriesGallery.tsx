import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Car, Droplets, UtensilsCrossed, Factory, Cpu } from "lucide-react";
import imgAutomotive from "@/assets/industries/automotive.jpg";
import imgFluid from "@/assets/industries/fluid-handling.jpg";
import imgFood from "@/assets/industries/food-processing.jpg";
import imgIndustrial from "@/assets/industries/industrial-equipment.jpg";
import imgCopper from "@/assets/industries/copper-parts.jpg";

const industries = [
  {
    icon: Car,
    image: imgAutomotive,
    title: "Automotive",
    desc: "Transmission parts, planet carriers, locking shafts with micron-level precision for global OEMs.",
    products: ["Transmission Components", "Gear Shafts", "Chrome Plated Shafts"],
  },
  {
    icon: Droplets,
    image: imgFluid,
    title: "Fluid Handling",
    desc: "Hydraulic components in SS and MS, engineered for leak-free performance under high pressure.",
    products: ["Hydraulic Manifolds", "Valve Bodies", "Pump Components"],
  },
  {
    icon: UtensilsCrossed,
    image: imgFood,
    title: "Food Processing",
    desc: "SS 316L precision grooved parts with fine surface finish for hygienic processing equipment.",
    products: ["SS 316L Components", "Grooved Parts", "Sanitary Fittings"],
  },
  {
    icon: Factory,
    image: imgIndustrial,
    title: "Industrial Equipment",
    desc: "Custom machined components for heavy machinery with tight tolerance control.",
    products: ["Copper Bus Bars", "Turned Parts", "Custom Extrusions"],
  },
  {
    icon: Cpu,
    image: imgCopper,
    title: "Copper Parts",
    desc: "Copper extrusion components, precision bus bars, and specialty parts for energy, data centre, and solar power distribution systems.",
    products: ["Copper Bus Bars", "Connector Parts", "Heat Sinks", "Inconel Parts", "High-Temp Components"],
  },
];

const IndustriesGallery = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">
            Industries & Products
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Precision Components Across Sectors
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Trusted by manufacturers worldwide for consistent quality and
            engineering-led collaboration.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card overflow-hidden group flex flex-col w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
            >
              {/* Industry image */}
              <div className="h-56 bg-muted/30 border-b border-border/30 relative overflow-hidden">
                <img
                  src={ind.image}
                  alt={`${ind.title} precision components`}
                  loading="lazy"
                  width={800}
                  height={512}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
                <div className="absolute bottom-3 left-4 flex items-center gap-2">
                  <ind.icon className="w-5 h-5 text-primary" />
                  <span className="text-sm font-semibold text-foreground">{ind.title}</span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <ind.icon className="w-5 h-5 text-primary" />
                  <h3 className="font-heading text-lg font-semibold">{ind.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{ind.desc}</p>

                {/* Product tags */}
                <div className="flex flex-wrap gap-2 mb-5 mt-auto">
                  {ind.products.map((p) => (
                    <span
                      key={p}
                      className="text-xs bg-secondary text-secondary-foreground px-2.5 py-1 rounded"
                    >
                      {p}
                    </span>
                  ))}
                </div>

                <Link
                  to="/contact"
                  className="w-full bg-primary text-primary-foreground py-2.5 rounded text-sm font-semibold hover:bg-primary/90 transition-colors text-center block"
                >
                  Request a Quote
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesGallery;
