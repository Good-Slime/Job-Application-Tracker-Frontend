export default function StatsCards({ apps }) {
  const count = s => apps.filter(a => a.status === s).length;
  const stats = [["Applied", count("Applied")], ["Interview", count("Interview")], ["Offer", count("Offer")], ["Rejected", count("Rejected")]];

  return (
    <div className="grid md:grid-cols-4 gap-4">
      {stats.map(([label, value]) => (
        <div key={label} className="bg-white dark:bg-slate-900 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-slate-800">
          <p className="text-sm text-gray-500 dark:text-slate-500">{label}</p>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">{value}</p>
        </div>
      ))}
    </div>
  );
}