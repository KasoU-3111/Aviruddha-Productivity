import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoImg from "@/assets/image-removebg-preview.png";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Process", to: "/process" },
  { label: "Industries", to: "/industries" },
  { label: "Trade", to: "/trade" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-neutral-900">
      {/* 📏 Height expanded from h-16/20 to h-20/24 for a grander presentation profile */}
      <div className="container mx-auto flex items-center justify-between h-20 md:h-24 px-6">
        
        {/* 🚀 Upscaled logo boundaries to fill out the taller navbar height perfectly */}
        <Link to="/" className="flex items-center h-full relative group">
          <img 
            src={logoImg} 
            alt="Aviruddha Home" 
            className="w-24 h-24 md:w-32 md:h-32 object-contain relative z-10 transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Desktop Links - Typography boosted from text-sm to text-base and adjusted gaps */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-base font-bold tracking-wide transition-colors hover:text-primary ${
                location.pathname === link.to ? "text-primary" : "text-neutral-400 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-primary text-primary-foreground px-6 py-2.5 rounded text-base font-bold hover:bg-primary/90 transition-colors"
          >
            Request a Quote
          </Link>
        </div>

        {/* Mobile toggle button */}
        <button
          className="lg:hidden text-white hover:text-primary transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu - Matching Solid Black Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black border-b border-neutral-900"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={`text-base font-bold py-2 transition-colors hover:text-primary ${
                    location.pathname === link.to ? "text-primary" : "text-neutral-400 hover:text-white"
                    }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="bg-primary text-primary-foreground px-6 py-3 rounded text-base font-bold text-center hover:bg-primary/90 transition-colors mt-2"
              >
                Request a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;