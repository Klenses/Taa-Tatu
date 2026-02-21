import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "African Sourcing Hub",
  description:
    "TaaTatu Hub is an African export company and sourcing hub built for certainty in supply, documentation, timelines, and execution.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="mx-auto w-full max-w-[85rem] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-link">About</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-heading sm:text-5xl">
          Who We Are
        </h1>
        <p className="mt-5 max-w-4xl text-lg text-foreground">
          TaaTatu Hub Limited is built on a simple principle: buyers return when supply is
          consistent and execution is disciplined. We connect qualified African producers to
          importers and distributors who value predictable performance, commercially and
          operationally.
        </p>
        <p className="mt-4 max-w-4xl text-sm leading-6 text-foreground">
          As an African export company and sourcing hub, we run practical trade workflows covering
          Incoterms alignment, freight consolidation, certificate of origin coordination, and
          export documentation accuracy.
        </p>
        <p className="mt-3 max-w-4xl text-sm leading-6 text-foreground">
          Africa to the World. Africa to Africa. Export-ready supply, delivered with discipline.
        </p>
      </section>

      <section className="mx-auto w-full max-w-[85rem] px-4 pb-20 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-heading sm:text-3xl">Our Focus</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <article className="rounded-2xl border border-neutral-light bg-surface-card p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-heading">Export-ready products</h3>
            <p className="mt-2 text-sm text-foreground">
              Products that travel well and distribute well across global and regional channels.
            </p>
          </article>
          <article className="rounded-2xl border border-neutral-light bg-surface-card p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-heading">Clear documentation alignment</h3>
            <p className="mt-2 text-sm text-foreground">
              Shipment terms and document packs coordinated to reduce delays and clearance risk.
            </p>
          </article>
          <article className="rounded-2xl border border-neutral-light bg-surface-card p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-heading">Long-term buyer relationships</h3>
            <p className="mt-2 text-sm text-foreground">
              Relationships built on consistency in quality, timelines, and execution structure.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
