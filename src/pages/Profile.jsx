import { useNavigate } from "react-router-dom";
import useTheme from "../hooks/useTheme";
import useApplications from "../hooks/useApplications";
import DashboardLayout from "../layouts/DashboardLayout";
import { toastSuccess } from "../utils/Toast";

export default function Profile() {
  const { apps } = useApplications();
  const { isDark, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    toastSuccess("Logged out successfully! 👋");
    navigate("/login");
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto">
        <header className="mb-10">
          <h2 className="text-3xl font-bold tracking-tight">Account Settings</h2>
          <p className="text-gray-500 mt-2">Manage your profile and application preferences.</p>
        </header>

        <div className="space-y-8">
          <section className="bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-4 text-blue-600 dark:text-blue-400">Personal Information</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Full Name</label>
                <p className="text-gray-900 dark:text-white font-medium">Developer User</p>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Email Address</label>
                <p className="text-gray-900 dark:text-white font-medium">user@example.com</p>
              </div>
            </div>
          </section>

          <section className="bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-4 text-blue-600 dark:text-blue-400">Preferences</h3>
            <div className="flex items-center justify-between py-4">
              <div>
                <p className="font-medium">Dark Mode</p>
                <p className="text-sm text-gray-500">Enable a darker interface for eye comfort.</p>
              </div>
              <button 
                onClick={toggleTheme}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  isDark ? "bg-blue-600" : "bg-gray-200 dark:bg-slate-700"
                }`}
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isDark ? "translate-x-6" : "translate-x-1"
                }`} />
              </button>
            </div>
          </section>

          <section className="bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-4 text-blue-600 dark:text-blue-400">Activity Summary</h3>
            <div className="flex gap-8">
               <div>
                 <p className="text-3xl font-bold">{apps.length}</p>
                 <p className="text-xs text-gray-500 uppercase font-bold tracking-tighter">Apps Tracked</p>
               </div>
               <div className="w-px bg-gray-100 dark:bg-slate-800 h-12" />
               <div>
                 <p className="text-3xl font-bold text-emerald-500">
                   {apps.filter(a => a.status === 'Offer').length}
                 </p>
                 <p className="text-xs text-gray-500 uppercase font-bold tracking-tighter">Offers Received</p>
               </div>
            </div>
          </section>

          <section className="border-t border-rose-100 dark:border-rose-900/30 pt-8">
            <div className="bg-rose-50/50 dark:bg-rose-950/10 border border-rose-100 dark:border-rose-900/20 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-rose-600 mb-2">Danger Zone</h3>
              <p className="text-sm text-gray-600 dark:text-rose-300/60 mb-6">
                Ending your session will require you to log back in next time.
              </p>
              <button 
                onClick={handleLogout}
                className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-2.5 rounded-xl font-bold transition-all active:scale-95 shadow-lg shadow-rose-500/20"
              >
                Log Out
              </button>
            </div>
          </section>
        </div>
      </div>
    </DashboardLayout>
  );
}