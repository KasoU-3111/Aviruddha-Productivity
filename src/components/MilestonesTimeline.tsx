import { motion } from "framer-motion";

const milestones = [
  { year: "1999", text: "Founded by Ganesh as A. G. Corporation — an industrial products trading firm." },
  { year: "2002", text: "TaeguTec dealership awarded." },
  { year: "2006", text: "Renamed to Accord Tools and Accessories Pvt. Ltd." },
  { year: "2008", text: "M. K. Morse USA dealership for Bandsaw blades." },
  { year: "2010", text: "Exclusive agreement with Re-Bo Reber GmbH — HSS and VHM saws." },
  { year: "2012", text: "Re-sharpening facility set up in Pune. Iwasaw Japan partnership for TCT saw blades." },
  { year: "2014", text: "Exclusive agreement with La-Co Markal — special paint markers." },
  { year: "2016", text: "Precision Machined Division launched." },
  { year: "2019", text: "Group demerged — Aviruddha Productivity formed. SAAR-Hartmetall GmbH partnership." },
  { year: "2020", text: "MAQ Sweden onboarded for anti-vibration turning, milling & drilling tools." },
];

const MilestonesTimeline = () => (
  <section className="section-padding">
    <div className="container mx-auto">
      <div className="text-center mb-14 max-w-2xl mx-auto">
        <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">
          Our Journey
        </p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
          Two Decades of Engineering Excellence
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          From a trading firm in 1999 to a global precision manufacturing partner — every milestone has been driven by detail and defined by purpose.
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-primary/30 md:-translate-x-px" />

        <div className="space-y-8">
          {milestones.map((m, i) => (
            <motion.div
              key={m.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`relative flex md:items-center gap-6 md:gap-0 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="hidden md:block md:w-1/2" />
              <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary ring-4 ring-background -translate-x-1/2 mt-2" />
              <div className="pl-12 md:pl-0 md:w-1/2 md:px-8">
                <div className="glass-card p-5">
                  <p className="font-heading text-2xl font-bold text-primary mb-1">{m.year}</p>
                  <p className="text-foreground/85 text-sm leading-relaxed">{m.text}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default MilestonesTimeline;
