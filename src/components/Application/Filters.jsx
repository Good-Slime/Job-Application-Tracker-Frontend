import { useState } from "react";

export default function Filters({ onFilter }) {
  const [form, setForm] = useState({});

  const change = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <div className="bg-white p-4 rounded shadow grid md:grid-cols-4 gap-3">
      <select name="status" onChange={change} className="border p-2 rounded">
        <option value="">All Status</option>
        <option>Applied</option>
        <option>Interview</option>
        <option>Offer</option>
        <option>Rejected</option>
      </select>

      <input
        name="company"
        placeholder="Company"
        onChange={change}
        className="border p-2 rounded"
      />

      <input
        name="search"
        placeholder="Search role/notes"
        onChange={change}
        className="border p-2 rounded"
      />

      <button
        onClick={() => onFilter(form)}
        className="bg-blue-600 text-white rounded"
      >
        Apply
      </button>
    </div>
  );
}