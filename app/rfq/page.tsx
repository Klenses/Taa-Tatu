export default function RfqPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="mx-auto w-full max-w-[85rem] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-link">RFQ</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-heading sm:text-5xl">
          Request a Quote
        </h1>
        <p className="mt-5 max-w-3xl text-lg text-foreground">
          Submit a structured trade request so our team can prepare a clear and actionable offer.
        </p>
      </section>

      <section className="mx-auto w-full max-w-[85rem] px-4 pb-20 sm:px-6 lg:px-8">
        <form className="rounded-2xl border border-neutral-light bg-surface-card p-6 shadow-sm sm:p-8">
          <div className="grid gap-4 md:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm font-medium text-heading">
              Company Name
              <input
                name="companyName"
                type="text"
                required
                className="rounded-lg border border-neutral-light bg-white px-3 py-2 text-foreground outline-none ring-brand-teal/40 focus:ring-2"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium text-heading">
              Contact Person
              <input
                name="contactPerson"
                type="text"
                required
                className="rounded-lg border border-neutral-light bg-white px-3 py-2 text-foreground outline-none ring-brand-teal/40 focus:ring-2"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium text-heading">
              Email
              <input
                name="email"
                type="email"
                required
                className="rounded-lg border border-neutral-light bg-white px-3 py-2 text-foreground outline-none ring-brand-teal/40 focus:ring-2"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium text-heading">
              Phone
              <input
                name="phone"
                type="tel"
                className="rounded-lg border border-neutral-light bg-white px-3 py-2 text-foreground outline-none ring-brand-teal/40 focus:ring-2"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium text-heading">
              Destination Country
              <input
                name="destinationCountry"
                type="text"
                required
                className="rounded-lg border border-neutral-light bg-white px-3 py-2 text-foreground outline-none ring-brand-teal/40 focus:ring-2"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium text-heading">
              Product Category
              <select
                name="productCategory"
                required
                className="rounded-lg border border-neutral-light bg-white px-3 py-2 text-foreground outline-none ring-brand-teal/40 focus:ring-2"
              >
                <option value="">Select a category</option>
                <option value="non-alcoholic-beverages">Non-Alcoholic Beverages</option>
                <option value="long-shelf-life-fmcg">Long Shelf-Life FMCG</option>
                <option value="private-label">Private Label</option>
              </select>
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium text-heading">
              Incoterm
              <select
                name="incoterm"
                className="rounded-lg border border-neutral-light bg-white px-3 py-2 text-foreground outline-none ring-brand-teal/40 focus:ring-2"
              >
                <option value="">Select incoterm</option>
                <option value="EXW">EXW</option>
                <option value="FOB">FOB</option>
                <option value="CFR">CFR</option>
                <option value="CIF">CIF</option>
                <option value="DAP">DAP</option>
              </select>
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium text-heading">
              Estimated Volume
              <input
                name="volume"
                type="text"
                placeholder="e.g. 1 x 20ft container monthly"
                className="rounded-lg border border-neutral-light bg-white px-3 py-2 text-foreground outline-none ring-brand-teal/40 focus:ring-2"
              />
            </label>
          </div>

          <label className="mt-4 flex flex-col gap-2 text-sm font-medium text-heading">
            Packaging / Specification Requirements
            <textarea
              name="packagingRequirements"
              rows={4}
              className="rounded-lg border border-neutral-light bg-white px-3 py-2 text-foreground outline-none ring-brand-teal/40 focus:ring-2"
            />
          </label>

          <label className="mt-4 flex flex-col gap-2 text-sm font-medium text-heading">
            Additional Notes
            <textarea
              name="notes"
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
