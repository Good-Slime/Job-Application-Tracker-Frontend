import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useApplications from "../../hooks/useApplications";
import ApplicationCard from "../../components/Application/ApplicationCard";
import ApplicationForm from "../../components/Application/ApplicationForm";
import Filters from "../../components/Application/Filters";
import KanbanBoard from "../../components/Application/KanbanBoard";
import StatsCards from "../../components/Application/StatsCards";
import DashboardLayout from "../../layouts/DashboardLayout";
import { logout } from "../../services/auth-service";

export default function Dashboard() {
  const { apps, create, remove, fetchApps } = useApplications();
  const navigate = useNavigate();
  const [view, setView] = useState("list");

  const handleLogout = async () => {
    await logout();
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <DashboardLayout onLogout={handleLogout}>
      <div className="flex flex-wrap gap-4 justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">My Applications</h2>
          <p className="text-gray-500 text-sm">Track and manage your job hunt</p>
        </div>

        <div className="flex bg-gray-200 p-1 rounded-lg">
          <button
            onClick={() => setView("list")}
            className={`px-4 py-1.5 rounded-md text-sm font-medium transition ${
              view === "list" ? "bg-white shadow" : "text-gray-600"
            }`}
          >
            List
          </button>
          <button
            onClick={() => setView("board")}
            className={`px-4 py-1.5 rounded-md text-sm font-medium transition ${
              view === "board" ? "bg-white shadow" : "text-gray-600"
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
        <ApplicationForm onSubmit={create} />
      </div>

      <div className="mt-10">
        {view === "list" ? (
          <div className="grid md:grid-cols-2 gap-6">
            {apps.map(app => (
              <ApplicationCard key={app._id} app={app} onDelete={remove} />
            ))}
            {apps.length === 0 && (
              <div className="col-span-full text-center py-12 text-gray-500">
                No applications yet
              </div>
            )}
          </div>
        ) : (
          <KanbanBoard apps={apps} />
        )}
      </div>
    </DashboardLayout>
  );
}



