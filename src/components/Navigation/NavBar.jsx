import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const navClass = (path) => 
    `px-3 py-2 rounded-lg text-sm font-medium transition-all ${
      isActive(path) 
        ? "bg-blue-600 text-white shadow-md" 
        : "text-gray-500 dark:text-slate-400 hover:bg-gray-100 dark:hover:bg-slate-800"
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-gray-100 dark:border-slate-800 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/dashboard" className="text-xl font-bold text-blue-600 hover:opacity-80 transition-opacity">
          JobTracker
        </Link>
        
        <div className="flex items-center gap-1 sm:gap-2">
          <Link to="/" className={navClass("/")}>Home</Link>
          <Link to="/dashboard" className={navClass("/dashboard")}>Dashboard</Link>
          <Link to="/analytics" className={navClass("/analytics")}>Analytics</Link>
          <Link to="/profile" className={navClass("/profile")}>Settings</Link>
        </div>
      </div>
    </nav>
  );
}