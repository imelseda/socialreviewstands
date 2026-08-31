import { useState } from "react";
import { Nfc, Menu, X } from "lucide-react";

const LINKS = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Reviews", href: "#reviews" },
  { label: "Specs", href: "#specs" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header data-testid="site-header" className="fixed top-0 inset-x-0 z-50 bg-white/70 backdrop-blur-xl border-b border-white/40 shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" data-testid="nav-logo" className="flex items-center gap-2.5 font-display font-bold text-lg tracking-tight text-[#121212]">
          <span className="w-9 h-9 rounded-xl bg-[#4285F4] text-white flex items-center justify-center">
            <Nfc size={20} aria-hidden="true" />
          </span>
          TapReview<span className="text-[#4285F4]">215</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <a
              key={l.href}
              data-testid={`nav-link-${l.href.slice(1)}`}
              href={l.href}
              className="text-sm font-medium text-[#525252] hover:text-[#121212] transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
          <a
            data-testid="nav-order-button"
            href="#order"
            className="rounded-full bg-[#4285F4] hover:bg-[#2B6CDA] text-white text-sm font-semibold px-5 py-2.5 transition-colors duration-200"
          >
            Order Now
          </a>
        </div>
        <button
          data-testid="nav-mobile-menu-button"
          className="md:hidden text-[#121212]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      {open && (
        <div data-testid="nav-mobile-menu" className="md:hidden bg-white/95 backdrop-blur-xl border-t border-[#E5E5E5] px-6 py-5 flex flex-col gap-4">
          {LINKS.map((l) => (
            <a
              key={l.href}
              data-testid={`nav-mobile-link-${l.href.slice(1)}`}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-[#525252]"
            >
              {l.label}
            </a>
          ))}
          <a
            data-testid="nav-mobile-order-button"
            href="#order"
            onClick={() => setOpen(false)}
            className="rounded-full bg-[#4285F4] text-white text-sm font-semibold px-5 py-2.5 text-center"
          >
            Order Now
          </a>
        </div>
      )}
    </header>
  );
}
