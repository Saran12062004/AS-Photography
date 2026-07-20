import { useRef, type CSSProperties } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

const words = ["We", "Don't", "Just", "Click."];
const words2 = ["We", "Create", "Timeless", "Memories."];

const ticker = [
  "OUTDOOR SHOOT",
  "MARRIAGE SHOOT",
  "ENGAGEMENT SHOOT",
  "COUPLE SHOOT",
  "PRE-WEDDING",
  "FAMILY SHOOT",
];

const CAM_W = 250;
const CAM_H = 160;
const CAM_D = 100;

function face(w: number, h: number, transform: string): CSSProperties {
  return {
    position: "absolute",
    width: w,
    height: h,
    left: "50%",
    top: "50%",
    marginLeft: -w / 2,
    marginTop: -h / 2,
    transform,
    backfaceVisibility: "hidden",
  };
}

function ring(size: number, z: number, backgroundImage: string, extra?: CSSProperties): CSSProperties {
  return {
    position: "absolute",
    width: size,
    height: size,
    left: "50%",
    top: "50%",
    marginLeft: -size / 2,
    marginTop: -size / 2,
    borderRadius: "50%",
    backgroundImage,
    transform: `translateZ(${z}px)`,
    ...extra,
  };
}

function RealisticCamera() {
  const halfD = CAM_D / 2;
  const halfH = CAM_H / 2;

  return (
    <div className="relative" style={{ width: CAM_W, height: CAM_H, transformStyle: "preserve-3d" }}>
      {/* BACK */}
      <div
        style={{
          ...face(CAM_W, CAM_H, `rotateY(180deg) translateZ(${halfD}px)`),
          background: "linear-gradient(135deg,#2c2318,#140f0a)",
          borderRadius: 20,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 22,
            left: 60,
            width: 90,
            height: 55,
            borderRadius: 4,
            background: "linear-gradient(160deg,#1c2b2e,#0a1012)",
            boxShadow: "0 0 12px rgba(194,144,63,0.15) inset",
          }}
        />
      </div>

      {/* LEFT */}
      <div
        style={{
          ...face(CAM_D, CAM_H, `rotateY(-90deg) translateZ(${CAM_W / 2}px)`),
          background: "linear-gradient(180deg,#241c14,#140f0a)",
          borderRadius: 16,
        }}
      />

      {/* RIGHT */}
      <div
        style={{
          ...face(CAM_D, CAM_H, `rotateY(90deg) translateZ(${CAM_W / 2}px)`),
          background: "linear-gradient(180deg,#241c14,#140f0a)",
          borderRadius: 16,
        }}
      />

      {/* TOP */}
      <div
        style={{
          ...face(CAM_W, CAM_D, `rotateX(90deg) translateZ(${halfH}px)`),
          background: "linear-gradient(180deg,#4a3c2c,#2c2318)",
          borderRadius: 16,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 8,
            left: "50%",
            transform: "translateX(-50%)",
            width: 56,
            height: 34,
            borderRadius: "8px 8px 4px 4px",
            background: "linear-gradient(180deg,#3a2e22,#140f0a)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 14,
            right: 26,
            width: 16,
            height: 16,
            borderRadius: "50%",
            background: "linear-gradient(135deg,#e8c581,#8a6a2e)",
          }}
        />
      </div>

      {/* BOTTOM */}
      <div
        style={{
          ...face(CAM_W, CAM_D, `rotateX(-90deg) translateZ(${halfH}px)`),
          background: "linear-gradient(180deg,#140f0a,#0a0704)",
          borderRadius: 16,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: 20,
            height: 20,
            marginLeft: -10,
            marginTop: -10,
            borderRadius: "50%",
            background: "#2c2318",
            border: "2px solid #c2903f",
          }}
        />
      </div>

      {/* FRONT */}
      <div
        style={{
          ...face(CAM_W, CAM_H, `translateZ(${halfD}px)`),
          background: "linear-gradient(135deg,#4a3c2c 0%,#241c14 55%,#140f0a 100%)",
          borderRadius: 20,
          boxShadow: "inset 0 0 0 1.5px rgba(194,144,63,0.3)",
        }}
      >
        {/* grip texture */}
        <div
          style={{
            position: "absolute",
            left: 14,
            top: 18,
            width: 34,
            height: CAM_H - 36,
            borderRadius: 10,
            backgroundImage:
              "repeating-linear-gradient(115deg, rgba(0,0,0,0.35) 0px, rgba(0,0,0,0.35) 2px, transparent 2px, transparent 6px)",
            opacity: 0.6,
          }}
        />
        {/* shutter button */}
        <div
          style={{
            position: "absolute",
            top: -6,
            right: 26,
            width: 16,
            height: 16,
            borderRadius: "50%",
            background: "linear-gradient(135deg,#e8c581,#8a6a2e)",
            boxShadow: "0 2px 4px rgba(0,0,0,0.4)",
          }}
        />
        {/* brand plate */}
        <p
          style={{
            position: "absolute",
            bottom: 12,
            left: 0,
            right: 0,
            textAlign: "center",
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 14,
            letterSpacing: 3,
            color: "#c2903f",
          }}
        >
          AS PHOTOGRAPHY
        </p>
      </div>

      {/* LENS MOUNT RING */}
      <div style={ring(150, halfD + 2, "linear-gradient(135deg,#3a2e22,#140f0a)")} />

      {/* LENS BODY (long barrel, stepped) */}
      <div style={ring(140, halfD + 26, "linear-gradient(135deg,#2c2318,#0a0704)")} />
      <div
        style={{
          ...ring(
            134,
            halfD + 52,
            "repeating-conic-gradient(rgba(255,255,255,0.07) 0deg 2deg, transparent 2deg 9deg), linear-gradient(135deg,#241c14,#0a0704)",
          ),
        }}
      />
      <div style={ring(130, halfD + 78, "linear-gradient(135deg,#2c2318,#0a0704)")} />

      {/* FOCUS RING (ridged grip) */}
      <div
        style={{
          ...ring(
            126,
            halfD + 104,
            "repeating-conic-gradient(rgba(255,255,255,0.09) 0deg 1.5deg, transparent 1.5deg 6deg), linear-gradient(135deg,#1c150e,#0a0704)",
          ),
        }}
      />

      {/* GOLD ACCENT RING */}
      <div style={ring(118, halfD + 128, "linear-gradient(135deg,#e8c581,#8a6a2e)")} />

      {/* FRONT BARREL RIM */}
      <div style={ring(112, halfD + 140, "linear-gradient(135deg,#3a2e22,#0a0704)")} />

      {/* LENS HOOD */}
      <div
        style={{
          ...ring(126, halfD + 158, "linear-gradient(135deg,#241c14,#0a0704)"),
          boxShadow: "0 0 0 2px rgba(194,144,63,0.2) inset",
        }}
      />

      {/* LENS GLASS */}
      <div
        style={{
          ...ring(
            96,
            halfD + 156,
            "radial-gradient(circle at 32% 28%, #faf9f6 0%, rgba(194,144,63,0.7) 25%, #060402 88%)",
          ),
          boxShadow: "0 0 35px rgba(194,144,63,0.4)",
        }}
      />
    </div>
  );
}

