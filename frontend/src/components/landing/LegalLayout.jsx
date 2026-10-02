import { Nfc, ArrowLeft } from "lucide-react";
import Footer from "./Footer";

export default function LegalLayout({ eyebrow, title, updated, children, testid }) {
  return (
    <div className="min-h-screen bg-[#0A0B0E] text-[#F8F9FA]">
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#0B0C10]/80 border-b border-[#C5A059]/20">
        <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" data-testid="legal-logo" className="flex items-center gap-2.5 font-display font-bold text-lg tracking-tight text-[#F8F9FA]">
            <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#F3E5AB] via-[#D4AF37] to-[#996515] text-[#0A0B0E] flex items-center justify-center">
              <Nfc size={20} aria-hidden="true" />
            </span>
            Social Media <span className="gold-text">Review Stands</span>
          </a>
          <a href="/" data-testid="legal-back-link" className="flex items-center gap-2 text-sm font-medium text-[#94A3B8] hover:text-[#F3E5AB] transition-colors duration-200">
            <ArrowLeft size={16} aria-hidden="true" /> Back to site
          </a>
        </nav>
      </header>
      <main className="max-w-3xl mx-auto px-6 py-20 lg:py-28" data-testid={testid}>
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37] mb-4">{eyebrow}</p>
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-3">{title}</h1>
        {updated ? <p className="text-xs text-[#94A3B8]/70 mb-12">Last updated: {updated}</p> : <div className="mb-12" />}
        <div className="legal-prose">{children}</div>
      </main>
      <Footer />
    </div>
  );
}
