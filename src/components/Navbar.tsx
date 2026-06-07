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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/40">
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-4">
        
        {/* 🚀 Extended full-bleed copper bar backplate that locks completely flush with the left-most screen wall */}
        <Link to="/" className="flex items-stretch h-full relative group -ml-4">
          <div className="relative flex items-center justify-center pl-6 pr-20 md:pr-32 bg-gradient-to-r from-amber-950/70 via-amber-900/25 to-transparent transition-all duration-300 group-hover:from-amber-950/85">
            {/* Subtle internal linear sheen highlight */}
            <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 via-transparent to-transparent opacity-40 pointer-events-none" />
            
            <img 
              src={logoImg} 
              alt="Aviruddha Home" 
              className="w-20 h-20 md:w-24 md:h-24 object-contain relative z-10 p-0.5 transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium tracking-wide transition-colors hover:text-primary ${
                location.pathname === link.to ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-primary text-primary-foreground px-5 py-2 rounded text-sm font-semibold hover:bg-primary/90 transition-colors"
          >
            Request a Quote
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b border-border"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={`text-sm font-medium py-2 transition-colors hover:text-primary ${
                    location.pathname === link.to ? "text-primary" : "text-muted-foreground"
                    }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="bg-primary text-primary-foreground px-5 py-2.5 rounded text-sm font-semibold text-center hover:bg-primary/90 transition-colors mt-2"
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