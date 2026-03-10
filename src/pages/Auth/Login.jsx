import { useState } from "react";
import { login } from "../../services/auth-service";
import { useNavigate, Link } from "react-router-dom";
import { toastSuccess , toastError } from "../../utils/Toast";
import Spinner from "../../components/UI/Spinner"; 

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await login(form);
      localStorage.setItem("token", res.data.token);
      toastSuccess("Logged in successfully");
      navigate("/dashboard");
    } catch (err) {
      toastError("Invalid email or password. Please try again.");      
      setError("Invalid email or password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass = "w-full border p-3 rounded-lg bg-white dark:bg-slate-800 border-gray-200 dark:border-slate-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-slate-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-950 px-4 transition-colors duration-300">
      <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-slate-800 w-full max-w-md">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Welcome Back</h2>
          <p className="text-gray-500 dark:text-slate-400 mt-2">Log in to track your career progress</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-1">Email Address</label>
            <input 
              name="email" 
              type="email"
              placeholder="name@company.com" 
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
              placeholder="••••••••" 
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
            className="w-full flex items-center justify-center bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-3 rounded-lg font-bold shadow-lg shadow-blue-500/30 transition-all transform active:scale-[0.98]"
          >
            {loading ? <Spinner size="h-5 w-5" /> : "Login"}
          </button>
        </form>

        <p className="text-center text-sm mt-6 text-gray-600 dark:text-slate-400">
          New here? <Link to="/signup" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">Create an account</Link>
        </p>
      </div>
    </div>
  );
}