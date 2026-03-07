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
  const [view, setView] = useState("list"); // list | board

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <DashboardLayout onLogout={handleLogout}>
      <div className="flex flex-wrap gap-3 justify-between items-center mb-6">
        <h2 className="text-xl font-bold">My Applications</h2>

        <div className="flex gap-2">
          <button
            onClick={() => setView("list")}
            className={`px-3 py-1 rounded ${
              view === "list" ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
          >
            List
          </button>

          <button
            onClick={() => setView("board")}
            className={`px-3 py-1 rounded ${
              view === "board" ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
          >
            Board
          </button>
        </div>
      </div>

      <StatsCards apps={apps} />

      <div className="mt-6">
        <Filters onFilter={fetchApps} />
      </div>

      <div className="mt-6">
        <ApplicationForm onSubmit={create} />
      </div>

      <div className="mt-8">
        {view === "list" ? (
          <div className="grid gap-4">
            {apps.map(app => (
              <ApplicationCard
                key={app._id}
                app={app}
                onDelete={remove}
              />
            ))}
            {apps.length === 0 && (
              <p className="text-gray-500">No applications yet.</p>
            )}
          </div>
        ) : (
          <KanbanBoard apps={apps} />
        )}
      </div>
    </DashboardLayout>
  );
}