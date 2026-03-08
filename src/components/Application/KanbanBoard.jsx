const columns = ["Applied", "Interview", "Offer", "Rejected"];

const color = {
  Applied: "border-blue-200",
  Interview: "border-amber-200",
  Offer: "border-emerald-200",
  Rejected: "border-rose-200"
};

export default function KanbanBoard({ apps }) {
  return (
    <div className="grid md:grid-cols-4 gap-6">
      {columns.map(status => {
        const list = apps.filter(a => a.status === status);
        return (
          <div key={status} className={`bg-gray-50 border ${color[status]} rounded-xl p-4`}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold">{status}</h3>
              <span className="text-xs bg-white px-2 py-1 rounded-full border">
                {list.length}
              </span>
            </div>

            <div className="space-y-3">
              {list.map(a => (
                <div key={a._id} className="bg-white p-3 rounded-lg shadow-sm border border-gray-100">
                  <p className="font-medium text-sm leading-tight">{a.role}</p>
                  <p className="text-xs text-gray-500 truncate">{a.company}</p>
                </div>
              ))}

              {list.length === 0 && (
                <div className="text-xs text-gray-400 text-center py-4 border border-dashed rounded-lg">
                  No cards
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}


