import type { Metadata } from "next";
import { RfqFaqSection } from "@/components/rfq/faq-section";
import { RfqFormSection } from "@/components/rfq/form-section";
import { RfqHeroSection } from "@/components/rfq/hero-section";

const faqItems = [
  {
    question: "Which Incoterms do you support?",
    answer: "We support EXW, FCA, FOB, CFR, CIF, and DAP based on shipment planning.",
  },
  {
    question: "What export documents are provided?",
    answer:
      "Typical documentation includes commercial invoice, packing list, certificate of origin where required, and bill of lading or airway bill.",
  },
  {
    question: "Do you support multi-SKU consolidated RFQs?",
    answer:
      "Yes. Multi-SKU and consolidated shipment requests are supported for buyers building broader import programs.",
  },
];

export const metadata: Metadata = {
  title: "Request Quote for African Exports",
  description:
    "Submit an RFQ for African beverages and FMCG with SKUs, volumes, Incoterms, compliance requirements, and target delivery windows.",
};

export default function RfqPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <main className="min-h-screen bg-background">
      <RfqHeroSection />
      <RfqFormSection />
      <RfqFaqSection items={faqItems} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </main>
  );
}
