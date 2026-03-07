export function ServicesOfferingsSection() {
  return (
    <section className="mx-auto w-full max-w-[85rem] px-4 pb-14 sm:px-6 lg:px-8">
      <div className="grid gap-4 md:grid-cols-2">
        <article className="rounded-2xl border border-neutral-light bg-surface-card p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-heading">Export Supply (Africa to Global)</h2>
          <p className="mt-3 text-sm leading-6 text-foreground">
            Trade-ready supply for importers, distributors, wholesalers, and procurement teams with
            clear terms, structured documentation, and delivery coordination.
          </p>
        </article>
        <article className="rounded-2xl border border-neutral-light bg-surface-card p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-heading">Intra-Africa Trade (Africa to Africa)</h2>
          <p className="mt-3 text-sm leading-6 text-foreground">
            Support for regional distribution and cross-border movement with route-aware planning,
            dispatch coordination, and documentation alignment.
          </p>
        </article>
        <article className="rounded-2xl border border-neutral-light bg-surface-card p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-heading">Trade Desk &amp; Sourcing</h2>
          <p className="mt-3 text-sm leading-6 text-foreground">
            Supplier identification, shortlist development, sample coordination, price and quotation
            management, and shipment preparation guidance before execution.
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
  );
}
