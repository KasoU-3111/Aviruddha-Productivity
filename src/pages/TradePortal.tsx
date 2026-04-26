import { useState } from "react";
import { motion } from "framer-motion";
import {
  Download,
  ChevronDown,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Clock,
  Globe,
  Send,
  Image as ImageIcon,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

// Re-Bo
import reboTopHss from "@/assets/trade/rebo/rebo-top-hss.jpg";
import reboHssDin from "@/assets/trade/rebo/rebo-hss-din.jpg";
import reboVhm from "@/assets/trade/rebo/rebo-vhm.jpg";
import reboVhmDin from "@/assets/trade/rebo/rebo-vhm-din.png";
import reboTctSteel from "@/assets/trade/rebo/rebo-tct-steel.png";
import reboTctNonferrous from "@/assets/trade/rebo/rebo-tct-nonferrous.png";

// Saar-Hartmetall
import saarInternal from "@/assets/trade/saar/internal-scarfing.jpg";
import saarExternal from "@/assets/trade/saar/external-scarfing.jpg";
import saarImpeders from "@/assets/trade/saar/impeders.png";
import saarPeeling from "@/assets/trade/saar/peeling.jpg";
import saarRolls from "@/assets/trade/saar/forming-rolls.jpg";

// Kanefusa
import kanefusaTct from "@/assets/trade/kanefusa/tct.jpg";
import kanefusaBillet from "@/assets/trade/kanefusa/billet-bloom.jpg";
import kanefusaFriction from "@/assets/trade/kanefusa/friction.jpg";
import kanefusaKnives from "@/assets/trade/kanefusa/knives.jpg";
import kanefusaWood from "@/assets/trade/kanefusa/wood-composite.jpg";
import kanefusaService from "@/assets/trade/kanefusa/resharpening.jpg";

// MAQ
import maqBoring from "@/assets/trade/maq/boring.png";
import maqMilling from "@/assets/trade/maq/milling.jpg";
import maqMillingBt from "@/assets/trade/maq/milling-bt.jpg";
import maqDrilling from "@/assets/trade/maq/drilling.webp";

// La-Co Markal
import markalSolid from "@/assets/trade/laco/solid.jpg";
import markalLiquid from "@/assets/trade/laco/liquid.jpg";
import markalDot from "@/assets/trade/laco/dot.jpg";
import markalHighTemp from "@/assets/trade/laco/high-temp.png";
import markalWelders from "@/assets/trade/laco/welders.jpg";
import markalLayout from "@/assets/trade/laco/layout-fluids.jpg";

/* ──────────────────────────────────────────────────────────────────────────
   PRODUCT DATA
   ────────────────────────────────────────────────────────────────────────── */

type Product = {
  name: string;
  description: string;
  image?: string;
  catalog?: string;
  specs?: string[];
};

type Category = {
  title: string;
  products: Product[];
};

type Brand = {
  id: string;
  name: string;
  origin: string;
  tagline: string;
  about: string;
  categories: Category[];
};

const brands: Brand[] = [
  {
    id: "rebo",
    name: "Re-Bo",
    origin: "Made in Germany",
    tagline: "Precision Circular Saw Blades for Metal Cutting",
    about:
      "Re-Bo Reblade GmbH is a German manufacturer of premium circular saw blades — HSS, solid carbide (VHM) and tungsten-carbide-tipped (TCT) — engineered for high-performance metal cutting on cold-saw and circular-saw machines worldwide.",
    categories: [
      {
        title: "Metal Cutting Circular Saw Blades (Cold Saws)",
        products: [
          {
            name: "Re-Bo Top High-Performance HSS / HSS-E Blades",
            description:
              "Top-tier high-performance circular saw blades made from HSS and HSS-E for clean, accurate cold-saw cutting of steel pipes, tubes, profiles and solid bars.",
            image: reboTopHss,
            specs: ["HSS / HSS-E / HSS-PM", "Premium coatings: TiN, TiCN, TiAlN", "Long service life"],
          },
          {
            name: "HSS Metal Circular Saw Blades — DIN Standard",
            description:
              "HSS metal circular saw blades manufactured according to DIN standards for general-purpose cold-saw cutting.",
            image: reboHssDin,
            specs: ["DIN 1837 / DIN 1838 geometries", "Wide diameter range", "Standard & custom toothing"],
          },
        ],
      },
      {
        title: "VHM Solid Carbide Saw Blades",
        products: [
          {
            name: "Re-Bo VHM Solid Carbide Saw Blades",
            description:
              "Solid carbide (VHM) circular saw blades for high-precision, high-feed cutting of difficult-to-machine materials and thin-wall tubes.",
            image: reboVhm,
            specs: ["100% solid carbide body", "PVD coatings available", "Excellent dimensional stability"],
          },
          {
            name: "VHM Metal Circular Saw Blades — DIN Standard",
            description:
              "Solid carbide circular saw blades manufactured to DIN standards for repeatable performance on automatic cold-saw lines.",
            image: reboVhmDin,
            specs: ["DIN-conformant geometries", "Optimised for stainless & alloy steels"],
          },
        ],
      },
      {
        title: "Tungsten Carbide Tipped (TCT) Saw Blades",
        products: [
          {
            name: "Re-Bo Top HM TCT Blades — Steel Processing",
            description:
              "Premium carbide-tipped (HM) circular saw blades engineered for high-volume steel processing — pipes, tubes, profiles and solid bars.",
            image: reboTctSteel,
            specs: ["Premium-grade carbide tips", "Engineered tooth geometries", "Designed for steel & alloy steels"],
          },
          {
            name: "Re-Bo HM TCT Blades — Non-Ferrous Machining",
            description:
              "Carbide-tipped (HM) circular saw blades optimised for non-ferrous machining — aluminium, copper, brass and light alloys.",
            image: reboTctNonferrous,
            specs: ["Specialised non-ferrous geometries", "Mirror-finish cut quality", "High feed rates"],
          },
        ],
      },
    ],
  },
  {
    id: "saar",
    name: "Saar-Hartmetall",
    origin: "Made in Germany",
    tagline: "Tube & Pipe Mill Tooling Specialists",
    about:
      "Saar-Hartmetall und Werkzeuge GmbH manufactures premium carbide tooling for tube and pipe mills — internal and external scarfing tools, peeling tools, impeders, ferrite cores and forming/sizing rolls.",
    categories: [
      {
        title: "Tube & Pipe Mill Tooling",
        products: [
          {
            name: "Internal Scarfing Tools",
            description:
              "Carbide ID scarfing tools that remove the internal weld bead in HF-welded tubes and pipes at full mill speed.",
            image: saarInternal,
            specs: ["For ID range 20 – 660 mm", "Solid carbide & PCD options"],
          },
          {
            name: "External Scarfing Tools & Inserts",
            description:
              "OD scarfing tool holders and indexable inserts for outer-bead removal at full production speed.",
            image: saarExternal,
            specs: ["Indexable & brazed inserts", "Custom geometries on request"],
          },
          {
            name: "Impeders & Ferrite Cores",
            description:
              "High-permeability ferrite rods and complete impeder assemblies for HF tube welding.",
            image: saarImpeders,
            specs: ["Ferrite Ø 4 – 90 mm", "Epoxy-tube housings", "Water-cooled assemblies"],
          },
          {
            name: "Peeling Tools",
            description:
              "Carbide peeling tool inserts and holders for bar-peeling lines.",
            image: saarPeeling,
          },
          {
            name: "Forming & Sizing Rolls",
            description:
              "Tool-steel and tungsten-carbide rolls for tube-forming, sizing and Turk's-head stands.",
            image: saarRolls,
          },
        ],
      },
    ],
  },
  {
    id: "kanefusa",
    name: "Kanefusa",
    origin: "Made in Japan",
    tagline: "Precision Industrial Cutting Tools",
    about:
      "Kanefusa Corporation (Japan) is a world-leading manufacturer of precision industrial cutting tools — TCT circular saws, metal-cutting blades, knives and tooling for wood, metal, paper, plastics and composite processing industries.",
    categories: [
      {
        title: "Precision Cutting Tools",
        products: [
          {
            name: "Tungsten-Carbide-Tipped Circular Saws",
            description:
              "TCT circular saw blades engineered for high-precision, high-speed cutting of steel pipes, tubes, profiles and solid bars.",
            image: kanefusaTct,
            specs: ["Wide diameter range", "Optimised tooth geometries", "Long service life"],
          },
          {
            name: "Carbide-Tipped Saws — Billet & Bloom",
            description:
              "Heavy-duty TCT saw blades for hot and cold cutting of billets and blooms in steel mills.",
            image: kanefusaBillet,
            specs: ["Hot & cold variants", "Custom diameters on request"],
          },
          {
            name: "Friction Saw Blades",
            description:
              "High-speed friction blades for cutting structural sections and tubes in continuous rolling mills.",
            image: kanefusaFriction,
          },
          {
            name: "Industrial Knives & Blades",
            description:
              "Precision industrial knives for paper, film, plastic, rubber and converting industries.",
            image: kanefusaKnives,
          },
          {
            name: "Wood & Composite Cutting Tools",
            description:
              "TCT and diamond-tipped tools for woodworking, panel processing and composite material cutting.",
            image: kanefusaWood,
          },
          {
            name: "Re-Sharpening & Tool Service",
            description:
              "Factory-grade re-sharpening, re-tipping and re-conditioning service to restore original tool performance.",
            image: kanefusaService,
          },
        ],
      },
    ],
  },
  {
    id: "maq",
    name: "MAQ",
    origin: "Made in Sweden",
    tagline: "Anti-Vibration Boring Bars & Milling Holders",
    about:
      "MAQ AB (Sweden) develops patented Self-Tuning Mass Damper (STMD) technology for anti-vibration boring bars and milling tool holders — enabling stable cuts at extreme overhangs.",
    categories: [
      {
        title: "Anti-Vibration Tooling",
        products: [
          {
            name: "AV Boring Bars (up to 12×D)",
            description:
              "Anti-vibration boring bars with STMD damping for vibration-free internal turning at extreme L/D ratios.",
            image: maqBoring,
            specs: ["L/D up to 12×D", "Steel & carbide shanks", "Coolant-through standard"],
          },
          {
            name: "AV Milling Holders — HSK",
            description:
              "HSK-shank anti-vibration milling holders for long-reach face, end and shoulder milling.",
            image: maqMilling,
            specs: ["HSK-A63 / A100", "Shrink-fit and ER variants"],
          },
          {
            name: "AV Milling Holders — BT",
            description:
              "BT-shank anti-vibration milling holders for stable long-overhang milling on BT-spindle machines.",
            image: maqMillingBt,
            specs: ["BT30 / BT40 / BT50", "Custom assemblies on request"],
          },
          {
            name: "AV Drilling Holders",
            description:
              "Anti-vibration drilling assemblies for deep-hole and long-reach drilling operations.",
            image: maqDrilling,
          },
        ],
      },
    ],
  },
  {
    id: "markal",
    name: "La-Co Markal",
    origin: "Made in France / USA",
    tagline: "Industrial Marking Solutions",
    about:
      "Markal® (a brand of LA-CO Industries) is a global leader in industrial marking — solid paint markers, liquid paint markers, dot markers, high-temperature markers and welder's pencils.",
    categories: [
      {
        title: "Industrial Markers & Fluids",
        products: [
          {
            name: "Solid Paint Markers",
            description:
              "Solid paint crayons for permanent marks on metal, rubber, plastic, glass and wet/oily surfaces.",
            image: markalSolid,
            specs: ["B / B-L / Pro-Line ranges", "Wide colour selection"],
          },
          {
            name: "Liquid Paint Markers (Pro-Line®)",
            description:
              "Valve-action liquid paint markers for fine, fast-drying, weather-resistant marks.",
            image: markalLiquid,
          },
          {
            name: "Dot / Spot Markers",
            description:
              "Round-tip markers ideal for dot-marking parts on inspection and assembly lines.",
            image: markalDot,
          },
          {
            name: "High-Temperature Markers",
            description:
              "Markers that withstand heat-treat, forging and welding processes at extreme temperatures.",
            image: markalHighTemp,
            specs: ["Thermomelt®", "Trades-Marker® HT"],
          },
          {
            name: "Welders' Pencils & Soapstone",
            description:
              "Traditional soapstone holders, refills and welder's pencils for layout marking on metal.",
            image: markalWelders,
          },
          {
            name: "Layout & Inspection Fluids",
            description:
              "Layout dyes, ink markers and inspection fluids for precision metalworking.",
            image: markalLayout,
          },
        ],
      },
    ],
  },
];

/* ──────────────────────────────────────────────────────────────────────────
   COMPONENTS
   ────────────────────────────────────────────────────────────────────────── */

const ProductCard = ({
  product,
  onInquire,
}: {
  product: Product;
  onInquire: (name: string) => void;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="glass-card overflow-hidden flex flex-col h-full group hover:border-primary/40 transition-colors"
  >
    <div className="aspect-[4/3] bg-white border-b border-border flex items-center justify-center overflow-hidden relative">
      {product.image ? (
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
        />
      ) : (
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <ImageIcon className="w-10 h-10 opacity-50" />
          <span className="text-xs tracking-wide">Image coming soon</span>
        </div>
      )}
    </div>

    <div className="p-6 flex flex-col flex-1">
      <h4 className="font-heading text-lg font-bold mb-2 leading-snug">{product.name}</h4>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{product.description}</p>

      {product.specs && (
        <ul className="text-xs text-muted-foreground space-y-1 mb-5 list-disc list-inside marker:text-primary">
          {product.specs.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      )}

      <div className="mt-auto flex flex-col sm:flex-row gap-2">
        {product.catalog ? (
          <a
            href={product.catalog}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-4 py-2.5 rounded text-sm font-semibold hover:bg-primary/90 transition-colors"
          >
            <Download className="w-4 h-4" /> Catalog
          </a>
        ) : (
          <button
            onClick={() => onInquire(product.name)}
            className="flex-1 inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-4 py-2.5 rounded text-sm font-semibold hover:bg-primary/90 transition-colors"
          >
            <Download className="w-4 h-4" /> Request Catalog
          </button>
        )}
        <button
          onClick={() => onInquire(product.name)}
          className="flex-1 inline-flex items-center justify-center gap-2 border border-border px-4 py-2.5 rounded text-sm font-semibold hover:bg-secondary hover:border-primary/40 transition-colors"
        >
          Inquire
        </button>
      </div>
    </div>
  </motion.div>
);

const TradePortal = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    product: "",
    message: "",
  });

  const handleInquire = (productName: string) => {
    setForm((f) => ({ ...f, product: productName }));
    document.getElementById("inquiry")?.scrollIntoView({ behavior: "smooth" });
  };

  const submitInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Inquiry received",
      description: "Thank you — our team will get back to you shortly.",
    });
    setForm({ name: "", company: "", email: "", phone: "", product: "", message: "" });
  };

  const scrollToProducts = () => {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar />
      <main className="pt-16 md:pt-20">
        {/* ── SECTION 1 — Landing ───────────────────────────────────────── */}
        <section className="min-h-[calc(100vh-5rem)] flex items-center section-padding bg-gradient-to-br from-background via-secondary/20 to-background relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.05] pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle at 25% 25%, hsl(var(--primary)) 0%, transparent 50%), radial-gradient(circle at 75% 75%, hsl(var(--primary)) 0%, transparent 50%)",
            }}
          />

          <div className="container mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-4xl mx-auto text-center"
            >
              <p className="text-primary font-medium tracking-[0.3em] uppercase text-xs md:text-sm mb-6">
                Aviruddha Productivity — Trade Division
              </p>
              <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.05]">
                Aviruddha <span className="text-gradient">Trade</span>
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-10">
                The exclusive Indian representative for premium engineering brands from
                <span className="text-foreground font-medium"> Germany, Japan, Sweden, France </span>
                and beyond. Browse our complete catalogue of cutting tools, scarfing systems,
                anti-vibration tooling and industrial marking solutions — all backed by Aviruddha's
                technical service and after-sales support.
              </p>

              <div className="flex flex-wrap justify-center gap-3 mb-12">
                {brands.map((b) => (
                  <a
                    key={b.id}
                    href={`#${b.id}`}
                    className="px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur text-sm font-medium hover:border-primary hover:text-primary transition-colors"
                  >
                    {b.name}
                  </a>
                ))}
              </div>

              <button
                onClick={scrollToProducts}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded font-semibold hover:bg-primary/90 transition-colors text-lg"
              >
                Browse Products <ChevronDown className="w-5 h-5 animate-bounce" />
              </button>
            </motion.div>
          </div>
        </section>

        {/* ── SECTION 2 — Products by Brand ─────────────────────────────── */}
        <section id="products" className="section-padding">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-20"
            >
              <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">
                Our Product Portfolio
              </p>
              <h2 className="font-heading text-4xl md:text-6xl font-bold mb-6">
                Products by <span className="text-gradient">Brand</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Every product line we represent — categorised, specced and ready to download.
                Click <span className="text-primary font-semibold">Inquire</span> on any item to
                start a conversation with our technical team.
              </p>
            </motion.div>

            {brands.map((brand, idx) => (
              <div key={brand.id} id={brand.id} className="mb-24 scroll-mt-24">
                {/* Brand header */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="border-l-4 border-primary pl-6 mb-12"
                >
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-2">
                    <h3 className="font-heading text-3xl md:text-5xl font-bold">{brand.name}</h3>
                    <span className="text-primary text-sm font-medium tracking-widest uppercase">
                      {brand.origin}
                    </span>
                  </div>
                  <p className="text-foreground/80 text-lg font-medium mb-2">{brand.tagline}</p>
                  <p className="text-muted-foreground max-w-3xl leading-relaxed">{brand.about}</p>
                </motion.div>

                {/* Categories */}
                {brand.categories.map((cat, ci) => (
                  <div key={cat.title} className={ci > 0 ? "mt-14" : ""}>
                    {brand.categories.length > 1 && (
                      <div className="flex items-center gap-4 mb-6">
                        <span className="text-primary font-mono text-sm">
                          {String(ci + 1).padStart(2, "0")}
                        </span>
                        <h4 className="font-heading text-xl md:text-2xl font-semibold">
                          {cat.title}
                        </h4>
                        <div className="flex-1 h-px bg-border" />
                      </div>
                    )}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {cat.products.map((p) => (
                        <ProductCard key={p.name} product={p} onInquire={handleInquire} />
                      ))}
                    </div>
                  </div>
                ))}

                {idx < brands.length - 1 && (
                  <div className="mt-24 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 3 — Inquiry + Direct Contact ──────────────────────── */}
        <section id="inquiry" className="section-padding bg-secondary/20 scroll-mt-24">
          <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-start">
            {/* Inquiry form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">
                Make an Inquiry
              </p>
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
                Talk to <span className="text-gradient">Our Team</span>
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Need a quote, technical drawings, or a custom configuration? Send us the details
                and we'll get back within one business day.
              </p>

              <form onSubmit={submitInquiry} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    required
                    placeholder="Your name *"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                  <Input
                    placeholder="Company"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    required
                    type="email"
                    placeholder="Email *"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                  <Input
                    type="tel"
                    placeholder="Phone"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                </div>
                <Input
                  placeholder="Product of interest"
                  value={form.product}
                  onChange={(e) => setForm({ ...form, product: e.target.value })}
                />
                <Textarea
                  required
                  placeholder="Tell us about your requirement *"
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded font-semibold hover:bg-primary/90 transition-colors"
                >
                  <Send className="w-4 h-4" /> Submit Inquiry
                </button>
              </form>
            </motion.div>

            {/* Direct contact */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 lg:p-10"
            >
              <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">
                Direct Contact
              </p>
              <h3 className="font-heading text-3xl font-bold mb-2">Ganesh Jamgaonkar</h3>
              <p className="text-muted-foreground mb-8">Director — Aviruddha Productivity Pvt. Ltd.</p>

              <div className="space-y-5">
                <a href="tel:+917420916314" className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-0.5">Phone</p>
                    <p className="font-medium group-hover:text-primary transition-colors">+91 74209 16314</p>
                  </div>
                </a>

                <a href="mailto:ganesh@aviruddha.com" className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-0.5">Email</p>
                    <p className="font-medium group-hover:text-primary transition-colors">ganesh@aviruddha.com</p>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/in/ganeshjamgaonkar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Linkedin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-0.5">LinkedIn</p>
                    <p className="font-medium group-hover:text-primary transition-colors">View profile</p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-0.5">Office</p>
                    <p className="font-medium leading-relaxed">
                      Gat No-464/3 Kad Wasti, Kuruli, Chakan,<br />
                      Taluka-Khed, Pune 410501,<br />
                      Maharashtra, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-0.5">Hours</p>
                    <p className="font-medium">Mon – Sat · 9:00 AM – 6:00 PM IST</p>
                  </div>
                </div>

                <a
                  href="https://www.aviruddha.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Globe className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-0.5">Website</p>
                    <p className="font-medium group-hover:text-primary transition-colors">www.aviruddha.com</p>
                  </div>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default TradePortal;
