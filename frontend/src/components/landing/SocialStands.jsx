import { motion } from "framer-motion";
import { Instagram, Facebook, Music2 } from "lucide-react";

const PLATFORMS = [
  {
    icon: Instagram,
    tint: "#E1306C",
    name: "Instagram NFC Stand",
    text: "Turn counter traffic into an active Instagram community — one tap or scan and they're following you.",
  },
  {
    icon: Facebook,
    tint: "#1877F2",
    name: "Facebook NFC Stand",
    text: "A sleek acrylic display for checkout, reception, or event tables — customers land on your page, ready to like and follow.",
  },
  {
    icon: Music2,
    tint: "#25F4EE",
    name: "TikTok NFC Stand",
    text: "Built for high-traffic counters, salons and pop-ups — sends foot traffic straight to your TikTok profile in seconds.",
  },
];

export default function SocialStands() {
  return (
    <section id="social" data-testid="social-section" className="py-24 lg:py-32 bg-[#0A0B0E] relative overflow-hidden">
      <div className="noise-overlay" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative">
        <div>
          <p data-testid="social-overline" className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37] mb-4">Just launched · Social growth</p>
          <h2 data-testid="social-heading" className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-[#F8F9FA]">
            Not just reviews. <span className="gold-text">Follows, too.</span>
          </h2>
          <p className="text-base text-[#94A3B8] max-w-lg mb-10 leading-relaxed">
            The same tap-and-scan magic, pointed at your socials. Place an Instagram, Facebook or TikTok stand next to your review stand and turn every waiting customer into a follower — no apps, no searching, no asking.
          </p>
          <div className="flex flex-col gap-4 mb-10">
            {PLATFORMS.map((p, i) => (
              <motion.div
                key={p.name}
                data-testid={`social-platform-${p.name.split(" ")[0].toLowerCase()}`}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.12, ease: "easeOut" }}
                className="card-luxe !p-5 flex items-start gap-4"
              >
                <span
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: `${p.tint}1f`, border: `1px solid ${p.tint}55`, color: p.tint }}
                >
                  <p.icon size={20} aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <div className="flex items-baseline gap-3 mb-1">
                    <h3 className="font-display text-lg font-bold tracking-tight text-[#F8F9FA]">{p.name}</h3>
                    <span className="font-display font-bold gold-text">$30</span>
                  </div>
                  <p className="text-sm text-[#94A3B8] leading-relaxed">{p.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <a data-testid="social-shop-button" href="#shop" className="btn-gold">
            Shop Social Stands — $30 each
          </a>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="rounded-[2rem] overflow-hidden border border-[#D4AF37]/25 shadow-[0_24px_80px_rgba(0,0,0,0.6)]"
        >
          <img
            src="/images/social-trio.jpg"
            alt="Instagram, Facebook and TikTok NFC stands on a counter at a busy event"
            data-testid="social-trio-image"
            className="w-full max-h-[75vh] object-cover"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
}
