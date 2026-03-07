export function AboutFocusSection() {
  return (
    <section className="mx-auto w-full max-w-[85rem] px-4 pb-20 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-semibold text-heading sm:text-3xl">Our Focus</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <article className="rounded-2xl border border-neutral-light bg-surface-card p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-heading">Export-ready products</h3>
          <p className="mt-2 text-sm text-foreground">
            Products that travel well and distribute well across global and regional channels.
          </p>
        </article>
        <article className="rounded-2xl border border-neutral-light bg-surface-card p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-heading">Clear documentation alignment</h3>
          <p className="mt-2 text-sm text-foreground">
            Shipment terms and document packs coordinated to reduce delays and clearance risk.
          </p>
        </article>
        <article className="rounded-2xl border border-neutral-light bg-surface-card p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-heading">Long-term buyer relationships</h3>
          <p className="mt-2 text-sm text-foreground">
            Relationships built on consistency in quality, timelines, and execution structure.
          </p>
        </article>
      </div>
    </section>
  );
}
