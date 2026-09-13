import { motion } from "framer-motion";
import { SearchX, MessageSquareX, AlarmClockOff } from "lucide-react";

const PAINS = [
  {
    icon: SearchX,
    title: "The search struggle",
    text: "Open Google. Type your business name. Find the right listing. Tap through to the review box. Every extra step kills another review — 9 out of 10 never make it.",
  },
  {
    icon: MessageSquareX,
    title: "The awkward ask",
    text: "Your staff hates begging for reviews. Customers feel put on the spot. So nobody asks, nobody reviews, and your rating stays frozen.",
  },
  {
    icon: AlarmClockOff,
    title: "The \u201cI'll do it later\u201d",
    text: "Later never comes. Customers mean it when they promise — then forget within 10 minutes of walking out your door.",
  },
];

const STATS = [
  { value: "74%", label: "of consumers only trust reviews from the last 3 months" },
  { value: "3.3×", label: "more likely to be clicked with 50+ reviews vs under 10" },
  { value: "2 min", label: "of manual searching vs 8 seconds with one tap" },
];

export default function Problem() {
  return (
    <section id="problem" data-testid="problem-section" className="py-24 lg:py-32 bg-[#0B0C10] border-y border-[#D4AF37]/10">
      <div className="max-w-7xl mx-auto px-6">
        <p data-testid="problem-overline" className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37] mb-4">Chapter 01 · The problem</p>
        <h2 data-testid="problem-heading" className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 max-w-3xl text-[#F8F9FA]">
          Happy customers forget to review you. <span className="gold-text">Every single day.</span>
        </h2>
        <p data-testid="problem-subtext" className="text-base md:text-lg text-[#94A3B8] max-w-2xl mb-16 leading-relaxed">
          They loved your service. They meant to leave a review. But between your counter and their couch, the intention dies — and every forgotten review is a customer your competitor wins instead.
        </p>
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {PAINS.map((p, i) => (
            <motion.div
              key={p.title}
              data-testid={`problem-card-${i}`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.12, ease: "easeOut" }}
              className="card-luxe p-8"
            >
              <span className="w-12 h-12 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/25 text-[#D4AF37] flex items-center justify-center mb-8">
                <p.icon size={22} aria-hidden="true" />
              </span>
              <h3 className="font-display text-xl font-bold tracking-tight mb-3 text-[#F8F9FA]">{p.title}</h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed">{p.text}</p>
            </motion.div>
          ))}
        </div>
        <div data-testid="problem-stats" className="grid sm:grid-cols-3 gap-px rounded-3xl overflow-hidden border border-[#D4AF37]/20 bg-[#D4AF37]/10">
          {STATS.map((s, i) => (
            <div key={s.value} data-testid={`problem-stat-${i}`} className="bg-[#12141C] px-8 py-10">
              <p className="font-display text-4xl sm:text-5xl font-bold gold-text mb-3">{s.value}</p>
              <p className="text-sm text-[#94A3B8] leading-snug">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
