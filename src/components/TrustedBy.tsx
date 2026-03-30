import { motion } from "framer-motion";

const clients = [
  "Larsen & Toubro (L&T)",
  "Mahindra Powerol",
  "LEMKEN",
  "Tata Group",
  "Hyundai Steel",
  "Aditya Birla Group",
  "Brembo",
  "AMPCO",
  "Bharat Forge",
];

const TrustedBy = () => (
  <section className="section-padding bg-secondary/20">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">
          Our Clients
        </p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
          Trusted by Industry Leaders
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          We are proud to partner with some of the most respected names in
          manufacturing and engineering worldwide.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {clients.map((name, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="glass-card flex items-center justify-center h-28 px-4 text-center"
          >
            <span className="text-sm font-semibold text-muted-foreground tracking-wide">
              {name}
            </span>
          </motion.div>
        ))}
      </div>

      <p className="text-center text-xs text-muted-foreground/60 mt-6">
        Logos coming soon — placeholder labels shown
      </p>
    </div>
  </section>
);

export default TrustedBy;
