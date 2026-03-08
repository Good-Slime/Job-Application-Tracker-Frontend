import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { updateApplication, getApplicationById } from "../../services/application-service";

export default function EditApplication() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState(null);

  useEffect(() => {
    getApplicationById(id)
      .then(res => setForm(res.data))
      .catch(console.error);
  }, [id]);

  const change = e => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async e => {
    e.preventDefault();
    await updateApplication(id, form);
    navigate("/dashboard");
  };

  if (!form)
    return (
      <div className="max-w-xl mx-auto py-20 text-center text-gray-500">
        Loading application...
      </div>
    );

  return (
    <div className="max-w-xl mx-auto">
      <div className="bg-white shadow-sm border border-gray-100 rounded-2xl p-8">
        <h2 className="text-xl font-bold mb-1">Edit Application</h2>
        <p className="text-sm text-gray-500 mb-6">Update your job details</p>

        <form onSubmit={submit} className="space-y-4">
          <input name="company" value={form.company || ""} onChange={change} className="w-full border p-2.5 rounded-lg" placeholder="Company name" />
          <input name="role" value={form.role || ""} onChange={change} className="w-full border p-2.5 rounded-lg" placeholder="Job role" />
          <input name="location" value={form.location || ""} onChange={change} className="w-full border p-2.5 rounded-lg" placeholder="Location" />
          <input name="salary" value={form.salary || ""} onChange={change} className="w-full border p-2.5 rounded-lg" placeholder="Salary (e.g. 12 LPA)" />
          <input name="jobLink" value={form.jobLink || ""} onChange={change} className="w-full border p-2.5 rounded-lg" placeholder="Job Link URL" />

          <select name="status" value={form.status || "Applied"} onChange={change} className="w-full border p-2.5 rounded-lg">
            <option>Applied</option>
            <option>Interview</option>
            <option>Offer</option>
            <option>Rejected</option>
          </select>

          <div className="flex gap-3 pt-2">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-medium">
              Save Changes
            </button>
            <button type="button" onClick={() => navigate(-1)} className="px-5 py-2 rounded-lg border font-medium">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
