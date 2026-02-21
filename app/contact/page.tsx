import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="mx-auto w-full max-w-[85rem] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-link">Contact</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-heading sm:text-5xl">
          Talk to the Trade Team
        </h1>
        <p className="mt-5 max-w-3xl text-lg text-foreground">
          Reach us directly for active trade discussions, supply planning, and formal export
          inquiries.
        </p>
      </section>

      <section className="mx-auto w-full max-w-[85rem] px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-neutral-light bg-surface-card p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-heading">Direct Contact Information</h2>
            <div className="mt-4 space-y-2 text-sm text-foreground">
              <p>
                <span className="font-semibold text-heading">Email:</span> trade@taatatuhub.com
              </p>
              <p>
                <span className="font-semibold text-heading">Phone:</span> +254 700 000 000
              </p>
              <p>
                <span className="font-semibold text-heading">Office Hours:</span> Monday to Friday,
                08:00 - 17:00 EAT
              </p>
            </div>
          </article>
          <article className="rounded-2xl border border-neutral-light bg-surface-card p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-heading">Trade Inquiry Route</h2>
            <p className="mt-3 text-sm leading-6 text-foreground">
              For structured buyer requests, send product scope, destination country, target
              volume, and timeline through our RFQ channel.
            </p>
            <Link
              href="/rfq"
              className="mt-5 inline-flex items-center rounded-lg bg-button-secondary-bg px-5 py-3 text-sm font-semibold text-button-secondary-fg transition-colors hover:bg-accent-orange"
            >
              Open RFQ Form
            </Link>
          </article>
        </div>
      </section>
    </main>
  );
}
