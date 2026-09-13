import { Nfc } from "lucide-react";

export default function Footer() {
  return (
    <footer data-testid="site-footer" className="bg-[#0B0C10] border-t border-[#C5A059]/20 py-14">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-10">
          <div className="flex items-center gap-2.5 font-display font-bold text-lg tracking-tight text-[#F8F9FA]">
            <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#F3E5AB] via-[#D4AF37] to-[#996515] text-[#0A0B0E] flex items-center justify-center">
              <Nfc size={20} aria-hidden="true" />
            </span>
            TapFive <span className="gold-text">Review</span>
          </div>
          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            <a data-testid="footer-link-problem" href="#problem" className="text-sm text-[#94A3B8] hover:text-[#F3E5AB] transition-colors duration-200">The Problem</a>
            <a data-testid="footer-link-how-it-works" href="#how-it-works" className="text-sm text-[#94A3B8] hover:text-[#F3E5AB] transition-colors duration-200">How It Works</a>
            <a data-testid="footer-link-pricing" href="#shop" className="text-sm text-[#94A3B8] hover:text-[#F3E5AB] transition-colors duration-200">Pricing</a>
            <a data-testid="footer-link-reviews" href="#reviews" className="text-sm text-[#94A3B8] hover:text-[#F3E5AB] transition-colors duration-200">Reviews</a>
            <a data-testid="footer-link-order" href="#order" className="text-sm text-[#94A3B8] hover:text-[#F3E5AB] transition-colors duration-200">Order</a>
            <a data-testid="footer-link-privacy" href="/privacy" className="text-sm text-[#94A3B8] hover:text-[#F3E5AB] transition-colors duration-200">Privacy</a>
            <a data-testid="footer-link-terms" href="/terms" className="text-sm text-[#94A3B8] hover:text-[#F3E5AB] transition-colors duration-200">Terms</a>
          </nav>
        </div>
        <div className="gold-divider mb-8" aria-hidden="true" />
        <p data-testid="footer-disclaimer" className="text-xs text-[#94A3B8]/70 leading-relaxed max-w-3xl mb-4">
          Disclaimer: TapFive Review is not affiliated with, endorsed by, or sponsored by Google LLC. "Google" and the Google logo are registered trademarks of Google LLC. Our stands use standard NFC technology to open your publicly available review link.
        </p>
        <p className="text-xs text-[#94A3B8]/50">© 2026 TapFive Review · tapfivereview.com · Model 215 card · CE certified. All rights reserved.</p>
      </div>
    </footer>
  );
}
