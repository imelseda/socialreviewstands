import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Nfc, RefreshCw, QrCode } from "lucide-react";
import { VARIANTS } from "./data";

const BULLETS = [
  { icon: Nfc, text: "Rewritable NTAG215 chip — fast, reliable reads every time" },
  { icon: QrCode, text: "Printed QR backup so no customer is ever left out" },
  { icon: RefreshCw, text: "Change your review link anytime, free, in seconds" },
];

export default function Variants() {
  const [selected, setSelected] = useState(VARIANTS[0]);
  return (
    <section id="variants" data-testid="variants-section" className="py-24 lg:py-32 bg-[#0A0B0E] relative overflow-hidden">
      <div className="noise-overlay" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative">
        <div className="relative rounded-[2rem] overflow-hidden border border-[#D4AF37]/25 shadow-[0_24px_80px_rgba(0,0,0,0.6)]">
          <AnimatePresence mode="wait">
            <motion.img
              key={selected.id}
              src={selected.image}
              alt={`${selected.name} NFC review stand`}
              data-testid="variant-product-image"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="w-full max-h-[70vh] object-cover"
            />
          </AnimatePresence>
        </div>
        <div>
          <p data-testid="variants-overline" className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37] mb-4">Choose your finish</p>
          <h2 data-testid="variants-heading" className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-[#F8F9FA]">
            Four finishes. <span className="gold-text">One reputation machine.</span>
          </h2>
          <p className="text-base text-[#94A3B8] mb-10 max-w-lg leading-relaxed">
            Every unit is precisely identified by model number 215 — so you always receive exactly the stand you ordered, ready for your counter.
          </p>
          <div className="grid sm:grid-cols-2 gap-3 mb-10" role="radiogroup" aria-label="Choose a style">
            {VARIANTS.map((v) => {
              const active = v.id === selected.id;
              return (
                <button
                  key={v.id}
                  data-testid={`variant-option-${v.id}`}
                  role="radio"
                  aria-checked={active}
                  onClick={() => setSelected(v)}
                  className={`flex items-center gap-3 rounded-2xl border p-4 text-left transition-[border-color,background-color,transform] duration-200 hover:-translate-y-0.5 ${
                    active
                      ? "border-[#D4AF37] bg-[#D4AF37]/10 shadow-[0_4px_24px_rgba(212,175,55,0.2)]"
                      : "border-[#D4AF37]/15 bg-[#12141C]/80 hover:border-[#D4AF37]/40"
                  }`}
                >
                  <span className="w-8 h-8 rounded-full border border-[#D4AF37]/30 shrink-0" style={{ backgroundColor: v.swatch }} aria-hidden="true" />
                  <span className="text-sm font-semibold text-[#F8F9FA]">{v.short}</span>
                  {active && <Check size={16} className="ml-auto text-[#D4AF37] shrink-0" aria-hidden="true" />}
                </button>
              );
            })}
          </div>
          <p data-testid="variant-description" className="text-sm text-[#94A3B8] mb-8 min-h-[2.5rem] leading-relaxed">{selected.desc}</p>
          <ul className="flex flex-col gap-4 mb-10">
            {BULLETS.map((b) => (
              <li key={b.text} className="flex items-center gap-3 text-sm text-[#F8F9FA]/80">
                <span className="w-8 h-8 rounded-full bg-[#D4AF37]/15 text-[#D4AF37] flex items-center justify-center shrink-0">
                  <b.icon size={15} aria-hidden="true" />
                </span>
                {b.text}
              </li>
            ))}
          </ul>
          <a data-testid="variants-order-button" href="#order" className="btn-gold">
            Get the {selected.short}
          </a>
        </div>
      </div>
    </section>
  );
}
