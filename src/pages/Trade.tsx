import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Eye, Target, Heart, Package } from "lucide-react";
import sector1 from "@/assets/sector-1.png";
import sector2 from "@/assets/sector-2.png";
import sector3 from "@/assets/sector-3.png";
import sector4 from "@/assets/sector-4.png";
import sector5 from "@/assets/sector-5.png";
import sector6 from "@/assets/sector-6.png";

const pillars = [
  {
    icon: Eye,
    title: "Our Vision",
    body: "The company envisions a future driven by purpose, precision, and strong partnerships. It aims to foster sustainable growth across global value chains by delivering reliable solutions and maintaining high standards of quality and innovation. Through continuous improvement and collaboration, the organization strives to create long-term value for customers and contribute positively to industry advancement.",
  },
  {
    icon: Target,
    title: "Our Mission",
    body: "To be a premium supplier with clear focus on each business, exceeding our customers' expectations in Quality, Cost and Delivery through continuous improvement and customer interaction. To strive to be the industry standard in quality, service and technology up-gradation.",
  },
  {
    icon: Heart,
    title: "Our Values",
    body: "\"Customer First\" by serving them with Integrity, Commitment, Passion and Speed. Providing a work environment where our employees can meet their potential and thrive in an atmosphere of excellence. To nurture nature, so that we can have a better future.",
  },
];

const products = [
  {
    brand: "Re-Bo",
    origin: "Made in Germany",
    body: "Product line of HSS saw blades for pipes and tubes.",
  },
  {
    brand: "Saar-Hartmetall",
    origin: "Made in Germany",
    body: "Product line of internal and external scarfing tools, inserts, ferrite rods, epoxy tubes, impeders, peeling tools and rolls.",
  },
  {
    brand: "KSW",
    origin: "Made in Korea",
    body: "Product line of TCT saw blades for cutting billets and pipes, with a range from diameter 250 mm to 910 mm.",
  },
  {
    brand: "MAQ",
    origin: "Made in Sweden",
    body: "Product line of anti-vibration boring bars up to 12×D and milling holders in HSK and BT series.",
  },
  {
    brand: "La-Co Markal",
    origin: "Made in France",
    body: "Product line of high-performance handheld industrial paint markers, dot markers, high-temp markers and more.",
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
  "Tata",
  "GE (General Electric)",
  "SAIL (Steel Authority of India Limited)",
  "Aditya Birla Group",
  "ALFA LAVAL",
  "LEMKEN",
  "Larsen & Toubro (L&T)",
  "Kalyani Group",
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
              Trade
            </p>
            <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6">
              Trade
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
              The principles, products, and partnerships that define Aviruddha's
              global trade vertical.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quote highlight */}
      <section className="py-12 bg-primary/10 border-y border-primary/20">
        <div className="container mx-auto text-center">
          <p className="font-heading text-2xl md:text-3xl font-bold text-primary italic">
            "Driven by Detail. Defined by Purpose."
          </p>
        </div>
      </section>

      {/* Pillars */}
      <section className="section-padding">
        <div className="container mx-auto grid md:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 flex flex-col"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                <p.icon className="w-6 h-6 text-primary" />
              </div>
              <h2 className="font-heading text-2xl font-bold mb-4">{p.title}</h2>
              <p className="text-muted-foreground leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Our Strength Our Products */}
      <section className="section-padding bg-secondary/20">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-14"
          >
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">
              Global Brand Partnerships
            </p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
              Our Strength, Our Products
            </h2>
            <p className="text-muted-foreground text-lg">
              Authorized representation of premium engineering brands from across
              Europe and Asia.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p, i) => (
              <motion.div
                key={p.brand}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass-card p-7 flex flex-col"
              >
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                  <Package className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading text-2xl font-bold mb-1">
                  {p.brand}
                </h3>
                <p className="text-primary text-sm font-medium mb-4">
                  {p.origin}
                </p>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {p.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Sectors */}
      <section className="section-padding">
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

          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
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
      <section className="section-padding bg-secondary/20">
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
                key={c}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="glass-card flex items-center justify-center h-28 px-4 text-center"
              >
                <span className="text-sm font-semibold text-muted-foreground tracking-wide">
                  {c}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Single CTA */}
      <section className="section-padding">
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
            <Link
              to="/trade"
              className="inline-block bg-primary text-primary-foreground px-8 py-3.5 rounded font-semibold hover:bg-primary/90 transition-colors"
            >
              Open Trade Page
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default Trade;
