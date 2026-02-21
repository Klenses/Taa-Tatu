"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Bars3Icon,
  MoonIcon,
  XMarkIcon,
} from "@/components/icons";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/services", label: "Services" },
  { href: "/quality-compliance", label: "Quality & Compliance" },
  { href: "/logistics", label: "Logistics" },
  { href: "/rfq", label: "RFQ" },
  { href: "/contact", label: "Contact" },
];

const THEME_STORAGE_KEY = "taatatu-theme";

export function Navbar() {
  const pathname = usePathname();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
    const nextTheme = savedTheme === "dark" ? "dark" : "light";
    document.documentElement.dataset.theme = nextTheme;
  }, []);

  const toggleTheme = () => {
    const currentTheme = document.documentElement.dataset.theme === "dark" ? "dark" : "light";
    const nextTheme = currentTheme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
  };

  return (
    <header className="inset-x-0 w-full border-b border-neutral-light bg-surface-card/95 text-sm backdrop-blur">
      <nav className="mx-auto flex w-full max-w-[85rem] items-center px-4 py-2.5 sm:px-6 lg:px-8">
        <div className="me-5">
          <Link
            className="inline-flex items-center gap-3 rounded-md text-xl font-semibold text-heading focus:outline-none focus:opacity-80"
            href="/"
            aria-label="TaaTatu Hub Limited"
          >
            <span className="relative block h-7 w-7">
              <span className="absolute inset-0 rounded-full bg-link" />
              <span className="absolute -left-2 top-1.5 h-3.5 w-3.5 rounded-full bg-accent-yellow" />
              <span className="absolute -right-2 top-1.5 h-3.5 w-3.5 rounded-full bg-accent-orange" />
            </span>
            <span className="leading-none">TaaTatu Hub Limited</span>
          </Link>
        </div>

        <div className="ml-auto flex w-full items-center justify-end gap-x-1 md:justify-between md:gap-x-3">
          <button
            type="button"
            className="inline-flex size-9.5 items-center justify-center rounded-full text-foreground md:hidden"
            aria-expanded={mobileNavOpen}
            aria-controls="taatatu-secondary-navbar"
            aria-label="Toggle navigation"
            onClick={() => setMobileNavOpen((prev) => !prev)}
          >
            {mobileNavOpen ? <XMarkIcon className="size-4" /> : <Bars3Icon className="size-4" />}
          </button>

          <div className="flex items-center justify-end gap-1">
            <button
              type="button"
              onClick={toggleTheme}
              className="inline-flex size-9.5 items-center justify-center rounded-full text-foreground hover:bg-surface-soft focus:bg-surface-soft focus:outline-none"
              aria-label="Toggle theme"
              title="Toggle theme"
            >
              <MoonIcon className="size-4" />
            </button>
          </div>
        </div>
      </nav>

      <div className="border-t border-neutral-light bg-surface-soft/40 md:py-4">
        <nav className="sticky top-0 z-40 relative mx-auto w-full max-w-[85rem] px-4 sm:px-6 lg:px-8">
          <div
            id="taatatu-secondary-navbar"
            className={`${mobileNavOpen ? "block" : "hidden"} overflow-hidden transition-all duration-300 md:block`}
          >
            <div className="flex max-h-[75vh] flex-col gap-y-0.5 overflow-y-auto py-2 md:max-h-none md:flex-row md:flex-wrap md:items-center md:gap-x-6 md:gap-y-2 md:py-0">
              {navItems.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileNavOpen(false)}
                    className={`py-2 text-sm font-medium transition-colors focus:outline-none md:py-0 ${
                      isActive ? "text-link" : "text-foreground hover:text-link"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
