import Link from "next/link";

export function ProductsPrivateLabelSection() {
  return (
    <section className="mx-auto w-full max-w-[85rem] px-4 pb-20 sm:px-6 lg:px-8">
      <article className="rounded-2xl border border-neutral-light bg-surface-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-heading">Private Label (Where Applicable)</h2>
        <p className="mt-3 text-sm leading-6 text-foreground">
          Private label or OEM programs are supported for qualified buyers and committed volumes,
          with specification alignment, packaging coordination, and rollout planning based on market
          requirements.
        </p>
      </article>

      <Link
        href="/rfq"
        className="mt-8 inline-flex items-center rounded-lg bg-button-primary-bg px-5 py-3 text-sm font-semibold text-button-primary-fg transition-colors hover:bg-button-primary-hover-bg"
      >
        Request Availability List
      </Link>
    </section>
  );
}
