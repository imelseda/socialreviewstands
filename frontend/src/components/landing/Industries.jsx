import { motion } from "framer-motion";
import { UtensilsCrossed, Sparkles, Stethoscope, Car, BedDouble, KeyRound, Dumbbell, ShoppingBag, PawPrint, Wrench } from "lucide-react";
import { INDUSTRIES } from "./data";

const ICONS = [UtensilsCrossed, Sparkles, Stethoscope, Car, BedDouble, KeyRound, Dumbbell, ShoppingBag, PawPrint, Wrench];

export default function Industries() {
  return (
    <section id="industries" data-testid="industries-section" className="py-24 lg:py-28 bg-[#0B0C10] border-y border-[#D4AF37]/10">
      <div className="max-w-7xl mx-auto px-6">
        <p data-testid="industries-overline" className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37] mb-4">Chapter 05 · Who it's for</p>
        <h2 data-testid="industries-heading" className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 max-w-3xl text-[#F8F9FA]">
          Built for any business with a counter, <span className="gold-text">desk, or door.</span>
        </h2>
        <p className="text-base text-[#94A3B8] max-w-2xl mb-14 leading-relaxed">
          If customers walk in happy and walk out without reviewing, the 215 stand closes that gap — at checkout, reception, the waiting room, or the service station.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {INDUSTRIES.map((name, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <motion.div
                key={name}
                data-testid={`industry-card-${i}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: (i % 5) * 0.08, ease: "easeOut" }}
                className="card-luxe p-5 flex flex-col items-start gap-4"
              >
                <span className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/25 text-[#D4AF37] flex items-center justify-center">
                  <Icon size={18} aria-hidden="true" />
                </span>
                <span className="text-sm font-semibold text-[#F8F9FA] leading-snug">{name}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
