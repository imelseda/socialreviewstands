import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Truck, ShieldCheck, RefreshCw } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { VARIANTS } from "./data";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const PERKS = [
  { icon: Truck, text: "Fast shipping — buyers report delivery in 7–9 days" },
  { icon: RefreshCw, text: "Rewritable chip — update your link anytime" },
  { icon: ShieldCheck, text: "CE certified, safe and eco-friendly build" },
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
      toast.success("Enquiry sent! We'll get back to you within 24 hours.");
      setForm(EMPTY);
    } catch (err) {
      toast.error("Something went wrong sending your enquiry. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="order" data-testid="order-section" className="py-24 lg:py-32 bg-white border-t border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
        <div>
          <p data-testid="order-overline" className="text-xs font-semibold uppercase tracking-[0.2em] text-[#4285F4] mb-4">Order enquiry</p>
          <h2 data-testid="order-heading" className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Put the 215 stand on your counter.
          </h2>
          <p className="text-base text-[#525252] max-w-lg mb-10">
            Tell us which style you want and how many counters you're covering. We'll reply with pricing and delivery details within 24 hours.
          </p>
          <ul className="flex flex-col gap-5">
            {PERKS.map((p) => (
              <li key={p.text} className="flex items-center gap-3.5 text-sm font-medium text-[#121212]">
                <span className="w-10 h-10 rounded-2xl bg-[#F9F9F7] border border-[#E5E5E5] text-[#4285F4] flex items-center justify-center shrink-0">
                  <p.icon size={18} aria-hidden="true" />
                </span>
                {p.text}
              </li>
            ))}
          </ul>
        </div>
        <form onSubmit={submit} data-testid="order-form" className="rounded-3xl border border-[#E5E5E5] bg-[#F9F9F7] p-8 lg:p-10 flex flex-col gap-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="flex flex-col gap-2">
              <Label htmlFor="order-name">Your name *</Label>
              <Input id="order-name" data-testid="order-name-input" required value={form.name} onChange={update("name")} placeholder="Alex Meyer" className="bg-white focus:ring-2 focus:ring-[#4285F4]" />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="order-email">Email *</Label>
              <Input id="order-email" data-testid="order-email-input" type="email" required value={form.email} onChange={update("email")} placeholder="alex@yourbusiness.com" className="bg-white focus:ring-2 focus:ring-[#4285F4]" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="order-business">Business name</Label>
            <Input id="order-business" data-testid="order-business-input" value={form.business_name} onChange={update("business_name")} placeholder="Your café, salon or store" className="bg-white focus:ring-2 focus:ring-[#4285F4]" />
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="flex flex-col gap-2">
              <Label htmlFor="order-variant">Style *</Label>
              <select
                id="order-variant"
                data-testid="order-variant-select"
                value={form.variant}
                onChange={update("variant")}
                className="h-9 w-full rounded-md border border-input bg-white px-3 text-sm shadow-xs outline-none focus:ring-2 focus:ring-[#4285F4]"
              >
                {VARIANTS.map((v) => (
                  <option key={v.id} value={v.name}>{v.name}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="order-quantity">Quantity *</Label>
              <Input id="order-quantity" data-testid="order-quantity-input" type="number" min="1" max="500" required value={form.quantity} onChange={update("quantity")} className="bg-white focus:ring-2 focus:ring-[#4285F4]" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="order-message">Message</Label>
            <Textarea id="order-message" data-testid="order-message-input" rows={4} value={form.message} onChange={update("message")} placeholder="Anything else we should know? (platform you want to link, delivery country, …)" className="bg-white focus:ring-2 focus:ring-[#4285F4]" />
          </div>
          <button
            type="submit"
            data-testid="order-submit-button"
            disabled={sending}
            className="mt-2 rounded-full bg-[#4285F4] hover:bg-[#2B6CDA] disabled:opacity-60 text-white font-semibold px-8 py-4 transition-colors duration-200"
          >
            {sending ? "Sending…" : "Send Enquiry"}
          </button>
        </form>
      </div>
    </section>
  );
}
