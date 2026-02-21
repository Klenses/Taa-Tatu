const stats = [
  { label: "Active Projects", value: "12" },
  { label: "Pages Published", value: "48" },
  { label: "Avg. Launch Time", value: "3.2 days" },
];

export default function DashboardPage() {
  return (
    <div>
      <p className="text-sm font-medium text-zinc-500">Overview</p>
      <h1 className="mt-1 text-3xl font-semibold text-zinc-900">Dashboard</h1>
      <p className="mt-3 text-zinc-600">
        Track progress across Klenses website builds and monitor delivery performance.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {stats.map((stat) => (
          <article key={stat.label} className="rounded-xl border border-zinc-200 bg-zinc-50 p-4">
            <p className="text-sm text-zinc-600">{stat.label}</p>
            <p className="mt-2 text-2xl font-semibold text-zinc-900">{stat.value}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
