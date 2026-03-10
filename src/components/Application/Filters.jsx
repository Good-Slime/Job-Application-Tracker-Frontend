import { useState, useEffect } from "react";

const inputClass = "w-full border p-2.5 rounded-lg bg-white dark:bg-slate-800 border-gray-200 dark:border-slate-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-slate-500 focus:ring-2 focus:ring-blue-500 outline-none transition-all";

export default function Filters({ onFilter }) {
  const [form, setForm] = useState({
    status: "",
    company: "",
    search: ""
  });

  const change = (e) => {
    const { name, value } = e.target;
    const newForm = { ...form, [name]: value };
    setForm(newForm);

    if (name === "status") {
      onFilter(newForm);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      onFilter(form);
    }, 400);

    return () => clearTimeout(timeout);
  }, [form.company, form.search]);

  return (
    <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-800 grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
      <select 
        name="status" 
        value={form.status} 
        onChange={change} 
        className={inputClass}
      >
        <option value="">All Statuses</option>
        <option value="Applied">Applied</option>
        <option value="Interview">Interview</option>
        <option value="Offer">Offer</option>
        <option value="Rejected">Rejected</option>
      </select>

      <input
        name="company"
        placeholder="Filter by Company..."
        value={form.company}
        onChange={change}
        className={inputClass}
      />

      <input
        name="search"
        placeholder="Search role or notes..."
        value={form.search}
        onChange={change}
        className={inputClass}
      />
    </div>
  );
}