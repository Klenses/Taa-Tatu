import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Export-Ready African Products",
  description:
    "Explore export-ready African beverages and long shelf-life FMCG designed for reliable distribution, compliance readiness, and repeat demand.",
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="mx-auto w-full max-w-[85rem] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-link">Products</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-heading sm:text-5xl">
          Export-Ready African Products
        </h1>
        <p className="mt-5 max-w-3xl text-lg text-foreground">
          We focus on categories that perform in real distribution environments: durable shelf
          life, stable transit handling, and repeat demand across wholesale and retail channels.
        </p>
      </section>

      <section className="mx-auto w-full max-w-[85rem] px-4 pb-8 sm:px-6 lg:px-8">
        <article className="rounded-2xl border border-neutral-light bg-surface-card p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-semibold text-heading">Non-Alcoholic Beverages</h2>
          <p className="mt-4 text-sm leading-7 text-foreground">
            Our non-alcoholic beverage portfolio is built for buyers who need velocity products
            that can move consistently through import, warehousing, and retail distribution.
            Sub-categories include ready-to-drink beverages, juice blends, concentrates and syrups,
            powdered drink mixes, and functional or wellness beverages where applicable. We work
            with manufacturers that can support repeat production cycles and maintain stable product
            quality, not one-off opportunistic loads. For professional importers, this matters
            because beverage programs succeed through repeatability: same taste profile, same pack
            presentation, and predictable fill and seal consistency.
          </p>
          <p className="mt-4 text-sm leading-7 text-foreground">
            Beverage exports also require stronger packaging discipline than many dry categories.
            We prioritize case pack configurations, bottle or can integrity, pallet behavior, and
            carton durability so products can survive handling stress from factory dispatch to
            destination receiving. We align with buyers on required pack sizes and retail readiness
            before orders are finalized, reducing costly repacking or relabeling after arrival. Our
            approach treats packaging as a commercial and logistics decision, not just a branding
            layer.
          </p>
          <p className="mt-4 text-sm leading-7 text-foreground">
            Compliance readiness is integrated into category planning. Destination markets may
            require specific label structures, allergen declarations, language formats, and
            nutritional panel standards. We coordinate with buyers and suppliers to capture these
            expectations early, so approved SKUs reach shipment with less clearance risk. Where
            required, we also support product specification sharing, shelf-life visibility, and
            storage condition alignment to help procurement teams and regulators evaluate products
            with confidence.
          </p>
          <p className="mt-4 text-sm leading-7 text-foreground">
            Operationally, beverages are often part of broader multi-SKU buying programs, so we
            support consolidated shipment planning where feasible. This helps buyers optimize
            container economics while protecting handling standards for each SKU format. The result
            is a beverage category offer designed for practical trade outcomes: stable in transit,
            commercially clear, and built for repeat replenishment.
          </p>
        </article>
      </section>

      <section className="mx-auto w-full max-w-[85rem] px-4 pb-8 sm:px-6 lg:px-8">
        <article className="rounded-2xl border border-neutral-light bg-surface-card p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-semibold text-heading">
            Long Shelf-Life FMCG &amp; Food Products
          </h2>
          <p className="mt-4 text-sm leading-7 text-foreground">
            Our long shelf-life FMCG focus is built around products that can remain commercially
            strong across longer inventory cycles. Core sub-categories include dry goods such as
            grains, flours, and pulses; condiments including sauces, spices, marinades, and
            seasonings; canned or processed shelf-stable foods; and snacks and staples designed for
            modern trade channels. These are categories where buyer confidence depends on stability:
            products must hold quality in storage, maintain packaging integrity, and support
            distribution through wholesale and retail without frequent write-offs.
          </p>
          <p className="mt-4 text-sm leading-7 text-foreground">
            We screen supply opportunities through an export practicality lens, not just product
            variety. For procurement teams, the real value is finding products that combine demand
            potential with predictable execution. That means clear specifications, credible shelf
            life, disciplined labeling, and packaging configured for transport and handling. We
            align carton standards, case pack logic, and product coding details to help avoid
            downstream problems like mixed documentation, unclear batch visibility, or mismatch
            between ordered and delivered formats.
          </p>
          <p className="mt-4 text-sm leading-7 text-foreground">
            This category is particularly suitable for consolidated programs because buyers can
            combine complementary SKUs into efficient shipment plans. We support this through
            structured planning around quantities, packing profiles, and dispatch sequencing.
            Combined with documentation coordination, this reduces procurement fragmentation and
            helps buyers scale assortment without sacrificing control. For regional distribution and
            cross-border movement, consistency in coding, date visibility, and carton marking is a
            key part of trade confidence.
          </p>
          <p className="mt-4 text-sm leading-7 text-foreground">
            From a commercial standpoint, long shelf-life FMCG is strongest when managed as a
            repeat program rather than irregular purchasing. Our model is designed to support that
            approach with clearer production alignment, shipment visibility, and documentation flow
            tied to buyer Incoterms and clearance expectations. The objective is straightforward:
            stable products, reduced trade friction, and predictable restocking cycles.
          </p>
        </article>
      </section>

      <section className="mx-auto w-full max-w-[85rem] px-4 pb-20 sm:px-6 lg:px-8">
        <article className="rounded-2xl border border-neutral-light bg-surface-card p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-heading">Private Label (Where Applicable)</h2>
          <p className="mt-3 text-sm leading-6 text-foreground">
            Private label or OEM programs are supported for qualified buyers and committed volumes,
            with specification alignment, packaging coordination, and rollout planning based on
            market requirements.
          </p>
        </article>

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
