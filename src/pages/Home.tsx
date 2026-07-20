import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Camera, Heart, Users, Star } from "lucide-react";
import CinematicHero from "../components/CinematicHero";

const highlights = [
  { icon: Camera, label: "500+ Shoots Delivered" },
  { icon: Heart, label: "200+ Happy Couples" },
  { icon: Users, label: "50+ Weddings Covered" },
  { icon: Star, label: "5-Star Rated Studio" },
];

const services = [
  { title: "Outdoor Shoot", desc: "Natural light, scenic locations, timeless frames." },
  { title: "Marriage Shoot", desc: "Every ritual, every emotion, captured in full glory." },
  { title: "Engagement Shoot", desc: "The promise before the vows, told beautifully." },
  { title: "Couple Shoot", desc: "Candid chemistry, cinematic storytelling." },
];

export default function Home() {
  return (
    <div>
      <CinematicHero />

      {/* HIGHLIGHTS */}
      <section className="border-y border-gold/10 bg-panel/60">
        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {highlights.map((h, i) => (
            <motion.div
              key={h.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col items-center text-center gap-3"
            >
              <h.icon className="text-gold" size={28} strokeWidth={1.3} />
              <p className="text-sm text-ink/70 uppercase tracking-wide">{h.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-gold uppercase tracking-[0.25em] text-xs mb-3">What We Do</p>
          <h2 className="font-display text-3xl sm:text-4xl">Our Signature Shoots</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group border border-gold/10 bg-gradient-to-b from-ink/[0.03] to-transparent p-8 hover:border-gold/40 transition-colors"
            >
              <div className="w-10 h-10 border border-gold/30 rounded-full flex items-center justify-center mb-6 group-hover:bg-gold group-hover:text-ink transition-colors">
                <Camera size={16} className="text-gold group-hover:text-ink" />
              </div>
              <h3 className="font-display text-xl mb-2">{s.title}</h3>
              <p className="text-sm text-ink/60 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-14">
          <Link
            to="/services"
            className="inline-block border border-gold text-gold px-8 py-3 uppercase text-sm tracking-[0.15em] hover:bg-gold hover:text-ink transition-colors"
          >
            Explore All Services
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 border-t border-gold/10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(194,144,63,0.08),transparent_60%)]" />
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative z-10 max-w-2xl mx-auto text-center px-6"
        >
          <h2 className="font-display text-3xl sm:text-4xl mb-4">
            Ready to Freeze Your Best Moments?
          </h2>
          <p className="text-ink/60 mb-8">
            Let's talk about your story and how AS Photography can bring it to life.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-gold text-ink px-10 py-3 uppercase text-sm tracking-[0.15em] font-medium hover:bg-cream transition-colors"
          >
            Get in Touch
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
