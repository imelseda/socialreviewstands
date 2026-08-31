import { motion } from "framer-motion";

const SPECS = [
  { label: "Model number", value: "215 card" },
  { label: "Chip", value: "NTAG215 (NFC), rewritable" },
  { label: "Dimensions", value: "12.75 × 7.6 × 5 cm (5.02 × 2.99 × 1.97 in)" },
  { label: "Styles", value: "Style A / Style B, black or white" },
  { label: "Compatibility", value: "Google Reviews, Facebook, Instagram, LINE, TikTok" },
  { label: "Certification", value: "CE certified" },
  { label: "Packaging", value: "1 piece per pack" },
  { label: "Materials", value: "Eco-friendly, no high-concern chemicals" },
];

export default function Specs() {
  return (
    <section id="specs" data-testid="specs-section" className="py-24 lg:py-32 bg-white border-y border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p data-testid="specs-overline" className="text-xs font-semibold uppercase tracking-[0.2em] text-[#4285F4] mb-4">Specifications</p>
          <h2 data-testid="specs-heading" className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-12">
            Small footprint. Serious hardware.
          </h2>
          <dl className="divide-y divide-[#E5E5E5] border-y border-[#E5E5E5]">
            {SPECS.map((s) => (
              <div key={s.label} data-testid={`spec-row-${s.label.toLowerCase().replace(/\s+/g, "-")}`} className="grid sm:grid-cols-[180px_1fr] gap-1 sm:gap-6 py-4">
                <dt className="text-xs font-semibold uppercase tracking-[0.15em] text-[#525252] pt-0.5">{s.label}</dt>
                <dd className="text-sm font-medium text-[#121212]">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="rounded-[2rem] overflow-hidden border border-[#E5E5E5]"
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
