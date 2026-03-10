import { useState } from "react";
import { signup } from "../../services/auth-service";
import { useNavigate, Link } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await signup(form);
      navigate("/dashboard");
    } catch {
      setError("Something went wrong. Please check your details.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass = "w-full border p-3 rounded-lg bg-white dark:bg-slate-800 border-gray-200 dark:border-slate-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-slate-500 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-950 px-4 transition-colors duration-300">
      <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-slate-800 w-full max-w-md">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Join Job Tracker</h2>
          <p className="text-gray-500 dark:text-slate-400 mt-2">Start your journey to a new career</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-1">Full Name</label>
            <input 
              name="name" 
              placeholder="John Doe" 
              onChange={handleChange} 
              className={inputClass} 
              required 
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-1">Email Address</label>
            <input 
              name="email" 
              type="email"
              placeholder="name@example.com" 
              onChange={handleChange} 
              className={inputClass} 
              required 
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-1">Password</label>
            <input 
              type="password" 
              name="password" 
              placeholder="Choose a strong password" 
              onChange={handleChange} 
              className={inputClass} 
              required 
            />
          </div>

          {error && (
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 p-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          <button 
            disabled={loading}
            className="w-full bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white py-3 rounded-lg font-bold shadow-lg shadow-green-500/30 transition-all transform active:scale-[0.98]"
          >
            {loading ? "Creating Account..." : "Get Started"}
          </button>
        </form>

        <p className="text-center text-sm mt-6 text-gray-600 dark:text-slate-400">
          Already have an account? <Link to="/login" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">Log in</Link>
        </p>
      </div>
    </div>
  );
}