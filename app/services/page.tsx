export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="mx-auto w-full max-w-[85rem] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-link">Services</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-heading sm:text-5xl">
          What We Do
        </h1>
      </section>

      <section className="mx-auto w-full max-w-[85rem] px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-neutral-light bg-surface-card p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-heading">Export Supply (Africa to Global)</h2>
            <p className="mt-3 text-sm leading-6 text-foreground">
              Trade-ready supply for importers and distributors, structured around clear terms,
              documentation, and coordinated delivery.
            </p>
          </article>
          <article className="rounded-2xl border border-neutral-light bg-surface-card p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-heading">
              Intra-Africa Trade (Africa to Africa)
            </h2>
            <p className="mt-3 text-sm leading-6 text-foreground">
              Support for regional distribution and cross-border supply programs, aligned to buyer
              routes and timelines.
            </p>
          </article>
          <article className="rounded-2xl border border-neutral-light bg-surface-card p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-heading">Sourcing &amp; Trade Desk</h2>
            <p className="mt-3 text-sm leading-6 text-foreground">
              Supplier shortlisting, sample coordination, specification alignment, and commercial
              clarity before shipment.
            </p>
          </article>
          <article className="rounded-2xl border border-neutral-light bg-surface-card p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-heading">Consolidation Support</h2>
            <p className="mt-3 text-sm leading-6 text-foreground">
              Multi-SKU shipment planning to simplify procurement and improve shipping efficiency.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
