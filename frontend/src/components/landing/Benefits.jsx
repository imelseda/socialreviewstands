import { motion } from "framer-motion";
import { CircleDollarSign, Smartphone, QrCode, Zap, Share2, ShieldCheck } from "lucide-react";

const BENEFITS = [
  {
    icon: CircleDollarSign,
    title: "One purchase. $0 monthly fees.",
    text: "Buy it once and collect unlimited reviews forever. While competitors pay $50–200 a month for review software, you pay nothing — ever again.",
    span: "",
  },
  {
    icon: Smartphone,
    title: "Works on every phone",
    text: "Every NFC-enabled iPhone and Android taps instantly. The printed QR code covers everything else.",
    span: "",
  },
  {
    icon: QrCode,
    title: "Tap + scan, double coverage",
    text: "NFC for speed, QR as backup. No customer, phone, or review ever slips through.",
    span: "",
  },
  {
    icon: Zap,
    title: "Results from day one",
    text: "Unbox, set up in 30 seconds, and your first new review can land the same afternoon.",
    span: "",
  },
  {
    icon: Share2,
    title: "Google, TikTok & more",
    text: "Point the stand at Google Reviews, Facebook, Instagram, LINE or TikTok — and reprogram it anytime, free.",
    span: "",
  },
  {
    icon: ShieldCheck,
    title: "CE certified & eco-friendly",
    text: "European safety and environmental standards. No high-concern chemicals. Built for daily business use.",
    span: "",
  },
];

export default function Benefits() {
  return (
    <section id="benefits" data-testid="benefits-section" className="py-24 lg:py-32 bg-[#0B0C10] border-y border-[#D4AF37]/10">
      <div className="max-w-7xl mx-auto px-6">
        <p data-testid="benefits-overline" className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37] mb-4">Chapter 03 · Why businesses choose it</p>
        <h2 data-testid="benefits-heading" className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-16 max-w-3xl text-[#F8F9FA]">
          One stand. Zero effort. <span className="gold-text">Reviews on autopilot.</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {BENEFITS.map((b, i) => (
            <motion.div
              key={b.title}
              data-testid={`benefit-card-${i}`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1, ease: "easeOut" }}
              className={`card-luxe p-8 ${b.span}`}
            >
              <span className="w-12 h-12 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/25 text-[#D4AF37] flex items-center justify-center mb-8">
                <b.icon size={22} aria-hidden="true" />
              </span>
              <h3 className="font-display text-xl font-bold tracking-tight mb-3 text-[#F8F9FA]">{b.title}</h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed">{b.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
