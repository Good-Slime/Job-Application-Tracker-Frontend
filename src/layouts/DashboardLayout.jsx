import NavBar from "../components/Navigation/NavBar";

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
      <NavBar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        {children}
      </main>
    </div>
  );
}