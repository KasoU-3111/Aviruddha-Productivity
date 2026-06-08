import { useState } from "react";
import { motion } from "framer-motion";
import { Images, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const modules = import.meta.glob(
  "@/assets/company-profile/company/companyprofile-*.{jpeg,jpg,png}",
  { eager: true, import: "default" }
) as Record<string, string>;

const images = Object.entries(modules)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([, src]) => src);

const CompanyGallery = () => {
  const [open, setOpen] = useState(false);
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">
            Inside Our Facility
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            A Glimpse Into Our Workshop
          </h2>
          <p className="text-muted-foreground mb-8">
            Step inside Aviruddha Productivity—our shop floor, machines, and
            craftsmanship in action. Explore a curated gallery of our facility,
            equipment, and the precision work that defines us.
          </p>
          <Button size="lg" onClick={() => setOpen(true)} className="gap-2">
            <Images className="w-5 h-5" />
            View Gallery
          </Button>
        </motion.div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[100] bg-background/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-6xl max-h-[88vh] glass-card p-6 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-heading text-xl font-semibold">
                Company Gallery
              </h3>
              <button
                onClick={() => setOpen(false)}
                className="p-2 rounded-md hover:bg-secondary transition-colors"
                aria-label="Close gallery"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {images.map((src, i) => (
                <button
                  key={src}
                  onClick={() => setLightbox(src)}
                  className="group relative overflow-hidden rounded-lg aspect-[4/3] bg-secondary"
                >
                  <img
                    src={src}
                    alt={`Aviruddha facility ${i + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {lightbox && (
        <div
          className="fixed inset-0 z-[110] bg-background/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 p-2 rounded-md bg-secondary/80 hover:bg-secondary"
            aria-label="Close image"
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={lightbox}
            alt="Facility detail"
            className="max-w-full max-h-full object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default CompanyGallery;