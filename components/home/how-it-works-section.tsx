import Link from "next/link";

export function HomeHowItWorksSection() {
  return (
    <section className="mx-auto w-full max-w-[85rem] px-4 pb-20 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-semibold text-heading sm:text-3xl">How It Works</h2>
      <ol className="mt-4 space-y-3 text-sm text-foreground">
        <li className="rounded-xl border border-neutral-light bg-surface-card px-4 py-3">
          1. Send an RFQ: market, SKUs, volumes, Incoterms.
        </li>
        <li className="rounded-xl border border-neutral-light bg-surface-card px-4 py-3">
          2. Receive an offer: pricing, lead time, packing specs.
        </li>
        <li className="rounded-xl border border-neutral-light bg-surface-card px-4 py-3">
          3. Confirm specifications and samples if needed.
        </li>
        <li className="rounded-xl border border-neutral-light bg-surface-card px-4 py-3">
          4. Execute order: production readiness and packing alignment.
        </li>
        <li className="rounded-xl border border-neutral-light bg-surface-card px-4 py-3">
          5. Ship and document: dispatch, tracking, document pack.
        </li>
      </ol>
      <Link
        href="/rfq"
        className="mt-6 inline-flex items-center rounded-lg bg-button-primary-bg px-5 py-3 text-sm font-semibold text-button-primary-fg transition-colors hover:bg-button-primary-hover-bg"
      >
        Start an RFQ
      </Link>
    </section>
  );
}
