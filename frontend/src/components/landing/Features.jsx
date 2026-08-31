import { motion } from "framer-motion";
import { Share2, Nfc, Layers, ShieldCheck, Leaf, Package } from "lucide-react";

const PLATFORMS = ["Google Reviews", "Facebook", "Instagram", "LINE", "TikTok"];

const FEATURES = [
  {
    icon: Share2,
    title: "One tap, every platform",
    text: "Program the stand to open Google Reviews, Facebook, Instagram, LINE or TikTok. Perfect for businesses running multi-platform social strategies.",
    span: "md:col-span-2",
    chips: true,
  },
  {
    icon: Nfc,
    title: "NFC 215 chip inside",
    text: "The reliable NTAG215 chip delivers fast, consistent reads and is rewritable with any free NFC tools app.",
    span: "",
  },
  {
    icon: Layers,
    title: "Standing bracket design",
    text: "The bending-card bracket stands stable and visible on tables and counters — in Style A or B, black or white.",
    span: "",
  },
  {
    icon: ShieldCheck,
    title: "CE certified",
    text: "Meets European safety and environmental standards for trustworthy use in retail and hospitality worldwide.",
    span: "",
  },
  {
    icon: Leaf,
    title: "Eco-friendly build",
    text: "High-quality construction with no high-concern chemicals — safe for staff, customers and the planet.",
    span: "",
  },
  {
    icon: Package,
    title: "Single-piece packaging",
    text: "Sold 1 piece per pack for easy setup or small-scale rollout — no excess inventory, no waste.",
    span: "",
  },
];

export default function Features() {
  return (
    <section id="features" data-testid="features-section" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <p data-testid="features-overline" className="text-xs font-semibold uppercase tracking-[0.2em] text-[#4285F4] mb-4">Why the 215 stand</p>
        <h2 data-testid="features-heading" className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-16 max-w-2xl">
          Built for counters where reviews happen.
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              data-testid={`feature-card-${i}`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1, ease: "easeOut" }}
              className={`rounded-3xl border border-[#E5E5E5] bg-white p-8 hover:-translate-y-1 hover:shadow-lg transition-[transform,box-shadow] duration-200 ${f.span}`}
            >
              <span className="w-12 h-12 rounded-2xl bg-[#F9F9F7] border border-[#E5E5E5] text-[#4285F4] flex items-center justify-center mb-8">
                <f.icon size={22} aria-hidden="true" />
              </span>
              <h3 className="font-display text-xl font-bold tracking-tight mb-3">{f.title}</h3>
              <p className="text-sm text-[#525252] leading-relaxed">{f.text}</p>
              {f.chips && (
                <div className="flex flex-wrap gap-2 mt-6">
                  {PLATFORMS.map((p) => (
                    <span key={p} data-testid={`platform-chip-${p.toLowerCase().replace(/\s+/g, "-")}`} className="rounded-full bg-[#F9F9F7] border border-[#E5E5E5] px-3.5 py-1.5 text-xs font-semibold text-[#121212]">
                      {p}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
