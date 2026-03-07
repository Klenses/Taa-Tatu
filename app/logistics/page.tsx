import type { Metadata } from "next";
import { LogisticsFaqSection } from "@/components/logistics/faq-section";
import { LogisticsHeroSection } from "@/components/logistics/hero-section";
import { LogisticsScopeSection } from "@/components/logistics/scope-section";

const faqItems = [
  {
    question: "Which freight modes do you support?",
    answer:
      "We support sea freight via FCL and LCL, air freight for urgent movements, and consolidation programs for multi-SKU shipments.",
  },
  {
    question: "Do you provide shipment tracking updates?",
    answer:
      "Yes. Shipment execution includes milestone updates to support receiving planning, stock movement, and trade communication cadence.",
  },
  {
    question: "Can you coordinate consolidated shipments?",
    answer:
      "Yes. We support consolidation planning for multi-supplier and multi-SKU loads to improve freight efficiency and container economics.",
  },
];

export const metadata: Metadata = {
  title: "African Trade Logistics",
  description:
    "Sea freight, air freight, and FMCG consolidation support with milestone tracking for African export and intra-African trade shipments.",
};

export default function LogisticsPage() {
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
      <LogisticsHeroSection />
      <LogisticsScopeSection />
      <LogisticsFaqSection items={faqItems} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </main>
  );
}
