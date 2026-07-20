import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { TreePine, Heart, Sparkles, Users2, Camera, Gift, ArrowRight } from "lucide-react";
import FrameStudio from "../components/FrameStudio";

const services = [
  {
    icon: TreePine,
    title: "Outdoor Shoot",
    desc: "Golden hour light, scenic backdrops, and natural moments — shot at the most breathtaking outdoor locations.",
  },
  {
    icon: Heart,
    title: "Marriage Shoot",
    desc: "From the mandapam to the last dance — every ritual, emotion, and celebration captured in cinematic detail.",
  },
  {
    icon: Sparkles,
    title: "Engagement Shoot",
    desc: "The moment of promise, styled and shot to feel as special as it truly is.",
  },
  {
    icon: Users2,
    title: "Couple Shoot",
    desc: "Candid chemistry and cinematic storytelling that captures your bond, effortlessly.",
  },
  {
    icon: Camera,
    title: "Pre & Post Wedding",
    desc: "Concept shoots before or after the big day — themed, styled, and completely personalized.",
  },
  {
    icon: Users2,
    title: "Family & Baby Shoot",
    desc: "Warm, joyful frames of the people who matter most — from newborns to reunions.",
  },
];

export default function Services() {
  return (
    <div>
      {/* HEADER */}
      <section className="relative py-24 border-b border-gold/10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(194,144,63,0.09),transparent_60%)]" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 max-w-3xl mx-auto text-center px-6"
        >
          <p className="text-gold uppercase tracking-[0.25em] text-xs mb-3">What We Offer</p>
          <h1 className="font-display text-4xl sm:text-5xl mb-4">Our Services</h1>
          <p className="text-ink/60">
            Every frame tells a story. Choose the moment you want us to capture.
          </p>
        </motion.div>
      </section>

      {/* SERVICES GRID */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group border border-gold/10 bg-gradient-to-b from-ink/[0.03] to-transparent p-8 hover:border-gold/40 transition-colors"
            >
              <div className="w-12 h-12 border border-gold/30 rounded-full flex items-center justify-center mb-6 group-hover:bg-gold transition-colors">
                <s.icon size={20} className="text-gold group-hover:text-ink transition-colors" strokeWidth={1.4} />
              </div>
              <h3 className="font-display text-xl mb-2">{s.title}</h3>
              <p className="text-sm text-ink/60 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* COLLAB: D'ART FRAMES & GIFTS */}
      <section className="border-t border-gold/10 bg-panel/60">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <p className="text-gold uppercase tracking-[0.25em] text-xs mb-3">In Collaboration With</p>
            <h2 className="font-display text-3xl sm:text-4xl mb-3">D'art Frames &amp; Gifts</h2>
            <p className="text-ink/60 max-w-2xl mx-auto">
              Your favourite shots deserve more than a screen. Through our collaboration
              with D'art Frames &amp; Gifts, we turn your photographs into beautifully
              crafted frames and personalized keepsakes — delivered along with your shoot.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Custom Photo Frames", desc: "Premium handcrafted frames in wood, metal, and acrylic finishes." },
              { title: "Personalized Gifts", desc: "Photo mugs, canvas prints, and keepsakes made from your best frames." },
              { title: "Wedding Albums", desc: "Curated, bound albums that turn your gallery into a story you can hold." },
            ].map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="border border-gold/10 p-8 hover:border-gold/40 transition-colors"
              >
                <Gift className="text-gold mb-5" size={24} strokeWidth={1.4} />
                <h3 className="font-display text-lg mb-2">{c.title}</h3>
                <p className="text-sm text-ink/60 leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FRAME PREVIEW STUDIO */}
      <section className="border-t border-gold/10">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <p className="text-gold uppercase tracking-[0.25em] text-xs mb-3">Step 1 — Upload &amp; Preview</p>
            <h2 className="font-display text-3xl sm:text-4xl mb-3">Frame Preview Studio</h2>
            <p className="text-ink/60 max-w-2xl mx-auto">
              See your memory framed before you even order it. Upload any photo, try it in
              5 handcrafted D'art Frames &amp; Gifts styles, and pick your favourite —
              instantly, right here.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <FrameStudio />
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center px-6">
        <h2 className="font-display text-2xl sm:text-3xl mb-6">
          Let's plan your shoot together.
        </h2>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-gold text-ink px-8 py-3 uppercase text-sm tracking-[0.15em] font-medium hover:bg-cream transition-colors"
        >
          Book Now <ArrowRight size={16} />
        </Link>
      </section>
    </div>
  );
}
