import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import Dashboard from "./pages/Dashboard/Dashboard";
import EditApplication from "./pages/Dashboard/EditApplication";
import Analytics from "./pages/Analytics";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

// Auth Gatekeepers - REMOVED curly braces and fixed folder casing to "Auth"
import ProtectedRoute from "./components/Auth/ProtectedRoute"; 
import PublicRoute from "./components/Auth/PublicRoute";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<Home />} />

        {/* Auth Routes (Guest Only) */}
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>

        {/* Protected App Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/applications/:id/edit" element={<EditApplication />} />
        </Route>

        {/* 404 handler */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}