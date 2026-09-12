import { useEffect, useState } from "react";
import { Flame } from "lucide-react";

function baseCountForToday() {
  const now = new Date();
  const dayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const seed = dayStart.getDate() * 7 + (dayStart.getMonth() + 1) * 3;
  const fractionOfDay = (now - dayStart) / (24 * 60 * 60 * 1000);
  const dailyTarget = 60 + (seed % 40);
  const start = 12 + (seed % 8);
  return Math.max(start, Math.round(start + fractionOfDay * dailyTarget));
}

export default function SoldTodayBadge({ className = "", testid = "sold-today-badge" }) {
  const [count, setCount] = useState(baseCountForToday);

  useEffect(() => {
    let timer;
    const tick = () => {
      setCount((c) => c + 1);
      timer = setTimeout(tick, 25000 + Math.random() * 30000);
    };
    timer = setTimeout(tick, 25000 + Math.random() * 30000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      data-testid={testid}
      className={`inline-flex items-center gap-2 text-sm text-[#94A3B8] ${className}`}
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
      </span>
      <Flame className="w-4 h-4 text-[#D4AF37]" aria-hidden="true" />
      <span>
        <span data-testid="sold-today-count" className="font-bold gold-text">{count}</span> stands sold today
      </span>
    </div>
  );
}
