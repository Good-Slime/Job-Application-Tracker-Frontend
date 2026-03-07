export default function DashboardLayout({ children, onLogout }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow p-4 flex justify-between">
        <h1 className="font-bold text-lg">Job Tracker</h1>
        <button onClick={onLogout} className="text-red-600">
          Logout
        </button>
      </header>
      <main className="p-6 max-w-4xl mx-auto">{children}</main>
    </div>
  );
}