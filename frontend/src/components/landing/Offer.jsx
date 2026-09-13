import { motion } from "framer-motion";
import { Check, ShieldCheck, Truck, Ban } from "lucide-react";
import { INCLUSIONS } from "./data";

const TRUST = [
  { icon: ShieldCheck, label: "90-day money-back guarantee" },
  { icon: Truck, label: "Fast tracked shipping — buyers report 7–9 days" },
  { icon: Ban, label: "No subscription. No monthly fees. Ever." },
];

export default function Offer() {
  return (
    <section id="offer" data-testid="offer-section" className="py-24 lg:py-32 bg-[#0B0C10] border-y border-[#D4AF37]/10 relative overflow-hidden">
      <div className="noise-overlay" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative">
        <div>
          <p data-testid="offer-overline" className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37] mb-4">Chapter 08 · The offer</p>
          <h2 data-testid="offer-heading" className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-[#F8F9FA]">
            Your 24/7 review machine. <span className="gold-text">One purchase. Zero fees.</span>
          </h2>
          <p className="text-base text-[#94A3B8] mb-10 max-w-lg leading-relaxed">
            A single new customer from a Google review can be worth hundreds to your business. One stand on your counter pays for itself with the very first review it collects.
          </p>
          <ul className="flex flex-col gap-4 mb-10">
            {INCLUSIONS.map((item, i) => (
              <li key={item} data-testid={`offer-inclusion-${i}`} className="flex items-start gap-3 text-sm text-[#F8F9FA]/85 leading-relaxed">
                <span className="w-6 h-6 rounded-full bg-[#D4AF37]/15 text-[#D4AF37] flex items-center justify-center shrink-0 mt-0.5">
                  <Check size={13} aria-hidden="true" />
                </span>
                {item}
              </li>
            ))}
          </ul>
          <a data-testid="offer-cta-button" href="#shop" className="btn-gold">
            Claim Your Stand Now
          </a>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="rounded-[2rem] border border-[#D4AF37]/30 bg-gradient-to-b from-[#12141C] to-[#0A0B0E] p-10 shadow-[0_24px_80px_rgba(0,0,0,0.6)]"
          data-testid="guarantee-box"
        >
          <span className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#F3E5AB] via-[#D4AF37] to-[#996515] text-[#0A0B0E] flex items-center justify-center mb-8 shadow-[0_4px_20px_rgba(212,175,55,0.4)]">
            <ShieldCheck size={26} aria-hidden="true" />
          </span>
          <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight mb-4 text-[#F8F9FA]">
            90-day money-back guarantee
          </h3>
          <p className="text-sm text-[#94A3B8] leading-relaxed mb-10">
            Put the stand on your counter and watch the reviews come in. If you're not completely satisfied within 90 days, send it back for a full refund — no questions, no hassle, zero risk.
          </p>
          <div className="flex flex-col gap-5">
            {TRUST.map((t) => (
              <div key={t.label} data-testid={`guarantee-trust-${t.label.slice(0, 10).replace(/\s+/g, "-").toLowerCase()}`} className="flex items-center gap-3.5">
                <span className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/25 text-[#D4AF37] flex items-center justify-center shrink-0">
                  <t.icon size={18} aria-hidden="true" />
                </span>
                <span className="text-sm font-medium text-[#F8F9FA]/85">{t.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
