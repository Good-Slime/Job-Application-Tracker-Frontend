import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950 transition-colors">
      <nav className="p-6 flex justify-between items-center max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-blue-600">JobTracker.pro</h1>
        <div className="space-x-4">
          <Link to="/login" className="text-sm font-semibold text-gray-600 dark:text-slate-400">Log in</Link>
          <Link to="/signup" className="bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-bold shadow-lg shadow-blue-500/20">Get Started</Link>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto text-center pt-24 pb-16 px-4">
        <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
          The #1 Career Companion
        </span>
        <h2 className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white mt-8 tracking-tight">
          Track Jobs. <span className="text-blue-600">Land Offers.</span>
        </h2>
        <p className="text-xl text-gray-500 dark:text-slate-400 mt-6 max-w-2xl mx-auto">
          Stop using messy spreadsheets. Organize your job search with a professional Kanban board and real-time analytics.
        </p>
        
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/signup" className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-xl text-lg font-bold shadow-xl shadow-blue-500/30 transition-all active:scale-95">
            Start Tracking for Free
          </Link>
          <Link to="/login" className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 px-10 py-4 rounded-xl text-lg font-bold transition-all hover:bg-gray-50 dark:hover:bg-slate-800">
            View My Dashboard
          </Link>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Kanban Board", desc: "Visualize your progress from Applied to Offer." },
            { title: "Smart Analytics", desc: "See your conversion rates and stay motivated." },
            { title: "Safe & Secure", desc: "Your career data is encrypted and private." }
          ].map((feature, i) => (
            <div key={i} className="p-8 bg-white dark:bg-slate-900 rounded-3xl border border-gray-100 dark:border-slate-800 shadow-sm">
              <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-500 dark:text-slate-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}