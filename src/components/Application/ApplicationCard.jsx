import { Link } from "react-router-dom";


export default function ApplicationCard({ app, onDelete }) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="font-semibold">
        {app.role} @ {app.company}
      </h3>
      <p className="text-sm text-gray-600">Status: {app.status}</p>
      <p className="text-sm text-gray-600">Location: {app.location}</p>

      <Link to={`/applications/${app._id}/edit`} className="text-blue-600 text-sm">
        Edit
      </Link>

      <button
        onClick={() => onDelete(app._id)}
        className="mt-2 text-red-600 text-sm"
      >
        Delete
      </button>
    </div>
  );
}