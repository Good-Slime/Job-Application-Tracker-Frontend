import { Link } from "react-router-dom";
import { useMemo } from "react";

const COLUMNS = ["Applied", "Interview", "Offer", "Rejected"];

const columnStyles = {
  Applied: "border-blue-200 dark:border-blue-900/50 bg-blue-50/30 dark:bg-blue-950/10",
  Interview: "border-amber-200 dark:border-amber-900/50 bg-amber-50/30 dark:bg-amber-950/10",
  Offer: "border-emerald-200 dark:border-emerald-900/50 bg-emerald-50/30 dark:bg-emerald-950/10",
  Rejected: "border-rose-200 dark:border-rose-900/50 bg-rose-50/30 dark:bg-rose-950/10"
};

const indicatorStyles = {
  Applied: "bg-blue-500",
  Interview: "bg-amber-500",
  Offer: "bg-emerald-500",
  Rejected: "bg-rose-500"
};

export default function KanbanBoard({ apps = [] }) {
  const groupedApps = useMemo(() => {
    return COLUMNS.reduce((acc, status) => {
      acc[status] = apps.filter(a => a.status === status);
      return acc;
    }, {});
  }, [apps]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
      {COLUMNS.map(status => (
        <div 
          key={status} 
          className={`flex flex-col min-h-[500px] border rounded-2xl p-4 transition-colors ${columnStyles[status]}`}
        >
          <div className="flex justify-between items-center mb-5 px-1">
            <h3 className="font-bold text-gray-800 dark:text-slate-100 flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${indicatorStyles[status]}`} />
              {status}
            </h3>
            <span className="text-[10px] font-bold bg-white dark:bg-slate-800 text-gray-500 dark:text-slate-400 px-2 py-0.5 rounded-full border border-gray-100 dark:border-slate-700 shadow-sm">
              {groupedApps[status].length}
            </span>
          </div>

          <div className="space-y-3 flex-1">
            {groupedApps[status].map(app => (
              <Link
                to={`/applications/${app._id}/edit`}
                key={app._id} 
                className="group block bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-md transition-all active:scale-[0.98]"
              >
                <div className="flex flex-col gap-1">
                  <p className="font-bold text-sm text-gray-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight">
                    {app.role}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-slate-400 truncate font-medium">
                    {app.company}
                  </p>
                </div>
                
                <div className="mt-3 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                   <span className="text-[10px] text-gray-400 dark:text-slate-500 italic">View Details →</span>
                   <span className="text-[10px] font-semibold text-gray-600 dark:text-slate-300">{app.location}</span>
                </div>
              </Link>
            ))}

            {groupedApps[status].length === 0 && (
              <div className="flex flex-col items-center justify-center h-32 border-2 border-dashed border-gray-200 dark:border-slate-800 rounded-xl">
                <p className="text-[11px] font-medium text-gray-400 dark:text-slate-600 uppercase tracking-widest">
                  Empty
                </p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}