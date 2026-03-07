import type { Metadata } from "next";
import { ServicesFaqSection } from "@/components/services/faq-section";
import { ServicesHeroSection } from "@/components/services/hero-section";
import { ServicesOfferingsSection } from "@/components/services/offerings-section";

const faqItems = [
  {
    question: "Do you support private label exports?",
    answer:
      "Yes. Private label and OEM programs are supported for qualified buyers and committed volumes, with packaging and specification alignment before shipment.",
  },
  {
    question: "Which Incoterms do you work with?",
    answer:
      "We support EXW, FCA, FOB, CFR, CIF, and DAP based on shipment structure and buyer requirements.",
  },
  {
    question: "Do you consolidate multi-SKU shipments?",
    answer:
      "Yes. Consolidation support is available for multi-SKU and multi-supplier shipment planning to improve freight efficiency and reduce procurement fragmentation.",
  },
];

export const metadata: Metadata = {
  title: "Export Supply Services Africa",
  description:
    "Export supply services in Africa including trade desk support, sourcing, and FMCG consolidation for importers and distributors.",
};

export default function ServicesPage() {
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
      <ServicesHeroSection />
      <ServicesOfferingsSection />
      <ServicesFaqSection items={faqItems} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </main>
  );
}
