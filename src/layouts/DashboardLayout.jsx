import useTheme from "../hooks/useTheme";

export default function DashboardLayout({ children, onLogout }) {
  const { dark, setDark } = useTheme();

  return (
    <div className="min-h-screen w-full bg-gray-50 dark:bg-slate-950 transition-colors">
      <header className="bg-white dark:bg-slate-900 shadow-sm p-4 flex justify-between items-center border-b dark:border-slate-800">
        <h1 className="font-bold text-lg text-gray-900 dark:text-white">
          Job Tracker
        </h1>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setDark(prev => !prev)}
            className="p-2 rounded-lg bg-gray-100 dark:bg-slate-800 text-xl hover:ring-2 ring-blue-500 transition-all"
            aria-label="Toggle Dark Mode"
          >
            {dark ? "☀️" : "🌙"}
          </button>

          <button
            onClick={onLogout}
            className="font-medium text-red-600 dark:text-red-400 hover:underline"
          >
            Logout
          </button>
        </div>
      </header>

      <main className="p-6 max-w-4xl mx-auto">
        <div className="text-gray-900 dark:text-gray-100">
          {children}
        </div>
      </main>
    </div>
  );
}