export default function StatsCards({ apps }) {
  const count = s => apps.filter(a => a.status === s).length;

  const stats = [
    ["Applied", count("Applied")],
    ["Interview", count("Interview")],
    ["Offer", count("Offer")],
    ["Rejected", count("Rejected")]
  ];

  return (
    <div className="grid md:grid-cols-4 gap-4">
      {stats.map(([label, value]) => (
        <div key={label} className="bg-white p-4 rounded shadow">
          <p className="text-sm text-gray-500">{label}</p>
          <p className="text-xl font-bold">{value}</p>
        </div>
      ))}
    </div>
  );
}