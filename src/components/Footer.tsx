import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

const Footer = () => (
  <footer className="bg-card border-t border-border">
    <div className="container mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h3 className="font-heading text-xl font-bold mb-3">AVIRUDDHA</h3>
          <p className="text-primary text-sm font-medium mb-3">
            Driven by Detail. Defined by Purpose.
          </p>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Precision engineering & manufacturing partner for global OEMs.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4">
            Navigation
          </h4>
          <div className="flex flex-col gap-2">
            {["About", "Services", "Process", "Industries", "Contact"].map((l) => (
              <Link
                key={l}
                to={`/${l.toLowerCase()}`}
                className="text-muted-foreground text-sm hover:text-primary transition-colors"
              >
                {l}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4">
            Contact
          </h4>
          <div className="flex flex-col gap-3 text-sm text-muted-foreground">
            <div className="flex items-start gap-2">
              <Phone className="w-4 h-4 mt-0.5 text-primary shrink-0" />
              <a href="tel:+917420916314" className="hover:text-primary transition-colors">
                +91 74209 16314
              </a>
            </div>
            <div className="flex items-start gap-2">
              <Mail className="w-4 h-4 mt-0.5 text-primary shrink-0" />
              <a href="mailto:ganesh@aviruddha.com" className="hover:text-primary transition-colors">
                ganesh@aviruddha.com
              </a>
            </div>
            <div className="flex items-start gap-2">
              <Linkedin className="w-4 h-4 mt-0.5 text-primary shrink-0" />
              <a
                href="https://linkedin.com/in/ganeshjamgaonkar"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                Ganesh Jamgaonkar
              </a>
            </div>
          </div>
        </div>

        {/* Address */}
        <div>
          <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4">
            Location
          </h4>
          <div className="flex items-start gap-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" />
            <p>
              Gat No-464/3 Kad Wasti, Kuruli, Chakan,<br />
              Taluka-Khed, Pune 410501,<br />
              Maharashtra, India
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground text-xs">
          © {new Date().getFullYear()} Aviruddha Productivity Pvt. Ltd. All rights reserved.
        </p>
        <a
          href="https://www.aviruddha.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary text-xs hover:underline"
        >
          www.aviruddha.com
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
