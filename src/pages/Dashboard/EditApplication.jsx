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
            .catch(err => console.error(err));
    }, [id]);

    const change = e =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const submit = async e => {
        e.preventDefault();
        await updateApplication(id, form);
        navigate("/dashboard");
    };

    if (!form) return "Loading...";

    return (
        <form onSubmit={submit} className="p-6 max-w-lg mx-auto space-y-3">
            <input
                name="company"
                value={form.company || ""}
                onChange={change}
                className="border p-2 w-full"
                placeholder="Company name"
            />

            <input
                name="role"
                value={form.role || ""}
                onChange={change}
                className="border p-2 w-full"
                placeholder="Job role"
            />

            <input
                name="location"
                value={form.location || ""}
                onChange={change}
                className="border p-2 w-full"
                placeholder="Location"
            />

            <input
                name="salary"
                placeholder="Salary (e.g. 12 LPA)"
                onChange={change}
                value={form.salary || ""}
                className="w-full border p-2 rounded"
            />

            <input
                name="jobLink"
                placeholder="Job Link URL"
                onChange={change}
                value={form.jobLink || ""}
                className="w-full border p-2 rounded"
            />
            <select
                name="status"
                value={form.status || "Applied"}
                onChange={change}
                className="border p-2 w-full"
            >
                <option>Applied</option>
                <option>Interview</option>
                <option>Offer</option>
                <option>Rejected</option>
            </select>

            <button className="bg-blue-600 text-white px-4 py-2 rounded">
                Save Changes
            </button>
        </form>
    );
}