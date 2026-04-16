import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { Eye, Target, Heart } from "lucide-react";

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

const Trade = () => (
  <>
    <Navbar />
    <main className="pt-20">
      {/* Hero */}
      <section className="section-padding bg-secondary/20">
        <div className="container mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">Trade</p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Our Vision, Mission & Values
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              The principles that guide every partnership, every component, and every decision at Aviruddha.
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

      <CTASection />
    </main>
    <Footer />
  </>
);

export default Trade;
