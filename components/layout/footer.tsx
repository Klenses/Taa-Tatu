import Link from "next/link";

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  {
    href: "mailto:trade@taatatuhub.com",
    label: "Email",
    path: "M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-.5a.5.5 0 0 0-.316.887L8 9.5l6.316-5.113A.5.5 0 0 0 14 3.5H2zm13 1.652L8.629 10.32a1 1 0 0 1-1.258 0L1 5.152V12a.5.5 0 0 0 .5.5h13A.5.5 0 0 0 15 12V5.152z",
  },
];

export function Footer() {
  return (
    <footer className="mt-auto mx-auto w-full max-w-[85rem] border-t border-neutral-light py-10 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 items-center gap-5 md:grid-cols-3">
        <div>
          <Link
            className="text-xl font-semibold text-heading focus:outline-none"
            href="/"
            aria-label="TaaTatu Hub Limited"
          >
            TaaTatu Hub Limited
          </Link>
        </div>

        <ul className="text-center">
          {footerLinks.map((item) => (
            <li
              key={item.href}
              className="relative inline-block pe-8 before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:content-['/'] before:text-foreground/40 last:pe-0 last-of-type:before:hidden"
            >
              <Link
                className="inline-flex gap-x-2 text-sm text-foreground/80 hover:text-heading focus:outline-none focus:text-heading"
                href={item.href}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="space-x-2 md:text-end">
          {socialLinks.map((item) => (
            <a
              key={item.label}
              className="inline-flex size-8 items-center justify-center rounded-full text-foreground/75 hover:bg-surface-soft hover:text-heading focus:bg-surface-soft focus:outline-none"
              href={item.href}
              aria-label={item.label}
            >
              <svg
                className="size-3.5 shrink-0"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d={item.path} />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
