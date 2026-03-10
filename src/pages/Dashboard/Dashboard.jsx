import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useApplications from "../../hooks/useApplications";
import ApplicationCard from "../../components/Application/ApplicationCard";
import ApplicationForm from "../../components/Application/ApplicationForm";
import Filters from "../../components/Application/Filters";
import KanbanBoard from "../../components/Application/KanbanBoard";
import StatsCards from "../../components/Application/StatsCards";
import DashboardLayout from "../../layouts/DashboardLayout";
import SkeletonCard from "../../components/UI/SkeletonCard";
import { logout } from "../../services/auth-service";
import { toastSuccess, toastError, toastWarning } from "../../utils/Toast";

export default function Dashboard() {
  const { apps, create, remove, fetchApps, loading } = useApplications();
  const navigate = useNavigate();
  const [view, setView] = useState("list");

  const handleLogout = async () => {
    try {
      await logout();
      localStorage.removeItem("token");
      toastSuccess("Logged out successfully! 👋");
      navigate("/login");
    } catch (error) {
      toastError("Something went wrong during logout.");
    }
  };

  const handleCreateApplication = async (data) => {
    try {
      await create(data);
      toastSuccess(`Added ${data.company} Application! 🚀`);
    } catch (error) {
      toastError("Failed to create application.");
    }
  };

  const handleDeleteApplication = async (id, companyName) => {
    try {
      await remove(id);
      toastWarning(`Removed ${companyName || ''} Application.`);
    } catch (error) {
      toastError("Could not delete. Please try again.");
    }
  };

  return (
    <DashboardLayout onLogout={handleLogout}>
      <div className="flex flex-wrap gap-4 justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">My Applications</h2>
          <p className="text-gray-500 text-sm">Track and manage your job hunt</p>
        </div>

        <div className="flex bg-gray-200 dark:bg-slate-800 p-1 rounded-lg">
          <button
            onClick={() => setView("list")}
            className={`px-4 py-1.5 rounded-md text-sm font-medium transition ${
              view === "list" ? "bg-white dark:bg-slate-700 shadow text-gray-900 dark:text-white" : "text-gray-600 dark:text-slate-400"
            }`}
          >
            List
          </button>
          <button
            onClick={() => setView("board")}
            className={`px-4 py-1.5 rounded-md text-sm font-medium transition ${
              view === "board" ? "bg-white dark:bg-slate-700 shadow text-gray-900 dark:text-white" : "text-gray-600 dark:text-slate-400"
            }`}
          >
            Board
          </button>
        </div>
      </div>

      <StatsCards apps={apps} />

      <div className="mt-8">
        <Filters onFilter={fetchApps} />
      </div>

      <div className="mt-8">
        <ApplicationForm onSubmit={handleCreateApplication} />
      </div>

      <div className="mt-10">
        {loading ? (
          <div className="grid md:grid-cols-2 gap-6">
            {[...Array(4)].map((_, i) => <SkeletonCard key={i} />)}
          </div>
        ) : (
          <>
            {view === "list" ? (
              <div className="grid md:grid-cols-2 gap-6">
                {apps.map((app) => (
                  <ApplicationCard 
                    key={app._id} 
                    app={app} 
                    onDelete={() => handleDeleteApplication(app._id, app.company)} 
                  />
                ))}
                {apps.length === 0 && (
                  <div className="col-span-full text-center py-12 text-gray-500 border-2 border-dashed border-gray-200 dark:border-slate-800 rounded-xl">
                    No applications yet. Time to hit Apply!
                  </div>
                )}
              </div>
            ) : (
              <KanbanBoard apps={apps} />
            )}
          </>
        )}
      </div>
    </DashboardLayout>
  );
}