const columns = ["Applied", "Interview", "Offer", "Rejected"];

export default function KanbanBoard({ apps }) {
  return (
    <div className="grid md:grid-cols-4 gap-4 mt-6">
      {columns.map(status => (
        <div key={status} className="bg-gray-100 p-3 rounded">
          <h3 className="font-semibold mb-2">{status}</h3>
          {apps
            .filter(a => a.status === status)
            .map(a => (
              <div key={a._id} className="bg-white p-2 rounded shadow mb-2">
                {a.role}
              </div>
            ))}
        </div>
      ))}
    </div>
  );
}