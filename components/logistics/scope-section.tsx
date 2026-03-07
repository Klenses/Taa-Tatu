export function LogisticsScopeSection() {
  return (
    <section className="mx-auto w-full max-w-[85rem] px-4 pb-14 sm:px-6 lg:px-8">
      <div className="grid gap-4 md:grid-cols-2">
        <article className="rounded-2xl border border-neutral-light bg-surface-card p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-heading">Freight Modes Supported</h2>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-foreground">
            <li>Sea freight: FCL and LCL shipment programs</li>
            <li>Air freight: urgent or smaller-volume dispatches</li>
            <li>Consolidation: multi-SKU and multi-supplier shipment building</li>
          </ul>
        </article>
        <article className="rounded-2xl border border-neutral-light bg-surface-card p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-heading">Shipment Execution Scope</h2>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-foreground">
            <li>Order confirmation and production readiness follow-up</li>
            <li>Packaging integrity and carton marking checks</li>
            <li>Consolidation planning and stuffing coordination</li>
            <li>Freight booking and documentation dispatch</li>
            <li>Tracking updates and delivery coordination support</li>
          </ul>
        </article>
      </div>
    </section>
  );
}
