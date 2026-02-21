"use client";

import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    title: "How does Klenses use this template?",
    content:
      "Klenses uses this starter to assemble website pages quickly, then tailors copy, visuals, and sections per project.",
  },
  {
    title: "What makes it fast to customize?",
    content:
      "The structure stays reusable while interaction logic is component-based, making updates predictable and low-risk.",
  },
  {
    title: "What quality level should new sites ship with?",
    content:
      "Every site should ship with accessible behavior, clear layout hierarchy, and subtle motion so launch quality is consistent.",
  },
];

export function InteractionDemo() {
  return (
    <section className="mx-auto mt-16 w-full max-w-[85rem] px-4 pb-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-zinc-900">Klenses Workflow Notes</h2>
        <p className="mt-2 text-zinc-600">
          Use this as a baseline for rapid delivery, then refine per brand without rebuilding
          core structure.
        </p>

        <div className="mt-6 space-y-3">
          {faqs.map((item) => (
            <Disclosure
              as="div"
              key={item.title}
              className="overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50"
            >
              {({ open }) => (
                <>
                  <DisclosureButton className="flex w-full items-center justify-between gap-4 px-4 py-3 text-left text-sm font-semibold text-zinc-900">
                    {item.title}
                    <motion.span
                      animate={{ rotate: open ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDownIcon className="h-5 w-5 text-zinc-500" />
                    </motion.span>
                  </DisclosureButton>

                  <AnimatePresence initial={false}>
                    {open ? (
                      <DisclosurePanel static as="div">
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="px-4 pb-4 text-sm text-zinc-600"
                        >
                          {item.content}
                        </motion.div>
                      </DisclosurePanel>
                    ) : null}
                  </AnimatePresence>
                </>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </section>
  );
}
