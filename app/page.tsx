import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="h-[100dvh] px-4 sm:px-6 lg:px-8">
        <div className="relative mx-auto h-full max-w-[85rem] overflow-hidden rounded-2xl bg-[url('/hero_taatatu.png')] bg-cover bg-center bg-no-repeat">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/75 via-brand-navy/55 to-brand-navy/35" />
          <div className="relative mt-auto flex h-full flex-col justify-end">
            <div className="w-[90%] pb-6 ps-5 md:max-w-4xl md:pb-10 md:ps-10">
              <p className="hero-fade-up text-sm font-semibold uppercase tracking-[0.16em] text-on-navy/85">
                TaaTatu Hub Limited
              </p>
              <h1 className="hero-fade-up hero-fade-up-delay-1 mt-3 text-3xl font-semibold text-on-navy md:text-5xl lg:text-6xl">
                Export-ready African products. Delivered with trade discipline.
              </h1>
              <p className="hero-fade-up hero-fade-up-delay-2 mt-4 max-w-3xl text-base text-on-navy/90 md:text-xl">
                TaaTatu Hub Limited is a trade company connecting Africa&apos;s leading
                non-alcoholic beverages and long shelf-life FMCG to global importers and
                intra-African buyers through structured sourcing, documentation coordination, and
                shipment execution.
              </p>
              <div className="hero-fade-up hero-fade-up-delay-2 mt-6 flex flex-wrap gap-3">
                <Link
                  href="/rfq"
                  className="inline-flex items-center rounded-lg bg-hero-cta-primary px-5 py-3 text-sm font-semibold text-on-teal transition-colors hover:bg-link"
                >
                  Request a Quote
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center rounded-lg bg-hero-cta-secondary px-5 py-3 text-sm font-semibold text-on-orange transition-colors hover:bg-accent-yellow"
                >
                  View Categories
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[85rem] px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-heading sm:text-3xl">What We Supply</h2>
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

      <section className="mx-auto w-full max-w-[85rem] px-4 pb-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-heading sm:text-3xl">What We Do</h2>
        <p className="mt-3 max-w-4xl text-sm leading-6 text-foreground">
          We operate as a trade and supply hub built for professional buyers who require
          consistency and clarity.
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

      <section className="mx-auto w-full max-w-[85rem] px-4 pb-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-heading sm:text-3xl">
          Why Buyers Choose TaaTatu Hub
        </h2>
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
    </main>
  );
}
