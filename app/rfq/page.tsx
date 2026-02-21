export default function RfqPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="mx-auto w-full max-w-[85rem] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-link">RFQ</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-heading sm:text-5xl">
          Request a Quote
        </h1>
        <p className="mt-5 max-w-3xl text-lg text-foreground">
          Share your destination market, required SKUs, volumes, and preferred Incoterms. We will
          respond with availability, pricing, lead times, and shipment options.
        </p>
      </section>

      <section className="mx-auto w-full max-w-[85rem] px-4 pb-20 sm:px-6 lg:px-8">
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
    </main>
  );
}
