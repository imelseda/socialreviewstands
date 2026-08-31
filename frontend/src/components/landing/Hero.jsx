import { motion } from "framer-motion";
import { Star, Nfc, QrCode, ShieldCheck, Truck } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" },
});

const STATS = [
  { icon: Star, label: "5-star buyer feedback" },
  { icon: Truck, label: "7–9 day delivery" },
  { icon: ShieldCheck, label: "CE certified" },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-24 lg:pt-40 lg:pb-32">
      <div className="noise-overlay" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative">
        <div>
          <motion.p {...fadeUp(0)} data-testid="hero-overline" className="text-xs font-semibold uppercase tracking-[0.2em] text-[#4285F4] mb-6">
            NFC 215 · Programmable Google Review Stand
          </motion.p>
          <motion.h1 {...fadeUp(0.1)} data-testid="hero-heading" className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter leading-[1.05] mb-6">
            Every happy customer, one tap away from a 5-star review.
          </motion.h1>
          <motion.p {...fadeUp(0.2)} data-testid="hero-subtext" className="text-base md:text-lg text-[#525252] max-w-xl mb-10">
            Place the NFC 215 stand on your counter. Customers tap their phone or scan the QR code and land straight on your Google review page — no apps to install, no awkward asking.
          </motion.p>
          <motion.div {...fadeUp(0.3)} className="flex flex-wrap gap-4 mb-12">
            <a data-testid="hero-order-button" href="#order" className="rounded-full bg-[#4285F4] hover:bg-[#2B6CDA] text-white font-semibold px-8 py-4 transition-colors duration-200">
              Order Your Stand
            </a>
            <a data-testid="hero-how-it-works-button" href="#how-it-works" className="rounded-full border border-[#121212]/15 bg-white hover:bg-[#121212] hover:text-white text-[#121212] font-semibold px-8 py-4 transition-colors duration-200">
              See How It Works
            </a>
          </motion.div>
          <motion.div {...fadeUp(0.4)} className="flex flex-wrap gap-x-10 gap-y-4">
            {STATS.map((s) => (
              <div key={s.label} data-testid={`hero-stat-${s.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`} className="flex items-center gap-2.5">
                <s.icon size={18} className="text-[#4285F4]" aria-hidden="true" />
                <span className="text-sm font-medium text-[#525252]">{s.label}</span>
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
          <div className="rounded-[2rem] overflow-hidden border border-[#E5E5E5] bg-white">
            <img
              src="/images/stand-white-google.png"
              alt="NFC 215 Google review stand on a counter"
              data-testid="hero-product-image"
              className="w-full max-h-[70vh] object-cover"
            />
          </div>
          <div data-testid="hero-tap-badge" className="absolute -left-3 top-10 flex items-center gap-2 rounded-full bg-white border border-[#E5E5E5] shadow-lg px-4 py-2 text-xs font-semibold text-[#121212]">
            <span className="w-7 h-7 rounded-full bg-[#4285F4]/10 text-[#4285F4] flex items-center justify-center">
              <Nfc size={14} aria-hidden="true" />
            </span>
            Tap with NFC
          </div>
          <div data-testid="hero-scan-badge" className="absolute -right-3 bottom-12 flex items-center gap-2 rounded-full bg-white border border-[#E5E5E5] shadow-lg px-4 py-2 text-xs font-semibold text-[#121212]">
            <span className="w-7 h-7 rounded-full bg-[#4285F4]/10 text-[#4285F4] flex items-center justify-center">
              <QrCode size={14} aria-hidden="true" />
            </span>
            Scan the QR code
          </div>
        </motion.div>
      </div>
    </section>
  );
}
