export default function QualityCompliancePage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="mx-auto w-full max-w-[85rem] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-link">
          Quality &amp; Compliance
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-heading sm:text-5xl">
          Structured Quality Controls for Export Reliability
        </h1>
      </section>

      <section className="mx-auto w-full max-w-[85rem] px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-neutral-light bg-surface-card p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-heading">Supplier Verification</h2>
            <p className="mt-3 text-sm leading-6 text-foreground">
              We confirm supplier capability against production consistency, specification accuracy,
              and commercial readiness before commitment.
            </p>
          </article>
          <article className="rounded-2xl border border-neutral-light bg-surface-card p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-heading">Packaging Standards</h2>
            <p className="mt-3 text-sm leading-6 text-foreground">
              Packaging requirements are aligned with transit conditions, handling expectations, and
              destination-market format rules.
            </p>
          </article>
          <article className="rounded-2xl border border-neutral-light bg-surface-card p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-heading">Documentation Coordination</h2>
            <p className="mt-3 text-sm leading-6 text-foreground">
              We coordinate key trade documentation to support smooth customs handling and reduce
              preventable delays.
            </p>
          </article>
          <article className="rounded-2xl border border-neutral-light bg-surface-card p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-heading">Batch Traceability</h2>
            <p className="mt-3 text-sm leading-6 text-foreground">
              Batch-level tracking references are maintained to strengthen shipment integrity and
              post-delivery accountability.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
