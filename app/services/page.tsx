import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Export Supply Services Africa",
  description:
    "Export supply services in Africa including trade desk support, sourcing, and FMCG consolidation for importers and distributors.",
};

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
      <section className="mx-auto w-full max-w-[85rem] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-link">Services</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-heading sm:text-5xl">
          Export Supply Services Africa
        </h1>
        <p className="mt-5 max-w-3xl text-lg text-foreground">
          We operate as a trade and supply hub for professional buyers who need commercial clarity,
          disciplined execution, and consistent shipment outcomes.
        </p>
      </section>

      <section className="mx-auto w-full max-w-[85rem] px-4 pb-14 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-neutral-light bg-surface-card p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-heading">Export Supply (Africa to Global)</h2>
            <p className="mt-3 text-sm leading-6 text-foreground">
              Trade-ready supply for importers, distributors, wholesalers, and procurement teams
              with clear terms, structured documentation, and delivery coordination.
            </p>
          </article>
          <article className="rounded-2xl border border-neutral-light bg-surface-card p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-heading">
              Intra-Africa Trade (Africa to Africa)
            </h2>
            <p className="mt-3 text-sm leading-6 text-foreground">
              Support for regional distribution and cross-border movement with route-aware planning,
              dispatch coordination, and documentation alignment.
            </p>
          </article>
          <article className="rounded-2xl border border-neutral-light bg-surface-card p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-heading">Trade Desk &amp; Sourcing</h2>
            <p className="mt-3 text-sm leading-6 text-foreground">
              Supplier identification, shortlist development, sample coordination, price and
              quotation management, and shipment preparation guidance before execution.
            </p>
          </article>
          <article className="rounded-2xl border border-neutral-light bg-surface-card p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-heading">Consolidation Support</h2>
            <p className="mt-3 text-sm leading-6 text-foreground">
              FMCG export consolidation and multi-SKU planning to improve container economics while
              maintaining shipment controls and visibility.
            </p>
          </article>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[85rem] px-4 pb-20 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-heading sm:text-3xl">Services FAQ</h2>
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
