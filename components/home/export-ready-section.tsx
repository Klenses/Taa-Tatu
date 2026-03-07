export function HomeExportReadySection() {
  return (
    <section className="mx-auto w-full max-w-[85rem] px-4 py-14 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-semibold text-heading sm:text-3xl">
        Export-Ready African Product Supply
      </h2>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <article className="rounded-2xl border border-neutral-light bg-surface-card p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-heading">Non-Alcoholic Beverages</h3>
          <p className="mt-2 text-sm text-foreground">
            RTD beverages, juice blends, concentrates, powdered mixes, and functional beverages.
          </p>
        </article>
        <article className="rounded-2xl border border-neutral-light bg-surface-card p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-heading">Long Shelf-Life FMCG &amp; Foods</h3>
          <p className="mt-2 text-sm text-foreground">
            Dry goods, grains, pulses, spices, sauces, canned or processed items, snacks, and
            staples.
          </p>
        </article>
        <article className="rounded-2xl border border-neutral-light bg-surface-card p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-heading">Intra-Africa Trade Supply</h3>
          <p className="mt-2 text-sm text-foreground">
            Reliable supply for regional distributors and cross-border programs.
          </p>
        </article>
      </div>
    </section>
  );
}
