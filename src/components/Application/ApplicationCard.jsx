import { Link } from "react-router-dom";

export default function ApplicationCard({ app, onDelete }) {
  const badge = {
    Applied: "bg-blue-100 text-blue-700",
    Interview: "bg-amber-100 text-amber-700",
    Offer: "bg-emerald-100 text-emerald-700",
    Rejected: "bg-rose-100 text-rose-700"
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:shadow-md transition">
      <div className="flex justify-between items-start gap-4">
        <div>
          <h3 className="font-semibold text-lg leading-tight">
            {app.role}
          </h3>
          <p className="text-gray-600">{app.company}</p>
        </div>
        <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${badge[app.status]}`}>
          {app.status}
        </span>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-y-2 text-sm">
        <p className="text-gray-500">Location</p>
        <p className="font-medium">{app.location}</p>

        <p className="text-gray-500">Salary</p>
        <p className="font-medium">{app.salary}</p>

        <p className="text-gray-500">Job Link</p>
        <a href={app.jobLink} target="_blank" className="text-blue-600 hover:underline truncate">
          View Posting
        </a>
      </div>

      <div className="flex gap-4 mt-5">
        <Link
          to={`/applications/${app._id}/edit`}
          className="text-sm font-medium text-blue-600 hover:underline"
        >
          Edit
        </Link>
        <button
          onClick={() => onDelete(app._id)}
          className="text-sm font-medium text-rose-600 hover:underline"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
