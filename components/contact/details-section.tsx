export function ContactDetailsSection() {
  return (
    <section className="mx-auto w-full max-w-[85rem] px-4 pb-20 sm:px-6 lg:px-8">
      <div className="grid gap-4 md:grid-cols-2">
        <article className="rounded-2xl border border-neutral-light bg-surface-card p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-heading">Company Details</h2>
          <div className="mt-4 space-y-2 text-sm text-foreground">
            <p>
              <span className="font-semibold text-heading">Company Name:</span> TaaTatu Hub Limited
            </p>
            <p>
              <span className="font-semibold text-heading">Business Type:</span> Import and Export |
              Trade and Supply | Sourcing and Consolidation
            </p>
            <p>
              <span className="font-semibold text-heading">Focus:</span> Non-alcoholic beverages and
              long shelf-life FMCG from Africa
            </p>
            <p>
              <span className="font-semibold text-heading">Markets Served:</span> Global import
              markets and intra-African trade corridors
            </p>
          </div>
        </article>

        <article className="rounded-2xl border border-neutral-light bg-surface-card p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-heading">Direct Contact Information</h2>
          <div className="mt-4 space-y-2 text-sm text-foreground">
            <p>
              <span className="font-semibold text-heading">Head Office:</span> [City, Country]
            </p>
            <p>
              <span className="font-semibold text-heading">Phone/WhatsApp:</span> [+254 ...]
            </p>
            <p>
              <span className="font-semibold text-heading">Email:</span> [info@...]
            </p>
            <p>
              <span className="font-semibold text-heading">Website:</span> [www....]
            </p>
            <p>
              <span className="font-semibold text-heading">LinkedIn:</span> [link]
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
