import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQS } from "./data";

export default function Faq() {
  return (
    <section id="faq" data-testid="faq-section" className="py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <p data-testid="faq-overline" className="text-xs font-semibold uppercase tracking-[0.2em] text-[#4285F4] mb-4">FAQ</p>
        <h2 data-testid="faq-heading" className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-12">
          Questions, answered.
        </h2>
        <Accordion type="single" collapsible className="w-full" data-testid="faq-accordion">
          {FAQS.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} data-testid={`faq-item-${i}`} className="border-[#E5E5E5]">
              <AccordionTrigger data-testid={`faq-trigger-${i}`} className="text-left font-display font-bold text-base tracking-tight hover:text-[#4285F4] hover:no-underline py-5">
                {f.q}
              </AccordionTrigger>
              <AccordionContent data-testid={`faq-content-${i}`} className="text-sm text-[#525252] leading-relaxed">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
