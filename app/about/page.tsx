import { HomeIcon, SparklesIcon, WrenchScrewdriverIcon } from "@/components/icons";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-sky-50 to-white">
      <section className="mx-auto w-full max-w-[85rem] px-4 pt-20 sm:px-6 lg:px-8 lg:pt-24">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-x-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-700">
            About Klenses
          </span>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
            A reusable website foundation for fast delivery.
          </h1>
          <p className="mt-4 text-lg text-zinc-600">
            Klenses uses this template to launch polished websites quickly while keeping design
            consistency, accessibility, and maintainability across projects.
          </p>
        </div>
      </section>

      <section className="mx-auto mt-14 w-full max-w-[85rem] px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          <article className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <HomeIcon className="h-8 w-8 text-zinc-700" />
            <h2 className="mt-4 text-lg font-semibold text-zinc-900">Consistent Structure</h2>
            <p className="mt-2 text-sm text-zinc-600">
              Common sections and shared layout components keep every project aligned and easy to
              extend.
            </p>
          </article>

          <article className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <SparklesIcon className="h-8 w-8 text-zinc-700" />
            <h2 className="mt-4 text-lg font-semibold text-zinc-900">Accessible Interaction</h2>
            <p className="mt-2 text-sm text-zinc-600">
              Headless UI primitives provide reliable behavior, while the design layer remains
              fully customizable.
            </p>
          </article>

          <article className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <WrenchScrewdriverIcon className="h-8 w-8 text-zinc-700" />
            <h2 className="mt-4 text-lg font-semibold text-zinc-900">Smooth Motion</h2>
            <p className="mt-2 text-sm text-zinc-600">
              Framer Motion defaults add subtle transitions so new pages feel production-ready out
              of the box.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
