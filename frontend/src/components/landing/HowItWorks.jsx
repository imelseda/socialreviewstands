import { motion } from "framer-motion";
import { Nfc, Star, TrendingUp } from "lucide-react";

const STEPS = [
  {
    icon: Nfc,
    step: "01",
    title: "Tap or scan",
    text: "Customers tap the stand with their phone or scan the QR code. No app downloads, no typing, no searching for your business.",
  },
  {
    icon: Star,
    step: "02",
    title: "Review page opens instantly",
    text: "The stand jumps straight to your Google review page — or Facebook, Instagram, LINE or TikTok. You choose the destination.",
  },
  {
    icon: TrendingUp,
    step: "03",
    title: "Watch your rating grow",
    text: "Reviews roll in automatically while you work. More reviews means better local ranking and more new customers finding you.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" data-testid="how-it-works-section" className="py-24 lg:py-32 bg-white border-y border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-6">
        <p data-testid="how-it-works-overline" className="text-xs font-semibold uppercase tracking-[0.2em] text-[#4285F4] mb-4">How it works</p>
        <h2 data-testid="how-it-works-heading" className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-16 max-w-2xl">
          From counter to 5 stars in three seconds flat.
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.step}
              data-testid={`how-it-works-step-${i + 1}`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.12, ease: "easeOut" }}
              className={`rounded-3xl border border-[#E5E5E5] bg-[#F9F9F7] p-8 hover:-translate-y-1 hover:shadow-lg transition-[transform,box-shadow] duration-200 ${i === 1 ? "md:mt-10" : ""} ${i === 2 ? "md:mt-20" : ""}`}
            >
              <div className="flex items-center justify-between mb-8">
                <span className="w-12 h-12 rounded-2xl bg-[#4285F4] text-white flex items-center justify-center">
                  <s.icon size={22} aria-hidden="true" />
                </span>
                <span className="font-display text-sm font-bold text-[#525252]/50 tracking-widest">{s.step}</span>
              </div>
              <h3 className="font-display text-xl font-bold tracking-tight mb-3">{s.title}</h3>
              <p className="text-sm text-[#525252] leading-relaxed">{s.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
