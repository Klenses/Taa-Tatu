import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request Quote for African Exports",
  description:
    "Submit an RFQ for African beverages and FMCG with SKUs, volumes, Incoterms, compliance requirements, and target delivery windows.",
};

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
      <section className="mx-auto w-full max-w-[85rem] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-link">RFQ</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-heading sm:text-5xl">
          Request a Quote
        </h1>
        <p className="mt-5 max-w-3xl text-lg text-foreground">
          Share your destination market, required SKUs, volumes, and preferred Incoterms. We
          respond with availability, pricing, lead times, and shipment options.
        </p>
      </section>

      <section className="mx-auto w-full max-w-[85rem] px-4 pb-14 sm:px-6 lg:px-8">
        <form className="rounded-2xl border border-neutral-light bg-surface-card p-6 shadow-sm sm:p-8">
          <div className="grid gap-4 md:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm font-medium text-heading">
              Destination country, city, or port
              <input
                name="destination"
                type="text"
                required
                className="rounded-lg border border-neutral-light bg-white px-3 py-2 text-foreground outline-none ring-brand-teal/40 focus:ring-2"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium text-heading">
              Product category
              <select
                name="productCategory"
                required
                className="rounded-lg border border-neutral-light bg-white px-3 py-2 text-foreground outline-none ring-brand-teal/40 focus:ring-2"
              >
                <option value="">Select a category</option>
                <option value="beverages">Beverages</option>
                <option value="fmcg">FMCG</option>
                <option value="both">Both</option>
              </select>
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium text-heading">
              SKUs and pack sizes
              <input
                name="skusPackSizes"
                type="text"
                required
                className="rounded-lg border border-neutral-light bg-white px-3 py-2 text-foreground outline-none ring-brand-teal/40 focus:ring-2"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium text-heading">
              Quantity and frequency
              <input
                name="quantityFrequency"
                type="text"
                required
                className="rounded-lg border border-neutral-light bg-white px-3 py-2 text-foreground outline-none ring-brand-teal/40 focus:ring-2"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium text-heading">
              Preferred Incoterms
              <select
                name="incoterm"
                required
                className="rounded-lg border border-neutral-light bg-white px-3 py-2 text-foreground outline-none ring-brand-teal/40 focus:ring-2"
              >
                <option value="">Select incoterm</option>
                <option value="EXW">EXW</option>
                <option value="FCA">FCA</option>
                <option value="FOB">FOB</option>
                <option value="CFR">CFR</option>
                <option value="CIF">CIF</option>
                <option value="DAP">DAP</option>
              </select>
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium text-heading">
              Target delivery window
              <input
                name="deliveryWindow"
                type="text"
                required
                className="rounded-lg border border-neutral-light bg-white px-3 py-2 text-foreground outline-none ring-brand-teal/40 focus:ring-2"
              />
            </label>
          </div>

          <label className="mt-4 flex flex-col gap-2 text-sm font-medium text-heading">
            Label language and compliance requirements
            <textarea
              name="labelCompliance"
              rows={4}
              className="rounded-lg border border-neutral-light bg-white px-3 py-2 text-foreground outline-none ring-brand-teal/40 focus:ring-2"
            />
          </label>

          <label className="mt-4 flex flex-col gap-2 text-sm font-medium text-heading">
            Notes or attachments
            <textarea
              name="notesAttachments"
              rows={4}
              className="rounded-lg border border-neutral-light bg-white px-3 py-2 text-foreground outline-none ring-brand-teal/40 focus:ring-2"
            />
          </label>

          <button
            type="submit"
            className="mt-6 inline-flex items-center rounded-lg bg-button-primary-bg px-5 py-3 text-sm font-semibold text-button-primary-fg transition-colors hover:bg-button-primary-hover-bg"
          >
            Submit RFQ
          </button>
        </form>
      </section>

      <section className="mx-auto w-full max-w-[85rem] px-4 pb-20 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-heading sm:text-3xl">RFQ FAQ</h2>
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
