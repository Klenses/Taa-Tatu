export function QualityComplianceControlsSection() {
  return (
    <section className="mx-auto w-full max-w-[85rem] px-4 pb-20 sm:px-6 lg:px-8">
      <div className="grid gap-4 md:grid-cols-2">
        <article className="rounded-2xl border border-neutral-light bg-surface-card p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-heading">Operational Controls</h2>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-foreground">
            <li>Supplier onboarding and verification</li>
            <li>Batch or lot visibility and production date confirmation</li>
            <li>Packaging integrity checks</li>
            <li>Clear product specifications: shelf life, storage, and case pack</li>
            <li>Photo or video verification on request</li>
          </ul>
        </article>
        <article className="rounded-2xl border border-neutral-light bg-surface-card p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-heading">Documentation Alignment</h2>
          <p className="mt-3 text-sm leading-6 text-foreground">
            Document sets are coordinated to match shipment terms and buyer clearance needs.
          </p>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-foreground">
            <li>Proforma Invoice and Commercial Invoice</li>
            <li>Packing List</li>
            <li>Certificate of Origin where required</li>
            <li>Bill of Lading or Airway Bill</li>
            <li>Insurance documentation if applicable</li>
          </ul>
        </article>
      </div>
    </section>
  );
}
