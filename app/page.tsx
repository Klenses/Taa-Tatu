export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="h-[100dvh] px-4 sm:px-6 lg:px-8">
        <div className="relative mx-auto h-full max-w-[85rem] overflow-hidden rounded-2xl bg-[url('/hero_taatatu.png')] bg-cover bg-center bg-no-repeat">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/75 via-brand-navy/55 to-brand-navy/35" />
          <div className="relative mt-auto flex h-full flex-col justify-end">
            <div className="w-[88%] pb-6 ps-5 md:max-w-3xl md:pb-10 md:ps-10">
              <p className="hero-fade-up text-sm font-semibold uppercase tracking-[0.16em] text-on-navy/85">
                TaaTatu Hub Limited
              </p>
              <h1 className="hero-fade-up hero-fade-up-delay-1 mt-3 text-3xl font-semibold text-on-navy md:text-5xl lg:text-6xl">
                African FMCG Exporter for Structured Trade Execution
              </h1>
              <p className="hero-fade-up hero-fade-up-delay-2 mt-4 max-w-2xl text-base text-on-navy/90 md:text-xl">
                Export-ready beverages and long shelf-life FMCG delivered with disciplined trade
                coordination and reliable logistics execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[85rem] px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-heading sm:text-3xl">How We Execute Trade</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <article className="rounded-2xl border border-neutral-light bg-surface-card p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-heading">Sourcing Discipline</h3>
            <p className="mt-2 text-sm text-foreground">
              We verify supplier capability and align product specifications to buyer requirements
              before execution begins.
            </p>
          </article>
          <article className="rounded-2xl border border-neutral-light bg-surface-card p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-heading">Documentation Certainty</h3>
            <p className="mt-2 text-sm text-foreground">
              Trade documentation is coordinated upfront to reduce clearance risk and maintain
              shipment continuity.
            </p>
          </article>
          <article className="rounded-2xl border border-neutral-light bg-surface-card p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-heading">Shipment Control</h3>
            <p className="mt-2 text-sm text-foreground">
              We coordinate logistics milestones and status reporting so buyers have visibility
              from booking to delivery.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
