import { motion } from "framer-motion";
import lt from "@/assets/clients/larsen&toubro-logo.jpg";
import lemken from "@/assets/clients/lemken-logo.jpg";
import tata from "@/assets/clients/Tata_logo.jpg";
import tataGe from "@/assets/clients/Tata_GE_logo.jpg";
import hyundai from "@/assets/clients/Hyundai_steel-logo.jpg";
import birla from "@/assets/clients/Aditya_Birla_Group_Logo.svg.jpg";
import brembo from "@/assets/clients/brembo-logo.jpg";
import ampco from "@/assets/clients/Ampco-logo.jpg";
import bharatForge from "@/assets/clients/Bharat_Forge-logo.jpg";
import kalyani from "@/assets/clients/Kalyani_Group_logo.jpg";
import sail from "@/assets/clients/Sail_Steel_Authority_of_India_logo.jpg";
import alfa from "@/assets/clients/alfa-laval-logo.jpg";

const clients = [
  { name: "Larsen & Toubro", logo: lt },
  { name: "LEMKEN", logo: lemken },
  { name: "Tata Group", logo: tata },
  { name: "Tata GE", logo: tataGe },
  { name: "Hyundai Steel", logo: hyundai },
  { name: "Aditya Birla Group", logo: birla },
  { name: "Brembo", logo: brembo },
  { name: "AMPCO", logo: ampco },
  { name: "Bharat Forge", logo: bharatForge },
  { name: "Kalyani Group", logo: kalyani },
  { name: "SAIL", logo: sail },
  { name: "Alfa Laval", logo: alfa },
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

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {clients.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04 }}
            className="bg-white rounded-lg flex items-center justify-center h-24 px-4 hover:shadow-lg transition-shadow"
            title={c.name}
          >
            <img
              src={c.logo}
              alt={`${c.name} logo`}
              loading="lazy"
              className="max-h-16 max-w-full object-contain"
            />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustedBy;
