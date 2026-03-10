import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-950 px-4">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-blue-600/20 dark:text-blue-500/10 tracking-tighter">
          404
        </h1>
        <div className="relative -mt-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Lost in Space?
          </h2>
          <p className="text-gray-500 dark:text-slate-400 mt-4 max-w-sm mx-auto">
            The page you are looking for doesn't exist or has been moved. Let's get you back to your career tracking.
          </p>
          <button
            onClick={() => navigate("/dashboard")}
            className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-blue-500/30 transition-all active:scale-95"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}