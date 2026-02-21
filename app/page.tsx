import { HomeIcon, SparklesIcon, WrenchScrewdriverIcon } from "@/components/icons";
import { InteractionDemo } from "@/components/home/interaction-demo";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-sky-50 to-white">
      <section className="mx-auto w-full max-w-[85rem] px-4 pt-20 sm:px-6 lg:px-8 lg:pt-24">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-x-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-700">
            Klenses Website Template
          </span>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
            Klenses
          </h1>
          <p className="mt-4 text-lg text-zinc-600">
            This template is used by Klenses to create websites fast,
            with reusable sections, accessible interactions, and smooth motion defaults.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              className="inline-flex items-center gap-x-2 rounded-lg border border-transparent bg-zinc-900 px-4 py-3 text-sm font-medium text-white hover:bg-zinc-800 focus:bg-zinc-800"
              href="#features"
            >
              View template sections
            </a>
            <a
              className="inline-flex items-center gap-x-2 rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-zinc-700 hover:bg-zinc-50 focus:bg-zinc-50"
              href="#interaction"
            >
              See interaction patterns
            </a>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto mt-14 w-full max-w-[85rem] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          <article className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <HomeIcon className="h-8 w-8 text-zinc-700" />
            <h2 className="mt-4 text-lg font-semibold text-zinc-900">Ready-Made Sections</h2>
            <p className="mt-2 text-sm text-zinc-600">
              Start with reusable hero, feature, and CTA blocks that Klenses can adapt per
              client in minutes.
            </p>
          </article>
          <article className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <SparklesIcon className="h-8 w-8 text-zinc-700" />
            <h2 className="mt-4 text-lg font-semibold text-zinc-900">Accessible Interaction</h2>
            <p className="mt-2 text-sm text-zinc-600">
              Keep interaction behavior accessible and consistent while staying fully in control
              of branding and styling.
            </p>
          </article>
          <article className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <WrenchScrewdriverIcon className="h-8 w-8 text-zinc-700" />
            <h2 className="mt-4 text-lg font-semibold text-zinc-900">Polished Motion Defaults</h2>
            <p className="mt-2 text-sm text-zinc-600">
              Ship subtle animation presets for entrances and state changes so every new site
              feels modern out of the box.
            </p>
          </article>
        </div>
      </section>

      <div id="interaction">
        <InteractionDemo />
      </div>
    </main>
  );
}
