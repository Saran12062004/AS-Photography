import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logoMark from "../assets/logo-mark.png";

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...props}>
      <path d="M14 9h3V6h-3c-1.66 0-3 1.34-3 3v2H8v3h3v6h3v-6h3l1-3h-4V9c0-.55.45-1 1-1z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-panel border-t border-gold/10 text-ink/70">
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logoMark} alt="AS Photography" className="w-9 h-9 rounded-full object-cover border border-gold/30" />
            <span className="font-display text-lg tracking-[0.2em] text-ink">
              AS <span className="text-gold">PHOTOGRAPHY</span>
            </span>
          </div>
          <p className="text-sm leading-relaxed">
            "Memories are priceless, we make them timeless."
          </p>
        </div>

        <div>
          <h4 className="text-ink uppercase text-sm tracking-[0.15em] mb-4">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-gold transition-colors">Home</Link></li>
            <li><Link to="/services" className="hover:text-gold transition-colors">Services</Link></li>
            <li><Link to="/about" className="hover:text-gold transition-colors">About</Link></li>
            <li><Link to="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-ink uppercase text-sm tracking-[0.15em] mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            <li>Outdoor Shoot</li>
            <li>Marriage Shoot</li>
            <li>Engagement Shoot</li>
            <li>Couple Shoot</li>
          </ul>
        </div>

        <div>
          <h4 className="text-ink uppercase text-sm tracking-[0.15em] mb-4">Get in Touch</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2"><Phone size={15} className="text-gold" /> +91 63815 35328</li>
            <li className="flex items-center gap-2"><Mail size={15} className="text-gold" /> hello@asphotography.in</li>
            <li className="flex items-center gap-2"><MapPin size={15} className="text-gold" /> Marattipalayam, Vellore</li>
          </ul>
          <div className="flex gap-4 mt-5">
            <a href="#" aria-label="Instagram" className="hover:text-gold transition-colors"><InstagramIcon width={18} height={18} /></a>
            <a href="#" aria-label="Facebook" className="hover:text-gold transition-colors"><FacebookIcon width={18} height={18} /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-gold/10 py-5 text-center text-xs text-ink/40">
        © {new Date().getFullYear()} AS Photography. All rights reserved.
      </div>
    </footer>
  );
}
