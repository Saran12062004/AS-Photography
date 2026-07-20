import { motion } from "framer-motion";
import { Camera, Aperture, Award, Users } from "lucide-react";
import founderPhoto from "../assets/founder.png";

const values = [
  { icon: Camera, title: "Craft", desc: "Every frame is composed with intention, not chance." },
  { icon: Aperture, title: "Emotion", desc: "We chase feeling first — technical perfection follows." },
  { icon: Award, title: "Consistency", desc: "The same care, on every shoot, for every client." },
  { icon: Users, title: "Trust", desc: "Your biggest days, handled with complete responsibility." },
];

export default function About() {
  return (
    <div>
      {/* HEADER */}
      <section className="relative py-24 border-b border-gold/10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(194,144,63,0.08),transparent_60%)]" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 max-w-3xl mx-auto text-center px-6"
        >
          <p className="text-gold uppercase tracking-[0.25em] text-xs mb-3">Our Story</p>
          <h1 className="font-display text-4xl sm:text-5xl mb-4">About AS Photography</h1>
          <p className="text-ink/60">
            Built on a simple belief — memories are priceless, and it's our job to make them timeless.
          </p>
        </motion.div>
      </section>

      {/* FOUNDER SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="aspect-[4/5] border border-gold/20 overflow-hidden">
            <img
              src={founderPhoto}
              alt="Samual, Founder of AS Photography"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 border border-gold/30 bg-base px-6 py-4 hidden sm:block">
            <p className="font-display text-2xl text-gold">5+</p>
            <p className="text-xs uppercase tracking-[0.15em] text-ink/60">Years of Craft</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-gold uppercase tracking-[0.25em] text-xs mb-3">Meet the Founder</p>
          <h2 className="font-display text-3xl sm:text-4xl mb-6">Samual</h2>
          <p className="text-ink/70 leading-relaxed mb-4">
            What began as a passion for freezing fleeting moments turned into AS Photography —
            a photography house built around one idea: every story deserves to be told
            beautifully. From a single camera to a full creative team, Samual has led AS Photography
            through hundreds of weddings, engagements, and portrait sessions across Tamil Nadu.
          </p>
          <p className="text-ink/70 leading-relaxed mb-8">
            "I don't see myself as someone who takes photos. I see myself as someone who
            preserves feelings — the nervous smile before the wedding, the quiet glance
            between a couple, the joy in a family's laughter. That's what we chase, every single time."
          </p>
          <p className="font-display text-gold text-lg">— Samual, Founder &amp; Lead Photographer</p>
        </motion.div>
      </section>

      {/* VALUES */}
      <section className="border-t border-gold/10 bg-panel/60">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-display text-3xl text-center mb-14"
          >
            What Drives Us
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 mx-auto border border-gold/30 rounded-full flex items-center justify-center mb-4">
                  <v.icon size={22} className="text-gold" strokeWidth={1.4} />
                </div>
                <h3 className="font-display text-lg mb-2">{v.title}</h3>
                <p className="text-sm text-ink/60 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
