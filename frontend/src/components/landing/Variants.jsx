import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Nfc, RefreshCw, QrCode } from "lucide-react";
import { VARIANTS } from "./data";

const BULLETS = [
  { icon: Nfc, text: "Programmable NTAG215 chip with fast, reliable reads" },
  { icon: QrCode, text: "Printed QR code backup so every customer is covered" },
  { icon: RefreshCw, text: "Rewritable — update your review link anytime" },
];

export default function Variants() {
  const [selected, setSelected] = useState(VARIANTS[0]);
  return (
    <section id="variants" data-testid="variants-section" className="py-24 lg:py-32 bg-[#121212] text-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-white/5">
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
          <p data-testid="variants-overline" className="text-xs font-semibold uppercase tracking-[0.2em] text-[#4285F4] mb-4">Pick your style</p>
          <h2 data-testid="variants-heading" className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Four finishes. One reputation machine.
          </h2>
          <p className="text-base text-white/60 mb-10 max-w-lg">
            Model 215 card in Style A or B, black or white. Every unit is precisely identified by model number, so you always receive the correct stand for your setup.
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
                    active ? "border-[#4285F4] bg-[#4285F4]/10" : "border-white/10 bg-white/5 hover:border-white/25"
                  }`}
                >
                  <span className="w-8 h-8 rounded-full border border-white/20 shrink-0" style={{ backgroundColor: v.swatch }} aria-hidden="true" />
                  <span className="text-sm font-semibold">{v.name}</span>
                  {active && <Check size={16} className="ml-auto text-[#4285F4] shrink-0" aria-hidden="true" />}
                </button>
              );
            })}
          </div>
          <p data-testid="variant-description" className="text-sm text-white/60 mb-8 min-h-[2.5rem]">{selected.desc}</p>
          <ul className="flex flex-col gap-4 mb-10">
            {BULLETS.map((b) => (
              <li key={b.text} className="flex items-center gap-3 text-sm text-white/80">
                <span className="w-8 h-8 rounded-full bg-[#4285F4]/15 text-[#4285F4] flex items-center justify-center shrink-0">
                  <b.icon size={15} aria-hidden="true" />
                </span>
                {b.text}
              </li>
            ))}
          </ul>
          <a data-testid="variants-order-button" href="#order" className="inline-block rounded-full bg-[#4285F4] hover:bg-[#2B6CDA] text-white font-semibold px-8 py-4 transition-colors duration-200">
            Order the {selected.name}
          </a>
        </div>
      </div>
    </section>
  );
}
