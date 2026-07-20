import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { UploadCloud, ArrowRight, RefreshCcw, ImagePlus } from "lucide-react";
import { woodStyle, woodFinishes, type WoodStops } from "../lib/woodFrame";

interface FrameOption {
  id: string;
  name: string;
  size: string;
  price: number;
  ratio: number;
  stops: WoodStops;
  mat: string;
}

const sizes: { size: string; price: number; ratio: number }[] = [
  { size: '8" x 10"', price: 499, ratio: 4 / 5 },
  { size: '12" x 16"', price: 899, ratio: 3 / 4 },
  { size: '11.7" x 16.5" (A3)', price: 749, ratio: 0.71 },
  { size: '10" x 10" Square', price: 599, ratio: 1 },
  { size: '16" x 20"', price: 1299, ratio: 4 / 5 },
];

const frames: FrameOption[] = woodFinishes.map((w, i) => ({
  id: w.name.toLowerCase().replace(/\s+/g, "-"),
  name: w.name,
  stops: w.stops,
  mat: "bg-cream",
  ...sizes[i],
}));

function FramePreview({ option, image }: { option: FrameOption; image: string | null }) {
  return (
    <div className="p-[9%]" style={{ aspectRatio: `${option.ratio}`, ...woodStyle(option.stops) }}>
      <div className="w-full h-full p-[3%] bg-[#1c130c]/40">
        <div className={`w-full h-full p-[7%] ${option.mat}`}>
          <div className="w-full h-full overflow-hidden bg-bronze/15 flex items-center justify-center">
            {image ? (
              <img src={image} alt="Preview in frame" className="w-full h-full object-cover" />
            ) : (
              <ImagePlus size={18} className="text-bronze/50" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FrameStudio() {
  const [image, setImage] = useState<string | null>(null);
  const [selected, setSelected] = useState<FrameOption>(frames[0]);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleFile = (file: File | undefined) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setImage(reader.result as string);
    reader.readAsDataURL(file);
  };

  const handleEnquire = () => {
    const params = new URLSearchParams({
      frame: `${selected.name} — ${selected.size} (₹${selected.price})`,
    });
    navigate(`/contact?${params.toString()}`);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-16 items-start">
      {/* PREVIEW */}
      <div className="flex flex-col items-center">
        <div
          className="relative w-full max-w-sm mx-auto flex items-center justify-center"
          style={{ minHeight: "22rem" }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={selected.id}
              initial={{ opacity: 0, scale: 0.95, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="shadow-[0_30px_70px_rgba(0,0,0,0.45)]"
              style={{
                width: selected.ratio >= 1 ? "min(80%, 300px)" : "min(64%, 250px)",
              }}
            >
              <FramePreview option={selected} image={image} />
            </motion.div>
          </AnimatePresence>
        </div>

        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => handleFile(e.target.files?.[0])}
        />

        <button
          onClick={() => inputRef.current?.click()}
          className="mt-10 inline-flex items-center gap-2 border border-gold text-gold px-6 py-3 uppercase text-xs tracking-[0.15em] hover:bg-gold hover:text-ink transition-colors"
        >
          {image ? <RefreshCcw size={16} /> : <UploadCloud size={16} />}
          {image ? "Change Photo" : "Upload Your Photo"}
        </button>
        <p className="text-xs text-ink/40 mt-3 text-center max-w-xs">
          Upload any photo and preview exactly how it'll look, framed and ready for your wall.
        </p>
      </div>

      {/* OPTIONS */}
      <div>
        <p className="text-gold uppercase tracking-[0.25em] text-xs mb-2">Step 2</p>
        <h3 className="font-display text-2xl mb-6">Choose Your Wood Finish</h3>

        <div className="grid gap-3">
          {frames.map((f, i) => (
            <button
              key={f.id}
              onClick={() => setSelected(f)}
              className={`group flex items-center gap-5 border px-4 py-4 text-left transition-all ${
                selected.id === f.id
                  ? "border-gold bg-gold/[0.06] shadow-[0_0_0_1px_rgba(194,144,63,0.18)]"
                  : "border-ink/10 hover:border-gold/30"
              }`}
            >
              <span className="text-xs text-ink/30 font-display w-5 shrink-0">
                0{i + 1}
              </span>

              <div className="w-12 h-12 shrink-0 flex items-center justify-center">
                <div className="w-10 h-10" style={{ aspectRatio: `${f.ratio}` }}>
                  <FramePreview option={f} image={null} />
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-ink font-display text-lg leading-tight">{f.name}</p>
                <p className="text-xs text-ink/50 mt-0.5">{f.size}</p>
              </div>

              <span
                className={`shrink-0 text-sm font-medium px-3 py-1 border ${
                  selected.id === f.id
                    ? "border-gold text-gold"
                    : "border-ink/15 text-ink/60 group-hover:border-gold/30 group-hover:text-gold/80"
                }`}
              >
                ₹{f.price}
              </span>
            </button>
          ))}
        </div>

        <button
          onClick={handleEnquire}
          className="mt-8 w-full flex items-center justify-center gap-2 bg-gold text-ink px-8 py-3 uppercase text-sm tracking-[0.15em] font-medium hover:bg-cream transition-colors"
        >
          Enquire About This Frame <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}
