const websites = [
  { name: "Acorn Finance", status: "In Progress", owner: "Maya" },
  { name: "Northline Studio", status: "Review", owner: "Leo" },
  { name: "Sierra Labs", status: "Published", owner: "Ava" },
  { name: "Orbit Health", status: "Planning", owner: "Noah" },
];

export default function DashboardListPage() {
  return (
    <div>
      <p className="text-sm font-medium text-zinc-500">Projects</p>
      <h1 className="mt-1 text-3xl font-semibold text-zinc-900">Website List</h1>
      <p className="mt-3 text-zinc-600">
        Current website builds managed through the Klenses template workflow.
      </p>

      <div className="mt-8 overflow-hidden rounded-xl border border-zinc-200">
        <table className="w-full border-collapse text-left text-sm">
          <thead className="bg-zinc-100 text-zinc-700">
            <tr>
              <th className="px-4 py-3 font-semibold">Website</th>
              <th className="px-4 py-3 font-semibold">Status</th>
              <th className="px-4 py-3 font-semibold">Owner</th>
            </tr>
          </thead>
          <tbody>
            {websites.map((website) => (
              <tr key={website.name} className="border-t border-zinc-200 bg-white">
                <td className="px-4 py-3 text-zinc-900">{website.name}</td>
                <td className="px-4 py-3 text-zinc-600">{website.status}</td>
                <td className="px-4 py-3 text-zinc-600">{website.owner}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
