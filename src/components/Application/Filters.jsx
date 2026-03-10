import { useState } from "react";

const inputClass = "border p-2 rounded bg-white dark:bg-slate-800 border-gray-200 dark:border-slate-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-slate-500 focus:ring-2 focus:ring-blue-500 outline-none transition-colors"  ;

export default function Filters({ onFilter }) {
  const [form, setForm] = useState({});

  const change = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <div className="bg-white dark:bg-slate-900 p-4 rounded shadow grid md:grid-cols-4 gap-3">
      <select name="status" onChange={change} className={inputClass}>
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
        className={inputClass}
      />

      <input
        name="search"
        placeholder="Search role/notes"
        onChange={change}
        className={inputClass}
      />

      <button
        onClick={() => onFilter(form)}
        className={inputClass}
      >
        Apply
      </button>
    </div>
  );
}