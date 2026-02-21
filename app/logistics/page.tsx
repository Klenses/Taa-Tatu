import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "African Trade Logistics",
  description:
    "Sea freight, air freight, and FMCG consolidation support with milestone tracking for African export and intra-African trade shipments.",
};

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
      <section className="mx-auto w-full max-w-[85rem] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-link">Logistics</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-heading sm:text-5xl">
          African Trade Logistics
        </h1>
        <p className="mt-5 max-w-3xl text-lg text-foreground">
          We coordinate shipments through trusted logistics channels with a focus on freight
          clarity, documentation accuracy, and operational visibility for professional buyers.
        </p>
      </section>

      <section className="mx-auto w-full max-w-[85rem] px-4 pb-14 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-neutral-light bg-surface-card p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-heading">Freight Modes Supported</h2>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-foreground">
              <li>Sea freight: FCL and LCL shipment programs</li>
              <li>Air freight: urgent or smaller-volume dispatches</li>
              <li>Consolidation: multi-SKU and multi-supplier shipment building</li>
            </ul>
          </article>
          <article className="rounded-2xl border border-neutral-light bg-surface-card p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-heading">Shipment Execution Scope</h2>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-foreground">
              <li>Order confirmation and production readiness follow-up</li>
              <li>Packaging integrity and carton marking checks</li>
              <li>Consolidation planning and stuffing coordination</li>
              <li>Freight booking and documentation dispatch</li>
              <li>Tracking updates and delivery coordination support</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[85rem] px-4 pb-20 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-heading sm:text-3xl">Logistics FAQ</h2>
        <div className="mt-4 space-y-3">
          {faqItems.map((item) => (
            <article
              key={item.question}
              className="rounded-xl border border-neutral-light bg-surface-card px-4 py-3"
            >
              <h3 className="text-sm font-semibold text-heading">{item.question}</h3>
              <p className="mt-1 text-sm text-foreground">{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </main>
  );
}
