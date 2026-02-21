export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="mx-auto w-full max-w-[85rem] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-link">Services</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-heading sm:text-5xl">
          Trade Services Built for Execution
        </h1>
        <p className="mt-5 max-w-3xl text-lg text-foreground">
          We support buyers with practical, execution-focused services across sourcing, trade, and
          shipment coordination.
        </p>
      </section>

      <section className="mx-auto w-full max-w-[85rem] px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-neutral-light bg-surface-card p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-heading">Export Supply</h2>
            <p className="mt-3 text-sm leading-6 text-foreground">
              End-to-end export supply planning for approved FMCG categories with documented order
              and shipment controls.
            </p>
          </article>
          <article className="rounded-2xl border border-neutral-light bg-surface-card p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-heading">Intra-African Trade</h2>
            <p className="mt-3 text-sm leading-6 text-foreground">
              Structured support for regional trade corridors, with practical coordination across
              suppliers, carriers, and buyer teams.
            </p>
          </article>
          <article className="rounded-2xl border border-neutral-light bg-surface-card p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-heading">Trade Desk &amp; Sourcing</h2>
            <p className="mt-3 text-sm leading-6 text-foreground">
              Market-oriented sourcing support with product matching, supplier checks, and
              execution planning for commercial readiness.
            </p>
          </article>
          <article className="rounded-2xl border border-neutral-light bg-surface-card p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-heading">Consolidation Support</h2>
            <p className="mt-3 text-sm leading-6 text-foreground">
              Multi-SKU and multi-supplier consolidation planning to optimize freight efficiency
              and reduce operational fragmentation.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
