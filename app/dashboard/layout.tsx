import Link from "next/link";

const navItems = [
  { href: "/dashboard", label: "Overview" },
  { href: "/dashboard/list", label: "List" },
];

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="mx-auto w-full max-w-[90rem] px-4 py-10 sm:px-6 lg:px-8">
      <div className="grid gap-6 lg:grid-cols-[240px_1fr]">
        <aside className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5 text-zinc-100 shadow-sm">
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Klenses Dashboard</p>
          <h2 className="mt-2 text-xl font-semibold">Workspace</h2>
          <nav className="mt-6 flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-200 transition-colors hover:bg-zinc-800 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>

        <main className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
          {children}
        </main>
      </div>
    </section>
  );
}
