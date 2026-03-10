import React from "react";

export default function StatsCards({ apps = [] }) {
  const totalApps = apps.length;
  
  const interviewCount = apps.filter(app => app.status === "Interview").length;
  const offerCount = apps.filter(app => app.status === "Offer").length;
  const rejectedCount = apps.filter(app => app.status === "Rejected").length;

  const successRate = totalApps > 0 
    ? ((offerCount / totalApps) * 100).toFixed(1) 
    : "0.0";

  const stats = [
    { 
      label: "Total Applications", 
      value: totalApps, 
      icon: "📋",
      color: "text-blue-600 dark:text-blue-400", 
      bg: "bg-blue-50 dark:bg-blue-900/20",
      border: "border-blue-100 dark:border-blue-800"
    },
    { 
      label: "Interviews", 
      value: interviewCount, 
      icon: "🤝",
      color: "text-amber-600 dark:text-amber-400", 
      bg: "bg-amber-50 dark:bg-amber-900/20",
      border: "border-amber-100 dark:border-amber-800"
    },
    { 
      label: "Offers", 
      value: offerCount, 
      icon: "🎉",
      color: "text-emerald-600 dark:text-emerald-400", 
      bg: "bg-emerald-50 dark:bg-emerald-900/20",
      border: "border-emerald-100 dark:border-emerald-800"
    },
    { 
      label: "Success Rate", 
      value: `${successRate}%`, 
      icon: "📈",
      color: "text-purple-600 dark:text-purple-400", 
      bg: "bg-purple-50 dark:bg-purple-900/20",
      border: "border-purple-100 dark:border-purple-800"
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {stats.map((stat, index) => (
        <div 
          key={index} 
          className={`p-5 rounded-2xl border ${stat.border} ${stat.bg} shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98] duration-200`}
        >
          <div className="flex items-center justify-between">
            <span className="text-xl">{stat.icon}</span>
            <p className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-slate-400">
              {stat.label}
            </p>
          </div>
          <h3 className={`text-3xl font-extrabold mt-3 ${stat.color}`}>
            {stat.value}
          </h3>
        </div>
      ))}
    </div>
  );
}