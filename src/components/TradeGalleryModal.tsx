import { motion, AnimatePresence } from "framer-motion";
import { X, Expand, ImageIcon } from "lucide-react";
import { useState } from "react";

// 📁 Eager-load all images across your trade subdirectories dynamically
const tradeModules = import.meta.glob(
  "@/assets/trade/**/*.{jpeg,jpg,png,webp}",
  { eager: true, query: "?url", import: "default" }
) as Record<string, string>;

interface TradeGalleryModalProps {
  brandId: string | null;
  brandName: string;
  onClose: () => void;
}

export const TradeGalleryModal = ({ brandId, brandName, onClose }: TradeGalleryModalProps) => {
  const [lightbox, setLightbox] = useState<string | null>(null);

  if (!brandId) return null;

  // 🔍 Extracting and filter assets belonging to the active brand identifier
  const getBrandImages = (id: string): string[] => {
    const matches: { key: string; url: string }[] = [];
    
    for (const [path, url] of Object.entries(tradeModules)) {
      const filename = path.split("/").pop() || "";
      const lowerFilename = filename.toLowerCase();
      
      // Catches brand subdirectory patterns or explicit filename prefixes
      const isMatch = 
        path.toLowerCase().includes(`/trade/${id}/`) || 
        lowerFilename.startsWith(`${id}-`) ||
        (id === "kanefusa" && (lowerFilename.startsWith("kws-") || path.toLowerCase().includes("/trade/kanefusa/")));

      if (isMatch) {
        matches.push({ key: filename, url });
      }
    }

    // Aligns numerically so items sort gracefully (e.g., item-1, item-2, item-11)
    return matches
      .sort((a, b) => a.key.localeCompare(b.key, undefined, { numeric: true }))
      .map((m) => m.url);
  };

  const images = getBrandImages(brandId);

  return (
    <>
      {/* Main View Gallery Popup Layer */}
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 15 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl max-h-[85vh] bg-background border border-border/60 rounded-xl shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header section */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-border/40 bg-card">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                  <ImageIcon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold leading-tight text-foreground">
                    {brandName} Product Gallery
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Showcasing {images.length} premium manufacturing line {images.length === 1 ? "asset" : "assets"}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-secondary hover:bg-secondary/80 flex items-center justify-center transition-colors border border-border/40 text-foreground"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Photo Layout Grid Container */}
            <div className="overflow-y-auto p-6 bg-background/50">
              {images.length === 0 ? (
                <div className="text-center py-20 border border-dashed border-border/60 rounded-xl bg-card/30">
                  <ImageIcon className="w-12 h-12 text-muted-foreground/40 mx-auto mb-3" />
                  <p className="text-muted-foreground text-sm font-medium">
                    Extended visual logs coming soon.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {images.map((src, idx) => (
                    <motion.button
                      type="button"
                      key={src}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.03 }}
                      onClick={() => setLightbox(src)}
                      className="group relative aspect-square overflow-hidden rounded-lg border border-border/50 bg-white p-2 flex items-center justify-center shadow-sm hover:border-primary/40 transition-colors"
                    >
                      <img
                        src={src}
                        alt={`${brandName} product spec view ${idx + 1}`}
                        loading="lazy"
                        className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors flex items-center justify-center">
                        <div className="bg-background/90 backdrop-blur border border-border text-foreground px-2.5 py-1 rounded-md shadow-md text-xs font-semibold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300">
                          <Expand className="w-3 h-3 text-primary" /> View Specs
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Full-Screen Immersive Lightbox Display Layer */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            key="trade-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] bg-black/95 flex items-center justify-center p-6"
            onClick={() => setLightbox(null)}
          >
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); setLightbox(null); }}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors border border-white/10"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.img
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              src={lightbox}
              alt="High resolution component layout"
              className="max-w-full max-h-full object-contain rounded-md shadow-2xl bg-white p-4"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};