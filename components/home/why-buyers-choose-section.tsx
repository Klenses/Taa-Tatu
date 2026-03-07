export function HomeWhyBuyersChooseSection() {
  return (
    <section className="mx-auto w-full max-w-[85rem] px-4 pb-12 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-semibold text-heading sm:text-3xl">Why Buyers Choose TaaTatu Hub</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <article className="rounded-2xl border border-neutral-light bg-surface-card p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-heading">Trade-ready execution</h3>
          <p className="mt-2 text-sm text-foreground">
            Clear specs, disciplined documentation, and structured shipment coordination.
          </p>
        </article>
        <article className="rounded-2xl border border-neutral-light bg-surface-card p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-heading">Buyer risk reduction</h3>
          <p className="mt-2 text-sm text-foreground">
            We focus on consistency in quality, packing standards, and delivery timelines.
          </p>
        </article>
        <article className="rounded-2xl border border-neutral-light bg-surface-card p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-heading">Consolidation capability</h3>
          <p className="mt-2 text-sm text-foreground">
            Multi-SKU planning to support efficient purchasing and container economics.
          </p>
        </article>
        <article className="rounded-2xl border border-neutral-light bg-surface-card p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-heading">Commercial flexibility</h3>
          <p className="mt-2 text-sm text-foreground">
            Standard trade terms and payment structures aligned to buyer requirements.
          </p>
        </article>
      </div>
    </section>
  );
}
