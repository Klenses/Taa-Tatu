import Link from "next/link";

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="mx-auto w-full max-w-[85rem] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-link">Products</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-heading sm:text-5xl">
          Categories
        </h1>
        <p className="mt-5 max-w-3xl text-lg text-foreground">
          We focus on categories that perform strongly in export and distribution models with
          durable shelf life, steady demand, and stable handling in transit.
        </p>
      </section>

      <section className="mx-auto w-full max-w-[85rem] px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          <article className="rounded-2xl border border-neutral-light bg-surface-card p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-heading">Non-Alcoholic Beverages</h2>
            <p className="mt-3 text-sm leading-6 text-foreground">
              Export-ready beverage options across multiple formats, built for distribution and
              repeat demand.
            </p>
          </article>
          <article className="rounded-2xl border border-neutral-light bg-surface-card p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-heading">
              Long Shelf-Life FMCG &amp; Foods
            </h2>
            <p className="mt-3 text-sm leading-6 text-foreground">
              Shelf-stable items suited for modern trade, wholesale, and regional distribution.
            </p>
          </article>
          <article className="rounded-2xl border border-neutral-light bg-surface-card p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-heading">Private Label (Where Applicable)</h2>
            <p className="mt-3 text-sm leading-6 text-foreground">
              Private label or OEM routes supported for qualified buyers and committed volumes.
            </p>
          </article>
        </div>

        <Link
          href="/rfq"
          className="mt-8 inline-flex items-center rounded-lg bg-button-primary-bg px-5 py-3 text-sm font-semibold text-button-primary-fg transition-colors hover:bg-button-primary-hover-bg"
        >
          Request Availability List
        </Link>
      </section>
    </main>
  );
}
