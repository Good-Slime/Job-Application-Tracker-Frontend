import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { updateApplication, getApplicationById } from "../../services/application-service";
import { toastError , toastSuccess } from "../../utils/Toast";
import Spinner from "../../components/UI/Spinner"; 

export default function EditApplication() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState(null);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    getApplicationById(id)
      .then(res => setForm(res.data))
      .catch(err => {
        toastError("Failed to load application details.");
        console.error(err);
      });
  }, [id]);

  const change = e => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async e => {
    e.preventDefault();
    setIsSaving(true);
    try {
      await updateApplication(id, form);
      toastSuccess("Application updated successfully");
      navigate("/dashboard");
    } catch (err) {
      toastError("Unable to Update Application. Please try again.");
      console.error(err);
    } finally {
      setIsSaving(false);
    }
  };

  if (!form)
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-gray-500 dark:text-slate-400">
        <Spinner size="h-10 w-10" className="text-blue-600 mb-4" /> 
        <div className="animate-pulse">Fetching details...</div>
      </div>
    );

  const inputClass = "w-full border p-2.5 rounded-lg bg-white dark:bg-slate-800 border-gray-200 dark:border-slate-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-slate-500 focus:ring-2 focus:ring-blue-500 outline-none transition-all";

  return (
    <div className="max-w-xl mx-auto px-4 py-8">
      <div className="bg-white dark:bg-slate-900 shadow-xl border border-gray-100 dark:border-slate-800 rounded-2xl p-8 transition-colors">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Edit Application</h2>
          <p className="text-sm text-gray-500 dark:text-slate-400">Modify your job details below</p>
        </div>

        <form onSubmit={submit} className="space-y-4">
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700 dark:text-slate-300">Company</label>
            <input name="company" value={form.company || ""} onChange={change} className={inputClass} placeholder="e.g. Google" />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700 dark:text-slate-300">Role</label>
            <input name="role" value={form.role || ""} onChange={change} className={inputClass} placeholder="e.g. Frontend Engineer" />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700 dark:text-slate-300">Location</label>
            <input name="location" value={form.location || ""} onChange={change} className={inputClass} placeholder="e.g. Remote" />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700 dark:text-slate-300">Salary</label>
            <input name="salary" value={form.salary || ""} onChange={change} className={inputClass} placeholder="e.g. 12 LPA" />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700 dark:text-slate-300">Job Link URL</label>
            <input name="jobLink" value={form.jobLink || ""} onChange={change} className={inputClass} placeholder="https://..." />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700 dark:text-slate-300">Status</label>
            <select name="status" value={form.status || "Applied"} onChange={change} className={inputClass}>
              <option>Applied</option>
              <option>Interview</option>
              <option>Offer</option>
              <option>Rejected</option>
            </select>
          </div>

          <div className="flex items-center gap-3 pt-4 border-t dark:border-slate-800 mt-6">
            <button 
              disabled={isSaving}
              className="flex-1 flex items-center justify-center bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-5 py-2.5 rounded-lg font-bold shadow-lg shadow-blue-500/20 transition-all active:scale-[0.98]"
            >
              {isSaving ? <Spinner size="h-5 w-5" /> : "Save Changes"}
            </button>
            <button 
              type="button" 
              onClick={() => navigate(-1)} 
              className="px-5 py-2.5 rounded-lg border border-gray-200 dark:border-slate-700 text-gray-700 dark:text-slate-300 font-medium hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}