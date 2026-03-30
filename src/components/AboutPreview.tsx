import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import aboutImg from "@/assets/about-precision.jpg";

const AboutPreview = () => (
  <section className="section-padding">
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative rounded-lg overflow-hidden">
            <img
              src={aboutImg}
              alt="Precision engineered components"
              width={1280}
              height={960}
              loading="lazy"
              className="w-full h-80 md:h-[28rem] object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/80 to-transparent p-6">
              <p className="text-primary font-heading font-semibold text-sm tracking-wider">
                Driven by Detail. Defined by Purpose.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">About Us</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            More Than a Vendor—A Strategic Manufacturing Partner
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Aviruddha Productivity Pvt. Ltd. is a precision engineering company
            headquartered in Pune, India. We specialize in high-tolerance
            machined components for global OEMs across automotive, fluid
            handling, energy, and industrial equipment sectors.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Our approach is rooted in engineering discipline—DFM-led
            co-engineering, rigorous quality checkpoints, and transparent
            communication that builds enduring partnerships.
          </p>
          <Link
            to="/about"
            className="text-primary font-semibold hover:underline underline-offset-4 transition-all"
          >
            Learn More About Us →
          </Link>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutPreview;
