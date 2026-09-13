import { motion } from "framer-motion";
import { PackageOpen, Nfc, TrendingUp } from "lucide-react";

const STEPS = [
  {
    icon: PackageOpen,
    step: "01",
    title: "Unbox & place",
    text: "Set the stand on your counter, front desk, or table. Setup takes 30 seconds — scan the QR, paste your Google review link once, done.",
  },
  {
    icon: Nfc,
    step: "02",
    title: "Customer taps or scans",
    text: "One tap with any smartphone — just like tap-to-pay — or a quick QR scan. No app downloads, no typing, no searching for your business.",
  },
  {
    icon: TrendingUp,
    step: "03",
    title: "Reviews roll in 24/7",
    text: "Your Google review page opens instantly while the experience is fresh. Ratings climb, rankings rise, and new customers find you first.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" data-testid="how-it-works-section" className="py-24 lg:py-32 bg-[#0A0B0E]">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
        <p data-testid="how-it-works-overline" className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37] mb-4">Chapter 02 · The solution</p>
          <h2 data-testid="how-it-works-heading" className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-[#F8F9FA]">
            Tap. Review. Done. <span className="gold-text">It's really that simple.</span>
          </h2>
          <p className="text-base text-[#94A3B8] mb-12 max-w-lg leading-relaxed">
            No tech skills. No learning curve. No staff training. The stand removes every step between a happy customer and a posted 5-star review.
          </p>
          <div className="flex flex-col gap-4">
            {STEPS.map((s, i) => (
              <motion.div
                key={s.step}
                data-testid={`how-it-works-step-${i + 1}`}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: i * 0.12, ease: "easeOut" }}
                className="card-luxe p-6 flex gap-5"
              >
                <span className="w-12 h-12 shrink-0 rounded-2xl bg-gradient-to-br from-[#F3E5AB] via-[#D4AF37] to-[#996515] text-[#0A0B0E] flex items-center justify-center shadow-[0_4px_16px_rgba(212,175,55,0.35)]">
                  <s.icon size={22} aria-hidden="true" />
                </span>
                <div>
                  <div className="flex items-center gap-3 mb-1.5">
                    <span className="text-xs font-bold tracking-[0.2em] text-[#D4AF37]/60">{s.step}</span>
                    <h3 className="font-display text-lg font-bold tracking-tight text-[#F8F9FA]">{s.title}</h3>
                  </div>
                  <p className="text-sm text-[#94A3B8] leading-relaxed">{s.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="rounded-[2rem] overflow-hidden border border-[#D4AF37]/25 shadow-[0_24px_80px_rgba(0,0,0,0.6)]">
            <img
              src="/images/solution-bar-scene.png"
              alt="Customer holding a phone with the Google review page open next to the NFC review stand on a bar counter"
              data-testid="solution-image"
              className="w-full max-h-[75vh] object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
