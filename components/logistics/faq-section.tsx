type FaqItem = {
  question: string;
  answer: string;
};

type LogisticsFaqSectionProps = {
  items: FaqItem[];
};

export function LogisticsFaqSection({ items }: LogisticsFaqSectionProps) {
  return (
    <section className="mx-auto w-full max-w-[85rem] px-4 pb-20 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-semibold text-heading sm:text-3xl">Logistics FAQ</h2>
      <div className="mt-4 space-y-3">
        {items.map((item) => (
          <article
            key={item.question}
            className="rounded-xl border border-neutral-light bg-surface-card px-4 py-3"
          >
            <h3 className="text-sm font-semibold text-heading">{item.question}</h3>
            <p className="mt-1 text-sm text-foreground">{item.answer}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
