export default function LogisticsPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="mx-auto w-full max-w-[85rem] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-link">Logistics</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-heading sm:text-5xl">
          Logistics Coordination for Trade Continuity
        </h1>
        <p className="mt-5 max-w-3xl text-lg text-foreground">
          We coordinate shipment strategy based on cargo profile, lead-time targets, and
          destination-market constraints.
        </p>
      </section>

      <section className="mx-auto w-full max-w-[85rem] px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-neutral-light bg-surface-card p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-heading">Sea Freight (FCL / LCL)</h2>
            <p className="mt-3 text-sm leading-6 text-foreground">
              Flexible container options for volume-based planning, including full-container and
              shared-load configurations.
            </p>
          </article>
          <article className="rounded-2xl border border-neutral-light bg-surface-card p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-heading">Air Freight</h2>
            <p className="mt-3 text-sm leading-6 text-foreground">
              Priority routing for urgent or time-sensitive cargo where speed is the primary
              requirement.
            </p>
          </article>
          <article className="rounded-2xl border border-neutral-light bg-surface-card p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-heading">Consolidation</h2>
            <p className="mt-3 text-sm leading-6 text-foreground">
              Shipment consolidation support to improve freight efficiency across diverse SKUs and
              supplier sources.
            </p>
          </article>
          <article className="rounded-2xl border border-neutral-light bg-surface-card p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-heading">
              Shipment Tracking &amp; Coordination
            </h2>
            <p className="mt-3 text-sm leading-6 text-foreground">
              Structured status updates and milestone-based communication from booking through
              arrival.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
