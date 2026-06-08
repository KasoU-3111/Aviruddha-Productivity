import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Car, Droplets, UtensilsCrossed, Factory, Cpu, Wrench, X, Expand } from "lucide-react";
import imgAutomotive from "@/assets/industries/automotive.jpg";
import imgFluid from "@/assets/industries/fluid-handling.jpg";
import imgFood from "@/assets/industries/food-processing.jpg";
import imgIndustrial from "@/assets/industries/industrial-equipment.jpg";
import imgCopper from "@/assets/industries/copper-parts.jpeg";
import imgResharpening from "@/assets/industries/resharpering-trade.png";

// Eager-load all gallery images
const galleryModules = import.meta.glob(
  "@/assets/industries/gallery/*.{jpeg,jpg,png}",
  { eager: true, query: "?url", import: "default" }
) as Record<string, string>;

const getGallery = (prefixes: string[]): string[] => {
  const matches: { key: string; url: string }[] = [];
  for (const [path, url] of Object.entries(galleryModules)) {
    const name = path.split("/").pop() || "";
    if (prefixes.some((p) => name.toLowerCase().startsWith(p.toLowerCase() + "-"))) {
      matches.push({ key: name, url });
    }
  }
  return matches
    .sort((a, b) => a.key.localeCompare(b.key, undefined, { numeric: true }))
    .map((m) => m.url);
};

const industries = [
  {
    icon: Car,
    image: imgAutomotive,
    title: "Automotive",
    desc: "Transmission parts, planet carriers, locking shafts with micron-level precision for global OEMs.",
    products: ["Transmission Components", "Gear Shafts", "Chrome Plated Shafts"],
    gallery: getGallery(["automotive"]),
  },
  {
    icon: Droplets,
    image: imgFluid,
    title: "Fluid Handling",
    desc: "Hydraulic components in SS and MS, engineered for leak-free performance under high pressure.",
    products: ["Hydraulic Manifolds", "Valve Bodies", "Pump Components"],
    gallery: getGallery(["automotive", "industrialEquipment"]),
  },
  {
    icon: UtensilsCrossed,
    image: imgFood,
    title: "Food Processing",
    desc: "SS 316L precision grooved parts with fine surface finish for hygienic processing equipment.",
    products: ["SS 316L Components", "Grooved Parts", "Sanitary Fittings"],
    gallery: getGallery(["automotive", "industrialEquipment"]),
  },
  {
    icon: Factory,
    image: imgIndustrial,
    title: "Industrial Equipment",
    desc: "Custom machined components for heavy machinery with tight tolerance control.",
    products: ["Copper Bus Bars", "Turned Parts", "Custom Extrusions"],
    gallery: getGallery(["automotive", "industrialEquipment"]),
  },
  {
    icon: Cpu,
    image: imgCopper,
    title: "Copper Parts",
    desc: "Copper extrusion components, precision bus bars, and specialty parts for energy, data centre, and solar power distribution systems.",
    products: ["Copper Bus Bars", "Connector Parts", "Heat Sinks", "Inconel Parts", "High-Temp Components"],
    gallery: getGallery(["copperpart"]),
  },
  {
    icon: Wrench,
    image: imgResharpening,
    title: "Resharpening Trade",
    desc: "Factory-grade re-sharpening, re-tipping, and re-conditioning services to restore premium industrial cutting tools to original OEM performance specifications.",
    products: ["TCT Saw Re-Sharpening", "Re-Tipping Service", "Tool Re-Conditioning", "Performance Calibration"],
    gallery: getGallery(["resharpening"]),
  },
];

const IndustriesGallery = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [lightbox, setLightbox] = useState<string | null>(null);
  const active = openIdx !== null ? industries[openIdx] : null;

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
              {/* Industry image — clickable */}
              <button
                type="button"
                onClick={() => setOpenIdx(i)}
                className="h-56 bg-muted/30 border-b border-border/30 relative overflow-hidden text-left cursor-pointer"
                aria-label={`View ${ind.title} gallery`}
              >
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
                <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-background/80 backdrop-blur px-2.5 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <Expand className="w-3.5 h-3.5 text-primary" />
                  <span className="text-xs font-medium">View Gallery</span>
                </div>
              </button>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <ind.icon className="w-5 h-5 text-primary" />
                  <h3 className="font-heading text-lg font-semibold">{ind.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{ind.desc}</p>

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

      {/* Gallery Pop-up */}
      <AnimatePresence>
        {active && (
          <motion.div
            key="gallery-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setOpenIdx(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-6xl max-h-[88vh] bg-background border border-border/50 rounded-xl shadow-2xl overflow-hidden flex flex-col"
            >
              <div className="flex items-center justify-between px-6 py-4 border-b border-border/40">
                <div className="flex items-center gap-3">
                  <active.icon className="w-5 h-5 text-primary" />
                  <div>
                    <h3 className="font-heading text-lg font-semibold leading-tight">
                      {active.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {active.gallery.length} product {active.gallery.length === 1 ? "image" : "images"}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setOpenIdx(null)}
                  aria-label="Close gallery"
                  className="w-9 h-9 rounded-full bg-secondary hover:bg-secondary/70 flex items-center justify-center transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="overflow-y-auto p-6">
                {active.gallery.length === 0 ? (
                  <p className="text-center text-muted-foreground py-12">
                    Gallery images coming soon.
                  </p>
                ) : (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {active.gallery.map((src, idx) => (
                      <motion.button
                        type="button"
                        key={src}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.04 }}
                        onClick={() => setLightbox(src)}
                        className="group relative aspect-square overflow-hidden rounded-lg border border-border/40 bg-muted/20"
                      >
                        <img
                          src={src}
                          alt={`${active.title} ${idx + 1}`}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                      </motion.button>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full-size lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] bg-black/95 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); setLightbox(null); }}
              aria-label="Close image"
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <motion.img
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              src={lightbox}
              alt="Full size"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default IndustriesGallery;