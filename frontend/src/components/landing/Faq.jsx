import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQS } from "./data";

export default function Faq() {
  return (
    <section id="faq" data-testid="faq-section" className="py-24 lg:py-32 bg-[#0B0C10] border-y border-[#D4AF37]/10">
      <div className="max-w-3xl mx-auto px-6">
        <p data-testid="faq-overline" className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37] mb-4">Chapter 09 · FAQ</p>
        <h2 data-testid="faq-heading" className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-12 text-[#F8F9FA]">
          Got questions? <span className="gold-text">Good.</span>
        </h2>
        <Accordion type="single" collapsible className="w-full" data-testid="faq-accordion">
          {FAQS.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} data-testid={`faq-item-${i}`} className="border-[#D4AF37]/15">
              <AccordionTrigger data-testid={`faq-trigger-${i}`} className="text-left font-display font-bold text-base tracking-tight text-[#F8F9FA] hover:text-[#D4AF37] hover:no-underline py-5">
                {f.q}
              </AccordionTrigger>
              <AccordionContent data-testid={`faq-content-${i}`} className="text-sm text-[#94A3B8] leading-relaxed">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
