import { motion } from "framer-motion";

const SPECS = [
  { label: "Model number", value: "215 card — precise identification, always the correct unit" },
  { label: "Chip", value: "NTAG215 (NFC), rewritable" },
  { label: "Dimensions", value: "12.75 × 7.6 × 5 cm (5.02 × 2.99 × 1.97 in)" },
  { label: "Styles", value: "Style A / Style B, obsidian black or pearl white" },
  { label: "Compatibility", value: "Google Reviews, Facebook, Instagram, LINE, TikTok" },
  { label: "Certification", value: "CE certified — European safety & environmental standards" },
  { label: "Packaging", value: "1 piece per pack — deploy one counter or many" },
  { label: "Materials", value: "Eco-friendly build, no high-concern chemicals" },
];

export default function Specs() {
  return (
    <section id="specs" data-testid="specs-section" className="py-24 lg:py-32 bg-[#0A0B0E]">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p data-testid="specs-overline" className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37] mb-4">Specifications</p>
          <h2 data-testid="specs-heading" className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-12 text-[#F8F9FA]">
            Small footprint. <span className="gold-text">Serious hardware.</span>
          </h2>
          <dl className="divide-y divide-[#D4AF37]/10 border-y border-[#D4AF37]/10">
            {SPECS.map((s) => (
              <div key={s.label} data-testid={`spec-row-${s.label.toLowerCase().replace(/\s+/g, "-")}`} className="grid sm:grid-cols-[180px_1fr] gap-1 sm:gap-6 py-4">
                <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D4AF37]/70 pt-0.5">{s.label}</dt>
                <dd className="text-sm font-medium text-[#F8F9FA]/90">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="rounded-[2rem] overflow-hidden border border-[#D4AF37]/25 shadow-[0_24px_80px_rgba(0,0,0,0.6)]"
        >
          <img
            src="/images/stand-black-dims.png"
            alt="Black NFC 215 stand with dimension annotations"
            data-testid="specs-product-image"
            className="w-full max-h-[70vh] object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
