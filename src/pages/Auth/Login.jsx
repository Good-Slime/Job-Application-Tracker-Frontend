import { useState } from "react";
import { login } from "../../services/auth-service";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await login(form);
      navigate("/dashboard");
    } catch (err) {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow w-full max-w-md">
        <h2 className="text-xl font-bold mb-6">Login</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input name="email" placeholder="Email" onChange={handleChange} className="w-full border p-2 rounded" required />
          <input type="password" name="password" placeholder="Password" onChange={handleChange} className="w-full border p-2 rounded" required />

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button className="w-full bg-blue-600 text-white py-2 rounded">Login</button>
        </form>

        <p className="text-sm mt-4">
          No account? <Link to="/signup" className="text-blue-600">Signup</Link>
        </p>
      </div>
    </div>
  );
}