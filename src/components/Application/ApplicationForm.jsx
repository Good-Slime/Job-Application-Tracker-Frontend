import { useState } from "react";

export default function ApplicationForm({ onSubmit }) {
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

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(form);
    setForm({ company: "", role: "", location: "", salary: "", jobLink: "",status: "Applied" });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow space-y-3">
      <input name="company" placeholder="Company" onChange={handleChange} value={form.company} className="w-full border p-2 rounded" required />
      <input name="role" placeholder="Role" onChange={handleChange} value={form.role} className="w-full border p-2 rounded" required />
      <input name="location" placeholder="Location" onChange={handleChange} value={form.location} className="w-full border p-2 rounded" required />
      <input
        name="salary"
        placeholder="Salary (e.g. 12 LPA)"
        onChange={handleChange}
        value={form.salary}
        className="w-full border p-2 rounded"
        required
      />

      <input
        name="jobLink"
        placeholder="Job Link URL"
        onChange={handleChange}
        value={form.jobLink}
        className="w-full border p-2 rounded"
        required
      />

      <select name="status" onChange={handleChange} value={form.status} className="w-full border p-2 rounded">
        <option>Applied</option>
        <option>Interview</option>
        <option>Offer</option>
        <option>Rejected</option>
      </select>

      <button className="w-full bg-blue-600 text-white py-2 rounded">
        Add Application
      </button>
    </form>
  );
}