import { Nfc } from "lucide-react";

export default function Footer() {
  return (
    <footer data-testid="site-footer" className="bg-[#121212] text-white py-14">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row md:items-center justify-between gap-8">
        <div className="flex items-center gap-2.5 font-display font-bold text-lg tracking-tight">
          <span className="w-9 h-9 rounded-xl bg-[#4285F4] text-white flex items-center justify-center">
            <Nfc size={20} aria-hidden="true" />
          </span>
          TapReview<span className="text-[#4285F4]">215</span>
        </div>
        <nav className="flex flex-wrap gap-x-8 gap-y-3">
          <a data-testid="footer-link-features" href="#features" className="text-sm text-white/60 hover:text-white transition-colors duration-200">Features</a>
          <a data-testid="footer-link-how-it-works" href="#how-it-works" className="text-sm text-white/60 hover:text-white transition-colors duration-200">How it works</a>
          <a data-testid="footer-link-reviews" href="#reviews" className="text-sm text-white/60 hover:text-white transition-colors duration-200">Reviews</a>
          <a data-testid="footer-link-order" href="#order" className="text-sm text-white/60 hover:text-white transition-colors duration-200">Order</a>
        </nav>
        <p className="text-xs text-white/40">© 2026 TapReview 215. Model 215 card · CE certified.</p>
      </div>
    </footer>
  );
}
