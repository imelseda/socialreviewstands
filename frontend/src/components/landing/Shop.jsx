import { useState } from "react";
import { motion } from "framer-motion";
import { Lock, Truck, ShieldCheck, Check } from "lucide-react";
import { PRODUCTS } from "./data";

const TRUST = [
  { icon: Lock, text: "Secure Stripe checkout" },
  { icon: Truck, text: "Fast tracked shipping — 7–9 days" },
  { icon: ShieldCheck, text: "90-day money-back guarantee" },
];

function ProductCard({ product, index }) {
  const [selected, setSelected] = useState(product.tiers.findIndex((t) => t.best) >= 0 ? product.tiers.findIndex((t) => t.best) : 0);
  const tier = product.tiers[selected];
  const each = tier.qty > 1 ? (tier.total / tier.qty).toFixed(2).replace(/\.?0+$/, "") : null;

  return (
    <motion.article
      data-testid={`product-card-${product.id}`}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay: index * 0.12, ease: "easeOut" }}
      className="card-luxe group relative flex flex-col overflow-hidden !p-0"
    >
      {product.badge && (
        <span data-testid={`product-badge-${product.id}`} className="absolute top-4 left-4 z-10 rounded-full bg-gradient-to-br from-[#F3E5AB] via-[#D4AF37] to-[#996515] text-[#0A0B0E] text-[11px] font-bold uppercase tracking-[0.15em] px-3.5 py-1.5 shadow-lg">
          {product.badge}
        </span>
      )}
      <div className="h-60 overflow-hidden shrink-0">
        <img src={product.image} alt={product.name} data-testid={`product-image-${product.id}`} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" loading="lazy" />
      </div>
      <div className="flex flex-col gap-4 p-7 flex-1">
        <h3 className="font-display text-xl font-bold tracking-tight text-[#F8F9FA]">{product.name}</h3>
        <p className="text-sm text-[#94A3B8] leading-relaxed">{product.blurb}</p>
        <div className="flex flex-wrap gap-2">
          {product.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-[#0B0C10] border border-[#D4AF37]/20 px-3 py-1 text-[11px] font-semibold text-[#F3E5AB]">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex flex-col gap-2 mt-1" role="radiogroup" aria-label={`${product.name} pack size`}>
          {product.tiers.map((t, i) => {
            const active = i === selected;
            const per = t.qty > 1 ? (t.total / t.qty).toFixed(2).replace(/\.?0+$/, "") : null;
            return (
              <button
                key={t.qty}
                type="button"
                role="radio"
                aria-checked={active}
                data-testid={`tier-option-${product.id}-${t.qty}`}
                onClick={() => setSelected(i)}
                className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-left transition-[border-color,background-color] duration-200 ${
                  active ? "border-[#D4AF37] bg-[#D4AF37]/10" : "border-[#D4AF37]/15 bg-[#0B0C10] hover:border-[#D4AF37]/40"
                }`}
              >
                <span className="text-sm font-semibold text-[#F8F9FA]">
                  {t.qty}× {product.unit}
                  {per && <span className="text-[#94A3B8] font-normal"> · ${per} each</span>}
                </span>
                {t.best && <span className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37]">Best value</span>}
                <span className="ml-auto font-display text-lg font-bold gold-text">${t.total}</span>
                {active && <Check size={15} className="text-[#D4AF37] shrink-0" aria-hidden="true" />}
              </button>
            );
          })}
        </div>
        <a
          href={tier.link || "#order"}
          target={tier.link ? "_blank" : undefined}
          rel={tier.link ? "noreferrer" : undefined}
          data-testid={`buy-button-${product.id}`}
          className="btn-gold w-full mt-auto"
        >
          Buy now — ${tier.total}
        </a>
        {each && <p className="text-xs text-center text-[#94A3B8] -mt-2">That's just ${each} per {product.unit}</p>}
      </div>
    </motion.article>
  );
}

export default function Shop() {
  return (
    <section id="shop" data-testid="shop-section" className="py-24 lg:py-32 bg-[#0B0C10] border-y border-[#D4AF37]/10">
      <div className="max-w-7xl mx-auto px-6">
        <p data-testid="shop-overline" className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37] mb-4">Pricing</p>
        <h2 data-testid="shop-heading" className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-[#F8F9FA]">
          Pick your <span className="gold-text">growth machine.</span>
        </h2>
        <p className="text-base text-[#94A3B8] max-w-2xl mb-16 leading-relaxed">
          Review stands, NFC cards, and social follow signs — every product is a one-time purchase. No subscriptions, no monthly fees, no per-tap charges — ever. Bundle up and put a growth point on every counter.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {PRODUCTS.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
          {TRUST.map((t) => (
            <div key={t.text} data-testid={`shop-trust-${t.icon === Lock ? "secure" : t.icon === Truck ? "shipping" : "guarantee"}`} className="flex items-center gap-2.5">
              <t.icon size={16} className="text-[#D4AF37]" aria-hidden="true" />
              <span className="text-sm font-medium text-[#94A3B8]">{t.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
