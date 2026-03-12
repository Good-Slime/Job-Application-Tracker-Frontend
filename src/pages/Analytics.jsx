import useApplications from "../hooks/useApplications";
import StatsCards from "../components/Application/StatsCards";
import DashboardLayout from "../layouts/DashboardLayout";

export default function Analytics() {
  const { apps, loading } = useApplications();

  const getCount = (status) => apps.filter(a => a.status === status).length;
  
  const statusData = [
    { label: "Applied", count: getCount("Applied"), color: "bg-blue-500" },
    { label: "Interviews", count: getCount("Interview"), color: "bg-amber-500" },
    { label: "Offers", count: getCount("Offer"), color: "bg-emerald-500" },
    { label: "Rejected", count: getCount("Rejected"), color: "bg-rose-500" },
  ];

  const total = apps.length || 1; 

  return (
    <DashboardLayout>
      <div className="mb-10">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Career Insights</h2>
        <p className="text-gray-500 mt-2">A data-driven deep dive into your job hunt funnel.</p>
      </div>

      {loading ? (
        <div className="space-y-8 animate-pulse">
          <div className="grid grid-cols-4 gap-4 h-32 bg-slate-200 dark:bg-slate-800 rounded-2xl" />
          <div className="h-64 bg-slate-200 dark:bg-slate-800 rounded-2xl" />
        </div>
      ) : (
        <div className="space-y-8">
          <StatsCards apps={apps} />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-8 rounded-3xl shadow-sm">
              <h3 className="text-lg font-bold mb-6">Application Pipeline</h3>
              <div className="space-y-6">
                {statusData.map((item) => (
                  <div key={item.label}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium text-slate-600 dark:text-slate-400">{item.label}</span>
                      <span className="font-bold">{item.count}</span>
                    </div>
                    <div className="w-full bg-slate-100 dark:bg-slate-800 h-3 rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${item.color} transition-all duration-1000`} 
                        style={{ width: `${(item.count / total) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-8 rounded-3xl text-white shadow-xl shadow-blue-500/20 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2">Search Momentum</h3>
                <p className="text-blue-100 text-sm leading-relaxed">
                  {apps.length > 0 
                    ? "Your pipeline is active! Keep the momentum high by aiming for 2-3 more applications this week."
                    : "Your tracker is empty. Let's start by adding your first application to see the magic happen!"}
                </p>
              </div>
              
              <div className="mt-8 pt-8 border-t border-white/10">
                <div className="text-4xl font-black italic opacity-50 mb-1">GOAL</div>
                <p className="text-xs uppercase tracking-[0.2em] font-bold">Land 1 Offer</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}