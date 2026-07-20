import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logoMark from "../assets/logo-mark.png";

interface IntroAnimationProps {
  onFinish: () => void;
}

export default function IntroAnimation({ onFinish }: IntroAnimationProps) {
  const [shutter, setShutter] = useState(false);

  useEffect(() => {
    const shutterTimer = setTimeout(() => setShutter(true), 2200);
    const finishTimer = setTimeout(onFinish, 2900);
    return () => {
      clearTimeout(shutterTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-base overflow-hidden"
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(194,144,63,0.1),transparent_65%)]"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          initial={{ scale: 0.6, opacity: 0, rotate: -15 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative z-10 mb-6 w-24 h-24 rounded-full overflow-hidden border border-gold/40 shadow-[0_0_40px_rgba(194,144,63,0.14)]"
        >
          <img src={logoMark} alt="AS Photography" className="w-full h-full object-cover" />
        </motion.div>

        <div className="relative z-10 overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="font-display text-4xl sm:text-6xl font-bold tracking-[0.15em] text-ink"
          >
            AS PHOTOGRAPHY
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.1em" }}
          animate={{ opacity: 1, letterSpacing: "0.4em" }}
          transition={{ duration: 1, delay: 1.1 }}
          className="relative z-10 mt-4 text-xs sm:text-sm uppercase text-gold/80 pl-[0.4em]"
        >
Vellore
        </motion.p>

        <AnimatePresence>
          {shutter && (
            <>
              <motion.div
                className="absolute top-0 left-0 w-1/2 h-full bg-base"
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
              />
              <motion.div
                className="absolute top-0 right-0 w-1/2 h-full bg-base"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
              />
            </>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
}
