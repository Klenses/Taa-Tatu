export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="mx-auto w-full max-w-[85rem] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-link">Products</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-heading sm:text-5xl">
          Export-Ready Product Portfolio
        </h1>
        <p className="mt-5 max-w-3xl text-lg text-foreground">
          Our product categories are aligned for regional and international distribution with
          packaging, shelf-life, and documentation requirements considered from the start.
        </p>
      </section>

      <section className="mx-auto w-full max-w-[85rem] px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          <article className="rounded-2xl border border-neutral-light bg-surface-card p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-heading">Non-Alcoholic Beverages</h2>
            <ul className="mt-3 space-y-2 text-sm text-foreground">
              <li>Juices, flavored drinks, malt beverages, and soft drinks.</li>
              <li>Export-format packaging and pallet configuration support.</li>
              <li>Batch-managed dispatch aligned to destination needs.</li>
            </ul>
          </article>
          <article className="rounded-2xl border border-neutral-light bg-surface-card p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-heading">Long Shelf-Life FMCG</h2>
            <ul className="mt-3 space-y-2 text-sm text-foreground">
              <li>Shelf-stable packaged products for predictable inventory cycles.</li>
              <li>SKU selection designed for multi-market resilience.</li>
              <li>Ready for consolidated export loads and recurring supply.</li>
            </ul>
          </article>
          <article className="rounded-2xl border border-neutral-light bg-surface-card p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-heading">Private Label</h2>
            <ul className="mt-3 space-y-2 text-sm text-foreground">
              <li>Private label support where viable and commercially aligned.</li>
              <li>Packaging and specification coordination per buyer brief.</li>
              <li>Structured rollout process from concept to shipment.</li>
            </ul>
          </article>
        </div>
      </section>
    </main>
  );
}
