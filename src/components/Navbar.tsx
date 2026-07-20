import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logoMark from "../assets/logo-mark.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-base/90 backdrop-blur-md border-b border-gold/10" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3 group" onClick={() => setOpen(false)}>
          <img
            src={logoMark}
            alt="AS Photography"
            className="w-10 h-10 rounded-full object-cover border border-gold/40 group-hover:border-gold transition-colors"
          />
          <span className="font-display text-xl tracking-[0.2em] text-ink">
            AS <span className="text-gold">PHOTOGRAPHY</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `text-sm uppercase tracking-[0.15em] transition-colors ${
                  isActive ? "text-gold" : "text-ink/70 hover:text-ink"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="border border-gold text-gold text-sm uppercase tracking-[0.15em] px-5 py-2 hover:bg-gold hover:text-ink transition-colors"
          >
            Book Now
          </Link>
        </div>

        <button
          className="md:hidden text-ink"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-base border-t border-gold/10 px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `text-sm uppercase tracking-[0.15em] ${isActive ? "text-gold" : "text-ink/70"}`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="border border-gold text-gold text-sm uppercase tracking-[0.15em] px-5 py-2 text-center"
          >
            Book Now
          </Link>
        </div>
      )}
    </header>
  );
}
