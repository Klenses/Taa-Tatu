import Link from "next/link";

export function HomeHeroSection() {
  return (
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
              TaaTatu Hub Limited is an African FMCG exporter and African beverage supplier
              connecting Africa&apos;s leading non-alcoholic beverages and long shelf-life FMCG to
              global importers and intra-African buyers through structured sourcing, documentation
              coordination, and shipment execution.
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
  );
}
