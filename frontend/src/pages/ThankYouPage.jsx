import LegalLayout from "@/components/landing/LegalLayout";
import { Link2, Nfc, Store, CheckCircle2, Truck, RefreshCw, Mail } from "lucide-react";

const STEPS = [
  {
    icon: Link2,
    step: "01",
    title: "Grab your link",
    text: "Google review stands: open your Google Business Profile (or search your business name on Google) and copy your 'Write a review' share link. Social stands: copy your Instagram, Facebook or TikTok profile URL.",
  },
  {
    icon: Nfc,
    step: "02",
    title: "Program the stand",
    text: "NFC: open any free NFC tools app → Write → Add URL → hold your phone to the stand. QR: scan the QR code printed on your sign, and paste your link on the setup page that opens. Takes 30 seconds.",
  },
  {
    icon: Store,
    step: "03",
    title: "Place it where customers pause",
    text: "Checkout counter, reception desk, waiting area, or hand the card over with the bill. That's it — reviews and follows start rolling in on autopilot.",
  },
];

const NOTES = [
  { icon: Truck, text: "Your receipt is on its way by email. Stands ship tracked — buyers report 7–9 day delivery." },
  { icon: RefreshCw, text: "Change your link anytime, free — the chip is rewritable in seconds." },
  { icon: Mail, text: "Questions? Email support@tapfivereview.com and we'll get you set up personally." },
];

export default function ThankYouPage() {
  return (
    <LegalLayout eyebrow="Order confirmed" title="You're in. Let's get you collecting 5-star reviews." updated="" testid="thank-you-page">
      <div className="flex items-center gap-4 rounded-3xl border border-[#D4AF37]/30 bg-gradient-to-b from-[#12141C] to-[#0A0B0E] p-6 mb-14 -mt-6">
        <span className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#F3E5AB] via-[#D4AF37] to-[#996515] text-[#0A0B0E] flex items-center justify-center shrink-0">
          <CheckCircle2 size={24} aria-hidden="true" />
        </span>
        <p className="text-sm text-[#F8F9FA]/85 leading-relaxed m-0">
          Payment successful — thank you! Your stand is being prepared. While it ships, here's the 30-second setup so you're ready the moment it arrives.
        </p>
      </div>

      <div className="flex flex-col gap-4 mb-14">
        {STEPS.map((s) => (
          <div key={s.step} data-testid={`setup-step-${s.step}`} className="card-luxe !p-6 flex gap-5">
            <span className="w-12 h-12 shrink-0 rounded-2xl bg-gradient-to-br from-[#F3E5AB] via-[#D4AF37] to-[#996515] text-[#0A0B0E] flex items-center justify-center shadow-[0_4px_16px_rgba(212,175,55,0.35)]">
              <s.icon size={22} aria-hidden="true" />
            </span>
            <div>
              <div className="flex items-center gap-3 mb-1.5">
                <span className="text-xs font-bold tracking-[0.2em] text-[#D4AF37]/60">{s.step}</span>
                <h3 className="font-display text-lg font-bold tracking-tight text-[#F8F9FA] m-0">{s.title}</h3>
              </div>
              <p className="text-sm text-[#94A3B8] leading-relaxed m-0">{s.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-5 mb-14">
        {NOTES.map((n) => (
          <div key={n.text} className="flex items-center gap-3.5">
            <span className="w-10 h-10 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/25 text-[#D4AF37] flex items-center justify-center shrink-0">
              <n.icon size={18} aria-hidden="true" />
            </span>
            <p className="text-sm text-[#94A3B8] leading-relaxed m-0">{n.text}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-4">
        <a href="/" data-testid="thank-you-home-button" className="btn-gold">Back to TapFive Review</a>
        <a href="/#shop" data-testid="thank-you-shop-button" className="btn-ghost-gold">Add another stand</a>
      </div>
    </LegalLayout>
  );
}
