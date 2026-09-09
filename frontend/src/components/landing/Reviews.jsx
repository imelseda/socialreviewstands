import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { REVIEWS } from "./data";

const Stars = () => (
  <div className="flex gap-1 mb-5" aria-label="5 out of 5 stars">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} size={16} className="fill-[#D4AF37] text-[#D4AF37]" aria-hidden="true" />
    ))}
  </div>
);

export default function Reviews() {
  return (
    <section id="reviews" data-testid="reviews-section" className="py-24 lg:py-32 bg-[#0A0B0E]">
      <div className="max-w-7xl mx-auto px-6">
        <p data-testid="reviews-overline" className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37] mb-4">Verified buyer reviews</p>
        <h2 data-testid="reviews-heading" className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 max-w-3xl text-[#F8F9FA]">
          Real businesses. <span className="gold-text">Real 5-star results.</span>
        </h2>
        <p className="text-base text-[#94A3B8] max-w-2xl mb-12 leading-relaxed">
          Owners who stopped asking for reviews — and started collecting them automatically.
        </p>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl mb-16"
        >
          <div className="rounded-[2rem] overflow-hidden border border-[#D4AF37]/25 shadow-[0_24px_80px_rgba(0,0,0,0.6)]">
            <video
              controls
              preload="metadata"
              data-testid="reviews-demo-video"
              className="w-full bg-black"
              aria-label="Video testimonial: a business owner demonstrates the NFC review stand"
            >
              <source src="/videos/demo-testimonial.mp4" type="video/mp4" />
              <source src="/videos/demo-testimonial.webm" type="video/webm" />
            </video>
          </div>
          <p data-testid="reviews-video-caption" className="mt-5 text-sm text-[#94A3B8] flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] shrink-0" aria-hidden="true" />
            Watch a real owner walk through it — two minutes, best with sound on.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-6">
          {REVIEWS.map((r, i) => (
            <motion.figure
              key={i}
              data-testid={`review-card-${i}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.12, ease: "easeOut" }}
              className={`card-luxe p-8 ${i % 3 === 1 ? "md:mt-8" : ""}`}
            >
              <Stars />
              <blockquote className="text-base text-[#F8F9FA]/90 leading-relaxed mb-6">“{r.text}”</blockquote>
              <figcaption className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-full bg-gradient-to-br from-[#F3E5AB] via-[#D4AF37] to-[#996515] text-[#0A0B0E] flex items-center justify-center font-display font-bold text-sm" aria-hidden="true">
                  {r.role.charAt(0)}
                </span>
                <div>
                  <p className="text-sm font-semibold text-[#F8F9FA]">{r.role}</p>
                  <p className="text-xs text-[#94A3B8]">Color: {r.color}</p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
