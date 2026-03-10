import { useState } from "react"; 
import { Link } from "react-router-dom";
import Spinner from "../UI/Spinner.jsx"; 

export default function ApplicationCard({ app, onDelete }) {
  const [isDeleting, setIsDeleting] = useState(false);

  const badge = {
    Applied: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
    Interview: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
    Offer: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300",
    Rejected: "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300"
  };

  const handleDelete = async () => {
    setIsDeleting(true);
    await onDelete(app._id);
  };

  return (
    <div className={`bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-gray-100 dark:border-slate-800 p-5 transition-all ${isDeleting ? 'opacity-50 grayscale' : ''}`}>
      <div className="flex justify-between items-start gap-4">
        <div>
          <h3 className="font-semibold text-lg leading-tight text-gray-900 dark:text-white">{app.role}</h3>
          <p className="text-gray-600 dark:text-slate-400">{app.company}</p>
        </div>
        <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${badge[app.status]}`}>
          {app.status}
        </span>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-y-2 text-sm">
        <p className="text-gray-500 dark:text-slate-500">Location</p>
        <p className="font-medium dark:text-slate-200">{app.location}</p>
        <p className="text-gray-500 dark:text-slate-500">Salary</p>
        <p className="font-medium dark:text-slate-200">{app.salary}</p>
      </div>

      <div className="flex gap-4 mt-5">
        <Link to={`/applications/${app._id}/edit`} className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline">
          Edit
        </Link>
        <button 
          onClick={handleDelete} 
          disabled={isDeleting}
          className="flex items-center gap-1 text-sm font-medium text-rose-600 dark:text-rose-400 hover:underline disabled:no-underline"
        >
          {isDeleting && <Spinner size="h-3 w-3" />}
          {isDeleting ? "Deleting..." : "Delete"}
        </button>
      </div>
    </div>
  );
}