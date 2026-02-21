export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="mx-auto w-full max-w-[85rem] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-link">About</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-heading sm:text-5xl">
          TaaTatu Hub Limited
        </h1>
        <p className="mt-5 max-w-3xl text-lg text-foreground">
          We are an African export partner focused on FMCG distribution with operational
          discipline, predictable delivery, and trade certainty at every stage of execution.
        </p>
      </section>

      <section className="mx-auto w-full max-w-[85rem] px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-neutral-light bg-surface-card p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-heading">How We Operate</h2>
            <p className="mt-3 text-sm leading-6 text-foreground">
              We run structured workflows across supplier selection, compliance preparation,
              logistics coordination, and buyer communication. Every shipment follows a documented
              path with defined controls.
            </p>
          </article>
          <article className="rounded-2xl border border-neutral-light bg-surface-card p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-heading">Export Philosophy</h2>
            <p className="mt-3 text-sm leading-6 text-foreground">
              Our philosophy is simple: disciplined decisions create reliable outcomes. We focus on
              transparency, precision, and execution certainty for long-term trade relationships.
            </p>
          </article>
          <article className="rounded-2xl border border-neutral-light bg-surface-card p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-heading">Focus on Discipline</h2>
            <p className="mt-3 text-sm leading-6 text-foreground">
              We standardize key controls before orders are confirmed to reduce rework and prevent
              avoidable shipment risk.
            </p>
          </article>
          <article className="rounded-2xl border border-neutral-light bg-surface-card p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-heading">Focus on Certainty</h2>
            <p className="mt-3 text-sm leading-6 text-foreground">
              Buyers receive clear commitments, milestone communication, and traceable execution
              from sourcing through final delivery.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
