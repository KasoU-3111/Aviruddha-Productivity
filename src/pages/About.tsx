import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import aboutImg from "@/assets/about-precision.jpg";
import servicesImg from "@/assets/services-quality.jpg";

const About = () => (
  <>
    <Navbar />
    <main className="pt-20">
      {/* Hero */}
      <section className="section-padding bg-secondary/20">
        <div className="container mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">About Aviruddha</p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Engineering Trust, Building Partnerships
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Aviruddha Productivity Pvt. Ltd. is a precision engineering and manufacturing company headquartered in Pune, India. We partner with global OEMs to deliver high-tolerance machined components across automotive, fluid handling, energy, and industrial sectors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission/Vision */}
      <section className="section-padding">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img src={aboutImg} alt="Precision components" loading="lazy" width={1280} height={960} className="rounded-lg w-full h-80 object-cover" />
          </div>
          <div>
            <h2 className="font-heading text-3xl font-bold mb-4">Our Philosophy</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We believe manufacturing excellence is built on structured processes, transparent communication, and a relentless focus on quality. We don't operate as transactional vendors—we position ourselves as strategic partners invested in our clients' success.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our DFM-led approach ensures that every component is optimized for manufacturability, cost-efficiency, and performance before production begins. This engineering discipline eliminates surprises and builds lasting trust.
            </p>
            <p className="text-primary font-semibold italic">"Driven by Detail. Defined by Purpose."</p>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding bg-secondary/20">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-heading text-3xl font-bold mb-4">Leadership</h2>
            <h3 className="font-heading text-xl font-semibold text-primary mb-2">Ganesh Jamgaonkar</h3>
            <p className="text-muted-foreground text-sm mb-4">Director, Aviruddha Productivity Pvt. Ltd.</p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              With deep expertise in precision manufacturing and a commitment to engineering-led growth, Ganesh leads the company's vision of becoming a globally recognized manufacturing partner. His hands-on approach to customer relationships and quality standards defines the company culture.
            </p>
            <a href="https://linkedin.com/in/ganeshjamgaonkar" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm font-medium">
              Connect on LinkedIn →
            </a>
          </div>
          <div>
            <img src={servicesImg} alt="Quality inspection" loading="lazy" width={1280} height={960} className="rounded-lg w-full h-80 object-cover" />
          </div>
        </div>
      </section>

      <CTASection />
    </main>
    <Footer />
  </>
);

export default About;
