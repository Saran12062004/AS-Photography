import { useState } from "react";
import { motion } from "framer-motion";
import { useSearchParams } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, Frame } from "lucide-react";

export default function Contact() {
  const [searchParams] = useSearchParams();
  const frameSelection = searchParams.get("frame");
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    event: "",
    message: frameSelection ? `I'm interested in the ${frameSelection} frame.` : "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
          <p className="text-gold uppercase tracking-[0.25em] text-xs mb-3">Get in Touch</p>
          <h1 className="font-display text-4xl sm:text-5xl mb-4">Contact Us</h1>
          <p className="text-ink/60">
            Tell us about your event — we'll get back to you within 24 hours.
          </p>
        </motion.div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-14">
        {/* INFO */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-display text-2xl mb-8">Studio Details</h2>
          <ul className="space-y-6 mb-10">
            <li className="flex items-start gap-4">
              <MapPin className="text-gold shrink-0 mt-1" size={20} strokeWidth={1.4} />
              <div>
                <p className="text-ink">Address</p>
                <p className="text-sm text-ink/60">
                  AS Photography, Marattipalayam, Vellore, Tamil Nadu
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <Phone className="text-gold shrink-0 mt-1" size={20} strokeWidth={1.4} />
              <div>
                <p className="text-ink">Phone</p>
                <p className="text-sm text-ink/60">+91 63815 35328</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <Mail className="text-gold shrink-0 mt-1" size={20} strokeWidth={1.4} />
              <div>
                <p className="text-ink">Email</p>
                <p className="text-sm text-ink/60">hello@asphotography.in</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <Clock className="text-gold shrink-0 mt-1" size={20} strokeWidth={1.4} />
              <div>
                <p className="text-ink">Working Hours</p>
                <p className="text-sm text-ink/60">Mon – Sun, 9:00 AM – 8:00 PM</p>
              </div>
            </li>
          </ul>

          <div className="border border-gold/10 overflow-hidden h-72">
            <iframe
              title="AS Photography Location"
              src="https://www.google.com/maps?q=Marattipalayam,Vellore&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "sepia(0.65) saturate(1.4) hue-rotate(-8deg) invert(0.9) contrast(0.9)" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>

        {/* FORM */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-display text-2xl mb-4">Send an Enquiry</h2>

          {frameSelection && !submitted && (
            <div className="flex items-center gap-3 border border-gold/30 bg-gold/5 px-4 py-3 mb-6 text-sm text-ink/80">
              <Frame size={16} className="text-gold shrink-0" />
              Selected from Frame Studio: <span className="text-gold">{frameSelection}</span>
            </div>
          )}

          {submitted ? (
            <div className="border border-gold/30 p-10 text-center">
              <CheckCircle2 className="text-gold mx-auto mb-4" size={40} strokeWidth={1.3} />
              <p className="font-display text-xl mb-2">Thank you!</p>
              <p className="text-sm text-ink/60">
                We've received your enquiry and will reach out shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="text-xs uppercase tracking-[0.15em] text-ink/60 block mb-2">
                  Full Name
                </label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-transparent border border-gold/20 px-4 py-3 text-ink focus:border-gold outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.15em] text-ink/60 block mb-2">
                  Phone Number
                </label>
                <input
                  required
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full bg-transparent border border-gold/20 px-4 py-3 text-ink focus:border-gold outline-none transition-colors"
                  placeholder="+91"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.15em] text-ink/60 block mb-2">
                  Event Type
                </label>
                <select
                  required
                  value={form.event}
                  onChange={(e) => setForm({ ...form, event: e.target.value })}
                  className="w-full bg-base border border-gold/20 px-4 py-3 text-ink focus:border-gold outline-none transition-colors"
                >
                  <option value="">Select an event</option>
                  <option>Outdoor Shoot</option>
                  <option>Marriage Shoot</option>
                  <option>Engagement Shoot</option>
                  <option>Couple Shoot</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.15em] text-ink/60 block mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-transparent border border-gold/20 px-4 py-3 text-ink focus:border-gold outline-none transition-colors resize-none"
                  placeholder="Tell us about your event date, location, and vision..."
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-gold text-ink px-8 py-3 uppercase text-sm tracking-[0.15em] font-medium hover:bg-cream transition-colors"
              >
                Send Enquiry <Send size={16} />
              </button>
            </form>
          )}
        </motion.div>
      </section>
    </div>
  );
}