export default function CinematicHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const mvX = useMotionValue(0);
  const mvY = useMotionValue(0);
  const springX = useSpring(mvX, { stiffness: 60, damping: 20 });
  const springY = useSpring(mvY, { stiffness: 60, damping: 20 });

  const glowX = useTransform(springX, (v) => v * 0.6);
  const glowY = useTransform(springY, (v) => v * 0.6);
  const tiltX = useTransform(springY, (v) => 12 + v * -0.3);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    const relX = (e.clientX - rect.left) / rect.width - 0.5;
    const relY = (e.clientY - rect.top) / rect.height - 0.5;
    mvX.set(relX * 40);
    mvY.set(relY * 40);
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[100vh] flex items-center justify-center overflow-hidden pt-10"
    >
      {/* base gradient */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#d3d3d3_0%,#dcdcdc_45%,#c9c9c9_100%)]" />

      {/* film grain */}
      <div
        className="absolute inset-0 opacity-[0.04] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* mouse-parallax glow */}
      <motion.div
        className="absolute inset-0 opacity-70"
        style={{
          x: glowX,
          y: glowY,
          backgroundImage:
            "radial-gradient(circle at 30% 30%, rgba(194,144,63,0.16), transparent 45%), radial-gradient(circle at 75% 65%, rgba(169,130,90,0.14), transparent 50%)",
        }}
      />

      {/* drifting ambient orbs */}
      <motion.div
        className="absolute -top-24 -left-24 w-[520px] h-[520px] rounded-full bg-bronze/10 blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[420px] h-[420px] rounded-full bg-gold/10 blur-3xl"
        animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* light sweep */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(100deg, transparent 40%, rgba(255,255,255,0.35) 50%, transparent 60%)",
        }}
        initial={{ x: "-120%" }}
        animate={{ x: "120%" }}
        transition={{ duration: 2.2, delay: 0.3, ease: "easeInOut" }}
      />

      {/* content */}
      <div className="relative z-10 w-full max-w-6xl px-6 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] items-center gap-10">
        <div className="text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="inline-flex items-center gap-2 border border-gold/40 text-gold text-xs uppercase tracking-[0.25em] px-4 py-2 rounded-full mb-8 bg-cream/40"
          >
            <Sparkles size={14} /> Vellore's Cinematic Photography Studio
          </motion.div>

          <h1 className="font-display text-5xl sm:text-6xl font-bold leading-[1.05] mb-6">
            <span className="block overflow-hidden">
              {words.map((w, i) => (
                <motion.span
                  key={w}
                  className="inline-block mr-4"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.7, delay: 0.15 + i * 0.08, ease: "easeOut" }}
                >
                  {w}
                </motion.span>
              ))}
            </span>
            <span className="block overflow-hidden text-transparent bg-clip-text bg-gradient-to-r from-gold via-[#8a6a2e] to-gold bg-[length:200%_auto] animate-shimmer">
              {words2.map((w, i) => (
                <motion.span
                  key={w}
                  className="inline-block mr-4"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.7, delay: 0.5 + i * 0.08, ease: "easeOut" }}
                >
                  {w}
                </motion.span>
              ))}
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1, ease: "easeOut" }}
            className="text-ink/70 text-lg max-w-xl mx-auto lg:mx-0 mb-10"
          >
            From weddings to engagements, outdoor stories to candid couple moments —
            AS Photography turns your biggest days into frames you'll treasure forever.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.15, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <Link
              to="/contact"
              className="bg-gold text-ink px-8 py-3 uppercase text-sm tracking-[0.15em] font-medium hover:bg-cream transition-colors"
            >
              Book a Shoot
            </Link>
            <Link
              to="/services"
              className="border border-ink/30 text-ink px-8 py-3 uppercase text-sm tracking-[0.15em] hover:border-gold hover:text-gold transition-colors"
            >
              View Services
            </Link>
          </motion.div>
        </div>

        {/* 3D rotating camera */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
          className="relative mx-auto flex items-center justify-center"
          style={{ height: 380, perspective: 2000 }}
        >
          {/* static ground shadow (does not rotate) */}
          <div
            className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full blur-xl"
            style={{ width: 240, height: 28, background: "rgba(36,28,20,0.25)" }}
          />

          {/* decorative rings */}
          <motion.div
            className="absolute w-[380px] h-[380px] rounded-full border border-gold/20"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute w-[440px] h-[440px] rounded-full border border-bronze/15"
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          />

          <motion.div style={{ rotateX: tiltX, transformStyle: "preserve-3d" }}>
            <motion.div
              style={{ transformStyle: "preserve-3d" }}
              animate={{ rotateY: 360 }}
              transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
            >
              <RealisticCamera />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* ticker */}
      <div className="absolute bottom-16 left-0 right-0 overflow-hidden opacity-60">
        <motion.div
          className="flex gap-10 whitespace-nowrap text-xs tracking-[0.3em] text-ink/50"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        >
          {[...ticker, ...ticker].map((t, i) => (
            <span key={i} className="flex items-center gap-10">
              {t} <span className="text-gold">•</span>
            </span>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-ink/40 text-xs uppercase tracking-[0.3em]"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Scroll
      </motion.div>
    </section>
  );
}
