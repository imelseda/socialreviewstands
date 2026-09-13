const ITEMS = ["Tap to Review", "NFC + QR", "Five Stars", "No Monthly Fees", "30-Second Setup", "Reviews on Autopilot"];

export default function Marquee() {
  return (
    <div className="marquee" aria-hidden="true" data-testid="editorial-marquee">
      <div className="marquee-track">
        {[0, 1].map((half) => (
          <div className="marquee-half" key={half}>
            {ITEMS.map((item, i) => (
              <span className="marquee-item" key={item}>
                <span className={i % 2 ? "text-[#D4AF37]" : "text-[#F8F9FA]"}>{item}</span>
                <svg viewBox="0 0 26 26" fill="currentColor" aria-hidden="true">
                  <path d="M12 3l7 9-7 9-7-9z" />
                </svg>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
