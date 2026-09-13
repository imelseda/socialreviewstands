import { useEffect, useRef, useState } from "react";

const ITEMS = ["Tap to Review", "NFC + QR", "Five Stars", "No Monthly Fees", "30-Second Setup", "Reviews on Autopilot"];

export default function Marquee() {
  const trackRef = useRef(null);
  const [fits, setFits] = useState(false);

  useEffect(() => {
    const measure = () => {
      const track = trackRef.current;
      if (!track) return;
      const half = track.querySelector(".marquee-half");
      const container = track.parentElement;
      setFits(half && container ? half.getBoundingClientRect().width <= container.clientWidth : false);
    };
    measure();
    window.addEventListener("resize", measure);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  return (
    <div className="marquee" aria-hidden="true" data-testid="editorial-marquee">
      <div ref={trackRef} className={`marquee-track${fits ? " marquee-track--static" : ""}`}>
        {[0, 1].map((half) => (
          <div className="marquee-half" key={half}>
            {ITEMS.map((item, i) => (
              <span className="marquee-item" key={item}>
                <span className={i % 2 ? "text-[#D4AF37]" : "text-[#F8F9FA]"}>{item}</span>
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
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
