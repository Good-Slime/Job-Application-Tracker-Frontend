export default function SkeletonCard() {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-gray-100 dark:border-slate-800 p-5 animate-pulse">
      <div className="flex justify-between items-start gap-4">
        <div className="flex-1 space-y-3">
          <div className="h-5 bg-gray-200 dark:bg-slate-700 rounded w-3/4"></div>
          <div className="h-4 bg-gray-100 dark:bg-slate-800 rounded w-1/2"></div>
        </div>
        <div className="h-6 bg-gray-200 dark:bg-slate-700 rounded-full w-20"></div>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-y-4">
        <div className="space-y-2">
          <div className="h-3 bg-gray-100 dark:bg-slate-800 rounded w-1/2"></div>
          <div className="h-4 bg-gray-200 dark:bg-slate-700 rounded w-3/4"></div>
        </div>
        <div className="space-y-2">
          <div className="h-3 bg-gray-100 dark:bg-slate-800 rounded w-1/2"></div>
          <div className="h-4 bg-gray-200 dark:bg-slate-700 rounded w-3/4"></div>
        </div>
      </div>
      <div className="flex gap-4 mt-6 pt-2 border-t border-gray-50 dark:border-slate-800">
        <div className="h-4 bg-gray-200 dark:bg-slate-700 rounded w-12"></div>
        <div className="h-4 bg-gray-200 dark:bg-slate-700 rounded w-12"></div>
      </div>
    </div>
  );
}