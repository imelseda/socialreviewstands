import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { REVIEWS } from "./data";

const Stars = () => (
  <div className="flex gap-1 mb-5" aria-label="5 out of 5 stars">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} size={16} className="fill-[#FBBC04] text-[#FBBC04]" aria-hidden="true" />
    ))}
  </div>
);

export default function Reviews() {
  return (
    <section id="reviews" data-testid="reviews-section" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <p data-testid="reviews-overline" className="text-xs font-semibold uppercase tracking-[0.2em] text-[#4285F4] mb-4">Customer reviews</p>
        <h2 data-testid="reviews-heading" className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-16 max-w-2xl">
          Businesses are already collecting reviews on autopilot.
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {REVIEWS.map((r, i) => (
            <motion.figure
              key={i}
              data-testid={`review-card-${i}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.12, ease: "easeOut" }}
              className={`rounded-3xl border border-[#E5E5E5] bg-white p-8 hover:-translate-y-1 hover:shadow-lg transition-[transform,box-shadow] duration-200 ${i % 3 === 1 ? "md:mt-8" : ""}`}
            >
              <Stars />
              <blockquote className="text-base text-[#121212] leading-relaxed mb-6">“{r.text}”</blockquote>
              <figcaption className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-full bg-[#4285F4]/10 text-[#4285F4] flex items-center justify-center font-display font-bold text-sm" aria-hidden="true">
                  {r.role.charAt(0)}
                </span>
                <div>
                  <p className="text-sm font-semibold text-[#121212]">{r.role}</p>
                  <p className="text-xs text-[#525252]">Color: {r.color}</p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
