import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Truck, ShieldCheck, Ban } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { VARIANTS } from "./data";
import SoldTodayBadge from "./SoldTodayBadge";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const PERKS = [
  { icon: Truck, text: "Fast tracked shipping — buyers report 7–9 day delivery" },
  { icon: ShieldCheck, text: "90-day money-back guarantee, no questions asked" },
  { icon: Ban, text: "One-time purchase — no subscription, no monthly fees" },
];

const EMPTY = { name: "", email: "", business_name: "", variant: VARIANTS[0].name, quantity: 1, message: "" };

export default function OrderForm() {
  const [form, setForm] = useState(EMPTY);
  const [sending, setSending] = useState(false);
  const update = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      await axios.post(`${API}/enquiries`, { ...form, quantity: Number(form.quantity) || 1 });
      toast.success("Request received! We'll reply within 24 hours with pricing and delivery details.");
      setForm(EMPTY);
    } catch (err) {
      toast.error("Something went wrong sending your request. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="order" data-testid="order-section" className="py-24 lg:py-32 bg-[#0A0B0E] relative overflow-hidden">
      <div className="noise-overlay" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 relative">
        <div>
          <p data-testid="order-overline" className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37] mb-4">Get yours</p>
          <h2 data-testid="order-heading" className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-[#F8F9FA]">
            Stop losing reviews. <span className="gold-text">Start collecting them.</span>
          </h2>
          <p className="text-base text-[#94A3B8] max-w-lg mb-6 leading-relaxed">
            Your competitors are collecting 5-star reviews right now. Tell us your style and how many counters you're covering — we'll reply within 24 hours with pricing and delivery details.
          </p>
          <p className="text-sm text-[#D4AF37] font-semibold mb-8">Secure Stripe checkout is being added — reserve yours today and we'll confirm your order personally.</p>
          <SoldTodayBadge className="mb-8" testid="order-sold-today-badge" />
          <ul className="flex flex-col gap-5">
            {PERKS.map((p) => (
              <li key={p.text} className="flex items-center gap-3.5 text-sm font-medium text-[#F8F9FA]/85">
                <span className="w-10 h-10 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/25 text-[#D4AF37] flex items-center justify-center shrink-0">
                  <p.icon size={18} aria-hidden="true" />
                </span>
                {p.text}
              </li>
            ))}
          </ul>
        </div>
        <form onSubmit={submit} data-testid="order-form" className="rounded-3xl border border-[#D4AF37]/25 bg-[#12141C]/80 shadow-[0_24px_80px_rgba(0,0,0,0.6)] p-8 lg:p-10 flex flex-col gap-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="flex flex-col gap-2">
              <Label htmlFor="order-name" className="text-[#F8F9FA]/80">Your name *</Label>
              <Input id="order-name" data-testid="order-name-input" required value={form.name} onChange={update("name")} placeholder="Alex Meyer" className="bg-[#0B0C10] border-[#D4AF37]/20 text-[#F8F9FA] placeholder:text-[#94A3B8]/50 focus:ring-2 focus:ring-[#D4AF37]" />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="order-email" className="text-[#F8F9FA]/80">Email *</Label>
              <Input id="order-email" data-testid="order-email-input" type="email" required value={form.email} onChange={update("email")} placeholder="alex@yourbusiness.com" className="bg-[#0B0C10] border-[#D4AF37]/20 text-[#F8F9FA] placeholder:text-[#94A3B8]/50 focus:ring-2 focus:ring-[#D4AF37]" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="order-business" className="text-[#F8F9FA]/80">Business name</Label>
            <Input id="order-business" data-testid="order-business-input" value={form.business_name} onChange={update("business_name")} placeholder="Your café, salon or store" className="bg-[#0B0C10] border-[#D4AF37]/20 text-[#F8F9FA] placeholder:text-[#94A3B8]/50 focus:ring-2 focus:ring-[#D4AF37]" />
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="flex flex-col gap-2">
              <Label htmlFor="order-variant" className="text-[#F8F9FA]/80">Style *</Label>
              <select
                id="order-variant"
                data-testid="order-variant-select"
                value={form.variant}
                onChange={update("variant")}
                className="h-9 w-full rounded-md border border-[#D4AF37]/20 bg-[#0B0C10] px-3 text-sm text-[#F8F9FA] shadow-xs outline-none focus:ring-2 focus:ring-[#D4AF37]"
              >
                {VARIANTS.map((v) => (
                  <option key={v.id} value={v.name}>{v.name}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="order-quantity" className="text-[#F8F9FA]/80">Quantity *</Label>
              <Input id="order-quantity" data-testid="order-quantity-input" type="number" min="1" max="500" required value={form.quantity} onChange={update("quantity")} className="bg-[#0B0C10] border-[#D4AF37]/20 text-[#F8F9FA] focus:ring-2 focus:ring-[#D4AF37]" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="order-message" className="text-[#F8F9FA]/80">Message</Label>
            <Textarea id="order-message" data-testid="order-message-input" rows={4} value={form.message} onChange={update("message")} placeholder="Platform you want to link, delivery country, questions…" className="bg-[#0B0C10] border-[#D4AF37]/20 text-[#F8F9FA] placeholder:text-[#94A3B8]/50 focus:ring-2 focus:ring-[#D4AF37]" />
          </div>
          <button
            type="submit"
            data-testid="order-submit-button"
            disabled={sending}
            className="btn-gold mt-2 w-full disabled:opacity-60"
          >
            {sending ? "Sending…" : "Reserve My Stand"}
          </button>
        </form>
      </div>
    </section>
  );
}
