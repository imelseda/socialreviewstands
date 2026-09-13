import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BadgeCheck, X } from "lucide-react";

const ORDERS = [
  { name: "Marcus", location: "Austin, TX", product: "Stand · Black", img: "/images/stand-black-dims.png" },
  { name: "Priya", location: "London, UK", product: "Stand · White", img: "/images/stand-white-google.png" },
  { name: "Chloe", location: "Sydney, AU", product: "Instagram Stand", img: "/images/social-instagram.png" },
  { name: "Jordan", location: "Toronto, CA", product: "Stand · Black × 3", img: "/images/stand-black-dims.png" },
  { name: "Sofia", location: "Miami, FL", product: "Stand · White × 2", img: "/images/stand-white-google.png" },
  { name: "Liam", location: "Dublin, IE", product: "NFC Card", img: "/images/card-closeup.png" },
  { name: "Aaliyah", location: "Atlanta, GA", product: "Stand · White", img: "/images/stand-white-cafe.png" },
  { name: "Noah", location: "Denver, CO", product: "Stand · Black", img: "/images/stand-black-dims.png" },
  { name: "Emma", location: "Berlin, DE", product: "TikTok Stand", img: "/images/social-tiktok.png" },
  { name: "Diego", location: "Los Angeles, CA", product: "Stand · White × 3", img: "/images/stand-white-google.png" },
  { name: "Isla", location: "Auckland, NZ", product: "Facebook Stand", img: "/images/social-facebook.png" },
  { name: "Ethan", location: "Chicago, IL", product: "Stand · Black × 2", img: "/images/stand-black-tiktok.png" },
];

const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const timeAgo = () => {
  const opts = ["About 10 seconds ago", "A minute ago", "2 minutes ago", "4 minutes ago", "8 minutes ago", "12 minutes ago", "18 minutes ago"];
  return opts[rand(0, opts.length - 1)];
};

const VISIBLE_MS = 6000;
const MIN_GAP_MS = 8000;
const MAX_GAP_MS = 15000;
const FIRST_DELAY_MS = 5000;

export default function SocialProofPopup() {
  const [current, setCurrent] = useState(null);
  const idx = useRef(rand(0, ORDERS.length - 1));
  const closed = useRef(false);
  const timers = useRef([]);

  const clearTimers = () => {
    timers.current.forEach((t) => clearTimeout(t));
    timers.current = [];
  };

  const showNext = () => {
    if (closed.current) return;
    const order = ORDERS[idx.current % ORDERS.length];
    idx.current += 1;
    setCurrent({ ...order, ago: timeAgo(), key: Date.now() });

    timers.current.push(
      setTimeout(() => {
        setCurrent(null);
        timers.current.push(setTimeout(showNext, rand(MIN_GAP_MS, MAX_GAP_MS)));
      }, VISIBLE_MS)
    );
  };

  useEffect(() => {
    timers.current.push(setTimeout(showNext, FIRST_DELAY_MS));
    return clearTimers;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClose = () => {
    closed.current = true;
    clearTimers();
    setCurrent(null);
  };

  return (
    <div className="fixed bottom-5 left-5 z-[60] pointer-events-none" data-testid="social-proof-container">
      <AnimatePresence mode="wait">
        {current && (
          <motion.div
            key={current.key}
            initial={{ opacity: 0, x: -60, y: 10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
            className="pointer-events-auto relative flex items-center gap-3 w-[320px] max-w-[calc(100vw-2.5rem)] bg-[#12141C]/95 backdrop-blur-md border border-[#D4AF37]/25 shadow-[0_16px_48px_rgba(0,0,0,0.6)] rounded-xl p-3 pr-9"
            data-testid="social-proof-toast"
          >
            <div className="w-12 h-12 shrink-0 rounded-lg overflow-hidden bg-[#0B0C10] border border-[#D4AF37]/20">
              <img src={current.img} alt={current.product} className="w-full h-full object-cover" loading="lazy" />
            </div>

            <div className="min-w-0">
              <p className="text-sm text-[#F8F9FA] leading-tight truncate" data-testid="social-proof-name">
                <span className="font-semibold">{current.name}</span>
                <span className="text-[#94A3B8]"> in {current.location}</span>
              </p>
              <p className="text-xs text-[#F8F9FA]/80 leading-tight mt-0.5 truncate">
                ordered the <span className="text-[#D4AF37] font-medium">{current.product}</span>
              </p>
              <p className="flex items-center gap-1 text-[11px] text-[#94A3B8] mt-1">
                <BadgeCheck className="w-3 h-3 text-[#D4AF37]" aria-hidden="true" />
                {current.ago}
                <span className="mx-1">·</span>
                <span className="text-emerald-400">Verified order</span>
              </p>
            </div>

            <button
              onClick={handleClose}
              aria-label="Dismiss notification"
              data-testid="social-proof-close"
              className="absolute top-2 right-2 text-[#94A3B8] hover:text-[#F8F9FA] transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
