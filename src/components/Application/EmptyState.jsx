export default function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 bg-white dark:bg-slate-900 border-2 border-dashed border-gray-200 dark:border-slate-800 rounded-3xl transition-colors">
      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-full mb-6">
        <svg 
          className="h-12 w-12 text-blue-600 dark:text-blue-400" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="1.5" 
            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
          />
        </svg>
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center">
        No applications yet
      </h3>
      <p className="text-gray-500 dark:text-slate-400 text-center mt-2 max-w-xs">
        Your job hunt is a journey. Start tracking your applications to see your progress here!
      </p>
      <div className="mt-8 flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold animate-bounce">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
        <span>Add your first job below</span>
      </div>
    </div>
  );
}