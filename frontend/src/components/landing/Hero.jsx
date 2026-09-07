import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Star, Ban, Timer, Volume2, VolumeX } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" },
});

const STATS = [
  { icon: Timer, value: "8 sec", label: "from tap to posted review" },
  { icon: Star, value: "3.3×", label: "more clicks with 50+ reviews" },
  { icon: Ban, value: "$0", label: "monthly fees — ever" },
];

export default function Hero() {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);

  const toggleSound = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    if (!v.muted) v.play();
    setMuted(v.muted);
  };

  return (
    <section id="top" className="relative overflow-hidden metallic-bg pt-32 pb-24 lg:pt-40 lg:pb-28">
      <div className="noise-overlay" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative">
        <div>
          <motion.p {...fadeUp(0)} data-testid="hero-overline" className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37] mb-6">
            NFC + QR · Google Review Stand · Model 215
          </motion.p>
          <motion.h1 {...fadeUp(0.1)} data-testid="hero-heading" className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08] mb-6 text-[#F8F9FA]">
            Every happy customer. One tap. <span className="gold-text">Five stars.</span>
          </motion.h1>
          <motion.p {...fadeUp(0.2)} data-testid="hero-subtext" className="text-base md:text-lg text-[#94A3B8] max-w-xl mb-10 leading-relaxed">
            Asking for Google reviews is awkward — and customers who promise to leave one forget the second they walk out. The NFC 215 stand puts your review page one tap away, right on your counter. No apps. No searching. No monthly fees.
          </motion.p>
          <motion.div {...fadeUp(0.3)} className="flex flex-wrap gap-4 mb-12">
            <a data-testid="hero-order-button" href="#order" className="btn-gold">
              Get Your Stand Now
            </a>
            <a data-testid="hero-how-it-works-button" href="#how-it-works" className="btn-ghost-gold">
              See How It Works
            </a>
          </motion.div>
          <motion.div {...fadeUp(0.4)} data-testid="hero-stats" className="grid grid-cols-3 gap-6 max-w-lg border-t border-[#D4AF37]/15 pt-8">
            {STATS.map((s) => (
              <div key={s.value} data-testid={`hero-stat-${s.value.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}`}>
                <div className="flex items-center gap-2 mb-1.5">
                  <s.icon size={16} className="text-[#D4AF37]" aria-hidden="true" />
                  <span className="font-display text-2xl sm:text-3xl font-bold gold-text">{s.value}</span>
                </div>
                <p className="text-xs text-[#94A3B8] leading-snug">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="relative"
        >
          <div className="rounded-[2rem] overflow-hidden border border-[#D4AF37]/25 shadow-[0_24px_80px_rgba(0,0,0,0.6)]">
            <video
              ref={videoRef}
              poster="/images/stand-phone-review.png"
              data-testid="hero-product-video"
              className="w-full max-h-[70vh] object-cover"
              autoPlay
              muted
              loop
              playsInline
              aria-label="Demo: customer taps the NFC 215 stand and leaves a Google review in seconds"
            >
              <source src="/videos/hero-demo.mp4" type="video/mp4" />
              <source src="/videos/hero-demo.webm" type="video/webm" />
            </video>
            <button
              type="button"
              data-testid="hero-sound-toggle"
              onClick={toggleSound}
              aria-label={muted ? "Turn sound on" : "Turn sound off"}
              className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-[#0A0B0E]/85 backdrop-blur border border-[#D4AF37]/50 px-4 py-2 text-xs font-semibold text-[#F3E5AB] shadow-[0_4px_20px_rgba(0,0,0,0.5)] transition-[transform,border-color] duration-200 hover:-translate-y-0.5 hover:border-[#D4AF37]"
            >
              {muted ? <VolumeX size={15} aria-hidden="true" /> : <Volume2 size={15} aria-hidden="true" />}
              {muted ? "Tap for sound" : "Sound on"}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
