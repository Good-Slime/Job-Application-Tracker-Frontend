import { useState } from "react";
import Spinner from "../UI/Spinner.jsx";

const inputClass = "w-full border p-2 rounded bg-white dark:bg-slate-800 border-gray-200 dark:border-slate-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-slate-500 focus:ring-2 focus:ring-blue-500 outline-none transition-colors";

export default function ApplicationForm({ onSubmit }) {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    company: "",
    role: "",
    location: "",
    salary: "",
    jobLink: "",
    status: "Applied"
  });

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit =  async (e) => {
    e.preventDefault();
    setLoading(true);
    await onSubmit(form);
    setLoading(false);
    setForm({ company: "", role: "", location: "", salary: "", jobLink: "",status: "Applied" });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-900 p-4 rounded shadow space-y-3">
      <input name="company" placeholder="Company" onChange={handleChange} value={form.company} className={inputClass} required />
      <input name="role" placeholder="Role" onChange={handleChange} value={form.role} className={inputClass} required />
      <input name="location" placeholder="Location" onChange={handleChange} value={form.location} className={inputClass} required />
      <input
        name="salary"
        placeholder="Salary (e.g. 12 LPA)"
        onChange={handleChange}
        value={form.salary}
        className={inputClass}
        required
      />

      <input
        name="jobLink"
        placeholder="Job Link URL"
        onChange={handleChange}
        value={form.jobLink}
        className={inputClass}
        required
      />

      <select name="status" onChange={handleChange} value={form.status} className={inputClass}>
        <option>Applied</option>
        <option>Interview</option>
        <option>Offer</option>
        <option>Rejected</option>
      </select>

      <button className="w-full bg-blue-600 text-white py-2 rounded" type = "submit" disabled={loading}>
        {loading ? <>
        <Spinner size = "h-5 w-5"/>
        <span>Adding...</span>
         </>: "Add Application"}
      </button >
    </form>
  );
}