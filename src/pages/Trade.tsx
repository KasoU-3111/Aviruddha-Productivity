import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { motion } from "framer-motion";
import { Eye, Target, Heart, Package } from "lucide-react";
import sector1 from "@/assets/sector-1.png";
import sector2 from "@/assets/sector-2.png";
import sector3 from "@/assets/sector-3.png";
import sector4 from "@/assets/sector-4.png";
import sector5 from "@/assets/sector-5.png";
import sector6 from "@/assets/sector-6.png";
import logoTata from "@/assets/clients/Tata_logo.jpg";
import logoTataGe from "@/assets/clients/Tata_GE_logo.jpg";
import logoSail from "@/assets/clients/Sail_Steel_Authority_of_India_logo.jpg";
import logoBirla from "@/assets/clients/Aditya_Birla_Group_Logo.svg.jpg";
import logoAlfa from "@/assets/clients/alfa-laval-logo.jpg";
import logoLemken from "@/assets/clients/lemken-logo.jpg";
import logoLT from "@/assets/clients/larsen&toubro-logo.jpg";
import logoKalyani from "@/assets/clients/Kalyani_Group_logo.jpg";
import logoHyundai from "@/assets/clients/Hyundai_steel-logo.jpg";
import logoBrembo from "@/assets/clients/brembo-logo.jpg";
import logoAmpco from "@/assets/clients/Ampco-logo.jpg";
import logoBharatForge from "@/assets/clients/Bharat_Forge-logo.jpg";

// Expanded product lines structured with item lists for clear sub-point overview display
const products = [
  {
    brand: "Re-Bo",
    origin: "Made in Germany",
    body: "Premium industrial circular saw blades engineered for high-performance cold-saw applications.",
    lines: ["Top HSS / HSS-E Blades", "DIN Standard Circular Saws", "VHM Solid Carbide Blades", "TCT Steel & Non-Ferrous Blades"]
  },
  {
    brand: "Saar-Hartmetall",
    origin: "Made in Germany",
    body: "Heavy-duty mill tooling and wear-resistant carbide specialized solutions for tube and pipe manufacturing.",
    lines: ["Internal Scarfing Tools", "External Scarfing & Peeling Inserts", "Impeders & Ferrite Rods", "Forming & Sizing Rolls"]
  },
  {
    brand: "KSW",
    origin: "Made in Japan",
    body: "Precision industrial cutting tools designed for high-volume manufacturing and material processing.",
    lines: ["TCT Circular Saws", "Billet & Bloom Saws", "Continuous Friction Blades", "Industrial Processing Knives"]
  },
  {
    brand: "MAQ",
    origin: "Made in Sweden",
    body: "Patented Self-Tuning Mass Damper (STMD) systems specialized to eradicate tool vibration.",
    lines: ["AV Boring Bars (Up to 12×D)", "HSK-Shank Milling Holders", "BT-Spindle Milling Holders", "Deep-Hole Drilling Assemblies"]
  },
  {
    brand: "La-Co Markal",
    origin: "Made in France",
    body: "High-performance handheld industrial marking products built to withstand severe conditions.",
    lines: ["Solid Paint Crayons", "Liquid Paint Markers", "High-Temperature Markers", "Layout & Inspection Fluids"]
  },
];

const sectors = [
  { src: sector1, alt: "Sector 1" },
  { src: sector2, alt: "Sector 2" },
  { src: sector3, alt: "Sector 3" },
  { src: sector4, alt: "Sector 4" },
  { src: sector5, alt: "Sector 5" },
  { src: sector6, alt: "Sector 6" },
];

const customers = [
  { name: "Tata Group", logo: logoTata },
  { name: "Tata GE", logo: logoTataGe },
  { name: "SAIL", logo: logoSail },
  { name: "Aditya Birla Group", logo: logoBirla },
  { name: "Alfa Laval", logo: logoAlfa },
  { name: "LEMKEN", logo: logoLemken },
  { name: "Larsen & Toubro", logo: logoLT },
  { name: "Kalyani Group", logo: logoKalyani },
  { name: "Hyundai Steel", logo: logoHyundai },
  { name: "Brembo", logo: logoBrembo },
  { name: "AMPCO", logo: logoAmpco },
  { name: "Bharat Forge", logo: logoBharatForge },
];

const Trade = () => (
  <>
    <Navbar />
    <main className="pt-20">
      {/* Hero */}
      <section className="section-padding bg-secondary/20">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
              Trade Division
            </p>
            <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6">
              Global Brands
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
              Authorized direct Indian representation for world-class cutting, tooling, 
              and marking solutions backed by Aviruddha's technical alignment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Line Brief Listing Grid */}
      <section className="section-padding">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">
              Authorized Portfolios
            </p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
              Our Strength, Our Products
            </h2>
            <p className="text-muted-foreground text-lg">
              A comprehensive overview of high-productivity equipment ranges active across premium industrial networks.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p, i) => (
              <motion.div
                key={p.brand}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass-card p-8 flex flex-col h-full border border-border/40 hover:border-primary/30 transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <Package className="w-6 h-6 text-primary" />
                </div>
                
                <div className="flex items-baseline justify-between gap-2 mb-2">
                  <h3 className="font-heading text-2xl font-bold text-foreground">
                    {p.brand}
                  </h3>
                  <span className="text-primary text-xs font-semibold tracking-wider uppercase whitespace-nowrap bg-primary/5 px-2.5 py-1 rounded">
                    {p.origin}
                  </span>
                </div>
                
                <p className="text-muted-foreground leading-relaxed text-sm mb-6">
                  {p.body}
                </p>

                {/* Sub-itemised Product Categorisation List */}
                <div className="mt-auto pt-4 border-t border-border/30">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-foreground/70 mb-3">
                    Product Line Range:
                  </h4>
                  <ul className="space-y-2">
                    {p.lines.map((line) => (
                      <li key={line} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Sectors Section with High-Contrast Text Overlays */}
      <section className="section-padding bg-secondary/10">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-14"
          >
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">
              Industries We Serve
            </p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
              Our Sectors
            </h2>
            <p className="text-muted-foreground text-lg">
              Trusted across diverse industrial verticals worldwide.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {sectors.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="aspect-[4/3] rounded-lg overflow-hidden border border-border bg-card"
              >
                <img
                  src={s.src}
                  alt={s.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Esteemed Customers */}
      <section className="section-padding">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">
              Trusted Worldwide
            </p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
              Esteemed Customers
            </h2>
            <p className="text-muted-foreground text-lg">
              Partnering with industry leaders across India and beyond.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {customers.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="bg-white rounded-lg flex items-center justify-center h-28 px-6 hover:shadow-lg transition-shadow"
                title={c.name}
              >
                <img
                  src={c.logo}
                  alt={`${c.name} logo`}
                  loading="lazy"
                  className="max-h-20 max-w-full object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Single CTA Section */}
      <section className="section-padding bg-secondary/20">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              Explore Our{" "}
              <span className="text-gradient">Trade Vertical</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Discover our complete portfolio of premium global engineering
              brands and trade solutions.
            </p>
            <a
              href="#/trade-portal"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-primary-foreground px-8 py-3.5 rounded font-semibold hover:bg-primary/90 transition-colors"
            >
              Open Trade Page
            </a>
          </motion.div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default Trade;