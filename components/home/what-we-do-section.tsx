export function HomeWhatWeDoSection() {
  return (
    <section className="mx-auto w-full max-w-[85rem] px-4 pb-12 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-semibold text-heading sm:text-3xl">What We Do</h2>
      <p className="mt-3 max-w-4xl text-sm leading-6 text-foreground">
        We operate as a trade and supply hub built for professional buyers who require consistency
        and clarity.
      </p>
      <ul className="mt-4 grid gap-3 text-sm text-foreground md:grid-cols-2">
        <li className="rounded-xl border border-neutral-light bg-surface-card px-4 py-3">
          Supplier sourcing and qualification
        </li>
        <li className="rounded-xl border border-neutral-light bg-surface-card px-4 py-3">
          Product specification and packaging alignment
        </li>
        <li className="rounded-xl border border-neutral-light bg-surface-card px-4 py-3">
          Sample coordination on request
        </li>
        <li className="rounded-xl border border-neutral-light bg-surface-card px-4 py-3">
          Export documentation and Incoterms alignment
        </li>
        <li className="rounded-xl border border-neutral-light bg-surface-card px-4 py-3 md:col-span-2">
          Freight and dispatch coordination through trusted logistics partners with shipment
          milestone updates
        </li>
      </ul>
    </section>
  );
}
