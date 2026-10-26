import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Star, Ban, Timer, Volume2, VolumeX } from "lucide-react";
import SoldTodayBadge from "./SoldTodayBadge";

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

const HeroVideo = ({ testid, className }) => {
  const [muted, setMuted] = useState(true);
  const videoRef = useRef(null);

  const toggleSound = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !muted;
    setMuted(!muted);
    if (v.paused) v.play().catch(() => {});
  };

  return (
    <div className="relative rounded-[2rem] overflow-hidden border border-[#D4AF37]/25 shadow-[0_24px_80px_rgba(0,0,0,0.6)]">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onCanPlay={(e) => e.currentTarget.play().catch(() => {})}
        title="Social Media Review Stands — see the NFC Google review stand in action"
        aria-label="Video showing how social media review stands work: a customer taps the NFC stand with their phone and the Google review page opens instantly — no apps, no searching, no monthly fees"
        data-testid={testid}
        className={`w-full object-cover ${className}`}
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
        <source src="/videos/hero-video.webm" type="video/webm" />
      </video>
      <button
        type="button"
        onClick={toggleSound}
        data-testid={`${testid}-sound-toggle`}
        aria-label={muted ? "Turn sound on" : "Turn sound off"}
        className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full bg-[#0A0B0E]/80 backdrop-blur-md border border-[#D4AF37]/40 px-4 py-2 text-xs font-semibold text-[#F3E5AB] tracking-wide transition-colors hover:bg-[#0A0B0E] hover:border-[#D4AF37]"
      >
        {muted ? <VolumeX size={15} aria-hidden="true" /> : <Volume2 size={15} aria-hidden="true" />}
        {muted ? "Tap for sound" : "Sound on"}
      </button>
    </div>
  );
};

export default function Hero() {
  const heroRef = useRef(null);

  return (
    <section id="top" ref={heroRef} className="relative overflow-hidden metallic-bg pt-32 pb-24 lg:pt-40 lg:pb-28">
      <div className="noise-overlay" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start relative">
        {/* Left Column */}
        <div>
          <motion.p {...fadeUp(0)} data-testid="hero-overline" className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37] mb-6">
            NFC + QR · Google Review Stand · Model 215
          </motion.p>
          <h1 data-testid="hero-heading" className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08] mb-6 text-[#F8F9FA]">
            {["Happy customers.", "More reviews and followers.", "Zero effort."].map((line, i) => (
              <span key={line} className="block overflow-hidden pb-2">
                <motion.span
                  className={`block ${i === 2 ? "gold-text" : ""}`}
                  initial={{ y: "115%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, delay: 0.15 + i * 0.13, ease: [0.22, 1, 0.36, 1] }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>
          <motion.p {...fadeUp(0.2)} data-testid="hero-subtext" className="text-base md:text-lg text-[#94A3B8] max-w-xl mb-10 leading-relaxed">
            Asking for Google reviews is awkward — and customers who promise to leave one forget the second they walk out. Our social media review stands put your Google review page or your social media channel one tap away, right on your counter. No apps. No searching. No monthly fees.
          </motion.p>
          <motion.div {...fadeUp(0.25)} className="lg:hidden mb-10">
            <HeroVideo testid="hero-video-mobile" className="max-h-[60vh]" />
          </motion.div>
          <motion.div {...fadeUp(0.3)} className="flex flex-wrap gap-4 mb-5">
            <a data-testid="hero-order-button" href="#shop" className="btn-gold">
              Get Your Stand Now
            </a>
            <a data-testid="hero-how-it-works-button" href="#how-it-works" className="btn-ghost-gold">
              See How It Works
            </a>
          </motion.div>
          <motion.div {...fadeUp(0.35)} className="mb-10">
            <SoldTodayBadge />
          </motion.div>
        </div>

        {/* Right Column: Frozen video position with stats lowered further down */}
        <div className="hidden lg:block pt-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <HeroVideo testid="hero-video" className="max-h-[70vh]" />
          </motion.div>

          {/* Increased gap from mt-8 to mt-16 to push the stats down by ~50px */}
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            data-testid="hero-stats" 
            className="grid grid-cols-3 gap-5 mt-16 pt-7 border-t border-[#D4AF37]/15"
          >
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
      </div>
    </section>
  );
}