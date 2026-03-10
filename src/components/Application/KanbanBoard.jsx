const columns = ["Applied", "Interview", "Offer", "Rejected"];

const color = {
  Applied: "border-blue-200 dark:border-blue-900/50",
  Interview: "border-amber-200 dark:border-amber-900/50",
  Offer: "border-emerald-200 dark:border-emerald-900/50",
  Rejected: "border-rose-200 dark:border-rose-900/50"
};

export default function KanbanBoard({ apps }) {
  return (
    <div className="grid md:grid-cols-4 gap-6">
      {columns.map(status => {
        const list = apps.filter(a => a.status === status);
        return (
          <div 
            key={status} 
            className={`bg-gray-50 dark:bg-slate-900/50 border ${color[status]} rounded-xl p-4 transition-colors`}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-gray-900 dark:text-slate-100">{status}</h3>
              <span className="text-xs bg-white dark:bg-slate-800 text-gray-600 dark:text-slate-400 px-2 py-1 rounded-full border dark:border-slate-700">
                {list.length}
              </span>
            </div>

            <div className="space-y-3">
              {list.map(a => (
                <div 
                  key={a._id} 
                  className="bg-white dark:bg-slate-800 p-3 rounded-lg shadow-sm border border-gray-100 dark:border-slate-700 transition-colors"
                >
                  <p className="font-medium text-sm leading-tight text-gray-900 dark:text-slate-100">
                    {a.role}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-slate-400 truncate">
                    {a.company}
                  </p>
                </div>
              ))}

              {list.length === 0 && (
                <div className="text-xs text-gray-400 dark:text-slate-600 text-center py-4 border border-dashed border-gray-300 dark:border-slate-700 rounded-lg">
                  No cards
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}