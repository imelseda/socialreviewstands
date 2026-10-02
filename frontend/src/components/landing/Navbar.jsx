import { useState } from "react";
import { Nfc, Menu, X } from "lucide-react";

const LINKS = [
  { label: "The Problem", href: "#problem" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#shop" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header data-testid="site-header" className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-[#0B0C10]/80 border-b border-[#C5A059]/20">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" data-testid="nav-logo" className="flex items-center gap-2.5 font-display font-bold text-lg tracking-tight text-[#F8F9FA]">
          <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#F3E5AB] via-[#D4AF37] to-[#996515] text-[#0A0B0E] flex items-center justify-center shadow-[0_4px_16px_rgba(212,175,55,0.4)]">
            <Nfc size={20} aria-hidden="true" />
          </span>
          Social Media <span className="gold-text">Review Stands</span>
        </a>
        <div className="hidden md:flex items-center gap-7">
          {LINKS.map((l) => (
            <a
              key={l.href}
              data-testid={`nav-link-${l.href.slice(1)}`}
              href={l.href}
              className="text-sm font-medium text-[#94A3B8] hover:text-[#F3E5AB] transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
          <a data-testid="nav-order-button" href="#order" className="btn-gold !px-5 !py-2.5 text-sm">
            Get Your Stand
          </a>
        </div>
        <button
          data-testid="nav-mobile-menu-button"
          className="md:hidden text-[#F8F9FA]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      {open && (
        <div data-testid="nav-mobile-menu" className="md:hidden bg-[#0B0C10]/95 backdrop-blur-xl border-t border-[#C5A059]/20 px-6 py-5 flex flex-col gap-4">
          {LINKS.map((l) => (
            <a
              key={l.href}
              data-testid={`nav-mobile-link-${l.href.slice(1)}`}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-[#94A3B8]"
            >
              {l.label}
            </a>
          ))}
          <a data-testid="nav-mobile-order-button" href="#order" onClick={() => setOpen(false)} className="btn-gold !py-2.5 text-sm justify-center">
            Get Your Stand
          </a>
        </div>
      )}
    </header>
  );
}
