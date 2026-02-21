export default function LogisticsPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="mx-auto w-full max-w-[85rem] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-link">Logistics</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-heading sm:text-5xl">
          Shipment Coordination
        </h1>
        <p className="mt-5 max-w-3xl text-lg text-foreground">
          We coordinate shipments through trusted logistics partners with a focus on execution
          clarity and buyer planning reliability.
        </p>
      </section>

      <section className="mx-auto w-full max-w-[85rem] px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-neutral-light bg-surface-card p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-heading">Freight Modes</h2>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-foreground">
              <li>Sea freight: FCL and LCL</li>
              <li>Air freight for urgent or smaller-volume movements</li>
              <li>Consolidation planning for multi-SKU programs</li>
            </ul>
          </article>
          <article className="rounded-2xl border border-neutral-light bg-surface-card p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-heading">Execution Scope</h2>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-foreground">
              <li>Clear timelines and dispatch planning</li>
              <li>Order and production readiness follow-up</li>
              <li>Freight booking through trusted channels</li>
              <li>Tracking and milestone updates</li>
              <li>Delivery coordination support</li>
            </ul>
          </article>
        </div>
      </section>
    </main>
  );
}
